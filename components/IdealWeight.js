"use client";
import { useState, useMemo } from "react";

// Four common formulas for ideal body weight
function calcIBW(heightCm, sex) {
  const hIn = heightCm / 2.54;
  const base = sex === "male" ? 50 : 45.5;
  const perInch = 2.3;
  const inchesOver5Ft = Math.max(0, hIn - 60);
  // Robinson (1983)
  const robinson = sex === "male" ? 52 + 1.9 * inchesOver5Ft : 49 + 1.7 * inchesOver5Ft;
  // Miller (1983)
  const miller = sex === "male" ? 56.2 + 1.41 * inchesOver5Ft : 53.1 + 1.36 * inchesOver5Ft;
  // Devine (1974)
  const devine = base + perInch * inchesOver5Ft;
  // Hamwi
  const hamwi = sex === "male" ? 48 + 2.7 * inchesOver5Ft : 45.4 + 2.3 * inchesOver5Ft;
  // BMI-based healthy range (18.5–24.9)
  const hM = heightCm / 100;
  const bmiLow = 18.5 * hM * hM, bmiHigh = 24.9 * hM * hM;
  return { robinson, miller, devine, hamwi, bmiLow, bmiHigh };
}

function fmt(n) { return n.toFixed(1); }
function toKgLb(kg) { return `${fmt(kg)} kg (${fmt(kg * 2.20462)} lbs)`; }

export default function IdealWeight() {
  const [unit, setUnit] = useState("metric");
  const [sex, setSex] = useState("male");
  const [height, setHeight] = useState("175");
  const [heightIn, setHeightIn] = useState("0");

  const result = useMemo(() => {
    let hCm;
    if (unit === "metric") {
      hCm = parseFloat(height);
    } else {
      const ft = parseFloat(height) || 0, inch = parseFloat(heightIn) || 0;
      hCm = (ft * 12 + inch) * 2.54;
    }
    if (!hCm || hCm < 100 || hCm > 250) return null;
    return { ...calcIBW(hCm, sex), hCm };
  }, [unit, sex, height, heightIn]);

  const FORMULAS = result ? [
    { name: "Devine (1974)", val: result.devine },
    { name: "Robinson (1983)", val: result.robinson },
    { name: "Miller (1983)", val: result.miller },
    { name: "Hamwi", val: result.hamwi },
  ] : [];

  return (
    <div className="idwt-wrap">
      <div className="idwt-toggles">
        {[["metric","Metric (cm)"],["imperial","Imperial (ft)"]].map(([v,l]) => (
          <button key={v} className={`idwt-toggle-btn${unit===v?" idwt-toggle-btn--on":""}`} onClick={()=>setUnit(v)}>{l}</button>
        ))}
        {[["male","Male"],["female","Female"]].map(([v,l]) => (
          <button key={v} className={`idwt-toggle-btn${sex===v?" idwt-toggle-btn--on":""}`} onClick={()=>setSex(v)}>{l}</button>
        ))}
      </div>

      <div className="idwt-fields">
        {unit === "metric" ? (
          <div className="idwt-field">
            <label className="idwt-label">Height (cm)</label>
            <input className="idwt-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="175" min="100" max="250" />
          </div>
        ) : (
          <div className="idwt-field-row">
            <div className="idwt-field"><label className="idwt-label">Feet</label><input className="idwt-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="5" /></div>
            <div className="idwt-field"><label className="idwt-label">Inches</label><input className="idwt-input" type="number" value={heightIn} onChange={e=>setHeightIn(e.target.value)} placeholder="10" /></div>
          </div>
        )}
      </div>

      {result && (
        <div className="idwt-results">
          <div className="idwt-range">
            <p className="idwt-range-title">Healthy BMI Range (18.5–24.9)</p>
            <p className="idwt-range-val">{toKgLb(result.bmiLow)} — {toKgLb(result.bmiHigh)}</p>
          </div>
          <div className="idwt-formulas">
            {FORMULAS.map(f => (
              <div key={f.name} className="idwt-formula-row">
                <span className="idwt-formula-name">{f.name}</span>
                <span className="idwt-formula-val">{toKgLb(f.val)}</span>
              </div>
            ))}
          </div>
          <p className="idwt-disclaimer">Ideal weight formulas are estimates and do not account for muscle mass, age, or body composition. Consult a healthcare professional for personalized advice.</p>
        </div>
      )}
    </div>
  );
}
