"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

const TASKS = [
  { value: "gif-compress", label: "Compress GIF",   ext: "gif",  icon: "🗜️" },
  { value: "gif-to-mp4",   label: "Convert to MP4", ext: "mp4",  icon: "🎬" },
  { value: "gif-to-webm",  label: "Convert to WebM",ext: "webm", icon: "🌐" },
];

const FPS_OPTIONS   = [5, 10, 15, 20, 24];
const SCALE_OPTIONS = [240, 320, 480, 640, 800];
const QUALITY_MAP   = { high: 18, balanced: 23, max: 28 };
const IDB_STORE     = 'recent_gif';

function blobToDataUrl(blob) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function formatBytes(b) {
  if (b === 0) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function GifCompressor({ defaultTask = "gif-compress" }) {
  const [items,       setItems]       = useState([]);
  const [task,        setTask]        = useState(defaultTask);
  const [fps,         setFps]         = useState(15);
  const [scale,       setScale]       = useState(480);
  const [quality,     setQuality]     = useState("balanced");
  const [maxColors,   setMaxColors]   = useState(128);
  const [working,     setWorking]     = useState(false);
  const [recentFiles, setRecentFiles] = useState([]);
  const fileInputRef = useRef(null);
  const workerRef    = useRef(null);
  const pendingRef   = useRef([]);

  // Load from IndexedDB on mount
  useEffect(() => {
    loadRecent(IDB_STORE).then(stored => {
      if (!stored.length) return;
      setRecentFiles(stored);
    });
  }, []);

  // Save to IndexedDB whenever recentFiles changes
  useEffect(() => {
    if (recentFiles.length === 0) return;
    saveRecent(IDB_STORE, recentFiles.map(f => ({
      id: f.id,
      name: f.name,
      origSize: f.origSize,
      outputSize: f.outputSize,
      reduction: f.reduction,
      outputFmt: f.outputFmt,
      previewUrl: f.previewUrl,
    })));
  }, [recentFiles]);

  // Lazily init worker
  function getWorker() {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL("../workers/gifWorker.js", import.meta.url));
      workerRef.current.onmessage = async ({ data }) => {
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
            const mimeType = fmt === "mp4" ? "video/mp4" : fmt === "webm" ? "video/webm" : "image/gif";
            const blob = new Blob([buffer], { type: mimeType });
            const outputUrl = URL.createObjectURL(blob);
            // Only store data URL for GIF previews (MP4/WebM can be large)
            const previewUrl = fmt === "gif" ? await blobToDataUrl(blob) : null;

            setItems(prev => prev.map(it => {
              if (it.id !== id) return it;
              const reduction = it.origSize > 0
                ? ((it.origSize - buffer.byteLength) / it.origSize * 100).toFixed(1)
                : "0";
              const updated = {
                ...it, status: "done", pct: 100,
                outputBlob: blob, outputUrl, previewUrl, outputFmt: fmt,
                outputSize: buffer.byteLength, reduction,
              };
              // Add to recent (only if we have a preview)
              if (previewUrl) {
                setRecentFiles(prev2 => [{
                  id: it.id, name: it.name,
                  origSize: it.origSize, outputSize: buffer.byteLength,
                  reduction, outputFmt: fmt, previewUrl,
                }, ...prev2].slice(0, 20));
              }
              return updated;
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
      previewUrl: null,
      outputFmt: null,
      outputSize: 0,
      reduction: "0",
    }));

    const settings = { task, fps, scale, maxColors, quality: QUALITY_MAP[quality] };

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

  const handleDrop = (e) => { e.preventDefault(); processFiles(e.dataTransfer.files); };

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl || item.previewUrl;
    const baseName = item.name.replace(/\.[^.]+$/, "");
    a.download = `${baseName}-compressed.${item.outputFmt}`;
    a.click();
  };

  const handleReset = () => {
    setItems([]); setRecentFiles([]);
    pendingRef.current = [];
    setWorking(false);
    if (workerRef.current) { workerRef.current.terminate(); workerRef.current = null; }
    clearRecent(IDB_STORE);
  };

  const allDone = items.length > 0 && items.every(it => ["done", "error", "already"].includes(it.status));
  const doneItems = items.filter(it => it.status === "done");

  return (
    <div className="tc-wrap">
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
          className="tc-drop-card"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          <input ref={fileInputRef} type="file" accept="image/gif" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
          <div className="tc-drop-icon">🎞️</div>
          <div>
            <p className="tc-drop-title">Drag &amp; Drop GIF Files</p>
            <p className="tc-drop-subtitle">Paste from clipboard also works &nbsp;·&nbsp; image/gif only</p>
          </div>
          <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }} disabled={working}>
            {working ? "Compressing…" : "Select GIF Files"}
          </button>
        </div>
      ) : (
        <div className="tc-queue-card">
          <div className="tc-queue-hd">
            <div className="tc-queue-hd-left">
              <div className="tc-queue-hd-icon">🎞️</div>
              <h3 className="tc-queue-hd-title">Batch Queue</h3>
            </div>
            <div className="tc-queue-actions">
              <button className="tc-queue-btn tc-queue-btn-primary" onClick={() => fileInputRef.current?.click()} disabled={working}>+ Add More</button>
              <button className="tc-queue-btn tc-queue-btn-danger" onClick={handleReset}>Reset</button>
            </div>
          </div>

          <div className="tc-queue-list">
            {items.map(item => (
              <div key={item.id} className={`tc-file-item${item.status === "done" ? "" : " tc-file-item--pending"}`}>
                <div className="tc-file-thumb-ph">
                  {item.origUrl
                    ? <img src={item.origUrl} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }} />
                    : <span>🎞️</span>
                  }
                </div>
                <div className="tc-file-info">
                  <p className="tc-file-name">{item.name}</p>
                  {item.status === "queued" && <p className="tc-file-status">Waiting in queue...</p>}
                  {item.status === "processing" && (
                    <div>
                      <p className="tc-file-status">Processing… {item.pct}%</p>
                      <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", marginTop: "0.375rem" }}>
                        <div style={{ width: item.pct + "%", height: "100%", background: "#3b82f6", borderRadius: "2px", transition: "width 0.3s" }} />
                      </div>
                    </div>
                  )}
                  {item.status === "done" && (
                    <>
                      <p className="tc-file-sizes">
                        {formatBytes(item.origSize)} → {formatBytes(item.outputSize)}
                        {parseFloat(item.reduction) > 0 && <span className="tc-file-reduction"> ({item.reduction}% smaller)</span>}
                      </p>
                      <p className="tc-file-status-ok">
                        <span className="tc-file-status-dot" />
                        COMPRESSED
                      </p>
                    </>
                  )}
                  {item.status === "already" && <p className="tc-file-status-ok" style={{ color: "#64748b" }}>{item.statusMsg}</p>}
                  {item.status === "error" && <p className="tc-file-status" style={{ color: "#dc2626" }}>{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <div className="tc-file-btns">
                    <button className="tc-file-dl-btn" onClick={() => handleDownload(item)}>Download</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="tc-queue-ft">
            <span className="tc-queue-ft-info">{doneItems.length} of {items.length} compressed</span>
            <button className="tc-queue-cta-btn" onClick={() => doneItems.forEach(handleDownload)} disabled={doneItems.length === 0 || working}>
              ⚡ Download All ({doneItems.length})
            </button>
            <button className="tc-queue-clear-btn" onClick={handleReset}>Clear Queue</button>
          </div>

          <input ref={fileInputRef} type="file" accept="image/gif" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
        </div>
      )}

      {recentFiles.length > 0 && (
        <div className="tc-recent-card">
          <div className="tc-recent-hd">
            <div className="tc-recent-hd-left">
              <div className="tc-recent-hd-icon">🕐</div>
              <h3 className="tc-recent-hd-title">Recent Assets</h3>
            </div>
            <button className="tc-recent-view-all">View all {recentFiles.length} assets →</button>
          </div>
          <div className="tc-recent-scroll">
            {recentFiles.map(item => (
              <div key={item.id} className="tc-recent-item">
                <div className="tc-recent-thumb">
                  {item.previewUrl
                    ? <img src={item.previewUrl} alt={item.name} />
                    : <span>🎞️</span>
                  }
                  {item.previewUrl && (
                    <button className="tc-recent-dl-btn" onClick={() => handleDownload(item)} title="Download">↓</button>
                  )}
                </div>
                <p className="tc-recent-name">{item.name.replace(/\.[^/.]+$/, "")}</p>
                <p className="tc-recent-sizes">{formatBytes(item.origSize)} → {formatBytes(item.outputSize)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .gc-settings { background: #fff; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 12px -2px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8); padding: 1.5rem 2rem; margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: flex-end; }
        .gc-setting-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .gc-setting-group label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; }
        .gc-tabs { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .gc-tab { padding: 0.4rem 0.875rem; border: 1.5px solid #e2e8f0; border-radius: 0.625rem; background: #f8fafc; cursor: pointer; font-size: 0.8rem; font-weight: 600; color: #475569; transition: all 0.15s; }
        .gc-tab:hover { border-color: #bfdbfe; background: #eff6ff; }
        .gc-tab--active { background: linear-gradient(135deg,#3b82f6 0%,#6366f1 100%); color: white; border-color: transparent; box-shadow: 0 2px 8px -1px rgba(59,130,246,0.4); }
        .gc-select { padding: 0.4rem 0.75rem; border: 1.5px solid #e2e8f0; border-radius: 0.625rem; font-size: 0.85rem; background: #f8fafc; color: inherit; cursor: pointer; font-weight: 600; }
        @media (prefers-color-scheme: dark) {
          .gc-settings { background: #1e293b; border-color: rgba(255,255,255,0.07); }
          .gc-tab { border-color: #334155; background: #0f172a; color: #94a3b8; }
          .gc-tab:hover { border-color: #3b82f6; }
          .gc-select { border-color: #334155; background: #0f172a; color: #f1f5f9; }
        }
      `}</style>
    </div>
  );
}
