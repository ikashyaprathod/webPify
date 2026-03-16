"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const TOOLS = ["select","rectangle","text"];

export default function ScreenshotCapture() {
  const canvasRef = useRef(null);
  const [hasImage, setHasImage] = useState(false);
  const [activeTool, setActiveTool] = useState("select");
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({x:0,y:0});
  const [copied, setCopied] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);
  const [textPos, setTextPos] = useState({x:0,y:0});
  const originalImageRef = useRef(null);
  const dragStartRef = useRef(null);

  const loadImageToCanvas = useCallback((file) => {
    if(!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        originalImageRef.current = img;
        const canvas = canvasRef.current;
        canvas.width = Math.min(img.width, 1200);
        canvas.height = Math.round(img.height * (canvas.width/img.width));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setHasImage(true);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    const onPaste = (e) => {
      const items = e.clipboardData?.items;
      if(!items) return;
      for(const item of items){
        if(item.type.startsWith("image/")){
          const file = item.getAsFile();
          loadImageToCanvas(file);
          return;
        }
      }
    };
    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
  }, [loadImageToCanvas]);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    loadImageToCanvas(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width/rect.width),
      y: (e.clientY - rect.top) * (canvas.height/rect.height)
    };
  };

  const onMouseDown = (e) => {
    const pos = getPos(e);
    setIsDrawing(true);
    setStartPos(pos);
    dragStartRef.current = pos;

    if(activeTool==="text"){
      setTextPos(pos);
      setShowTextInput(true);
      setIsDrawing(false);
    }
  };

  const onMouseUp = (e) => {
    if(!isDrawing) return;
    setIsDrawing(false);
    const pos = getPos(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if(activeTool==="rectangle"){
      const dx = pos.x - startPos.x;
      const dy = pos.y - startPos.y;
      ctx.strokeStyle = "#ef4444";
      ctx.lineWidth = 3;
      ctx.strokeRect(startPos.x, startPos.y, dx, dy);
    }
  };

  const addText = () => {
    if(!textInput.trim()) { setShowTextInput(false); return; }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ef4444";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(textInput, textPos.x, textPos.y);
    setTextInput("");
    setShowTextInput(false);
  };

  const downloadAs = (format) => {
    const canvas = canvasRef.current;
    const a = document.createElement("a");
    a.href = canvas.toDataURL(format==="jpg"?"image/jpeg":"image/png", 0.92);
    a.download = `screenshot.${format}`;
    a.click();
  };

  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    canvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([new ClipboardItem({"image/png": blob})]);
        setCopied(true);
        setTimeout(()=>setCopied(false),1500);
      } catch(e) { alert("Clipboard write failed. Try downloading instead."); }
    });
  };

  return (
    <div className="scap-wrap">
      {!hasImage && (
        <div className="scap-drop" onDrop={handleDrop} onDragOver={handleDragOver}>
          <div className="scap-drop-icon">📋</div>
          <p className="scap-drop-text">
            <strong>Paste</strong> a screenshot (Ctrl+V) or <strong>drag & drop</strong> an image here
          </p>
          <label className="scap-file-label">
            Or browse file
            <input type="file" accept="image/*" style={{display:"none"}}
              onChange={e=>loadImageToCanvas(e.target.files[0])} />
          </label>
        </div>
      )}

      {hasImage && (
        <>
          <div className="scap-toolbar">
            {TOOLS.map(t=>(
              <button key={t} onClick={()=>setActiveTool(t)}
                className={`scap-tool-btn${activeTool===t?" scap-tool-btn--active":""}`}>
                {t==="select"?"↖ Select":t==="rectangle"?"□ Rectangle":"T Text"}
              </button>
            ))}
            <button className="scap-tool-btn scap-tool-btn--reset"
              onClick={()=>{
                setHasImage(false);
                setShowTextInput(false);
                originalImageRef.current=null;
              }}>
              ✕ Clear
            </button>
          </div>

          <div className="scap-canvas-wrap">
            <canvas ref={canvasRef} className="scap-canvas"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp} />
            {showTextInput && (
              <div className="scap-text-overlay">
                <input className="scap-text-overlay-input" value={textInput}
                  onChange={e=>setTextInput(e.target.value)}
                  placeholder="Type text here..."
                  autoFocus
                  onKeyDown={e=>{ if(e.key==="Enter") addText(); if(e.key==="Escape"){ setShowTextInput(false); setTextInput(""); } }}
                />
                <button className="scap-tool-btn" onClick={addText}>Add</button>
              </div>
            )}
          </div>

          <div className="scap-actions">
            <button className="scap-download-btn" onClick={()=>downloadAs("png")}>⬇ Download PNG</button>
            <button className="scap-download-btn scap-download-btn--jpg" onClick={()=>downloadAs("jpg")}>⬇ Download JPG</button>
            <button className="scap-copy-btn" onClick={copyToClipboard}>{copied?"✓ Copied!":"📋 Copy to Clipboard"}</button>
          </div>
        </>
      )}
    </div>
  );
}
