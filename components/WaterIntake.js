"use client";
import { useState, useMemo } from "react";

export default function WaterIntake() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("70");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("temperate");

  const result = useMemo(() => {
    let wKg = parseFloat(weight);
    if (isNaN(wKg) || wKg <= 0) return null;
    if (unit === "imperial") wKg = wKg * 0.453592;
    // Base: 35ml per kg
    let base = wKg * 35;
    const activityAdd = { sedentary: 0, moderate: 350, active: 600, intense: 1000 }[activity] || 0;
    const climateAdd = { cold: -200, temperate: 0, warm: 300, hot: 600 }[climate] || 0;
    const total = base + activityAdd + climateAdd;
    return {
      ml: Math.round(total),
      liters: (total / 1000).toFixed(1),
      cups: Math.round(total / 237),
      oz: Math.round(total / 29.574),
    };
  }, [unit, weight, activity, climate]);

  return (
    <div className="water-wrap">
      <div className="water-toggles">
        {[["metric","Metric (kg)"],["imperial","Imperial (lbs)"]].map(([v,l]) => (
          <button key={v} className={`water-toggle-btn${unit===v?" water-toggle-btn--on":""}`} onClick={()=>setUnit(v)}>{l}</button>
        ))}
      </div>
      <div className="water-fields">
        <div className="water-field">
          <label className="water-label">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
          <input className="water-input" type="number" value={weight} onChange={e=>setWeight(e.target.value)} min="1" placeholder={unit==="metric"?"70":"154"} />
        </div>
        <div className="water-field">
          <label className="water-label">Activity Level</label>
          <select className="water-select" value={activity} onChange={e=>setActivity(e.target.value)}>
            <option value="sedentary">Sedentary (desk job)</option>
            <option value="moderate">Moderate (light exercise)</option>
            <option value="active">Active (regular workouts)</option>
            <option value="intense">Intense (daily hard training)</option>
          </select>
        </div>
        <div className="water-field">
          <label className="water-label">Climate</label>
          <select className="water-select" value={climate} onChange={e=>setClimate(e.target.value)}>
            <option value="cold">Cold</option>
            <option value="temperate">Temperate</option>
            <option value="warm">Warm</option>
            <option value="hot">Hot / Humid</option>
          </select>
        </div>
      </div>
      {result && (
        <div className="water-results">
          <div className="water-stat water-stat--main"><p className="water-sv">{result.liters} L</p><p className="water-sl">Daily Water Intake</p></div>
          <div className="water-stat"><p className="water-sv">{result.ml} ml</p><p className="water-sl">Milliliters</p></div>
          <div className="water-stat"><p className="water-sv">{result.cups}</p><p className="water-sl">8 oz Cups</p></div>
          <div className="water-stat"><p className="water-sv">{result.oz} fl oz</p><p className="water-sl">Fluid Ounces</p></div>
        </div>
      )}
    </div>
  );
}
