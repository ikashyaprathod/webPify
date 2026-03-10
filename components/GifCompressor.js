"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const TASKS = [
  { value: "gif-compress", label: "Compress GIF",   ext: "gif",  icon: "🗜️" },
  { value: "gif-to-mp4",   label: "Convert to MP4", ext: "mp4",  icon: "🎬" },
  { value: "gif-to-webm",  label: "Convert to WebM",ext: "webm", icon: "🌐" },
];

const FPS_OPTIONS   = [5, 10, 15, 20, 24];
const SCALE_OPTIONS = [240, 320, 480, 640, 800];
const QUALITY_MAP   = { high: 18, balanced: 23, max: 28 };

function formatBytes(b) {
  if (b === 0) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function GifCompressor({ defaultTask = "gif-compress" }) {
  const [items,     setItems]     = useState([]);
  const [task,      setTask]      = useState(defaultTask);
  const [fps,       setFps]       = useState(15);
  const [scale,     setScale]     = useState(480);
  const [quality,   setQuality]   = useState("balanced");
  const [maxColors, setMaxColors] = useState(128);
  const [working,   setWorking]   = useState(false);
  const fileInputRef = useRef(null);
  const workerRef    = useRef(null);
  const pendingRef   = useRef([]);

  // Lazily init worker
  function getWorker() {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL("../workers/gifWorker.js", import.meta.url));
      workerRef.current.onmessage = ({ data }) => {
        const { type, id, pct, buffer, fmt, alreadyOptimized, message } = data;

        if (type === "progress") {
          setItems(prev => prev.map(it =>
            it.id === id ? { ...it, pct, status: "processing" } : it
          ));
        } else if (type === "done") {
          if (alreadyOptimized || buffer.byteLength === 0) {
            setItems(prev => prev.map(it => {
              if (it.id !== id) return it;
              return { ...it, status: "already", pct: 100, statusMsg: "Already optimized — no smaller output possible" };
            }));
          } else {
            const blob = new Blob([buffer], { type: fmt === "mp4" ? "video/mp4" : fmt === "webm" ? "video/webm" : "image/gif" });
            const url  = URL.createObjectURL(blob);
            setItems(prev => prev.map(it => {
              if (it.id !== id) return it;
              return {
                ...it, status: "done", pct: 100,
                outputBlob: blob, outputUrl: url, outputFmt: fmt,
                outputSize: buffer.byteLength,
                reduction: it.origSize > 0
                  ? ((it.origSize - buffer.byteLength) / it.origSize * 100).toFixed(1)
                  : "0",
              };
            }));
          }
          processNext();
        } else if (type === "error") {
          setItems(prev => prev.map(it =>
            it.id === id ? { ...it, status: "error", pct: 0, statusMsg: message } : it
          ));
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
    setItems(prev => prev.map(it =>
      it.id === next.id ? { ...it, status: "processing", pct: 0 } : it
    ));
    const w = getWorker();
    w.postMessage({ type: "convert", id: next.id, file: next.file, settings: next.settings });
  }

  const processFiles = useCallback((fileList) => {
    const gifs = Array.from(fileList).filter(f => f.type === "image/gif" || f.name.toLowerCase().endsWith(".gif"));
    if (!gifs.length) return;

    const newItems = gifs.map(file => ({
      id: newId(),
      file,
      origSize: file.size,
      origUrl: URL.createObjectURL(file),
      name: file.name,
      status: "queued",
      pct: 0,
      statusMsg: "",
      outputBlob: null,
      outputUrl: null,
      outputFmt: null,
      outputSize: 0,
      reduction: "0",
    }));

    const settings = {
      task,
      fps,
      scale,
      maxColors,
      quality: QUALITY_MAP[quality],
    };

    setItems(prev => [...prev, ...newItems]);
    pendingRef.current.push(...newItems.map(it => ({ id: it.id, file: it.file, settings })));
    if (!working) processNext();
  }, [task, fps, scale, maxColors, quality, working]);

  // Clipboard paste
  useEffect(() => {
    const handler = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const files = [];
      for (const item of items) {
        if (item.type === "image/gif") files.push(item.getAsFile());
      }
      if (files.length) processFiles(files);
    };
    window.addEventListener("paste", handler);
    return () => window.removeEventListener("paste", handler);
  }, [processFiles]);

  const handleDrop = (e) => {
    e.preventDefault();
    processFiles(e.dataTransfer.files);
  };

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl;
    const baseName = item.name.replace(/\.[^.]+$/, "");
    a.download = `${baseName}-compressed.${item.outputFmt}`;
    a.click();
  };

  const handleReset = () => {
    setItems([]);
    pendingRef.current = [];
    setWorking(false);
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
  };

  const allDone = items.length > 0 && items.every(it => ["done", "error", "already"].includes(it.status));

  return (
    <div className="gc-wrap">
      {/* Settings bar */}
      {items.length === 0 && (
        <div className="gc-settings">
          <div className="gc-setting-group">
            <label>Output</label>
            <div className="gc-tabs">
              {TASKS.map(t => (
                <button
                  key={t.value}
                  className={`gc-tab${task === t.value ? " gc-tab--active" : ""}`}
                  onClick={() => setTask(t.value)}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>

          {(task === "gif-compress" || task === "video-to-gif") && (
            <>
              <div className="gc-setting-group">
                <label>FPS</label>
                <select value={fps} onChange={e => setFps(+e.target.value)} className="gc-select">
                  {FPS_OPTIONS.map(f => <option key={f} value={f}>{f} fps</option>)}
                </select>
              </div>
              <div className="gc-setting-group">
                <label>Width</label>
                <select value={scale} onChange={e => setScale(+e.target.value)} className="gc-select">
                  {SCALE_OPTIONS.map(s => <option key={s} value={s}>{s}px</option>)}
                </select>
              </div>
              <div className="gc-setting-group">
                <label>Colors</label>
                <select value={maxColors} onChange={e => setMaxColors(+e.target.value)} className="gc-select">
                  {[64, 128, 192, 256].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </>
          )}

          {(task === "gif-to-mp4" || task === "gif-to-webm") && (
            <div className="gc-setting-group">
              <label>Quality</label>
              <div className="gc-tabs">
                {[["high","High"],["balanced","Balanced"],["max","Max Compression"]].map(([v,l]) => (
                  <button
                    key={v}
                    className={`gc-tab${quality === v ? " gc-tab--active" : ""}`}
                    onClick={() => setQuality(v)}
                  >{l}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Drop zone */}
      {items.length === 0 ? (
        <div
          className="gc-dropzone"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/gif"
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
          <div className="gc-dropzone-icon">🎞️</div>
          <p className="gc-dropzone-title">Drop GIF files here or click to select</p>
          <p className="gc-dropzone-hint">Paste from clipboard also works • image/gif only</p>
        </div>
      ) : (
        <>
          <div className="gc-toolbar">
            <button className="gc-btn gc-btn--primary" onClick={() => fileInputRef.current?.click()} disabled={working}>
              Add More GIFs
            </button>
            {allDone && (
              <button className="gc-btn gc-btn--green" onClick={() => {
                items.filter(it => it.status === "done").forEach(handleDownload);
              }}>
                Download All
              </button>
            )}
            <button className="gc-btn gc-btn--red" onClick={handleReset}>Reset</button>
          </div>

          <div className="gc-list">
            {items.map(item => (
              <div key={item.id} className={`gc-item gc-item--${item.status}`}>
                <div className="gc-item-preview">
                  {item.origUrl && <img src={item.origUrl} alt={item.name} />}
                </div>
                <div className="gc-item-info">
                  <p className="gc-item-name">{item.name}</p>
                  {item.status === "queued" && <p className="gc-item-sub">Waiting in queue...</p>}
                  {item.status === "processing" && (
                    <div>
                      <p className="gc-item-sub gc-item-sub--blue">Processing… {item.pct}%</p>
                      <div className="gc-progress"><div className="gc-progress-bar" style={{ width: item.pct + "%" }} /></div>
                    </div>
                  )}
                  {item.status === "done" && (
                    <p className="gc-item-sub">
                      {formatBytes(item.origSize)} → {formatBytes(item.outputSize)}
                      {parseFloat(item.reduction) > 0 && (
                        <span className="gc-saving"> {item.reduction}% smaller</span>
                      )}
                    </p>
                  )}
                  {item.status === "already" && <p className="gc-item-sub">{item.statusMsg}</p>}
                  {item.status === "error" && <p className="gc-item-sub gc-item-sub--red">{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <button className="gc-btn gc-btn--primary gc-btn--sm" onClick={() => handleDownload(item)}>
                    Download
                  </button>
                )}
              </div>
            ))}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/gif"
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
        </>
      )}

      <style>{`
        .gc-wrap { max-width: 800px; margin: 0 auto; padding: 1.5rem; }
        .gc-settings { display: flex; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 1.5rem; align-items: flex-end; }
        .gc-setting-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .gc-setting-group label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; opacity: 0.6; }
        .gc-tabs { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .gc-tab { padding: 0.375rem 0.75rem; border: 1.5px solid rgba(0,0,0,0.15); border-radius: 6px; background: transparent; cursor: pointer; font-size: 0.875rem; color: inherit; transition: all 0.15s; }
        .gc-tab--active { background: var(--primary, #0070f3); color: white; border-color: var(--primary, #0070f3); }
        .gc-select { padding: 0.375rem 0.625rem; border: 1.5px solid rgba(0,0,0,0.15); border-radius: 6px; font-size: 0.875rem; background: transparent; color: inherit; cursor: pointer; }
        .gc-dropzone { border: 2px dashed var(--primary, #0070f3); border-radius: 12px; padding: 4rem 2rem; text-align: center; cursor: pointer; transition: background 0.2s; }
        .gc-dropzone:hover { background: rgba(0,112,243,0.04); }
        .gc-dropzone-icon { font-size: 3rem; margin-bottom: 1rem; }
        .gc-dropzone-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; }
        .gc-dropzone-hint { font-size: 0.875rem; opacity: 0.6; }
        .gc-toolbar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .gc-btn { padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem; transition: opacity 0.15s; }
        .gc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .gc-btn--primary { background: var(--primary, #0070f3); color: white; }
        .gc-btn--green   { background: #22c55e; color: white; }
        .gc-btn--red     { background: #ef4444; color: white; }
        .gc-btn--sm      { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }
        .gc-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .gc-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1.5px solid rgba(0,0,0,0.1); border-radius: 8px; }
        .gc-item--done { border-color: rgba(34,197,94,0.4); }
        .gc-item--error { border-color: rgba(239,68,68,0.4); }
        .gc-item-preview { width: 72px; height: 56px; flex-shrink: 0; border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; }
        .gc-item-preview img { width: 100%; height: 100%; object-fit: cover; }
        .gc-item-info { flex: 1; min-width: 0; text-align: left; }
        .gc-item-name { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .gc-item-sub { font-size: 0.8125rem; opacity: 0.7; }
        .gc-item-sub--blue { color: var(--primary, #0070f3); opacity: 1; font-weight: 600; }
        .gc-item-sub--red  { color: #ef4444; opacity: 1; }
        .gc-saving { color: #22c55e; font-weight: 700; margin-left: 0.5rem; }
        .gc-progress { height: 4px; background: rgba(0,0,0,0.08); border-radius: 2px; margin-top: 0.375rem; }
        .gc-progress-bar { height: 100%; background: var(--primary, #0070f3); border-radius: 2px; transition: width 0.3s; }
        @media (prefers-color-scheme: dark) {
          .gc-tab { border-color: rgba(255,255,255,0.2); }
          .gc-select { border-color: rgba(255,255,255,0.2); }
          .gc-item { border-color: rgba(255,255,255,0.1); }
          .gc-item--done { border-color: rgba(34,197,94,0.3); }
          .gc-progress { background: rgba(255,255,255,0.1); }
        }
      `}</style>
    </div>
  );
}
