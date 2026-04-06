"use client";
import { useRef, useState, useCallback } from "react";

const CDN_BASE = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B","KB","MB","GB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+s[i];
}

const ACCEPTED = [".mp3",".wav",".ogg",".aac",".m4a",".flac"];

export default function AudioMerger() {
  const [files, setFiles] = useState([]);
  const [mode, setMode] = useState("concat"); // concat | mix
  const [format, setFormat] = useState("mp3");
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
    const valid = [...newFiles].filter(f => ACCEPTED.some(ext => f.name.toLowerCase().endsWith(ext)));
    if (!valid.length) { setError("Upload MP3, WAV, OGG, AAC, or FLAC files."); return; }
    setFiles(prev => [...prev, ...valid]);
    setError(""); setResult(null);
  }

  function removeFile(i) { setFiles(prev => prev.filter((_,idx) => idx!==i)); }
  function move(i, dir) {
    setFiles(prev => {
      const arr = [...prev];
      const j = i + dir;
      if (j<0||j>=arr.length) return arr;
      [arr[i],arr[j]] = [arr[j],arr[i]];
      return arr;
    });
  }

  const handleMerge = useCallback(async () => {
    if (files.length < 2) { setError("Add at least 2 audio files to merge."); return; }
    setStatus("loading"); setError(""); setProgress(0);
    try {
      const { fetchFile } = await import("@ffmpeg/util");
      const ffmpeg = await loadFFmpeg();
      setStatus("processing");
      const mime = format === "mp3" ? "audio/mpeg" : format === "ogg" ? "audio/ogg" : "audio/wav";
      const inputNames = [];
      for (let i = 0; i < files.length; i++) {
        const ext = files[i].name.split(".").pop() || "mp3";
        const name = `in${i}.${ext}`;
        await ffmpeg.writeFile(name, await fetchFile(files[i]));
        inputNames.push(name);
      }
      let args;
      if (mode === "concat") {
        const listContent = inputNames.map(n => `file '${n}'`).join("\n");
        const listBlob = new Blob([listContent], { type: "text/plain" });
        await ffmpeg.writeFile("list.txt", await fetchFile(listBlob));
        args = ["-f","concat","-safe","0","-i","list.txt","-b:a","192k",`output.${format}`];
      } else {
        const inputs = inputNames.flatMap(n => ["-i", n]);
        args = [...inputs, "-filter_complex", `amix=inputs=${files.length}:duration=first`, "-b:a","192k", `output.${format}`];
      }
      await ffmpeg.exec(args);
      const data = await ffmpeg.readFile(`output.${format}`);
      const blob = new Blob([data.buffer], { type: mime });
      setResult({ blob, size: blob.size, url: URL.createObjectURL(blob) });
      setStatus("done");
      for (const n of inputNames) await ffmpeg.deleteFile(n).catch(()=>{});
      if (mode==="concat") await ffmpeg.deleteFile("list.txt").catch(()=>{});
      await ffmpeg.deleteFile(`output.${format}`).catch(()=>{});
    } catch (e) {
      setError("Merge failed: " + e.message);
      setStatus("error");
    }
  }, [files, mode, format]);

  return (
    <div className="amerge-wrap">
      <div
        className={`amerge-drop${dragging?" amerge-drop--active":""}`}
        onDrop={e => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".mp3,.wav,.ogg,.aac,.m4a,.flac" multiple style={{display:"none"}} onChange={e => addFiles(e.target.files)} />
        <div className="amerge-drop-icon">🎵</div>
        <p className="amerge-drop-title">Drop audio files or click to upload</p>
        <p className="amerge-drop-sub">MP3, WAV, OGG, AAC, FLAC · Add 2 or more files</p>
      </div>

      {files.length > 0 && (
        <div className="amerge-file-list">
          {files.map((f,i) => (
            <div key={i} className="amerge-file-item">
              <span className="amerge-file-num">{i+1}</span>
              <span className="amerge-file-name">{f.name}</span>
              <span className="amerge-file-size">{fmtBytes(f.size)}</span>
              <button className="amerge-move-btn" onClick={()=>move(i,-1)} disabled={i===0}>↑</button>
              <button className="amerge-move-btn" onClick={()=>move(i,1)} disabled={i===files.length-1}>↓</button>
              <button className="amerge-remove-btn" onClick={()=>removeFile(i)}>✕</button>
            </div>
          ))}
        </div>
      )}

      <div className="amerge-controls">
        <div className="amerge-mode-row">
          <span className="amerge-ctrl-label">Mode:</span>
          {[["concat","Sequential (one after another)"],["mix","Overlay (mix simultaneously)"]].map(([v,l]) => (
            <button key={v} className={`amerge-mode-btn${mode===v?" amerge-mode-btn--on":""}`} onClick={()=>setMode(v)}>{l}</button>
          ))}
        </div>
        <div className="amerge-fmt-row">
          <span className="amerge-ctrl-label">Output format:</span>
          {[["mp3","MP3"],["wav","WAV"],["ogg","OGG"]].map(([v,l]) => (
            <button key={v} className={`amerge-fmt-btn${format===v?" amerge-fmt-btn--on":""}`} onClick={()=>setFormat(v)}>{l}</button>
          ))}
        </div>
        <button className="amerge-btn" onClick={handleMerge} disabled={files.length<2||status==="loading"||status==="processing"}>
          {status==="loading"?"Loading FFmpeg…":status==="processing"?`Merging… ${progress}%`:"Merge Audio Files"}
        </button>
      </div>

      {error && <p className="amerge-error">{error}</p>}

      {result && (
        <div className="amerge-result">
          <div className="amerge-result-info">
            <span>Output: {fmtBytes(result.size)} · {format.toUpperCase()}</span>
            <button className="amerge-dl-btn" onClick={()=>{ const a=document.createElement("a"); a.href=result.url; a.download=`merged.${format}`; a.click(); }}>Download</button>
          </div>
          <audio controls src={result.url} className="amerge-audio" />
        </div>
      )}
    </div>
  );
}
