"use client";
import { useState, useMemo } from "react";

function pad(n) { return String(n).padStart(2, "0"); }
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

export default function AgeCalc() {
  const [dob, setDob] = useState("");
  const [asOf, setAsOf] = useState(today());

  const result = useMemo(() => {
    if (!dob || !asOf) return null;
    const birth = new Date(dob), ref = new Date(asOf);
    if (isNaN(birth) || isNaN(ref) || birth > ref) return null;

    let y = ref.getFullYear() - birth.getFullYear();
    let m = ref.getMonth() - birth.getMonth();
    let d = ref.getDate() - birth.getDate();
    if (d < 0) { m--; const prev = new Date(ref.getFullYear(), ref.getMonth(), 0); d += prev.getDate(); }
    if (m < 0) { y--; m += 12; }

    const totalDays = Math.floor((ref - birth) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = y * 12 + m;
    const nextBday = new Date(ref.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday <= ref) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysToNext = Math.ceil((nextBday - ref) / 86400000);

    return { y, m, d, totalDays, totalWeeks, totalMonths, daysToNext };
  }, [dob, asOf]);

  return (
    <div className="agecalc-wrap">
      <div className="agecalc-fields">
        <div className="agecalc-field">
          <label className="agecalc-label">Date of Birth</label>
          <input className="agecalc-input" type="date" value={dob} onChange={e=>setDob(e.target.value)} max={today()} />
        </div>
        <div className="agecalc-field">
          <label className="agecalc-label">Age as of</label>
          <input className="agecalc-input" type="date" value={asOf} onChange={e=>setAsOf(e.target.value)} />
        </div>
      </div>

      {result && (
        <div className="agecalc-result">
          <div className="agecalc-main">
            <span className="agecalc-yr">{result.y}</span><span className="agecalc-unit">yr</span>
            <span className="agecalc-mo">{result.m}</span><span className="agecalc-unit">mo</span>
            <span className="agecalc-dy">{result.d}</span><span className="agecalc-unit">days</span>
          </div>
          <div className="agecalc-stats">
            <div className="agecalc-stat"><p className="agecalc-sv">{result.totalDays.toLocaleString()}</p><p className="agecalc-sl">Total Days</p></div>
            <div className="agecalc-stat"><p className="agecalc-sv">{result.totalWeeks.toLocaleString()}</p><p className="agecalc-sl">Total Weeks</p></div>
            <div className="agecalc-stat"><p className="agecalc-sv">{result.totalMonths.toLocaleString()}</p><p className="agecalc-sl">Total Months</p></div>
            <div className="agecalc-stat"><p className="agecalc-sv">{result.daysToNext}</p><p className="agecalc-sl">Days to next birthday</p></div>
          </div>
        </div>
      )}
      {dob && asOf && !result && <p className="agecalc-error">Date of birth must be before the reference date.</p>}
    </div>
  );
}
