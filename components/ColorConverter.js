"use client";
import { useState, useCallback } from "react";

const NAMED_COLORS = {
  red:"#ff0000",orange:"#ffa500",yellow:"#ffff00",green:"#008000",blue:"#0000ff",
  purple:"#800080",pink:"#ffc0cb",white:"#ffffff",black:"#000000",gray:"#808080",
  grey:"#808080",cyan:"#00ffff",magenta:"#ff00ff",lime:"#00ff00",teal:"#008080",
  navy:"#000080",maroon:"#800000",olive:"#808000",silver:"#c0c0c0",aqua:"#00ffff",
  coral:"#ff7f50",salmon:"#fa8072",gold:"#ffd700",violet:"#ee82ee",indigo:"#4b0082",
};

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return [r,g,b];
}

function rgbToHex(r,g,b) {
  return "#"+[r,g,b].map(v=>Math.round(Math.max(0,Math.min(255,v))).toString(16).padStart(2,"0")).join("");
}

function rgbToHsl(r,g,b) {
  r/=255; g/=255; b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){h=s=0;}
  else{
    const d=max-min;
    s=l>0.5?d/(2-max-min):d/(max+min);
    switch(max){
      case r:h=((g-b)/d+(g<b?6:0))/6;break;
      case g:h=((b-r)/d+2)/6;break;
      case b:h=((r-g)/d+4)/6;break;
    }
  }
  return [Math.round(h*360),Math.round(s*100),Math.round(l*100)];
}

function hslToRgb(h,s,l) {
  s/=100; l/=100;
  const k=n=>(n+h/30)%12;
  const a=s*Math.min(l,1-l);
  const f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));
  return [Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];
}

function rgbToCmyk(r,g,b) {
  r/=255; g/=255; b/=255;
  const k=1-Math.max(r,g,b);
  if(k===1) return [0,0,0,100];
  return [
    Math.round((1-r-k)/(1-k)*100),
    Math.round((1-g-k)/(1-k)*100),
    Math.round((1-b-k)/(1-k)*100),
    Math.round(k*100)
  ];
}

function isValidHex(h) { return /^#[0-9a-fA-F]{6}$/.test(h); }

export default function ColorConverter() {
  const [hex, setHex] = useState("#6366f1");
  const [rgb, setRgb] = useState([99,102,241]);
  const [hsl, setHsl] = useState(() => rgbToHsl(99,102,241));
  const [namedInput, setNamedInput] = useState("");
  const [copied, setCopied] = useState(null);

  const fromHex = useCallback((h) => {
    if(!isValidHex(h)) return;
    const [r,g,b]=hexToRgb(h);
    setRgb([r,g,b]);
    setHsl(rgbToHsl(r,g,b));
  },[]);

  const fromRgb = useCallback((r,g,b) => {
    const h=rgbToHex(r,g,b);
    setHex(h);
    setHsl(rgbToHsl(r,g,b));
  },[]);

  const fromHsl = useCallback((h,s,l) => {
    const [r,g,b]=hslToRgb(h,s,l);
    setRgb([r,g,b]);
    setHex(rgbToHex(r,g,b));
  },[]);

  const handleHexChange = (e) => {
    const v=e.target.value;
    setHex(v);
    if(isValidHex(v)) fromHex(v);
  };

  const handleRgbChange = (idx, val) => {
    const newRgb=[...rgb];
    newRgb[idx]=Math.max(0,Math.min(255,parseInt(val)||0));
    setRgb(newRgb);
    fromRgb(...newRgb);
  };

  const handleHslChange = (idx, val) => {
    const newHsl=[...hsl];
    const maxVals=[360,100,100];
    newHsl[idx]=Math.max(0,Math.min(maxVals[idx],parseInt(val)||0));
    setHsl(newHsl);
    fromHsl(...newHsl);
  };

  const handleNamedLookup = (e) => {
    const name=e.target.value.trim().toLowerCase();
    setNamedInput(e.target.value);
    if(NAMED_COLORS[name]){
      const h=NAMED_COLORS[name];
      setHex(h);
      fromHex(h);
    }
  };

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(()=>setCopied(null),1500);
  };

  const cmyk = rgbToCmyk(...rgb);

  return (
    <div className="ccnv-wrap">
      <div className="ccnv-swatch" style={{background: hex}} />

      <div className="ccnv-named-row">
        <label className="ccnv-format-label">Named Color</label>
        <input className="ccnv-named-input" value={namedInput} onChange={handleNamedLookup}
          placeholder='e.g. "red", "coral", "indigo"' />
      </div>

      <div className="ccnv-formats">
        <div className="ccnv-format-row">
          <span className="ccnv-format-label">HEX</span>
          <input className="ccnv-input ccnv-input--hex" value={hex} onChange={handleHexChange} maxLength={7} />
          <button className="ccnv-copy-btn" onClick={()=>copy(hex,"hex")}>{copied==="hex"?"✓":"Copy"}</button>
        </div>

        <div className="ccnv-format-row">
          <span className="ccnv-format-label">RGB</span>
          <div className="ccnv-inputs-group">
            {["R","G","B"].map((lbl,i)=>(
              <div key={lbl} className="ccnv-sub-input-wrap">
                <span className="ccnv-sub-label">{lbl}</span>
                <input className="ccnv-input ccnv-input--num" type="number" min="0" max="255"
                  value={rgb[i]} onChange={e=>handleRgbChange(i,e.target.value)} />
              </div>
            ))}
          </div>
          <button className="ccnv-copy-btn" onClick={()=>copy(`rgb(${rgb.join(", ")})`, "rgb")}>{copied==="rgb"?"✓":"Copy"}</button>
        </div>

        <div className="ccnv-format-row">
          <span className="ccnv-format-label">HSL</span>
          <div className="ccnv-inputs-group">
            {[["H","°",360],["S","%",100],["L","%",100]].map(([lbl,unit,max],i)=>(
              <div key={lbl} className="ccnv-sub-input-wrap">
                <span className="ccnv-sub-label">{lbl}</span>
                <input className="ccnv-input ccnv-input--num" type="number" min="0" max={max}
                  value={hsl[i]} onChange={e=>handleHslChange(i,e.target.value)} />
                <span className="ccnv-unit">{unit}</span>
              </div>
            ))}
          </div>
          <button className="ccnv-copy-btn" onClick={()=>copy(`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`, "hsl")}>{copied==="hsl"?"✓":"Copy"}</button>
        </div>

        <div className="ccnv-cmyk-row">
          <span className="ccnv-format-label">CMYK</span>
          <span className="ccnv-cmyk-val">C:{cmyk[0]}% M:{cmyk[1]}% Y:{cmyk[2]}% K:{cmyk[3]}%</span>
          <button className="ccnv-copy-btn" onClick={()=>copy(`cmyk(${cmyk[0]}%, ${cmyk[1]}%, ${cmyk[2]}%, ${cmyk[3]}%)`, "cmyk")}>{copied==="cmyk"?"✓":"Copy"}</button>
        </div>
      </div>
    </div>
  );
}
