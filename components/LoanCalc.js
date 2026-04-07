"use client";
import { useState, useMemo } from "react";

function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function LoanCalc() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");
  const [showTable, setShowTable] = useState(false);

  const result = useMemo(() => {
    const P = parseFloat(principal), r = parseFloat(rate) / 100 / 12, n = parseInt(years) * 12;
    if (!P || P <= 0 || isNaN(r) || n <= 0 || isNaN(n)) return null;
    if (r === 0) {
      const monthly = P / n;
      return { monthly, total: P, interest: 0, n, P };
    }
    const monthly = P * (r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
    const total = monthly * n;
    return { monthly, total, interest: total - P, n, P, r };
  }, [principal, rate, years]);

  const schedule = useMemo(() => {
    if (!result || !showTable) return [];
    let balance = result.P;
    const rows = [];
    for (let i = 1; i <= result.n; i++) {
      const intPmt = result.r ? balance * result.r : 0;
      const prinPmt = result.monthly - intPmt;
      balance -= prinPmt;
      rows.push({ i, monthly: result.monthly, intPmt, prinPmt, balance: Math.max(0, balance) });
    }
    return rows;
  }, [result, showTable]);

  return (
    <div className="loancalc-wrap">
      <div className="loancalc-fields">
        <div className="loancalc-field">
          <label className="loancalc-label">Loan Amount ($)</label>
          <input className="loancalc-input" type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} min="1" />
        </div>
        <div className="loancalc-field">
          <label className="loancalc-label">Annual Interest Rate (%)</label>
          <input className="loancalc-input" type="number" value={rate} onChange={e=>setRate(e.target.value)} min="0" step="0.1" />
        </div>
        <div className="loancalc-field">
          <label className="loancalc-label">Loan Term (years)</label>
          <input className="loancalc-input" type="number" value={years} onChange={e=>setYears(e.target.value)} min="1" max="50" />
        </div>
      </div>

      {result && (
        <div className="loancalc-results">
          <div className="loancalc-stat">
            <p className="loancalc-stat-label">Monthly Payment</p>
            <p className="loancalc-stat-value">${fmt(result.monthly)}</p>
          </div>
          <div className="loancalc-stat">
            <p className="loancalc-stat-label">Total Payment</p>
            <p className="loancalc-stat-value">${fmt(result.total)}</p>
          </div>
          <div className="loancalc-stat">
            <p className="loancalc-stat-label">Total Interest</p>
            <p className="loancalc-stat-value loancalc-interest">${fmt(result.interest)}</p>
          </div>
          <div className="loancalc-stat">
            <p className="loancalc-stat-label">Principal</p>
            <p className="loancalc-stat-value">${fmt(result.P)}</p>
          </div>
        </div>
      )}

      {result && (
        <button className="loancalc-table-btn" onClick={() => setShowTable(s => !s)}>
          {showTable ? "Hide" : "Show"} Amortization Schedule
        </button>
      )}

      {showTable && schedule.length > 0 && (
        <div className="loancalc-table-wrap">
          <table className="loancalc-table">
            <thead><tr><th>#</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead>
            <tbody>
              {schedule.map(r => (
                <tr key={r.i}>
                  <td>{r.i}</td>
                  <td>${fmt(r.monthly)}</td>
                  <td>${fmt(r.prinPmt)}</td>
                  <td>${fmt(r.intPmt)}</td>
                  <td>${fmt(r.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
