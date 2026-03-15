"use client";

import { useState } from "react";

const OG_SIZES = [
  { label: "Open Graph", key: "og", w: 1200, h: 630 },
  { label: "Twitter Card", key: "twitter", w: 1200, h: 600 },
  { label: "LinkedIn", key: "linkedin", w: 1200, h: 627 },
  { label: "Facebook", key: "facebook", w: 1200, h: 630 },
];

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

async function resizeToBlob(file, w, h) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      // Cover fit
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const sw = img.naturalWidth * scale, sh = img.naturalHeight * scale;
      const ox = (w - sw) / 2, oy = (h - sh) / 2;
      ctx.drawImage(img, ox, oy, sw, sh);
      canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("Canvas error")), "image/jpeg", 0.92);
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

export default function OgImageResizer() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) { setError("Please upload an image file."); return; }
    setFile(f);
    setResults([]); setStatus("idle"); setError("");
  }

  async function handleGenerate() {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const generated = await Promise.all(OG_SIZES.map(async (sz) => {
        const blob = await resizeToBlob(file, sz.w, sz.h);
        return { ...sz, blob, url: URL.createObjectURL(blob), size: blob.size };
      }));
      setResults(generated);
      setStatus("done");
    } catch (err) {
      setError("Generation failed: " + err.message);
      setStatus("error");
    }
  }

  function downloadOne(r) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(r.blob);
    a.download = `og-${r.key}-${r.w}x${r.h}.jpg`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  async function downloadAll() {
    if (!results.length) return;
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    results.forEach(r => zip.file(`og-${r.key}-${r.w}x${r.h}.jpg`, r.blob));
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipBlob);
    a.download = "og-images.zip";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="ogimg-wrap">
      {error && (
        <div className="ogimg-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="ogimg-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`ogimg-drop${dragging ? " ogimg-drop--active" : ""}`}
          onClick={() => document.getElementById("ogimg-input").click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="ogimg-input" type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="ogimg-drop-icon">🖼️</div>
          <p className="ogimg-drop-title">Drag & Drop Image here</p>
          <p className="ogimg-drop-sub">PNG · JPG · WebP · Recommended: 1200×630px or larger</p>
          <button className="ogimg-btn" onClick={(e) => { e.stopPropagation(); document.getElementById("ogimg-input").click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="ogimg-card">
          <div className="ogimg-file-info">
            <span>🖼️</span>
            <div>
              <p className="ogimg-file-name">{file.name}</p>
              <p className="ogimg-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="ogimg-close-btn" onClick={() => { setFile(null); setResults([]); setStatus("idle"); }}>×</button>
          </div>

          {status !== "done" && (
            <button className="ogimg-btn" onClick={handleGenerate} disabled={status === "processing"}>
              {status === "processing" ? "Generating…" : "Generate OG Images"}
            </button>
          )}

          {status === "done" && results.length > 0 && (
            <div className="ogimg-result">
              <div className="ogimg-grid">
                {results.map(r => (
                  <div key={r.key} className="ogimg-item">
                    <img src={r.url} alt={r.label} style={{ width: "100%", borderRadius: 8, border: "1px solid #e2e8f0" }} />
                    <div className="ogimg-item-info">
                      <strong>{r.label}</strong>
                      <span>{r.w}×{r.h} · {fmtBytes(r.size)}</span>
                    </div>
                    <button className="ogimg-btn" style={{ fontSize: "0.8rem", padding: "6px 14px" }} onClick={() => downloadOne(r)}>⬇ Download</button>
                  </div>
                ))}
              </div>
              <button className="ogimg-btn" style={{ marginTop: "1.5rem", width: "100%" }} onClick={downloadAll}>
                ⬇ Download All as ZIP
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
