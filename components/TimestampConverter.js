"use client";
import { useState } from "react";

function fmtUnix(ts) {
  const d = new Date(ts * 1000);
  return {
    utc: d.toUTCString(),
    iso: d.toISOString(),
    local: d.toLocaleString(),
    relative: relativeTime(ts),
  };
}

function relativeTime(ts) {
  const diff = Math.floor(Date.now() / 1000) - ts;
  const abs = Math.abs(diff);
  const future = diff < 0;
  if (abs < 60) return future ? `in ${abs}s` : `${abs}s ago`;
  if (abs < 3600) return future ? `in ${Math.floor(abs/60)}m` : `${Math.floor(abs/60)}m ago`;
  if (abs < 86400) return future ? `in ${Math.floor(abs/3600)}h` : `${Math.floor(abs/3600)}h ago`;
  return future ? `in ${Math.floor(abs/86400)}d` : `${Math.floor(abs/86400)}d ago`;
}

export default function TimestampConverter() {
  const [tsInput, setTsInput] = useState("");
  const [dtInput, setDtInput] = useState("");
  const [tsResult, setTsResult] = useState(null);
  const [dtResult, setDtResult] = useState(null);
  const [copied, setCopied] = useState(null);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  function now() {
    const ts = Math.floor(Date.now() / 1000);
    setTsInput(String(ts));
    setTsResult(fmtUnix(ts));
    setError1("");
  }

  function convertTs() {
    const ts = parseInt(tsInput.trim(), 10);
    if (isNaN(ts)) { setError1("Enter a valid Unix timestamp (seconds since epoch)."); return; }
    setError1("");
    setTsResult(fmtUnix(ts));
  }

  function convertDt() {
    const ms = Date.parse(dtInput.trim());
    if (isNaN(ms)) { setError2("Enter a valid date string (e.g. 2024-01-15 or Jan 15, 2024 12:00)."); return; }
    setError2("");
    setDtResult({ unix: Math.floor(ms / 1000), ms });
  }

  async function copy(val, key) {
    await navigator.clipboard.writeText(String(val));
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="tsconv-wrap">
      <div className="tsconv-half">
        <h3 className="tsconv-section-title">Unix Timestamp → Date</h3>
        <div className="tsconv-input-row">
          <input className="tsconv-input" placeholder="e.g. 1700000000" value={tsInput} onChange={e => setTsInput(e.target.value)} />
          <button className="tsconv-btn" onClick={convertTs}>Convert</button>
          <button className="tsconv-btn tsconv-btn--sec" onClick={now}>Now</button>
        </div>
        {error1 && <p className="tsconv-error">{error1}</p>}
        {tsResult && (
          <div className="tsconv-result-card">
            {[["UTC", tsResult.utc],["ISO 8601", tsResult.iso],["Local", tsResult.local],["Relative", tsResult.relative]].map(([label, val]) => (
              <div key={label} className="tsconv-row">
                <span className="tsconv-row-label">{label}</span>
                <span className="tsconv-row-val">{val}</span>
                <button className="tsconv-copy-mini" onClick={() => copy(val, label)}>{copied===label?"✓":"⧉"}</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="tsconv-half">
        <h3 className="tsconv-section-title">Date → Unix Timestamp</h3>
        <div className="tsconv-input-row">
          <input className="tsconv-input" placeholder="e.g. 2024-01-15T12:00:00" value={dtInput} onChange={e => setDtInput(e.target.value)} />
          <button className="tsconv-btn" onClick={convertDt}>Convert</button>
        </div>
        {error2 && <p className="tsconv-error">{error2}</p>}
        {dtResult && (
          <div className="tsconv-result-card">
            {[["Unix (seconds)", dtResult.unix],["Unix (ms)", dtResult.ms]].map(([label, val]) => (
              <div key={label} className="tsconv-row">
                <span className="tsconv-row-label">{label}</span>
                <span className="tsconv-row-val">{val}</span>
                <button className="tsconv-copy-mini" onClick={() => copy(val, label)}>{copied===label?"✓":"⧉"}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
