"use client";
import { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(1);

  function flip() {
    setFlipping(true);
    setTimeout(() => {
      const flips = Array.from({ length: count }, () => Math.random() < 0.5 ? "Heads" : "Tails");
      const heads = flips.filter(f => f === "Heads").length;
      const tails = flips.length - heads;
      setResult({ flips, heads, tails });
      setHistory(h => [{ flips, heads, tails, time: new Date().toLocaleTimeString() }, ...h].slice(0, 20));
      setFlipping(false);
    }, 400);
  }

  function reset() { setResult(null); setHistory([]); }

  const allHeads = history.reduce((a, b) => a + b.heads, 0);
  const allTails = history.reduce((a, b) => a + b.tails, 0);
  const allTotal = allHeads + allTails;

  return (
    <div className="coin-wrap">
      <div className="coin-controls">
        <div className="coin-field">
          <label className="coin-label">Number of Flips</label>
          <input className="coin-input" type="number" value={count} onChange={e=>setCount(Math.max(1,Math.min(100,parseInt(e.target.value)||1)))} min="1" max="100" />
        </div>
      </div>
      <div className="coin-btns">
        <button className="coin-btn" onClick={flip} disabled={flipping}>{flipping ? "Flipping…" : "🪙 Flip"}</button>
        {history.length > 0 && <button className="coin-reset" onClick={reset}>Reset</button>}
      </div>

      {result && (
        <div className="coin-result">
          {count === 1
            ? <div className={`coin-face coin-face--${result.flips[0].toLowerCase()}`}>{result.flips[0] === "Heads" ? "👑" : "✦"}<span>{result.flips[0]}</span></div>
            : <div className="coin-multi"><p className="coin-multi-heads">Heads: {result.heads}</p><p className="coin-multi-tails">Tails: {result.tails}</p></div>}
        </div>
      )}

      {allTotal > 0 && (
        <div className="coin-stats">
          <p className="coin-stats-title">Session Stats ({allTotal} total)</p>
          <div className="coin-stats-row">
            <span>Heads: {allHeads} ({allTotal ? ((allHeads/allTotal)*100).toFixed(1) : 0}%)</span>
            <span>Tails: {allTails} ({allTotal ? ((allTails/allTotal)*100).toFixed(1) : 0}%)</span>
          </div>
          <div className="coin-bar"><div className="coin-bar-h" style={{width: allTotal ? (allHeads/allTotal*100)+"%" : "50%"}} /></div>
        </div>
      )}
    </div>
  );
}
