"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

const ACCEPTED_EXTS = [".mp3", ".wav", ".ogg"];

export default function AudioVolumeAdjuster() {
  const [file, setFile] = useState(null);
  const [volume, setVolume] = useState(100);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
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
    const ext = f.name.toLowerCase().match(/\.[^.]+$/)?.[0] || "";
    if (!ACCEPTED_EXTS.includes(ext) && !f.type.startsWith("audio/")) {
      setError("Please upload an MP3, WAV, or OGG file.");
      return;
    }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  }

  const handleProcess = useCallback(async () => {
    if (!file) return;
    setStatus("loading");
    setError("");
    setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("converting");
      const ext = file.name.split(".").pop().toLowerCase() || "mp3";
      const inputName = `input.${ext}`;
      const outputName = `output.${ext}`;
      const volumeVal = (volume / 100).toFixed(2);
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, "-filter:a", `volume=${volumeVal}`, outputName]);
      const data = await ffmpeg.readFile(outputName);
      const mime = ext === "ogg" ? "audio/ogg" : ext === "wav" ? "audio/wav" : "audio/mpeg";
      const blob = new Blob([data.buffer], { type: mime });
      setResult({ blob, size: blob.size, ext });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch (err) {
      setError("Processing failed: " + err.message);
      setStatus("error");
    }
  }, [file, volume]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-vol${volume}.${result.ext}`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const volumeLabel = volume < 100 ? `${volume}% (reduced)` : volume > 100 ? `${volume}% (boosted)` : `${volume}% (original)`;

  return (
    <div className="avol-wrap">
      {error && (
        <div className="avol-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="avol-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`avol-drop${dragging ? " avol-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept=".mp3,.wav,.ogg,audio/mpeg,audio/wav,audio/ogg" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="avol-drop-icon">🔊</div>
          <p className="avol-drop-title">Drag & Drop Audio here</p>
          <p className="avol-drop-sub">MP3 · WAV · OGG · Click to browse</p>
          <button className="avol-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Audio File</button>
        </div>
      ) : (
        <div className="avol-card">
          <div className="avol-file-info">
            <span className="avol-file-icon">🎵</span>
            <div>
              <p className="avol-file-name">{file.name}</p>
              <p className="avol-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="avol-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); setPreviewUrl(null); }}>×</button>
          </div>

          <div className="avol-vol-row">
            <label className="avol-vol-label">Volume: <span className="avol-vol-val">{volumeLabel}</span></label>
            <input
              className="avol-vol-slider"
              type="range"
              min={0}
              max={200}
              step={5}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>

          {previewUrl && (
            <div className="avol-preview">
              <p className="avol-preview-label">Preview (original audio):</p>
              <audio controls src={previewUrl} className="avol-audio-player" />
            </div>
          )}

          {(status === "loading" || status === "converting") && (
            <div className="avol-progress">
              <p className="avol-progress-label">{status === "loading" ? "Loading engine…" : `Processing… ${progress}%`}</p>
              <div className="avol-progress-bar">
                <div className="avol-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="avol-result">
              <p className="avol-result-label">Volume adjusted to {volume}% — ready to download</p>
              <button className="avol-download-btn" onClick={handleDownload}>Download Adjusted Audio</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="avol-btn" onClick={handleProcess}>Apply Volume ({volume}%)</button>
          )}
        </div>
      )}
    </div>
  );
}
