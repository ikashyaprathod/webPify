"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function PdfMerger() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  async function loadPdfInfo(file) {
    const { PDFDocument } = await import("pdf-lib");
    const buf = await file.arrayBuffer();
    const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
    return { file, pageCount: doc.getPageCount() };
  }

  async function handleFiles(fileList) {
    setError("");
    const pdfs = Array.from(fileList).filter(f => f.type === "application/pdf");
    if (pdfs.length === 0) { setError("Please upload PDF files only."); return; }
    if (files.length + pdfs.length > 10) { setError("Maximum 10 files allowed."); return; }
    const infos = await Promise.all(pdfs.map(loadPdfInfo));
    setFiles(prev => [...prev, ...infos]);
  }

  function moveUp(i) {
    if (i === 0) return;
    setFiles(prev => { const a = [...prev]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; });
  }

  function moveDown(i) {
    setFiles(prev => { if (i >= prev.length - 1) return prev; const a = [...prev]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; });
  }

  function removeFile(i) {
    setFiles(prev => prev.filter((_, idx) => idx !== i));
  }

  async function handleMerge() {
    if (files.length < 2) { setError("Add at least 2 PDF files to merge."); return; }
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const merged = await PDFDocument.create();
      for (const info of files) {
        const buf = await info.file.arrayBuffer();
        const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const bytes = await merged.save({ useObjectStreams: true });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult(blob);
      setStatus("done");
    } catch (err) {
      setError("Merge failed: " + err.message);
      setStatus("error");
    }
  }

  function handleDownload() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result);
    a.download = "merged.pdf";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const totalPages = files.reduce((s, f) => s + f.pageCount, 0);

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
        onClick={() => document.getElementById("pdf-merge-input").click()}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
      >
        <input id="pdf-merge-input" type="file" accept="application/pdf" multiple style={{ display: "none" }} onChange={(e) => handleFiles(e.target.files)} />
        <div className="pdfpg-drop-icon">📑</div>
        <p className="pdfpg-drop-title">{files.length ? "Add More PDFs" : "Drag & Drop PDFs here"}</p>
        <p className="pdfpg-drop-sub">Up to 10 files · Click to browse</p>
      </div>

      {files.length > 0 && (
        <div className="pdfpg-file-card">
          {totalPages > 0 && <p className="pdfpg-page-count">Total: {files.length} files · {totalPages} pages</p>}
          <div className="pdfpg-list">
            {files.map((info, i) => (
              <div key={i} className="pdfpg-list-item">
                <div>
                  <p className="pdfpg-list-name">{info.file.name}</p>
                  <p className="pdfpg-list-meta">{info.pageCount} pages · {fmtBytes(info.file.size)}</p>
                </div>
                <div className="pdfpg-list-actions">
                  <button className="pdfpg-icon-btn" onClick={() => moveUp(i)} disabled={i === 0}>↑</button>
                  <button className="pdfpg-icon-btn" onClick={() => moveDown(i)} disabled={i === files.length - 1}>↓</button>
                  <button className="pdfpg-icon-btn" onClick={() => removeFile(i)}>×</button>
                </div>
              </div>
            ))}
          </div>

          {status !== "done" && (
            <button className="pdfpg-btn" onClick={handleMerge} disabled={status === "processing" || files.length < 2}>
              {status === "processing" ? "Merging…" : `Merge ${files.length} PDFs`}
            </button>
          )}

          {status === "done" && result && (
            <div className="pdfpg-result">
              <p className="pdfpg-saving">Merged successfully — {totalPages} pages in one PDF</p>
              <button className="pdfpg-btn" style={{ marginTop: "1rem" }} onClick={handleDownload}>Download Merged PDF</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
