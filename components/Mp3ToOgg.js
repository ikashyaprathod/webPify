"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function Mp3ToOgg() {
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
    if (!f.name.toLowerCase().endsWith(".mp3") && f.type !== "audio/mpeg") {
      setError("Please upload an MP3 file.");
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
      await ffmpeg.writeFile("input.mp3", await fetchFile(file));
      await ffmpeg.exec(["-i", "input.mp3", "-c:a", "libvorbis", "output.ogg"]);
      const data = await ffmpeg.readFile("output.ogg");
      const blob = new Blob([data.buffer], { type: "audio/ogg" });
      setResult({ blob, size: blob.size });
      setStatus("done");
      await ffmpeg.deleteFile("input.mp3");
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
    <div className="mp3ogg-wrap">
      {error && (
        <div className="mp3ogg-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="mp3ogg-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`mp3ogg-drop${dragging ? " mp3ogg-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept=".mp3,audio/mpeg" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="mp3ogg-drop-icon">🎵</div>
          <p className="mp3ogg-drop-title">Drag & Drop MP3 file here</p>
          <p className="mp3ogg-drop-sub">MP3 files only · Click to browse</p>
          <button className="mp3ogg-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select MP3 File</button>
        </div>
      ) : (
        <div className="mp3ogg-card">
          <div className="mp3ogg-file-info">
            <span className="mp3ogg-file-icon">🎵</span>
            <div>
              <p className="mp3ogg-file-name">{file.name}</p>
              <p className="mp3ogg-file-meta">{fmtBytes(file.size)} · MP3</p>
            </div>
            <button className="mp3ogg-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="mp3ogg-progress">
              <p className="mp3ogg-progress-label">{status === "loading" ? "Loading engine…" : `Converting… ${progress}%`}</p>
              <div className="mp3ogg-progress-bar">
                <div className="mp3ogg-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="mp3ogg-result">
              <div className="mp3ogg-sizes">
                <div><p className="mp3ogg-size-lbl">Original (MP3)</p><p className="mp3ogg-size-val">{fmtBytes(file.size)}</p></div>
                <span className="mp3ogg-arrow">→</span>
                <div><p className="mp3ogg-size-lbl">Converted (OGG)</p><p className="mp3ogg-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <span className="mp3ogg-badge">OGG Vorbis — Open &amp; Royalty-Free</span>
              <button className="mp3ogg-download-btn" onClick={handleDownload}>Download OGG</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="mp3ogg-btn" onClick={handleConvert}>Convert to OGG</button>
          )}
        </div>
      )}
    </div>
  );
}
