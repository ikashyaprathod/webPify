"use client";

import { useState } from "react";

const PAGE_SIZES = {
  a4:     { label: "A4 (595×842pt)",    w: 595, h: 842 },
  letter: { label: "Letter (612×792pt)", w: 612, h: 792 },
  fit:    { label: "Fit to image",       w: 0,   h: 0   },
};

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

async function imageFileToPngBlob(file) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      canvas.toBlob(blob => blob ? resolve({ blob, w: img.naturalWidth, h: img.naturalHeight }) : reject(new Error("Canvas conversion failed")), "image/png");
    };
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = URL.createObjectURL(file);
  });
}

export default function JpgToPdf() {
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState("a4");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleImages(fileList) {
    const valid = Array.from(fileList).filter(f => f.type.startsWith("image/"));
    if (!valid.length) { setError("Please upload image files (JPG, PNG, WebP)."); return; }
    setError("");
    const newImages = valid.map(f => ({ file: f, preview: URL.createObjectURL(f) }));
    setImages(prev => [...prev, ...newImages]);
  }

  function moveUp(i) {
    if (i === 0) return;
    setImages(prev => { const a = [...prev]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; });
  }

  function moveDown(i) {
    setImages(prev => { if (i >= prev.length - 1) return prev; const a = [...prev]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; });
  }

  function removeImage(i) {
    setImages(prev => prev.filter((_, idx) => idx !== i));
  }

  async function handleConvert() {
    if (!images.length) { setError("Add at least one image."); return; }
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const pdfDoc = await PDFDocument.create();
      const ps = PAGE_SIZES[pageSize];

      for (const img of images) {
        const { blob, w, h } = await imageFileToPngBlob(img.file);
        const bytes = await blob.arrayBuffer();
        const embedded = await pdfDoc.embedPng(new Uint8Array(bytes));

        let pw = ps.w, ph = ps.h;
        if (pageSize === "fit") { pw = w; ph = h; }

        const page = pdfDoc.addPage([pw, ph]);
        const scale = Math.min(pw / w, ph / h);
        const dw = w * scale, dh = h * scale;
        const x = (pw - dw) / 2, y = (ph - dh) / 2;
        page.drawImage(embedded, { x, y, width: dw, height: dh });
      }

      const bytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult(blob);
      setStatus("done");
    } catch (err) {
      setError("Conversion failed: " + err.message);
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result);
    a.download = "images.pdf";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="pdfpg-wrap">
      {error && (
        <div className="pdfpg-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="pdfpg-icon-btn">×</button>
        </div>
      )}

      <div
        className={`pdfpg-drop${dragging ? " pdfpg-drop--active" : ""}`}
        onClick={() => document.getElementById("jpg-pdf-input").click()}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleImages(e.dataTransfer.files); }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
      >
        <input id="jpg-pdf-input" type="file" accept="image/*" multiple style={{ display: "none" }} onChange={(e) => handleImages(e.target.files)} />
        <div className="pdfpg-drop-icon">🖼️</div>
        <p className="pdfpg-drop-title">{images.length ? "Add More Images" : "Drag & Drop Images here"}</p>
        <p className="pdfpg-drop-sub">JPG, PNG, WebP · Click to browse</p>
      </div>

      {images.length > 0 && (
        <div className="pdfpg-file-card">
          <div className="pdfpg-list">
            {images.map((img, i) => (
              <div key={i} className="pdfpg-list-item">
                <img src={img.preview} alt={img.file.name} style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 6, marginRight: 8 }} />
                <div style={{ flex: 1 }}>
                  <p className="pdfpg-list-name">{img.file.name}</p>
                  <p className="pdfpg-list-meta">{fmtBytes(img.file.size)}</p>
                </div>
                <div className="pdfpg-list-actions">
                  <button className="pdfpg-icon-btn" onClick={() => moveUp(i)} disabled={i === 0}>↑</button>
                  <button className="pdfpg-icon-btn" onClick={() => moveDown(i)} disabled={i === images.length - 1}>↓</button>
                  <button className="pdfpg-icon-btn" onClick={() => removeImage(i)}>×</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ margin: "1rem 0" }}>
            <label className="pdfpg-page-count">Page size: </label>
            <select className="pdfpg-select" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
              {Object.entries(PAGE_SIZES).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          {status !== "done" && (
            <button className="pdfpg-btn" onClick={handleConvert} disabled={status === "processing"}>
              {status === "processing" ? "Converting…" : `Convert ${images.length} Image${images.length !== 1 ? "s" : ""} to PDF`}
            </button>
          )}

          {status === "done" && result && (
            <div className="pdfpg-result">
              <p className="pdfpg-saving">PDF created with {images.length} page{images.length !== 1 ? "s" : ""}</p>
              <button className="pdfpg-btn" style={{ marginTop: "1rem" }} onClick={handleDownload}>Download PDF</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
