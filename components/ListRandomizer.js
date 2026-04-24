"use client";
import { useState } from "react";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ListRandomizer() {
  const [input, setInput] = useState("Alice\nBob\nCharlie\nDavid\nEve");
  const [result, setResult] = useState([]);
  const [pickN, setPickN] = useState("");
  const [copied, setCopied] = useState(false);

  function randomize() {
    const items = input.split("\n").map(s => s.trim()).filter(Boolean);
    if (!items.length) return;
    const shuffled = shuffle(items);
    const n = parseInt(pickN);
    setResult(!isNaN(n) && n > 0 ? shuffled.slice(0, Math.min(n, shuffled.length)) : shuffled);
    setCopied(false);
  }

  function copy() {
    navigator.clipboard?.writeText(result.join("\n")).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  }

  return (
    <div className="listrand-wrap">
      <div className="listrand-cols">
        <div className="listrand-col">
          <label className="listrand-label">Items (one per line)</label>
          <textarea className="listrand-textarea" value={input} onChange={e=>setInput(e.target.value)} rows={8} placeholder="Enter one item per line" />
          <div className="listrand-opts">
            <label className="listrand-label">Pick only N items (optional)</label>
            <input className="listrand-input-sm" type="number" value={pickN} onChange={e=>setPickN(e.target.value)} placeholder="All" min="1" />
          </div>
          <button className="listrand-btn" onClick={randomize}>🔀 Shuffle</button>
        </div>
        {result.length > 0 && (
          <div className="listrand-col">
            <div className="listrand-result-header">
              <label className="listrand-label">Result ({result.length} items)</label>
              <button className="listrand-copy" onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
            </div>
            <ol className="listrand-list">
              {result.map((item, i) => <li key={i} className="listrand-item"><span className="listrand-num">{i+1}</span>{item}</li>)}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
