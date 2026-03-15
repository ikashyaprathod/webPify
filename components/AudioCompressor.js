"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
const ACCEPTED = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/ogg", "audio/aac", "audio/flac", "audio/x-flac", "audio/x-wav"];

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function AudioCompressor() {
  const [file, setFile] = useState(null);
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
    const valid = ACCEPTED.includes(f.type) || /\.(mp3|wav|aac|ogg|flac)$/i.test(f.name);
    if (!valid) { setError("Please upload an MP3, WAV, AAC, OGG, or FLAC file."); return; }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
  }

  const handleCompress = useCallback(async () => {
    if (!file) return;
    setStatus("loading");
    setError("");
    setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("compressing");
      const ext = file.name.split(".").pop() || "mp3";
      const inputName = `input.${ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-b:a", "128k", "output.mp3"]);
      const data = await ffmpeg.readFile("output.mp3");
      const blob = new Blob([data.buffer], { type: "audio/mpeg" });
      const reduction = file.size > 0 ? Math.round((1 - blob.size / file.size) * 100) : 0;
      setResult({ blob, size: blob.size, reduction: Math.max(0, reduction) });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile("output.mp3");
    } catch (err) {
      setError("Compression failed: " + err.message);
      setStatus("error");
    }
  }, [file]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-compressed.mp3`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="acomp-wrap">
      {error && (
        <div className="acomp-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="acomp-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`acomp-drop${dragging ? " acomp-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="acomp-drop-icon">🎵</div>
          <p className="acomp-drop-title">Drag & Drop Audio here</p>
          <p className="acomp-drop-sub">MP3 · WAV · AAC · OGG · FLAC · Click to browse</p>
          <button className="acomp-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Audio</button>
        </div>
      ) : (
        <div className="acomp-card">
          <div className="acomp-file-info">
            <span className="acomp-file-icon">🎵</span>
            <div>
              <p className="acomp-file-name">{file.name}</p>
              <p className="acomp-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="acomp-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {(status === "loading" || status === "compressing") && (
            <div className="acomp-progress">
              <p className="acomp-progress-label">{status === "loading" ? "Loading engine…" : `Compressing… ${progress}%`}</p>
              <div className="acomp-progress-bar">
                <div className="acomp-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="acomp-result">
              <div className="acomp-sizes">
                <div><p className="acomp-size-lbl">Original</p><p className="acomp-size-val">{fmtBytes(file.size)}</p></div>
                <span className="acomp-arrow">→</span>
                <div><p className="acomp-size-lbl">Compressed (128k)</p><p className="acomp-size-val">{fmtBytes(result.size)}</p></div>
                {result.reduction > 0 && <span className="acomp-badge">{result.reduction}% smaller</span>}
              </div>
              <button className="acomp-btn" onClick={handleDownload}>⬇ Download Compressed MP3</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="acomp-btn" onClick={handleCompress}>Compress Audio</button>
          )}
        </div>
      )}
    </div>
  );
}
