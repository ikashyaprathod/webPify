"use client";
import { useState, useMemo } from "react";

const UNITS = ["°C", "°F", "K", "°R"];

function toC(val, from) {
  if (from === "°C") return val;
  if (from === "°F") return (val - 32) * 5/9;
  if (from === "K")  return val - 273.15;
  if (from === "°R") return (val - 491.67) * 5/9;
}
function fromC(c, to) {
  if (to === "°C") return c;
  if (to === "°F") return c * 9/5 + 32;
  if (to === "K")  return c + 273.15;
  if (to === "°R") return (c + 273.15) * 9/5;
}
function convert(val, from, to) { return fromC(toC(val, from), to); }

function fmt(n) {
  if (!isFinite(n)) return "—";
  return parseFloat(n.toPrecision(10)).toString();
}

const DESCRIPTIONS = { "°C": "Celsius", "°F": "Fahrenheit", "K": "Kelvin", "°R": "Rankine" };

export default function TemperatureConverter() {
  const [fromUnit, setFromUnit] = useState("°C");
  const [toUnit, setToUnit] = useState("°F");
  const [value, setValue] = useState("0");

  const result = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    return fmt(convert(v, fromUnit, toUnit));
  }, [value, fromUnit, toUnit]);

  const all = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return [];
    return UNITS.filter(u => u !== fromUnit).map(u => ({
      unit: u,
      label: DESCRIPTIONS[u],
      value: fmt(convert(v, fromUnit, u)),
    }));
  }, [value, fromUnit]);

  function swap() { setFromUnit(toUnit); setToUnit(fromUnit); }

  return (
    <div className="tempconv-wrap">
      <div className="tempconv-main">
        <div className="tempconv-side">
          <label className="tempconv-label">From</label>
          <select className="tempconv-select" value={fromUnit} onChange={e=>setFromUnit(e.target.value)}>
            {UNITS.map(u => <option key={u} value={u}>{u} — {DESCRIPTIONS[u]}</option>)}
          </select>
          <input className="tempconv-input" type="number" value={value} onChange={e=>setValue(e.target.value)} placeholder="0" />
        </div>
        <button className="tempconv-swap" onClick={swap} title="Swap">⇄</button>
        <div className="tempconv-side">
          <label className="tempconv-label">To</label>
          <select className="tempconv-select" value={toUnit} onChange={e=>setToUnit(e.target.value)}>
            {UNITS.map(u => <option key={u} value={u}>{u} — {DESCRIPTIONS[u]}</option>)}
          </select>
          <div className="tempconv-result">{result || "—"}</div>
        </div>
      </div>

      {all.length > 0 && (
        <div className="tempconv-all">
          <p className="tempconv-all-title">All conversions</p>
          <div className="tempconv-all-grid">
            {all.map(c => (
              <div key={c.unit} className="tempconv-all-row">
                <span className="tempconv-all-label">{c.unit} — {c.label}</span>
                <span className="tempconv-all-val">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
