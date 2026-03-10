"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const FIT_MODES = [
  { value: "inside",   label: "Fit Inside",   hint: "Keeps aspect ratio, fits within dimensions" },
  { value: "cover",    label: "Cover",         hint: "Fills dimensions, may crop" },
  { value: "contain",  label: "Contain",       hint: "Letterbox to fit inside dimensions" },
  { value: "fill",     label: "Fill",          hint: "Stretch to exact dimensions" },
];

const SUPPORTED = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/avif"];

function formatBytes(b) {
  if (!b) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(b) / Math.log(k));
  return (b / Math.pow(k, i)).toFixed(1) + " " + s[i];
}

function newId() { return Math.random().toString(36).slice(2, 10); }

export default function ImageResizer({ allowedFormats = SUPPORTED }) {
  const [files,   setFiles]   = useState([]);
  const [width,   setWidth]   = useState("");
  const [height,  setHeight]  = useState("");
  const [fit,     setFit]     = useState("inside");
  const [working, setWorking] = useState(false);
  const [error,   setError]   = useState("");
  const fileInputRef = useRef(null);

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

    const blob  = await res.blob();
    const outW  = res.headers.get("X-Output-Width")  || "";
    const outH  = res.headers.get("X-Output-Height") || "";
    const origSz= parseInt(res.headers.get("X-Original-Size")  || file.size);
    const outSz = parseInt(res.headers.get("X-Resized-Size")   || blob.size);

    return {
      id: newId(),
      originalFile: file,
      outputBlob: blob,
      outputUrl: URL.createObjectURL(blob),
      origSize: origSz,
      outSize: outSz,
      outW, outH,
      name: file.name,
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
        setFiles(prev => prev.map(it => it.id === pid ? { ...it, ...result, id: pid } : it));
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
    setFiles([]); setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const accept = allowedFormats.join(",");

  return (
    <div className="ir-wrap">
      {/* Settings */}
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

      {error && (
        <div className="ir-error">
          {error}
          <button onClick={() => setError("")} className="ir-error-close">×</button>
        </div>
      )}

      {files.length === 0 ? (
        <div
          className="ir-drop"
          onClick={() => fileInputRef.current?.click()}
          onDrop={e => { e.preventDefault(); processFiles(e.dataTransfer.files); }}
          onDragOver={e => e.preventDefault()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📐</div>
          <p className="ir-drop-title">Drop images here or click to select</p>
          <p className="ir-drop-hint">Supports PNG, JPEG, WebP, AVIF • Paste from clipboard works too</p>
        </div>
      ) : (
        <>
          <div className="ir-bar">
            <button className="ir-btn ir-btn--blue" onClick={() => fileInputRef.current?.click()} disabled={working}>Add More Images</button>
            {files.some(f => f.status === "done") && (
              <button className="ir-btn ir-btn--green" onClick={() => files.filter(f => f.status === "done").forEach(handleDownload)}>
                Download All
              </button>
            )}
            <button className="ir-btn ir-btn--red" onClick={handleReset}>Reset</button>
          </div>

          <div className="ir-list">
            {files.map(item => (
              <div key={item.id} className={`ir-item ir-item--${item.status}`}>
                <div className="ir-thumb">
                  {item.outputUrl
                    ? <img src={item.outputUrl} alt={item.name} />
                    : <span style={{ fontSize: "1.5rem" }}>🖼️</span>
                  }
                </div>
                <div className="ir-info">
                  <p className="ir-name">{item.name}</p>
                  {item.status === "pending"   && <p className="ir-sub">Waiting...</p>}
                  {item.status === "uploading" && <p className="ir-sub ir-sub--blue">Resizing...</p>}
                  {item.status === "done" && (
                    <p className="ir-sub">
                      {formatBytes(item.origSize)} → {formatBytes(item.outSize)}
                      {item.outW && item.outH && (
                        <span className="ir-dim"> · {item.outW}×{item.outH}px</span>
                      )}
                    </p>
                  )}
                  {item.status === "error" && <p className="ir-sub ir-sub--red">{item.statusMsg}</p>}
                </div>
                {item.status === "done" && (
                  <button className="ir-btn ir-btn--blue ir-btn--sm" onClick={() => handleDownload(item)}>Download</button>
                )}
              </div>
            ))}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple
            style={{ display: "none" }}
            onChange={e => processFiles(e.target.files)}
          />
        </>
      )}

      <style>{`
        .ir-wrap { max-width: 800px; margin: 0 auto; padding: 1.5rem; }
        .ir-settings { display: flex; flex-wrap: wrap; gap: 1.25rem; margin-bottom: 1.5rem; align-items: flex-end; }
        .ir-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .ir-field--wide { flex: 1; min-width: 200px; }
        .ir-field label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; opacity: 0.55; }
        .ir-input { padding: 0.5rem 0.75rem; border: 1.5px solid rgba(0,0,0,0.15); border-radius: 6px; font-size: 0.875rem; width: 110px; background: transparent; color: inherit; }
        .ir-tabs { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .ir-tab { padding: 0.375rem 0.75rem; border: 1.5px solid rgba(0,0,0,0.15); border-radius: 6px; background: transparent; cursor: pointer; font-size: 0.8125rem; color: inherit; }
        .ir-tab--on { background: var(--primary,#0070f3); color: white; border-color: var(--primary,#0070f3); }
        .ir-error { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: #fee; border: 1px solid #fcc; border-radius: 8px; color: #c00; margin-bottom: 1rem; font-size: 0.875rem; }
        .ir-error-close { background: none; border: none; color: #c00; cursor: pointer; font-size: 1.25rem; font-weight: bold; padding: 0; }
        .ir-drop { border: 2px dashed var(--primary,#0070f3); border-radius: 12px; padding: 4rem 2rem; text-align: center; cursor: pointer; }
        .ir-drop:hover { background: rgba(0,112,243,0.04); }
        .ir-drop-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; }
        .ir-drop-hint { font-size: 0.875rem; opacity: 0.6; }
        .ir-bar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
        .ir-btn { padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.875rem; }
        .ir-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .ir-btn--blue  { background: var(--primary,#0070f3); color: white; }
        .ir-btn--green { background: #22c55e; color: white; }
        .ir-btn--red   { background: #ef4444; color: white; }
        .ir-btn--sm    { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }
        .ir-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .ir-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1.5px solid rgba(0,0,0,0.1); border-radius: 8px; }
        .ir-item--done  { border-color: rgba(34,197,94,0.4); }
        .ir-item--error { border-color: rgba(239,68,68,0.4); }
        .ir-thumb { width: 72px; height: 56px; flex-shrink: 0; border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; }
        .ir-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .ir-info { flex: 1; min-width: 0; text-align: left; }
        .ir-name { font-weight: 600; font-size: 0.875rem; margin-bottom: 0.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ir-sub { font-size: 0.8125rem; opacity: 0.7; }
        .ir-sub--blue { color: var(--primary,#0070f3); opacity: 1; font-weight: 600; }
        .ir-sub--red  { color: #ef4444; opacity: 1; }
        .ir-dim { opacity: 0.85; font-weight: 600; }
        @media (prefers-color-scheme: dark) {
          .ir-input { border-color: rgba(255,255,255,0.2); }
          .ir-tab { border-color: rgba(255,255,255,0.2); }
          .ir-item { border-color: rgba(255,255,255,0.1); }
        }
      `}</style>
    </div>
  );
}
