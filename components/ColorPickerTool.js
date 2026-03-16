"use client";
import { useState, useRef, useEffect, useCallback } from "react";

function hexToHsv(hex) {
  let r=parseInt(hex.slice(1,3),16)/255;
  let g=parseInt(hex.slice(3,5),16)/255;
  let b=parseInt(hex.slice(5,7),16)/255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b), d=max-min;
  let h=0,s=max===0?0:d/max,v=max;
  if(max!==min){
    switch(max){
      case r:h=((g-b)/d+(g<b?6:0))/6;break;
      case g:h=((b-r)/d+2)/6;break;
      case b:h=((r-g)/d+4)/6;break;
    }
  }
  return [h*360,s,v];
}

function hsvToRgb(h,s,v) {
  const f=(n,k=(n+h/60)%6)=>v-v*s*Math.max(Math.min(k,4-k,1),0);
  return [Math.round(f(5)*255),Math.round(f(3)*255),Math.round(f(1)*255)];
}

function rgbToHex(r,g,b){return "#"+[r,g,b].map(v=>v.toString(16).padStart(2,"0")).join("");}
function rgbToHsl(r,g,b){
  r/=255;g/=255;b/=255;
  const max=Math.max(r,g,b),min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){h=s=0;}
  else{
    const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);
    switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}
  }
  return [Math.round(h*360),Math.round(s*100),Math.round(l*100)];
}

const MAX_HISTORY = 8;

export default function ColorPickerTool() {
  const svCanvasRef = useRef(null);
  const [hue, setHue] = useState(240);
  const [sat, setSat] = useState(0.6);
  const [val, setVal] = useState(0.95);
  const [alpha, setAlpha] = useState(1);
  const [copied, setCopied] = useState(null);
  const [history, setHistory] = useState([]);
  const [eyeDropSupported] = useState(typeof window !== "undefined" && "EyeDropper" in window);

  const rgb = hsvToRgb(hue, sat, val);
  const hex = rgbToHex(...rgb);
  const [h,s,l] = rgbToHsl(...rgb);

  const drawSVCanvas = useCallback(() => {
    const canvas = svCanvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    const w=canvas.width, he=canvas.height;
    const hsl = `hsl(${hue},100%,50%)`;
    const grad1 = ctx.createLinearGradient(0,0,w,0);
    grad1.addColorStop(0,"white"); grad1.addColorStop(1,hsl);
    ctx.fillStyle=grad1; ctx.fillRect(0,0,w,he);
    const grad2 = ctx.createLinearGradient(0,0,0,he);
    grad2.addColorStop(0,"rgba(0,0,0,0)"); grad2.addColorStop(1,"black");
    ctx.fillStyle=grad2; ctx.fillRect(0,0,w,he);
    // draw cursor
    const cx=sat*w, cy=(1-val)*he;
    ctx.beginPath();
    ctx.arc(cx,cy,8,0,2*Math.PI);
    ctx.strokeStyle="white";
    ctx.lineWidth=2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx,cy,6,0,2*Math.PI);
    ctx.strokeStyle="rgba(0,0,0,0.5)";
    ctx.lineWidth=1.5;
    ctx.stroke();
  }, [hue, sat, val]);

  useEffect(()=>{ drawSVCanvas(); },[drawSVCanvas]);

  const handleSVClick = (e) => {
    const canvas = svCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setSat(Math.max(0,Math.min(1,x)));
    setVal(Math.max(0,Math.min(1,1-y)));
  };

  const handleSVDrag = (e) => {
    if(e.buttons!==1) return;
    handleSVClick(e);
  };

  const addToHistory = useCallback((hexColor) => {
    setHistory(prev => {
      const filtered = prev.filter(c=>c!==hexColor);
      return [hexColor, ...filtered].slice(0,MAX_HISTORY);
    });
  }, []);

  const selectHistoryColor = (hexColor) => {
    const [h,s,v]=hexToHsv(hexColor);
    setHue(h); setSat(s); setVal(v);
  };

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    addToHistory(hex);
    setCopied(key);
    setTimeout(()=>setCopied(null),1500);
  };

  const useEyeDropper = async () => {
    if(!eyeDropSupported) return;
    try {
      const ed = new window.EyeDropper();
      const result = await ed.open();
      const picked = result.sRGBHex;
      const [ph,ps,pv] = hexToHsv(picked);
      setHue(ph); setSat(ps); setVal(pv);
      addToHistory(picked);
    } catch(e) {}
  };

  const hexWithAlpha = alpha<1 ? hex+(Math.round(alpha*255).toString(16).padStart(2,"0")) : hex;

  return (
    <div className="cpktool-wrap">
      <div className="cpktool-picker-area">
        <canvas ref={svCanvasRef} width={300} height={200}
          className="cpktool-sv-canvas"
          onClick={handleSVClick}
          onMouseMove={handleSVDrag} />
        <div className="cpktool-sliders">
          <div className="cpktool-slider-row">
            <span className="cpktool-slider-label">Hue</span>
            <input type="range" min="0" max="360" value={hue}
              onChange={e=>setHue(Number(e.target.value))}
              className="cpktool-hue-slider" />
          </div>
          <div className="cpktool-slider-row">
            <span className="cpktool-slider-label">Alpha</span>
            <input type="range" min="0" max="1" step="0.01" value={alpha}
              onChange={e=>setAlpha(Number(e.target.value))}
              className="cpktool-alpha-slider" />
            <span className="cpktool-slider-val">{Math.round(alpha*100)}%</span>
          </div>
        </div>
        <div className="cpktool-preview-row">
          <div className="cpktool-swatch-lg" style={{background: hex, opacity: alpha}} />
          {eyeDropSupported && (
            <button className="cpktool-eyedrop-btn" onClick={useEyeDropper} title="Pick color from screen">
              💉 Eye Dropper
            </button>
          )}
        </div>
      </div>

      <div className="cpktool-values">
        <div className="cpktool-value-row">
          <span className="cpktool-format-label">HEX</span>
          <input className="cpktool-value-input" readOnly value={hexWithAlpha} />
          <button className="cpktool-copy-btn" onClick={()=>copy(hexWithAlpha,"hex")}>{copied==="hex"?"✓":"Copy"}</button>
        </div>
        <div className="cpktool-value-row">
          <span className="cpktool-format-label">RGB</span>
          <input className="cpktool-value-input" readOnly value={`rgb(${rgb.join(", ")})`} />
          <button className="cpktool-copy-btn" onClick={()=>copy(`rgb(${rgb.join(", ")})`, "rgb")}>{copied==="rgb"?"✓":"Copy"}</button>
        </div>
        <div className="cpktool-value-row">
          <span className="cpktool-format-label">HSL</span>
          <input className="cpktool-value-input" readOnly value={`hsl(${h}, ${s}%, ${l}%)`} />
          <button className="cpktool-copy-btn" onClick={()=>copy(`hsl(${h}, ${s}%, ${l}%)`, "hsl")}>{copied==="hsl"?"✓":"Copy"}</button>
        </div>
        <div className="cpktool-value-row">
          <span className="cpktool-format-label">HSV</span>
          <input className="cpktool-value-input" readOnly value={`hsv(${Math.round(hue)}, ${Math.round(sat*100)}%, ${Math.round(val*100)}%)`} />
          <button className="cpktool-copy-btn" onClick={()=>copy(`hsv(${Math.round(hue)}, ${Math.round(sat*100)}%, ${Math.round(val*100)}%)`, "hsv")}>{copied==="hsv"?"✓":"Copy"}</button>
        </div>
      </div>

      {history.length>0 && (
        <div className="cpktool-history">
          <span className="cpktool-history-label">Recent Colors</span>
          <div className="cpktool-history-swatches">
            {history.map((c,i)=>(
              <button key={i} className="cpktool-swatch" style={{background:c}}
                onClick={()=>selectHistoryColor(c)} title={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
