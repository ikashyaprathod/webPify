"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

export default function AacToMp3() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState("192");
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
    if (!f.name.toLowerCase().match(/\.(aac|m4a)$/) && !["audio/aac","audio/mp4","audio/x-m4a"].includes(f.type)) {
      setError("Please upload an AAC or M4A file.");
      return;
    }
    setFile(f); setResult(null); setError(""); setStatus("idle");
  }

  const handleConvert = useCallback(async () => {
    if (!file) return;
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("converting");
      const ext = file.name.split(".").pop() || "aac";
      await ffmpeg.writeFile(`input.${ext}`, await fetchFile(file));
      await ffmpeg.exec(["-i",`input.${ext}`,"-b:a",`${quality}k`,"-ar","44100","output.mp3"]);
      const data = await ffmpeg.readFile("output.mp3");
      const blob = new Blob([data.buffer], { type: "audio/mpeg" });
      setResult({ blob, size: blob.size, url: URL.createObjectURL(blob) });
      setStatus("done");
      await ffmpeg.deleteFile(`input.${ext}`);
      await ffmpeg.deleteFile("output.mp3");
    } catch (e) {
      setError("Conversion failed: " + e.message);
      setStatus("error");
    }
  }, [file, quality]);

  return (
    <div className="aac2mp3-wrap">
      <div
        className={`aac2mp3-drop${dragging?" aac2mp3-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".aac,.m4a,audio/aac,audio/mp4" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="aac2mp3-drop-icon">🎵</div>
        <p className="aac2mp3-drop-title">{file ? file.name : "Drop AAC / M4A file or click to upload"}</p>
        {file && <p className="aac2mp3-drop-sub">{fmtBytes(file.size)}</p>}
      </div>

      <div className="aac2mp3-controls">
        <span className="aac2mp3-ctrl-label">Output quality (MP3 bitrate):</span>
        <div className="aac2mp3-quality-row">
          {["128","192","256","320"].map(q => (
            <button key={q} className={`aac2mp3-q-btn${quality===q?" aac2mp3-q-btn--on":""}`} onClick={() => setQuality(q)}>{q}k</button>
          ))}
        </div>
        <button className="aac2mp3-btn" onClick={handleConvert} disabled={!file||status==="loading"||status==="converting"}>
          {status==="loading"?"Loading FFmpeg…":status==="converting"?`Converting… ${progress}%`:"Convert to MP3"}
        </button>
      </div>

      {error && <p className="aac2mp3-error">{error}</p>}

      {result && (
        <div className="aac2mp3-result">
          <div className="aac2mp3-result-info">
            <span>{fmtBytes(result.size)} · MP3 {quality}kbps</span>
            <button className="aac2mp3-dl-btn" onClick={() => { const a=document.createElement("a"); a.href=result.url; a.download=file.name.replace(/\.(aac|m4a)$/i,".mp3"); a.click(); }}>Download MP3</button>
          </div>
          <audio controls src={result.url} className="aac2mp3-audio" />
        </div>
      )}
    </div>
  );
}
