"use client";
import { useState } from "react";

const CASES = [
  { key:"upper", label:"UPPERCASE", fn: t => t.toUpperCase() },
  { key:"lower", label:"lowercase", fn: t => t.toLowerCase() },
  { key:"title", label:"Title Case", fn: t => t.replace(/\w\S*/g, w => w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()) },
  { key:"sentence", label:"Sentence case", fn: t => t.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase()) },
  { key:"camel", label:"camelCase", fn: t => t.trim().toLowerCase().replace(/[\s_-]+(.)/g, (_,c) => c.toUpperCase()) },
  { key:"pascal", label:"PascalCase", fn: t => t.trim().toLowerCase().replace(/(^\w|[\s_-]+\w)/g, c => c.replace(/[\s_-]/,"").toUpperCase()) },
  { key:"snake", label:"snake_case", fn: t => t.trim().toLowerCase().replace(/[\s-]+/g,"_") },
  { key:"kebab", label:"kebab-case", fn: t => t.trim().toLowerCase().replace(/[\s_]+/g,"-") },
  { key:"alternate", label:"aLtErNaTiNg", fn: t => t.split("").map((c,i)=>i%2===0?c.toLowerCase():c.toUpperCase()).join("") },
];

export default function CaseConverter() {
  const [input, setInput] = useState("");
  const [activeCase, setActiveCase] = useState("upper");
  const [copied, setCopied] = useState(false);

  const caseFn = CASES.find(c=>c.key===activeCase)?.fn || (t=>t);
  const output = caseFn(input);

  const copyOutput = () => {
    if(!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  return (
    <div className="ccase-wrap">
      <div className="ccase-label">Input Text</div>
      <textarea className="ccase-input" value={input} onChange={e=>setInput(e.target.value)}
        placeholder="Type or paste your text here..." />

      <div className="ccase-btns">
        {CASES.map(c=>(
          <button key={c.key} onClick={()=>setActiveCase(c.key)}
            className={`ccase-btn${activeCase===c.key?" ccase-btn--on":""}`}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="ccase-output-wrap">
        <div className="ccase-label">Output</div>
        <textarea className="ccase-output" readOnly value={output}
          placeholder="Converted text will appear here..." />
        <button className="ccase-copy-btn" onClick={copyOutput}>{copied?"✓ Copied!":"Copy"}</button>
      </div>
    </div>
  );
}
