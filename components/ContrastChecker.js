"use client";
import { useState } from "react";

function hexToRgb(hex) {
  const r=parseInt(hex.slice(1,3),16);
  const g=parseInt(hex.slice(3,5),16);
  const b=parseInt(hex.slice(5,7),16);
  return [r,g,b];
}

function relativeLuminance([r,g,b]) {
  const lin = v => {
    v /= 255;
    return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4);
  };
  return 0.2126*lin(r) + 0.7152*lin(g) + 0.0722*lin(b);
}

function contrastRatio(hex1, hex2) {
  const L1 = relativeLuminance(hexToRgb(hex1));
  const L2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(L1,L2);
  const darker = Math.min(L1,L2);
  return (lighter+0.05)/(darker+0.05);
}

function isValidHex(h) { return /^#[0-9a-fA-F]{6}$/.test(h); }

export default function ContrastChecker() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#6366f1");
  const [fgText, setFgText] = useState("#ffffff");
  const [bgText, setBgText] = useState("#6366f1");

  const syncFg = (val) => {
    setFgText(val);
    if(isValidHex(val)) setFg(val);
  };
  const syncBg = (val) => {
    setBgText(val);
    if(isValidHex(val)) setBg(val);
  };

  const ratio = contrastRatio(fg, bg);
  const ratioFixed = ratio.toFixed(2);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7;
  const passAALarge = ratio >= 3;
  const passAAALarge = ratio >= 4.5;

  return (
    <div className="ccon-wrap">
      <div className="ccon-pickers">
        <div className="ccon-picker-row">
          <label className="ccon-picker-label">Foreground Color</label>
          <div className="ccon-picker-inputs">
            <input type="color" value={fg} onChange={e=>{ setFg(e.target.value); setFgText(e.target.value); }}
              className="ccon-color-input" />
            <input type="text" value={fgText} onChange={e=>syncFg(e.target.value)}
              className="ccon-hex-input" maxLength={7} placeholder="#ffffff" />
          </div>
        </div>
        <div className="ccon-picker-row">
          <label className="ccon-picker-label">Background Color</label>
          <div className="ccon-picker-inputs">
            <input type="color" value={bg} onChange={e=>{ setBg(e.target.value); setBgText(e.target.value); }}
              className="ccon-color-input" />
            <input type="text" value={bgText} onChange={e=>syncBg(e.target.value)}
              className="ccon-hex-input" maxLength={7} placeholder="#6366f1" />
          </div>
        </div>
      </div>

      <div className="ccon-preview" style={{background: bg}}>
        <p className="ccon-preview-text" style={{color: fg}}>
          The quick brown fox jumps over the lazy dog
        </p>
        <p className="ccon-preview-text ccon-preview-text--lg" style={{color: fg}}>
          Large Text Sample (18pt+)
        </p>
      </div>

      <div className="ccon-ratio">
        <span className="ccon-ratio-label">Contrast Ratio</span>
        <span className="ccon-ratio-num">{ratioFixed}:1</span>
      </div>

      <div className="ccon-badges">
        <div className={`ccon-badge ${passAA?"ccon-badge--pass":"ccon-badge--fail"}`}>
          <span className="ccon-badge-title">WCAG AA</span>
          <span className="ccon-badge-subtitle">Normal Text (4.5:1)</span>
          <span className="ccon-badge-result">{passAA?"PASS":"FAIL"}</span>
        </div>
        <div className={`ccon-badge ${passAAA?"ccon-badge--pass":"ccon-badge--fail"}`}>
          <span className="ccon-badge-title">WCAG AAA</span>
          <span className="ccon-badge-subtitle">Normal Text (7:1)</span>
          <span className="ccon-badge-result">{passAAA?"PASS":"FAIL"}</span>
        </div>
        <div className={`ccon-badge ${passAALarge?"ccon-badge--pass":"ccon-badge--fail"}`}>
          <span className="ccon-badge-title">WCAG AA</span>
          <span className="ccon-badge-subtitle">Large Text (3:1)</span>
          <span className="ccon-badge-result">{passAALarge?"PASS":"FAIL"}</span>
        </div>
        <div className={`ccon-badge ${passAAALarge?"ccon-badge--pass":"ccon-badge--fail"}`}>
          <span className="ccon-badge-title">WCAG AAA</span>
          <span className="ccon-badge-subtitle">Large Text (4.5:1)</span>
          <span className="ccon-badge-result">{passAAALarge?"PASS":"FAIL"}</span>
        </div>
      </div>

      <div className="ccon-thresholds">
        <div className="ccon-threshold-item">
          <span>Normal Text AA: <strong>4.5:1 minimum</strong></span>
        </div>
        <div className="ccon-threshold-item">
          <span>Normal Text AAA: <strong>7:1 minimum</strong></span>
        </div>
        <div className="ccon-threshold-item">
          <span>Large Text AA: <strong>3:1 minimum</strong></span>
        </div>
        <div className="ccon-threshold-item">
          <span>Large Text AAA: <strong>4.5:1 minimum</strong></span>
        </div>
      </div>
    </div>
  );
}
