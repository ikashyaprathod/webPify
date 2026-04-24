"use client";
import { useState } from "react";

const TO_ROMAN = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
const FROM_ROMAN = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};

function toRoman(n) {
  if (n < 1 || n > 3999) return "Out of range (1–3999)";
  let result = "";
  for (const [val, sym] of TO_ROMAN) { while (n >= val) { result += sym; n -= val; } }
  return result;
}
function fromRoman(s) {
  const str = s.toUpperCase().trim();
  if (!str) return "";
  let total = 0, prev = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const cur = FROM_ROMAN[str[i]];
    if (!cur) return "Invalid roman numeral";
    if (cur < prev) total -= cur; else total += cur;
    prev = cur;
  }
  return total > 0 ? String(total) : "Invalid roman numeral";
}

export default function RomanNumerals() {
  const [arabicIn, setArabicIn] = useState("2024");
  const [romanIn, setRomanIn] = useState("MMXXIV");

  return (
    <div className="roman-wrap">
      <div className="roman-section">
        <p className="roman-section-title">Number → Roman Numeral</p>
        <div className="roman-row">
          <input className="roman-input" type="number" value={arabicIn} onChange={e=>setArabicIn(e.target.value)} placeholder="e.g. 2024" min="1" max="3999" />
          <span className="roman-arrow">→</span>
          <div className="roman-output">{arabicIn ? toRoman(parseInt(arabicIn)) : "—"}</div>
        </div>
      </div>
      <div className="roman-section">
        <p className="roman-section-title">Roman Numeral → Number</p>
        <div className="roman-row">
          <input className="roman-input roman-input--text" type="text" value={romanIn} onChange={e=>setRomanIn(e.target.value)} placeholder="e.g. MMXXIV" />
          <span className="roman-arrow">→</span>
          <div className="roman-output">{romanIn ? fromRoman(romanIn) : "—"}</div>
        </div>
      </div>
      <div className="roman-table">
        <p className="roman-section-title">Reference Table</p>
        <div className="roman-ref-grid">
          {TO_ROMAN.map(([v,s]) => <div key={s} className="roman-ref-row"><span>{s}</span><span>{v}</span></div>)}
        </div>
      </div>
    </div>
  );
}
