"use client";
import { useState, useMemo } from "react";

// Simple LCS-based diff
function computeDiff(orig, mod) {
  const origLines = orig.split("\n");
  const modLines = mod.split("\n");
  const n = origLines.length, m = modLines.length;

  // Build LCS table
  const dp = Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      if(origLines[i-1]===modLines[j-1]) dp[i][j]=dp[i-1][j-1]+1;
      else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
    }
  }

  const result = [];
  let i=n, j=m;
  while(i>0||j>0){
    if(i>0&&j>0&&origLines[i-1]===modLines[j-1]){
      result.unshift({type:"same",text:origLines[i-1]});
      i--;j--;
    } else if(j>0&&(i===0||dp[i][j-1]>=dp[i-1][j])){
      result.unshift({type:"add",text:modLines[j-1]});
      j--;
    } else {
      result.unshift({type:"del",text:origLines[i-1]});
      i--;
    }
  }
  return result;
}

function wordDiff(line1, line2) {
  const w1 = line1.split(/(\s+)/);
  const w2 = line2.split(/(\s+)/);
  const set1 = new Set(w1);
  const set2 = new Set(w2);
  const removed = w1.map(w=>set2.has(w)?`<span class="diff-word-same">${w}</span>`:`<span class="diff-word-del">${w}</span>`).join("");
  const added = w2.map(w=>set1.has(w)?`<span class="diff-word-same">${w}</span>`:`<span class="diff-word-add">${w}</span>`).join("");
  return {removed, added};
}

export default function DiffChecker() {
  const [orig, setOrig] = useState("");
  const [mod, setMod] = useState("");
  const [diffResult, setDiffResult] = useState(null);
  const [wordMode, setWordMode] = useState(false);

  const compare = () => {
    setDiffResult(computeDiff(orig, mod));
  };

  const summary = useMemo(()=>{
    if(!diffResult) return null;
    const added = diffResult.filter(l=>l.type==="add").length;
    const removed = diffResult.filter(l=>l.type==="del").length;
    return {added, removed};
  },[diffResult]);

  return (
    <div className="diff-wrap">
      <div className="diff-panels">
        <div className="diff-panel">
          <span className="diff-panel-label">Original</span>
          <textarea className="diff-textarea" value={orig} onChange={e=>setOrig(e.target.value)}
            placeholder="Paste original text here..." />
        </div>
        <div className="diff-panel">
          <span className="diff-panel-label">Modified</span>
          <textarea className="diff-textarea" value={mod} onChange={e=>setMod(e.target.value)}
            placeholder="Paste modified text here..." />
        </div>
      </div>

      <div className="diff-controls-row">
        <button className="diff-btn" onClick={compare}>Compare</button>
        <label className="diff-word-toggle">
          <input type="checkbox" checked={wordMode} onChange={e=>setWordMode(e.target.checked)} />
          Word-level diff
        </label>
      </div>

      {diffResult && (
        <>
          {summary && (
            <div className="diff-summary">
              <span className="diff-summary-add">+{summary.added} lines added</span>
              <span className="diff-summary-del">−{summary.removed} lines removed</span>
            </div>
          )}
          <div className="diff-result">
            {diffResult.map((line,i)=>{
              if(wordMode && line.type==="del") {
                // find matching add line
                const nextAdd = diffResult[i+1];
                if(nextAdd&&nextAdd.type==="add"){
                  const {removed} = wordDiff(line.text, nextAdd.text);
                  return (
                    <div key={i} className="diff-line diff-line--del"
                      dangerouslySetInnerHTML={{__html:`- ${removed}`}} />
                  );
                }
              }
              if(wordMode && line.type==="add") {
                const prevDel = diffResult[i-1];
                if(prevDel&&prevDel.type==="del"){
                  const {added} = wordDiff(prevDel.text, line.text);
                  return (
                    <div key={i} className="diff-line diff-line--add"
                      dangerouslySetInnerHTML={{__html:`+ ${added}`}} />
                  );
                }
              }
              return (
                <div key={i} className={`diff-line diff-line--${line.type}`}>
                  {line.type==="add"?"+ ":line.type==="del"?"- ":"  "}{line.text}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
