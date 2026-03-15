"use client";

import { useState, useRef, useCallback } from "react";
import JSZip from "jszip";

export default function HEICConverter() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const fmt = (b) => b < 1048576 ? (b / 1024).toFixed(0) + " KB" : (b / 1048576).toFixed(1) + " MB";

  const addFiles = useCallback((incoming) => {
    const valid = Array.from(incoming).filter(f =>
      f.type === "image/heic" || f.type === "image/heif" ||
      f.name.toLowerCase().endsWith(".heic") || f.name.toLowerCase().endsWith(".heif")
    );
    if (!valid.length) return alert("Please drop HEIC or HEIF files.");
    setFiles(prev => [...prev, ...valid.map(f => ({ file: f, status: "pending", outUrl: null, outSize: null }))]);
  }, []);

  const onDrop = (e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); };
  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  const convertAll = async () => {
    const heic2any = (await import("heic2any")).default;
    for (let i = 0; i < files.length; i++) {
      if (files[i].status === "done") continue;
      setFiles(prev => prev.map((f, idx) => idx === i ? { ...f, status: "working" } : f));
      try {
        const blob = await heic2any({ blob: files[i].file, toType: "image/jpeg", quality: 0.92 });
        const url = URL.createObjectURL(blob);
        setFiles(prev => prev.map((f, idx) => idx === i ? { ...f, status: "done", outUrl: url, outSize: blob.size } : f));
      } catch {
        setFiles(prev => prev.map((f, idx) => idx === i ? { ...f, status: "error" } : f));
      }
    }
  };

  const downloadAll = async () => {
    const done = files.filter(f => f.status === "done");
    if (done.length === 1) {
      const a = document.createElement("a");
      a.href = done[0].outUrl;
      a.download = done[0].file.name.replace(/\.heic?$/i, ".jpg");
      a.click(); return;
    }
    const zip = new JSZip();
    for (const f of done) {
      const res = await fetch(f.outUrl);
      zip.file(f.file.name.replace(/\.heic?$/i, ".jpg"), await res.blob());
    }
    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "heic-converted.zip"; a.click();
  };

  const removeFile = (i) => setFiles(prev => prev.filter((_, idx) => idx !== i));
  const doneCount = files.filter(f => f.status === "done").length;
  const busy = files.some(f => f.status === "working");

  return (
    <div className="ti-wrap">
      <div className="ti-info-strip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        iPhone &amp; iPad photos are saved as HEIC. Convert them to JPG for universal compatibility — 100% in your browser, zero uploads.
      </div>

      <div
        className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
        onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}
        onClick={() => inputRef.current?.click()}
      >
        <span className="ti-drop-icon">📱</span>
        <div className="ti-drop-title">Drop HEIC / HEIF files here</div>
        <div className="ti-drop-sub">iPhone photos (.heic / .heif) — batch supported</div>
        <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose Files</button>
        <input ref={inputRef} type="file" accept=".heic,.heif,image/heic,image/heif" multiple style={{ display: "none" }} onChange={e => addFiles(e.target.files)} />
      </div>

      {files.length > 0 && (
        <>
          <div className="ti-action-bar">
            <button className="ti-action-btn" onClick={convertAll} disabled={busy || files.every(f => f.status === "done")}>
              {busy ? "Converting…" : "Convert All to JPG"}
            </button>
            {doneCount > 0 && (
              <button className="ti-dl-all-btn" onClick={downloadAll}>
                ↓ Download {doneCount > 1 ? `All (${doneCount})` : "JPG"}
              </button>
            )}
            <span className="ti-count-badge">{files.length} file{files.length !== 1 ? "s" : ""}</span>
          </div>

          <div className="ti-file-list">
            {files.map((f, i) => (
              <div key={i} className={`ti-file-item${f.status === "done" ? " ti-file-item--done" : f.status === "error" ? " ti-file-item--error" : ""}`}>
                <div className="ti-file-thumb ti-file-thumb--icon">📷</div>
                <div className="ti-file-info">
                  <div className="ti-file-name">{f.file.name}</div>
                  <div className="ti-file-meta">
                    {fmt(f.file.size)}
                    {f.outSize && <> → <strong style={{ color: "#16a34a" }}>{fmt(f.outSize)}</strong> JPG</>}
                  </div>
                  {f.status === "working" && <div className="ti-progress"><div className="ti-progress-bar" style={{ width: "70%" }} /></div>}
                </div>
                <span className={`ti-file-badge ti-file-badge--${f.status}`}>
                  {f.status === "pending" ? "Pending" : f.status === "working" ? "Converting…" : f.status === "done" ? "Done ✓" : "Error"}
                </span>
                {f.status === "done" && (
                  <a className="ti-file-dl" href={f.outUrl} download={f.file.name.replace(/\.heic?$/i, ".jpg")} title="Download">↓</a>
                )}
                <button className="ti-file-del" onClick={() => removeFile(i)} title="Remove">✕</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
