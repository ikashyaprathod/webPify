"use client";

import { useState } from "react";

const SIZES = [16, 32, 48, 180, 192, 512];

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

async function resizeToCanvas(file, w, h) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("Canvas error")), "image/png");
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = URL.createObjectURL(file);
  });
}

export default function FaviconGenerator() {
  const [file, setFile] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [blobs, setBlobs] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) { setError("Please upload an image file."); return; }
    setFile(f);
    setPreviews([]); setBlobs([]); setStatus("idle"); setError("");
  }

  async function handleGenerate() {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const results = await Promise.all(SIZES.map(async size => {
        const blob = await resizeToCanvas(file, size, size);
        return { size, blob, url: URL.createObjectURL(blob) };
      }));
      setPreviews(results.map(r => ({ size: r.size, url: r.url })));
      setBlobs(results.map(r => ({ size: r.size, blob: r.blob })));
      setStatus("done");
    } catch (err) {
      setError("Generation failed: " + err.message);
      setStatus("error");
    }
  }

  function downloadOne(size, blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = size === 180 ? "apple-touch-icon.png" : size === 192 ? "icon-192.png" : size === 512 ? "icon-512.png" : `favicon-${size}x${size}.png`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  async function downloadAll() {
    if (!blobs.length) return;
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    blobs.forEach(({ size, blob }) => {
      const name = size === 180 ? "apple-touch-icon.png" : size === 192 ? "icon-192.png" : size === 512 ? "icon-512.png" : `favicon-${size}x${size}.png`;
      zip.file(name, blob);
    });
    // Also add favicon.ico as 32x32 PNG renamed
    const ico32 = blobs.find(b => b.size === 32);
    if (ico32) zip.file("favicon.ico", ico32.blob);
    const zipBlob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 6 } });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipBlob);
    a.download = "favicons.zip";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="favgen-wrap">
      {error && (
        <div className="favgen-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="favgen-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`favgen-drop${dragging ? " favgen-drop--active" : ""}`}
          onClick={() => document.getElementById("favgen-input").click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="favgen-input" type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="favgen-drop-icon">⚙️</div>
          <p className="favgen-drop-title">Drag & Drop Image here</p>
          <p className="favgen-drop-sub">PNG · SVG · JPG · 512×512px recommended · Click to browse</p>
          <button className="favgen-btn" onClick={(e) => { e.stopPropagation(); document.getElementById("favgen-input").click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="favgen-card">
          <div className="favgen-file-info">
            <span>📄</span>
            <div>
              <p className="favgen-file-name">{file.name}</p>
              <p className="favgen-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="favgen-close-btn" onClick={() => { setFile(null); setPreviews([]); setBlobs([]); setStatus("idle"); }}>×</button>
          </div>

          {status !== "done" && (
            <button className="favgen-btn" onClick={handleGenerate} disabled={status === "processing"}>
              {status === "processing" ? "Generating…" : "Generate All Sizes"}
            </button>
          )}

          {status === "done" && previews.length > 0 && (
            <div className="favgen-result">
              <div className="favgen-preview-grid">
                {previews.map(({ size, url }) => (
                  <div key={size} className="favgen-preview-item">
                    <img src={url} alt={`${size}×${size}`} style={{ width: Math.min(size, 64), height: Math.min(size, 64), imageRendering: size < 32 ? "pixelated" : "auto", border: "1px solid #e2e8f0", borderRadius: 4 }} />
                    <p className="favgen-size-label">{size}×{size}</p>
                    <button className="favgen-btn" style={{ padding: "4px 10px", fontSize: "0.75rem" }} onClick={() => downloadOne(size, blobs.find(b => b.size === size)?.blob)}>↓</button>
                  </div>
                ))}
              </div>
              <button className="favgen-btn" style={{ marginTop: "1.5rem", width: "100%" }} onClick={downloadAll}>
                ⬇ Download All as ZIP (includes favicon.ico)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
