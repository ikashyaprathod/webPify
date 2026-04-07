"use client";
import { useState, useMemo } from "react";

function pad(n) { return String(n).padStart(2,"0"); }
function today() { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }

export default function DateDiff() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState(today());

  const result = useMemo(() => {
    if (!from || !to) return null;
    const a = new Date(from), b = new Date(to);
    if (isNaN(a) || isNaN(b)) return null;
    const [start, end, neg] = a <= b ? [a, b, false] : [b, a, true];

    const totalDays = Math.round(Math.abs(b - a) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const remDays = totalDays % 7;

    let y = end.getFullYear() - start.getFullYear();
    let mo = end.getMonth() - start.getMonth();
    let d = end.getDate() - start.getDate();
    if (d < 0) { mo--; const prev = new Date(end.getFullYear(), end.getMonth(), 0); d += prev.getDate(); }
    if (mo < 0) { y--; mo += 12; }

    const totalMonths = y * 12 + mo;
    const businessDays = (() => {
      let cnt = 0, cur = new Date(start);
      while (cur < end) { const day = cur.getDay(); if (day !== 0 && day !== 6) cnt++; cur.setDate(cur.getDate()+1); }
      return cnt;
    })();

    return { totalDays, totalWeeks, remDays, y, mo, d, totalMonths, businessDays, neg };
  }, [from, to]);

  return (
    <div className="ddiff-wrap">
      <div className="ddiff-fields">
        <div className="ddiff-field">
          <label className="ddiff-label">Start Date</label>
          <input className="ddiff-input" type="date" value={from} onChange={e=>setFrom(e.target.value)} />
        </div>
        <div className="ddiff-field">
          <label className="ddiff-label">End Date</label>
          <input className="ddiff-input" type="date" value={to} onChange={e=>setTo(e.target.value)} />
        </div>
      </div>

      {result && (
        <div className="ddiff-result">
          {result.neg && <p className="ddiff-note">Note: Start is after end — showing absolute difference.</p>}
          <div className="ddiff-main">
            <span className="ddiff-num">{result.y}</span><span className="ddiff-unit">yr</span>
            <span className="ddiff-num">{result.mo}</span><span className="ddiff-unit">mo</span>
            <span className="ddiff-num">{result.d}</span><span className="ddiff-unit">days</span>
          </div>
          <div className="ddiff-stats">
            <div className="ddiff-stat"><p className="ddiff-sv">{result.totalDays.toLocaleString()}</p><p className="ddiff-sl">Calendar Days</p></div>
            <div className="ddiff-stat"><p className="ddiff-sv">{result.totalWeeks} wk {result.remDays} d</p><p className="ddiff-sl">Weeks + Days</p></div>
            <div className="ddiff-stat"><p className="ddiff-sv">{result.totalMonths}</p><p className="ddiff-sl">Total Months</p></div>
            <div className="ddiff-stat"><p className="ddiff-sv">{result.businessDays.toLocaleString()}</p><p className="ddiff-sl">Business Days</p></div>
          </div>
        </div>
      )}
      {(!from || !to) && <p className="ddiff-hint">Select both dates to calculate the difference.</p>}
    </div>
  );
}
