"use client";
import { useState } from "react";

function base64UrlDecode(str) {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "===".slice((b64.length % 4) || 4);
  return JSON.parse(atob(padded));
}

function formatExpiry(ts) {
  if (!ts) return null;
  const d = new Date(ts * 1000);
  const now = Date.now();
  const expired = ts * 1000 < now;
  return { date: d.toLocaleString(), expired };
}

export default function JwtDecoder() {
  const [jwt, setJwt] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(null);

  function decode() {
    setError("");
    setResult(null);
    const parts = jwt.trim().split(".");
    if (parts.length !== 3) { setError("Invalid JWT: must have 3 parts separated by dots."); return; }
    try {
      const header = base64UrlDecode(parts[0]);
      const payload = base64UrlDecode(parts[1]);
      setResult({ header, payload, sig: parts[2] });
    } catch {
      setError("Failed to decode JWT. Make sure it is a valid token.");
    }
  }

  async function copy(val, key) {
    await navigator.clipboard.writeText(typeof val === "object" ? JSON.stringify(val, null, 2) : val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  const expiry = result ? formatExpiry(result.payload?.exp) : null;

  return (
    <div className="jwtd-wrap">
      <div className="jwtd-card">
        <textarea
          className="jwtd-input"
          placeholder="Paste your JWT token here (eyJ...)"
          rows={4}
          value={jwt}
          onChange={e => setJwt(e.target.value)}
          spellCheck={false}
        />
        <button className="jwtd-btn" onClick={decode} disabled={!jwt.trim()}>Decode JWT</button>
        {error && <p className="jwtd-error">{error}</p>}
      </div>

      {result && (
        <>
          {expiry && (
            <div className={`jwtd-expiry${expiry.expired ? " jwtd-expiry--expired" : " jwtd-expiry--valid"}`}>
              {expiry.expired ? "⚠ Token expired:" : "✓ Token expires:"} {expiry.date}
            </div>
          )}

          {[["Header", result.header, "hdr"], ["Payload", result.payload, "pay"]].map(([label, data, key]) => (
            <div key={key} className="jwtd-section">
              <div className="jwtd-section-hd">
                <span className="jwtd-section-label">{label}</span>
                <button className="jwtd-copy-btn" onClick={() => copy(data, key)}>{copied===key?"Copied!":"Copy"}</button>
              </div>
              <pre className="jwtd-json">{JSON.stringify(data, null, 2)}</pre>
            </div>
          ))}

          <div className="jwtd-section">
            <div className="jwtd-section-hd">
              <span className="jwtd-section-label">Signature</span>
              <button className="jwtd-copy-btn" onClick={() => copy(result.sig, "sig")}>{copied==="sig"?"Copied!":"Copy"}</button>
            </div>
            <code className="jwtd-sig">{result.sig}</code>
            <p className="jwtd-note">Signature is not verified client-side. Use your secret key server-side to validate.</p>
          </div>
        </>
      )}
    </div>
  );
}
