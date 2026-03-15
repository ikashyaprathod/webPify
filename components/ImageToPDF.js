"use client";

import { useState, useRef, useCallback } from "react";

export default function ImageToPDF() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [pageSize, setPageSize] = useState("fit");
  const [orientation, setOrientation] = useState("portrait");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);

  const fmt = (b) => b < 1048576 ? (b / 1024).toFixed(0) + " KB" : (b / 1048576).toFixed(1) + " MB";

  const addFiles = useCallback((incoming) => {
    const valid = Array.from(incoming).filter(f => f.type.startsWith("image/"));
    if (!valid.length) return alert("Please select image files.");
    setFiles(prev => [...prev, ...valid.map(f => {
      const url = URL.createObjectURL(f);
      return { file: f, url };
    })]);
  }, []);

  const onDrop = (e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); };
  const removeFile = (i) => setFiles(prev => prev.filter((_, idx) => idx !== i));
  const moveUp = (i) => { if (i === 0) return; const a = [...files]; [a[i-1], a[i]] = [a[i], a[i-1]]; setFiles(a); };
  const moveDown = (i) => { if (i === files.length - 1) return; const a = [...files]; [a[i], a[i+1]] = [a[i+1], a[i]]; setFiles(a); };

  const generate = async () => {
    if (!files.length) return;
    setBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      let doc = null;
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const img = new Image();
        await new Promise(res => { img.onload = res; img.src = f.url; });
        const iw = img.naturalWidth, ih = img.naturalHeight;
        let pw, ph;
        if (pageSize === "fit") { pw = iw * 0.2646; ph = ih * 0.2646; } // px to mm
        else if (pageSize === "a4") { pw = 210; ph = 297; }
        else { pw = 215.9; ph = 279.4; }
        const ori = orientation === "auto" ? (iw > ih ? "landscape" : "portrait") : orientation;
        const [dw, dh] = ori === "landscape" ? [Math.max(pw, ph), Math.min(pw, ph)] : [Math.min(pw, ph), Math.max(pw, ph)];
        if (!doc) {
          doc = new jsPDF({ orientation: ori, unit: "mm", format: pageSize === "fit" ? [dw, dh] : pageSize });
        } else {
          doc.addPage(pageSize === "fit" ? [dw, dh] : pageSize, ori);
        }
        // Scale image to fill page
        const ratio = Math.min(dw / iw * (1 / 0.2646), dh / ih * (1 / 0.2646));
        const fw = iw * 0.2646 * ratio, fh = ih * 0.2646 * ratio;
        const x = (dw - fw) / 2, y = (dh - fh) / 2;
        const ext = f.file.type === "image/png" ? "PNG" : "JPEG";
        doc.addImage(f.url, ext, x, y, fw, fh);
      }
      doc.save(files.length === 1 ? files[0].file.name.replace(/\.[^.]+$/, "") + ".pdf" : "images.pdf");
    } catch(e) { console.error(e); alert("PDF generation failed: " + e.message); }
    setBusy(false);
  };

  return (
    <div className="ti-wrap">
      <div className="ti-info-strip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Add multiple images — they'll be combined into a single PDF in the order shown. Drag to reorder.
      </div>

      <div
        className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
        onDrop={onDrop} onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)} onClick={() => inputRef.current?.click()}
      >
        <span className="ti-drop-icon">📄</span>
        <div className="ti-drop-title">Drop images to convert to PDF</div>
        <div className="ti-drop-sub">PNG, JPEG, WebP — add as many as you want</div>
        <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Add Images</button>
        <input ref={inputRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => addFiles(e.target.files)} />
      </div>

      {files.length > 0 && (
        <>
          <div className="ti-controls">
            <div className="ti-control-group">
              <span className="ti-control-label">Page Size</span>
              <select className="ti-control-select" value={pageSize} onChange={e => setPageSize(e.target.value)}>
                <option value="fit">Fit to Image</option>
                <option value="a4">A4 (210×297mm)</option>
                <option value="letter">Letter (8.5×11in)</option>
              </select>
            </div>
            <div className="ti-control-group">
              <span className="ti-control-label">Orientation</span>
              <select className="ti-control-select" value={orientation} onChange={e => setOrientation(e.target.value)}>
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
                <option value="auto">Auto (per image)</option>
              </select>
            </div>
          </div>

          <div className="ti-file-list">
            {files.map((f, i) => (
              <div key={i} className="ti-file-item">
                <img src={f.url} alt="" className="ti-file-thumb" />
                <div className="ti-file-info">
                  <div className="ti-file-name">{f.file.name}</div>
                  <div className="ti-file-meta">{fmt(f.file.size)} · Page {i + 1}</div>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <button className="ti-rotate-btn" style={{ padding: "4px 8px", fontSize: "0.75rem" }} onClick={() => moveUp(i)} disabled={i === 0}>↑</button>
                  <button className="ti-rotate-btn" style={{ padding: "4px 8px", fontSize: "0.75rem" }} onClick={() => moveDown(i)} disabled={i === files.length - 1}>↓</button>
                </div>
                <button className="ti-file-del" onClick={() => removeFile(i)}>✕</button>
              </div>
            ))}
          </div>

          <div className="ti-action-bar">
            <button className="ti-action-btn" onClick={generate} disabled={busy}>
              {busy ? "Generating…" : `📄 Create PDF (${files.length} image${files.length !== 1 ? "s" : ""})`}
            </button>
            <span className="ti-count-badge">{files.length} image{files.length !== 1 ? "s" : ""}</span>
          </div>
        </>
      )}
    </div>
  );
}
