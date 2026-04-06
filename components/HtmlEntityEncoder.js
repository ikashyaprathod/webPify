"use client";
import { useState } from "react";

const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
const DECODE_MAP = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'", "&apos;": "'" };

function encode(str) {
  return str.replace(/[&<>"']/g, m => ENTITIES[m]);
}

function decode(str) {
  return str
    .replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&apos;/g, m => DECODE_MAP[m] || m)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

export default function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");
  const [copied, setCopied] = useState(false);

  const output = input ? (mode === "encode" ? encode(input) : decode(input)) : "";

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function swap() {
    setInput(output);
    setMode(m => m === "encode" ? "decode" : "encode");
  }

  return (
    <div className="htmlent-wrap">
      <div className="htmlent-mode-row">
        {[["encode","Encode HTML"],["decode","Decode HTML"]].map(([v,l]) => (
          <button key={v} className={`htmlent-tab${mode===v?" htmlent-tab--on":""}`} onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>

      <div className="htmlent-panes">
        <div className="htmlent-pane">
          <label className="htmlent-label">Input</label>
          <textarea className="htmlent-textarea" rows={8} placeholder={mode==="encode"?"Enter HTML or text with special characters...":"Enter HTML-encoded string..."} value={input} onChange={e => setInput(e.target.value)} />
        </div>
        <div className="htmlent-swap-col">
          <button className="htmlent-swap-btn" onClick={swap} title="Swap">⇄</button>
        </div>
        <div className="htmlent-pane">
          <div className="htmlent-label-row">
            <label className="htmlent-label">Output</label>
            {output && <button className="htmlent-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="htmlent-textarea htmlent-textarea--out" rows={8} readOnly value={output} />
        </div>
      </div>

      <div className="htmlent-ref">
        <span className="htmlent-ref-title">Common Entities:</span>
        {[["&","&amp;"],["<","&lt;"],[">","&gt;"],['"',"&quot;"],["'","&#039;"]].map(([char, ent]) => (
          <span key={char} className="htmlent-ref-chip"><code>{char}</code> → <code>{ent}</code></span>
        ))}
      </div>
    </div>
  );
}
