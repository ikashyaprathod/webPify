"use client";

import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";

export default function QrCodeGenerator() {
  const [text, setText] = useState("https://webpifyy.vercel.app");
  const [size, setSize] = useState(256);
  const [format, setFormat] = useState("PNG");
  const [svgData, setSvgData] = useState("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  const sizes = [128, 256, 512];

  async function renderQR() {
    if (!text.trim()) return;
    if (format === "PNG") {
      if (canvasRef.current) {
        await QRCode.toCanvas(canvasRef.current, text, {
          width: size,
          margin: 2,
          color: { dark: "#1e293b", light: "#ffffff" },
        });
        setSvgData("");
      }
    } else {
      const svg = await QRCode.toString(text, { type: "svg", width: size, margin: 2 });
      setSvgData(svg);
    }
  }

  useEffect(() => {
    renderQR();
  }, [text, size, format]);

  function handleDownload() {
    if (format === "PNG") {
      if (!canvasRef.current) return;
      const url = canvasRef.current.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.png";
      a.click();
    } else {
      const blob = new Blob([svgData], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.svg";
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  async function handleCopy() {
    if (format === "PNG" && canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        try {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          // fallback: copy data URL
          const url = canvasRef.current.toDataURL("image/png");
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      });
    } else {
      await navigator.clipboard.writeText(svgData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="qr-wrap">
      <div className="qr-input-row">
        <input
          className="qr-input"
          type="text"
          placeholder="Enter URL or text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="qr-controls">
        <div className="qr-size-group">
          <span className="qr-group-label">Size</span>
          {sizes.map((s) => (
            <button
              key={s}
              className={`qr-size-btn${size === s ? " qr-size-btn--on" : ""}`}
              onClick={() => setSize(s)}
            >
              {s}px
            </button>
          ))}
        </div>
        <div className="qr-format-group">
          <span className="qr-group-label">Format</span>
          {["PNG", "SVG"].map((f) => (
            <button
              key={f}
              className={`qr-format-btn${format === f ? " qr-format-btn--on" : ""}`}
              onClick={() => setFormat(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="qr-preview">
        {format === "PNG" ? (
          <canvas ref={canvasRef} className="qr-canvas" />
        ) : (
          <div
            className="qr-canvas"
            dangerouslySetInnerHTML={{ __html: svgData }}
          />
        )}
      </div>

      <div className="qr-actions">
        <button className="qr-btn" onClick={handleDownload}>
          Download {format}
        </button>
        <button className="qr-btn qr-btn--secondary" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}
