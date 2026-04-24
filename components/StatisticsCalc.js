"use client";
import { useState, useMemo } from "react";

function calcStats(nums) {
  if (!nums.length) return null;
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const median = n % 2 === 0 ? (sorted[n/2-1] + sorted[n/2]) / 2 : sorted[Math.floor(n/2)];
  // mode
  const freq = {};
  nums.forEach(x => { freq[x] = (freq[x] || 0) + 1; });
  const maxFreq = Math.max(...Object.values(freq));
  const modes = Object.keys(freq).filter(k => freq[k] === maxFreq).map(Number);
  const mode = maxFreq === 1 ? "None" : modes.join(", ");
  const variance = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
  const popStdDev = Math.sqrt(variance);
  const sampleStdDev = n > 1 ? Math.sqrt(nums.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1)) : 0;
  const range = sorted[n-1] - sorted[0];
  const q1 = sorted[Math.floor(n/4)];
  const q3 = sorted[Math.floor(3*n/4)];
  return { n, sum, mean, median, mode, variance, popStdDev, sampleStdDev, range, min: sorted[0], max: sorted[n-1], q1, q3 };
}

function fmt(n) { return typeof n === "number" ? parseFloat(n.toPrecision(8)).toString() : n; }

export default function StatisticsCalc() {
  const [input, setInput] = useState("4, 7, 13, 2, 1, 7, 3");
  const [error, setError] = useState("");

  const stats = useMemo(() => {
    setError("");
    const nums = input.split(/[\s,;]+/).filter(Boolean).map(Number);
    if (nums.some(isNaN)) { setError("Enter numbers separated by commas or spaces."); return null; }
    if (nums.length < 1) return null;
    return calcStats(nums);
  }, [input]);

  const rows = stats ? [
    { label: "Count (n)", val: stats.n },
    { label: "Sum", val: fmt(stats.sum) },
    { label: "Mean (average)", val: fmt(stats.mean) },
    { label: "Median", val: fmt(stats.median) },
    { label: "Mode", val: stats.mode },
    { label: "Min", val: fmt(stats.min) },
    { label: "Max", val: fmt(stats.max) },
    { label: "Range", val: fmt(stats.range) },
    { label: "Q1 (25th percentile)", val: fmt(stats.q1) },
    { label: "Q3 (75th percentile)", val: fmt(stats.q3) },
    { label: "Population Variance (σ²)", val: fmt(stats.variance) },
    { label: "Population Std Dev (σ)", val: fmt(stats.popStdDev) },
    { label: "Sample Std Dev (s)", val: fmt(stats.sampleStdDev) },
  ] : [];

  return (
    <div className="statcalc-wrap">
      <label className="statcalc-label">Enter numbers (comma or space separated)</label>
      <textarea className="statcalc-textarea" value={input} onChange={e=>setInput(e.target.value)} placeholder="e.g. 4, 7, 13, 2, 1, 7, 3" rows={3} />
      {error && <p className="statcalc-error">{error}</p>}
      {stats && (
        <div className="statcalc-results">
          {rows.map(r => (
            <div key={r.label} className="statcalc-row">
              <span className="statcalc-row-label">{r.label}</span>
              <span className="statcalc-row-val">{String(r.val)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
