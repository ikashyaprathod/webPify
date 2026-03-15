"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function VideoConverter() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | converting | done | error
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
    if (!["video/mp4", "video/quicktime", "video/webm"].includes(f.type) && !f.name.toLowerCase().endsWith(".mov")) {
      setError("Please upload an MP4, MOV, or WebM file.");
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
      const inputName = "input.mp4";
      const outputName = "output.webm";
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-c:v", "libvpx-vp9", "-crf", "30", "-b:v", "0", outputName]);
      const data = await ffmpeg.readFile(outputName);
      const blob = new Blob([data.buffer], { type: "video/webm" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
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
    a.download = `${base}.webm`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="vcnv-wrap">
      {error && (
        <div className="vcnv-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="vcnv-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`vcnv-drop${dragging ? " vcnv-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="vcnv-drop-icon">🎬</div>
          <p className="vcnv-drop-title">Drag & Drop MP4 here</p>
          <p className="vcnv-drop-sub">MP4 · MOV · Click to browse</p>
          <button className="vcnv-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Video</button>
        </div>
      ) : (
        <div className="vcnv-card">
          <div className="vcnv-file-info">
            <span className="vcnv-file-icon">🎬</span>
            <div>
              <p className="vcnv-file-name">{file.name}</p>
              <p className="vcnv-file-meta">{fmtBytes(file.size)} · MP4</p>
            </div>
            <button className="vcnv-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="vcnv-progress">
              <p className="vcnv-progress-label">{status === "loading" ? "Loading converter…" : `Converting… ${progress}%`}</p>
              <div className="vcnv-progress-bar">
                <div className="vcnv-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="vcnv-result">
              <div className="vcnv-sizes">
                <div><p className="vcnv-size-lbl">Original (MP4)</p><p className="vcnv-size-val">{fmtBytes(file.size)}</p></div>
                <span className="vcnv-arrow">→</span>
                <div><p className="vcnv-size-lbl">Converted (WebM)</p><p className="vcnv-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="vcnv-btn" onClick={handleDownload}>⬇ Download WebM</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="vcnv-btn" onClick={handleConvert}>Convert to WebM</button>
          )}
        </div>
      )}
    </div>
  );
}
