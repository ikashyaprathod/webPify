"use client";

import { useRef, useState, useEffect, useCallback } from "react";

function formatBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function SvgOptimizer() {
  const [files,   setFiles]   = useState([]);
  const [working, setWorking] = useState(false);
  const [error,   setError]   = useState("");
  const fileInputRef = useRef(null);

  const optimizeFile = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/svg-optimize", { method: "POST", body: fd });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Optimization failed");
    }
    const text     = await res.text();
    const origSz   = parseInt(res.headers.get("X-Original-Size")  || file.size);
    const outSz    = parseInt(res.headers.get("X-Optimized-Size") || text.length);
    const reduction= res.headers.get("X-Reduction") || "0";
    const blob     = new Blob([text], { type: "image/svg+xml" });
    return { outputBlob: blob, outputUrl: URL.createObjectURL(blob), origSize: origSz, outSize: outSz, reduction };
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
        setFiles(prev => prev.map(it => it.id === pid ? { ...it, ...result, status: "done" } : it));
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
    setFiles([]); setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="so-wrap">
      {error && (
        <div className="so-error">
          {error}
          <button onClick={() => setError("")} className="so-error-close">×</button>
        </div>
      )}

      {files.length === 0 ? (
        <div
          className="so-drop"
          onClick={() => fileInputRef.current?.click()}
          onDrop={e => { e.preventDefault(); processFiles(e.dataTransfer.files); }}
          onDragOver={e => e.preventDefault()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,image/svg+xml"
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📐</div>
          <p className="so-drop-title">Drop SVG files here or click to select</p>
          <p className="so-drop-hint">Removes metadata, minifies paths and styles • Max 5 MB per file</p>
        </div>
      ) : (
        <>
          <div className="so-bar">
            <button className="so-btn so-btn--blue" onClick={() => fileInputRef.current?.click()} disabled={working}>Add More SVGs</button>
            {files.some(f => f.status === "done") && (
              <button className="so-btn so-btn--green" onClick={() => files.filter(f => f.status === "done").forEach(handleDownload)}>
                Download All
              </button>
            )}
            <button className="so-btn so-btn--red" onClick={handleReset}>Reset</button>
          </div>

          <div className="so-list">
            {files.map(item => (
              <div key={item.id} className={`so-item so-item--${item.status}`}>
                <div className="so-icon">
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt={item.name} className="so-preview" onError={e => { e.target.style.display="none"; }} />
                    : <span>⚡</span>
                  }
                </div>
                <div className="so-info">
                  <p className="so-name">{item.name}</p>
                  {item.status === "pending"   && <p className="so-sub">Waiting...</p>}
                  {item.status === "optimizing"&& <p className="so-sub so-sub--blue">Optimizing...</p>}
                  {item.status === "done" && (
                    <p className="so-sub">
                      {formatBytes(item.origSize)} → {formatBytes(item.outSize)}
                      {parseFloat(item.reduction) > 0 && (
                        <span className="so-saving"> {item.reduction}% smaller</span>
                      )}
                    </p>
                  )}
                  {item.status === "error" && <p className="so-sub so-sub--red">{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <button className="so-btn so-btn--blue so-btn--sm" onClick={() => handleDownload(item)}>Download</button>
                )}
              </div>
            ))}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,image/svg+xml"
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
        </>
      )}

      <style>{`
        .so-wrap { max-width: 800px; margin: 0 auto; padding: 1.5rem; }
        .so-error { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: #fee; border: 1px solid #fcc; border-radius: 8px; color: #c00; margin-bottom: 1rem; font-size: 0.875rem; }
        .so-error-close { background: none; border: none; color: #c00; cursor: pointer; font-size: 1.25rem; font-weight: bold; }
        .so-drop { border: 2px dashed var(--primary,#0070f3); border-radius: 12px; padding: 4rem 2rem; text-align: center; cursor: pointer; }
        .so-drop:hover { background: rgba(0,112,243,0.04); }
        .so-drop-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; }
        .so-drop-hint { font-size: 0.875rem; opacity: 0.6; }
        .so-bar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .so-btn { padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem; }
        .so-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .so-btn--blue  { background: var(--primary,#0070f3); color: white; }
        .so-btn--green { background: #22c55e; color: white; }
        .so-btn--red   { background: #ef4444; color: white; }
        .so-btn--sm    { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }
        .so-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .so-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1.5px solid rgba(0,0,0,0.1); border-radius: 8px; }
        .so-item--done  { border-color: rgba(34,197,94,0.4); }
        .so-item--error { border-color: rgba(239,68,68,0.4); }
        .so-icon { width: 56px; height: 56px; flex-shrink: 0; border-radius: 6px; overflow: hidden; background: rgba(0,112,243,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .so-preview { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
        .so-info { flex: 1; min-width: 0; text-align: left; }
        .so-name { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .so-sub { font-size: 0.8125rem; opacity: 0.7; }
        .so-sub--blue { color: var(--primary,#0070f3); opacity: 1; font-weight: 600; }
        .so-sub--red  { color: #ef4444; opacity: 1; }
        .so-saving { color: #22c55e; font-weight: 700; margin-left: 0.5rem; }
        @media (prefers-color-scheme: dark) {
          .so-item { border-color: rgba(255,255,255,0.1); }
          .so-item--done { border-color: rgba(34,197,94,0.3); }
        }
      `}</style>
    </div>
  );
}
