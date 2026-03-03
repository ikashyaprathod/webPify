/**
 * videoWorker.js – Smart Adaptive FFmpeg.wasm Web Worker
 *
 * Encoding strategy:
 *  - Two-pass H.264 for MP4 > 20 MB with target bitrate
 *  - Single-pass ABR or CRF for smaller files / WebM
 *  - -preset slow / -profile:v high / -level:v 4.2 / -pix_fmt yuv420p
 *  - -maxrate + -bufsize (VBV) for ABR paths
 *  - -threads 0 (auto) on all H.264 encodes
 *  - Smart resolution: auto-scale to 1920 max width
 *  - Size guard: never return a file larger than the original
 *
 * Message protocol
 *  Main → Worker : { type: "compress", id, file, settings }
 *  Worker → Main : { type: "progress",        id, pct }
 *                  { type: "done",             id, buffer, fmt, alreadyOptimized }
 *                  { type: "error",            id, message }
 */

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const FFMPEG_CORE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

// Cached blob URLs survive releaseFF() – no re-download between files
let coreURL = null;
let wasmURL = null;
let ff      = null;

async function ensureFF() {
  if (ff) return;
  if (!coreURL) {
    [coreURL, wasmURL] = await Promise.all([
      toBlobURL(`${FFMPEG_CORE}/ffmpeg-core.js`,   "text/javascript"),
      toBlobURL(`${FFMPEG_CORE}/ffmpeg-core.wasm`, "application/wasm"),
    ]);
  }
  ff = new FFmpeg();
  await ff.load({ coreURL, wasmURL });
}

function releaseFF() {
  try { ff?.terminate(); } catch { /* ignore */ }
  ff = null;
}

async function safeDelete(...names) {
  for (const n of names) try { await ff.deleteFile(n); } catch { /* ignore */ }
}

// ── Resolution / filter string ─────────────────────────────────────────────
function resFilter(s) {
  // smartRes: auto-scale to 1920 max width (set by main thread when w > 1920)
  if (s.smartRes) return `scale=${s.smartRes}:flags=lanczos`;
  // effRes: user-selected resolution or aggressive 720p
  if (s.effRes)   return `scale=${s.effRes}:force_original_aspect_ratio=decrease:flags=lanczos`;
  return null;
}

// ── Two-pass H.264 (MP4 only, files > 20 MB, target bitrate) ──────────────
async function execTwoPass(inName, outName, s) {
  const passlog    = `pl_${s.id}`;
  const rf         = resFilter(s);
  const filterArgs = rf ? ["-vf", rf] : [];
  const maxrate    = `${s.targetBitrateKbps}k`;
  const bufsize    = `${s.targetBitrateKbps * 2}k`;

  const baseVideo = [
    "-c:v",        "libx264",
    "-b:v",        maxrate,
    "-maxrate",    maxrate,
    "-bufsize",    bufsize,
    "-preset",     "slow",
    "-profile:v",  "high",
    "-level:v",    "4.2",
    "-pix_fmt",    "yuv420p",
    "-threads",    "0",
    "-passlogfile", passlog,
  ];

  // Pass 1 – stats only, no audio, discard output
  await ff.exec([
    "-y", "-i", inName,
    ...baseVideo, ...filterArgs,
    "-pass", "1", "-an", "-f", "null", "-",
  ]);

  // Pass 2 – full encode with audio
  const audioArgs = s.noAudio
    ? ["-an"]
    : ["-c:a", "aac", "-b:a", "128k"];

  await ff.exec([
    "-y", "-i", inName,
    ...baseVideo, ...filterArgs,
    "-pass", "2",
    ...audioArgs,
    "-movflags", "+faststart",
    outName,
  ]);

  await safeDelete(`${passlog}-0.log`, `${passlog}-0.log.mbtree`);
}

// ── Single-pass (MP4 or WebM, CRF or ABR) ─────────────────────────────────
async function execSinglePass(inName, outName, s) {
  const rf   = resFilter(s);
  const args = ["-y", "-i", inName];

  if (s.fmt === "webm") {
    // VP9 path
    const vpxSpeed = s.sp === "ultrafast" ? "8" : s.sp === "slow" ? "2" : "4";
    args.push("-c:v", "libvpx-vp9");
    if (s.targetBitrateKbps > 0) {
      args.push("-b:v", `${s.targetBitrateKbps}k`);
    } else {
      args.push("-crf", String(s.crf), "-b:v", "0");
    }
    args.push("-cpu-used", vpxSpeed, "-row-mt", "1");
  } else {
    // H.264 path
    const preset = s.targetBitrateKbps > 0
      ? "slow"                                          // ABR → always slow for better accuracy
      : (s.sp === "ultrafast" ? "ultrafast"             // CRF → respect user speed choice
        : s.sp === "slow" ? "slow" : "veryfast");

    args.push("-c:v", "libx264");

    if (s.targetBitrateKbps > 0) {
      const maxrate = `${s.targetBitrateKbps}k`;
      const bufsize = `${s.targetBitrateKbps * 2}k`;
      args.push("-b:v", maxrate, "-maxrate", maxrate, "-bufsize", bufsize);
    } else {
      args.push("-crf", String(s.crf));
    }

    args.push(
      "-preset",    preset,
      "-profile:v", "high",
      "-level:v",   "4.2",
      "-pix_fmt",   "yuv420p",
      "-threads",   "0",
    );
  }

  if (rf)    args.push("-vf", rf);
  if (s.agg) args.push("-r", "30");

  if (s.noAudio) {
    args.push("-an");
  } else if (s.fmt === "webm") {
    args.push("-c:a", "libopus", "-b:a", "128k");
  } else {
    args.push("-c:a", "aac", "-b:a", "128k");
  }

  if (s.agg)          args.push("-map_metadata", "-1");
  if (s.fmt === "mp4") args.push("-movflags", "+faststart");

  args.push(outName);
  await ff.exec(args);
}

// ── Message handler ────────────────────────────────────────────────────────
self.onmessage = async ({ data: { type, id, file, settings } }) => {
  if (type !== "compress") return;

  // Safety: main thread should have caught skip cases, but guard here too
  if (settings.skip) {
    const empty = new ArrayBuffer(0);
    self.postMessage(
      { type: "done", id, buffer: empty, fmt: settings.fmt, alreadyOptimized: true },
      [empty],
    );
    return;
  }

  try {
    await ensureFF();

    const ext     = file.name.includes(".") ? file.name.slice(file.name.lastIndexOf(".")) : ".mp4";
    const inName  = `in_${id}${ext}`;
    const outName = `out_${id}.${settings.fmt}`;

    const onProg = ({ progress: p }) =>
      self.postMessage({ type: "progress", id, pct: Math.round(Math.min(p, 1) * 100) });
    ff.on("progress", onProg);

    await ff.writeFile(inName, await fetchFile(file));

    // Choose encoding path
    if (settings.twoPass && settings.fmt !== "webm" && settings.targetBitrateKbps > 0) {
      await execTwoPass(inName, outName, { ...settings, id });
    } else {
      await execSinglePass(inName, outName, settings);
    }

    const raw = await ff.readFile(outName);
    ff.off("progress", onProg);
    await safeDelete(inName, outName);
    releaseFF();

    // Size guard: never return a file larger than the original
    if (raw.byteLength >= file.size) {
      const empty = new ArrayBuffer(0);
      self.postMessage(
        { type: "done", id, buffer: empty, fmt: settings.fmt, alreadyOptimized: true },
        [empty],
      );
      return;
    }

    const buffer = raw.slice().buffer;
    self.postMessage(
      { type: "done", id, buffer, fmt: settings.fmt, alreadyOptimized: false },
      [buffer],
    );

  } catch (err) {
    releaseFF();
    self.postMessage({ type: "error", id, message: err.message || "Compression failed" });
  }
};
