"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function VideoMuter() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
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
  }

  const handleMute = useCallback(async () => {
    if (!file) return;
    setStatus("loading");
    setError("");
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("processing");
      const ext = file.name.split(".").pop() || "mp4";
      const inputName = `input.${ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-an", "-c:v", "copy", "output.mp4"]);
      const data = await ffmpeg.readFile("output.mp4");
      const blob = new Blob([data.buffer], { type: "video/mp4" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile("output.mp4");
    } catch (err) {
      setError("Mute failed: " + err.message);
      setStatus("error");
    }
  }, [file]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-muted.mp4`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="vmute-wrap">
      {error && (
        <div className="vmute-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="vmute-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`vmute-drop${dragging ? " vmute-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="vmute-drop-icon">🔇</div>
          <p className="vmute-drop-title">Drag & Drop Video here</p>
          <p className="vmute-drop-sub">MP4 · WebM · MOV · Click to browse</p>
          <button className="vmute-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Video</button>
        </div>
      ) : (
        <div className="vmute-card">
          <div className="vmute-file-info">
            <span className="vmute-file-icon">🎬</span>
            <div>
              <p className="vmute-file-name">{file.name}</p>
              <p className="vmute-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="vmute-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {(status === "loading" || status === "processing") && (
            <div className="vmute-progress">
              <p className="vmute-progress-label">{status === "loading" ? "Loading engine…" : "Removing audio… (no re-encoding)"}</p>
              <div className="vmute-progress-bar">
                <div className="vmute-progress-fill" style={{ width: status === "loading" ? "10%" : "70%" }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="vmute-result">
              <p className="vmute-notice">Audio stripped — no re-encoding needed. Video quality unchanged.</p>
              <div className="vmute-sizes">
                <div><p className="vmute-size-lbl">Original</p><p className="vmute-size-val">{fmtBytes(file.size)}</p></div>
                <span className="vmute-arrow">→</span>
                <div><p className="vmute-size-lbl">Muted</p><p className="vmute-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="vmute-btn" onClick={handleDownload}>⬇ Download Muted Video</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="vmute-btn" onClick={handleMute}>Remove Audio</button>
          )}
        </div>
      )}
    </div>
  );
}
