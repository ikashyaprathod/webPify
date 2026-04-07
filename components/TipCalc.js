"use client";
import { useState, useMemo } from "react";

const TIP_PRESETS = [10, 15, 18, 20, 25];

export default function TipCalc() {
  const [bill, setBill] = useState("50");
  const [tipPct, setTipPct] = useState(18);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("2");

  const effectiveTip = customTip !== "" ? parseFloat(customTip) : tipPct;

  const result = useMemo(() => {
    const b = parseFloat(bill), t = parseFloat(effectiveTip), n = parseInt(people) || 1;
    if (isNaN(b) || b <= 0 || isNaN(t) || t < 0) return null;
    const tipAmt = b * t / 100;
    const total = b + tipAmt;
    return { tipAmt, total, perPerson: total / n, tipPerPerson: tipAmt / n, n };
  }, [bill, effectiveTip, people]);

  function fmt(n) { return "$" + (isNaN(n) ? "—" : n.toFixed(2)); }

  return (
    <div className="tipcalc-wrap">
      <div className="tipcalc-fields">
        <div className="tipcalc-field">
          <label className="tipcalc-label">Bill Amount ($)</label>
          <input className="tipcalc-input" type="number" value={bill} onChange={e=>setBill(e.target.value)} min="0" step="0.01" />
        </div>
        <div className="tipcalc-field">
          <label className="tipcalc-label">Number of People</label>
          <input className="tipcalc-input" type="number" value={people} onChange={e=>setPeople(e.target.value)} min="1" max="100" />
        </div>
      </div>

      <div className="tipcalc-tip-row">
        <span className="tipcalc-tip-label">Tip %</span>
        <div className="tipcalc-presets">
          {TIP_PRESETS.map(p => (
            <button key={p} className={`tipcalc-preset${effectiveTip===p&&customTip===""?" tipcalc-preset--on":""}`}
              onClick={() => { setCustomTip(""); setTipPct(p); }}>{p}%</button>
          ))}
        </div>
        <input className="tipcalc-custom" type="number" value={customTip} onChange={e=>setCustomTip(e.target.value)} placeholder="Custom %" min="0" max="100" />
      </div>

      {result && (
        <div className="tipcalc-result">
          <div className="tipcalc-stat"><p className="tipcalc-sv">{fmt(result.tipAmt)}</p><p className="tipcalc-sl">Tip Amount</p></div>
          <div className="tipcalc-stat tipcalc-stat--total"><p className="tipcalc-sv">{fmt(result.total)}</p><p className="tipcalc-sl">Total</p></div>
          {result.n > 1 && <>
            <div className="tipcalc-stat"><p className="tipcalc-sv">{fmt(result.tipPerPerson)}</p><p className="tipcalc-sl">Tip / Person</p></div>
            <div className="tipcalc-stat tipcalc-stat--total"><p className="tipcalc-sv">{fmt(result.perPerson)}</p><p className="tipcalc-sl">Total / Person</p></div>
          </>}
        </div>
      )}
    </div>
  );
}
