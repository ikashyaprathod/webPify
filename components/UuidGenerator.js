"use client";
import { useState, useCallback } from "react";

function newUuid() {
  return crypto.randomUUID();
}

export default function UuidGenerator() {
  const [uuid, setUuid] = useState(() => newUuid());
  const [batch, setBatch] = useState([]);
  const [copied, setCopied] = useState(null);
  const [format, setFormat] = useState("standard"); // standard | uppercase | nodash

  function fmt(u) {
    if (format === "uppercase") return u.toUpperCase();
    if (format === "nodash") return u.replace(/-/g, "");
    return u;
  }

  async function copy(val, key) {
    await navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  }

  const generate = useCallback(() => {
    setUuid(newUuid());
    setBatch([]);
  }, []);

  const generateBatch = useCallback(() => {
    setBatch(Array.from({ length: 10 }, newUuid));
  }, []);

  return (
    <div className="uuid-wrap">
      <div className="uuid-format-row">
        {[["standard","Standard"],["uppercase","UPPERCASE"],["nodash","No Dashes"]].map(([v,l]) => (
          <button key={v} className={`uuid-fmt-btn${format===v?" uuid-fmt-btn--on":""}`} onClick={() => setFormat(v)}>{l}</button>
        ))}
      </div>

      <div className="uuid-card">
        <div className="uuid-result-row">
          <code className="uuid-result">{fmt(uuid)}</code>
          <button className="uuid-copy-btn" onClick={() => copy(fmt(uuid), "main")}>
            {copied === "main" ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="uuid-actions">
          <button className="uuid-btn" onClick={generate}>Generate New</button>
          <button className="uuid-btn uuid-btn--sec" onClick={generateBatch}>Generate 10</button>
        </div>
      </div>

      {batch.length > 0 && (
        <div className="uuid-batch">
          <div className="uuid-batch-hd">
            <span>10 UUIDs</span>
            <button className="uuid-copy-btn" onClick={() => copy(batch.map(fmt).join("\n"), "all")}>
              {copied === "all" ? "Copied All!" : "Copy All"}
            </button>
          </div>
          {batch.map((u, i) => (
            <div key={i} className="uuid-batch-row">
              <code>{fmt(u)}</code>
              <button onClick={() => copy(fmt(u), i)}>{copied === i ? "✓" : "Copy"}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
