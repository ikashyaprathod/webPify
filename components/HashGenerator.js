"use client";
import { useState, useCallback } from "react";

const ALGOS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];

async function digest(algo, text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest(algo, enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState("SHA-256");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);
  const [upper, setUpper] = useState(false);

  const generate = useCallback(async () => {
    if (!input.trim()) return;
    setRunning(true);
    const result = await digest(algo, input);
    setHash(upper ? result.toUpperCase() : result);
    setRunning(false);
  }, [input, algo, upper]);

  async function copy() {
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="hashgen-wrap">
      <div className="hashgen-card">
        <div className="hashgen-algo-row">
          {ALGOS.map(a => (
            <button key={a} className={`hashgen-algo-btn${algo===a?" hashgen-algo-btn--on":""}`} onClick={() => setAlgo(a)}>{a}</button>
          ))}
        </div>

        <textarea
          className="hashgen-input"
          placeholder="Enter text to hash..."
          rows={5}
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <div className="hashgen-options-row">
          <label className="hashgen-toggle-label">
            <input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} />
            Uppercase output
          </label>
          <button className="hashgen-btn" onClick={generate} disabled={!input.trim() || running}>
            {running ? "Computing…" : "Generate Hash"}
          </button>
        </div>

        {hash && (
          <div className="hashgen-result-block">
            <div className="hashgen-result-hd">
              <span className="hashgen-result-label">{algo}</span>
              <button className="hashgen-copy-btn" onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
            </div>
            <code className="hashgen-result">{hash}</code>
            <span className="hashgen-result-meta">{hash.length} hex chars · {hash.length * 4} bits</span>
          </div>
        )}
      </div>
    </div>
  );
}
