"use client";
import { useState, useMemo } from "react";

const CATEGORIES = [
  { label: "Underweight", max: 18.5, color: "#60a5fa" },
  { label: "Normal weight", max: 25, color: "#34d399" },
  { label: "Overweight", max: 30, color: "#fbbf24" },
  { label: "Obese", max: Infinity, color: "#f87171" },
];

function getCategory(bmi) {
  return CATEGORIES.find(c => bmi < c.max);
}

export default function BmiCalc() {
  const [unit, setUnit] = useState("metric"); // metric | imperial
  const [height, setHeight] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");

  const result = useMemo(() => {
    if (unit === "metric") {
      const h = parseFloat(height) / 100, w = parseFloat(weight);
      if (!h || !w || h <= 0 || w <= 0) return null;
      const bmi = w / (h * h);
      return { bmi, cat: getCategory(bmi) };
    } else {
      const ft = parseFloat(height) || 0, inch = parseFloat(heightIn) || 0;
      const totalIn = ft * 12 + inch;
      const w = parseFloat(weight);
      if (!totalIn || !w || totalIn <= 0 || w <= 0) return null;
      const bmi = (w / (totalIn * totalIn)) * 703;
      return { bmi, cat: getCategory(bmi) };
    }
  }, [unit, height, heightIn, weight]);

  const pct = result ? Math.min(100, Math.max(0, ((result.bmi - 10) / (45 - 10)) * 100)) : 0;

  return (
    <div className="bmicalc-wrap">
      <div className="bmicalc-units">
        {[["metric","Metric (cm / kg)"],["imperial","Imperial (ft·in / lb)"]].map(([v,l]) => (
          <button key={v} className={`bmicalc-unit-btn${unit===v?" bmicalc-unit-btn--on":""}`}
            onClick={() => { setUnit(v); }}>{l}</button>
        ))}
      </div>

      <div className="bmicalc-fields">
        {unit === "metric" ? (
          <div className="bmicalc-field">
            <label className="bmicalc-label">Height (cm)</label>
            <input className="bmicalc-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="170" />
          </div>
        ) : (
          <div className="bmicalc-field-row">
            <div className="bmicalc-field">
              <label className="bmicalc-label">Feet</label>
              <input className="bmicalc-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="5" />
            </div>
            <div className="bmicalc-field">
              <label className="bmicalc-label">Inches</label>
              <input className="bmicalc-input" type="number" value={heightIn} onChange={e=>setHeightIn(e.target.value)} placeholder="10" />
            </div>
          </div>
        )}
        <div className="bmicalc-field">
          <label className="bmicalc-label">{unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}</label>
          <input className="bmicalc-input" type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==="metric"?"70":"154"} />
        </div>
      </div>

      {result && (
        <div className="bmicalc-result">
          <div className="bmicalc-bmi-num" style={{ color: result.cat.color }}>{result.bmi.toFixed(1)}</div>
          <div className="bmicalc-bmi-cat" style={{ color: result.cat.color }}>{result.cat.label}</div>
          <div className="bmicalc-bar-track">
            <div className="bmicalc-bar-fill" style={{ width: pct+"%", background: result.cat.color }} />
          </div>
          <div className="bmicalc-range-labels">
            <span>10</span><span>18.5</span><span>25</span><span>30</span><span>45</span>
          </div>
          <div className="bmicalc-cats">
            {CATEGORIES.map(c => (
              <span key={c.label} className="bmicalc-cat-pill" style={{ background: c.color+"22", color: c.color, border: `1px solid ${c.color}44` }}>{c.label}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
