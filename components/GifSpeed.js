"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

const SPEEDS = [
  { label: "0.25×", value: 0.25, pts: "4.0" },
  { label: "0.5×", value: 0.5, pts: "2.0" },
  { label: "1×", value: 1, pts: "1.0" },
  { label: "1.5×", value: 1.5, pts: "0.667" },
  { label: "2×", value: 2, pts: "0.5" },
  { label: "4×", value: 4, pts: "0.25" },
];

export default function GifSpeed() {
  const [file, setFile] = useState(null);
  const [speed, setSpeed] = useState(SPEEDS[4]); // 2×
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

  const handleProcess = useCallback(async () => {
    if (!file) return;
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("processing");
      await ffmpeg.writeFile("input.gif", await fetchFile(file));
      await ffmpeg.exec(["-i","input.gif","-vf",`setpts=${speed.pts}*PTS`,"output.gif"]);
      const data = await ffmpeg.readFile("output.gif");
      const blob = new Blob([data.buffer], { type: "image/gif" });
      setResult({ blob, size: blob.size, url: URL.createObjectURL(blob) });
      setStatus("done");
      await ffmpeg.deleteFile("input.gif");
      await ffmpeg.deleteFile("output.gif");
    } catch (e) {
      setError("Processing failed: " + e.message);
      setStatus("error");
    }
  }, [file, speed]);

  function download() {
    const a = document.createElement("a");
    a.href = result.url;
    a.download = file.name.replace(".gif", `-${speed.value}x.gif`);
    a.click();
  }

  return (
    <div className="gifspd-wrap">
      <div
        className={`gifspd-drop${dragging?" gifspd-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".gif,image/gif" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="gifspd-drop-icon">🎞</div>
        <p className="gifspd-drop-title">{file ? file.name : "Drop GIF or click to upload"}</p>
        {file && <p className="gifspd-drop-sub">{fmtBytes(file.size)}</p>}
      </div>

      <div className="gifspd-controls">
        <span className="gifspd-speed-label">Playback Speed:</span>
        <div className="gifspd-speed-row">
          {SPEEDS.map(s => (
            <button key={s.value} className={`gifspd-speed-btn${speed.value===s.value?" gifspd-speed-btn--on":""}`} onClick={() => setSpeed(s)}>{s.label}</button>
          ))}
        </div>
        <button className="gifspd-btn" onClick={handleProcess} disabled={!file||status==="loading"||status==="processing"}>
          {status==="loading"?"Loading FFmpeg…":status==="processing"?`Processing… ${progress}%`:"Change Speed"}
        </button>
      </div>

      {error && <p className="gifspd-error">{error}</p>}

      {result && (
        <div className="gifspd-result">
          <div className="gifspd-result-info">
            <span>Output: {fmtBytes(result.size)}</span>
            <button className="gifspd-dl-btn" onClick={download}>Download GIF</button>
          </div>
          <img src={result.url} alt="Speed-adjusted GIF" className="gifspd-preview" />
        </div>
      )}
    </div>
  );
}
