"use client";
import { useState } from "react";

export default function Base64Text() {
  const [mode, setMode] = useState("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function process(val, m) {
    setError("");
    if (!val) { setOutput(""); return; }
    try {
      if (m === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(val))));
      } else {
        setOutput(decodeURIComponent(escape(atob(val.trim()))));
      }
    } catch {
      setError(m === "decode" ? "Invalid Base64 string. Make sure it is valid Base64-encoded text." : "Encoding failed.");
      setOutput("");
    }
  }

  function handleInput(val) {
    setInput(val);
    process(val, mode);
  }

  function switchMode(m) {
    setMode(m);
    setInput("");
    setOutput("");
    setError("");
  }

  function swap() {
    const newMode = mode === "encode" ? "decode" : "encode";
    setMode(newMode);
    setInput(output);
    process(output, newMode);
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="b64txt-wrap">
      <div className="b64txt-tabs">
        {[["encode","Encode → Base64"],["decode","Decode Base64"]].map(([v,l]) => (
          <button key={v} className={`b64txt-tab${mode===v?" b64txt-tab--on":""}`} onClick={() => switchMode(v)}>{l}</button>
        ))}
      </div>

      <div className="b64txt-panes">
        <div className="b64txt-pane">
          <label className="b64txt-label">{mode === "encode" ? "Plain Text" : "Base64 Input"}</label>
          <textarea className="b64txt-textarea" rows={8} placeholder={mode==="encode"?"Enter text to encode...":"Paste Base64 string to decode..."} value={input} onChange={e => handleInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="b64txt-swap-col">
          <button className="b64txt-swap-btn" onClick={swap} title="Swap">⇄</button>
        </div>
        <div className="b64txt-pane">
          <div className="b64txt-label-row">
            <label className="b64txt-label">{mode === "encode" ? "Base64 Output" : "Decoded Text"}</label>
            {output && <button className="b64txt-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="b64txt-textarea b64txt-textarea--out" rows={8} readOnly value={error || output} />
        </div>
      </div>

      {input && output && (
        <div className="b64txt-stats">
          <span>Input: {input.length} chars</span>
          <span>Output: {output.length} chars</span>
          <span>Ratio: {((output.length / input.length) * 100).toFixed(0)}%</span>
        </div>
      )}
    </div>
  );
}
