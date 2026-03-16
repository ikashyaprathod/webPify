"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function ImageBlur() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [sigma, setSigma] = useState(5);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  function handleFile(f) {
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
  }

  const handleApply = useCallback(async () => {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("op", "blur");
      formData.append("sigma", String(sigma));
      const res = await fetch("/api/edit", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server error");
      const { result: dataUrl } = await res.json();
      setResult(dataUrl);
      setStatus("done");
    } catch (err) {
      setError("Failed to apply blur: " + err.message);
      setStatus("error");
    }
  }, [file, sigma]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = result;
    a.download = `${base}-blurred.jpg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const previewFilter = `blur(${Math.round(sigma / 2)}px)`;

  return (
    <div className="iblur-wrap">
      {error && (
        <div className="iblur-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="iblur-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`iblur-drop${dragging ? " iblur-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="iblur-drop-icon">🖼️</div>
          <p className="iblur-drop-title">Drag & Drop Image here</p>
          <p className="iblur-drop-sub">JPG · PNG · WebP · GIF · Click to browse</p>
          <button className="iblur-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="iblur-card">
          <div className="iblur-preview-row">
            <div className="iblur-preview-side">
              <p className="iblur-preview-label">Original</p>
              <img className="iblur-preview-img" src={previewUrl} alt="Original" />
            </div>
            <div className="iblur-preview-side">
              <p className="iblur-preview-label">Preview (CSS)</p>
              <img className="iblur-preview-img" src={previewUrl} alt="Blurred preview" style={{ filter: previewFilter }} />
            </div>
          </div>

          <div className="iblur-controls">
            <div className="iblur-slider-row">
              <label className="iblur-slider-label">Blur Intensity:</label>
              <span className="iblur-slider-val">{sigma}</span>
            </div>
            <input
              className="iblur-slider"
              type="range"
              min={1}
              max={20}
              step={1}
              value={sigma}
              onChange={(e) => { setSigma(Number(e.target.value)); setResult(null); setStatus("idle"); }}
            />
          </div>

          {status === "done" && result && (
            <div className="iblur-result">
              <p className="iblur-result-label">Blur applied — ready to download</p>
              <img className="iblur-result-img" src={result} alt="Blurred result" />
              <button className="iblur-download-btn" onClick={handleDownload}>Download Blurred Image</button>
            </div>
          )}

          <div className="iblur-actions">
            <button className="iblur-btn" onClick={handleApply} disabled={status === "processing"}>
              {status === "processing" ? "Applying…" : "Apply Blur"}
            </button>
            <button className="iblur-reset-btn" onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setStatus("idle"); }}>
              Change Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
