"use client";
import { useState } from "react";

const DEG = Math.PI / 180;

function evaluate(expr, isDeg) {
  // Replace scientific functions
  let e = expr
    .replace(/sin\(/g, isDeg ? `_sin(` : `Math.sin(`)
    .replace(/cos\(/g, isDeg ? `_cos(` : `Math.cos(`)
    .replace(/tan\(/g, isDeg ? `_tan(` : `Math.tan(`)
    .replace(/asin\(/g, isDeg ? `_asin(` : `Math.asin(`)
    .replace(/acos\(/g, isDeg ? `_acos(` : `Math.acos(`)
    .replace(/atan\(/g, isDeg ? `_atan(` : `Math.atan(`)
    .replace(/sqrt\(/g, `Math.sqrt(`)
    .replace(/cbrt\(/g, `Math.cbrt(`)
    .replace(/log\(/g, `Math.log10(`)
    .replace(/ln\(/g, `Math.log(`)
    .replace(/abs\(/g, `Math.abs(`)
    .replace(/\^/g, `**`)
    .replace(/π/g, `Math.PI`)
    .replace(/e(?![0-9])/g, `Math.E`);

  // eslint-disable-next-line no-new-func
  const fn = new Function(
    "_sin","_cos","_tan","_asin","_acos","_atan",
    `"use strict"; return ${e};`
  );
  return fn(
    x => Math.sin(x*DEG), x => Math.cos(x*DEG), x => Math.tan(x*DEG),
    x => Math.asin(x)/DEG, x => Math.acos(x)/DEG, x => Math.atan(x)/DEG
  );
}

const BTNS = [
  ["C","⌫","(",")","%"],
  ["sin(","cos(","tan(","√","x²"],
  ["log(","ln(","asin(","acos(","atan("],
  ["7","8","9","÷","^"],
  ["4","5","6","×","|x|"],
  ["1","2","3","-","π"],
  ["0",".","e","+","="],
];

export default function ScientificCalc() {
  const [display, setDisplay] = useState("");
  const [expr, setExpr] = useState("");
  const [isDeg, setIsDeg] = useState(true);
  const [error, setError] = useState("");

  function press(btn) {
    setError("");
    if (btn === "C") { setDisplay(""); setExpr(""); return; }
    if (btn === "⌫") { setExpr(e => e.slice(0,-1)); setDisplay(d => d.slice(0,-1)); return; }
    if (btn === "=") {
      try {
        const clean = expr
          .replace(/÷/g,"/").replace(/×/g,"*").replace(/x²/g,"**2").replace(/√/g,"Math.sqrt(").replace(/\|x\|/g,"Math.abs(");
        const res = evaluate(clean, isDeg);
        if (!isFinite(res)) { setError("Result is undefined"); return; }
        const resStr = parseFloat(res.toPrecision(12)).toString();
        setDisplay(resStr); setExpr(resStr);
      } catch { setError("Syntax error"); }
      return;
    }
    setExpr(e => e + btn);
    setDisplay(d => d + btn);
  }

  return (
    <div className="scicalc-wrap">
      <div className="scicalc-top">
        <div className="scicalc-deg-rad">
          <button className={`scicalc-dr-btn${isDeg?" scicalc-dr-btn--on":""}`} onClick={()=>setIsDeg(true)}>DEG</button>
          <button className={`scicalc-dr-btn${!isDeg?" scicalc-dr-btn--on":""}`} onClick={()=>setIsDeg(false)}>RAD</button>
        </div>
        <div className="scicalc-display">
          <span className="scicalc-expr">{expr || "0"}</span>
          {error && <span className="scicalc-err">{error}</span>}
        </div>
      </div>
      <div className="scicalc-grid">
        {BTNS.flat().map((btn,i) => (
          <button key={i}
            className={`scicalc-btn${btn==="="?" scicalc-btn--eq":btn==="C"?" scicalc-btn--clr":["÷","×","-","+","^","%"].includes(btn)?" scicalc-btn--op":["sin(","cos(","tan(","log(","ln(","asin(","acos(","atan(","√","|x|"].includes(btn)?" scicalc-btn--fn":""}`}
            onClick={() => press(btn)}
          >{btn}</button>
        ))}
      </div>
    </div>
  );
}
