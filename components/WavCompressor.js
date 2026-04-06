"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

export default function WavCompressor() {
  const [file, setFile] = useState(null);
  const [bitrate, setBitrate] = useState("192");
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
    if (!f.name.toLowerCase().match(/\.(wav|wave)$/) && f.type !== "audio/wav") { setError("Please upload a WAV file."); return; }
    setFile(f); setResult(null); setError(""); setStatus("idle");
  }

  const handleCompress = useCallback(async () => {
    if (!file) return;
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("compressing");
      await ffmpeg.writeFile("input.wav", await fetchFile(file));
      await ffmpeg.exec(["-i","input.wav","-b:a",`${bitrate}k`,"-ar","44100","output.mp3"]);
      const data = await ffmpeg.readFile("output.mp3");
      const blob = new Blob([data.buffer], { type: "audio/mpeg" });
      const reduction = Math.max(0, Math.round((1 - blob.size / file.size) * 100));
      setResult({ blob, size: blob.size, reduction, url: URL.createObjectURL(blob) });
      setStatus("done");
      await ffmpeg.deleteFile("input.wav");
      await ffmpeg.deleteFile("output.mp3");
    } catch (e) {
      setError("Compression failed: " + e.message);
      setStatus("error");
    }
  }, [file, bitrate]);

  function download() {
    const a = document.createElement("a");
    a.href = result.url;
    a.download = file.name.replace(/\.wav$/i, "-compressed.mp3");
    a.click();
  }

  return (
    <div className="wavcomp-wrap">
      <div
        className={`wavcomp-drop${dragging?" wavcomp-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".wav,audio/wav" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="wavcomp-drop-icon">🎵</div>
        <p className="wavcomp-drop-title">{file ? file.name : "Drop WAV file or click to upload"}</p>
        {file && <p className="wavcomp-drop-sub">{fmtBytes(file.size)}</p>}
      </div>

      <div className="wavcomp-controls">
        <span className="wavcomp-ctrl-label">Output bitrate (MP3):</span>
        <div className="wavcomp-bitrate-row">
          {["96","128","192","256","320"].map(b => (
            <button key={b} className={`wavcomp-br-btn${bitrate===b?" wavcomp-br-btn--on":""}`} onClick={() => setBitrate(b)}>{b}k</button>
          ))}
        </div>
        <button className="wavcomp-btn" onClick={handleCompress} disabled={!file||status==="loading"||status==="compressing"}>
          {status==="loading"?"Loading FFmpeg…":status==="compressing"?`Compressing… ${progress}%`:"Compress WAV → MP3"}
        </button>
      </div>

      {error && <p className="wavcomp-error">{error}</p>}

      {result && (
        <div className="wavcomp-result">
          <div className="wavcomp-result-row">
            <span className="wavcomp-result-label">Original (WAV)</span>
            <span className="wavcomp-result-val">{fmtBytes(file.size)}</span>
          </div>
          <div className="wavcomp-result-row">
            <span className="wavcomp-result-label">Compressed (MP3)</span>
            <span className="wavcomp-result-val wavcomp-result-val--green">{fmtBytes(result.size)}</span>
          </div>
          <div className="wavcomp-result-row">
            <span className="wavcomp-result-label">Size reduction</span>
            <span className="wavcomp-result-val wavcomp-result-val--blue">{result.reduction}% smaller</span>
          </div>
          <button className="wavcomp-dl-btn" onClick={download}>Download MP3</button>
          <audio controls src={result.url} className="wavcomp-audio" />
        </div>
      )}
    </div>
  );
}
