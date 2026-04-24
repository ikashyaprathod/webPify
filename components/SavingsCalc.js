"use client";
import { useState, useMemo } from "react";

function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function SavingsCalc() {
  const [goal, setGoal] = useState("10000");
  const [current, setCurrent] = useState("0");
  const [monthly, setMonthly] = useState("200");
  const [rate, setRate] = useState("4");

  const result = useMemo(() => {
    const G = parseFloat(goal), C = parseFloat(current) || 0;
    const M = parseFloat(monthly), r = parseFloat(rate) / 100 / 12;
    if (!G || G <= 0 || !M || M <= 0 || isNaN(r)) return null;
    const needed = G - C;
    if (needed <= 0) return { months: 0, years: 0, totalContrib: C, interest: C - C, finalBalance: C };
    // months to reach goal: solve FV = C*(1+r)^n + M*((1+r)^n - 1)/r >= G
    let months = 0;
    let bal = C;
    while (bal < G && months < 1200) {
      bal = bal * (1 + r) + M;
      months++;
    }
    const totalContrib = C + M * months;
    const interest = bal - totalContrib;
    return { months, years: Math.floor(months / 12), remMonths: months % 12, totalContrib, interest, finalBalance: bal };
  }, [goal, current, monthly, rate]);

  return (
    <div className="savecalc-wrap">
      <div className="savecalc-fields">
        <div className="savecalc-field"><label className="savecalc-label">Savings Goal ($)</label><input className="savecalc-input" type="number" value={goal} onChange={e=>setGoal(e.target.value)} min="0" /></div>
        <div className="savecalc-field"><label className="savecalc-label">Current Savings ($)</label><input className="savecalc-input" type="number" value={current} onChange={e=>setCurrent(e.target.value)} min="0" /></div>
        <div className="savecalc-field"><label className="savecalc-label">Monthly Contribution ($)</label><input className="savecalc-input" type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} min="1" /></div>
        <div className="savecalc-field"><label className="savecalc-label">Annual Interest Rate (%)</label><input className="savecalc-input" type="number" value={rate} onChange={e=>setRate(e.target.value)} min="0" step="0.1" /></div>
      </div>
      {result && (
        <div className="savecalc-results">
          {result.months === 0
            ? <p className="savecalc-done">You have already reached your goal! 🎉</p>
            : <>
                <div className="savecalc-stat savecalc-stat--main"><p className="savecalc-sv">{result.years > 0 ? `${result.years}y ${result.remMonths}m` : `${result.months} months`}</p><p className="savecalc-sl">Time to Goal</p></div>
                <div className="savecalc-stat"><p className="savecalc-sv">${fmt(result.totalContrib)}</p><p className="savecalc-sl">Total Contributed</p></div>
                <div className="savecalc-stat savecalc-stat--int"><p className="savecalc-sv">${fmt(result.interest)}</p><p className="savecalc-sl">Interest Earned</p></div>
                <div className="savecalc-stat"><p className="savecalc-sv">${fmt(result.finalBalance)}</p><p className="savecalc-sl">Final Balance</p></div>
              </>}
        </div>
      )}
    </div>
  );
}
