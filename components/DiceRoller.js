"use client";
import { useState } from "react";

const DICE_TYPES = [4, 6, 8, 10, 12, 20, 100];
const FACES = { 4:"▲", 6:"⬡", 8:"◈", 10:"◇", 12:"⬠", 20:"△", 100:"⬟" };

export default function DiceRoller() {
  const [diceType, setDiceType] = useState(6);
  const [numDice, setNumDice] = useState(2);
  const [results, setResults] = useState([]);
  const [rolling, setRolling] = useState(false);

  function roll() {
    setRolling(true);
    setTimeout(() => {
      const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * diceType) + 1);
      setResults(rolls);
      setRolling(false);
    }, 250);
  }

  const total = results.reduce((a, b) => a + b, 0);

  return (
    <div className="dice-wrap">
      <div className="dice-controls">
        <div className="dice-field">
          <label className="dice-label">Number of Dice</label>
          <input className="dice-input" type="number" value={numDice} onChange={e=>setNumDice(Math.max(1,Math.min(20,parseInt(e.target.value)||1)))} min="1" max="20" />
        </div>
        <div className="dice-field">
          <label className="dice-label">Dice Type</label>
          <div className="dice-types">
            {DICE_TYPES.map(d => (
              <button key={d} className={`dice-type-btn${diceType===d?" dice-type-btn--on":""}`} onClick={()=>setDiceType(d)}>d{d}</button>
            ))}
          </div>
        </div>
      </div>
      <button className="dice-roll-btn" onClick={roll} disabled={rolling}>
        {rolling ? "Rolling…" : `🎲 Roll ${numDice}d${diceType}`}
      </button>
      {results.length > 0 && (
        <div className="dice-results">
          <div className="dice-faces">
            {results.map((r, i) => (
              <div key={i} className="dice-face">
                <span className="dice-face-icon">{FACES[diceType]}</span>
                <span className="dice-face-val">{r}</span>
              </div>
            ))}
          </div>
          {numDice > 1 && (
            <div className="dice-total">
              <span className="dice-total-label">Total</span>
              <span className="dice-total-val">{total}</span>
              <span className="dice-total-avg">avg {(total / numDice).toFixed(1)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
