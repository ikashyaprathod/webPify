"use client";
import { useState, useMemo } from "react";

const PRESETS = [5, 10, 15, 20, 23, 25];

export default function VatCalc() {
  const [mode, setMode] = useState("add"); // add | remove
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState(20);
  const [customRate, setCustomRate] = useState("");

  const effectiveRate = customRate !== "" ? parseFloat(customRate) : vatRate;

  const result = useMemo(() => {
    const a = parseFloat(amount), r = parseFloat(effectiveRate);
    if (isNaN(a) || a <= 0 || isNaN(r) || r < 0) return null;
    if (mode === "add") {
      const vatAmt = a * r / 100;
      return { net: a, vat: vatAmt, gross: a + vatAmt, rate: r };
    } else {
      const net = a / (1 + r / 100);
      const vatAmt = a - net;
      return { net, vat: vatAmt, gross: a, rate: r };
    }
  }, [amount, effectiveRate, mode]);

  function fmt(n) { return n.toFixed(2); }

  return (
    <div className="vatcalc-wrap">
      <div className="vatcalc-modes">
        <button className={`vatcalc-mode-btn${mode==="add"?" vatcalc-mode-btn--on":""}`} onClick={() => setMode("add")}>Add VAT</button>
        <button className={`vatcalc-mode-btn${mode==="remove"?" vatcalc-mode-btn--on":""}`} onClick={() => setMode("remove")}>Remove VAT</button>
      </div>
      <div className="vatcalc-fields">
        <div className="vatcalc-field">
          <label className="vatcalc-label">{mode === "add" ? "Net Amount (excl. VAT)" : "Gross Amount (incl. VAT)"}</label>
          <input className="vatcalc-input" type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="100.00" min="0" step="0.01" />
        </div>
      </div>
      <div className="vatcalc-rate-row">
        <span className="vatcalc-rate-label">VAT Rate</span>
        <div className="vatcalc-presets">
          {PRESETS.map(p => (
            <button key={p} className={`vatcalc-preset${effectiveRate===p&&customRate===""?" vatcalc-preset--on":""}`}
              onClick={() => { setCustomRate(""); setVatRate(p); }}>{p}%</button>
          ))}
        </div>
        <input className="vatcalc-custom" type="number" value={customRate} onChange={e=>setCustomRate(e.target.value)} placeholder="Custom %" min="0" max="100" />
      </div>

      {result && (
        <div className="vatcalc-result">
          <div className="vatcalc-stat"><p className="vatcalc-sv">${fmt(result.net)}</p><p className="vatcalc-sl">Net (excl. VAT)</p></div>
          <div className="vatcalc-stat vatcalc-stat--vat"><p className="vatcalc-sv">${fmt(result.vat)}</p><p className="vatcalc-sl">VAT ({result.rate}%)</p></div>
          <div className="vatcalc-stat vatcalc-stat--gross"><p className="vatcalc-sv">${fmt(result.gross)}</p><p className="vatcalc-sl">Gross (incl. VAT)</p></div>
        </div>
      )}
    </div>
  );
}
