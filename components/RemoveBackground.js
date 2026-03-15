"use client";

import { useState, useRef, useCallback } from "react";

export default function RemoveBackground() {
  const [original, setOriginal] = useState(null);
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const inputRef = useRef(null);

  const loadFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return alert("Please select an image.");
    setFileName(file.name);
    setResult(null);
    setProgress("");
    const url = URL.createObjectURL(file);
    setOriginal({ url, file });
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    loadFile(e.dataTransfer.files[0]);
  };

  const removeBackground = async () => {
    if (!original) return;
    setBusy(true);
    setProgress("Loading AI model…");
    try {
      const { removeBackground: removeBg } = await import("@imgly/background-removal");
      setProgress("Processing image…");
      const blob = await removeBg(original.file, {
        progress: (key, current, total) => {
          if (key === "compute:inference") {
            setProgress(`Removing background… ${Math.round((current / total) * 100)}%`);
          }
        },
        output: { format: "image/png", quality: 1 },
      });
      const url = URL.createObjectURL(blob);
      setResult(url);
      setProgress("");
    } catch (e) {
      console.error(e);
      alert("Background removal failed: " + e.message);
      setProgress("");
    }
    setBusy(false);
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = fileName.replace(/\.[^.]+$/, "") + "_no_bg.png";
    a.click();
  };

  const reset = () => {
    setOriginal(null);
    setResult(null);
    setFileName("");
    setProgress("");
  };

  return (
    <div className="ti-wrap">
      <div className="ti-info-strip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        AI-powered background removal runs entirely in your browser using WebAssembly. No image is uploaded.
      </div>

      {!original ? (
        <div
          className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
          onDrop={onDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
        >
          <span className="ti-drop-icon">✂️</span>
          <div className="ti-drop-title">Drop an image to remove background</div>
          <div className="ti-drop-sub">PNG, JPEG, WebP — outputs transparent PNG</div>
          <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose Image</button>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => loadFile(e.target.files[0])} />
        </div>
      ) : (
        <>
          {!result ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "var(--check-bg, #f8fafc)", borderRadius: "20px", padding: "1.5rem", marginBottom: "1.5rem", overflow: "hidden" }}>
                <img
                  src={original.url}
                  alt="Original"
                  style={{ maxWidth: "100%", maxHeight: "420px", objectFit: "contain", borderRadius: "12px", display: "block", margin: "0 auto" }}
                />
              </div>
              {busy ? (
                <div style={{ padding: "1rem 0", color: "#6366f1" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🤖</div>
                  <div style={{ fontWeight: 700 }}>{progress || "Processing…"}</div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.4rem" }}>This takes 5–30 seconds depending on image size</div>
                  <div className="ti-progress" style={{ marginTop: "1.25rem", maxWidth: "340px", marginLeft: "auto", marginRight: "auto" }}>
                    <div className="ti-progress-bar" style={{ width: "100%", animation: "rmbg-pulse 1.5s ease-in-out infinite" }} />
                  </div>
                </div>
              ) : (
                <div className="ti-action-bar">
                  <button className="ti-action-btn" onClick={removeBackground}>✂️ Remove Background</button>
                  <button className="ti-dl-all-btn" onClick={reset}>Change Image</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="ti-split">
                <div className="ti-split-panel">
                  <div className="ti-split-label">Original</div>
                  <div className="ti-split-body">
                    <img src={original.url} alt="Original" className="ti-split-img" />
                  </div>
                </div>
                <div className="ti-split-panel">
                  <div className="ti-split-label">Background Removed</div>
                  <div className="ti-split-body" style={{
                    backgroundImage: "repeating-conic-gradient(#e2e8f0 0% 25%, #ffffff 0% 50%)",
                    backgroundSize: "20px 20px"
                  }}>
                    <img src={result} alt="No background" className="ti-split-img" />
                  </div>
                </div>
              </div>
              <div className="ti-action-bar">
                <button className="ti-action-btn ti-action-btn--green" onClick={download}>↓ Download PNG (transparent)</button>
                <button className="ti-dl-all-btn" onClick={reset}>Remove Another</button>
              </div>
            </>
          )}
        </>
      )}

      <style>{`
        @keyframes rmbg-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
