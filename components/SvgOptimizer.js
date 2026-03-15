"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

const IDB_STORE = 'recent_svg';

function formatBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function SvgOptimizer() {
  const [files,       setFiles]       = useState([]);
  const [working,     setWorking]     = useState(false);
  const [error,       setError]       = useState("");
  const [recentFiles, setRecentFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Load from IndexedDB on mount
  useEffect(() => {
    loadRecent(IDB_STORE).then(items => {
      if (!items.length) return;
      setRecentFiles(items);
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
      reduction: f.reduction,
      outputUrl: f.outputUrl,
    })));
  }, [recentFiles]);

  const optimizeFile = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/svg-optimize", { method: "POST", body: fd });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Optimization failed");
    }
    const text      = await res.text();
    const origSz    = parseInt(res.headers.get("X-Original-Size")  || file.size);
    const outSz     = parseInt(res.headers.get("X-Optimized-Size") || text.length);
    const reduction = res.headers.get("X-Reduction") || "0";
    // SVG is text — encode as data URL directly
    const outputUrl = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(text)));
    return { outputUrl, origSize: origSz, outSize: outSz, reduction };
  };

  const processFiles = useCallback(async (fileList) => {
    const svgs = Array.from(fileList).filter(f =>
      f.type === "image/svg+xml" || f.name.toLowerCase().endsWith(".svg")
    );
    if (!svgs.length) { setError("Please upload SVG files only."); return; }
    setWorking(true);
    setError("");

    const placeholders = svgs.map(f => ({ id: newId(), name: f.name, file: f, origSize: f.size, status: "pending" }));
    setFiles(prev => [...prev, ...placeholders]);

    for (let i = 0; i < svgs.length; i++) {
      const file = svgs[i];
      const pid  = placeholders[i].id;
      setFiles(prev => prev.map(it => it.id === pid ? { ...it, status: "optimizing" } : it));
      try {
        const result = await optimizeFile(file);
        const entry = { id: pid, name: file.name, ...result, status: "done" };
        setFiles(prev => prev.map(it => it.id === pid ? entry : it));
        setRecentFiles(prev => [entry, ...prev].slice(0, 20));
      } catch (e) {
        setFiles(prev => prev.map(it => it.id === pid ? { ...it, status: "error", statusMsg: e.message } : it));
      }
    }
    setWorking(false);
  }, []);

  // Clipboard paste
  useEffect(() => {
    const handler = e => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const svgFiles = [];
      for (const item of items) {
        if (item.type === "image/svg+xml") svgFiles.push(item.getAsFile());
      }
      if (svgFiles.length) processFiles(svgFiles);
    };
    window.addEventListener("paste", handler);
    return () => window.removeEventListener("paste", handler);
  }, [processFiles]);

  const handleDownload = (item) => {
    const a = document.createElement("a");
    a.href = item.outputUrl;
    a.download = item.name.replace(/\.svg$/i, "") + "-optimized.svg";
    a.click();
  };

  const handleReset = () => {
    setFiles([]); setError(""); setRecentFiles([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
    clearRecent(IDB_STORE);
  };

  const doneFiles = files.filter(f => f.status === "done");

  return (
    <div className="tc-wrap">
      <input ref={fileInputRef} type="file" accept=".svg,image/svg+xml" multiple style={{ display: "none" }} onChange={e => processFiles(e.target.files)} />

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
          <div className="tc-drop-icon">⚡</div>
          <div>
            <p className="tc-drop-title">Drag &amp; Drop SVG Files</p>
            <p className="tc-drop-subtitle">Removes metadata, minifies paths and styles &nbsp;·&nbsp; Max 5MB per file</p>
          </div>
          <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }} disabled={working}>
            {working ? "Optimizing…" : "Select SVG Files"}
          </button>
        </div>
      ) : (
        <div className="tc-queue-card">
          <div className="tc-queue-hd">
            <div className="tc-queue-hd-left">
              <div className="tc-queue-hd-icon">⚡</div>
              <h3 className="tc-queue-hd-title">Optimization Queue</h3>
            </div>
            <div className="tc-queue-actions">
              <button className="tc-queue-btn tc-queue-btn-primary" onClick={() => fileInputRef.current?.click()} disabled={working}>+ Add More</button>
              <button className="tc-queue-btn tc-queue-btn-danger" onClick={handleReset}>Reset</button>
            </div>
          </div>

          <div className="tc-queue-list">
            {files.map(item => (
              <div key={item.id} className={`tc-file-item${item.status !== "done" ? " tc-file-item--pending" : ""}`}>
                <div className="tc-file-thumb-ph">
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px", borderRadius: "1rem" }} onError={e => { e.target.style.display="none"; }} />
                    : <span>⚡</span>
                  }
                </div>
                <div className="tc-file-info">
                  <p className="tc-file-name">{item.name}</p>
                  {item.status === "pending"    && <p className="tc-file-status">Waiting...</p>}
                  {item.status === "optimizing" && <p className="tc-file-status">Optimizing...</p>}
                  {item.status === "done" && (
                    <>
                      <p className="tc-file-sizes">
                        {formatBytes(item.origSize)} → {formatBytes(item.outSize)}
                        {parseFloat(item.reduction) > 0 && <span className="tc-file-reduction"> ({item.reduction}% smaller)</span>}
                      </p>
                      <p className="tc-file-status-ok">
                        <span className="tc-file-status-dot" />
                        OPTIMIZED
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
            <span className="tc-queue-ft-info">{doneFiles.length} of {files.length} optimized</span>
            <button className="tc-queue-cta-btn" onClick={() => doneFiles.forEach(handleDownload)} disabled={doneFiles.length === 0 || working}>
              ⚡ Download All ({doneFiles.length})
            </button>
            <button className="tc-queue-clear-btn" onClick={handleReset}>Clear Queue</button>
          </div>
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
                    ? <img src={item.outputUrl} alt={item.name} style={{ objectFit: "contain", padding: "4px" }} />
                    : <span>⚡</span>
                  }
                  <button className="tc-recent-dl-btn" onClick={() => handleDownload(item)} title="Download">↓</button>
                </div>
                <p className="tc-recent-name">{item.name.replace(/\.svg$/i, "")}</p>
                <p className="tc-recent-sizes">{formatBytes(item.origSize)} → {formatBytes(item.outSize)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
