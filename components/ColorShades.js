"use client";
import { useState } from "react";

function hexToHsl(hex) {
  let r = parseInt(hex.slice(1,3),16)/255, g = parseInt(hex.slice(3,5),16)/255, b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      default: h = ((r-g)/d + 4)/6;
    }
  }
  return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}

function hslToHex(h,s,l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1-l);
  const f = n => { const k = (n + h/30) % 12; const c = l - a*Math.max(Math.min(k-3,9-k,1),-1); return Math.round(255*c).toString(16).padStart(2,"0"); };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generateShades(hex) {
  const [h, s] = hexToHsl(hex);
  return Array.from({length:11},(_,i) => {
    const l = 5 + i * 9;
    return { l, hex: hslToHex(h, Math.min(s, 90), l), label: (i===0?"50":String(i*100)) };
  });
}

function isLight(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114) / 1000 > 128;
}

export default function ColorShades() {
  const [color, setColor] = useState("#3b82f6");
  const [hexInput, setHexInput] = useState("#3b82f6");
  const [copied, setCopied] = useState(null);

  const shades = generateShades(color);

  function applyHex(val) {
    setHexInput(val);
    if (/^#[0-9a-fA-F]{6}$/.test(val)) setColor(val);
  }

  async function copy(val, key) {
    await navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  async function copyCss() {
    const css = shades.map(s => `  --color-${s.label}: ${s.hex};`).join("\n");
    await navigator.clipboard.writeText(`:root {\n${css}\n}`);
    setCopied("css");
    setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="colshade-wrap">
      <div className="colshade-controls">
        <input type="color" className="colshade-picker" value={color} onChange={e => { setColor(e.target.value); setHexInput(e.target.value); }} />
        <input className="colshade-hex-input" placeholder="#3b82f6" value={hexInput} onChange={e => applyHex(e.target.value)} maxLength={7} />
        <button className="colshade-css-btn" onClick={copyCss}>{copied==="css"?"Copied!":"Copy as CSS vars"}</button>
      </div>

      <div className="colshade-grid">
        {shades.map((s, i) => (
          <div key={i} className="colshade-swatch" style={{background: s.hex}} onClick={() => copy(s.hex, i)} title={s.hex}>
            <span className="colshade-swatch-label" style={{color: isLight(s.hex) ? "#111" : "#fff"}}>{s.label}</span>
            <span className="colshade-swatch-hex" style={{color: isLight(s.hex) ? "#444" : "#ddd"}}>{copied===i?"Copied!":s.hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
