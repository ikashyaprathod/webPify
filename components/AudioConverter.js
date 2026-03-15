"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

const OUTPUT_FORMATS = {
  mp3:  { label: "MP3",  ext: "mp3",  mime: "audio/mpeg",   args: ["-acodec", "libmp3lame", "-q:a", "2"] },
  wav:  { label: "WAV",  ext: "wav",  mime: "audio/wav",    args: [] },
  ogg:  { label: "OGG",  ext: "ogg",  mime: "audio/ogg",    args: ["-acodec", "libvorbis"] },
  aac:  { label: "AAC",  ext: "aac",  mime: "audio/aac",    args: ["-acodec", "aac"] },
  flac: { label: "FLAC", ext: "flac", mime: "audio/flac",   args: ["-acodec", "flac"] },
};

export default function AudioConverter({ defaultOutputFormat = "mp3" }) {
  const [file, setFile] = useState(null);
  const [outputFmt, setOutputFmt] = useState(defaultOutputFormat);
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
    if (!f.type.startsWith("audio/") && !/\.(mp3|wav|aac|ogg|flac|m4a)$/i.test(f.name)) {
      setError("Please upload an audio file (MP3, WAV, AAC, OGG, FLAC).");
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
      const ext = file.name.split(".").pop() || "mp3";
      const inputName = `input.${ext}`;
      const fmt = OUTPUT_FORMATS[outputFmt];
      const outputName = `output.${fmt.ext}`;
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      await ffmpeg.exec(["-i", inputName, ...fmt.args, outputName]);
      const data = await ffmpeg.readFile(outputName);
      const blob = new Blob([data.buffer], { type: fmt.mime });
      setResult({ blob, size: blob.size, fmt });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
    } catch (err) {
      setError("Conversion failed: " + err.message);
      setStatus("error");
    }
  }, [file, outputFmt]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}.${result.fmt.ext}`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="acnv-wrap">
      {error && (
        <div className="acnv-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="acnv-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`acnv-drop${dragging ? " acnv-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="audio/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="acnv-drop-icon">🔄</div>
          <p className="acnv-drop-title">Drag & Drop Audio here</p>
          <p className="acnv-drop-sub">MP3 · WAV · OGG · AAC · FLAC · Click to browse</p>
          <button className="acnv-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Audio</button>
        </div>
      ) : (
        <div className="acnv-card">
          <div className="acnv-file-info">
            <span className="acnv-file-icon">🎵</span>
            <div>
              <p className="acnv-file-name">{file.name}</p>
              <p className="acnv-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="acnv-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          <div className="acnv-fmt-row">
            <label className="acnv-label">Output Format:</label>
            <div className="acnv-pill-group">
              {Object.entries(OUTPUT_FORMATS).map(([k, v]) => (
                <button key={k} className={`acnv-pill${outputFmt === k ? " acnv-pill--on" : ""}`} onClick={() => setOutputFmt(k)} disabled={status === "converting" || status === "loading"}>{v.label}</button>
              ))}
            </div>
          </div>

          {(status === "loading" || status === "converting") && (
            <div className="acnv-progress">
              <p className="acnv-progress-label">{status === "loading" ? "Loading engine…" : `Converting… ${progress}%`}</p>
              <div className="acnv-progress-bar">
                <div className="acnv-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
              </div>
            </div>
          )}

          {status === "done" && result && (
            <div className="acnv-result">
              <div className="acnv-sizes">
                <div><p className="acnv-size-lbl">Original</p><p className="acnv-size-val">{fmtBytes(file.size)}</p></div>
                <span className="acnv-arrow">→</span>
                <div><p className="acnv-size-lbl">Converted ({result.fmt.label})</p><p className="acnv-size-val">{fmtBytes(result.size)}</p></div>
              </div>
              <button className="acnv-btn" onClick={handleDownload}>⬇ Download {result.fmt.label}</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="acnv-btn" onClick={handleConvert}>Convert to {OUTPUT_FORMATS[outputFmt].label}</button>
          )}
        </div>
      )}
    </div>
  );
}
