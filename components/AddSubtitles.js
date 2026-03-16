"use client";

import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function hexToAbgr(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `&H00${b.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${r.toString(16).padStart(2, "0")}`.toUpperCase();
}

export default function AddSubtitles() {
  const [videoFile, setVideoFile] = useState(null);
  const [srtFile, setSrtFile] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [fontColor, setFontColor] = useState("#ffffff");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [draggingVideo, setDraggingVideo] = useState(false);
  const [draggingSrt, setDraggingSrt] = useState(false);
  const videoInputRef = useRef(null);
  const srtInputRef = useRef(null);
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

  function handleVideoFile(f) {
    if (!f) return;
    if (!f.type.startsWith("video/")) {
      setError("Please upload a video file.");
      return;
    }
    setVideoFile(f);
    setError("");
  }

  function handleSrtFile(f) {
    if (!f) return;
    if (!f.name.toLowerCase().endsWith(".srt") && f.type !== "application/x-subrip") {
      setError("Please upload an SRT subtitle file.");
      return;
    }
    setSrtFile(f);
    setError("");
  }

  const handleProcess = useCallback(async () => {
    if (!videoFile || !srtFile) {
      setError("Please upload both a video file and an SRT subtitle file.");
      return;
    }
    setStatus("loading");
    setError("");
    setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("converting");
      const ext = videoFile.name.split(".").pop().toLowerCase() || "mp4";
      const inputName = `input.${ext}`;
      const outputName = `output.${ext}`;
      const abgrColor = hexToAbgr(fontColor);
      const forceStyle = `FontSize=${fontSize},PrimaryColour=${abgrColor},Outline=1,Shadow=0`;
      await ffmpeg.writeFile(inputName, await fetchFile(videoFile));
      await ffmpeg.writeFile("subs.srt", await fetchFile(srtFile));
      await ffmpeg.exec(["-i", inputName, "-vf", `subtitles=subs.srt:force_style='${forceStyle}'`, outputName]);
      const data = await ffmpeg.readFile(outputName);
      const mime = videoFile.type || "video/mp4";
      const blob = new Blob([data.buffer], { type: mime });
      setResult({ blob, size: blob.size, ext });
      setStatus("done");
      await ffmpeg.deleteFile(inputName);
      await ffmpeg.deleteFile(outputName);
      await ffmpeg.deleteFile("subs.srt");
    } catch (err) {
      setError("Processing failed: " + err.message);
      setStatus("error");
    }
  }, [videoFile, srtFile, fontSize, fontColor]);

  function handleDownload() {
    if (!result) return;
    const base = videoFile.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-subtitled.${result.ext}`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const isReady = videoFile && srtFile;

  return (
    <div className="asubs-wrap">
      {error && (
        <div className="asubs-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="asubs-close-btn">×</button>
        </div>
      )}

      <div className="asubs-drops">
        <div
          className={`asubs-drop${draggingVideo ? " asubs-drop--active" : ""}${videoFile ? " asubs-drop--done" : ""}`}
          onClick={() => videoInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDraggingVideo(false); handleVideoFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDraggingVideo(true); }}
          onDragLeave={() => setDraggingVideo(false)}
        >
          <input ref={videoInputRef} type="file" accept="video/*" style={{ display: "none" }} onChange={(e) => handleVideoFile(e.target.files[0])} />
          <div className="asubs-drop-icon">{videoFile ? "✓" : "🎬"}</div>
          <p className="asubs-drop-title">{videoFile ? videoFile.name : "Drop Video Here"}</p>
          <p className="asubs-drop-sub">{videoFile ? fmtBytes(videoFile.size) : "MP4 · MOV · WebM"}</p>
        </div>

        <div
          className={`asubs-drop${draggingSrt ? " asubs-drop--active" : ""}${srtFile ? " asubs-drop--done" : ""}`}
          onClick={() => srtInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDraggingSrt(false); handleSrtFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDraggingSrt(true); }}
          onDragLeave={() => setDraggingSrt(false)}
        >
          <input ref={srtInputRef} type="file" accept=".srt" style={{ display: "none" }} onChange={(e) => handleSrtFile(e.target.files[0])} />
          <div className="asubs-drop-icon">{srtFile ? "✓" : "📄"}</div>
          <p className="asubs-drop-title">{srtFile ? srtFile.name : "Drop SRT Here"}</p>
          <p className="asubs-drop-sub">{srtFile ? fmtBytes(srtFile.size) : "SRT subtitle file"}</p>
        </div>
      </div>

      {isReady && (
        <div className="asubs-controls">
          <div className="asubs-control-row">
            <label className="asubs-label">Font Size: <span className="asubs-val">{fontSize}px</span></label>
            <input
              className="asubs-font-size"
              type="range"
              min={12}
              max={32}
              step={1}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </div>
          <div className="asubs-control-row">
            <label className="asubs-label">Subtitle Color:</label>
            <input
              className="asubs-color-input"
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
            <span className="asubs-color-preview" style={{ background: fontColor }} />
          </div>
        </div>
      )}

      {(status === "loading" || status === "converting") && (
        <div className="asubs-progress">
          <p className="asubs-progress-label">{status === "loading" ? "Loading engine…" : `Burning subtitles… ${progress}%`}</p>
          <div className="asubs-progress-bar">
            <div className="asubs-progress-fill" style={{ width: status === "loading" ? "8%" : `${Math.max(progress, 3)}%` }} />
          </div>
        </div>
      )}

      {status === "done" && result && (
        <div className="asubs-result">
          <p className="asubs-result-label">Subtitles burned in — ready to download</p>
          <button className="asubs-download-btn" onClick={handleDownload}>Download Video with Subtitles</button>
        </div>
      )}

      {(status === "idle" || status === "error") && isReady && (
        <button className="asubs-btn" onClick={handleProcess}>Burn Subtitles</button>
      )}

      {!isReady && (
        <p className="asubs-hint">Upload both a video file and an SRT subtitle file to get started.</p>
      )}
    </div>
  );
}
