"use client";
import { useState, useMemo } from "react";

export default function DiscountCalc() {
  const [mode, setMode] = useState("pct"); // pct | final | savings
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result = useMemo(() => {
    const x = parseFloat(a), y = parseFloat(b);
    if (isNaN(x) || isNaN(y) || x <= 0 || y < 0) return null;
    if (mode === "pct") {
      // a = original price, b = discount %
      if (y > 100) return null;
      const savings = x * y / 100;
      return { original: x, savings, final: x - savings, pct: y };
    } else if (mode === "final") {
      // a = original, b = final price
      if (y > x) return null;
      const savings = x - y;
      return { original: x, savings, final: y, pct: (savings/x)*100 };
    } else {
      // a = original, b = savings amount
      if (y > x) return null;
      const final = x - y;
      return { original: x, savings: y, final, pct: (y/x)*100 };
    }
  }, [mode, a, b]);

  const modes = [
    { id: "pct", la: "Original Price ($)", lb: "Discount (%)" },
    { id: "final", la: "Original Price ($)", lb: "Final Price ($)" },
    { id: "savings", la: "Original Price ($)", lb: "Savings Amount ($)" },
  ];
  const cur = modes.find(m => m.id === mode);

  return (
    <div className="disccalc-wrap">
      <div className="disccalc-modes">
        {modes.map(m => (
          <button key={m.id} className={`disccalc-mode-btn${mode===m.id?" disccalc-mode-btn--on":""}`}
            onClick={() => { setMode(m.id); }}>
            {m.id === "pct" ? "% Off" : m.id === "final" ? "Final Price" : "Savings Amount"}
          </button>
        ))}
      </div>
      <div className="disccalc-fields">
        <div className="disccalc-field">
          <label className="disccalc-label">{cur.la}</label>
          <input className="disccalc-input" type="number" value={a} onChange={e=>setA(e.target.value)} placeholder="100" min="0" />
        </div>
        <div className="disccalc-field">
          <label className="disccalc-label">{cur.lb}</label>
          <input className="disccalc-input" type="number" value={b} onChange={e=>setB(e.target.value)} placeholder="20" min="0" />
        </div>
      </div>

      {result && (
        <div className="disccalc-result">
          <div className="disccalc-stat"><p className="disccalc-sv">${result.original.toFixed(2)}</p><p className="disccalc-sl">Original Price</p></div>
          <div className="disccalc-stat disccalc-stat--pct"><p className="disccalc-sv">{result.pct.toFixed(1)}%</p><p className="disccalc-sl">Discount</p></div>
          <div className="disccalc-stat disccalc-stat--savings"><p className="disccalc-sv">-${result.savings.toFixed(2)}</p><p className="disccalc-sl">You Save</p></div>
          <div className="disccalc-stat disccalc-stat--final"><p className="disccalc-sv">${result.final.toFixed(2)}</p><p className="disccalc-sl">Final Price</p></div>
        </div>
      )}
    </div>
  );
}
