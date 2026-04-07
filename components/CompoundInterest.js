"use client";
import { useState, useMemo } from "react";

function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

const FREQ_OPTIONS = [
  { id: "1", label: "Annually", n: 1 },
  { id: "4", label: "Quarterly", n: 4 },
  { id: "12", label: "Monthly", n: 12 },
  { id: "365", label: "Daily", n: 365 },
];

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");
  const [freqId, setFreqId] = useState("12");
  const [monthly, setMonthly] = useState("0");

  const result = useMemo(() => {
    const P = parseFloat(principal), r = parseFloat(rate) / 100, t = parseFloat(years);
    const n = parseInt(freqId), m = parseFloat(monthly) || 0;
    if (!P || P < 0 || isNaN(r) || isNaN(t) || t <= 0) return null;

    // Future value with regular contributions (PMT per period)
    // FV = P*(1+r/n)^(nt) + PMT * [((1+r/n)^(nt) - 1) / (r/n)]
    const periods = n * t;
    const rPerPeriod = r / n;
    const growthFactor = Math.pow(1 + rPerPeriod, periods);
    // monthly contribution converted to per-period
    const pmtPerPeriod = m * (12 / n);
    const fv = P * growthFactor + (rPerPeriod > 0 ? pmtPerPeriod * (growthFactor - 1) / rPerPeriod : pmtPerPeriod * periods);
    const totalContrib = P + m * 12 * t;
    const interest = fv - totalContrib;

    // Year-by-year table
    const yearly = [];
    for (let y = 1; y <= Math.min(t, 50); y++) {
      const gf = Math.pow(1 + rPerPeriod, n * y);
      const fvy = P * gf + (rPerPeriod > 0 ? pmtPerPeriod * (gf - 1) / rPerPeriod : pmtPerPeriod * n * y);
      const contrib = P + m * 12 * y;
      yearly.push({ y, balance: fvy, interest: fvy - contrib });
    }
    return { fv, totalContrib, interest, yearly };
  }, [principal, rate, years, freqId, monthly]);

  return (
    <div className="cmpint-wrap">
      <div className="cmpint-fields">
        <div className="cmpint-field">
          <label className="cmpint-label">Initial Investment ($)</label>
          <input className="cmpint-input" type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} min="0" />
        </div>
        <div className="cmpint-field">
          <label className="cmpint-label">Annual Interest Rate (%)</label>
          <input className="cmpint-input" type="number" value={rate} onChange={e=>setRate(e.target.value)} min="0" step="0.1" />
        </div>
        <div className="cmpint-field">
          <label className="cmpint-label">Time Period (years)</label>
          <input className="cmpint-input" type="number" value={years} onChange={e=>setYears(e.target.value)} min="1" max="50" />
        </div>
        <div className="cmpint-field">
          <label className="cmpint-label">Monthly Contribution ($)</label>
          <input className="cmpint-input" type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} min="0" />
        </div>
      </div>

      <div className="cmpint-freq-row">
        <span className="cmpint-freq-label">Compound</span>
        {FREQ_OPTIONS.map(f => (
          <button key={f.id} className={`cmpint-freq-btn${freqId===f.id?" cmpint-freq-btn--on":""}`}
            onClick={() => setFreqId(f.id)}>{f.label}</button>
        ))}
      </div>

      {result && (
        <>
          <div className="cmpint-results">
            <div className="cmpint-stat cmpint-stat--fv"><p className="cmpint-sv">${fmt(result.fv)}</p><p className="cmpint-sl">Future Value</p></div>
            <div className="cmpint-stat"><p className="cmpint-sv">${fmt(result.totalContrib)}</p><p className="cmpint-sl">Total Invested</p></div>
            <div className="cmpint-stat cmpint-stat--int"><p className="cmpint-sv">${fmt(result.interest)}</p><p className="cmpint-sl">Interest Earned</p></div>
            <div className="cmpint-stat"><p className="cmpint-sv">{result.totalContrib > 0 ? ((result.fv/result.totalContrib - 1)*100).toFixed(1) : "0"}%</p><p className="cmpint-sl">Total Return</p></div>
          </div>

          <div className="cmpint-bar-row">
            <div className="cmpint-bar-seg" style={{ width: (result.totalContrib/result.fv*100)+"%" }}>Principal</div>
            <div className="cmpint-bar-seg cmpint-bar-seg--int" style={{ width: (result.interest/result.fv*100)+"%" }}>Interest</div>
          </div>

          {result.yearly.length > 0 && (
            <div className="cmpint-table-wrap">
              <table className="cmpint-table">
                <thead><tr><th>Year</th><th>Balance</th><th>Interest Earned</th></tr></thead>
                <tbody>
                  {result.yearly.map(r => (
                    <tr key={r.y}><td>{r.y}</td><td>${fmt(r.balance)}</td><td>${fmt(r.interest)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
