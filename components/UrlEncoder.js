"use client";
import { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // encode | decode
  const [type, setType] = useState("component"); // component | full
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function process(val, m, t) {
    setError("");
    try {
      const fn = m === "encode"
        ? (t === "component" ? encodeURIComponent : encodeURI)
        : (t === "component" ? decodeURIComponent : decodeURI);
      setOutput(fn(val));
    } catch (e) {
      setError("Could not decode: " + e.message);
      setOutput("");
    }
  }

  function handleInput(val) {
    setInput(val);
    if (val) process(val, mode, type);
    else setOutput("");
  }

  function switchMode(m) {
    setMode(m);
    if (input) process(input, m, type);
  }

  function switchType(t) {
    setType(t);
    if (input) process(input, mode, t);
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function swap() {
    setInput(output);
    const newMode = mode === "encode" ? "decode" : "encode";
    setMode(newMode);
    if (output) process(output, newMode, type);
    else setOutput("");
  }

  return (
    <div className="urlenc-wrap">
      <div className="urlenc-controls">
        <div className="urlenc-tab-group">
          {[["encode","Encode"],["decode","Decode"]].map(([v,l]) => (
            <button key={v} className={`urlenc-tab${mode===v?" urlenc-tab--on":""}`} onClick={() => switchMode(v)}>{l}</button>
          ))}
        </div>
        <div className="urlenc-tab-group">
          {[["component","URI Component"],["full","Full URL"]].map(([v,l]) => (
            <button key={v} className={`urlenc-tab urlenc-tab--sm${type===v?" urlenc-tab--on":""}`} onClick={() => switchType(v)}>{l}</button>
          ))}
        </div>
      </div>

      <div className="urlenc-panes">
        <div className="urlenc-pane">
          <label className="urlenc-label">Input</label>
          <textarea className="urlenc-textarea" rows={6} placeholder={mode==="encode"?"Enter text or URL to encode...":"Enter encoded string to decode..."} value={input} onChange={e => handleInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="urlenc-swap-col">
          <button className="urlenc-swap-btn" onClick={swap} title="Swap & reverse mode">⇄</button>
        </div>
        <div className="urlenc-pane">
          <div className="urlenc-label-row">
            <label className="urlenc-label">Output</label>
            {output && <button className="urlenc-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="urlenc-textarea urlenc-textarea--out" rows={6} readOnly value={error || output} />
        </div>
      </div>
    </div>
  );
}
