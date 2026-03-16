"use client";
import { useState, useRef, useEffect } from "react";

function formatTime(s) {
  const m = Math.floor(s/60);
  return `${String(m).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
}

export default function ScreenRecorder() {
  const [state, setState] = useState("idle"); // idle | recording | paused | done
  const [audioOn, setAudioOn] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [error, setError] = useState(null);
  const [canPause, setCanPause] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(()=>{
    return ()=>{
      if(timerRef.current) clearInterval(timerRef.current);
      if(streamRef.current) streamRef.current.getTracks().forEach(t=>t.stop());
    };
  },[]);

  const startRecording = async () => {
    setError(null);
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 30 },
        audio: audioOn,
      });

      let finalStream = displayStream;
      if(audioOn){
        try {
          const micStream = await navigator.mediaDevices.getUserMedia({audio:true});
          const tracks = [...displayStream.getTracks(), ...micStream.getAudioTracks()];
          finalStream = new MediaStream(tracks);
        } catch(e) {
          // mic permission denied, use display stream only
        }
      }

      streamRef.current = finalStream;
      chunksRef.current = [];

      const mr = new MediaRecorder(finalStream, { mimeType: "video/webm;codecs=vp9,opus" });
      mediaRecorderRef.current = mr;

      const pauseSupported = typeof mr.pause === "function";
      setCanPause(pauseSupported);

      mr.ondataavailable = e => { if(e.data.size>0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, {type:"video/webm"});
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setFileSize((blob.size/1024/1024).toFixed(2));
        setState("done");
        if(timerRef.current) clearInterval(timerRef.current);
        if(previewRef.current){ previewRef.current.src=url; }
      };

      displayStream.getVideoTracks()[0].addEventListener("ended",()=>{
        if(mr.state!=="inactive") mr.stop();
      });

      mr.start(1000);
      setState("recording");
      setElapsed(0);
      timerRef.current = setInterval(()=>setElapsed(p=>p+1),1000);

    } catch(e) {
      if(e.name==="NotAllowedError") setError("Permission denied. Please allow screen capture.");
      else setError(`Error: ${e.message}`);
    }
  };

  const stopRecording = () => {
    if(mediaRecorderRef.current && mediaRecorderRef.current.state!=="inactive"){
      mediaRecorderRef.current.stop();
    }
    if(streamRef.current) streamRef.current.getTracks().forEach(t=>t.stop());
    if(timerRef.current) clearInterval(timerRef.current);
  };

  const pauseRecording = () => {
    if(mediaRecorderRef.current && mediaRecorderRef.current.state==="recording"){
      mediaRecorderRef.current.pause();
      setState("paused");
      if(timerRef.current) clearInterval(timerRef.current);
    }
  };

  const resumeRecording = () => {
    if(mediaRecorderRef.current && mediaRecorderRef.current.state==="paused"){
      mediaRecorderRef.current.resume();
      setState("recording");
      timerRef.current = setInterval(()=>setElapsed(p=>p+1),1000);
    }
  };

  const resetRecorder = () => {
    setState("idle");
    setVideoUrl(null);
    setFileSize(null);
    setElapsed(0);
    setError(null);
    chunksRef.current=[];
  };

  return (
    <div className="srec-wrap">
      {error && <div className="srec-error">{error}</div>}

      {state==="idle" && (
        <div className="srec-idle">
          <div className="srec-icon">🎥</div>
          <p className="srec-idle-text">Click Start Recording to capture your screen</p>
          <label className="srec-audio-toggle">
            <input type="checkbox" checked={audioOn} onChange={e=>setAudioOn(e.target.checked)} />
            <span>Include System Audio</span>
          </label>
          <button className="srec-start-btn" onClick={startRecording}>Start Recording</button>
        </div>
      )}

      {(state==="recording"||state==="paused") && (
        <div className="srec-controls">
          <div className="srec-status">
            <span className={`srec-dot${state==="paused"?" srec-dot--paused":""}`} />
            <span className="srec-status-text">{state==="paused"?"Paused":"Recording"}</span>
          </div>
          <div className="srec-timer">{formatTime(elapsed)}</div>
          <div className="srec-btns">
            {canPause && state==="recording" && (
              <button className="srec-pause-btn" onClick={pauseRecording}>⏸ Pause</button>
            )}
            {canPause && state==="paused" && (
              <button className="srec-pause-btn" onClick={resumeRecording}>▶ Resume</button>
            )}
            <button className="srec-stop-btn" onClick={stopRecording}>⏹ Stop</button>
          </div>
        </div>
      )}

      {state==="done" && videoUrl && (
        <div className="srec-result">
          <video ref={previewRef} className="srec-preview" controls src={videoUrl} />
          <div className="srec-result-info">
            <span>File size: <strong>{fileSize} MB</strong></span>
            <span>Format: <strong>WebM</strong></span>
          </div>
          <div className="srec-result-btns">
            <a href={videoUrl} download="recording.webm" className="srec-download-btn">⬇ Download WebM</a>
            <button className="srec-restart-btn" onClick={resetRecorder}>Record Again</button>
          </div>
        </div>
      )}

      <div className="srec-privacy-note">
        🔒 Nothing is uploaded. Your recording stays entirely in your browser.
      </div>
    </div>
  );
}
