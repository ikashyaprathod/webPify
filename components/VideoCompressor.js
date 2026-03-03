"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const MAX_FILE_SIZE  = 500  * 1024 * 1024;        // 500 MB per file
const MAX_TOTAL_SIZE = 1.5  * 1024 * 1024 * 1024; // 1.5 GB per session

const SPEED_PRESETS = {
  ultrafast: { label: "Ultra Fast",      ffpreset: "ultrafast" },
  balanced:  { label: "Balanced",        ffpreset: "veryfast"  },
  slow:      { label: "Max Compression", ffpreset: "slow"      },
};

const QUALITY_PRESETS = {
  high:    { label: "High Quality", crfOffset: -2 },
  balanced:{ label: "Balanced",     crfOffset:  0 },
  maximum: { label: "Maximum",      crfOffset:  4 },
};

const RESOLUTIONS = [
  { label: "Original", value: "" },
  { label: "1080p",    value: "1920:1080" },
  { label: "720p",     value: "1280:720"  },
  { label: "480p",     value: "854:480"   },
  { label: "360p",     value: "640:360"   },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function uid() { return Math.random().toString(36).slice(2, 9); }

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

/**
 * Analyze video: resolution, duration, estimated bitrate, and codec.
 *
 * Codec detection uses the VideoTracks API (Chrome/Edge) with a file
 * extension heuristic fallback for Firefox and other browsers.
 */
async function analyzeVideo(file) {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.preload = "metadata";

    v.onloadedmetadata = () => {
      const res      = { w: v.videoWidth, h: v.videoHeight };
      const duration = v.duration || 0;
      const estimatedBitrateKbps = duration > 0
        ? Math.round((file.size * 8) / (duration * 1000))
        : 0;

      // Codec detection via VideoTracks API (Chrome/Edge)
      let codec = "unknown";
      try {
        const tracks = v.videoTracks;
        if (tracks && tracks.length > 0) {
          const raw = (tracks[0].codec || "").toLowerCase();
          if      (raw.startsWith("avc1") || raw.startsWith("avc3") || raw === "h264") codec = "h264";
          else if (raw.startsWith("hvc1") || raw.startsWith("hev1"))                   codec = "hevc";
          else if (raw.startsWith("vp09") || raw.startsWith("vp9"))                    codec = "vp9";
          else if (raw.startsWith("vp8"))                                               codec = "vp8";
          else if (raw.startsWith("av01"))                                              codec = "av1";
          else if (raw)                                                                 codec = raw;
        }
      } catch { /* API unavailable in this browser */ }

      // Extension-based heuristic fallback
      if (codec === "unknown") {
        const lower = file.name.toLowerCase();
        if      (lower.endsWith(".mp4") || lower.endsWith(".mov") || lower.endsWith(".m4v")) codec = "h264";
        else if (lower.endsWith(".webm"))                                                     codec = "vp9";
      }

      URL.revokeObjectURL(v.src);
      resolve({ res, duration, estimatedBitrateKbps, fileSize: file.size, codec });
    };

    v.onerror = () => resolve({
      res: null, duration: 0, estimatedBitrateKbps: 0,
      fileSize: file.size, codec: "unknown",
    });

    v.src = URL.createObjectURL(file);
  });
}

function getDynamicCRF(res, qualityKey, aggressive) {
  const offset = aggressive ? 7 : (QUALITY_PRESETS[qualityKey]?.crfOffset ?? 0);
  let base = 26;
  if (res) {
    const px = res.w * res.h;
    if      (px >= 3840 * 2160) base = 22;
    else if (px >= 1920 * 1080) base = 24;
    else if (px >= 1280 *  720) base = 26;
    else                         base = 28;
  }
  return Math.min(51, Math.max(0, base + offset));
}

/**
 * Smart Adaptive Mode: compute per-file encoding settings.
 *
 * Skip condition (no re-encode):
 *   codec is H.264 AND bitrate < 2.5 Mbps AND output format is MP4
 *   → return original, show "Already optimized"
 *
 * Target bitrate:
 *   ≥ 2500 kbps → 65% of original
 *   < 2500 kbps → 85% of original (or CRF if < 10% reduction possible)
 *   Never allow target > original bitrate
 *
 * Two-pass H.264 for MP4 > 20 MB with valid target bitrate.
 * Smart resolution: auto-scale to 1920px wide if source is wider.
 */
function computeSmartSettings(analysis, snap) {
  const { res, estimatedBitrateKbps, fileSize, codec } = analysis;
  const { fmt, sp, ql, noAudio, agg } = snap;

  // ── Skip: already H.264, low bitrate, targeting MP4 output ─────────────
  if (
    codec === "h264" &&
    estimatedBitrateKbps > 0 &&
    estimatedBitrateKbps < 2500 &&
    fmt === "mp4" &&
    !agg
  ) {
    return { skip: true, fmt };
  }

  // ── Smart resolution ─────────────────────────────────────────────────────
  const smartRes = (!snap.res && res && res.w > 1920) ? "1920:-2" : null;
  const effRes   = agg && !snap.res ? "1280:720" : snap.res || null;

  // ── Target bitrate ───────────────────────────────────────────────────────
  let targetBitrateKbps = 0;
  if (estimatedBitrateKbps >= 2500) {
    targetBitrateKbps = Math.round(estimatedBitrateKbps * 0.65);
  } else if (estimatedBitrateKbps > 0) {
    targetBitrateKbps = Math.round(estimatedBitrateKbps * 0.85);
  }

  // Apply quality preset modifier (±15%)
  const qualMod = { high: 0.15, balanced: 0, maximum: -0.15 }[ql] ?? 0;
  if (targetBitrateKbps > 0) {
    targetBitrateKbps = Math.round(targetBitrateKbps * (1 + qualMod));
  }

  // Clamp: never allow output bitrate > original
  if (estimatedBitrateKbps > 0 && targetBitrateKbps > estimatedBitrateKbps) {
    targetBitrateKbps = estimatedBitrateKbps;
  }

  // CRF fallback if reduction would be < 10% (little to gain from ABR)
  const reduction = estimatedBitrateKbps > 0
    ? 1 - targetBitrateKbps / estimatedBitrateKbps
    : 0;
  if (reduction < 0.10) targetBitrateKbps = 0;

  // ── Two-pass for MP4 > 20 MB with a valid target bitrate ────────────────
  const twoPass = fmt !== "webm"
    && fileSize > 20 * 1024 * 1024
    && targetBitrateKbps > 0
    && !agg;

  const crf      = getDynamicCRF(res, ql, agg);
  const audioBit = agg ? "64k" : "128k";

  return {
    skip: false,
    fmt,
    sp:  twoPass ? "slow" : (sp || "balanced"),
    crf,
    targetBitrateKbps,
    smartRes,
    effRes,
    twoPass,
    audioBit,
    noAudio: noAudio || false,
    agg:     agg     || false,
  };
}

/**
 * Dynamic worker count based on CPU core count.
 *   cores <= 4  → 2 workers
 *   cores 5–7   → 3 workers
 *   cores >= 8  → 4 workers
 *   cores >= 12 → 6 workers
 * Maximum is always capped; never unlimited.
 */
function getMaxWorkers() {
  if (typeof navigator === "undefined") return 2;
  const cores = navigator.hardwareConcurrency || 4;
  if (cores >= 12) return 6;
  if (cores >= 8)  return 4;
  if (cores <= 4)  return 2;
  return 3;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function VideoCompressor({
  allowedFormats = ["video/mp4", "video/webm", "video/quicktime"],
  formatName     = null,
  title          = "Video Compressor – Reduce Video File Size Online",
  description    = "Compress MP4, MOV, and WebM videos in your browser. Bulk upload, no server, 100% private.",
}) {
  // ── Queue & settings ────────────────────────────────────────────────────
  const [queue, setQueue]             = useState([]);
  const [outFmt, setOutFmt]           = useState("mp4");
  const [speed, setSpeed]             = useState("balanced");
  const [quality, setQuality]         = useState("balanced");
  const [resolution, setResolution]   = useState("");
  const [removeAudio, setRemoveAudio] = useState(false);
  const [aggressive, setAggressive]   = useState(false);
  const [showAdv, setShowAdv]         = useState(false);

  // ── Processing UI ────────────────────────────────────────────────────────
  const [processing, setProcessing]   = useState(false);
  const [overallPct, setOverallPct]   = useState(0);
  const [workerCount, setWorkerCount] = useState(0);
  const [globalErr, setGlobalErr]     = useState("");

  // ── Preview ──────────────────────────────────────────────────────────────
  const [previewId, setPreviewId]               = useState(null);
  const [previewCompressed, setPreviewCompressed] = useState(false);

  // ── Refs ─────────────────────────────────────────────────────────────────
  const fileInput      = useRef(null);
  const cancelRef      = useRef(false);
  const poolRef        = useRef(null);
  /** Active worker ceiling – reduced by CPU lag monitor */
  const activeMaxRef   = useRef(0);
  /** setInterval handle for CPU lag detection */
  const lagMonitorRef  = useRef(null);

  // ── Derived values ───────────────────────────────────────────────────────
  const pendingCount = queue.filter(i => i.status === "pending").length;
  const doneItems    = queue.filter(i => i.status === "done");
  const doneCount    = doneItems.length;
  const totalOrig    = queue.reduce((s, i) => s + i.origSize, 0);
  const totalComp    = doneItems.reduce((s, i) => s + (i.outSize ?? 0), 0);
  const batchSaving  = doneCount === queue.length && queue.length > 0 && totalComp > 0
    ? Math.round((1 - totalComp / totalOrig) * 100) : null;
  const previewItem  = previewId ? queue.find(i => i.id === previewId) : null;

  // ── Stable patch helper ──────────────────────────────────────────────────
  const patchItem = useCallback((id, patch) => {
    setQueue(prev => prev.map(it => it.id === id ? { ...it, ...patch } : it));
  }, []);

  // ── Terminate all workers + stop lag monitor ──────────────────────────────
  const terminatePool = useCallback(() => {
    if (lagMonitorRef.current) {
      clearInterval(lagMonitorRef.current);
      lagMonitorRef.current = null;
    }
    if (!poolRef.current) return;
    poolRef.current.workers.forEach(w => { try { w?.terminate(); } catch { /* ignore */ } });
    poolRef.current = null;
    setWorkerCount(0);
  }, []);

  useEffect(() => () => terminatePool(), [terminatePool]);

  // ── Add files to queue ───────────────────────────────────────────────────
  const addFiles = useCallback((fileList) => {
    setGlobalErr("");
    const files = Array.from(fileList);
    const items = [], errs = [];

    for (const file of files) {
      const valid = allowedFormats.includes(file.type) ||
                    file.name.toLowerCase().endsWith(".mov");
      if (!valid) {
        errs.push(formatName
          ? `${file.name}: only ${formatName} files accepted`
          : `${file.name}: unsupported format`);
        continue;
      }
      if (file.size > MAX_FILE_SIZE) { errs.push(`${file.name}: exceeds 500 MB`); continue; }

      items.push({
        id: uid(), file,
        status: "pending", progress: 0,
        origSize: file.size, detRes: null,
        outBlob: null, outSize: null, reduction: null, error: null,
        origUrl: URL.createObjectURL(file),
      });
    }

    if (errs.length) setGlobalErr(errs.join(" · "));
    if (!items.length) return;

    setQueue(prev => {
      const total = prev.reduce((s, i) => s + i.origSize, 0)
                  + items.reduce((s, i) => s + i.origSize, 0);
      if (total > MAX_TOTAL_SIZE) {
        setGlobalErr("Total exceeds 1.5 GB session limit.");
        return prev;
      }
      return [...prev, ...items];
    });
  }, [allowedFormats, formatName]);

  // ── Remove / Clear ───────────────────────────────────────────────────────
  const removeItem = useCallback((id) => {
    setQueue(prev => {
      const it = prev.find(i => i.id === id);
      if (it?.origUrl) URL.revokeObjectURL(it.origUrl);
      return prev.filter(i => i.id !== id);
    });
    if (previewId === id) setPreviewId(null);
  }, [previewId]);

  const clearAll = useCallback(() => {
    setQueue(prev => { prev.forEach(i => i.origUrl && URL.revokeObjectURL(i.origUrl)); return []; });
    setOverallPct(0); setGlobalErr(""); setPreviewId(null);
  }, []);

  // ── Download ─────────────────────────────────────────────────────────────
  const downloadOne = useCallback((item) => {
    if (!item.outBlob) return;
    const base = item.file.name.replace(/\.[^.]+$/, "");
    const a    = document.createElement("a");
    a.href     = URL.createObjectURL(item.outBlob);
    a.download = `${base}-compressed.${outFmt}`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }, [outFmt]);

  const downloadAll = useCallback(async () => {
    const done = queue.filter(i => i.status === "done" && i.outBlob);
    if (!done.length) return;
    if (done.length === 1) { downloadOne(done[0]); return; }
    try {
      const JSZip = (await import("jszip")).default;
      const zip   = new JSZip();
      done.forEach(it => {
        zip.file(`${it.file.name.replace(/\.[^.]+$/, "")}-compressed.${outFmt}`, it.outBlob);
      });
      const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 1 } });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "compressed-videos.zip";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    } catch { done.forEach(downloadOne); }
  }, [queue, outFmt, downloadOne]);

  // ── Cancel ───────────────────────────────────────────────────────────────
  const cancelProcessing = useCallback(() => {
    cancelRef.current = true;

    if (lagMonitorRef.current) {
      clearInterval(lagMonitorRef.current);
      lagMonitorRef.current = null;
    }

    if (poolRef.current) {
      const p = poolRef.current;
      p.workers.forEach(w => { try { w?.terminate(); } catch { /* ignore */ } });
      const resetIds = new Set([
        ...p.workerJobId.filter(Boolean),
        ...p.jobQueue.map(j => j.id),
      ]);
      setQueue(prev => prev.map(it =>
        resetIds.has(it.id) ? { ...it, status: "pending", progress: 0, error: null } : it
      ));
      poolRef.current = null;
    }

    setProcessing(false);
    setWorkerCount(0);
    cancelRef.current = false;
  }, []);

  // ── Worker Pool: process queue ───────────────────────────────────────────
  const processQueue = useCallback(async () => {
    const pending = queue.filter(i => i.status === "pending");
    if (!pending.length || processing) return;

    cancelRef.current = false;
    setProcessing(true);
    setOverallPct(0);
    setGlobalErr("");

    // Snapshot settings at call time (prevents stale closures)
    const snap = {
      fmt: outFmt, sp: speed, ql: quality,
      res: resolution, noAudio: removeAudio, agg: aggressive,
    };

    // ── Phase 1: Analyze + Smart Adaptive settings ─────────────────────────
    // Immediately set all items to "queued" so they show as active in the UI
    setQueue(prev => prev.map(it =>
      it.status === "pending" ? { ...it, status: "queued" } : it
    ));

    const toEncode = [];
    let skipCount  = 0;

    await Promise.all(pending.map(async (item) => {
      const analysis = await analyzeVideo(item.file);
      patchItem(item.id, {
        detRes:               analysis.res,
        estimatedBitrateKbps: analysis.estimatedBitrateKbps,
        duration:             analysis.duration,
      });

      const settings = computeSmartSettings(analysis, snap);

      if (settings.skip) {
        // Already optimal: mark done immediately without sending to worker
        skipCount++;
        patchItem(item.id, {
          status: "done", progress: 100,
          outBlob: item.file,
          outSize: item.file.size,
          reduction: 0,
          alreadyOptimized: true,
        });
        return;
      }

      toEncode.push({ id: item.id, file: item.file, settings, retryCount: 0 });
    }));

    if (cancelRef.current) { setProcessing(false); return; }

    // All files were already optimal — nothing to encode
    if (toEncode.length === 0) {
      setProcessing(false);
      setOverallPct(100);
      return;
    }

    // ── Phase 2: Set up worker pool ────────────────────────────────────────
    const maxW = getMaxWorkers();
    activeMaxRef.current = maxW;

    const p = {
      workers:       new Array(maxW).fill(null),
      workerBusy:    new Array(maxW).fill(false),
      workerJobId:   new Array(maxW).fill(null),
      jobQueue:      [...toEncode],
      jobMap:        new Map(toEncode.map(j => [j.id, j])),
      totalJobs:     pending.length,   // includes skip-resolved items
      completedJobs: skipCount,        // skip items already count as done
    };
    poolRef.current = p;
    setWorkerCount(maxW);

    // Initial overall progress (reflects any pre-skipped items)
    setOverallPct(Math.round((p.completedJobs / p.totalJobs) * 100));

    // ── CPU lag monitor ────────────────────────────────────────────────────
    // Measures interval drift; reduces active worker ceiling on sustained lag.
    {
      let lastPing  = Date.now();
      let lagHits   = 0;
      lagMonitorRef.current = setInterval(() => {
        const now   = Date.now();
        const drift = now - lastPing - 250; // 250ms target interval
        lastPing    = now;

        if (!poolRef.current) return;

        if (drift > 300) {  // interval fired >550ms late → CPU is overloaded
          lagHits++;
          if (lagHits >= 2 && activeMaxRef.current > 1) {
            activeMaxRef.current--;
            setWorkerCount(activeMaxRef.current);
            lagHits = 0;
          }
        } else {
          lagHits = Math.max(0, lagHits - 1);
        }
      }, 250);
    }

    // ── Assign next queued job to worker at idx ────────────────────────────
    const assignNext = (idx) => {
      // Respect the dynamic ceiling set by the lag monitor
      if (idx >= activeMaxRef.current) return;
      if (cancelRef.current || !p.jobQueue.length || p.workerBusy[idx]) return;

      const job = p.jobQueue.shift();
      p.workerBusy[idx]  = true;
      p.workerJobId[idx] = job.id;
      patchItem(job.id, { status: "loading-ffmpeg", progress: 0 });
      p.workers[idx].postMessage({ type: "compress", id: job.id, file: job.file, settings: job.settings });
    };

    // ── Check if all jobs are resolved ─────────────────────────────────────
    const checkAllDone = () => {
      if (p.jobQueue.length === 0 && p.workerBusy.every(b => !b)) {
        if (lagMonitorRef.current) {
          clearInterval(lagMonitorRef.current);
          lagMonitorRef.current = null;
        }
        setProcessing(false);
        setWorkerCount(0);
        setOverallPct(100);
        cancelRef.current = false;
      }
    };

    // ── Handle job result from worker ──────────────────────────────────────
    const handleResult = (idx, msg) => {
      p.workerBusy[idx]  = false;
      p.workerJobId[idx] = null;

      if (msg.type === "done") {
        p.completedJobs++;
        const job      = p.jobMap.get(msg.id);
        const origSize = job?.file?.size ?? 0;

        if (msg.alreadyOptimized) {
          patchItem(msg.id, {
            status: "done", progress: 100,
            outBlob: job?.file ?? null,
            outSize: origSize,
            reduction: 0,
            alreadyOptimized: true,
          });
        } else {
          const blob      = new Blob([msg.buffer], { type: msg.fmt === "webm" ? "video/webm" : "video/mp4" });
          const reduction = origSize ? Math.round((1 - blob.size / origSize) * 100) : 0;
          patchItem(msg.id, { status: "done", progress: 100, outBlob: blob, outSize: blob.size, reduction });
        }
      } else {
        // msg.type === "error"
        const job = p.jobMap.get(msg.id);
        if (job && job.retryCount < 1) {
          job.retryCount++;
          p.jobQueue.unshift(job);
          patchItem(msg.id, { status: "loading-ffmpeg", progress: 0, error: null });
        } else {
          p.completedJobs++;
          patchItem(msg.id, { status: "error", error: msg.message ?? "Compression failed" });
        }
      }

      setOverallPct(Math.round((p.completedJobs / p.totalJobs) * 100));
      assignNext(idx);
      checkAllDone();
    };

    // ── Restart crashed worker and retry its current job ───────────────────
    const restartWorker = (idx) => {
      try { p.workers[idx]?.terminate(); } catch { /* ignore */ }
      createWorkerAt(idx); // eslint-disable-line no-use-before-define
    };

    // ── Create (or recreate) a worker at pool index idx ────────────────────
    const createWorkerAt = (idx) => {
      const w = new Worker(
        new URL("../workers/videoWorker.js", import.meta.url),
      );
      w.onmessage = ({ data: msg }) => {
        if (msg.type === "progress") {
          patchItem(msg.id, { status: "compressing", progress: msg.pct });
          const activePct = msg.pct / 100;
          const approx = Math.min(
            99,
            Math.round(((p.completedJobs + activePct) / p.totalJobs) * 100),
          );
          setOverallPct(approx);
          return;
        }
        handleResult(idx, msg);
      };

      w.onerror = () => {
        const jobId = p.workerJobId[idx];
        p.workerBusy[idx]  = false;
        p.workerJobId[idx] = null;

        if (jobId) {
          const job = p.jobMap.get(jobId);
          if (job && job.retryCount < 1) {
            job.retryCount++;
            p.jobQueue.unshift(job);
            patchItem(jobId, { status: "loading-ffmpeg", progress: 0, error: null });
            restartWorker(idx);
            assignNext(idx);
          } else {
            p.completedJobs++;
            patchItem(jobId, { status: "error", error: "Worker crashed. Please try again." });
            restartWorker(idx);
            assignNext(idx);
            checkAllDone();
          }
        } else {
          restartWorker(idx);
        }
      };

      p.workers[idx] = w;
    };

    // ── Phase 3: Spin up workers and immediately feed them jobs ────────────
    for (let i = 0; i < maxW; i++) createWorkerAt(i);
    for (let i = 0; i < maxW; i++) assignNext(i);

  }, [queue, processing, outFmt, speed, quality, resolution, removeAudio, aggressive, patchItem]);

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="vc-wrapper">
      <div className="vc-container">
        <h1 className="vc-title">{title}</h1>
        <p className="vc-subtitle">{description}</p>

        {/* Trust Strip */}
        <div className="vc-trust-strip">
          <span>🔒 Videos never leave your device.</span>
          <span>🎯 Smart Adaptive Mode – per-video bitrate targeting.</span>
          <span>📦 Bulk: up to 20 files · 500 MB each · 1.5 GB total.</span>
        </div>

        {/* Error */}
        {globalErr && (
          <div className="vc-error">
            <span>{globalErr}</span>
            <button onClick={() => setGlobalErr("")} className="vc-error-close">×</button>
          </div>
        )}

        {/* Drop Zone */}
        <div
          className={`vc-dropzone${processing ? " vc-dropzone--disabled" : ""}`}
          onClick={() => !processing && fileInput.current?.click()}
          onDrop={(e) => { e.preventDefault(); if (!processing) addFiles(e.dataTransfer.files); }}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            ref={fileInput}
            type="file"
            accept="video/mp4,video/webm,video/quicktime,.mov"
            multiple
            onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }}
            style={{ display: "none" }}
          />
          <div className="vc-dropzone-icon">🎬</div>
          <p className="vc-dropzone-main">
            {queue.length ? "Drop more videos or click to add" : "Drop videos here or click to select"}
          </p>
          <p className="vc-dropzone-sub">MP4 · MOV · WebM · Up to 20 files · 500 MB each</p>
        </div>

        {/* Settings + Queue */}
        {queue.length > 0 && (
          <>
            {/* Settings Panel */}
            <div className="vc-options">

              {/* Row 1 – Format & Speed */}
              <div className="vc-options-row">
                <div className="vc-option-group">
                  <label className="vc-label">Output Format</label>
                  <div className="vc-pill-group">
                    {["mp4", "webm"].map(f => (
                      <button key={f}
                        className={`vc-pill${outFmt === f ? " vc-pill--on" : ""}`}
                        onClick={() => setOutFmt(f)} disabled={processing}>
                        {f.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="vc-option-group">
                  <label className="vc-label">Encoding Speed</label>
                  <div className="vc-pill-group">
                    {Object.entries(SPEED_PRESETS).map(([k, v]) => (
                      <button key={k}
                        className={`vc-pill${speed === k ? " vc-pill--on" : ""}`}
                        onClick={() => setSpeed(k)} disabled={processing}>
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 – Quality & Aggressive */}
              <div className="vc-options-row" style={{ marginTop: "1rem" }}>
                <div className="vc-option-group">
                  <label className="vc-label">Quality / Size</label>
                  <div className="vc-pill-group">
                    {Object.entries(QUALITY_PRESETS).map(([k, v]) => (
                      <button key={k}
                        className={`vc-pill${quality === k ? " vc-pill--on" : ""}`}
                        onClick={() => setQuality(k)}
                        disabled={processing || aggressive}>
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="vc-option-group">
                  <label className="vc-label">
                    Aggressive Mode
                    <span className="vc-badge-red">Max Reduction</span>
                  </label>
                  <label className="vc-switch">
                    <input type="checkbox" checked={aggressive}
                      onChange={e => setAggressive(e.target.checked)}
                      disabled={processing} />
                    <span className="vc-switch-track" />
                  </label>
                  {aggressive && (
                    <p className="vc-warn-text">
                      ⚠ Auto 720p · CRF+7 · 64 kbps audio · strips metadata
                    </p>
                  )}
                </div>
              </div>

              {/* Advanced */}
              <button className="vc-advanced-toggle"
                onClick={() => setShowAdv(v => !v)} disabled={processing}>
                {showAdv ? "▲ Hide" : "▼ Show"} Advanced
              </button>

              {showAdv && (
                <div className="vc-advanced">
                  <div className="vc-advanced-grid">
                    <div className="vc-option-group">
                      <label className="vc-label">Resolution</label>
                      <select value={resolution}
                        onChange={e => setResolution(e.target.value)}
                        className="vc-select" disabled={processing}>
                        {RESOLUTIONS.map(r =>
                          <option key={r.value} value={r.value}>{r.label}</option>)}
                      </select>
                    </div>

                    <div className="vc-option-group">
                      <label className="vc-label">Audio</label>
                      <label className="vc-checkbox-label">
                        <input type="checkbox" checked={removeAudio}
                          onChange={e => setRemoveAudio(e.target.checked)}
                          disabled={processing} />
                        Remove audio (mute video)
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Worker Badge */}
            {processing && workerCount > 0 && (
              <div className="vc-worker-badge">
                ⚡ Parallel Mode Active · {workerCount} worker{workerCount > 1 ? "s" : ""} running
                {workerCount >= 4 && (
                  <span className="vc-worker-warn"> · High CPU usage expected</span>
                )}
              </div>
            )}

            {/* Overall Progress */}
            {processing && (
              <div className="vc-overall-progress">
                <div className="vc-overall-label">
                  {doneCount < queue.length
                    ? `${doneCount} of ${queue.length} complete · ${overallPct}%`
                    : "Finishing…"}
                </div>
                <div className="vc-progress-bar">
                  <div className="vc-progress-fill" style={{ width: `${overallPct}%` }} />
                </div>
              </div>
            )}

            {/* Batch Summary */}
            {batchSaving !== null && !processing && (
              <div className="vc-batch-summary">
                <div className="vc-sum-cell">
                  <span className="vc-sum-lbl">Original</span>
                  <strong>{fmtBytes(totalOrig)}</strong>
                </div>
                <span className="vc-sum-arrow">→</span>
                <div className="vc-sum-cell">
                  <span className="vc-sum-lbl">Compressed</span>
                  <strong className="vc-success">{fmtBytes(totalComp)}</strong>
                </div>
                <span className="vc-sum-badge">{batchSaving}% smaller</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="vc-actions">
              {pendingCount > 0 && !processing && (
                <button onClick={processQueue} className="vc-btn-primary">
                  Compress {pendingCount} Video{pendingCount > 1 ? "s" : ""}
                </button>
              )}
              {processing && (
                <button onClick={cancelProcessing} className="vc-btn-secondary">
                  Cancel
                </button>
              )}
              {doneCount > 0 && !processing && (
                <button onClick={downloadAll} className="vc-btn-download">
                  ⬇ {doneCount > 1 ? `Download All (${doneCount}) as ZIP` : "Download Compressed Video"}
                </button>
              )}
              {!processing && queue.length > 0 && (
                <button onClick={clearAll} className="vc-btn-secondary">Clear All</button>
              )}
            </div>

            {/* File Queue */}
            <div className="vc-queue">
              {queue.map(item => (
                <QueueItem key={item.id} item={item} processing={processing}
                  onDownload={() => downloadOne(item)}
                  onRemove={() => removeItem(item.id)}
                  onPreview={() => { setPreviewId(item.id); setPreviewCompressed(false); }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <PreviewModal
          item={previewItem}
          showCompressed={previewCompressed}
          onToggle={() => setPreviewCompressed(v => !v)}
          onClose={() => setPreviewId(null)}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// QUEUE ITEM
// ─────────────────────────────────────────────────────────────────────────────
function QueueItem({ item, processing, onDownload, onRemove, onPreview }) {
  // queued = waiting for a CPU slot; loading-ffmpeg / compressing = actively working
  const active = ["queued", "loading-ffmpeg", "compressing"].includes(item.status);

  const STATUS_TEXT = {
    pending:          processing ? "Waiting for available CPU slot" : "Ready",
    queued:           "Waiting for available CPU slot",
    "loading-ffmpeg": "Loading engine…",
    compressing:      `Compressing ${item.progress}%`,
    done:             item.alreadyOptimized
                        ? "Already optimized – no reduction needed"
                        : `Done · saved ${item.reduction}%`,
    error:            item.error || "Error",
  };

  const STATUS_COLOR = {
    pending:          "var(--foreground)",
    queued:           "var(--primary)",
    "loading-ffmpeg": "var(--primary)",
    compressing:      "var(--primary)",
    done:             item.alreadyOptimized ? "#6c757d" : "#1a7f37",
    error:            "#c00",
  };

  return (
    <div className={`vc-qi${item.status === "done" ? " vc-qi--done" : item.status === "error" ? " vc-qi--error" : ""}`}>
      <span className="vc-qi-icon">
        {item.status === "done" ? "✅" : item.status === "error" ? "❌" : active ? "⚙️" : "🎬"}
      </span>

      <div className="vc-qi-body">
        <div className="vc-qi-name" title={item.file.name}>{item.file.name}</div>

        <div className="vc-qi-meta">
          <span>{fmtBytes(item.origSize)}</span>
          {item.outSize > 0 && !item.alreadyOptimized && (
            <>
              <span className="vc-qi-arrow">→</span>
              <span style={{ color: "#1a7f37", fontWeight: 600 }}>{fmtBytes(item.outSize)}</span>
              <span className="vc-qi-pill">{item.reduction}% smaller</span>
            </>
          )}
          {item.alreadyOptimized && (
            <span className="vc-qi-pill" style={{ background: "rgba(108,117,125,0.12)", color: "#6c757d" }}>
              Already optimal
            </span>
          )}
          {!item.outSize && item.detRes && (
            <span style={{ opacity: 0.45, fontSize: "0.75rem" }}>
              {item.detRes.w}×{item.detRes.h}
              {item.estimatedBitrateKbps > 0 && ` · ~${(item.estimatedBitrateKbps / 1000).toFixed(1)} Mbps`}
              {item.codec && item.codec !== "unknown" && ` · ${item.codec.toUpperCase()}`}
            </span>
          )}
        </div>

        {/* Progress bar only for actively encoding items */}
        {(item.status === "loading-ffmpeg" || item.status === "compressing") && (
          <div className="vc-progress-bar" style={{ height: 4, marginTop: "0.5rem" }}>
            <div className="vc-progress-fill"
              style={{ width: item.status === "loading-ffmpeg" ? "6%" : `${Math.max(item.progress, 3)}%` }} />
          </div>
        )}

        <div style={{ fontSize: "0.75rem", color: STATUS_COLOR[item.status] ?? "inherit", marginTop: "0.3rem", fontWeight: 500 }}>
          {STATUS_TEXT[item.status] ?? item.status}
        </div>
      </div>

      <div className="vc-qi-acts">
        {item.status === "done" && (
          <>
            <button className="vc-icon-btn" onClick={onPreview} title="Before / After preview">👁</button>
            <button className="vc-icon-btn vc-icon-btn--green" onClick={onDownload} title="Download">⬇</button>
          </>
        )}
        {!processing && !active && (
          <button className="vc-icon-btn vc-icon-btn--red" onClick={onRemove} title="Remove">×</button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PREVIEW MODAL
// ─────────────────────────────────────────────────────────────────────────────
function PreviewModal({ item, showCompressed, onToggle, onClose }) {
  const [compUrl, setCompUrl] = useState(null);

  useEffect(() => {
    if (!item.outBlob) return;
    const url = URL.createObjectURL(item.outBlob);
    setCompUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [item.outBlob]);

  return (
    <div className="vc-overlay" onClick={onClose}>
      <div className="vc-modal" onClick={e => e.stopPropagation()}>

        <div className="vc-modal-header">
          <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>{item.file.name}</h3>
          <button onClick={onClose}
            style={{ background: "none", border: "none", fontSize: "1.5rem",
                     cursor: "pointer", lineHeight: 1, opacity: 0.6 }}>×</button>
        </div>

        <div className="vc-modal-tabs">
          <button
            className={`vc-tab${!showCompressed ? " vc-tab--on" : ""}`}
            onClick={() => showCompressed && onToggle()}>
            Original · {fmtBytes(item.origSize)}
          </button>
          <button
            className={`vc-tab${showCompressed ? " vc-tab--on" : ""}`}
            onClick={() => !showCompressed && onToggle()}
            disabled={!compUrl}>
            Compressed · {fmtBytes(item.outSize)}
          </button>
        </div>

        <div className="vc-modal-video">
          <video
            key={showCompressed ? "comp" : "orig"}
            src={showCompressed ? compUrl : item.origUrl}
            controls autoPlay muted loop
            className="vc-preview-video"
          />
        </div>

        <p style={{ textAlign: "center", fontSize: "0.8rem", opacity: 0.55,
                    margin: "0.75rem 0 0", padding: "0 1.5rem 1.5rem" }}>
          ⚠ Compression may slightly reduce quality. File size reduced by {item.reduction}%.
        </p>
      </div>
    </div>
  );
}
