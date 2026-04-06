"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

export default function GifCreator() {
  const [files, setFiles] = useState([]);
  const [fps, setFps] = useState(10);
  const [width, setWidth] = useState(480);
  const [loop, setLoop] = useState(0); // 0 = infinite
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

  function addFiles(newFiles) {
    const valid = [...newFiles].filter(f => /\.(png|jpg|jpeg|webp|bmp)$/i.test(f.name));
    if (!valid.length) { setError("Please upload PNG, JPEG, or WebP images."); return; }
    setFiles(prev => [...prev, ...valid]);
    setError(""); setResult(null);
  }

  function removeFile(i) { setFiles(prev => prev.filter((_, idx) => idx !== i)); }
  function move(i, dir) {
    setFiles(prev => {
      const arr = [...prev];
      const j = i + dir;
      if (j < 0 || j >= arr.length) return arr;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return arr;
    });
  }

  const handleCreate = useCallback(async () => {
    if (files.length < 2) { setError("Add at least 2 images."); return; }
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("processing");
      const names = [];
      for (let i = 0; i < files.length; i++) {
        const name = `frame${String(i).padStart(4,"0")}.png`;
        await ffmpeg.writeFile(name, await fetchFile(files[i]));
        names.push(name);
      }
      await ffmpeg.exec([
        "-framerate", String(fps),
        "-i", "frame%04d.png",
        "-vf", `scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer`,
        "-loop", String(loop),
        "output.gif"
      ]);
      const data = await ffmpeg.readFile("output.gif");
      const blob = new Blob([data.buffer], { type: "image/gif" });
      setResult({ blob, size: blob.size, url: URL.createObjectURL(blob) });
      setStatus("done");
      for (const n of names) await ffmpeg.deleteFile(n).catch(() => {});
      await ffmpeg.deleteFile("output.gif").catch(() => {});
    } catch (e) {
      setError("Creation failed: " + e.message);
      setStatus("error");
    }
  }, [files, fps, width, loop]);

  return (
    <div className="gifmk-wrap">
      <div
        className={`gifmk-drop${dragging?" gifmk-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp" multiple style={{display:"none"}} onChange={e => addFiles(e.target.files)} />
        <div className="gifmk-drop-icon">🖼</div>
        <p className="gifmk-drop-title">Drop images or click to upload</p>
        <p className="gifmk-drop-sub">PNG, JPEG, WebP — order matters</p>
      </div>

      {files.length > 0 && (
        <div className="gifmk-file-list">
          {files.map((f, i) => (
            <div key={i} className="gifmk-file-item">
              <span className="gifmk-file-num">{i+1}</span>
              <span className="gifmk-file-name">{f.name}</span>
              <span className="gifmk-file-size">{fmtBytes(f.size)}</span>
              <button className="gifmk-move-btn" onClick={() => move(i,-1)} disabled={i===0}>↑</button>
              <button className="gifmk-move-btn" onClick={() => move(i,1)} disabled={i===files.length-1}>↓</button>
              <button className="gifmk-remove-btn" onClick={() => removeFile(i)}>✕</button>
            </div>
          ))}
        </div>
      )}

      <div className="gifmk-controls">
        <div className="gifmk-ctrl-row">
          <label className="gifmk-ctrl-label">FPS</label>
          <input className="gifmk-num-input" type="number" min={1} max={30} value={fps} onChange={e => setFps(+e.target.value)} />
          <label className="gifmk-ctrl-label">Width (px)</label>
          <input className="gifmk-num-input" type="number" min={50} max={2000} value={width} onChange={e => setWidth(+e.target.value)} />
          <label className="gifmk-ctrl-label">Loops</label>
          <select className="gifmk-select" value={loop} onChange={e => setLoop(+e.target.value)}>
            <option value={0}>Infinite</option>
            <option value={1}>1×</option>
            <option value={3}>3×</option>
            <option value={5}>5×</option>
          </select>
        </div>
        <button className="gifmk-btn" onClick={handleCreate} disabled={files.length<2||status==="loading"||status==="processing"}>
          {status==="loading"?"Loading FFmpeg…":status==="processing"?`Creating… ${progress}%`:"Create GIF"}
        </button>
      </div>

      {error && <p className="gifmk-error">{error}</p>}

      {result && (
        <div className="gifmk-result">
          <div className="gifmk-result-info">
            <span>GIF size: {fmtBytes(result.size)}</span>
            <button className="gifmk-dl-btn" onClick={() => { const a=document.createElement("a"); a.href=result.url; a.download="created.gif"; a.click(); }}>Download GIF</button>
          </div>
          <img src={result.url} alt="Created GIF" className="gifmk-preview" />
        </div>
      )}
    </div>
  );
}
