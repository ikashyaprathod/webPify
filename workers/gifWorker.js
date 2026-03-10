/**
 * gifWorker.js – FFmpeg.wasm Web Worker for GIF operations
 *
 * Supports:
 *  - gif-compress  : Re-encode GIF with palettegen for smaller file size
 *  - gif-to-mp4    : Convert GIF to H.264 MP4
 *  - gif-to-webm   : Convert GIF to VP9 WebM
 *  - video-to-gif  : Convert video (MP4/WebM/MOV) to optimized GIF
 *
 * Message protocol
 *  Main → Worker : { type: "convert", id, file, settings }
 *  Worker → Main : { type: "progress", id, pct }
 *                  { type: "done",     id, buffer, fmt, alreadyOptimized }
 *                  { type: "error",    id, message }
 */

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const FFMPEG_CORE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

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

self.onmessage = async ({ data: { type, id, file, settings } }) => {
  if (type !== "convert") return;

  try {
    await ensureFF();

    const ext     = file.name.includes(".") ? file.name.slice(file.name.lastIndexOf(".")) : ".gif";
    const inName  = `gin_${id}${ext}`;
    const { task, fps = 15, scale = 480, maxColors = 128, quality = 20 } = settings;

    const outExt  = task === "gif-to-mp4" ? "mp4" : task === "gif-to-webm" ? "webm" : "gif";
    const outName = `gout_${id}.${outExt}`;

    const onProg = ({ progress: p }) =>
      self.postMessage({ type: "progress", id, pct: Math.round(Math.min(p, 1) * 100) });
    ff.on("progress", onProg);

    await ff.writeFile(inName, await fetchFile(file));

    if (task === "gif-to-mp4") {
      // Scale to even dimensions required by H.264
      await ff.exec([
        "-y", "-i", inName,
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=lanczos",
        "-c:v", "libx264",
        "-crf", String(quality),
        "-preset", "slow",
        "-profile:v", "high",
        "-level:v", "4.2",
        "-pix_fmt", "yuv420p",
        "-an",
        "-movflags", "+faststart",
        outName,
      ]);

    } else if (task === "gif-to-webm") {
      await ff.exec([
        "-y", "-i", inName,
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=lanczos",
        "-c:v", "libvpx-vp9",
        "-crf", String(quality + 10),
        "-b:v", "0",
        "-pix_fmt", "yuv420p",
        "-an",
        outName,
      ]);

    } else if (task === "video-to-gif") {
      // Two-pass palettegen for best quality GIF
      await ff.exec([
        "-y", "-i", inName,
        "-vf", `fps=${fps},scale=${scale}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=${maxColors}[p];[b][p]paletteuse=dither=bayer`,
        "-loop", "0",
        outName,
      ]);

    } else {
      // gif-compress: re-encode GIF with palette optimisation
      await ff.exec([
        "-y", "-i", inName,
        "-vf", `fps=${fps},scale=${scale}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=${maxColors}[p];[b][p]paletteuse=dither=bayer`,
        "-loop", "0",
        outName,
      ]);
    }

    const raw = await ff.readFile(outName);
    ff.off("progress", onProg);
    await safeDelete(inName, outName);
    releaseFF();

    // Size guard: only for gif-compress (not format conversions)
    if (task === "gif-compress" && raw.byteLength >= file.size) {
      const empty = new ArrayBuffer(0);
      self.postMessage(
        { type: "done", id, buffer: empty, fmt: outExt, alreadyOptimized: true },
        [empty],
      );
      return;
    }

    const buffer = raw.slice().buffer;
    self.postMessage(
      { type: "done", id, buffer, fmt: outExt, alreadyOptimized: false },
      [buffer],
    );

  } catch (err) {
    releaseFF();
    self.postMessage({ type: "error", id, message: err.message || "Conversion failed" });
  }
};
