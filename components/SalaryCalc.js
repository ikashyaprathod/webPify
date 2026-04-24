"use client";
import { useState, useMemo } from "react";

function fmt(n) { return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function SalaryCalc() {
  const [mode, setMode] = useState("hourly"); // hourly | annual
  const [value, setValue] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const result = useMemo(() => {
    const v = parseFloat(value), hpw = parseFloat(hoursPerWeek) || 40, wpy = parseFloat(weeksPerYear) || 52;
    if (isNaN(v) || v < 0) return null;
    const hourly = mode === "hourly" ? v : v / (hpw * wpy);
    const daily = hourly * 8;
    const weekly = hourly * hpw;
    const biweekly = weekly * 2;
    const monthly = (hourly * hpw * wpy) / 12;
    const annual = hourly * hpw * wpy;
    return { hourly, daily, weekly, biweekly, monthly, annual };
  }, [mode, value, hoursPerWeek, weeksPerYear]);

  const rows = result ? [
    { label: "Hourly", val: result.hourly },
    { label: "Daily (8h)", val: result.daily },
    { label: "Weekly", val: result.weekly },
    { label: "Bi-weekly", val: result.biweekly },
    { label: "Monthly", val: result.monthly },
    { label: "Annual", val: result.annual },
  ] : [];

  return (
    <div className="salcalc-wrap">
      <div className="salcalc-modes">
        <button className={`salcalc-mode-btn${mode==="hourly"?" salcalc-mode-btn--on":""}`} onClick={()=>setMode("hourly")}>Hourly Rate → Annual</button>
        <button className={`salcalc-mode-btn${mode==="annual"?" salcalc-mode-btn--on":""}`} onClick={()=>setMode("annual")}>Annual Salary → Hourly</button>
      </div>
      <div className="salcalc-fields">
        <div className="salcalc-field">
          <label className="salcalc-label">{mode === "hourly" ? "Hourly Rate ($)" : "Annual Salary ($)"}</label>
          <input className="salcalc-input" type="number" value={value} onChange={e=>setValue(e.target.value)} min="0" step="0.01" />
        </div>
        <div className="salcalc-field">
          <label className="salcalc-label">Hours per Week</label>
          <input className="salcalc-input" type="number" value={hoursPerWeek} onChange={e=>setHoursPerWeek(e.target.value)} min="1" max="168" />
        </div>
        <div className="salcalc-field">
          <label className="salcalc-label">Weeks per Year</label>
          <input className="salcalc-input" type="number" value={weeksPerYear} onChange={e=>setWeeksPerYear(e.target.value)} min="1" max="52" />
        </div>
      </div>
      {result && (
        <div className="salcalc-results">
          {rows.map(r => (
            <div key={r.label} className="salcalc-row">
              <span className="salcalc-row-label">{r.label}</span>
              <span className="salcalc-row-val">${fmt(r.val)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
