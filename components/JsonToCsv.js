"use client";
import { useState } from "react";

function jsonToCsv(jsonStr) {
  const data = JSON.parse(jsonStr);
  const arr = Array.isArray(data) ? data : [data];
  if (!arr.length) return "";
  const keys = Object.keys(arr[0]);
  const escape = v => {
    const s = v === null || v === undefined ? "" : String(v);
    return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g,'""')}"` : s;
  };
  const rows = [keys.join(","), ...arr.map(row => keys.map(k => escape(row[k])).join(","))];
  return rows.join("\n");
}

function csvToJson(csvStr) {
  const lines = csvStr.trim().split("\n").filter(Boolean);
  if (lines.length < 2) throw new Error("CSV must have at least a header row and one data row.");
  const parseRow = row => {
    const result = []; let cur = ""; let inQ = false;
    for (let i = 0; i < row.length; i++) {
      const c = row[i];
      if (c === '"' && !inQ) { inQ = true; continue; }
      if (c === '"' && inQ && row[i+1] === '"') { cur += '"'; i++; continue; }
      if (c === '"' && inQ) { inQ = false; continue; }
      if (c === ',' && !inQ) { result.push(cur); cur = ""; continue; }
      cur += c;
    }
    result.push(cur);
    return result;
  };
  const headers = parseRow(lines[0]);
  return JSON.stringify(lines.slice(1).map(line => {
    const vals = parseRow(line);
    return Object.fromEntries(headers.map((h, i) => [h.trim(), vals[i] ?? ""]));
  }), null, 2);
}

export default function JsonToCsv() {
  const [mode, setMode] = useState("toCsv");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function convert() {
    setError("");
    try {
      setOutput(mode === "toCsv" ? jsonToCsv(input) : csvToJson(input));
    } catch (e) {
      setError("Error: " + e.message);
      setOutput("");
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function download() {
    const ext = mode === "toCsv" ? "csv" : "json";
    const mime = mode === "toCsv" ? "text/csv" : "application/json";
    const blob = new Blob([output], { type: mime });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `converted.${ext}`;
    a.click();
  }

  return (
    <div className="j2csv-wrap">
      <div className="j2csv-tabs">
        {[["toCsv","JSON → CSV"],["toJson","CSV → JSON"]].map(([v,l]) => (
          <button key={v} className={`j2csv-tab${mode===v?" j2csv-tab--on":""}`} onClick={() => { setMode(v); setInput(""); setOutput(""); setError(""); }}>{l}</button>
        ))}
      </div>

      <div className="j2csv-panes">
        <div className="j2csv-pane">
          <label className="j2csv-label">{mode==="toCsv"?"JSON Input":"CSV Input"}</label>
          <textarea className="j2csv-textarea" rows={12} placeholder={mode==="toCsv"?'[{"name":"Alice","age":30},{"name":"Bob","age":25}]':"name,age\nAlice,30\nBob,25"} value={input} onChange={e => setInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="j2csv-pane">
          <div className="j2csv-label-row">
            <label className="j2csv-label">{mode==="toCsv"?"CSV Output":"JSON Output"}</label>
            <div className="j2csv-out-actions">
              {output && <button className="j2csv-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
              {output && <button className="j2csv-dl-btn" onClick={download}>Download</button>}
            </div>
          </div>
          <textarea className="j2csv-textarea j2csv-textarea--out" rows={12} readOnly value={error || output} />
        </div>
      </div>

      <button className="j2csv-btn" onClick={convert} disabled={!input.trim()}>Convert</button>
    </div>
  );
}
