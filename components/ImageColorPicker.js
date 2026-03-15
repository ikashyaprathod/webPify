"use client";

import { useRef, useState } from "react";

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      default: h = ((r - g) / d + 4) / 6;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function toHex(r, g, b) {
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
}

export default function ImageColorPicker() {
  const [imageUrl, setImageUrl] = useState(null);
  const [picked, setPicked] = useState(null);
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) return;
    const url = URL.createObjectURL(f);
    setImageUrl(url);
    setPicked(null);
  }

  function handleCanvasClick(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    const ctx = canvas.getContext("2d");
    const px = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b] = [px[0], px[1], px[2]];
    const hex = toHex(r, g, b);
    const [h, s, l] = rgbToHsl(r, g, b);
    const color = { hex, rgb: `rgb(${r}, ${g}, ${b})`, hsl: `hsl(${h}, ${s}%, ${l}%)` };
    setPicked(color);
    setHistory(prev => [color, ...prev].slice(0, 8));
  }

  function handleImageLoad(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = e.target.naturalWidth;
    canvas.height = e.target.naturalHeight;
    canvas.getContext("2d").drawImage(e.target, 0, 0);
  }

  async function handleCopy() {
    if (!picked) return;
    try {
      await navigator.clipboard.writeText(picked.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  }

  return (
    <div className="cpick-wrap">
      {!imageUrl ? (
        <div
          className={`cpick-drop${dragging ? " cpick-drop--active" : ""}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
        >
          <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
          <div className="cpick-drop-icon">🎨</div>
          <p className="cpick-drop-title">Drag & Drop Image here</p>
          <p className="cpick-drop-sub">JPG · PNG · WebP · Click to browse</p>
          <button className="cpick-btn" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Image</button>
        </div>
      ) : (
        <div className="cpick-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <p className="cpick-hint">Click anywhere on the image to pick a color</p>
            <button className="cpick-close-btn" onClick={() => { setImageUrl(null); setPicked(null); setHistory([]); }}>× New Image</button>
          </div>

          <div style={{ position: "relative", cursor: "crosshair" }}>
            <img
              src={imageUrl}
              alt="Pick color"
              style={{ display: "none" }}
              onLoad={handleImageLoad}
            />
            <canvas
              ref={canvasRef}
              onClick={handleCanvasClick}
              style={{ width: "100%", maxHeight: 400, objectFit: "contain", borderRadius: 10, border: "1px solid #e2e8f0", cursor: "crosshair", display: "block" }}
            />
          </div>

          {picked && (
            <div className="cpick-result">
              <div className="cpick-swatch" style={{ background: picked.hex, width: 56, height: 56, borderRadius: 10, border: "2px solid #e2e8f0", flexShrink: 0 }} />
              <div className="cpick-values">
                <p className="cpick-hex">{picked.hex}</p>
                <p className="cpick-rgb">{picked.rgb}</p>
                <p className="cpick-hsl">{picked.hsl}</p>
              </div>
              <button className="cpick-btn" onClick={handleCopy}>{copied ? "Copied!" : "Copy HEX"}</button>
            </div>
          )}

          {history.length > 0 && (
            <div className="cpick-history">
              <p className="cpick-history-label">Recent Colors</p>
              <div className="cpick-history-swatches">
                {history.map((c, i) => (
                  <div
                    key={i}
                    className="cpick-history-swatch"
                    style={{ background: c.hex, width: 32, height: 32, borderRadius: 6, border: "2px solid #e2e8f0", cursor: "pointer" }}
                    title={c.hex}
                    onClick={() => setPicked(c)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
