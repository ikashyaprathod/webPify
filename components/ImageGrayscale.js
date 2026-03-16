"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function ImageGrayscale() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
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

  const handleConvert = useCallback(async () => {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("op", "grayscale");
      const res = await fetch("/api/edit", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server error");
      const { result: dataUrl } = await res.json();
      setResult(dataUrl);
      setStatus("done");
    } catch (err) {
      setError("Failed to convert: " + err.message);
      setStatus("error");
    }
  }, [file]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = result;
    a.download = `${base}-grayscale.jpg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="igray-wrap">
      {error && (
        <div className="igray-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="igray-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`igray-drop${dragging ? " igray-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="igray-drop-icon">🎨</div>
          <p className="igray-drop-title">Drag & Drop Image here</p>
          <p className="igray-drop-sub">JPG · PNG · WebP · GIF · Click to browse</p>
          <button className="igray-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="igray-card">
          <div className="igray-preview-row">
            <div className="igray-before">
              <p className="igray-preview-label">Original</p>
              <img className="igray-preview-img" src={previewUrl} alt="Original" />
            </div>
            <div className="igray-after">
              <p className="igray-preview-label">{status === "done" ? "Grayscale" : "Preview"}</p>
              {status === "done" && result ? (
                <img className="igray-preview-img" src={result} alt="Grayscale result" />
              ) : (
                <img className="igray-preview-img igray-preview-css" src={previewUrl} alt="Grayscale preview" />
              )}
            </div>
          </div>

          {status === "done" && result && (
            <div className="igray-actions">
              <button className="igray-download-btn" onClick={handleDownload}>Download Grayscale Image</button>
              <button className="igray-reset-btn" onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setStatus("idle"); }}>
                Convert Another
              </button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <div className="igray-actions">
              <button className="igray-btn" onClick={handleConvert}>Convert to Grayscale</button>
              <button className="igray-reset-btn" onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setStatus("idle"); }}>
                Change Image
              </button>
            </div>
          )}

          {status === "processing" && (
            <div className="igray-processing">
              <div className="igray-spinner" />
              <p>Converting to grayscale…</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
