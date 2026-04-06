"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

export default function GifResize() {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(0);
  const [keepRatio, setKeepRatio] = useState(true);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);
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
    if (!f.name.toLowerCase().endsWith(".gif") && f.type !== "image/gif") { setError("Please upload a GIF file."); return; }
    setFile(f); setResult(null); setError(""); setStatus("idle");
  }

  const handleResize = useCallback(async () => {
    if (!file) return;
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("processing");
      await ffmpeg.writeFile("input.gif", await fetchFile(file));
      const scaleFilter = keepRatio
        ? `scale=${width}:-1:flags=lanczos`
        : `scale=${width}:${height || -1}:flags=lanczos`;
      await ffmpeg.exec(["-i","input.gif","-vf",scaleFilter,"output.gif"]);
      const data = await ffmpeg.readFile("output.gif");
      const blob = new Blob([data.buffer], { type: "image/gif" });
      setResult({ blob, size: blob.size, url: URL.createObjectURL(blob) });
      setStatus("done");
      await ffmpeg.deleteFile("input.gif");
      await ffmpeg.deleteFile("output.gif");
    } catch (e) {
      setError("Resize failed: " + e.message);
      setStatus("error");
    }
  }, [file, width, height, keepRatio]);

  function download() {
    const a = document.createElement("a");
    a.href = result.url;
    a.download = file.name.replace(".gif", "-resized.gif");
    a.click();
  }

  return (
    <div className="gifres-wrap">
      <div
        className={`gifres-drop${dragging?" gifres-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".gif,image/gif" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="gifres-drop-icon">🎞</div>
        <p className="gifres-drop-title">{file ? file.name : "Drop GIF or click to upload"}</p>
        {file && <p className="gifres-drop-sub">{fmtBytes(file.size)}</p>}
      </div>

      <div className="gifres-controls">
        <div className="gifres-ctrl-row">
          <label className="gifres-ctrl-label">Width (px)</label>
          <input className="gifres-num-input" type="number" min={1} max={3000} value={width} onChange={e => setWidth(+e.target.value)} />
          <label className="gifres-toggle-label">
            <input type="checkbox" checked={keepRatio} onChange={e => setKeepRatio(e.target.checked)} />
            Keep aspect ratio
          </label>
        </div>
        {!keepRatio && (
          <div className="gifres-ctrl-row">
            <label className="gifres-ctrl-label">Height (px)</label>
            <input className="gifres-num-input" type="number" min={1} max={3000} value={height || ""} onChange={e => setHeight(+e.target.value)} placeholder="auto" />
          </div>
        )}
        <button className="gifres-btn" onClick={handleResize} disabled={!file || status==="loading"||status==="processing"}>
          {status==="loading"?"Loading FFmpeg…":status==="processing"?`Resizing… ${progress}%`:"Resize GIF"}
        </button>
      </div>

      {error && <p className="gifres-error">{error}</p>}

      {result && (
        <div className="gifres-result">
          <div className="gifres-result-info">
            <span>Output: {fmtBytes(result.size)}</span>
            <span>Saved: {Math.max(0,Math.round((1-result.size/file.size)*100))}%</span>
            <button className="gifres-dl-btn" onClick={download}>Download GIF</button>
          </div>
          <img src={result.url} alt="Resized GIF" className="gifres-preview" />
        </div>
      )}
    </div>
  );
}
