"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function parseRange(rangeStr, maxPage) {
  const indices = new Set();
  const parts = rangeStr.split(",").map(s => s.trim()).filter(Boolean);
  for (const part of parts) {
    if (part.includes("-")) {
      const [a, b] = part.split("-").map(s => parseInt(s.trim(), 10));
      if (!isNaN(a) && !isNaN(b)) {
        for (let i = a; i <= b && i <= maxPage; i++) {
          if (i >= 1) indices.add(i - 1);
        }
      }
    } else {
      const n = parseInt(part, 10);
      if (!isNaN(n) && n >= 1 && n <= maxPage) indices.add(n - 1);
    }
  }
  return Array.from(indices).sort((a, b) => a - b);
}

export default function PdfSplitter() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [rangeStr, setRangeStr] = useState("");
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

  async function handleExtract() {
    if (!file || !rangeStr.trim()) { setError("Enter a page range."); return; }
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const indices = parseRange(rangeStr, pageCount);
      if (indices.length === 0) { setError("No valid pages in range."); setStatus("idle"); return; }
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(srcDoc, indices);
      pages.forEach(p => newDoc.addPage(p));
      const bytes = await newDoc.save({ useObjectStreams: true });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, pageCount: indices.length });
      setStatus("done");
    } catch (err) {
      setError("Extraction failed: " + err.message);
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = file.name.replace(/\.pdf$/i, "") + "-extracted.pdf";
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
          onClick={() => document.getElementById("pdf-split-input").click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input id="pdf-split-input" type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="pdfpg-drop-icon">✂️</div>
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

          <p className="pdfpg-page-count">Enter pages to extract (e.g. 1-3, 5, 7-9)</p>
          <input
            className="pdfpg-range-input"
            type="text"
            value={rangeStr}
            onChange={(e) => setRangeStr(e.target.value)}
            placeholder={`1-${Math.min(3, pageCount)}, ${Math.min(5, pageCount)}`}
          />

          {status !== "done" && (
            <button className="pdfpg-btn" style={{ marginTop: "1rem" }} onClick={handleExtract} disabled={status === "processing" || !rangeStr.trim()}>
              {status === "processing" ? "Extracting…" : "Extract Pages"}
            </button>
          )}

          {status === "done" && result && (
            <div className="pdfpg-result">
              <p className="pdfpg-saving">Extracted {result.pageCount} page{result.pageCount !== 1 ? "s" : ""} successfully</p>
              <button className="pdfpg-btn" style={{ marginTop: "1rem" }} onClick={handleDownload}>Download Extracted PDF</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
