"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const FPS_OPTIONS   = [5, 10, 15, 20];
const SCALE_OPTIONS = [
  { label: "240px", value: 240 },
  { label: "320px", value: 320 },
  { label: "480px", value: 480 },
  { label: "640px", value: 640 },
];
const COLOR_OPTIONS = [64, 128, 192, 256];

function formatBytes(b) {
  if (b === 0) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function VideoToGif() {
  const [items,     setItems]     = useState([]);
  const [fps,       setFps]       = useState(15);
  const [scale,     setScale]     = useState(480);
  const [maxColors, setMaxColors] = useState(128);
  const [working,   setWorking]   = useState(false);
  const fileInputRef = useRef(null);
  const workerRef    = useRef(null);
  const pendingRef   = useRef([]);

  function getWorker() {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL("../workers/gifWorker.js", import.meta.url));
      workerRef.current.onmessage = ({ data }) => {
        const { type, id, pct, buffer, message } = data;
        if (type === "progress") {
          setItems(prev => prev.map(it => it.id === id ? { ...it, pct, status: "processing" } : it));
        } else if (type === "done") {
          const blob = new Blob([buffer], { type: "image/gif" });
          const url  = URL.createObjectURL(blob);
          setItems(prev => prev.map(it => it.id !== id ? it : {
            ...it, status: "done", pct: 100,
            outputUrl: url, outputSize: buffer.byteLength,
            reduction: it.origSize > 0
              ? ((it.origSize - buffer.byteLength) / it.origSize * 100).toFixed(1)
              : "0",
          }));
          processNext();
        } else if (type === "error") {
          setItems(prev => prev.map(it => it.id === id ? { ...it, status: "error", statusMsg: message } : it));
          processNext();
        }
      };
    }
    return workerRef.current;
  }

  function processNext() {
    const next = pendingRef.current.shift();
    if (!next) { setWorking(false); return; }
    setWorking(true);
    setItems(prev => prev.map(it => it.id === next.id ? { ...it, status: "processing", pct: 0 } : it));
    getWorker().postMessage({ type: "convert", id: next.id, file: next.file, settings: next.settings });
  }

  const processFiles = useCallback((fileList) => {
    const supported = ["video/mp4", "video/webm", "video/quicktime", "video/x-matroska"];
    const videos = Array.from(fileList).filter(f => supported.includes(f.type) || /\.(mp4|webm|mov|mkv)$/i.test(f.name));
    if (!videos.length) return;

    const newItems = videos.map(file => ({
      id: newId(), file, origSize: file.size, name: file.name,
      status: "queued", pct: 0, statusMsg: "",
      outputUrl: null, outputSize: 0, reduction: "0",
    }));

    setItems(prev => [...prev, ...newItems]);
    pendingRef.current.push(...newItems.map(it => ({
      id: it.id, file: it.file,
      settings: { task: "video-to-gif", fps, scale, maxColors },
    })));
    if (!working) processNext();
  }, [fps, scale, maxColors, working]);

  const handleReset = () => {
    setItems([]); pendingRef.current = []; setWorking(false);
    if (workerRef.current) { workerRef.current.terminate(); workerRef.current = null; }
  };

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl;
    a.download = item.name.replace(/\.[^.]+$/, "") + ".gif";
    a.click();
  };

  return (
    <div className="vtg-wrap">
      {items.length === 0 && (
        <div className="vtg-settings">
          <div className="vtg-group">
            <label>FPS</label>
            <div className="vtg-row">
              {FPS_OPTIONS.map(f => (
                <button key={f} className={`vtg-pill${fps===f?" vtg-pill--on":""}`} onClick={() => setFps(f)}>{f} fps</button>
              ))}
            </div>
          </div>
          <div className="vtg-group">
            <label>Width</label>
            <div className="vtg-row">
              {SCALE_OPTIONS.map(s => (
                <button key={s.value} className={`vtg-pill${scale===s.value?" vtg-pill--on":""}`} onClick={() => setScale(s.value)}>{s.label}</button>
              ))}
            </div>
          </div>
          <div className="vtg-group">
            <label>Colors</label>
            <div className="vtg-row">
              {COLOR_OPTIONS.map(c => (
                <button key={c} className={`vtg-pill${maxColors===c?" vtg-pill--on":""}`} onClick={() => setMaxColors(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {items.length === 0 ? (
        <div
          className="vtg-drop"
          onClick={() => fileInputRef.current?.click()}
          onDrop={e => { e.preventDefault(); processFiles(e.dataTransfer.files); }}
          onDragOver={e => e.preventDefault()}
        >
          <input ref={fileInputRef} type="file" accept="video/*" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎥</div>
          <p className="vtg-drop-title">Drop video files here or click to select</p>
          <p className="vtg-drop-hint">Supports MP4, WebM, MOV • Converts to animated GIF</p>
        </div>
      ) : (
        <>
          <div className="vtg-bar">
            <button className="vtg-btn vtg-btn--blue" onClick={() => fileInputRef.current?.click()} disabled={working}>Add More Videos</button>
            <button className="vtg-btn vtg-btn--red" onClick={handleReset}>Reset</button>
          </div>
          <div className="vtg-list">
            {items.map(item => (
              <div key={item.id} className={`vtg-item vtg-item--${item.status}`}>
                <div className="vtg-thumb">
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt="GIF preview" />
                    : <span style={{ fontSize: "1.5rem" }}>🎥</span>
                  }
                </div>
                <div className="vtg-info">
                  <p className="vtg-name">{item.name}</p>
                  {item.status === "queued"     && <p className="vtg-sub">Waiting...</p>}
                  {item.status === "processing" && (
                    <div>
                      <p className="vtg-sub vtg-sub--blue">Converting… {item.pct}%</p>
                      <div className="vtg-prog"><div style={{ width: item.pct + "%", height: "100%", background: "var(--primary,#0070f3)", borderRadius: "2px", transition: "width 0.3s" }} /></div>
                    </div>
                  )}
                  {item.status === "done" && (
                    <p className="vtg-sub">{formatBytes(item.origSize)} → {formatBytes(item.outputSize)} GIF</p>
                  )}
                  {item.status === "error" && <p className="vtg-sub vtg-sub--red">{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <button className="vtg-btn vtg-btn--blue vtg-btn--sm" onClick={() => handleDownload(item)}>Download GIF</button>
                )}
              </div>
            ))}
          </div>
          <input ref={fileInputRef} type="file" accept="video/*" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
        </>
      )}

      <style>{`
        .vtg-wrap { max-width: 800px; margin: 0 auto; padding: 1.5rem; }
        .vtg-settings { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        .vtg-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .vtg-group label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; opacity: 0.55; }
        .vtg-row { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .vtg-pill { padding: 0.375rem 0.75rem; border: 1.5px solid rgba(0,0,0,0.15); border-radius: 20px; background: transparent; cursor: pointer; font-size: 0.875rem; color: inherit; }
        .vtg-pill--on { background: var(--primary,#0070f3); color: white; border-color: var(--primary,#0070f3); }
        .vtg-drop { border: 2px dashed var(--primary,#0070f3); border-radius: 12px; padding: 4rem 2rem; text-align: center; cursor: pointer; }
        .vtg-drop:hover { background: rgba(0,112,243,0.04); }
        .vtg-drop-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; }
        .vtg-drop-hint { font-size: 0.875rem; opacity: 0.6; }
        .vtg-bar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .vtg-btn { padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem; }
        .vtg-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .vtg-btn--blue { background: var(--primary,#0070f3); color: white; }
        .vtg-btn--red  { background: #ef4444; color: white; }
        .vtg-btn--sm   { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }
        .vtg-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .vtg-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1.5px solid rgba(0,0,0,0.1); border-radius: 8px; }
        .vtg-item--done { border-color: rgba(34,197,94,0.4); }
        .vtg-item--error { border-color: rgba(239,68,68,0.4); }
        .vtg-thumb { width: 72px; height: 56px; flex-shrink: 0; border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; }
        .vtg-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .vtg-info { flex: 1; min-width: 0; text-align: left; }
        .vtg-name { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .vtg-sub { font-size: 0.8125rem; opacity: 0.7; }
        .vtg-sub--blue { color: var(--primary,#0070f3); opacity: 1; font-weight: 600; }
        .vtg-sub--red  { color: #ef4444; opacity: 1; }
        .vtg-prog { height: 4px; background: rgba(0,0,0,0.08); border-radius: 2px; margin-top: 0.375rem; }
        @media (prefers-color-scheme: dark) {
          .vtg-pill { border-color: rgba(255,255,255,0.2); }
          .vtg-item { border-color: rgba(255,255,255,0.1); }
          .vtg-prog { background: rgba(255,255,255,0.1); }
        }
      `}</style>
    </div>
  );
}
