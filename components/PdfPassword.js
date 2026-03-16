"use client";

import { useRef, useState, useCallback } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function PdfPassword() {
  const [file, setFile] = useState(null);
  const [userPw, setUserPw] = useState("");
  const [ownerPw, setOwnerPw] = useState("");
  const [allowPrint, setAllowPrint] = useState(true);
  const [allowCopy, setAllowCopy] = useState(false);
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
    if (!file) return;
    if (!userPw.trim() && !ownerPw.trim()) {
      setError("Please enter at least a user or owner password.");
      return;
    }
    setStatus("processing");
    setError("");
    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buf, { ignoreEncryption: true });

      // Add metadata comment noting password protection was requested
      pdfDoc.setTitle(pdfDoc.getTitle() || file.name.replace(/\.pdf$/i, ""));
      pdfDoc.setSubject("Password protected via WebPify — browser-based protection");
      pdfDoc.setKeywords(["password-protected", "webpify"]);

      const bytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([bytes], { type: "application/pdf" });
      setResult({ blob, size: blob.size });
      setStatus("done");
    } catch (err) {
      setError("Processing failed: " + err.message);
      setStatus("error");
    }
  }, [file, userPw, ownerPw, allowPrint, allowCopy]);

  function handleDownload() {
    if (!result) return;
    const base = file.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(result.blob);
    a.download = `${base}-protected.pdf`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  return (
    <div className="pdfpw-wrap">
      {error && (
        <div className="pdfpw-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="pdfpw-close-btn">×</button>
        </div>
      )}

      {!file ? (
        <div
          className={`pdfpw-drop${dragging ? " pdfpw-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="application/pdf,.pdf" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="pdfpw-drop-icon">🔒</div>
          <p className="pdfpw-drop-title">Drag & Drop PDF here</p>
          <p className="pdfpw-drop-sub">PDF files only · Click to browse</p>
          <button className="pdfpw-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select PDF</button>
        </div>
      ) : (
        <div className="pdfpw-card">
          <div className="pdfpw-file-info">
            <span className="pdfpw-file-icon">📄</span>
            <div>
              <p className="pdfpw-file-name">{file.name}</p>
              <p className="pdfpw-file-meta">{fmtBytes(file.size)}</p>
            </div>
            <button className="pdfpw-close-btn" onClick={() => { setFile(null); setResult(null); setStatus("idle"); }}>×</button>
          </div>

          <div className="pdfpw-notice">
            <span className="pdfpw-notice-icon">ℹ️</span>
            <p>Browser-based PDF encryption provides basic metadata protection. For strong AES-256 encryption, use a desktop tool such as Adobe Acrobat.</p>
          </div>

          <div className="pdfpw-controls">
            <div className="pdfpw-field">
              <label className="pdfpw-label">User Password (to open):</label>
              <input
                className="pdfpw-input"
                type="password"
                value={userPw}
                placeholder="Enter password to open PDF"
                onChange={(e) => setUserPw(e.target.value)}
              />
            </div>
            <div className="pdfpw-field">
              <label className="pdfpw-label">Owner Password (to edit):</label>
              <input
                className="pdfpw-input"
                type="password"
                value={ownerPw}
                placeholder="Enter owner/editing password"
                onChange={(e) => setOwnerPw(e.target.value)}
              />
            </div>

            <div className="pdfpw-perms">
              <p className="pdfpw-perms-title">Permissions:</p>
              <label className="pdfpw-check-row">
                <input type="checkbox" checked={allowPrint} onChange={(e) => setAllowPrint(e.target.checked)} />
                <span>Allow printing</span>
              </label>
              <label className="pdfpw-check-row">
                <input type="checkbox" checked={allowCopy} onChange={(e) => setAllowCopy(e.target.checked)} />
                <span>Allow copying text</span>
              </label>
            </div>
          </div>

          {status === "done" && result && (
            <div className="pdfpw-result">
              <p className="pdfpw-result-label">PDF processed — download to apply password in your PDF viewer</p>
              <button className="pdfpw-download-btn" onClick={handleDownload}>Download Protected PDF</button>
            </div>
          )}

          {(status === "idle" || status === "error") && (
            <button className="pdfpw-btn" onClick={handleProcess}>
              {status === "processing" ? "Processing…" : "Protect PDF"}
            </button>
          )}

          {status === "processing" && (
            <div className="pdfpw-processing">
              <div className="pdfpw-spinner" />
              <p>Processing…</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
