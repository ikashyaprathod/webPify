"use client";
import { useState, useMemo } from "react";

// US Navy Method
const CATEGORIES_M = [{label:"Essential Fat",max:6},{label:"Athletes",max:14},{label:"Fitness",max:18},{label:"Acceptable",max:25},{label:"Obese",max:Infinity}];
const CATEGORIES_F = [{label:"Essential Fat",max:14},{label:"Athletes",max:21},{label:"Fitness",max:25},{label:"Acceptable",max:32},{label:"Obese",max:Infinity}];

function getCat(bf, sex) {
  const cats = sex === "male" ? CATEGORIES_M : CATEGORIES_F;
  return cats.find(c => bf < c.max)?.label || "Obese";
}

export default function BodyFatCalc() {
  const [unit, setUnit] = useState("metric");
  const [sex, setSex] = useState("male");
  const [height, setHeight] = useState("175");
  const [neck, setNeck] = useState("38");
  const [waist, setWaist] = useState("85");
  const [hip, setHip] = useState("95"); // female only

  const result = useMemo(() => {
    let hCm = parseFloat(height), nCm = parseFloat(neck), wCm = parseFloat(waist), hpCm = parseFloat(hip);
    if (unit === "imperial") { hCm *= 2.54; nCm *= 2.54; wCm *= 2.54; hpCm *= 2.54; }
    if (!hCm || !nCm || !wCm || (sex === "female" && !hpCm)) return null;
    let bf;
    if (sex === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(wCm - nCm) + 0.15456 * Math.log10(hCm)) - 450;
    } else {
      bf = 495 / (1.29579 - 0.35004 * Math.log10(wCm + hpCm - nCm) + 0.22100 * Math.log10(hCm)) - 450;
    }
    if (bf < 0 || bf > 70) return null;
    return { bf: bf.toFixed(1), category: getCat(bf, sex) };
  }, [unit, sex, height, neck, waist, hip]);

  const u = unit === "metric" ? "cm" : "in";

  return (
    <div className="bfcalc-wrap">
      <div className="bfcalc-toggles">
        {[["metric","Metric (cm)"],["imperial","Imperial (in)"]].map(([v,l]) => (
          <button key={v} className={`bfcalc-toggle-btn${unit===v?" bfcalc-toggle-btn--on":""}`} onClick={()=>setUnit(v)}>{l}</button>
        ))}
        {[["male","Male"],["female","Female"]].map(([v,l]) => (
          <button key={v} className={`bfcalc-toggle-btn${sex===v?" bfcalc-toggle-btn--on":""}`} onClick={()=>setSex(v)}>{l}</button>
        ))}
      </div>
      <div className="bfcalc-fields">
        <div className="bfcalc-field"><label className="bfcalc-label">Height ({u})</label><input className="bfcalc-input" type="number" value={height} onChange={e=>setHeight(e.target.value)} /></div>
        <div className="bfcalc-field"><label className="bfcalc-label">Neck ({u})</label><input className="bfcalc-input" type="number" value={neck} onChange={e=>setNeck(e.target.value)} /></div>
        <div className="bfcalc-field"><label className="bfcalc-label">Waist ({u})</label><input className="bfcalc-input" type="number" value={waist} onChange={e=>setWaist(e.target.value)} /></div>
        {sex === "female" && <div className="bfcalc-field"><label className="bfcalc-label">Hip ({u})</label><input className="bfcalc-input" type="number" value={hip} onChange={e=>setHip(e.target.value)} /></div>}
      </div>
      {result
        ? <div className="bfcalc-result"><p className="bfcalc-pct">{result.bf}%</p><p className="bfcalc-cat">{result.category}</p><p className="bfcalc-method">US Navy Method</p></div>
        : <p className="bfcalc-hint">Fill in all measurements to calculate body fat percentage.</p>}
    </div>
  );
}
