"use client";
import { useState } from "react";

// Basic YAML normalizer — normalizes indentation to 2-space, removes trailing spaces
function normalizeYaml(raw) {
  const lines = raw.split("\n");
  const result = [];
  let baseIndent = null;
  for (const line of lines) {
    if (!line.trim()) { result.push(""); continue; }
    const spaces = line.match(/^(\s*)/)[1].length;
    if (baseIndent === null && spaces > 0) baseIndent = spaces;
    const normalized = baseIndent ? " ".repeat(Math.round(spaces / baseIndent) * 2) + line.trimStart() : line.trimEnd();
    result.push(normalized);
  }
  return result.join("\n").trim();
}

// Basic YAML to JSON (very simple — handles flat key: value and nested)
function yamlToJson(yaml) {
  const obj = {};
  const lines = yaml.split("\n").filter(l => l.trim() && !l.trim().startsWith("#"));
  for (const line of lines) {
    const match = line.match(/^(\s*)([^:]+):\s*(.*)$/);
    if (!match) continue;
    const [, , key, val] = match;
    const k = key.trim();
    const v = val.trim();
    if (!v) continue;
    const parsed = v === "true" ? true : v === "false" ? false : v === "null" ? null :
      !isNaN(v) && v !== "" ? Number(v) : v.replace(/^["']|["']$/g, "");
    obj[k] = parsed;
  }
  return JSON.stringify(obj, null, 2);
}

export default function YamlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("format"); // format | tojson
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function process() {
    setError("");
    try {
      if (mode === "format") setOutput(normalizeYaml(input));
      else setOutput(yamlToJson(input));
    } catch (e) {
      setError("Processing failed: " + e.message);
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="yamlfmt-wrap">
      <div className="yamlfmt-mode-row">
        {[["format","Format YAML"],["tojson","YAML → JSON"]].map(([v,l]) => (
          <button key={v} className={`yamlfmt-tab${mode===v?" yamlfmt-tab--on":""}`} onClick={() => setMode(v)}>{l}</button>
        ))}
      </div>

      <div className="yamlfmt-panes">
        <div className="yamlfmt-pane">
          <label className="yamlfmt-label">YAML Input</label>
          <textarea className="yamlfmt-textarea" rows={14} placeholder="Paste YAML here..." value={input} onChange={e => setInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="yamlfmt-pane">
          <div className="yamlfmt-label-row">
            <label className="yamlfmt-label">Output</label>
            {output && <button className="yamlfmt-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="yamlfmt-textarea yamlfmt-textarea--out" rows={14} readOnly value={output} />
        </div>
      </div>

      <div className="yamlfmt-actions">
        <button className="yamlfmt-btn" onClick={process} disabled={!input.trim()}>
          {mode === "format" ? "Format YAML" : "Convert to JSON"}
        </button>
      </div>
      {error && <p className="yamlfmt-error">{error}</p>}
    </div>
  );
}
