"use client";
import { useState, useMemo } from "react";

function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i+2) === 0) return false;
  return true;
}
function getFactors(n) {
  const factors = [];
  let d = 2, num = n;
  while (d * d <= num) { while (num % d === 0) { factors.push(d); num = Math.floor(num / d); } d++; }
  if (num > 1) factors.push(num);
  return factors;
}
function primesUpTo(limit) {
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= limit; i++) if (sieve[i]) for (let j = i*i; j <= limit; j += i) sieve[j] = false;
  return sieve.reduce((acc, v, i) => v ? [...acc, i] : acc, []);
}

export default function PrimeChecker() {
  const [input, setInput] = useState("97");
  const [listLimit, setListLimit] = useState("100");

  const n = parseInt(input);
  const result = useMemo(() => {
    if (isNaN(n) || n < 0) return null;
    const prime = isPrime(n);
    const factors = prime ? [n] : getFactors(n);
    const nextP = (() => { let x = n + 1; while (!isPrime(x)) x++; return x; })();
    const prevP = (() => { if (n <= 2) return null; let x = n - 1; while (x > 1 && !isPrime(x)) x--; return x > 1 ? x : null; })();
    return { prime, factors, nextP, prevP };
  }, [n]);

  const primeList = useMemo(() => {
    const lim = Math.min(parseInt(listLimit) || 100, 10000);
    return primesUpTo(lim);
  }, [listLimit]);

  return (
    <div className="primechk-wrap">
      <div className="primechk-input-row">
        <div className="primechk-field">
          <label className="primechk-label">Check a number</label>
          <input className="primechk-input" type="number" value={input} onChange={e=>setInput(e.target.value)} min="0" placeholder="97" />
        </div>
      </div>
      {result && (
        <div className={`primechk-verdict ${result.prime ? "primechk-verdict--yes" : "primechk-verdict--no"}`}>
          <p className="primechk-verdict-num">{n}</p>
          <p className="primechk-verdict-label">{result.prime ? "✓ Prime" : "✗ Not Prime"}</p>
          {!result.prime && <p className="primechk-factors">Prime factors: {result.factors.join(" × ")}</p>}
          <div className="primechk-neighbors">
            {result.prevP && <span>Prev prime: {result.prevP}</span>}
            <span>Next prime: {result.nextP}</span>
          </div>
        </div>
      )}
      <div className="primechk-list-section">
        <div className="primechk-list-header">
          <label className="primechk-label">Primes up to</label>
          <input className="primechk-input primechk-input--sm" type="number" value={listLimit} onChange={e=>setListLimit(e.target.value)} min="2" max="10000" />
        </div>
        <div className="primechk-list">{primeList.join(", ")}</div>
      </div>
    </div>
  );
}
