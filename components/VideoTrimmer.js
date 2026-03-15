"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function parseTime(str) {
  if (!str || !str.trim()) return null;
  const parts = str.trim().split(":").map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1 && !isNaN(parts[0])) return parts[0];
  return null;
}

export default function VideoTrimmer() {
  const [file, setFile] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState("0:00");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
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
    const v = document.createElement("video");
    v.preload = "metadata";
    v.onloadedmetadata = () => {
      const d = v.duration;
      setDuration(d);
      const m = Math.floor(d / 60), s = Math.floor(d % 60);
      setEndTime(`${m}:${s.toString().padStart(2, "0")}`);
      URL.revokeObjectURL(v.src);
    };
    v.src = URL.createObjectURL(f);
  }

  const handleTrim = useCallback(async () => {
    if (!file) return;
    const start = parseTime(startTime);
    const end = parseTime(endTime);
    if (start === null || end === null) { setError("Enter valid start and end times."); return; }
    if (start >= end) { setError("End time must be greater than start time."); return; }
    setStatus("loading");
    setError("");
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("trimming");
      const ext = file.name.split(".").pop() || "mp4";
      const inputName = `input.${ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-ss", String(start), "-to", String(end), "-c", "copy", "output.mp4"]);
      const data = await ffmpeg.readFile("output.mp4");
      const blob = new Blob([data.buffer], { type: "video/mp4" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile("output.mp4");
    } catch (err) {
      setError("Trim failed: " + err.message);
      setStatus("error");
    }
  }, [file, startTime, endTime]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-trimmed.mp4`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="vtrim-wrap">
      {error && (
        <div className="vtrim-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="vtrim-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`vtrim-drop${dragging ? " vtrim-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,.mov" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="vtrim-drop-icon">✂️</div>
          <p className="vtrim-drop-title">Drag & Drop Video here</p>
          <p className="vtrim-drop-sub">MP4 · WebM · MOV · Click to browse</p>
          <button className="vtrim-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Video</button>
        </div>
      ) : (
        <div className="vtrim-card">
          <div className="vtrim-file-info">
            <span className="vtrim-file-icon">🎬</span>
            <div>
              <p className="vtrim-file-name">{file.name}</p>
              <p className="vtrim-file-meta">{fmtBytes(file.size)}{duration > 0 ? ` · ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2,"0")}` : ""}</p>
            </div>
            <button className="vtrim-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {file && (
            <video
              ref={videoRef}
              src={URL.createObjectURL(file)}
              controls
              className="vtrim-preview"
              style={{ width: "100%", maxHeight: 280, borderRadius: 10, marginTop: "1rem" }}
            />
          )}

          <div className="vtrim-time-inputs">
            <div className="vtrim-time-group">
              <label className="vtrim-label">Start Time (MM:SS or seconds)</label>
              <input className="vtrim-input" type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="0:00" />
            </div>
            <div className="vtrim-time-group">
              <label className="vtrim-label">End Time (MM:SS or seconds)</label>
              <input className="vtrim-input" type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="1:30" />
            </div>
          </div>

          {(status === "loading" || status === "trimming") && (
            <div className="vtrim-progress">
              <p className="vtrim-progress-label">{status === "loading" ? "Loading engine…" : "Trimming…"}</p>
              <div className="vtrim-progress-bar">
                <div className="vtrim-progress-fill" style={{ width: status === "loading" ? "10%" : "60%" }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="vtrim-result">
              <div className="vtrim-sizes">
                <div><p className="vtrim-size-lbl">Original</p><p className="vtrim-size-val">{fmtBytes(file.size)}</p></div>
                <span className="vtrim-arrow">→</span>
                <div><p className="vtrim-size-lbl">Trimmed</p><p className="vtrim-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="vtrim-btn" onClick={handleDownload}>⬇ Download Trimmed Video</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="vtrim-btn" onClick={handleTrim}>Trim Video</button>
          )}
        </div>
      )}
    </div>
  );
}
