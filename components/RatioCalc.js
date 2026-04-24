"use client";
import { useState, useMemo } from "react";

function gcd(a, b) { return b === 0 ? Math.abs(a) : gcd(b, a % b); }

export default function RatioCalc() {
  const [mode, setMode] = useState("simplify"); // simplify | scale | missing
  const [a, setA] = useState(""); const [b, setB] = useState("");
  const [c, setC] = useState(""); const [scale, setScale] = useState("2");

  const result = useMemo(() => {
    const av = parseFloat(a), bv = parseFloat(b), cv = parseFloat(c), sv = parseFloat(scale);
    if (mode === "simplify") {
      if (!av || !bv || av <= 0 || bv <= 0) return null;
      const g = gcd(Math.round(av * 1e9), Math.round(bv * 1e9));
      const rA = (av * 1e9 / g), rB = (bv * 1e9 / g);
      return { simplified: `${parseFloat(rA.toPrecision(6))} : ${parseFloat(rB.toPrecision(6))}`, decimal: (av / bv).toFixed(6).replace(/\.?0+$/, ""), pct: ((av / (av + bv)) * 100).toFixed(1) };
    } else if (mode === "scale") {
      if (!av || !bv || av <= 0 || bv <= 0 || !sv || sv <= 0) return null;
      return { scaledA: (av * sv).toFixed(4).replace(/\.?0+$/,""), scaledB: (bv * sv).toFixed(4).replace(/\.?0+$/,""), factor: sv };
    } else {
      // find missing: a : b = c : ?
      if (!av || !bv || !cv || av <= 0 || bv <= 0 || cv <= 0) return null;
      const d = (bv * cv) / av;
      return { missing: d.toFixed(6).replace(/\.?0+$/,""), expr: `${av} : ${bv} = ${cv} : ${d.toFixed(6).replace(/\.?0+$/,"")}` };
    }
  }, [mode, a, b, c, scale]);

  return (
    <div className="ratiocalc-wrap">
      <div className="ratiocalc-modes">
        {[["simplify","Simplify Ratio"],["scale","Scale Ratio"],["missing","Find Missing"]].map(([id,lbl]) => (
          <button key={id} className={`ratiocalc-mode-btn${mode===id?" ratiocalc-mode-btn--on":""}`} onClick={()=>setMode(id)}>{lbl}</button>
        ))}
      </div>
      <div className="ratiocalc-inputs">
        <input className="ratiocalc-input" type="number" value={a} onChange={e=>setA(e.target.value)} placeholder="A" />
        <span className="ratiocalc-colon">:</span>
        <input className="ratiocalc-input" type="number" value={b} onChange={e=>setB(e.target.value)} placeholder="B" />
        {mode === "scale" && <><span className="ratiocalc-colon">×</span><input className="ratiocalc-input" type="number" value={scale} onChange={e=>setScale(e.target.value)} placeholder="Factor" /></>}
        {mode === "missing" && <><span className="ratiocalc-colon">=</span><input className="ratiocalc-input" type="number" value={c} onChange={e=>setC(e.target.value)} placeholder="C" /><span className="ratiocalc-colon">: ?</span></>}
      </div>
      {result && (
        <div className="ratiocalc-result">
          {mode === "simplify" && <><p className="ratiocalc-rv">Simplified: <strong>{result.simplified}</strong></p><p className="ratiocalc-rv">Decimal: {result.decimal} &nbsp;|&nbsp; A is {result.pct}% of total</p></>}
          {mode === "scale" && <p className="ratiocalc-rv">Scaled: <strong>{result.scaledA} : {result.scaledB}</strong> (×{result.factor})</p>}
          {mode === "missing" && <p className="ratiocalc-rv"><strong>{result.expr}</strong></p>}
        </div>
      )}
    </div>
  );
}
