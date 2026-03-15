"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function fmtDuration(secs) {
  if (!secs || isNaN(secs)) return "--";
  const m = Math.floor(secs / 60), s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoToMp3() {
  const [file, setFile] = useState(null);
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const ffmpegRef = useRef(null);

  async function loadFFmpeg() {
    if (ffmpegRef.current) return ffmpegRef.current;
    const { FFmpeg } = await import("@ffmpeg/ffmpeg");
    const { toBlobURL } = await import("@ffmpeg/util");
    const ffmpeg = new FFmpeg();
    ffmpeg.on("progress", ({ progress: p }) => setProgress(Math.round(p * 100)));
    await ffmpeg.load({
      coreURL: await toBlobURL(`${CDN_BASE}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${CDN_BASE}/ffmpeg-core.wasm`, "application/wasm"),
    });
    ffmpegRef.current = ffmpeg;
    return ffmpeg;
  }

  function handleFile(f) {
    if (!f) return;
    const valid = ["video/mp4", "video/webm", "video/quicktime"].includes(f.type) || f.name.toLowerCase().endsWith(".mov");
    if (!valid) { setError("Please upload an MP4, WebM, or MOV file."); return; }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
    // Get duration
    const v = document.createElement("video");
    v.preload = "metadata";
    v.onloadedmetadata = () => { setDuration(v.duration); URL.revokeObjectURL(v.src); };
    v.src = URL.createObjectURL(f);
  }

  const handleExtract = useCallback(async () => {
    if (!file) return;
    setStatus("loading");
    setError("");
    setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("converting");
      const ext = file.name.toLowerCase().endsWith(".mov") ? "mov" : file.name.split(".").pop() || "mp4";
      const inputName = `input.${ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-vn", "-acodec", "libmp3lame", "-q:a", "2", "output.mp3"]);
      const data = await ffmpeg.readFile("output.mp3");
      const blob = new Blob([data.buffer], { type: "audio/mpeg" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile("output.mp3");
    } catch (err) {
      setError("Extraction failed: " + err.message);
      setStatus("error");
    }
  }, [file]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}.mp3`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="vmp3-wrap">
      {error && (
        <div className="vmp3-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="vmp3-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`vmp3-drop${dragging ? " vmp3-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="vmp3-drop-icon">🎵</div>
          <p className="vmp3-drop-title">Drag & Drop Video here</p>
          <p className="vmp3-drop-sub">MP4 · WebM · MOV · Click to browse</p>
          <button className="vmp3-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Video</button>
        </div>
      ) : (
        <div className="vmp3-card">
          <div className="vmp3-file-info">
            <span className="vmp3-file-icon">🎬</span>
            <div>
              <p className="vmp3-file-name">{file.name}</p>
              <p className="vmp3-file-meta">{fmtBytes(file.size)}{duration > 0 ? ` · ${fmtDuration(duration)}` : ""}</p>
            </div>
            <button className="vmp3-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); setDuration(0); }}>×</button>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="vmp3-progress">
              <p className="vmp3-progress-label">{status === "loading" ? "Loading engine…" : `Extracting audio… ${progress}%`}</p>
              <div className="vmp3-progress-bar">
                <div className="vmp3-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="vmp3-result">
              <div className="vmp3-sizes">
                <div><p className="vmp3-size-lbl">Video (original)</p><p className="vmp3-size-val">{fmtBytes(file.size)}</p></div>
                <span className="vmp3-arrow">→</span>
                <div><p className="vmp3-size-lbl">MP3 Audio</p><p className="vmp3-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="vmp3-btn" onClick={handleDownload}>⬇ Download MP3</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="vmp3-btn" onClick={handleExtract}>Extract Audio (MP3)</button>
          )}
        </div>
      )}
    </div>
  );
}
