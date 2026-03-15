"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

const FPS_OPTIONS   = [5, 10, 15, 20];
const SCALE_OPTIONS = [
  { label: "240px", value: 240 },
  { label: "320px", value: 320 },
  { label: "480px", value: 480 },
  { label: "640px", value: 640 },
];
const COLOR_OPTIONS = [64, 128, 192, 256];
const IDB_STORE     = 'recent_videotogif';

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

export default function VideoToGif() {
  const [items,       setItems]       = useState([]);
  const [fps,         setFps]         = useState(15);
  const [scale,       setScale]       = useState(480);
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
      previewUrl: f.previewUrl,
    })));
  }, [recentFiles]);

  function getWorker() {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL("../workers/gifWorker.js", import.meta.url));
      workerRef.current.onmessage = async ({ data }) => {
        const { type, id, pct, buffer, message } = data;
        if (type === "progress") {
          setItems(prev => prev.map(it => it.id === id ? { ...it, pct, status: "processing" } : it));
        } else if (type === "done") {
          const blob = new Blob([buffer], { type: "image/gif" });
          const outputUrl  = URL.createObjectURL(blob);
          const previewUrl = await blobToDataUrl(blob);

          setItems(prev => prev.map(it => {
            if (it.id !== id) return it;
            const reduction = it.origSize > 0
              ? ((it.origSize - buffer.byteLength) / it.origSize * 100).toFixed(1)
              : "0";
            setRecentFiles(prev2 => [{
              id: it.id, name: it.name,
              origSize: it.origSize, outputSize: buffer.byteLength,
              reduction, previewUrl,
            }, ...prev2].slice(0, 20));
            return { ...it, status: "done", pct: 100, outputUrl, previewUrl, outputSize: buffer.byteLength, reduction };
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
      outputUrl: null, previewUrl: null, outputSize: 0, reduction: "0",
    }));

    setItems(prev => [...prev, ...newItems]);
    pendingRef.current.push(...newItems.map(it => ({
      id: it.id, file: it.file,
      settings: { task: "video-to-gif", fps, scale, maxColors },
    })));
    if (!working) processNext();
  }, [fps, scale, maxColors, working]);

  const handleReset = () => {
    setItems([]); setRecentFiles([]);
    pendingRef.current = []; setWorking(false);
    if (workerRef.current) { workerRef.current.terminate(); workerRef.current = null; }
    clearRecent(IDB_STORE);
  };

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl || item.previewUrl;
    a.download = item.name.replace(/\.[^.]+$/, "") + ".gif";
    a.click();
  };

  const doneItems = items.filter(i => i.status === "done");

  return (
    <div className="tc-wrap">
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
          className="tc-drop-card"
          onClick={() => fileInputRef.current?.click()}
          onDrop={e => { e.preventDefault(); processFiles(e.dataTransfer.files); }}
          onDragOver={e => e.preventDefault()}
        >
          <input ref={fileInputRef} type="file" accept="video/*" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
          <div className="tc-drop-icon">🎥</div>
          <div>
            <p className="tc-drop-title">Drag &amp; Drop Video Files</p>
            <p className="tc-drop-subtitle">Supports MP4, WebM, MOV &nbsp;·&nbsp; Converts to animated GIF</p>
          </div>
          <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }} disabled={working}>
            {working ? "Converting…" : "Select Videos"}
          </button>
        </div>
      ) : (
        <div className="tc-queue-card">
          <div className="tc-queue-hd">
            <div className="tc-queue-hd-left">
              <div className="tc-queue-hd-icon">🎥</div>
              <h3 className="tc-queue-hd-title">Conversion Queue</h3>
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
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt="GIF preview" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }} />
                    : <span>🎥</span>
                  }
                </div>
                <div className="tc-file-info">
                  <p className="tc-file-name">{item.name}</p>
                  {item.status === "queued"     && <p className="tc-file-status">Waiting...</p>}
                  {item.status === "processing" && (
                    <div>
                      <p className="tc-file-status">Converting… {item.pct}%</p>
                      <div style={{ height: "4px", background: "#e2e8f0", borderRadius: "2px", marginTop: "0.375rem" }}>
                        <div style={{ width: item.pct + "%", height: "100%", background: "#3b82f6", borderRadius: "2px", transition: "width 0.3s" }} />
                      </div>
                    </div>
                  )}
                  {item.status === "done" && (
                    <>
                      <p className="tc-file-sizes">{formatBytes(item.origSize)} → {formatBytes(item.outputSize)} GIF</p>
                      <p className="tc-file-status-ok">
                        <span className="tc-file-status-dot" />
                        CONVERTED TO GIF
                      </p>
                    </>
                  )}
                  {item.status === "error" && <p className="tc-file-status" style={{ color: "#dc2626" }}>{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <div className="tc-file-btns">
                    <button className="tc-file-dl-btn" onClick={() => handleDownload(item)}>Download GIF</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="tc-queue-ft">
            <span className="tc-queue-ft-info">{doneItems.length} of {items.length} converted</span>
            <button className="tc-queue-cta-btn" onClick={() => doneItems.forEach(handleDownload)} disabled={doneItems.length === 0 || working}>
              ⚡ Download All ({doneItems.length})
            </button>
            <button className="tc-queue-clear-btn" onClick={handleReset}>Clear Queue</button>
          </div>

          <input ref={fileInputRef} type="file" accept="video/*" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
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
                    : <span>🎥</span>
                  }
                  <button className="tc-recent-dl-btn" onClick={() => handleDownload(item)} title="Download">↓</button>
                </div>
                <p className="tc-recent-name">{item.name.replace(/\.[^/.]+$/, "")}</p>
                <p className="tc-recent-sizes">{formatBytes(item.origSize)} → {formatBytes(item.outputSize)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .vtg-settings { background: #fff; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 12px -2px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8); padding: 1.5rem 2rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .vtg-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .vtg-group label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; }
        .vtg-row { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .vtg-pill { padding: 0.4rem 0.875rem; border: 1.5px solid #e2e8f0; border-radius: 0.625rem; background: #f8fafc; cursor: pointer; font-size: 0.8rem; font-weight: 600; color: #475569; transition: all 0.15s; }
        .vtg-pill:hover { border-color: #bfdbfe; background: #eff6ff; }
        .vtg-pill--on { background: linear-gradient(135deg,#3b82f6 0%,#6366f1 100%); color: white; border-color: transparent; box-shadow: 0 2px 8px -1px rgba(59,130,246,0.4); }
        @media (prefers-color-scheme: dark) {
          .vtg-settings { background: #1e293b; border-color: rgba(255,255,255,0.07); }
          .vtg-pill { border-color: #334155; background: #0f172a; color: #94a3b8; }
          .vtg-pill:hover { border-color: #3b82f6; }
        }
      `}</style>
    </div>
  );
}
