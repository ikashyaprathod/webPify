"use client";

import { useRef, useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function VideoScreenshot() {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [screenshot, setScreenshot] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  function handleFile(f) {
    if (!f) return;
    const valid = ["video/mp4", "video/webm", "video/quicktime"].includes(f.type) || f.name.toLowerCase().endsWith(".mov");
    if (!valid) { setError("Please upload an MP4, WebM, or MOV file."); return; }
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    const url = URL.createObjectURL(f);
    setFile(f);
    setVideoUrl(url);
    setScreenshot(null);
    setError("");
  }

  function captureFrame() {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob(blob => {
      if (!blob) { setError("Failed to capture frame."); return; }
      setScreenshot({ blob, url: URL.createObjectURL(blob), size: blob.size });
    }, "image/png");
  }

  function handleDownload() {
    if (!screenshot) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = screenshot.url;
    a.download = `${base}-frame.png`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="vscr-wrap">
      {error && (
        <div className="vscr-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="vscr-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`vscr-drop${dragging ? " vscr-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="vscr-drop-icon">📷</div>
          <p className="vscr-drop-title">Drag & Drop Video here</p>
          <p className="vscr-drop-sub">MP4 · WebM · MOV · Click to browse</p>
          <button className="vscr-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Video</button>
        </div>
      ) : (
        <div className="vscr-card">
          <div className="vscr-file-info">
            <span className="vscr-file-icon">🎬</span>
            <div>
              <p className="vscr-file-name">{file.name}</p>
              <p className="vscr-file-meta">{fmtBytes(file.size)}{duration > 0 ? ` · ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, "0")}` : ""}</p>
            </div>
            <button className="vscr-close-btn" onClick={() => { setFile(null); setVideoUrl(null); setScreenshot(null); }}>×</button>
          </div>

          <video
            ref={videoRef}
            src={videoUrl}
            controls
            className="vscr-preview"
            style={{ width: "100%", maxHeight: 320, borderRadius: 10, marginTop: "1rem", background: "#000" }}
            onLoadedMetadata={(e) => setDuration(e.target.duration)}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          />

          <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#64748b" }}>
            Current time: {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, "0")}
            {duration > 0 && ` / ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, "0")}`}
          </div>

          <button className="vscr-btn" style={{ marginTop: "1rem" }} onClick={captureFrame}>
            📷 Capture Frame
          </button>

          {screenshot && (
            <div className="vscr-result">
              <p style={{ fontSize: "0.85rem", color: "#15803d", marginBottom: "0.75rem" }}>Frame captured · {fmtBytes(screenshot.size)}</p>
              <img src={screenshot.url} alt="Captured frame" style={{ width: "100%", borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <button className="vscr-btn" style={{ marginTop: "1rem" }} onClick={handleDownload}>⬇ Download PNG</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
