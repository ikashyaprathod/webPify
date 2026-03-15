"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function PdfRotator() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  async function handleFile(f) {
    if (!f || f.type !== "application/pdf") { setError("Please upload a PDF file."); return; }
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await f.arrayBuffer();
      const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
      setFile(f);
      setPageCount(doc.getPageCount());
      setStatus("idle");
      setResult(null);
    } catch (err) {
      setError("Failed to read PDF: " + err.message);
    }
  }

  async function handleRotate(deg) {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument, degrees } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();
      pages.forEach(page => {
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + deg + 360) % 360));
      });
      const bytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, deg });
      setStatus("done");
    } catch (err) {
      setError("Rotation failed: " + err.message);
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = file.name.replace(/\.pdf$/i, "") + `-rotated${result.deg}.pdf`;
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

      {!file ? (
        <div
          className={`pdfpg-drop${dragging ? " pdfpg-drop--active" : ""}`}
          onClick={() => document.getElementById("pdf-rot-input").click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="pdf-rot-input" type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="pdfpg-drop-icon">🔃</div>
          <p className="pdfpg-drop-title">Drag & Drop PDF here</p>
          <p className="pdfpg-drop-sub">or click to browse</p>
        </div>
      ) : (
        <div className="pdfpg-file-card">
          <div className="pdfpg-list">
            <div className="pdfpg-list-item">
              <div>
                <p className="pdfpg-list-name">{file.name}</p>
                <p className="pdfpg-list-meta">{pageCount} pages · {fmtBytes(file.size)}</p>
              </div>
              <button className="pdfpg-icon-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); setPageCount(0); }}>×</button>
            </div>
          </div>

          <p className="pdfpg-page-count">Rotate all {pageCount} pages:</p>
          <div className="pdfpg-rotate-btns">
            <button className="pdfpg-btn" onClick={() => handleRotate(90)} disabled={status === "processing"}>↻ 90° CW</button>
            <button className="pdfpg-btn" onClick={() => handleRotate(-90)} disabled={status === "processing"}>↺ 90° CCW</button>
            <button className="pdfpg-btn" onClick={() => handleRotate(180)} disabled={status === "processing"}>↕ 180°</button>
          </div>
          {status === "processing" && <p className="pdfpg-page-count">Rotating…</p>}

          {status === "done" && result && (
            <div className="pdfpg-result">
              <p className="pdfpg-saving">Rotated {result.deg > 0 ? result.deg + "° CW" : Math.abs(result.deg) + "° CCW"} — all {pageCount} pages</p>
              <button className="pdfpg-btn" style={{ marginTop: "1rem" }} onClick={handleDownload}>Download Rotated PDF</button>
              <button className="pdfpg-btn" style={{ marginTop: "0.5rem", marginLeft: "0.5rem", background: "none", color: "#3b82f6", border: "1px solid #3b82f6" }} onClick={() => { setStatus("idle"); setResult(null); }}>Rotate Again</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
