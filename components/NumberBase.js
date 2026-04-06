"use client";
import { useState } from "react";

const BASES = [
  { label: "Decimal", base: 10, prefix: "", placeholder: "e.g. 255" },
  { label: "Binary", base: 2, prefix: "0b", placeholder: "e.g. 11111111" },
  { label: "Octal", base: 8, prefix: "0o", placeholder: "e.g. 377" },
  { label: "Hexadecimal", base: 16, prefix: "0x", placeholder: "e.g. FF" },
];

export default function NumberBase() {
  const [values, setValues] = useState({ 10: "", 2: "", 8: "", 16: "" });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(null);

  function handleChange(base, val) {
    setError("");
    const clean = val.trim().replace(/^(0x|0b|0o)/i, "");
    if (!clean) { setValues({ 10: "", 2: "", 8: "", 16: "" }); return; }
    const num = parseInt(clean, base);
    if (isNaN(num) || num < 0) { setError(`Invalid ${BASES.find(b=>b.base===base)?.label} number.`); return; }
    setValues({
      10: String(num),
      2: num.toString(2).toUpperCase(),
      8: num.toString(8),
      16: num.toString(16).toUpperCase(),
    });
  }

  async function copy(val, key) {
    await navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="numbase-wrap">
      <div className="numbase-grid">
        {BASES.map(({ label, base, prefix, placeholder }) => (
          <div key={base} className="numbase-card">
            <div className="numbase-card-hd">
              <span className="numbase-card-label">{label}</span>
              <span className="numbase-card-base">base {base}</span>
            </div>
            <div className="numbase-input-row">
              {prefix && <span className="numbase-prefix">{prefix}</span>}
              <input
                className="numbase-input"
                placeholder={placeholder}
                value={values[base]}
                onChange={e => handleChange(base, e.target.value)}
                spellCheck={false}
              />
              {values[base] && (
                <button className="numbase-copy-btn" onClick={() => copy(values[base], base)}>
                  {copied === base ? "✓" : "⧉"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {error && <p className="numbase-error">{error}</p>}

      {values[10] && (
        <div className="numbase-summary">
          <span className="numbase-sum-label">Decimal {values[10]} in all bases:</span>
          {BASES.map(({ label, base, prefix }) => (
            <span key={base} className="numbase-sum-chip">
              <strong>{label}:</strong> {prefix}{values[base]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
