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

export default function AudioTrimmer() {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState("0:00");
  const [endTime, setEndTime] = useState("");
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
    if (!f.type.startsWith("audio/") && !/\.(mp3|wav|aac|ogg|flac|m4a)$/i.test(f.name)) {
      setError("Please upload an audio file."); return;
    }
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    const url = URL.createObjectURL(f);
    setFile(f);
    setAudioUrl(url);
    setStatus("idle");
    setResult(null);
    setError("");
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
      const ext = file.name.split(".").pop() || "mp3";
      const inputName = `input.${ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-ss", String(start), "-to", String(end), "output.mp3"]);
      const data = await ffmpeg.readFile("output.mp3");
      const blob = new Blob([data.buffer], { type: "audio/mpeg" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile("output.mp3");
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
    a.download = `${base}-trimmed.mp3`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="atrim-wrap">
      {error && (
        <div className="atrim-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="atrim-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`atrim-drop${dragging ? " atrim-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="atrim-drop-icon">✂️</div>
          <p className="atrim-drop-title">Drag & Drop Audio here</p>
          <p className="atrim-drop-sub">MP3 · WAV · OGG · AAC · FLAC · Click to browse</p>
          <button className="atrim-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Audio</button>
        </div>
      ) : (
        <div className="atrim-card">
          <div className="atrim-file-info">
            <span className="atrim-file-icon">🎵</span>
            <div>
              <p className="atrim-file-name">{file.name}</p>
              <p className="atrim-file-meta">{fmtBytes(file.size)}{duration > 0 ? ` · ${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2,"0")}` : ""}</p>
            </div>
            <button className="atrim-close-btn" onClick={() => { setFile(null); setAudioUrl(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {audioUrl && (
            <audio
              src={audioUrl}
              controls
              style={{ width: "100%", marginTop: "1rem" }}
              onLoadedMetadata={(e) => {
                const d = e.target.duration;
                setDuration(d);
                const m = Math.floor(d / 60), s = Math.floor(d % 60);
                setEndTime(`${m}:${s.toString().padStart(2,"0")}`);
              }}
            />
          )}

          <div className="atrim-time-inputs">
            <div className="atrim-time-group">
              <label className="atrim-label">Start Time (MM:SS or seconds)</label>
              <input className="atrim-input" type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="0:00" />
            </div>
            <div className="atrim-time-group">
              <label className="atrim-label">End Time (MM:SS or seconds)</label>
              <input className="atrim-input" type="text" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="1:30" />
            </div>
          </div>

          {(status === "loading" || status === "trimming") && (
            <div className="atrim-progress">
              <p className="atrim-progress-label">{status === "loading" ? "Loading engine…" : "Trimming…"}</p>
              <div className="atrim-progress-bar">
                <div className="atrim-progress-fill" style={{ width: status === "loading" ? "10%" : "60%" }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="atrim-result">
              <div className="atrim-sizes">
                <div><p className="atrim-size-lbl">Original</p><p className="atrim-size-val">{fmtBytes(file.size)}</p></div>
                <span className="atrim-arrow">→</span>
                <div><p className="atrim-size-lbl">Trimmed</p><p className="atrim-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="atrim-btn" onClick={handleDownload}>⬇ Download Trimmed Audio</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="atrim-btn" onClick={handleTrim}>Trim Audio</button>
          )}
        </div>
      )}
    </div>
  );
}
