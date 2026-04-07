"use client";
import { useState } from "react";

export default function PercentageCalc() {
  const [mode, setMode] = useState("of"); // of | is | change
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  function calc() {
    const x = parseFloat(a), y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) { setResult({ error: "Enter valid numbers." }); return; }
    if (mode === "of") {
      setResult({ value: (x / 100) * y, label: `${x}% of ${y}` });
    } else if (mode === "is") {
      if (y === 0) { setResult({ error: "Denominator cannot be zero." }); return; }
      setResult({ value: (x / y) * 100, label: `${x} is what % of ${y}`, suffix: "%" });
    } else {
      if (x === 0) { setResult({ error: "Original value cannot be zero." }); return; }
      const chg = ((y - x) / Math.abs(x)) * 100;
      setResult({ value: chg, label: `% change from ${x} to ${y}`, suffix: "%", change: chg });
    }
  }

  const modes = [
    { id: "of", label: "X% of Y" },
    { id: "is", label: "X is what % of Y" },
    { id: "change", label: "% Change" },
  ];

  function getLabels() {
    if (mode === "of") return ["Percentage (%)", "Of what number?"];
    if (mode === "is") return ["X (numerator)", "Y (denominator)"];
    return ["Original value", "New value"];
  }
  const [la, lb] = getLabels();

  return (
    <div className="pctcalc-wrap">
      <div className="pctcalc-modes">
        {modes.map(m => (
          <button key={m.id} className={`pctcalc-mode-btn${mode===m.id?" pctcalc-mode-btn--on":""}`}
            onClick={() => { setMode(m.id); setResult(null); }}>{m.label}</button>
        ))}
      </div>
      <div className="pctcalc-fields">
        <div className="pctcalc-field">
          <label className="pctcalc-label">{la}</label>
          <input className="pctcalc-input" type="number" value={a} onChange={e=>setA(e.target.value)} placeholder="0" />
        </div>
        <div className="pctcalc-field">
          <label className="pctcalc-label">{lb}</label>
          <input className="pctcalc-input" type="number" value={b} onChange={e=>setB(e.target.value)} placeholder="0" />
        </div>
      </div>
      <button className="pctcalc-btn" onClick={calc}>Calculate</button>
      {result && (
        result.error
          ? <p className="pctcalc-error">{result.error}</p>
          : <div className="pctcalc-result">
              <p className="pctcalc-result-label">{result.label}</p>
              <p className={`pctcalc-result-value${result.change!=null?(result.change>=0?" pctcalc-pos":" pctcalc-neg"):""}`}>
                {result.change != null && (result.change >= 0 ? "▲ +" : "▼ ")}
                {typeof result.value === "number" ? result.value.toFixed(4).replace(/\.?0+$/, "") : result.value}
                {result.suffix || ""}
              </p>
            </div>
      )}
    </div>
  );
}
