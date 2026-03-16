"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function parsePageRange(input, total) {
  const pages = [];
  const parts = input.split(",").map((s) => s.trim()).filter(Boolean);
  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= Math.min(end, total); i++) {
        if (i >= 1) pages.push(i - 1);
      }
    } else {
      const n = Number(part);
      if (!isNaN(n) && n >= 1 && n <= total) pages.push(n - 1);
    }
  }
  return pages;
}

export default function PdfReorderPages() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [orderInput, setOrderInput] = useState("");
  const [deleteInput, setDeleteInput] = useState("");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  async function handleFile(f) {
    if (!f) return;
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setError("Please upload a PDF file.");
      return;
    }
    setFile(f);
    setStatus("idle");
    setResult(null);
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await f.arrayBuffer();
      const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const count = doc.getPageCount();
      setPageCount(count);
      setOrderInput(Array.from({ length: count }, (_, i) => i + 1).join(","));
    } catch {
      setError("Could not read PDF page count.");
    }
  }

  const handleProcess = useCallback(async () => {
    if (!file) return;
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(buf, { ignoreEncryption: true });
      const total = srcDoc.getPageCount();

      // Parse pages to delete
      const deleteSet = new Set(
        deleteInput.trim()
          ? parsePageRange(deleteInput, total)
          : []
      );

      // Parse page order
      let orderIndices;
      if (orderInput.trim()) {
        orderIndices = parsePageRange(orderInput, total);
      } else {
        orderIndices = Array.from({ length: total }, (_, i) => i);
      }

      // Remove deleted pages from order
      const finalIndices = orderIndices.filter((i) => !deleteSet.has(i));

      if (finalIndices.length === 0) {
        setError("No pages remaining after deletion. Please check your inputs.");
        setStatus("error");
        return;
      }

      const newDoc = await PDFDocument.create();
      const copiedPages = await newDoc.copyPages(srcDoc, finalIndices);
      copiedPages.forEach((page) => newDoc.addPage(page));

      const bytes = await newDoc.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, size: blob.size, pageCount: finalIndices.length });
      setStatus("done");
    } catch (err) {
      setError("Processing failed: " + err.message);
      setStatus("error");
    }
  }, [file, orderInput, deleteInput]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-reordered.pdf`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="pdfro-wrap">
      {error && (
        <div className="pdfro-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="pdfro-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`pdfro-drop${dragging ? " pdfro-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="application/pdf,.pdf" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="pdfro-drop-icon">📑</div>
          <p className="pdfro-drop-title">Drag & Drop PDF here</p>
          <p className="pdfro-drop-sub">PDF files only · Click to browse</p>
          <button className="pdfro-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select PDF</button>
        </div>
      ) : (
        <div className="pdfro-card">
          <div className="pdfro-file-info">
            <span className="pdfro-file-icon">📑</span>
            <div>
              <p className="pdfro-file-name">{file.name}</p>
              <p className="pdfro-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="pdfro-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); setPageCount(0); }}>×</button>
          </div>

          {pageCount > 0 && (
            <p className="pdfro-page-count">This PDF has <strong>{pageCount}</strong> pages.</p>
          )}

          <div className="pdfro-controls">
            <div className="pdfro-field">
              <label className="pdfro-label">Page Order:</label>
              <input
                className="pdfro-input"
                type="text"
                value={orderInput}
                placeholder="e.g. 3,1,2,4-6"
                onChange={(e) => setOrderInput(e.target.value)}
              />
              <p className="pdfro-hint">Enter page numbers separated by commas. Use ranges like 4-6. Example: 3,1,2 reverses first 3 pages.</p>
            </div>

            <div className="pdfro-field">
              <label className="pdfro-label">Delete Pages (optional):</label>
              <input
                className="pdfro-input"
                type="text"
                value={deleteInput}
                placeholder="e.g. 2,5,7-9"
                onChange={(e) => setDeleteInput(e.target.value)}
              />
              <p className="pdfro-hint">Page numbers to remove. These are removed after reordering.</p>
            </div>
          </div>

          {status === "done" && result && (
            <div className="pdfro-result">
              <p className="pdfro-result-label">Done — {result.pageCount} pages in output PDF</p>
              <button className="pdfro-download-btn" onClick={handleDownload}>Download Reordered PDF</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="pdfro-btn" onClick={handleProcess}>Reorder Pages</button>
          )}

          {status === "processing" && (
            <div className="pdfro-processing">
              <div className="pdfro-spinner" />
              <p>Reordering pages…</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
