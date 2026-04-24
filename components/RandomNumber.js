"use client";
import { useState } from "react";

export default function RandomNumber() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(false);

  function generate() {
    const lo = parseInt(min), hi = parseInt(max), n = Math.min(parseInt(count) || 1, 1000);
    if (isNaN(lo) || isNaN(hi) || lo > hi) return;
    const pool = [];
    if (unique) {
      const range = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
      for (let i = 0; i < Math.min(n, range.length); i++) {
        const idx = Math.floor(Math.random() * (range.length - i)) + i;
        [range[i], range[idx]] = [range[idx], range[i]];
        pool.push(range[i]);
      }
    } else {
      for (let i = 0; i < n; i++) pool.push(Math.floor(Math.random() * (hi - lo + 1)) + lo);
    }
    setResults(pool); setCopied(false);
  }

  function copy() {
    navigator.clipboard?.writeText(results.join(", ")).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  }

  return (
    <div className="rndnum-wrap">
      <div className="rndnum-fields">
        <div className="rndnum-field"><label className="rndnum-label">Min</label><input className="rndnum-input" type="number" value={min} onChange={e=>setMin(e.target.value)} /></div>
        <div className="rndnum-field"><label className="rndnum-label">Max</label><input className="rndnum-input" type="number" value={max} onChange={e=>setMax(e.target.value)} /></div>
        <div className="rndnum-field"><label className="rndnum-label">Count</label><input className="rndnum-input" type="number" value={count} onChange={e=>setCount(e.target.value)} min="1" max="1000" /></div>
      </div>
      <div className="rndnum-opts">
        <label className="rndnum-check-label">
          <input type="checkbox" checked={unique} onChange={e=>setUnique(e.target.checked)} />
          No duplicates (unique)
        </label>
      </div>
      <button className="rndnum-btn" onClick={generate}>Generate</button>
      {results.length > 0 && (
        <div className="rndnum-results">
          <div className="rndnum-output">
            {results.length === 1
              ? <span className="rndnum-big">{results[0]}</span>
              : <span className="rndnum-list">{results.join(", ")}</span>}
          </div>
          <button className="rndnum-copy" onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
        </div>
      )}
    </div>
  );
}
