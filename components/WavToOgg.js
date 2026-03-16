"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function WavToOgg() {
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
    if (!f.name.toLowerCase().endsWith(".wav") && f.type !== "audio/wav") {
      setError("Please upload a WAV file.");
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
      await ffmpeg.writeFile("input.wav", await fetchFile(file));
      await ffmpeg.exec(["-i", "input.wav", "-c:a", "libvorbis", "output.ogg"]);
      const data = await ffmpeg.readFile("output.ogg");
      const blob = new Blob([data.buffer], { type: "audio/ogg" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile("input.wav");
      await ffmpeg.deleteFile("output.ogg");
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
    a.download = `${base}.ogg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="wavogg-wrap">
      {error && (
        <div className="wavogg-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="wavogg-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`wavogg-drop${dragging ? " wavogg-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept=".wav,audio/wav" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="wavogg-drop-icon">🎵</div>
          <p className="wavogg-drop-title">Drag & Drop WAV file here</p>
          <p className="wavogg-drop-sub">WAV files only · Click to browse</p>
          <button className="wavogg-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select WAV File</button>
        </div>
      ) : (
        <div className="wavogg-card">
          <div className="wavogg-file-info">
            <span className="wavogg-file-icon">🎵</span>
            <div>
              <p className="wavogg-file-name">{file.name}</p>
              <p className="wavogg-file-meta">{fmtBytes(file.size)} · WAV</p>
            </div>
            <button className="wavogg-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="wavogg-progress">
              <p className="wavogg-progress-label">{status === "loading" ? "Loading engine…" : `Converting… ${progress}%`}</p>
              <div className="wavogg-progress-bar">
                <div className="wavogg-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="wavogg-result">
              <div className="wavogg-sizes">
                <div><p className="wavogg-size-lbl">Original (WAV)</p><p className="wavogg-size-val">{fmtBytes(file.size)}</p></div>
                <span className="wavogg-arrow">→</span>
                <div><p className="wavogg-size-lbl">Converted (OGG)</p><p className="wavogg-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <span className="wavogg-badge">
                {file.size > 0 ? `${Math.round((1 - result.size / file.size) * 100)}% smaller` : "Converted"}
              </span>
              <button className="wavogg-download-btn" onClick={handleDownload}>Download OGG</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="wavogg-btn" onClick={handleConvert}>Convert to OGG</button>
          )}
        </div>
      )}
    </div>
  );
}
