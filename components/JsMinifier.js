"use client";

import { useState } from "react";
import { minify } from "terser";

export default function JsMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleMinify() {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setOutput("");
    setStats(null);
    try {
      const result = await minify(input, {
        compress: true,
        mangle: true,
      });
      const minified = result.code || "";
      setOutput(minified);
      setStats({
        original: input.length,
        minified: minified.length,
        saved: input.length > 0 ? Math.round((1 - minified.length / input.length) * 100) : 0,
      });
    } catch (e) {
      setError(e.message || "Invalid JavaScript");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    if (!output) return;
    const blob = new Blob([output], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.min.js";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="jsm-wrap">
      <div className="jsm-panels">
        <div className="jsm-panel">
          <label className="jsm-label">Input JavaScript</label>
          <textarea
            className={`jsm-textarea${error ? " jsm-textarea--error" : ""}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JavaScript here..."
            spellCheck={false}
          />
          {error && <div className="jsm-error-msg">{error}</div>}
        </div>
        <div className="jsm-panel">
          <label className="jsm-label">Minified Output</label>
          <textarea
            className="jsm-textarea"
            value={output}
            readOnly
            placeholder="Minified JS will appear here..."
            spellCheck={false}
          />
          <div className="jsm-output-actions">
            <button className="jsm-btn jsm-btn--sm" onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
            <button className="jsm-btn jsm-btn--sm" onClick={handleDownload}>Download .min.js</button>
          </div>
        </div>
      </div>

      {stats && (
        <div className="jsm-stats">
          <div className="jsm-stat-item">
            <span className="jsm-stat-val">{stats.original.toLocaleString()}</span>
            <span className="jsm-stat-lbl">Original (chars)</span>
          </div>
          <div className="jsm-stat-item">
            <span className="jsm-stat-val">{stats.minified.toLocaleString()}</span>
            <span className="jsm-stat-lbl">Minified (chars)</span>
          </div>
          <div className="jsm-stat-item">
            <span className="jsm-stat-val jsm-stat-val--green">{stats.saved}%</span>
            <span className="jsm-stat-lbl">Size Saved</span>
          </div>
        </div>
      )}

      <div className="jsm-actions">
        <button className="jsm-btn" onClick={handleMinify} disabled={loading}>
          {loading ? "Minifying..." : "Minify JavaScript"}
        </button>
      </div>
    </div>
  );
}
