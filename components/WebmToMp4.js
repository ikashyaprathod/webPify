"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function WebmToMp4() {
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
    if (!f.name.toLowerCase().endsWith(".webm") && f.type !== "video/webm") {
      setError("Please upload a WebM file.");
      return;
    }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
  }

  const handleConvert = useCallback(async () => {
    if (!file) return;
    setStatus("loading");
    setError("");
    setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("converting");
      await ffmpeg.writeFile("input.webm", await fetchFile(file));
      await ffmpeg.exec(["-i", "input.webm", "-c:v", "libx264", "-c:a", "aac", "output.mp4"]);
      const data = await ffmpeg.readFile("output.mp4");
      const blob = new Blob([data.buffer], { type: "video/mp4" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile("input.webm");
      await ffmpeg.deleteFile("output.mp4");
    } catch (err) {
      setError("Conversion failed: " + err.message);
      setStatus("error");
    }
  }, [file]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}.mp4`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="w2mp4-wrap">
      {error && (
        <div className="w2mp4-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="w2mp4-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`w2mp4-drop${dragging ? " w2mp4-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept=".webm,video/webm" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="w2mp4-drop-icon">🎬</div>
          <p className="w2mp4-drop-title">Drag & Drop WebM file here</p>
          <p className="w2mp4-drop-sub">WebM files only · Click to browse</p>
          <button className="w2mp4-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select WebM File</button>
        </div>
      ) : (
        <div className="w2mp4-card">
          <div className="w2mp4-file-info">
            <span className="w2mp4-file-icon">🎬</span>
            <div>
              <p className="w2mp4-file-name">{file.name}</p>
              <p className="w2mp4-file-meta">{fmtBytes(file.size)} · WebM</p>
            </div>
            <button className="w2mp4-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          <div className="w2mp4-info-note">
            <span className="w2mp4-note-icon">🔄</span>
            <p>Encoding to H.264 + AAC for maximum compatibility.</p>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="w2mp4-progress">
              <p className="w2mp4-progress-label">{status === "loading" ? "Loading engine…" : `Converting… ${progress}%`}</p>
              <div className="w2mp4-progress-bar">
                <div className="w2mp4-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="w2mp4-result">
              <div className="w2mp4-sizes">
                <div><p className="w2mp4-size-lbl">WebM</p><p className="w2mp4-size-val">{fmtBytes(file.size)}</p></div>
                <span className="w2mp4-arrow">→</span>
                <div><p className="w2mp4-size-lbl">MP4 (H.264)</p><p className="w2mp4-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="w2mp4-download-btn" onClick={handleDownload}>Download MP4</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="w2mp4-btn" onClick={handleConvert}>Convert to MP4</button>
          )}
        </div>
      )}
    </div>
  );
}
