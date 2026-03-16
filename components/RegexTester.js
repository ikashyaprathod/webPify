"use client";

import { useState } from "react";

const QUICK_PATTERNS = [
  { label: "Email", pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}" },
  { label: "URL", pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)" },
  { label: "Phone Number", pattern: "(\\+?\\d{1,3}[\\s\\-]?)?(\\(?\\d{1,4}\\)?[\\s\\-]?)\\d{1,4}[\\s\\-]?\\d{1,4}[\\s\\-]?\\d{1,9}" },
  { label: "Date (YYYY-MM-DD)", pattern: "\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])" },
  { label: "IP Address", pattern: "\\b(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\b" },
];

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false });
  const [testStr, setTestStr] = useState("");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  function toggleFlag(f) {
    setFlags((prev) => {
      const next = { ...prev, [f]: !prev[f] };
      runTest(pattern, next, testStr);
      return next;
    });
  }

  function runTest(pat, flgs, str) {
    setError("");
    setMatches([]);
    if (!pat || !str) return;
    try {
      const flagStr = Object.entries(flgs).filter(([, v]) => v).map(([k]) => k).join("");
      const re = new RegExp(pat, flagStr);
      const found = [];
      if (flgs.g) {
        let m;
        while ((m = re.exec(str)) !== null) {
          found.push({ text: m[0], index: m.index, groups: m.slice(1) });
          if (m[0].length === 0) re.lastIndex++;
        }
      } else {
        const m = re.exec(str);
        if (m) found.push({ text: m[0], index: m.index, groups: m.slice(1) });
      }
      setMatches(found);
    } catch (e) {
      setError(e.message);
    }
  }

  function handlePatternChange(val) {
    setPattern(val);
    runTest(val, flags, testStr);
  }

  function handleTestChange(val) {
    setTestStr(val);
    runTest(pattern, flags, val);
  }

  function applyPreset(e) {
    const val = e.target.value;
    if (!val) return;
    setPattern(val);
    runTest(val, flags, testStr);
    e.target.value = "";
  }

  return (
    <div className="regx-wrap">
      <div className="regx-pattern-row">
        <span className="regx-slash">/</span>
        <input
          className="regx-input"
          type="text"
          placeholder="Enter regex pattern..."
          value={pattern}
          onChange={(e) => handlePatternChange(e.target.value)}
          spellCheck={false}
        />
        <span className="regx-slash">/</span>
        <div className="regx-flags">
          {["g", "i", "m", "s"].map((f) => (
            <button
              key={f}
              className={`regx-flag-toggle${flags[f] ? " regx-flag-toggle--on" : ""}`}
              onClick={() => toggleFlag(f)}
              title={f === "g" ? "Global" : f === "i" ? "Case insensitive" : f === "m" ? "Multiline" : "Dot all"}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="regx-presets">
        <select className="regx-preset-select" onChange={applyPreset} defaultValue="">
          <option value="">Quick patterns...</option>
          {QUICK_PATTERNS.map((p) => (
            <option key={p.label} value={p.pattern}>{p.label}</option>
          ))}
        </select>
      </div>

      {error && <div className="regx-error">{error}</div>}

      <div className="regx-test-area">
        <label className="regx-label">Test String</label>
        <textarea
          className="regx-textarea"
          placeholder="Enter text to test against..."
          value={testStr}
          onChange={(e) => handleTestChange(e.target.value)}
          spellCheck={false}
        />
      </div>

      <div className="regx-results">
        <div className="regx-match-count">
          {matches.length > 0 ? `${matches.length} match${matches.length !== 1 ? "es" : ""} found` : "No matches"}
        </div>
        {matches.length > 0 ? (
          <div className="regx-match-list">
            {matches.map((m, i) => (
              <div key={i} className="regx-match-item">
                <span className="regx-match-text">{m.text}</span>
                <span className="regx-match-index">index: {m.index}</span>
                {m.groups.length > 0 && (
                  <span className="regx-match-groups">
                    groups: [{m.groups.map((g, j) => <span key={j}>{g ?? "undefined"}</span>)}]
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          pattern && testStr && <div className="regx-no-match">No matches found for this pattern.</div>
        )}
      </div>
    </div>
  );
}
