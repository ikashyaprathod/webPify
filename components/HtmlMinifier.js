"use client";

import { useState } from "react";

function minifyHTML(html, removeComments, collapseWhitespace) {
  let result = html;
  if (removeComments) {
    result = result.replace(/<!--[\s\S]*?-->/g, "");
  }
  if (collapseWhitespace) {
    result = result.replace(/\s{2,}/g, " ").replace(/>\s+</g, "><").trim();
  }
  return result;
}

export default function HtmlMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [removeComments, setRemoveComments] = useState(true);
  const [collapseWhitespace, setCollapseWhitespace] = useState(true);
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleMinify() {
    if (!input.trim()) return;
    const result = minifyHTML(input, removeComments, collapseWhitespace);
    setOutput(result);
    setStats({
      original: input.length,
      minified: result.length,
      saved: input.length > 0 ? Math.round((1 - result.length / input.length) * 100) : 0,
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
    const blob = new Blob([output], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.min.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="htmlm-wrap">
      <div className="htmlm-options">
        <label className="htmlm-option">
          <input
            className="htmlm-checkbox"
            type="checkbox"
            checked={removeComments}
            onChange={(e) => setRemoveComments(e.target.checked)}
          />
          Remove HTML comments
        </label>
        <label className="htmlm-option">
          <input
            className="htmlm-checkbox"
            type="checkbox"
            checked={collapseWhitespace}
            onChange={(e) => setCollapseWhitespace(e.target.checked)}
          />
          Collapse whitespace
        </label>
      </div>

      <div className="htmlm-panels">
        <div className="htmlm-panel">
          <label className="htmlm-label">Input HTML</label>
          <textarea
            className="htmlm-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your HTML here..."
            spellCheck={false}
          />
        </div>
        <div className="htmlm-panel">
          <label className="htmlm-label">Minified Output</label>
          <textarea
            className="htmlm-textarea"
            value={output}
            readOnly
            placeholder="Minified HTML will appear here..."
            spellCheck={false}
          />
          <div className="htmlm-output-actions">
            <button className="htmlm-btn htmlm-btn--sm" onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
            <button className="htmlm-btn htmlm-btn--sm" onClick={handleDownload}>Download .html</button>
          </div>
        </div>
      </div>

      {stats && (
        <div className="htmlm-stats">
          <div className="htmlm-stat-item">
            <span className="htmlm-stat-val">{stats.original.toLocaleString()}</span>
            <span className="htmlm-stat-lbl">Original</span>
          </div>
          <div className="htmlm-stat-item">
            <span className="htmlm-stat-val">{stats.minified.toLocaleString()}</span>
            <span className="htmlm-stat-lbl">Minified</span>
          </div>
          <div className="htmlm-stat-item">
            <span className="htmlm-stat-val htmlm-stat-val--green">{stats.saved}%</span>
            <span className="htmlm-stat-lbl">Saved</span>
          </div>
        </div>
      )}

      <div className="htmlm-actions-row">
        <button className="htmlm-btn" onClick={handleMinify}>Minify HTML</button>
      </div>
    </div>
  );
}
