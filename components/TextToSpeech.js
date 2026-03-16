"use client";
import { useState, useRef, useEffect } from "react";

export default function TextToSpeech() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [state, setState] = useState("idle"); // idle | speaking | paused
  const [currentWord, setCurrentWord] = useState(null);
  const [highlightedText, setHighlightedText] = useState(null);
  const uttRef = useRef(null);

  useEffect(()=>{
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if(v.length){
        setVoices(v);
        setSelectedVoice(v[0]?.name||"");
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return ()=>{ window.speechSynthesis.onvoiceschanged=null; };
  },[]);

  const buildHighlight = (txt, charIndex, charLength) => {
    if(charIndex===undefined||charIndex===null) return null;
    const before = txt.slice(0,charIndex);
    const word = txt.slice(charIndex, charIndex+charLength);
    const after = txt.slice(charIndex+charLength);
    return {before, word, after};
  };

  const speak = () => {
    if(!text.trim()) return;
    window.speechSynthesis.cancel();

    const utt = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v=>v.name===selectedVoice);
    if(voice) utt.voice = voice;
    utt.rate = rate;
    utt.pitch = pitch;

    utt.onstart = () => setState("speaking");
    utt.onend = () => { setState("idle"); setHighlightedText(null); setCurrentWord(null); };
    utt.onpause = () => setState("paused");
    utt.onresume = () => setState("speaking");
    utt.onboundary = (e) => {
      if(e.name==="word"){
        setCurrentWord(e.charIndex);
        setHighlightedText(buildHighlight(text, e.charIndex, e.charLength||1));
      }
    };

    uttRef.current = utt;
    window.speechSynthesis.speak(utt);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setState("paused");
  };

  const resume = () => {
    window.speechSynthesis.resume();
    setState("speaking");
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setState("idle");
    setHighlightedText(null);
    setCurrentWord(null);
  };

  return (
    <div className="tts-wrap">
      <textarea className="tts-textarea" value={text} onChange={e=>setText(e.target.value)}
        placeholder="Type or paste text to read aloud..." />

      {highlightedText && state==="speaking" && (
        <div className="tts-highlight">
          <span>{highlightedText.before}</span>
          <span className="tts-highlight-word">{highlightedText.word}</span>
          <span>{highlightedText.after}</span>
        </div>
      )}

      <div className="tts-controls">
        {voices.length>0 && (
          <div className="tts-voice-row">
            <label className="tts-slider-label">Voice</label>
            <select className="tts-voice-select" value={selectedVoice}
              onChange={e=>setSelectedVoice(e.target.value)}>
              {voices.map(v=>(
                <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
              ))}
            </select>
          </div>
        )}

        <div className="tts-slider-row">
          <label className="tts-slider-label">Speed</label>
          <input type="range" min="0.5" max="2" step="0.1" value={rate}
            onChange={e=>setRate(Number(e.target.value))} className="tts-slider" />
          <span className="tts-slider-val">{rate}x</span>
        </div>

        <div className="tts-slider-row">
          <label className="tts-slider-label">Pitch</label>
          <input type="range" min="0.5" max="2" step="0.1" value={pitch}
            onChange={e=>setPitch(Number(e.target.value))} className="tts-slider" />
          <span className="tts-slider-val">{pitch}</span>
        </div>
      </div>

      <div className="tts-btns">
        {state==="idle" && (
          <button className="tts-btn tts-btn--play" onClick={speak} disabled={!text.trim()}>
            ▶ Play
          </button>
        )}
        {state==="speaking" && (
          <>
            <button className="tts-btn tts-btn--pause" onClick={pause}>⏸ Pause</button>
            <button className="tts-btn tts-btn--stop" onClick={stop}>⏹ Stop</button>
          </>
        )}
        {state==="paused" && (
          <>
            <button className="tts-btn tts-btn--play" onClick={resume}>▶ Resume</button>
            <button className="tts-btn tts-btn--stop" onClick={stop}>⏹ Stop</button>
          </>
        )}
      </div>

      <p className="tts-note">Note: Audio download is not available via the Web Speech API. Voice availability depends on your browser and OS.</p>
    </div>
  );
}
