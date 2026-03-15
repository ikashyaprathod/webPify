"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function PdfCompressor() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | processing | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type === "application/pdf") setFile(f);
    else setError("Please upload a PDF file.");
  }

  function handleFile(e) {
    const f = e.target.files[0];
    if (f && f.type === "application/pdf") { setFile(f); setError(""); }
    else setError("Please upload a PDF file.");
  }

  async function handleCompress() {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer, { updateMetadata: false });
      const compressedBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([compressedBytes], { type: "application/pdf" });
      const saved = ((file.size - blob.size) / file.size * 100).toFixed(1);
      setResult({ blob, origSize: file.size, outSize: blob.size, saved: Math.max(0, parseFloat(saved)) });
      setStatus("done");
    } catch (err) {
      setError("Failed to compress PDF: " + err.message);
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = file.name.replace(/\.pdf$/i, "") + "-compressed.pdf";
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
          onClick={() => document.getElementById("pdf-comp-input").click()}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="pdf-comp-input" type="file" accept="application/pdf" style={{ display: "none" }} onChange={handleFile} />
          <div className="pdfpg-drop-icon">📄</div>
          <p className="pdfpg-drop-title">Drag & Drop PDF here</p>
          <p className="pdfpg-drop-sub">or click to browse · Max 50MB</p>
        </div>
      ) : (
        <div className="pdfpg-file-card">
          <div className="pdfpg-list">
            <div className="pdfpg-list-item">
              <div>
                <p className="pdfpg-list-name">{file.name}</p>
                <p className="pdfpg-list-meta">{fmtBytes(file.size)}</p>
              </div>
              <div className="pdfpg-list-actions">
                <button className="pdfpg-icon-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
              </div>
            </div>
          </div>

          {status !== "done" && (
            <button className="pdfpg-btn" onClick={handleCompress} disabled={status === "processing"}>
              {status === "processing" ? "Compressing…" : "Compress PDF"}
            </button>
          )}

          {status === "done" && result && (
            <div className="pdfpg-result">
              <div className="pdfpg-sizes">
                <div>
                  <p className="pdfpg-size-label">Original</p>
                  <p className="pdfpg-size-val">{fmtBytes(result.origSize)}</p>
                </div>
                <div>
                  <p className="pdfpg-size-label">Compressed</p>
                  <p className="pdfpg-size-val">{fmtBytes(result.outSize)}</p>
                </div>
                <div>
                  <p className="pdfpg-size-label">Saved</p>
                  <p className="pdfpg-saving">{result.saved}%</p>
                </div>
              </div>
              <button className="pdfpg-btn" onClick={handleDownload}>Download Compressed PDF</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
