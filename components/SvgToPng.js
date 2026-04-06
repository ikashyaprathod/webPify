"use client";
import { useState, useRef } from "react";

function fmtBytes(b) {
  if (!b) return "0 B";
  const k = 1024, sz = ["B","KB","MB"];
  const i = Math.floor(Math.log(b)/Math.log(k));
  return (b/Math.pow(k,i)).toFixed(1)+" "+sz[i];
}

export default function SvgToPng() {
  const [svgCode, setSvgCode] = useState("");
  const [scale, setScale] = useState(2);
  const [format, setFormat] = useState("png");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  function handleFile(f) {
    if (!f) return;
    if (!f.name.endsWith(".svg") && f.type !== "image/svg+xml") { setError("Please upload an SVG file."); return; }
    const reader = new FileReader();
    reader.onload = e => { setSvgCode(e.target.result); setError(""); setResult(null); };
    reader.readAsText(f);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }

  async function convert() {
    setError("");
    if (!svgCode.trim()) { setError("Upload an SVG file first."); return; }
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgCode, "image/svg+xml");
      if (doc.querySelector("parsererror")) throw new Error("Invalid SVG");
      const svgEl = doc.querySelector("svg");
      const baseW = parseFloat(svgEl?.getAttribute("width") || svgEl?.viewBox?.baseVal?.width || 300);
      const baseH = parseFloat(svgEl?.getAttribute("height") || svgEl?.viewBox?.baseVal?.height || 200);
      const w = Math.round(baseW * scale);
      const h = Math.round(baseH * scale);

      const blob = new Blob([svgCode], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.width = w; img.height = h;
      await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);

      const mime = format === "jpeg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png";
      const dataUrl = canvas.toDataURL(mime, 0.95);
      const res2 = await fetch(dataUrl);
      const outBlob = await res2.blob();
      setResult({ url: dataUrl, w, h, size: outBlob.size });
    } catch (e) {
      setError("Conversion failed: " + e.message);
    }
  }

  function download() {
    const a = document.createElement("a");
    a.href = result.url;
    a.download = `converted.${format}`;
    a.click();
  }

  return (
    <div className="svgpng-wrap">
      <div
        className={`svgpng-drop${dragging?" svgpng-drop--active":""}`}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".svg,image/svg+xml" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="svgpng-drop-icon">◈</div>
        <p className="svgpng-drop-title">{svgCode ? "SVG loaded — ready to convert" : "Drop SVG file or click to upload"}</p>
      </div>

      <div className="svgpng-controls">
        <div className="svgpng-ctrl-group">
          <span className="svgpng-ctrl-label">Scale:</span>
          {[1,2,3,4].map(s => (
            <button key={s} className={`svgpng-scale-btn${scale===s?" svgpng-scale-btn--on":""}`} onClick={() => setScale(s)}>{s}×</button>
          ))}
        </div>
        <div className="svgpng-ctrl-group">
          <span className="svgpng-ctrl-label">Format:</span>
          {[["png","PNG"],["jpeg","JPEG"],["webp","WebP"]].map(([v,l]) => (
            <button key={v} className={`svgpng-fmt-btn${format===v?" svgpng-fmt-btn--on":""}`} onClick={() => setFormat(v)}>{l}</button>
          ))}
        </div>
        <button className="svgpng-btn" onClick={convert} disabled={!svgCode}>Convert to {format.toUpperCase()}</button>
      </div>

      {error && <p className="svgpng-error">{error}</p>}

      {result && (
        <div className="svgpng-result">
          <div className="svgpng-result-info">
            <span>{result.w} × {result.h}px</span>
            <span>{fmtBytes(result.size)}</span>
            <button className="svgpng-dl-btn" onClick={download}>Download {format.toUpperCase()}</button>
          </div>
          <img src={result.url} alt="Converted" className="svgpng-preview" style={{maxWidth:"100%",borderRadius:"1rem"}} />
        </div>
      )}
    </div>
  );
}
