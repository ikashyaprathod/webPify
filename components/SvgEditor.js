"use client";
import { useState } from "react";

const STARTER = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="#e0f2fe" rx="16"/>
  <circle cx="100" cy="80" r="40" fill="#3b82f6"/>
  <rect x="60" y="130" width="80" height="50" fill="#1e40af" rx="8"/>
  <text x="100" y="160" font-family="sans-serif" font-size="14" fill="white" text-anchor="middle">Hello SVG</text>
</svg>`;

export default function SvgEditor() {
  const [code, setCode] = useState(STARTER);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function validate(c) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(c, "image/svg+xml");
    return !doc.querySelector("parsererror");
  }

  function handleChange(val) {
    setCode(val);
    setError(val.trim() && !validate(val) ? "SVG has syntax errors — preview may not render." : "");
  }

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function download() {
    const blob = new Blob([code], { type: "image/svg+xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "edited.svg";
    a.click();
  }

  function insert(snippet) {
    setCode(c => c.replace("</svg>", `  ${snippet}\n</svg>`));
  }

  const snippets = [
    { label: "Circle", code: '<circle cx="100" cy="100" r="30" fill="#3b82f6"/>' },
    { label: "Rect", code: '<rect x="50" y="50" width="100" height="60" fill="#10b981" rx="8"/>' },
    { label: "Text", code: '<text x="100" y="100" font-family="sans-serif" font-size="16" fill="#111" text-anchor="middle">Text</text>' },
    { label: "Line", code: '<line x1="20" y1="20" x2="180" y2="180" stroke="#6366f1" stroke-width="2"/>' },
  ];

  return (
    <div className="svgedit-wrap">
      <div className="svgedit-toolbar">
        {snippets.map(s => (
          <button key={s.label} className="svgedit-snip-btn" onClick={() => insert(s.code)}>{s.label}</button>
        ))}
        <div className="svgedit-toolbar-right">
          <button className="svgedit-copy-btn" onClick={copy}>{copied?"Copied!":"Copy SVG"}</button>
          <button className="svgedit-dl-btn" onClick={download}>Download SVG</button>
        </div>
      </div>

      <div className="svgedit-panes">
        <div className="svgedit-pane">
          <label className="svgedit-label">SVG Code</label>
          <textarea className="svgedit-textarea" rows={18} value={code} onChange={e => handleChange(e.target.value)} spellCheck={false} />
          {error && <p className="svgedit-error">{error}</p>}
        </div>
        <div className="svgedit-pane">
          <label className="svgedit-label">Live Preview</label>
          <div className="svgedit-preview" dangerouslySetInnerHTML={{__html: code}} />
        </div>
      </div>
    </div>
  );
}
