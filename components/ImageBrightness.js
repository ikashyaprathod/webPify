"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function ImageBrightness() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [brightness, setBrightness] = useState(1.0);
  const [saturation, setSaturation] = useState(1.0);
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
      formData.append("op", "brightness");
      formData.append("brightness", String(brightness));
      formData.append("saturation", String(saturation));
      const res = await fetch("/api/edit", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server error");
      const { result: dataUrl } = await res.json();
      setResult(dataUrl);
      setStatus("done");
    } catch (err) {
      setError("Failed to apply: " + err.message);
      setStatus("error");
    }
  }, [file, brightness, saturation]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = result;
    a.download = `${base}-adjusted.jpg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const bPct = Math.round(brightness * 100);
  const sPct = Math.round(saturation * 100);
  const cssFilter = `brightness(${brightness}) saturate(${saturation})`;

  return (
    <div className="ibrt-wrap">
      {error && (
        <div className="ibrt-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="ibrt-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`ibrt-drop${dragging ? " ibrt-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="ibrt-drop-icon">☀️</div>
          <p className="ibrt-drop-title">Drag & Drop Image here</p>
          <p className="ibrt-drop-sub">JPG · PNG · WebP · GIF · Click to browse</p>
          <button className="ibrt-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="ibrt-card">
          <div className="ibrt-preview">
            <p className="ibrt-preview-label">Live Preview</p>
            <img
              className="ibrt-preview-img"
              src={status === "done" && result ? result : previewUrl}
              alt="Preview"
              style={status !== "done" ? { filter: cssFilter } : {}}
            />
          </div>

          <div className="ibrt-controls">
            <div className="ibrt-slider-row">
              <label className="ibrt-slider-label">Brightness:</label>
              <span className="ibrt-slider-val">{bPct}%</span>
            </div>
            <input
              className="ibrt-slider"
              type="range"
              min={0.1}
              max={3.0}
              step={0.05}
              value={brightness}
              onChange={(e) => { setBrightness(parseFloat(e.target.value)); setResult(null); setStatus("idle"); }}
            />

            <div className="ibrt-slider-row">
              <label className="ibrt-slider-label">Saturation:</label>
              <span className="ibrt-slider-val">{sPct}%</span>
            </div>
            <input
              className="ibrt-slider"
              type="range"
              min={0.1}
              max={3.0}
              step={0.05}
              value={saturation}
              onChange={(e) => { setSaturation(parseFloat(e.target.value)); setResult(null); setStatus("idle"); }}
            />
          </div>

          {status === "done" && result && (
            <div className="ibrt-result">
              <p className="ibrt-result-label">Applied — Brightness {bPct}% · Saturation {sPct}%</p>
              <button className="ibrt-download-btn" onClick={handleDownload}>Download Adjusted Image</button>
            </div>
          )}

          <div className="ibrt-actions">
            <button className="ibrt-btn" onClick={handleApply} disabled={status === "processing"}>
              {status === "processing" ? "Applying…" : "Apply Adjustments"}
            </button>
            <button className="ibrt-reset-btn" onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setStatus("idle"); }}>
              Change Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
