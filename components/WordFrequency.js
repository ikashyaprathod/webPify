"use client";
import { useState, useMemo } from "react";

export default function WordFrequency() {
  const [text, setText] = useState("");
  const [sort, setSort] = useState("count"); // count | alpha
  const [minLen, setMinLen] = useState(1);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [copied, setCopied] = useState(false);

  const freq = useMemo(() => {
    if (!text.trim()) return [];
    const words = text.match(/\b[a-zA-Z\u00C0-\u024F]+\b/g) || [];
    const map = {};
    for (const w of words) {
      const key = caseSensitive ? w : w.toLowerCase();
      if (key.length >= minLen) map[key] = (map[key] || 0) + 1;
    }
    const entries = Object.entries(map);
    return entries.sort(sort === "count" ? (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]) : (a, b) => a[0].localeCompare(b[0]));
  }, [text, sort, minLen, caseSensitive]);

  const total = useMemo(() => freq.reduce((s, [, c]) => s + c, 0), [freq]);

  async function copy() {
    const csv = ["Word,Count", ...freq.map(([w,c]) => `${w},${c}`)].join("\n");
    await navigator.clipboard.writeText(csv);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function download() {
    const csv = ["Word,Count", ...freq.map(([w,c]) => `${w},${c}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "word-frequency.csv";
    a.click();
  }

  return (
    <div className="wfreq-wrap">
      <textarea className="wfreq-textarea" rows={7} placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} />

      <div className="wfreq-controls">
        <div className="wfreq-ctrl-group">
          <span className="wfreq-ctrl-label">Sort by:</span>
          <button className={`wfreq-sort-btn${sort==="count"?" wfreq-sort-btn--on":""}`} onClick={() => setSort("count")}>Frequency</button>
          <button className={`wfreq-sort-btn${sort==="alpha"?" wfreq-sort-btn--on":""}`} onClick={() => setSort("alpha")}>A–Z</button>
        </div>
        <div className="wfreq-ctrl-group">
          <span className="wfreq-ctrl-label">Min length:</span>
          <input className="wfreq-min-input" type="number" min={1} max={20} value={minLen} onChange={e => setMinLen(Math.max(1,+e.target.value))} />
        </div>
        <label className="wfreq-toggle-label">
          <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} />
          Case-sensitive
        </label>
      </div>

      {freq.length > 0 && (
        <div className="wfreq-results">
          <div className="wfreq-results-hd">
            <span>{freq.length} unique words · {total} total occurrences</span>
            <div className="wfreq-results-actions">
              <button className="wfreq-copy-btn" onClick={copy}>{copied?"Copied!":"Copy CSV"}</button>
              <button className="wfreq-dl-btn" onClick={download}>Download CSV</button>
            </div>
          </div>
          <div className="wfreq-table-wrap">
            <table className="wfreq-table">
              <thead><tr><th>#</th><th>Word</th><th>Count</th><th>Freq%</th></tr></thead>
              <tbody>
                {freq.slice(0, 200).map(([word, count], i) => (
                  <tr key={word}>
                    <td className="wfreq-td-num">{i + 1}</td>
                    <td className="wfreq-td-word">{word}</td>
                    <td className="wfreq-td-count">{count}</td>
                    <td className="wfreq-td-pct">
                      <div className="wfreq-bar-wrap">
                        <div className="wfreq-bar" style={{width: `${Math.round(count/freq[0][1]*100)}%`}} />
                        <span>{((count/total)*100).toFixed(1)}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {freq.length > 200 && <p className="wfreq-trunc">Showing top 200 of {freq.length} words.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
