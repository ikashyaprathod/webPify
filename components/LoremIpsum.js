"use client";
import { useState } from "react";

const LOREM_WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit".split(" ");

function randomWord(start=0) {
  return LOREM_WORDS[Math.floor(Math.random()*(LOREM_WORDS.length-start))+start];
}

function generateWords(n, startLorem) {
  const words = [];
  for(let i=0;i<n;i++){
    if(i===0&&startLorem){ words.push("Lorem"); }
    else if(i===1&&startLorem){ words.push("ipsum"); }
    else { words.push(randomWord(startLorem&&i<2?0:0)); }
  }
  return words.join(" ");
}

function generateSentences(n, startLorem) {
  const sentences = [];
  for(let i=0;i<n;i++){
    const wCount = 8+Math.floor(Math.random()*10);
    const words = [];
    for(let j=0;j<wCount;j++){
      if(i===0&&j===0&&startLorem) words.push("Lorem");
      else if(i===0&&j===1&&startLorem) words.push("ipsum");
      else words.push(randomWord());
    }
    const sentence = words.join(" ");
    sentences.push(sentence.charAt(0).toUpperCase()+sentence.slice(1)+".");
  }
  return sentences.join(" ");
}

function generateParagraphs(n, startLorem) {
  const paragraphs = [];
  for(let i=0;i<n;i++){
    const sCount = 4+Math.floor(Math.random()*3);
    const sentences = [];
    for(let j=0;j<sCount;j++){
      const wCount = 8+Math.floor(Math.random()*10);
      const words = [];
      for(let k=0;k<wCount;k++){
        if(i===0&&j===0&&k===0&&startLorem) words.push("Lorem");
        else if(i===0&&j===0&&k===1&&startLorem) words.push("ipsum");
        else words.push(randomWord());
      }
      const sentence = words.join(" ");
      sentences.push(sentence.charAt(0).toUpperCase()+sentence.slice(1)+".");
    }
    paragraphs.push(sentences.join(" "));
  }
  return paragraphs;
}

export default function LoremIpsum() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState("paragraphs");
  const [startLorem, setStartLorem] = useState(true);
  const [wrapP, setWrapP] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let result = "";
    const n = Math.max(1,Math.min(100,count));
    if(type==="words") {
      result = generateWords(n, startLorem);
      if(wrapP) result = `<p>${result}</p>`;
    } else if(type==="sentences") {
      result = generateSentences(n, startLorem);
      if(wrapP) result = `<p>${result}</p>`;
    } else {
      const paras = generateParagraphs(n, startLorem);
      result = wrapP ? paras.map(p=>`<p>${p}</p>`).join("\n\n") : paras.join("\n\n");
    }
    setOutput(result);
  };

  const copy = () => {
    if(!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(()=>setCopied(false),1500);
  };

  const download = () => {
    if(!output) return;
    const blob = new Blob([output],{type:"text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "lorem-ipsum.txt";
    a.click();
  };

  return (
    <div className="lorem-wrap">
      <div className="lorem-controls">
        <div className="lorem-count-row">
          <label className="lorem-label">Number</label>
          <input type="number" min="1" max="100" value={count}
            onChange={e=>setCount(parseInt(e.target.value)||1)}
            className="lorem-number-input" />
        </div>

        <div className="lorem-type-group">
          {["words","sentences","paragraphs"].map(t=>(
            <button key={t} onClick={()=>setType(t)}
              className={`lorem-type-btn${type===t?" lorem-type-btn--on":""}`}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>

        <div className="lorem-toggles">
          <label className="lorem-toggle">
            <input type="checkbox" checked={startLorem} onChange={e=>setStartLorem(e.target.checked)} />
            Start with "Lorem ipsum..."
          </label>
          <label className="lorem-toggle">
            <input type="checkbox" checked={wrapP} onChange={e=>setWrapP(e.target.checked)} />
            Wrap in &lt;p&gt; tags
          </label>
        </div>

        <button className="lorem-btn" onClick={generate}>Generate</button>
      </div>

      {output && (
        <div className="lorem-output">
          <textarea className="lorem-textarea" readOnly value={output} />
          <div className="lorem-actions">
            <button className="lorem-btn" onClick={copy}>{copied?"Copied!":"Copy"}</button>
            <button className="lorem-btn lorem-btn--outline" onClick={download}>Download .txt</button>
          </div>
        </div>
      )}
    </div>
  );
}
