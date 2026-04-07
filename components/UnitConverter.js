"use client";
import { useState, useMemo } from "react";

const CONFIGS = {
  length: {
    label: "Length",
    units: [
      { id: "m",   label: "Meters (m)",       factor: 1 },
      { id: "km",  label: "Kilometers (km)",  factor: 1000 },
      { id: "cm",  label: "Centimeters (cm)", factor: 0.01 },
      { id: "mm",  label: "Millimeters (mm)", factor: 0.001 },
      { id: "mi",  label: "Miles (mi)",       factor: 1609.344 },
      { id: "yd",  label: "Yards (yd)",       factor: 0.9144 },
      { id: "ft",  label: "Feet (ft)",        factor: 0.3048 },
      { id: "in",  label: "Inches (in)",      factor: 0.0254 },
      { id: "nmi", label: "Nautical Miles",   factor: 1852 },
      { id: "ly",  label: "Light Years",      factor: 9.461e15 },
    ],
  },
  weight: {
    label: "Weight / Mass",
    units: [
      { id: "kg",  label: "Kilograms (kg)",  factor: 1 },
      { id: "g",   label: "Grams (g)",       factor: 0.001 },
      { id: "mg",  label: "Milligrams (mg)", factor: 1e-6 },
      { id: "lb",  label: "Pounds (lb)",     factor: 0.453592 },
      { id: "oz",  label: "Ounces (oz)",     factor: 0.0283495 },
      { id: "t",   label: "Metric Tons (t)", factor: 1000 },
      { id: "st",  label: "Stones (st)",     factor: 6.35029 },
      { id: "ct",  label: "Carats (ct)",     factor: 0.0002 },
      { id: "ug",  label: "Micrograms (µg)", factor: 1e-9 },
    ],
  },
  speed: {
    label: "Speed",
    units: [
      { id: "mps",  label: "Meters/sec (m/s)",   factor: 1 },
      { id: "kph",  label: "Kilometers/h (km/h)", factor: 1/3.6 },
      { id: "mph",  label: "Miles/h (mph)",       factor: 0.44704 },
      { id: "fps",  label: "Feet/sec (fps)",      factor: 0.3048 },
      { id: "kt",   label: "Knots (kt)",          factor: 0.514444 },
      { id: "mach", label: "Mach (at sea level)", factor: 343 },
      { id: "c",    label: "Speed of Light (c)",  factor: 2.99792e8 },
    ],
  },
  area: {
    label: "Area",
    units: [
      { id: "m2",    label: "Sq Meters (m²)",     factor: 1 },
      { id: "km2",   label: "Sq Kilometers (km²)", factor: 1e6 },
      { id: "cm2",   label: "Sq Centimeters (cm²)", factor: 1e-4 },
      { id: "mm2",   label: "Sq Millimeters (mm²)", factor: 1e-6 },
      { id: "mi2",   label: "Sq Miles (mi²)",      factor: 2.58999e6 },
      { id: "yd2",   label: "Sq Yards (yd²)",      factor: 0.836127 },
      { id: "ft2",   label: "Sq Feet (ft²)",       factor: 0.092903 },
      { id: "in2",   label: "Sq Inches (in²)",     factor: 6.4516e-4 },
      { id: "ac",    label: "Acres (ac)",           factor: 4046.86 },
      { id: "ha",    label: "Hectares (ha)",        factor: 10000 },
    ],
  },
  "data-size": {
    label: "Data Size",
    units: [
      { id: "b",   label: "Bits (b)",           factor: 1/8 },
      { id: "B",   label: "Bytes (B)",           factor: 1 },
      { id: "KB",  label: "Kilobytes (KB)",      factor: 1024 },
      { id: "MB",  label: "Megabytes (MB)",      factor: 1024**2 },
      { id: "GB",  label: "Gigabytes (GB)",      factor: 1024**3 },
      { id: "TB",  label: "Terabytes (TB)",      factor: 1024**4 },
      { id: "PB",  label: "Petabytes (PB)",      factor: 1024**5 },
      { id: "Kb",  label: "Kilobits (Kb)",       factor: 125 },
      { id: "Mb",  label: "Megabits (Mb)",       factor: 125000 },
      { id: "Gb",  label: "Gigabits (Gb)",       factor: 125000000 },
    ],
  },
  time: {
    label: "Time",
    units: [
      { id: "ns",  label: "Nanoseconds (ns)",   factor: 1e-9 },
      { id: "us",  label: "Microseconds (µs)",  factor: 1e-6 },
      { id: "ms",  label: "Milliseconds (ms)",  factor: 0.001 },
      { id: "s",   label: "Seconds (s)",        factor: 1 },
      { id: "min", label: "Minutes (min)",      factor: 60 },
      { id: "h",   label: "Hours (h)",          factor: 3600 },
      { id: "d",   label: "Days (d)",           factor: 86400 },
      { id: "wk",  label: "Weeks (wk)",         factor: 604800 },
      { id: "mo",  label: "Months (mo, avg)",   factor: 2629800 },
      { id: "yr",  label: "Years (yr, avg)",    factor: 31557600 },
    ],
  },
};

function fmtNum(n) {
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 1e15 || (abs < 1e-6 && abs > 0)) return n.toExponential(6).replace(/\.?0+e/, "e");
  if (abs >= 1000) return parseFloat(n.toPrecision(10)).toLocaleString("en-US", { maximumFractionDigits: 6 });
  return parseFloat(n.toPrecision(10)).toString();
}

export default function UnitConverter({ category }) {
  const cfg = CONFIGS[category];
  const [fromId, setFromId] = useState(cfg.units[0].id);
  const [toId, setToId] = useState(cfg.units[1].id);
  const [value, setValue] = useState("1");

  const converted = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    const from = cfg.units.find(u => u.id === fromId);
    const to = cfg.units.find(u => u.id === toId);
    if (!from || !to) return "";
    return fmtNum(v * from.factor / to.factor);
  }, [value, fromId, toId, cfg]);

  function swap() { setFromId(toId); setToId(fromId); }

  const allConversions = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return [];
    const from = cfg.units.find(u => u.id === fromId);
    if (!from) return [];
    return cfg.units.filter(u => u.id !== fromId).map(u => ({
      label: u.label,
      value: fmtNum(v * from.factor / u.factor),
    }));
  }, [value, fromId, cfg]);

  return (
    <div className="unitconv-wrap">
      <div className="unitconv-main">
        <div className="unitconv-side">
          <label className="unitconv-label">From</label>
          <select className="unitconv-select" value={fromId} onChange={e=>setFromId(e.target.value)}>
            {cfg.units.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
          </select>
          <input className="unitconv-input" type="number" value={value} onChange={e=>setValue(e.target.value)} placeholder="1" />
        </div>

        <button className="unitconv-swap" onClick={swap} title="Swap">⇄</button>

        <div className="unitconv-side">
          <label className="unitconv-label">To</label>
          <select className="unitconv-select" value={toId} onChange={e=>setToId(e.target.value)}>
            {cfg.units.map(u => <option key={u.id} value={u.id}>{u.label}</option>)}
          </select>
          <div className="unitconv-result">{converted || "—"}</div>
        </div>
      </div>

      {allConversions.length > 0 && (
        <div className="unitconv-all">
          <p className="unitconv-all-title">All conversions</p>
          <div className="unitconv-all-grid">
            {allConversions.map(c => (
              <div key={c.label} className="unitconv-all-row">
                <span className="unitconv-all-label">{c.label}</span>
                <span className="unitconv-all-val">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
