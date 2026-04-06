"use client";
import { useState, useRef, useEffect } from "react";

export default function ImagePlaceholder() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [bg, setBg] = useState("#cccccc");
  const [textColor, setTextColor] = useState("#666666");
  const [label, setLabel] = useState("");
  const [format, setFormat] = useState("png");
  const canvasRef = useRef(null);

  function getLabel() {
    return label.trim() || `${width} × ${height}`;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
    const fs = Math.max(14, Math.min(Math.floor(Math.min(width, height) / 6), 48));
    ctx.font = `bold ${fs}px system-ui, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(getLabel(), width / 2, height / 2);
  }, [width, height, bg, textColor, label]);

  function download() {
    const canvas = canvasRef.current;
    const a = document.createElement("a");
    a.href = canvas.toDataURL(`image/${format}`);
    a.download = `placeholder-${width}x${height}.${format}`;
    a.click();
  }

  const presets = [[640,480],[800,600],[1280,720],[1920,1080],[400,300],[300,300]];

  return (
    <div className="imgph-wrap">
      <div className="imgph-controls">
        <div className="imgph-size-row">
          <label className="imgph-label">Width</label>
          <input className="imgph-num" type="number" min={1} max={4000} value={width} onChange={e => setWidth(Math.max(1,Math.min(4000,+e.target.value)))} />
          <span className="imgph-x">×</span>
          <label className="imgph-label">Height</label>
          <input className="imgph-num" type="number" min={1} max={4000} value={height} onChange={e => setHeight(Math.max(1,Math.min(4000,+e.target.value)))} />
          <span className="imgph-label">px</span>
        </div>

        <div className="imgph-presets">
          {presets.map(([w,h]) => (
            <button key={`${w}x${h}`} className="imgph-preset-btn" onClick={() => { setWidth(w); setHeight(h); }}>{w}×{h}</button>
          ))}
        </div>

        <div className="imgph-color-row">
          <label className="imgph-label">Background</label>
          <input type="color" className="imgph-color-pick" value={bg} onChange={e => setBg(e.target.value)} />
          <input className="imgph-hex-in" value={bg} onChange={e => /^#[0-9a-fA-F]{0,6}$/.test(e.target.value) && setBg(e.target.value)} maxLength={7} />
          <label className="imgph-label">Text</label>
          <input type="color" className="imgph-color-pick" value={textColor} onChange={e => setTextColor(e.target.value)} />
        </div>

        <div className="imgph-text-row">
          <label className="imgph-label">Label text</label>
          <input className="imgph-text-in" placeholder={`${width} × ${height}`} value={label} onChange={e => setLabel(e.target.value)} />
          <select className="imgph-fmt-sel" value={format} onChange={e => setFormat(e.target.value)}>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WebP</option>
          </select>
        </div>
      </div>

      <div className="imgph-preview-wrap">
        <canvas ref={canvasRef} className="imgph-canvas" style={{maxWidth:"100%",height:"auto"}} />
      </div>

      <button className="imgph-dl-btn" onClick={download}>Download {format.toUpperCase()}</button>
    </div>
  );
}
