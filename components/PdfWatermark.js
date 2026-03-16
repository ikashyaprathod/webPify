"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}

const POSITIONS = ["center", "diagonal", "all"];

export default function PdfWatermark() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [fontSize, setFontSize] = useState(36);
  const [opacity, setOpacity] = useState(0.3);
  const [rotation, setRotation] = useState(-45);
  const [color, setColor] = useState("#ff0000");
  const [position, setPosition] = useState("diagonal");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  function handleFile(f) {
    if (!f) return;
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setError("Please upload a PDF file.");
      return;
    }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
  }

  const handleProcess = useCallback(async () => {
    if (!file || !text.trim()) {
      setError("Please upload a PDF and enter watermark text.");
      return;
    }
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument, rgb, degrees } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();
      const { r, g, b } = hexToRgb(color);
      const radsToDeg = (d) => (d * Math.PI) / 180;

      for (const page of pages) {
        const { width, height } = page.getSize();
        const opts = {
          x: position === "center" ? width / 2 : width / 2,
          y: position === "center" ? height / 2 : height / 2,
          size: fontSize,
          color: rgb(r, g, b),
          opacity,
          rotate: degrees(rotation),
        };
        if (position === "diagonal") {
          page.drawText(text, opts);
        } else if (position === "center") {
          page.drawText(text, { ...opts, rotate: degrees(0) });
        } else {
          // "all" — tile across the page
          const stepX = Math.max(width / 3, 150);
          const stepY = Math.max(height / 4, 120);
          for (let y = stepY / 2; y < height; y += stepY) {
            for (let x = stepX / 2; x < width; x += stepX) {
              page.drawText(text, { ...opts, x, y });
            }
          }
        }
      }

      const bytes = await pdfDoc.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, size: blob.size });
      setStatus("done");
    } catch (err) {
      setError("Processing failed: " + err.message);
      setStatus("error");
    }
  }, [file, text, fontSize, opacity, rotation, color, position]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-watermarked.pdf`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="pdfwm-wrap">
      {error && (
        <div className="pdfwm-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="pdfwm-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`pdfwm-drop${dragging ? " pdfwm-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="application/pdf,.pdf" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="pdfwm-drop-icon">📄</div>
          <p className="pdfwm-drop-title">Drag & Drop PDF here</p>
          <p className="pdfwm-drop-sub">PDF files only · Click to browse</p>
          <button className="pdfwm-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select PDF</button>
        </div>
      ) : (
        <div className="pdfwm-card">
          <div className="pdfwm-file-info">
            <span className="pdfwm-file-icon">📄</span>
            <div>
              <p className="pdfwm-file-name">{file.name}</p>
              <p className="pdfwm-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="pdfwm-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          <div className="pdfwm-controls">
            <div className="pdfwm-option-row">
              <label className="pdfwm-label">Watermark Text:</label>
              <input
                className="pdfwm-text-input"
                type="text"
                value={text}
                placeholder="e.g. CONFIDENTIAL"
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="pdfwm-options-grid">
              <div className="pdfwm-option-row">
                <label className="pdfwm-label">Font Size: {fontSize}px</label>
                <input className="pdfwm-slider" type="range" min={12} max={72} step={2} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
              </div>
              <div className="pdfwm-option-row">
                <label className="pdfwm-label">Opacity: {Math.round(opacity * 100)}%</label>
                <input className="pdfwm-slider" type="range" min={0.05} max={1} step={0.05} value={opacity} onChange={(e) => setOpacity(parseFloat(e.target.value))} />
              </div>
              <div className="pdfwm-option-row">
                <label className="pdfwm-label">Rotation: {rotation}°</label>
                <input className="pdfwm-slider" type="range" min={-180} max={180} step={5} value={rotation} onChange={(e) => setRotation(Number(e.target.value))} />
              </div>
              <div className="pdfwm-option-row">
                <label className="pdfwm-label">Color:</label>
                <input className="pdfwm-input" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
              </div>
            </div>

            <div className="pdfwm-option-row">
              <label className="pdfwm-label">Position:</label>
              <div className="pdfwm-position-group">
                {POSITIONS.map((p) => (
                  <button
                    key={p}
                    className={`pdfwm-position-btn${position === p ? " pdfwm-position-btn--on" : ""}`}
                    onClick={() => setPosition(p)}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {status === "done" && result && (
            <div className="pdfwm-result">
              <p className="pdfwm-result-label">Watermark applied to all pages</p>
              <button className="pdfwm-download-btn" onClick={handleDownload}>Download Watermarked PDF</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="pdfwm-btn" onClick={handleProcess}>Add Watermark</button>
          )}

          {status === "processing" && (
            <div className="pdfwm-processing">
              <div className="pdfwm-spinner" />
              <p>Applying watermark…</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
