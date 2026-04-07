"use client";
import { useState, useMemo } from "react";

// Mifflin-St Jeor equation
const ACTIVITY = [
  { id: "1.2", label: "Sedentary", desc: "Little or no exercise" },
  { id: "1.375", label: "Lightly Active", desc: "1–3 days/week" },
  { id: "1.55", label: "Moderately Active", desc: "3–5 days/week" },
  { id: "1.725", label: "Very Active", desc: "6–7 days/week" },
  { id: "1.9", label: "Extra Active", desc: "Twice/day or physical job" },
];

const GOALS = [
  { id: "-500", label: "Lose 1 lb/week", delta: -500 },
  { id: "-250", label: "Lose 0.5 lb/week", delta: -250 },
  { id: "0", label: "Maintain Weight", delta: 0 },
  { id: "250", label: "Gain 0.5 lb/week", delta: 250 },
  { id: "500", label: "Gain 1 lb/week", delta: 500 },
];

export default function CalorieCalc() {
  const [unit, setUnit] = useState("metric");
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("30");
  const [height, setHeight] = useState("175");
  const [heightIn, setHeightIn] = useState("0");
  const [weight, setWeight] = useState("75");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState("0");

  const result = useMemo(() => {
    const a = parseInt(age), act = parseFloat(activity), goalDelta = parseInt(goal);
    let hCm, wKg;
    if (unit === "metric") {
      hCm = parseFloat(height); wKg = parseFloat(weight);
    } else {
      const ft = parseFloat(height) || 0, inch = parseFloat(heightIn) || 0;
      hCm = (ft * 12 + inch) * 2.54;
      wKg = parseFloat(weight) * 0.453592;
    }
    if (!hCm || !wKg || !a || isNaN(act)) return null;
    // Mifflin-St Jeor BMR
    const bmr = sex === "male"
      ? 10 * wKg + 6.25 * hCm - 5 * a + 5
      : 10 * wKg + 6.25 * hCm - 5 * a - 161;
    const tdee = bmr * act;
    const targetCals = tdee + goalDelta;
    return { bmr: Math.round(bmr), tdee: Math.round(tdee), target: Math.round(targetCals), goalDelta };
  }, [unit, sex, age, height, heightIn, weight, activity, goal]);

  return (
    <div className="calccal-wrap">
      <div className="calccal-top">
        <div className="calccal-toggle-row">
          {[["metric","Metric"],["imperial","Imperial"]].map(([v,l]) => (
            <button key={v} className={`calccal-toggle-btn${unit===v?" calccal-toggle-btn--on":""}`} onClick={()=>setUnit(v)}>{l}</button>
          ))}
        </div>
        <div className="calccal-toggle-row">
          {[["male","Male"],["female","Female"]].map(([v,l]) => (
            <button key={v} className={`calccal-toggle-btn${sex===v?" calccal-toggle-btn--on":""}`} onClick={()=>setSex(v)}>{l}</button>
          ))}
        </div>
      </div>

      <div className="calccal-fields">
        <div className="calccal-field">
          <label className="calccal-label">Age (years)</label>
          <input className="calccal-input" type="number" value={age} onChange={e=>setAge(e.target.value)} min="1" max="120" />
        </div>
        {unit === "metric" ? (
          <div className="calccal-field">
            <label className="calccal-label">Height (cm)</label>
            <input className="calccal-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175" />
          </div>
        ) : (
          <div className="calccal-field-row">
            <div className="calccal-field">
              <label className="calccal-label">Feet</label>
              <input className="calccal-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="5" />
            </div>
            <div className="calccal-field">
              <label className="calccal-label">Inches</label>
              <input className="calccal-input" type="number" value={heightIn} onChange={e=>setHeightIn(e.target.value)} placeholder="10" />
            </div>
          </div>
        )}
        <div className="calccal-field">
          <label className="calccal-label">{unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}</label>
          <input className="calccal-input" type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==="metric"?"75":"165"} />
        </div>
      </div>

      <div className="calccal-activity">
        <p className="calccal-section-label">Activity Level</p>
        <div className="calccal-activity-grid">
          {ACTIVITY.map(a => (
            <button key={a.id} className={`calccal-activity-btn${activity===a.id?" calccal-activity-btn--on":""}`} onClick={()=>setActivity(a.id)}>
              <span className="calccal-activity-name">{a.label}</span>
              <span className="calccal-activity-desc">{a.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="calccal-goal">
        <p className="calccal-section-label">Goal</p>
        <div className="calccal-goal-row">
          {GOALS.map(g => (
            <button key={g.id} className={`calccal-goal-btn${goal===g.id?" calccal-goal-btn--on":""}`} onClick={()=>setGoal(g.id)}>{g.label}</button>
          ))}
        </div>
      </div>

      {result && (
        <div className="calccal-results">
          <div className="calccal-stat calccal-stat--target"><p className="calccal-sv">{result.target.toLocaleString()}</p><p className="calccal-sl">Daily Calories (Goal)</p></div>
          <div className="calccal-stat"><p className="calccal-sv">{result.tdee.toLocaleString()}</p><p className="calccal-sl">TDEE (Maintenance)</p></div>
          <div className="calccal-stat"><p className="calccal-sv">{result.bmr.toLocaleString()}</p><p className="calccal-sl">BMR (Base Metabolic Rate)</p></div>
          <div className="calccal-stat"><p className="calccal-sv">{result.goalDelta > 0 ? "+" : ""}{result.goalDelta}</p><p className="calccal-sl">Calorie Surplus / Deficit</p></div>
        </div>
      )}
    </div>
  );
}
