"use client";
import { useState } from "react";

const ACCENTS = {
  "àáâãäå":"a","æ":"ae","ç":"c","èéêë":"e","ìíîï":"i","ñ":"n","òóôõöø":"o","ùúûü":"u","ý":"y","ß":"ss","đ":"d","ł":"l"
};

function toSlug(text, sep, lower, maxLen) {
  let s = text;
  // Replace accented chars
  for (const [chars, rep] of Object.entries(ACCENTS)) {
    s = s.replace(new RegExp(`[${chars}]`, "gi"), rep);
  }
  s = s
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9\s-_]/g, "")
    .trim()
    .replace(/[\s_-]+/g, sep);
  if (lower) s = s.toLowerCase();
  if (maxLen > 0 && s.length > maxLen) s = s.slice(0, maxLen).replace(new RegExp(`${sep}$`), "");
  return s;
}

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [sep, setSep] = useState("-");
  const [lower, setLower] = useState(true);
  const [maxLen, setMaxLen] = useState(0);
  const [copied, setCopied] = useState(false);

  const slug = toSlug(input, sep, lower, maxLen);

  async function copy() {
    await navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const examples = ["Hello World! This is a Test","My Blog Post #42 — 100% Awesome","Héllo Wörld from Ünîcödé"];

  return (
    <div className="sluggen-wrap">
      <div className="sluggen-card">
        <label className="sluggen-label">Input Text</label>
        <input className="sluggen-input" placeholder="Enter title or text to slugify..." value={input} onChange={e => setInput(e.target.value)} />

        <div className="sluggen-options">
          <div className="sluggen-opt-group">
            <span className="sluggen-opt-label">Separator:</span>
            {[["-","Hyphen (-)"],["_","Underscore (_)"]].map(([v,l]) => (
              <button key={v} className={`sluggen-opt-btn${sep===v?" sluggen-opt-btn--on":""}`} onClick={() => setSep(v)}>{l}</button>
            ))}
          </div>
          <label className="sluggen-toggle-label">
            <input type="checkbox" checked={lower} onChange={e => setLower(e.target.checked)} />
            Lowercase
          </label>
          <div className="sluggen-opt-group">
            <span className="sluggen-opt-label">Max length:</span>
            <input className="sluggen-len-input" type="number" min={0} max={500} value={maxLen} onChange={e => setMaxLen(+e.target.value)} placeholder="0 = unlimited" />
          </div>
        </div>

        {slug && (
          <div className="sluggen-result">
            <code className="sluggen-output">{slug}</code>
            <button className="sluggen-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>
          </div>
        )}

        <div className="sluggen-examples">
          <span className="sluggen-ex-label">Try an example:</span>
          {examples.map((ex, i) => (
            <button key={i} className="sluggen-ex-btn" onClick={() => setInput(ex)}>{ex.slice(0, 30)}…</button>
          ))}
        </div>
      </div>
    </div>
  );
}
