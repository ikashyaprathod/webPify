"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function WebcamTest() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const animRef = useRef(null);
  const analyserRef = useRef(null);
  const audioCtxRef = useRef(null);

  const [active, setActive] = useState(false);
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [resolution, setResolution] = useState("");
  const [deviceLabel, setDeviceLabel] = useState("");
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState("");

  async function getDevices() {
    try {
      const all = await navigator.mediaDevices.enumerateDevices();
      const cams = all.filter((d) => d.kind === "videoinput");
      setDevices(cams);
      if (cams.length > 0 && !selectedDevice) setSelectedDevice(cams[0].deviceId);
    } catch {}
  }

  const startAudioMeter = useCallback((stream) => {
    try {
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;
      const data = new Uint8Array(analyser.frequencyBinCount);

      function tick() {
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));
        animRef.current = requestAnimationFrame(tick);
      }
      tick();
    } catch {}
  }, []);

  async function startCamera() {
    setError("");
    try {
      const constraints = {
        video: selectedDevice ? { deviceId: { exact: selectedDevice } } : true,
        audio: true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          setResolution(`${videoRef.current.videoWidth} × ${videoRef.current.videoHeight}`);
        };
      }
      const track = stream.getVideoTracks()[0];
      if (track) setDeviceLabel(track.label || "Unknown device");
      setActive(true);
      startAudioMeter(stream);
      await getDevices();
    } catch (e) {
      setError(e.message || "Could not access camera/microphone.");
    }
  }

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (audioCtxRef.current) { audioCtxRef.current.close(); audioCtxRef.current = null; }
    if (videoRef.current) videoRef.current.srcObject = null;
    setActive(false);
    setResolution("");
    setDeviceLabel("");
    setAudioLevel(0);
  }

  useEffect(() => {
    getDevices();
    return () => stopCamera();
  }, []);

  async function switchDevice(deviceId) {
    setSelectedDevice(deviceId);
    if (active) {
      stopCamera();
      setTimeout(() => startCamera(), 100);
    }
  }

  return (
    <div className="wcam-wrap">
      {!active ? (
        <div className="wcam-idle">
          {devices.length > 1 && (
            <select
              className="wcam-device-select"
              value={selectedDevice}
              onChange={(e) => switchDevice(e.target.value)}
            >
              {devices.map((d) => (
                <option key={d.deviceId} value={d.deviceId}>
                  {d.label || `Camera ${d.deviceId.slice(0, 6)}`}
                </option>
              ))}
            </select>
          )}
          <button className="wcam-start-btn" onClick={startCamera}>Start Camera</button>
          {error && <div className="wcam-error">{error}</div>}
          <p className="wcam-privacy-note">Your camera and microphone are only accessed in this browser tab. Nothing is recorded or uploaded.</p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="wcam-video"
            autoPlay
            playsInline
            muted
          />

          <div className="wcam-info-grid">
            <div className="wcam-info-item">
              <span className="wcam-info-label">Resolution</span>
              <span className="wcam-info-val">{resolution || "Detecting..."}</span>
            </div>
            <div className="wcam-info-item">
              <span className="wcam-info-label">Device</span>
              <span className="wcam-info-val">{deviceLabel || "Unknown"}</span>
            </div>
            <div className="wcam-info-item">
              <span className="wcam-info-label">Status</span>
              <span className="wcam-info-val wcam-status">Active</span>
            </div>
          </div>

          <div className="wcam-meter-wrap">
            <span className="wcam-meter-label">Microphone Level</span>
            <div className="wcam-meter-bar">
              <div className="wcam-meter-fill" style={{ width: audioLevel + "%" }} />
            </div>
            <span className="wcam-meter-pct">{audioLevel}%</span>
          </div>

          {devices.length > 1 && (
            <select
              className="wcam-device-select"
              value={selectedDevice}
              onChange={(e) => switchDevice(e.target.value)}
            >
              {devices.map((d) => (
                <option key={d.deviceId} value={d.deviceId}>
                  {d.label || `Camera ${d.deviceId.slice(0, 6)}`}
                </option>
              ))}
            </select>
          )}

          <button className="wcam-stop-btn" onClick={stopCamera}>Stop Camera</button>
          <p className="wcam-privacy-note">Camera is active only in this tab. Click Stop to release access.</p>
        </>
      )}
    </div>
  );
}
