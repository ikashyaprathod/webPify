"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function ImageCrop() {
  const [src, setSrc] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [drawing, setDrawing] = useState(false);
  const [startPt, setStartPt] = useState(null);
  const [imgNatural, setImgNatural] = useState({ w: 0, h: 0 });
  const [outUrl, setOutUrl] = useState(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  const loadFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return alert("Please select an image.");
    setFileName(file.name); setOutUrl(null); setCrop({ x: 0, y: 0, w: 0, h: 0 });
    const reader = new FileReader();
    reader.onload = (e) => setSrc(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!src || !overlayRef.current) return;
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      setImgNatural({ w: img.naturalWidth, h: img.naturalHeight });
      const canvas = overlayRef.current;
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      drawOverlay({ x: 0, y: 0, w: 0, h: 0 });
    };
    img.src = src;
  }, [src]);

  const drawOverlay = (c) => {
    const canvas = overlayRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (c.w > 0 && c.h > 0) {
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(c.x, c.y, c.w, c.h);
      ctx.strokeStyle = "#2b8cee"; ctx.lineWidth = 2;
      ctx.strokeRect(c.x, c.y, c.w, c.h);
      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 0.5;
      for (let i = 1; i < 3; i++) {
        ctx.beginPath(); ctx.moveTo(c.x + (c.w / 3) * i, c.y); ctx.lineTo(c.x + (c.w / 3) * i, c.y + c.h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(c.x, c.y + (c.h / 3) * i); ctx.lineTo(c.x + c.w, c.y + (c.h / 3) * i); ctx.stroke();
      }
    }
  };

  const getPos = (e) => {
    const canvas = overlayRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width, scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
  };

  const onMouseDown = (e) => {
    const pos = getPos(e); setDrawing(true); setStartPt(pos);
    const newCrop = { x: pos.x, y: pos.y, w: 0, h: 0 };
    setCrop(newCrop); drawOverlay(newCrop); setOutUrl(null);
  };
  const onMouseMove = (e) => {
    if (!drawing || !startPt) return;
    const pos = getPos(e);
    const newCrop = { x: Math.min(startPt.x, pos.x), y: Math.min(startPt.y, pos.y), w: Math.abs(pos.x - startPt.x), h: Math.abs(pos.y - startPt.y) };
    setCrop(newCrop); drawOverlay(newCrop);
  };
  const onMouseUp = () => setDrawing(false);

  const applyCrop = () => {
    if (!imgRef.current || crop.w < 2 || crop.h < 2) return alert("Draw a crop area first.");
    const canvas = canvasRef.current;
    canvas.width = Math.round(crop.w); canvas.height = Math.round(crop.h);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgRef.current, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);
    setOutUrl(canvas.toDataURL("image/png"));
  };

  const download = () => {
    if (!outUrl) return;
    const a = document.createElement("a");
    a.href = outUrl; a.download = fileName.replace(/\.[^.]+$/, "") + "_cropped.png"; a.click();
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
          <span className="ti-drop-icon">✂️</span>
          <div className="ti-drop-title">Drop an image to crop</div>
          <div className="ti-drop-sub">Draw a selection on the image to crop it</div>
          <button className="ti-drop-btn" onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}>Choose Image</button>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => loadFile(e.target.files[0])} />
        </div>
      ) : (
        <>
          <div className="ti-info-strip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Click and drag on the image to select the area you want to keep. {crop.w > 0 ? `Selection: ${Math.round(crop.w)} × ${Math.round(crop.h)} px` : "No selection yet."}
          </div>

          <div style={{ position: "relative", display: "inline-block", width: "100%", background: "#f1f5f9", borderRadius: "16px", overflow: "hidden" }}>
            <img src={src} alt="crop" style={{ display: "block", width: "100%", userSelect: "none", pointerEvents: "none" }} />
            <canvas
              ref={overlayRef}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", cursor: "crosshair" }}
              onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
              onTouchStart={onMouseDown} onTouchMove={onMouseMove} onTouchEnd={onMouseUp}
            />
          </div>

          <canvas ref={canvasRef} style={{ display: "none" }} />

          <div className="ti-action-bar">
            <button className="ti-action-btn" onClick={applyCrop} disabled={crop.w < 2}>✂️ Crop Image</button>
            {outUrl && <button className="ti-action-btn ti-action-btn--green" onClick={download}>↓ Download PNG</button>}
            <button className="ti-dl-all-btn" onClick={() => { setSrc(null); setOutUrl(null); }}>Change Image</button>
          </div>

          {outUrl && (
            <div className="ti-split">
              <div className="ti-split-panel">
                <div className="ti-split-label">Original</div>
                <div className="ti-split-body"><img src={src} alt="original" className="ti-split-img" /></div>
              </div>
              <div className="ti-split-panel">
                <div className="ti-split-label">Cropped — {Math.round(crop.w)} × {Math.round(crop.h)} px</div>
                <div className="ti-split-body"><img src={outUrl} alt="cropped" className="ti-split-img" /></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
