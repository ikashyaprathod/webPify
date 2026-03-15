"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const POSITIONS = [
  "top-left","top-center","top-right",
  "middle-left","center","middle-right",
  "bottom-left","bottom-center","bottom-right",
];

export default function ImageWatermark() {
  const [src, setSrc] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [text, setText] = useState("© webpifyy.com");
  const [fontSize, setFontSize] = useState(36);
  const [opacity, setOpacity] = useState(70);
  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState("bottom-right");
  const [outUrl, setOutUrl] = useState(null);
  const inputRef = useRef(null);
  const imgRef = useRef(null);

  const loadFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return alert("Please select an image.");
    setFileName(file.name); setOutUrl(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      setSrc(e.target.result);
      const img = new Image();
      img.onload = () => { imgRef.current = img; renderWatermark(img, text, fontSize, opacity, color, position); };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }, [text, fontSize, opacity, color, position]);

  const renderWatermark = (img, t, fs, op, col, pos) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.font = `bold ${fs}px Arial, sans-serif`;
    ctx.fillStyle = col;
    ctx.globalAlpha = op / 100;
    const pad = Math.max(16, fs * 0.5);
    const metrics = ctx.measureText(t);
    const tw = metrics.width, th = fs;
    let x, y;
    const [vert, horiz] = pos === "center" ? ["middle", "center"] : pos.split("-");
    if (horiz === "left") x = pad;
    else if (horiz === "center" || pos === "center") x = (canvas.width - tw) / 2;
    else x = canvas.width - tw - pad;
    if (vert === "top") y = pad + th;
    else if (vert === "middle") y = (canvas.height + th) / 2;
    else y = canvas.height - pad;
    ctx.fillText(t, x, y);
    setOutUrl(canvas.toDataURL("image/jpeg", 0.92));
  };

  useEffect(() => {
    if (imgRef.current) renderWatermark(imgRef.current, text, fontSize, opacity, color, position);
  }, [text, fontSize, opacity, color, position]);

  const download = () => {
    if (!outUrl) return;
    const a = document.createElement("a");
    a.href = outUrl; a.download = fileName.replace(/\.[^.]+$/, "") + "_watermarked.jpg"; a.click();
  };

  return (
    <div className="ti-wrap">
      {!src ? (
        <div
          className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
          onDrop={(e) => { e.preventDefault(); setDragging(false); loadFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
        >
          <span className="ti-drop-icon">💧</span>
          <div className="ti-drop-title">Drop an image to add a watermark</div>
          <div className="ti-drop-sub">PNG, JPEG, WebP supported</div>
          <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose Image</button>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => loadFile(e.target.files[0])} />
        </div>
      ) : (
        <>
          <div className="ti-controls">
            <div className="ti-control-group" style={{ minWidth: "200px", flex: 2 }}>
              <span className="ti-control-label">Watermark Text</span>
              <input className="ti-control-input" type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Your watermark text" />
            </div>
            <div className="ti-control-group">
              <span className="ti-control-label">Color</span>
              <input className="ti-control-input" type="color" value={color} onChange={e => setColor(e.target.value)} style={{ padding: "0.2rem", height: "38px", cursor: "pointer" }} />
            </div>
            <div className="ti-control-group">
              <span className="ti-control-label">Font Size — <span className="ti-control-value">{fontSize}px</span></span>
              <input className="ti-control-range" type="range" min="12" max="120" value={fontSize} onChange={e => setFontSize(+e.target.value)} />
            </div>
            <div className="ti-control-group">
              <span className="ti-control-label">Opacity — <span className="ti-control-value">{opacity}%</span></span>
              <input className="ti-control-range" type="range" min="5" max="100" value={opacity} onChange={e => setOpacity(+e.target.value)} />
            </div>
            <div className="ti-control-group">
              <span className="ti-control-label">Position</span>
              <select className="ti-control-select" value={position} onChange={e => setPosition(e.target.value)}>
                {POSITIONS.map(p => <option key={p} value={p}>{p.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</option>)}
              </select>
            </div>
          </div>

          {outUrl && (
            <div style={{ background: "#f1f5f9", borderRadius: "16px", overflow: "hidden", textAlign: "center" }}>
              <img src={outUrl} alt="watermarked preview" style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain", display: "block", margin: "0 auto" }} />
            </div>
          )}

          <div className="ti-action-bar">
            <button className="ti-action-btn ti-action-btn--green" onClick={download} disabled={!outUrl}>↓ Download Image</button>
            <button className="ti-dl-all-btn" onClick={() => { setSrc(null); imgRef.current = null; setOutUrl(null); }}>Change Image</button>
          </div>
        </>
      )}
    </div>
  );
}
