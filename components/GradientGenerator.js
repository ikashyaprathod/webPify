"use client";
import { useState, useCallback, useRef, useEffect } from "react";

const PRESETS = [
  { stops: [{color:"#6366f1",pos:0},{color:"#8b5cf6",pos:100}], type:"linear", angle:135 },
  { stops: [{color:"#f59e0b",pos:0},{color:"#ef4444",pos:100}], type:"linear", angle:135 },
  { stops: [{color:"#10b981",pos:0},{color:"#06b6d4",pos:100}], type:"linear", angle:135 },
  { stops: [{color:"#ec4899",pos:0},{color:"#8b5cf6",pos:50},{color:"#6366f1",pos:100}], type:"linear", angle:90 },
  { stops: [{color:"#fbbf24",pos:0},{color:"#f59e0b",pos:50},{color:"#d97706",pos:100}], type:"radial", angle:90 },
  { stops: [{color:"#111827",pos:0},{color:"#374151",pos:50},{color:"#6b7280",pos:100}], type:"linear", angle:180 },
];

function buildGradientCSS(stops, type, angle) {
  const stopsStr = stops.map(s=>`${s.color} ${s.pos}%`).join(", ");
  if(type==="linear") return `linear-gradient(${angle}deg, ${stopsStr})`;
  if(type==="radial") return `radial-gradient(circle, ${stopsStr})`;
  if(type==="conic") return `conic-gradient(from ${angle}deg, ${stopsStr})`;
  return `linear-gradient(${angle}deg, ${stopsStr})`;
}

export default function GradientGenerator() {
  const [stops, setStops] = useState([
    {color:"#6366f1",pos:0},
    {color:"#8b5cf6",pos:100}
  ]);
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  const gradientCSS = buildGradientCSS(stops, type, angle);
  const fullCSS = `background: ${gradientCSS};`;

  const addStop = () => {
    const pos = Math.round((stops[0].pos + stops[stops.length-1].pos) / 2);
    setStops([...stops, {color:"#a78bfa", pos}].sort((a,b)=>a.pos-b.pos));
  };

  const removeStop = (idx) => {
    if(stops.length<=2) return;
    setStops(stops.filter((_,i)=>i!==idx));
  };

  const updateStop = (idx, key, val) => {
    const newStops = stops.map((s,i)=>i===idx?{...s,[key]:val}:s);
    setStops(key==="pos"?newStops.sort((a,b)=>a.pos-b.pos):newStops);
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(fullCSS);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  const downloadPNG = () => {
    const canvas = document.createElement("canvas");
    canvas.width=800; canvas.height=400;
    const ctx = canvas.getContext("2d");
    let grad;
    if(type==="linear") {
      const rad = (angle-90)*Math.PI/180;
      grad = ctx.createLinearGradient(
        400+Math.cos(rad)*400, 200+Math.sin(rad)*200,
        400-Math.cos(rad)*400, 200-Math.sin(rad)*200
      );
    } else if(type==="radial") {
      grad = ctx.createRadialGradient(400,200,0,400,200,400);
    } else {
      grad = ctx.createLinearGradient(0,0,800,0);
    }
    stops.forEach(s=>grad.addColorStop(s.pos/100, s.color));
    ctx.fillStyle=grad;
    ctx.fillRect(0,0,800,400);
    const a=document.createElement("a");
    a.href=canvas.toDataURL("image/png");
    a.download="gradient.png";
    a.click();
  };

  const applyPreset = (preset) => {
    setStops(preset.stops);
    setType(preset.type);
    setAngle(preset.angle);
  };

  return (
    <div className="cgrad-wrap">
      <div className="cgrad-preview" style={{background: gradientCSS}} />

      <div className="cgrad-controls">
        <div className="cgrad-type-group">
          {["linear","radial","conic"].map(t=>(
            <button key={t} onClick={()=>setType(t)}
              className={`cgrad-type-btn${type===t?" cgrad-type-btn--on":""}`}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>

        {(type==="linear"||type==="conic") && (
          <div className="cgrad-angle-row">
            <label className="cgrad-angle-label">Angle: {angle}°</label>
            <input type="range" min="0" max="360" value={angle}
              onChange={e=>setAngle(Number(e.target.value))} className="cgrad-angle-slider" />
          </div>
        )}

        <div className="cgrad-stops">
          <div className="cgrad-stops-header">
            <span className="cgrad-stops-title">Color Stops</span>
            <button className="cgrad-add-stop" onClick={addStop}>+ Add Stop</button>
          </div>
          {stops.map((stop,i)=>(
            <div key={i} className="cgrad-stop">
              <input type="color" value={stop.color} onChange={e=>updateStop(i,"color",e.target.value)}
                className="cgrad-stop-color" />
              <span className="cgrad-stop-hex">{stop.color}</span>
              <input type="range" min="0" max="100" value={stop.pos}
                onChange={e=>updateStop(i,"pos",Number(e.target.value))}
                className="cgrad-stop-pos" />
              <span className="cgrad-stop-pos-val">{stop.pos}%</span>
              {stops.length>2 && (
                <button onClick={()=>removeStop(i)} className="cgrad-stop-remove">✕</button>
              )}
            </div>
          ))}
        </div>

        <div className="cgrad-code">
          <span className="cgrad-code-label">CSS Output</span>
          <div className="cgrad-code-text">{fullCSS}</div>
          <button className="cgrad-copy-btn" onClick={copyCSS}>{copied?"Copied!":"Copy CSS"}</button>
        </div>

        <div className="cgrad-presets">
          <span className="cgrad-presets-label">Presets</span>
          <div className="cgrad-presets-row">
            {PRESETS.map((p,i)=>(
              <button key={i} className="cgrad-preset" onClick={()=>applyPreset(p)}
                style={{background: buildGradientCSS(p.stops, p.type, p.angle)}}
                title={`Preset ${i+1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="cgrad-actions">
        <button className="cgrad-btn" onClick={downloadPNG}>Download PNG</button>
      </div>
    </div>
  );
}
