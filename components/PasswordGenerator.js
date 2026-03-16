"use client";

import { useState, useCallback } from "react";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function calcEntropy(length, upper, lower, nums, syms) {
  let pool = 0;
  if (upper) pool += 26;
  if (lower) pool += 26;
  if (nums) pool += 10;
  if (syms) pool += SYMS.length;
  if (pool === 0) return 0;
  return Math.floor(length * Math.log2(pool));
}

function strengthLabel(entropy) {
  if (entropy < 40) return { label: "Weak", pct: 20, cls: "pwgen-strength-fill--weak" };
  if (entropy < 60) return { label: "Medium", pct: 50, cls: "pwgen-strength-fill--medium" };
  if (entropy < 80) return { label: "Strong", pct: 75, cls: "pwgen-strength-fill--strong" };
  return { label: "Very Strong", pct: 100, cls: "pwgen-strength-fill--vstrong" };
}

function generateOne(length, upper, lower, nums, syms) {
  let charset = "";
  if (upper) charset += UPPER;
  if (lower) charset += LOWER;
  if (nums) charset += NUMS;
  if (syms) charset += SYMS;
  if (!charset) charset = LOWER;
  let pw = "";
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  for (let i = 0; i < length; i++) {
    pw += charset[arr[i] % charset.length];
  }
  return pw;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [nums, setNums] = useState(true);
  const [syms, setSyms] = useState(true);
  const [password, setPassword] = useState(() => generateOne(16, true, true, true, true));
  const [copied, setCopied] = useState(false);
  const [multiList, setMultiList] = useState([]);

  const generate = useCallback(() => {
    setPassword(generateOne(length, upper, lower, nums, syms));
    setMultiList([]);
  }, [length, upper, lower, nums, syms]);

  const generateMulti = useCallback(() => {
    const list = Array.from({ length: 5 }, () => generateOne(length, upper, lower, nums, syms));
    setMultiList(list);
  }, [length, upper, lower, nums, syms]);

  async function copyPw(pw) {
    await navigator.clipboard.writeText(pw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const entropy = calcEntropy(length, upper, lower, nums, syms);
  const strength = strengthLabel(entropy);

  return (
    <div className="pwgen-wrap">
      <div className="pwgen-length-row">
        <span className="pwgen-length-label">Length</span>
        <span className="pwgen-length-val">{length}</span>
        <input
          className="pwgen-slider"
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className="pwgen-toggles">
        {[
          { label: "A–Z Uppercase", value: upper, set: setUpper },
          { label: "a–z Lowercase", value: lower, set: setLower },
          { label: "0–9 Numbers", value: nums, set: setNums },
          { label: "!@# Symbols", value: syms, set: setSyms },
        ].map(({ label, value, set }) => (
          <button
            key={label}
            className={`pwgen-toggle${value ? " pwgen-toggle--on" : ""}`}
            onClick={() => set((v) => !v)}
          >
            {value ? "✓" : "○"} {label}
          </button>
        ))}
      </div>

      <div className="pwgen-result">
        <div className="pwgen-pw-display">{password}</div>
        <button className="pwgen-copy-btn" onClick={() => copyPw(password)}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="pwgen-strength">
        <div className="pwgen-strength-bar">
          <div
            className={`pwgen-strength-fill ${strength.cls}`}
            style={{ width: strength.pct + "%" }}
          />
        </div>
        <span className="pwgen-strength-label">{strength.label} · {entropy} bits</span>
      </div>

      <div className="pwgen-actions-row">
        <button className="pwgen-btn" onClick={generate}>Generate</button>
        <button className="pwgen-btn pwgen-btn--secondary" onClick={generateMulti}>Generate 5 More</button>
      </div>

      {multiList.length > 0 && (
        <div className="pwgen-multi-list">
          {multiList.map((pw, i) => (
            <div key={i} className="pwgen-multi-item">
              <span>{pw}</span>
              <button onClick={() => copyPw(pw)}>Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
