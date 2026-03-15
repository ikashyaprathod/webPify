"use client";

import { useState } from "react";

function fmtBytes(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024, sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

export default function Base64Encoder() {
  const [mode, setMode] = useState("encode"); // encode | decode
  const [encoded, setEncoded] = useState("");
  const [decodeInput, setDecodeInput] = useState("");
  const [decodedUrl, setDecodedUrl] = useState(null);
  const [decodedType, setDecodedType] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function handleFile(f) {
    if (!f || !f.type.startsWith("image/")) { setError("Please upload an image file."); return; }
    setError("");
    const reader = new FileReader();
    reader.onloadend = () => setEncoded(reader.result);
    reader.readAsDataURL(f);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(encoded);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  }

  function handleDecode() {
    setError("");
    try {
      let input = decodeInput.trim();
      if (!input.startsWith("data:")) {
        input = "data:image/png;base64," + input;
      }
      const [header] = input.split(",");
      const mime = header.split(":")[1].split(";")[0];
      setDecodedUrl(input);
      setDecodedType(mime);
    } catch (err) {
      setError("Invalid base64 string: " + err.message);
    }
  }

  function handleDownloadDecoded() {
    if (!decodedUrl) return;
    const a = document.createElement("a");
    a.href = decodedUrl;
    a.download = "decoded-image.png";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  const charCount = encoded.length;
  const estimatedSize = Math.round(charCount * 0.75);

  return (
    <div className="b64-wrap">
      {error && (
        <div className="b64-error">
          <span>{error}</span>
          <button onClick={() => setError("")} className="b64-close-btn">×</button>
        </div>
      )}

      <div className="b64-mode-tabs">
        <button className={`b64-tab${mode === "encode" ? " b64-tab--on" : ""}`} onClick={() => { setMode("encode"); setEncoded(""); }}>Encode Image</button>
        <button className={`b64-tab${mode === "decode" ? " b64-tab--on" : ""}`} onClick={() => { setMode("decode"); setDecodedUrl(null); }}>Decode Base64</button>
      </div>

      {mode === "encode" && (
        <div className="b64-card">
          <div
            className={`b64-drop${dragging ? " b64-drop--active" : ""}`}
            onClick={() => document.getElementById("b64-input").click()}
            onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
          >
            <input id="b64-input" type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />
            <div className="b64-drop-icon">🖼️</div>
            <p className="b64-drop-title">Drag & Drop Image here</p>
            <p className="b64-drop-sub">Click to browse</p>
          </div>

          {encoded && (
            <div className="b64-result">
              <div className="b64-stats">
                <span>{charCount.toLocaleString()} characters</span>
                <span>≈ {fmtBytes(estimatedSize)} decoded</span>
              </div>
              <textarea
                className="b64-textarea"
                value={encoded}
                readOnly
                rows={6}
                style={{ width: "100%", fontFamily: "monospace", fontSize: "0.75rem", padding: "0.75rem", borderRadius: 8, border: "1px solid #e2e8f0", resize: "vertical" }}
              />
              <button className="b64-btn" onClick={handleCopy}>{copied ? "Copied!" : "Copy Base64"}</button>
            </div>
          )}
        </div>
      )}

      {mode === "decode" && (
        <div className="b64-card">
          <p className="b64-hint">Paste a base64 string (with or without the data:image prefix)</p>
          <textarea
            className="b64-textarea"
            value={decodeInput}
            onChange={(e) => setDecodeInput(e.target.value)}
            rows={6}
            placeholder="data:image/png;base64,iVBORw0KGgo... or just the base64 part"
            style={{ width: "100%", fontFamily: "monospace", fontSize: "0.75rem", padding: "0.75rem", borderRadius: 8, border: "1px solid #e2e8f0", resize: "vertical", marginBottom: "0.75rem" }}
          />
          <button className="b64-btn" onClick={handleDecode} disabled={!decodeInput.trim()}>Decode</button>

          {decodedUrl && (
            <div className="b64-result" style={{ marginTop: "1rem" }}>
              <img src={decodedUrl} alt="Decoded" style={{ maxWidth: "100%", borderRadius: 8, border: "1px solid #e2e8f0", display: "block", marginBottom: "0.75rem" }} />
              <button className="b64-btn" onClick={handleDownloadDecoded}>⬇ Download Image</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
