"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

const FIT_MODES = [
  { value: "inside",   label: "Fit Inside",   hint: "Keeps aspect ratio, fits within dimensions" },
  { value: "cover",    label: "Cover",         hint: "Fills dimensions, may crop" },
  { value: "contain",  label: "Contain",       hint: "Letterbox to fit inside dimensions" },
  { value: "fill",     label: "Fill",          hint: "Stretch to exact dimensions" },
];

const SUPPORTED = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/avif"];
const IDB_STORE = 'recent_resizer';

function blobToDataUrl(blob) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function formatBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function ImageResizer({ allowedFormats = SUPPORTED }) {
  const [files,       setFiles]       = useState([]);
  const [width,       setWidth]       = useState("");
  const [height,      setHeight]      = useState("");
  const [fit,         setFit]         = useState("inside");
  const [working,     setWorking]     = useState(false);
  const [error,       setError]       = useState("");
  const [recentFiles, setRecentFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Load from IndexedDB on mount
  useEffect(() => {
    loadRecent(IDB_STORE).then(items => {
      if (!items.length) return;
      setRecentFiles(items.map(item => ({
        id: item.id,
        name: item.name,
        origSize: item.origSize,
        outSize: item.outSize,
        outW: item.outW,
        outH: item.outH,
        outputUrl: item.outputUrl,
        status: "done",
      })));
    });
  }, []);

  // Save to IndexedDB whenever recentFiles changes
  useEffect(() => {
    if (recentFiles.length === 0) return;
    saveRecent(IDB_STORE, recentFiles.map(f => ({
      id: f.id,
      name: f.name,
      origSize: f.origSize,
      outSize: f.outSize,
      outW: f.outW,
      outH: f.outH,
      outputUrl: f.outputUrl,
    })));
  }, [recentFiles]);

  const resizeFile = async (file, updateItem) => {
    updateItem("uploading", "Resizing...");
    const fd = new FormData();
    fd.append("file", file);
    if (width)  fd.append("width",  width);
    if (height) fd.append("height", height);
    fd.append("fit", fit);

    const res = await fetch("/api/resize", { method: "POST", body: fd });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Resize failed");
    }

    const blob   = await res.blob();
    const outW   = res.headers.get("X-Output-Width")  || "";
    const outH   = res.headers.get("X-Output-Height") || "";
    const origSz = parseInt(res.headers.get("X-Original-Size")  || file.size);
    const outSz  = parseInt(res.headers.get("X-Resized-Size")   || blob.size);
    const outputUrl = await blobToDataUrl(blob);

    return {
      id: newId(),
      name: file.name,
      outputUrl,
      origSize: origSz,
      outSize: outSz,
      outW, outH,
      status: "done",
    };
  };

  const processFiles = useCallback(async (fileList) => {
    const valid = Array.from(fileList).filter(f => allowedFormats.includes(f.type));
    if (!valid.length) { setError("Unsupported format. Use PNG, JPEG, WebP, or AVIF."); return; }
    if (!width && !height) { setError("Enter at least a width or height to resize."); return; }

    setWorking(true);
    setError("");

    const placeholders = valid.map(f => ({
      id: newId(), name: f.name, file: f,
      origSize: f.size, status: "pending",
    }));
    setFiles(prev => [...prev, ...placeholders]);

    for (let i = 0; i < valid.length; i++) {
      const file = valid[i];
      const pid  = placeholders[i].id;
      const updateItem = (status, msg) =>
        setFiles(prev => prev.map(it => it.id === pid ? { ...it, status, statusMsg: msg } : it));

      try {
        const result = await resizeFile(file, updateItem);
        const withPid = { ...result, id: pid };
        setFiles(prev => prev.map(it => it.id === pid ? withPid : it));
        setRecentFiles(prev => [withPid, ...prev].slice(0, 20));
      } catch (e) {
        setFiles(prev => prev.map(it => it.id === pid ? { ...it, status: "error", statusMsg: e.message } : it));
      }
    }
    setWorking(false);
  }, [width, height, fit, allowedFormats]);

  // Clipboard paste
  useEffect(() => {
    const handler = e => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const imgs = [];
      for (const item of items) {
        if (allowedFormats.includes(item.type)) imgs.push(item.getAsFile());
      }
      if (imgs.length) processFiles(imgs);
    };
    window.addEventListener("paste", handler);
    return () => window.removeEventListener("paste", handler);
  }, [processFiles]);

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl;
    const ext = item.name.split(".").pop();
    a.download = item.name.replace(/\.[^.]+$/, "") + `-${item.outW}x${item.outH}.${ext}`;
    a.click();
  };

  const handleReset = () => {
    setFiles([]); setError(""); setRecentFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
    clearRecent(IDB_STORE);
  };

  const accept = allowedFormats.join(",");
  const doneFiles = files.filter(f => f.status === "done");

  return (
    <div className="tc-wrap">
      {/* Settings panel */}
      <div className="ir-settings-card">
        <div className="ir-settings">
          <div className="ir-field">
            <label>Width (px)</label>
            <input
              type="number" min="1" max="8000" placeholder="e.g. 1920"
              value={width} onChange={e => setWidth(e.target.value)}
              className="ir-input"
            />
          </div>
          <div className="ir-field">
            <label>Height (px)</label>
            <input
              type="number" min="1" max="8000" placeholder="e.g. 1080"
              value={height} onChange={e => setHeight(e.target.value)}
              className="ir-input"
            />
          </div>
          <div className="ir-field ir-field--wide">
            <label>Fit Mode</label>
            <div className="ir-tabs">
              {FIT_MODES.map(m => (
                <button
                  key={m.value}
                  title={m.hint}
                  className={`ir-tab${fit === m.value ? " ir-tab--on" : ""}`}
                  onClick={() => setFit(m.value)}
                >{m.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="tc-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="tc-error-close">×</button>
        </div>
      )}

      {files.length === 0 ? (
        <div
          className="tc-drop-card"
          onClick={() => fileInputRef.current?.click()}
          onDrop={e => { e.preventDefault(); processFiles(e.dataTransfer.files); }}
          onDragOver={e => e.preventDefault()}
        >
          <input ref={fileInputRef} type="file" accept={accept} multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
          <div className="tc-drop-icon">📐</div>
          <div>
            <p className="tc-drop-title">Drag &amp; Drop Files</p>
            <p className="tc-drop-subtitle">Supports PNG, JPEG, WebP, AVIF &nbsp;·&nbsp; Paste from clipboard works too</p>
          </div>
          <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }} disabled={working}>
            {working ? "Resizing…" : "Select Files"}
          </button>
        </div>
      ) : (
        <div className="tc-queue-card">
          <div className="tc-queue-hd">
            <div className="tc-queue-hd-left">
              <div className="tc-queue-hd-icon">📐</div>
              <h3 className="tc-queue-hd-title">Resize Queue</h3>
            </div>
            <div className="tc-queue-actions">
              <button className="tc-queue-btn tc-queue-btn-primary" onClick={() => fileInputRef.current?.click()} disabled={working}>+ Add More</button>
              <button className="tc-queue-btn tc-queue-btn-danger" onClick={handleReset}>Reset</button>
            </div>
          </div>

          <div className="tc-queue-list">
            {files.map(item => (
              <div key={item.id} className={`tc-file-item${item.status === "done" ? "" : " tc-file-item--pending"}`}>
                <div className="tc-file-thumb-ph">
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt={item.name} className="tc-file-thumb" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }} />
                    : <span>🖼️</span>
                  }
                </div>
                <div className="tc-file-info">
                  <p className="tc-file-name">{item.name}</p>
                  {item.status === "pending"   && <p className="tc-file-status">Waiting...</p>}
                  {item.status === "uploading" && <p className="tc-file-status">Resizing...</p>}
                  {item.status === "done" && (
                    <>
                      <p className="tc-file-sizes">
                        {formatBytes(item.origSize)} → {formatBytes(item.outSize)}
                        {item.outW && item.outH && <span className="tc-file-reduction"> · {item.outW}×{item.outH}px</span>}
                      </p>
                      <p className="tc-file-status-ok">
                        <span className="tc-file-status-dot" />
                        RESIZED
                      </p>
                    </>
                  )}
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
            <span className="tc-queue-ft-info">{doneFiles.length} of {files.length} resized</span>
            <button className="tc-queue-cta-btn" onClick={() => doneFiles.forEach(handleDownload)} disabled={doneFiles.length === 0 || working}>
              ⚡ Download All ({doneFiles.length})
            </button>
            <button className="tc-queue-clear-btn" onClick={handleReset}>Clear Queue</button>
          </div>

          <input ref={fileInputRef} type="file" accept={accept} multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />
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
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt={item.name} />
                    : <span>🖼️</span>
                  }
                  <button className="tc-recent-dl-btn" onClick={() => handleDownload(item)} title="Download">↓</button>
                </div>
                <p className="tc-recent-name">{item.name.replace(/\.[^/.]+$/, "")}</p>
                <p className="tc-recent-sizes">{formatBytes(item.origSize)} → {formatBytes(item.outSize)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .ir-settings-card { background: #fff; border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 12px -2px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8); padding: 1.5rem 2rem; margin-bottom: 1.5rem; }
        .ir-settings { display: flex; flex-wrap: wrap; gap: 1.25rem; align-items: flex-end; }
        .ir-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .ir-field--wide { flex: 1; min-width: 200px; }
        .ir-field label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; }
        .ir-input { padding: 0.5rem 0.875rem; border: 1.5px solid #e2e8f0; border-radius: 0.625rem; font-size: 0.9rem; width: 110px; background: #f8fafc; color: inherit; transition: border-color 0.15s; }
        .ir-input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.12); }
        .ir-tabs { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .ir-tab { padding: 0.4rem 0.875rem; border: 1.5px solid #e2e8f0; border-radius: 0.625rem; background: #f8fafc; cursor: pointer; font-size: 0.8rem; font-weight: 600; color: #475569; transition: all 0.15s; }
        .ir-tab:hover { border-color: #bfdbfe; background: #eff6ff; }
        .ir-tab--on { background: linear-gradient(135deg,#3b82f6 0%,#6366f1 100%); color: white; border-color: transparent; box-shadow: 0 2px 8px -1px rgba(59,130,246,0.4); }
        @media (prefers-color-scheme: dark) {
          .ir-settings-card { background: #1e293b; border-color: rgba(255,255,255,0.07); }
          .ir-input { border-color: #334155; background: #0f172a; color: #f1f5f9; }
          .ir-tab { border-color: #334155; background: #0f172a; color: #94a3b8; }
          .ir-tab:hover { border-color: #3b82f6; background: rgba(59,130,246,0.1); }
        }
      `}</style>
    </div>
  );
}
