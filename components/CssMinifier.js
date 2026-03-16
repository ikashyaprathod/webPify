"use client";

import { useState } from "react";

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s*([{}:;,>~+])\s*/g, "$1")
    .replace(/\s{2,}/g, " ")
    .replace(/;\}/g, "}")
    .replace(/\n/g, "")
    .replace(/\r/g, "")
    .trim();
}

export default function CssMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleMinify() {
    if (!input.trim()) return;
    const result = minifyCSS(input);
    setOutput(result);
    setStats({
      original: input.length,
      minified: result.length,
      saved: Math.round((1 - result.length / input.length) * 100),
    });
  }

  async function handleCopy() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    if (!output) return;
    const blob = new Blob([output], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "styles.min.css";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="cssm-wrap">
      <div className="cssm-panels">
        <div className="cssm-panel">
          <label className="cssm-label">Input CSS</label>
          <textarea
            className="cssm-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your CSS here..."
            spellCheck={false}
          />
        </div>
        <div className="cssm-panel">
          <label className="cssm-label">Minified Output</label>
          <textarea
            className="cssm-textarea"
            value={output}
            readOnly
            placeholder="Minified CSS will appear here..."
            spellCheck={false}
          />
          <div className="cssm-output-actions">
            <button className="cssm-btn cssm-btn--sm" onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
            <button className="cssm-btn cssm-btn--sm" onClick={handleDownload}>Download .css</button>
          </div>
        </div>
      </div>

      {stats && (
        <div className="cssm-stats">
          <div className="cssm-stat-item">
            <span className="cssm-stat-val">{stats.original.toLocaleString()}</span>
            <span className="cssm-stat-lbl">Original (chars)</span>
          </div>
          <div className="cssm-stat-item">
            <span className="cssm-stat-val">{stats.minified.toLocaleString()}</span>
            <span className="cssm-stat-lbl">Minified (chars)</span>
          </div>
          <div className="cssm-stat-item">
            <span className="cssm-stat-val cssm-stat-val--green">{stats.saved}%</span>
            <span className="cssm-stat-lbl">Size Saved</span>
          </div>
        </div>
      )}

      <div className="cssm-actions">
        <button className="cssm-btn" onClick={handleMinify}>Minify CSS</button>
      </div>
    </div>
  );
}
