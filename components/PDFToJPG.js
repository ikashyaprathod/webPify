"use client";

import { useState, useRef, useCallback } from "react";

export default function PDFToJPG() {
  const [pages, setPages] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [quality, setQuality] = useState(92);
  const [scale, setScale] = useState(2);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);

  const fmt = (b) => b < 1048576 ? (b / 1024).toFixed(0) + " KB" : (b / 1048576).toFixed(1) + " MB";

  const loadPDF = useCallback(async (file) => {
    if (!file || file.type !== "application/pdf") return alert("Please select a PDF file.");
    setBusy(true);
    setPages([]);
    setFileName(file.name.replace(/\.pdf$/i, ""));
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const total = pdf.numPages;
      const rendered = [];

      for (let i = 1; i <= total; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;
        const dataUrl = canvas.toDataURL("image/jpeg", quality / 100);
        // estimate size from base64
        const byteLen = Math.round((dataUrl.length * 3) / 4);
        rendered.push({ pageNum: i, dataUrl, width: Math.round(viewport.width), height: Math.round(viewport.height), size: byteLen });
      }
      setPages(rendered);
    } catch (e) {
      console.error(e);
      alert("Failed to load PDF: " + e.message);
    }
    setBusy(false);
  }, [quality, scale]);

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) loadPDF(file);
  };

  const downloadPage = (p) => {
    const a = document.createElement("a");
    a.href = p.dataUrl;
    a.download = `${fileName}_page_${p.pageNum}.jpg`;
    a.click();
  };

  const downloadAll = async () => {
    if (!pages.length) return;
    if (pages.length === 1) { downloadPage(pages[0]); return; }
    setBusy(true);
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      for (const p of pages) {
        const b64 = p.dataUrl.split(",")[1];
        zip.file(`${fileName}_page_${p.pageNum}.jpg`, b64, { base64: true });
      }
      const blob = await zip.generateAsync({ type: "blob" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${fileName}_pages.zip`;
      a.click();
    } catch (e) {
      console.error(e);
      alert("ZIP failed: " + e.message);
    }
    setBusy(false);
  };

  const reset = () => { setPages([]); setFileName(""); };

  return (
    <div className="ti-wrap">
      <div className="ti-info-strip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Each PDF page is rendered to a high-quality JPG in your browser. No file is uploaded anywhere.
      </div>

      {!pages.length && !busy && (
        <div
          className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
          onDrop={onDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
        >
          <span className="ti-drop-icon">📑</span>
          <div className="ti-drop-title">Drop a PDF to convert to JPG</div>
          <div className="ti-drop-sub">Each page becomes a separate JPG image</div>
          <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose PDF</button>
          <input ref={inputRef} type="file" accept="application/pdf" style={{ display: "none" }} onChange={e => { if (e.target.files[0]) loadPDF(e.target.files[0]); }} />
        </div>
      )}

      {!pages.length && !busy && (
        <div className="ti-controls">
          <div className="ti-control-group">
            <span className="ti-control-label">JPG Quality — <span className="ti-control-value">{quality}%</span></span>
            <input className="ti-control-range" type="range" min="60" max="100" value={quality} onChange={e => setQuality(+e.target.value)} />
          </div>
          <div className="ti-control-group">
            <span className="ti-control-label">Resolution Scale</span>
            <select className="ti-control-select" value={scale} onChange={e => setScale(+e.target.value)}>
              <option value="1">1× — Screen (72 dpi)</option>
              <option value="2">2× — HD (144 dpi)</option>
              <option value="3">3× — Print (216 dpi)</option>
            </select>
          </div>
        </div>
      )}

      {busy && (
        <div style={{ textAlign: "center", padding: "3rem", color: "#6366f1" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚙️</div>
          <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Rendering pages…</div>
          <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "0.5rem" }}>This may take a moment for large PDFs</div>
        </div>
      )}

      {pages.length > 0 && (
        <>
          <div className="ti-pages-grid">
            {pages.map((p) => (
              <div key={p.pageNum} className="ti-page-card">
                <div className="ti-page-canvas">
                  <img src={p.dataUrl} alt={`Page ${p.pageNum}`} className="ti-preview-img" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div className="ti-page-label">
                  <span>Page {p.pageNum} · {p.width}×{p.height} · {fmt(p.size)}</span>
                  <button className="ti-file-dl" onClick={() => downloadPage(p)} title="Download this page">↓</button>
                </div>
              </div>
            ))}
          </div>

          <div className="ti-action-bar">
            <button className="ti-action-btn" onClick={downloadAll} disabled={busy}>
              {busy ? "Zipping…" : `↓ Download All (${pages.length} page${pages.length !== 1 ? "s" : ""})`}
            </button>
            <button className="ti-dl-all-btn" onClick={reset}>Convert Another PDF</button>
          </div>
        </>
      )}
    </div>
  );
}
