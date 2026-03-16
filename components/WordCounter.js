"use client";
import { useState, useMemo } from "react";

function getStats(text) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g,"").length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p=>p.trim()).length;
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount/200);
  const speakingTime = Math.ceil(wordCount/130);

  const freq = {};
  words.forEach(w=>{
    const clean = w.toLowerCase().replace(/[^a-z0-9]/g,"");
    if(clean.length>2) freq[clean]=(freq[clean]||0)+1;
  });
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,10);

  return {wordCount,chars,charsNoSpaces,sentences,paragraphs,readingTime,speakingTime,topWords};
}

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const stats = useMemo(()=>getStats(text),[text]);

  const copyText = () => {
    if(!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  return (
    <div className="wc-wrap">
      <textarea className="wc-textarea" value={text} onChange={e=>setText(e.target.value)}
        placeholder="Start typing or paste your text here..." />

      <div className="wc-actions">
        <button className="wc-btn" onClick={()=>setText("")}>Clear</button>
        <button className="wc-btn wc-btn--outline" onClick={copyText}>{copied?"Copied!":"Copy Text"}</button>
      </div>

      <div className="wc-stats-grid">
        {[
          {val:stats.wordCount, lbl:"Words"},
          {val:stats.chars, lbl:"Characters"},
          {val:stats.charsNoSpaces, lbl:"No Spaces"},
          {val:stats.sentences, lbl:"Sentences"},
          {val:stats.paragraphs, lbl:"Paragraphs"},
          {val:`~${stats.readingTime} min`, lbl:"Reading Time"},
          {val:`~${stats.speakingTime} min`, lbl:"Speaking Time"},
        ].map((s,i)=>(
          <div key={i} className="wc-stat">
            <span className="wc-stat-val">{s.val}</span>
            <span className="wc-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      {stats.topWords.length>0 && (
        <div className="wc-top-words">
          <h3 className="wc-top-words-title">Top 10 Words</h3>
          <div className="wc-word-list">
            {stats.topWords.map(([word,count])=>(
              <div key={word} className="wc-word-item">
                <span className="wc-word-text">{word}</span>
                <span className="wc-word-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
