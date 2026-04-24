"use client";
import { useState, useMemo } from "react";

function gcd(a, b) { return b === 0 ? Math.abs(a) : gcd(b, a % b); }
function simplify(n, d) {
  if (d === 0) return { n: NaN, d: 0 };
  const g = gcd(Math.abs(n), Math.abs(d));
  const sign = d < 0 ? -1 : 1;
  return { n: sign * n / g, d: sign * Math.abs(d) / g };
}
function fmtFrac({ n, d }) {
  if (!isFinite(n)) return "Undefined";
  if (d === 1) return String(n);
  if (n === 0) return "0";
  const whole = Math.trunc(n / d);
  const rem = n % d;
  return whole !== 0 ? `${whole} ${Math.abs(rem)}/${d}` : `${n}/${d}`;
}

const OPS = ["+", "−", "×", "÷"];

export default function FractionCalc() {
  const [n1, setN1] = useState("1"); const [d1, setD1] = useState("2");
  const [n2, setN2] = useState("1"); const [d2, setD2] = useState("3");
  const [op, setOp] = useState("+");

  const result = useMemo(() => {
    const a = parseInt(n1), b = parseInt(d1), c = parseInt(n2), d = parseInt(d2);
    if ([a,b,c,d].some(isNaN)) return null;
    if (b === 0 || d === 0) return { error: "Denominator cannot be zero." };
    let rn, rd;
    if (op === "+") { rn = a*d + c*b; rd = b*d; }
    else if (op === "−") { rn = a*d - c*b; rd = b*d; }
    else if (op === "×") { rn = a*c; rd = b*d; }
    else { if (c === 0) return { error: "Cannot divide by zero." }; rn = a*d; rd = b*c; }
    const s = simplify(rn, rd);
    return { frac: s, decimal: s.n / s.d };
  }, [n1, d1, n2, d2, op]);

  const input = (val, setVal, placeholder) => (
    <input className="fraccalc-input" type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder={placeholder} />
  );

  return (
    <div className="fraccalc-wrap">
      <div className="fraccalc-row">
        <div className="fraccalc-frac">
          {input(n1, setN1, "1")}
          <div className="fraccalc-line" />
          {input(d1, setD1, "2")}
        </div>
        <div className="fraccalc-ops">
          {OPS.map(o => (
            <button key={o} className={`fraccalc-op${op===o?" fraccalc-op--on":""}`} onClick={()=>setOp(o)}>{o}</button>
          ))}
        </div>
        <div className="fraccalc-frac">
          {input(n2, setN2, "1")}
          <div className="fraccalc-line" />
          {input(d2, setD2, "3")}
        </div>
        <span className="fraccalc-eq">=</span>
        <div className="fraccalc-result-box">
          {result?.error
            ? <span className="fraccalc-err">{result.error}</span>
            : result
              ? <><span className="fraccalc-res-frac">{fmtFrac(result.frac)}</span><span className="fraccalc-res-dec">≈ {isFinite(result.decimal) ? result.decimal.toFixed(6).replace(/\.?0+$/,"") : "∞"}</span></>
              : <span className="fraccalc-placeholder">?</span>}
        </div>
      </div>
    </div>
  );
}
