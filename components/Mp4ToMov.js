"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function Mp4ToMov() {
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
    if (!f.name.toLowerCase().endsWith(".mp4") && f.type !== "video/mp4") {
      setError("Please upload an MP4 file.");
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
      await ffmpeg.writeFile("input.mp4", await fetchFile(file));
      await ffmpeg.exec(["-i", "input.mp4", "-c", "copy", "output.mov"]);
      const data = await ffmpeg.readFile("output.mov");
      const blob = new Blob([data.buffer], { type: "video/quicktime" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile("input.mp4");
      await ffmpeg.deleteFile("output.mov");
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
    a.download = `${base}.mov`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="m2mov-wrap">
      {error && (
        <div className="m2mov-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="m2mov-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`m2mov-drop${dragging ? " m2mov-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept=".mp4,video/mp4" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="m2mov-drop-icon">🎬</div>
          <p className="m2mov-drop-title">Drag & Drop MP4 file here</p>
          <p className="m2mov-drop-sub">MP4 files only · Click to browse</p>
          <button className="m2mov-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select MP4 File</button>
        </div>
      ) : (
        <div className="m2mov-card">
          <div className="m2mov-file-info">
            <span className="m2mov-file-icon">🎬</span>
            <div>
              <p className="m2mov-file-name">{file.name}</p>
              <p className="m2mov-file-meta">{fmtBytes(file.size)} · MP4</p>
            </div>
            <button className="m2mov-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          <div className="m2mov-info-note">
            <span className="m2mov-note-icon">⚡</span>
            <p>Stream copy mode — no re-encoding. Conversion is instant.</p>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="m2mov-progress">
              <p className="m2mov-progress-label">{status === "loading" ? "Loading engine…" : `Converting… ${progress}%`}</p>
              <div className="m2mov-progress-bar">
                <div className="m2mov-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="m2mov-result">
              <div className="m2mov-sizes">
                <div><p className="m2mov-size-lbl">MP4</p><p className="m2mov-size-val">{fmtBytes(file.size)}</p></div>
                <span className="m2mov-arrow">→</span>
                <div><p className="m2mov-size-lbl">MOV</p><p className="m2mov-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="m2mov-download-btn" onClick={handleDownload}>Download MOV</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="m2mov-btn" onClick={handleConvert}>Convert to MOV</button>
          )}
        </div>
      )}
    </div>
  );
}
