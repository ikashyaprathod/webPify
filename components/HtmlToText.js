"use client";
import { useState } from "react";

function stripHtml(html) {
  const div = document.createElement("div");
  // Replace block elements with newlines first
  const withNewlines = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(p|div|li|h[1-6]|tr|blockquote)[^>]*>/gi, "\n")
    .replace(/<\/?(ul|ol|table)[^>]*>/gi, "\n");
  div.innerHTML = withNewlines;
  const text = div.textContent || div.innerText || "";
  return text.replace(/\n{3,}/g, "\n\n").trim();
}

export default function HtmlToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function convert() {
    if (!input.trim()) { setOutput(""); return; }
    setOutput(stripHtml(input));
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const wordCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const charCount = output.length;

  return (
    <div className="h2txt-wrap">
      <div className="h2txt-panes">
        <div className="h2txt-pane">
          <label className="h2txt-label">HTML Input</label>
          <textarea className="h2txt-textarea" rows={12} placeholder="<h1>Hello</h1><p>Paste your HTML here...</p>" value={input} onChange={e => setInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="h2txt-pane">
          <div className="h2txt-label-row">
            <label className="h2txt-label">Plain Text Output</label>
            {output && <button className="h2txt-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="h2txt-textarea h2txt-textarea--out" rows={12} readOnly value={output} />
          {output && <div className="h2txt-stats"><span>{wordCount} words</span><span>{charCount} chars</span></div>}
        </div>
      </div>
      <button className="h2txt-btn" onClick={convert} disabled={!input.trim()}>Strip HTML</button>
    </div>
  );
}
