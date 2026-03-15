"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function MetaRow({ label, value }) {
  if (!value && value !== 0) return null;
  return (
    <div className="imeta-row">
      <span className="imeta-label">{label}</span>
      <span className="imeta-value">{String(value)}</span>
    </div>
  );
}

export default function ImageMetadata() {
  const [file, setFile] = useState(null);
  const [dims, setDims] = useState(null);
  const [exif, setExif] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  async function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) { setError("Please upload an image file."); return; }
    setFile(f);
    setStatus("loading");
    setError("");
    setExif(null);
    setDims(null);

    // Get dimensions via Image element
    const url = URL.createObjectURL(f);
    const img = new window.Image();
    img.onload = () => { setDims({ w: img.naturalWidth, h: img.naturalHeight }); URL.revokeObjectURL(url); };
    img.onerror = () => URL.revokeObjectURL(url);
    img.src = url;

    // Parse EXIF
    try {
      const exifr = (await import("exifr")).default;
      const data = await exifr.parse(f);
      setExif(data || {});
    } catch {
      setExif({});
    }
    setStatus("done");
  }

  return (
    <div className="imeta-wrap">
      {error && (
        <div className="imeta-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="imeta-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`imeta-drop${dragging ? " imeta-drop--active" : ""}`}
          onClick={() => document.getElementById("imeta-input").click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="imeta-input" type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="imeta-drop-icon">🔍</div>
          <p className="imeta-drop-title">Drag & Drop Image here</p>
          <p className="imeta-drop-sub">JPG · PNG · WebP · TIFF · Click to browse</p>
          <button className="imeta-btn" onClick={(e) => { e.stopPropagation(); document.getElementById("imeta-input").click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="imeta-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>Metadata: {file.name}</h3>
            <button className="imeta-close-btn" onClick={() => { setFile(null); setExif(null); setDims(null); setStatus("idle"); }}>× New Image</button>
          </div>

          {status === "loading" && <p className="imeta-loading">Reading metadata…</p>}

          {status === "done" && (
            <>
              <div className="imeta-section">
                <h4 className="imeta-section-title">File Info</h4>
                <MetaRow label="Filename" value={file.name} />
                <MetaRow label="File Size" value={fmtBytes(file.size)} />
                <MetaRow label="File Type" value={file.type} />
                {dims && <MetaRow label="Dimensions" value={`${dims.w} × ${dims.h} px`} />}
              </div>

              {exif && Object.keys(exif).length > 0 && (
                <div className="imeta-section">
                  <h4 className="imeta-section-title">EXIF Data</h4>
                  <MetaRow label="Camera Make" value={exif.Make} />
                  <MetaRow label="Camera Model" value={exif.Model} />
                  <MetaRow label="Date Taken" value={exif.DateTimeOriginal ? new Date(exif.DateTimeOriginal).toLocaleString() : null} />
                  <MetaRow label="Focal Length" value={exif.FocalLength ? `${exif.FocalLength}mm` : null} />
                  <MetaRow label="Aperture" value={exif.FNumber ? `f/${exif.FNumber}` : null} />
                  <MetaRow label="ISO" value={exif.ISO} />
                  <MetaRow label="Exposure" value={exif.ExposureTime ? `1/${Math.round(1 / exif.ExposureTime)}s` : null} />
                  <MetaRow label="Flash" value={exif.Flash !== undefined ? (exif.Flash ? "Yes" : "No") : null} />
                  {exif.latitude !== undefined && exif.longitude !== undefined && (
                    <MetaRow label="GPS" value={`${exif.latitude.toFixed(6)}, ${exif.longitude.toFixed(6)}`} />
                  )}
                </div>
              )}

              {exif && Object.keys(exif).length === 0 && (
                <div className="imeta-no-exif">No EXIF data found in this image.</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
