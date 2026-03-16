"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [activeMode, setActiveMode] = useState("");
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState(null);

  function process(mode) {
    setActiveMode(mode);
    setError("");
    try {
      const parsed = JSON.parse(input);
      if (mode === "beautify") {
        const result = JSON.stringify(parsed, null, 2);
        setOutput(result);
        setStats({ in: input.length, out: result.length });
      } else if (mode === "minify") {
        const result = JSON.stringify(parsed);
        setOutput(result);
        setStats({ in: input.length, out: result.length });
      } else if (mode === "validate") {
        setOutput("✓ Valid JSON — " + (Array.isArray(parsed) ? `Array with ${parsed.length} items` : `Object with ${Object.keys(parsed).length} keys`));
        setStats(null);
      }
    } catch (e) {
      const lineMatch = e.message.match(/position (\d+)/);
      let lineNum = "";
      if (lineMatch) {
        const pos = Number(lineMatch[1]);
        const before = input.slice(0, pos);
        lineNum = ` (line ${before.split("\n").length})`;
      }
      setOutput("");
      setError(`Invalid JSON${lineNum}: ${e.message}`);
    }
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function clear() {
    setInput("");
    setOutput("");
    setError("");
    setStats(null);
    setActiveMode("");
  }

  return (
    <div className="jsonf-wrap">
      <div className="jsonf-toolbar">
        <button
          className={`jsonf-btn${activeMode === "beautify" ? " jsonf-btn--active" : ""}`}
          onClick={() => process("beautify")}
        >
          Beautify
        </button>
        <button
          className={`jsonf-btn${activeMode === "minify" ? " jsonf-btn--active" : ""}`}
          onClick={() => process("minify")}
        >
          Minify
        </button>
        <button
          className={`jsonf-btn${activeMode === "validate" ? " jsonf-btn--active" : ""}`}
          onClick={() => process("validate")}
        >
          Validate
        </button>
        <button className="jsonf-clear-btn" onClick={clear}>Clear</button>
      </div>

      <div className="jsonf-panels">
        <div className="jsonf-panel">
          <label className="jsonf-label">Input JSON</label>
          <textarea
            className={`jsonf-textarea${error ? " jsonf-textarea--error" : ""}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"key": "value"}'
            spellCheck={false}
          />
          {error && <div className="jsonf-error-msg">{error}</div>}
        </div>
        <div className="jsonf-panel">
          <label className="jsonf-label">Output</label>
          <textarea
            className="jsonf-textarea"
            value={output}
            readOnly
            placeholder="Result will appear here..."
            spellCheck={false}
          />
          {stats && (
            <div className="jsonf-stats">
              Input: {stats.in} chars · Output: {stats.out} chars ·{" "}
              {stats.in > stats.out
                ? `${Math.round((1 - stats.out / stats.in) * 100)}% smaller`
                : `${Math.round((stats.out / stats.in - 1) * 100)}% larger`}
            </div>
          )}
        </div>
      </div>

      <div className="jsonf-actions">
        <button className="jsonf-copy-btn" onClick={copyOutput}>
          {copied ? "Copied!" : "Copy Output"}
        </button>
      </div>
    </div>
  );
}
