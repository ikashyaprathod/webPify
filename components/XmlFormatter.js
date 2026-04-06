"use client";
import { useState } from "react";

function formatXml(xml) {
  const INDENT = "  ";
  let result = "";
  let depth = 0;
  const tokens = xml.match(/<[^>]+>|[^<]+/g) || [];
  for (const token of tokens) {
    const text = token.trim();
    if (!text) continue;
    if (text.startsWith("</")) {
      depth = Math.max(0, depth - 1);
      result += INDENT.repeat(depth) + text + "\n";
    } else if (text.startsWith("<?") || text.startsWith("<!")) {
      result += INDENT.repeat(depth) + text + "\n";
    } else if (text.endsWith("/>")) {
      result += INDENT.repeat(depth) + text + "\n";
    } else if (text.startsWith("<")) {
      result += INDENT.repeat(depth) + text + "\n";
      depth++;
    } else {
      result += INDENT.repeat(depth) + text + "\n";
    }
  }
  return result.trim();
}

function minifyXml(xml) {
  return xml.replace(/\s+/g, " ").replace(/> </g, "><").trim();
}

function validateXml(xml) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "text/xml");
    const err = doc.querySelector("parsererror");
    if (err) return { valid: false, message: err.textContent.split("\n")[0] };
    return { valid: true };
  } catch { return { valid: false, message: "Parse error" }; }
}

export default function XmlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [validation, setValidation] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleFormat() {
    const v = validateXml(input.trim());
    setValidation(v);
    if (v.valid) setOutput(formatXml(input.trim()));
  }

  function handleMinify() {
    const v = validateXml(input.trim());
    setValidation(v);
    if (v.valid) setOutput(minifyXml(input.trim()));
  }

  function handleValidate() {
    setValidation(validateXml(input.trim()));
    setOutput("");
  }

  async function copy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="xmlfmt-wrap">
      <div className="xmlfmt-panes">
        <div className="xmlfmt-pane">
          <label className="xmlfmt-label">XML Input</label>
          <textarea className="xmlfmt-textarea" rows={14} placeholder="Paste XML here..." value={input} onChange={e => setInput(e.target.value)} spellCheck={false} />
        </div>
        <div className="xmlfmt-pane">
          <div className="xmlfmt-label-row">
            <label className="xmlfmt-label">Output</label>
            {output && <button className="xmlfmt-copy-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>}
          </div>
          <textarea className="xmlfmt-textarea xmlfmt-textarea--out" rows={14} readOnly value={output} />
        </div>
      </div>

      <div className="xmlfmt-actions">
        <button className="xmlfmt-btn" onClick={handleFormat} disabled={!input.trim()}>Format / Beautify</button>
        <button className="xmlfmt-btn xmlfmt-btn--sec" onClick={handleMinify} disabled={!input.trim()}>Minify</button>
        <button className="xmlfmt-btn xmlfmt-btn--sec" onClick={handleValidate} disabled={!input.trim()}>Validate Only</button>
      </div>

      {validation && (
        <div className={`xmlfmt-status${validation.valid?" xmlfmt-status--ok":" xmlfmt-status--err"}`}>
          {validation.valid ? "✓ Valid XML" : "✗ " + validation.message}
        </div>
      )}
    </div>
  );
}
