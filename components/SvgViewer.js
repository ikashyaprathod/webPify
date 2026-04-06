"use client";
import { useState, useRef } from "react";

export default function SvgViewer() {
  const [svgCode, setSvgCode] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");
  const [bg, setBg] = useState("checker"); // checker | white | dark
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  function parseSvg(code) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, "image/svg+xml");
    const err = doc.querySelector("parsererror");
    if (err) return { valid: false, error: "Invalid SVG: " + err.textContent.split("\n")[0] };
    const svg = doc.querySelector("svg");
    return {
      valid: true,
      width: svg?.getAttribute("width") || "auto",
      height: svg?.getAttribute("height") || "auto",
      viewBox: svg?.getAttribute("viewBox") || "none",
      elements: doc.querySelectorAll("*").length,
    };
  }

  function handleCode(code) {
    setSvgCode(code);
    setError("");
    if (!code.trim()) { setInfo(null); return; }
    const result = parseSvg(code);
    if (!result.valid) { setError(result.error); setInfo(null); }
    else setInfo(result);
  }

  function handleFile(f) {
    if (!f) return;
    if (!f.name.endsWith(".svg") && f.type !== "image/svg+xml") { setError("Please upload an SVG file."); return; }
    const reader = new FileReader();
    reader.onload = e => handleCode(e.target.result);
    reader.readAsText(f);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }

  const bgStyle = bg === "checker"
    ? { backgroundImage: "linear-gradient(45deg,#e2e8f0 25%,transparent 25%),linear-gradient(-45deg,#e2e8f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e2e8f0 75%),linear-gradient(-45deg,transparent 75%,#e2e8f0 75%)", backgroundSize: "20px 20px", backgroundPosition: "0 0,0 10px,10px -10px,-10px 0px" }
    : bg === "dark" ? { background: "#1e293b" } : { background: "#fff" };

  return (
    <div className="svgview-wrap">
      <div
        className={`svgview-drop${dragging?" svgview-drop--active":""}`}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => fileRef.current.click()}
      >
        <input ref={fileRef} type="file" accept=".svg,image/svg+xml" style={{display:"none"}} onChange={e => handleFile(e.target.files[0])} />
        <div className="svgview-drop-icon">◈</div>
        <p className="svgview-drop-title">Drop SVG file or click to upload</p>
        <p className="svgview-drop-sub">Or paste SVG code below</p>
      </div>

      <textarea className="svgview-code-input" rows={6} placeholder="Or paste SVG code here..." value={svgCode} onChange={e => handleCode(e.target.value)} spellCheck={false} />

      {error && <p className="svgview-error">{error}</p>}

      {info && (
        <div className="svgview-info">
          {[["Width", info.width],["Height", info.height],["ViewBox", info.viewBox],["Elements", info.elements]].map(([k,v]) => (
            <span key={k} className="svgview-info-chip"><strong>{k}:</strong> {v}</span>
          ))}
        </div>
      )}

      {svgCode && !error && (
        <>
          <div className="svgview-bg-row">
            <span className="svgview-bg-label">Background:</span>
            {[["checker","Checker"],["white","White"],["dark","Dark"]].map(([v,l]) => (
              <button key={v} className={`svgview-bg-btn${bg===v?" svgview-bg-btn--on":""}`} onClick={() => setBg(v)}>{l}</button>
            ))}
          </div>
          <div className="svgview-preview" style={bgStyle} dangerouslySetInnerHTML={{__html: svgCode}} />
        </>
      )}
    </div>
  );
}
