"use client";
import { useState, useMemo } from "react";

function fmt(n, d=2) { return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }); }

export default function RoiCalc() {
  const [cost, setCost] = useState("10000");
  const [gain, setGain] = useState("13500");
  const [years, setYears] = useState("3");

  const result = useMemo(() => {
    const c = parseFloat(cost), g = parseFloat(gain), y = parseFloat(years);
    if (!c || c <= 0 || isNaN(g) || g < 0) return null;
    const netProfit = g - c;
    const roi = (netProfit / c) * 100;
    const annualizedRoi = y > 0 ? (Math.pow(g / c, 1 / y) - 1) * 100 : null;
    return { netProfit, roi, annualizedRoi, c, g, y };
  }, [cost, gain, years]);

  return (
    <div className="roicalc-wrap">
      <div className="roicalc-fields">
        <div className="roicalc-field">
          <label className="roicalc-label">Initial Investment ($)</label>
          <input className="roicalc-input" type="number" value={cost} onChange={e=>setCost(e.target.value)} min="0" />
        </div>
        <div className="roicalc-field">
          <label className="roicalc-label">Final Value / Return ($)</label>
          <input className="roicalc-input" type="number" value={gain} onChange={e=>setGain(e.target.value)} min="0" />
        </div>
        <div className="roicalc-field">
          <label className="roicalc-label">Time Period (years, for annualized ROI)</label>
          <input className="roicalc-input" type="number" value={years} onChange={e=>setYears(e.target.value)} min="0.1" step="0.5" />
        </div>
      </div>

      {result && (
        <div className="roicalc-results">
          <div className={`roicalc-stat roicalc-stat--roi${result.roi>=0?" roicalc-pos":" roicalc-neg"}`}>
            <p className="roicalc-sv">{result.roi >= 0 ? "+" : ""}{fmt(result.roi, 2)}%</p>
            <p className="roicalc-sl">Total ROI</p>
          </div>
          <div className={`roicalc-stat${result.netProfit>=0?" roicalc-pos":" roicalc-neg"}`}>
            <p className="roicalc-sv">{result.netProfit >= 0 ? "+$" : "-$"}{fmt(Math.abs(result.netProfit))}</p>
            <p className="roicalc-sl">Net Profit / Loss</p>
          </div>
          {result.annualizedRoi != null && (
            <div className={`roicalc-stat${result.annualizedRoi>=0?" roicalc-pos":" roicalc-neg"}`}>
              <p className="roicalc-sv">{result.annualizedRoi >= 0 ? "+" : ""}{fmt(result.annualizedRoi, 2)}%</p>
              <p className="roicalc-sl">Annualized ROI (CAGR)</p>
            </div>
          )}
          <div className="roicalc-stat">
            <p className="roicalc-sv">{fmt(result.g / result.c, 2)}x</p>
            <p className="roicalc-sl">Return Multiple</p>
          </div>
        </div>
      )}
    </div>
  );
}
