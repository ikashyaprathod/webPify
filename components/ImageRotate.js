"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function ImageRotate() {
  const [src, setSrc] = useState(null);
  const [fileName, setFileName] = useState("");
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [outUrl, setOutUrl] = useState(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const loadFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return alert("Please select an image.");
    setFileName(file.name);
    setRotation(0); setFlipH(false); setFlipV(false); setOutUrl(null);
    const reader = new FileReader();
    reader.onload = (e) => setSrc(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      renderCanvas(img, rotation, flipH, flipV);
    };
    img.src = src;
  }, [src]);

  const renderCanvas = (img, rot, fH, fV) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const rad = rot * Math.PI / 180;
    const cos = Math.abs(Math.cos(rad)), sin = Math.abs(Math.sin(rad));
    const w = Math.round(img.width * cos + img.height * sin);
    const h = Math.round(img.width * sin + img.height * cos);
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(rad);
    ctx.scale(fH ? -1 : 1, fV ? -1 : 1);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
    setOutUrl(canvas.toDataURL("image/png"));
  };

  const apply = (rot, fH, fV) => {
    setRotation(rot); setFlipH(fH); setFlipV(fV);
    if (imgRef.current) renderCanvas(imgRef.current, rot, fH, fV);
  };

  const download = () => {
    if (!outUrl) return;
    const a = document.createElement("a");
    a.href = outUrl;
    a.download = fileName.replace(/\.[^.]+$/, "") + "_rotated.png";
    a.click();
  };

  return (
    <div className="ti-wrap">
      <div
        className={`ti-drop${dragging ? " ti-drop--active" : ""}`}
        onDrop={(e) => { e.preventDefault(); setDragging(false); loadFile(e.dataTransfer.files[0]); }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => inputRef.current?.click()}
      >
        <span className="ti-drop-icon">🔄</span>
        <div className="ti-drop-title">Drop an image to rotate or flip</div>
        <div className="ti-drop-sub">PNG, JPEG, WebP, GIF supported</div>
        <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose Image</button>
        <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => loadFile(e.target.files[0])} />
      </div>

      {src && (
        <>
          <div className="ti-controls">
            <div className="ti-control-group" style={{ minWidth: "100%" }}>
              <span className="ti-control-label">Rotate</span>
              <div className="ti-rotate-btns">
                {[["↺ 90° Left", -90], ["↻ 90° Right", 90], ["↕ 180°", 180]].map(([label, delta]) => (
                  <button key={label} className="ti-rotate-btn" onClick={() => apply((rotation + delta + 360) % 360, flipH, flipV)}>{label}</button>
                ))}
              </div>
            </div>
            <div className="ti-control-group" style={{ minWidth: "100%" }}>
              <span className="ti-control-label">Flip</span>
              <div className="ti-rotate-btns">
                <button className={`ti-rotate-btn${flipH ? " ti-rotate-btn--active" : ""}`} onClick={() => apply(rotation, !flipH, flipV)}>↔ Flip Horizontal</button>
                <button className={`ti-rotate-btn${flipV ? " ti-rotate-btn--active" : ""}`} onClick={() => apply(rotation, flipH, !flipV)}>↕ Flip Vertical</button>
                <button className="ti-rotate-btn" onClick={() => apply(0, false, false)}>↺ Reset</button>
              </div>
            </div>
          </div>

          <div className="ti-split">
            <div className="ti-split-panel">
              <div className="ti-split-label">Original</div>
              <div className="ti-split-body">
                <img src={src} alt="original" className="ti-split-img" />
              </div>
            </div>
            <div className="ti-split-panel">
              <div className="ti-split-label">Preview — {rotation}° {flipH ? "· Flip H" : ""}{flipV ? "· Flip V" : ""}</div>
              <div className="ti-split-body">
                <canvas ref={canvasRef} className="ti-split-img" />
              </div>
            </div>
          </div>

          <div className="ti-action-bar">
            <button className="ti-action-btn ti-action-btn--green" onClick={download} disabled={!outUrl}>↓ Download PNG</button>
          </div>
        </>
      )}
    </div>
  );
}
