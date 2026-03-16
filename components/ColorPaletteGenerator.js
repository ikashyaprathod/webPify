"use client";
import { useState, useCallback } from "react";

function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = x => Math.round(x * 255).toString(16).padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function generatePalette(hex, type) {
  const [h, s, l] = hexToHsl(hex);
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const safeS = clamp(s, 20, 90);
  const safeL = clamp(l, 20, 80);

  const offsets = {
    complementary: [0, 30, 180, 210, 150],
    analogous: [0, 30, 60, -30, -60],
    triadic: [0, 120, 240, 60, 180],
    "split-complementary": [0, 150, 210, 75, 255],
    monochromatic: [0, 0, 0, 0, 0],
  };

  const lightness = {
    complementary: [safeL, clamp(safeL - 10, 20, 80), safeL, clamp(safeL + 10, 20, 80), clamp(safeL - 15, 20, 80)],
    analogous: [safeL, safeL, safeL, safeL, safeL],
    triadic: [safeL, safeL, safeL, clamp(safeL + 10, 20, 80), clamp(safeL - 10, 20, 80)],
    "split-complementary": [safeL, safeL, safeL, clamp(safeL + 10, 20, 80), clamp(safeL - 10, 20, 80)],
    monochromatic: [clamp(safeL - 20, 10, 90), clamp(safeL - 10, 10, 90), safeL, clamp(safeL + 10, 10, 90), clamp(safeL + 20, 10, 90)],
  };

  return offsets[type].map((offset, i) => {
    const nh = ((h + offset) % 360 + 360) % 360;
    const nl = lightness[type][i];
    const ns = type === "monochromatic" ? safeS : safeS;
    const hexColor = hslToHex(nh, ns, nl);
    const [r, g, b] = hslToRgb(nh, ns, nl);
    return { hex: hexColor, rgb: `rgb(${r}, ${g}, ${b})`, hsl: `hsl(${nh}, ${ns}%, ${nl}%)` };
  });
}

const TYPES = ["complementary", "analogous", "triadic", "split-complementary", "monochromatic"];

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const [paletteType, setPaletteType] = useState("complementary");
  const [palette, setPalette] = useState(() => generatePalette("#6366f1", "complementary"));
  const [copied, setCopied] = useState(null);

  const generate = useCallback((color, type) => {
    setPalette(generatePalette(color, type));
  }, []);

  const handleColorChange = (e) => {
    setBaseColor(e.target.value);
    generate(e.target.value, paletteType);
  };

  const handleTypeChange = (type) => {
    setPaletteType(type);
    generate(baseColor, type);
  };

  const copyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  const copyCSSVars = () => {
    const css = palette.map((c, i) => `  --color-${i + 1}: ${c.hex};`).join("\n");
    navigator.clipboard.writeText(`:root {\n${css}\n}`);
    setCopied("css");
    setTimeout(() => setCopied(null), 1500);
  };

  const downloadPNG = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 500; canvas.height = 200;
    const ctx = canvas.getContext("2d");
    palette.forEach((c, i) => {
      ctx.fillStyle = c.hex;
      ctx.fillRect(i * 100, 0, 100, 200);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 13px monospace";
      ctx.textAlign = "center";
      ctx.fillText(c.hex, i * 100 + 50, 110);
    });
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "palette.png";
    a.click();
  };

  return (
    <div className="cpal-wrap">
      <div className="cpal-controls">
        <div className="cpal-color-input-row">
          <label className="cpal-label">Base Color</label>
          <input type="color" value={baseColor} onChange={handleColorChange} className="cpal-color-input" />
          <span className="cpal-hex-display">{baseColor.toUpperCase()}</span>
        </div>
        <div className="cpal-type-group">
          {TYPES.map(t => (
            <button key={t} onClick={() => handleTypeChange(t)}
              className={`cpal-type-btn${paletteType === t ? " cpal-type-btn--on" : ""}`}>
              {t.charAt(0).toUpperCase() + t.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="cpal-palette">
        {palette.map((color, i) => (
          <div key={i} className="cpal-swatch" onClick={() => copyHex(color.hex)} title="Click to copy hex">
            <div className="cpal-swatch-color" style={{ background: color.hex }} />
            <div className="cpal-swatch-info">
              <span className="cpal-swatch-hex">{color.hex.toUpperCase()}</span>
              <span className="cpal-swatch-small">{color.rgb}</span>
              <span className="cpal-swatch-small">{color.hsl}</span>
              {copied === color.hex && <span className="cpal-copied">Copied!</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="cpal-actions">
        <button className="cpal-btn" onClick={copyCSSVars}>
          {copied === "css" ? "Copied!" : "Copy as CSS Variables"}
        </button>
        <button className="cpal-btn cpal-btn--outline" onClick={downloadPNG}>Download PNG</button>
      </div>
    </div>
  );
}
