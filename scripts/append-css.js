const fs = require('fs');
const path = require('path');

const css = `

/* ============================================================
   COLOR TOOLS — cpal-*, ccnv-*, cgrad-*, ccon-*, cpktool-*
   SCREEN TOOLS — srec-*, scap-*
   TEXT TOOLS   — wc-*, ccase-*, lorem-*, diff-*, tts-*
   ============================================================ */

/* ---- COLOR PALETTE GENERATOR (cpal-*) ---- */
.cpal-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 860px;
  margin: 0 auto 2rem;
}
.cpal-controls { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.75rem; }
.cpal-color-input-row { display: flex; align-items: center; gap: 1rem; }
.cpal-label { font-weight: 600; font-size: 0.95rem; color: #374151; min-width: 90px; }
.cpal-color-input { width: 52px; height: 52px; border: none; border-radius: 0.75rem; cursor: pointer; background: none; padding: 2px; }
.cpal-hex-display { font-family: monospace; font-size: 1.05rem; color: #6366f1; font-weight: 700; }
.cpal-type-group { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.cpal-type-btn { padding: 0.45rem 1rem; border-radius: 9999px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.15s; }
.cpal-type-btn:hover { border-color: #6366f1; color: #6366f1; }
.cpal-type-btn--on { background: #6366f1; border-color: #6366f1; color: #fff; }
.cpal-palette { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
.cpal-swatch { border-radius: 1rem; overflow: hidden; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.15s; }
.cpal-swatch:hover { transform: translateY(-3px); }
.cpal-swatch-color { height: 100px; width: 100%; }
.cpal-swatch-info { padding: 0.6rem 0.5rem; background: #f9fafb; }
.cpal-swatch-hex { display: block; font-family: monospace; font-weight: 700; font-size: 0.9rem; color: #111827; }
.cpal-swatch-small { display: block; font-size: 0.72rem; color: #6b7280; margin-top: 1px; }
.cpal-copied { display: block; font-size: 0.75rem; color: #10b981; font-weight: 600; margin-top: 3px; }
.cpal-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.cpal-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; transition: opacity 0.15s; }
.cpal-btn:hover { opacity: 0.88; }
.cpal-btn--outline { background: #fff; color: #6366f1; border: 2px solid #6366f1; }
.cpal-btn--outline:hover { background: #ede9fe; }
@media (max-width: 600px) {
  .cpal-palette { grid-template-columns: repeat(3, 1fr); }
}

/* ---- COLOR CONVERTER (ccnv-*) ---- */
.ccnv-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 640px;
  margin: 0 auto 2rem;
}
.ccnv-swatch { width: 100%; height: 110px; border-radius: 1rem; margin-bottom: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.12); transition: background 0.2s; }
.ccnv-named-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; }
.ccnv-formats { display: flex; flex-direction: column; gap: 1rem; }
.ccnv-format-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
.ccnv-format-label { font-weight: 700; font-size: 0.85rem; color: #6366f1; min-width: 52px; text-transform: uppercase; letter-spacing: 0.05em; }
.ccnv-input { border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.85rem; font-size: 0.95rem; font-family: monospace; background: #f9fafb; color: #111827; outline: none; transition: border-color 0.15s; }
.ccnv-input:focus { border-color: #6366f1; }
.ccnv-input--hex { width: 130px; }
.ccnv-input--num { width: 72px; }
.ccnv-inputs-group { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.ccnv-sub-input-wrap { display: flex; align-items: center; gap: 0.3rem; }
.ccnv-sub-label { font-size: 0.8rem; font-weight: 600; color: #374151; }
.ccnv-unit { font-size: 0.8rem; color: #6b7280; }
.ccnv-copy-btn { padding: 0.45rem 1rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.82rem; border: none; cursor: pointer; transition: opacity 0.15s; white-space: nowrap; }
.ccnv-copy-btn:hover { opacity: 0.85; }
.ccnv-named-input { flex: 1; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.85rem; font-size: 0.9rem; }
.ccnv-cmyk-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #f9fafb; border-radius: 0.75rem; flex-wrap: wrap; }
.ccnv-cmyk-val { font-family: monospace; font-size: 0.9rem; color: #374151; flex: 1; }

/* ---- GRADIENT GENERATOR (cgrad-*) ---- */
.cgrad-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 860px;
  margin: 0 auto 2rem;
}
.cgrad-preview { width: 100%; height: 180px; border-radius: 1rem; margin-bottom: 1.75rem; box-shadow: 0 2px 12px rgba(0,0,0,0.1); transition: all 0.2s; }
.cgrad-controls { display: flex; flex-direction: column; gap: 1.25rem; }
.cgrad-type-group { display: flex; gap: 0.5rem; }
.cgrad-type-btn { padding: 0.45rem 1.2rem; border-radius: 9999px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; font-weight: 500; font-size: 0.88rem; cursor: pointer; transition: all 0.15s; }
.cgrad-type-btn--on { background: #6366f1; border-color: #6366f1; color: #fff; }
.cgrad-angle-row { display: flex; align-items: center; gap: 1rem; }
.cgrad-angle-label { font-weight: 600; font-size: 0.9rem; color: #374151; min-width: 100px; }
.cgrad-angle-slider { flex: 1; accent-color: #6366f1; }
.cgrad-stops-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.cgrad-stops-title { font-weight: 700; font-size: 0.95rem; color: #111827; }
.cgrad-add-stop { padding: 0.35rem 0.9rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.82rem; border: none; cursor: pointer; }
.cgrad-stop { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.85rem; background: #f9fafb; border-radius: 0.75rem; margin-bottom: 0.5rem; flex-wrap: wrap; }
.cgrad-stop-color { width: 40px; height: 40px; border: none; border-radius: 0.5rem; cursor: pointer; padding: 2px; background: none; }
.cgrad-stop-hex { font-family: monospace; font-size: 0.88rem; color: #374151; min-width: 80px; }
.cgrad-stop-pos { flex: 1; accent-color: #6366f1; min-width: 100px; }
.cgrad-stop-pos-val { font-size: 0.85rem; color: #6b7280; min-width: 36px; }
.cgrad-stop-remove { background: none; border: none; cursor: pointer; color: #ef4444; font-size: 1rem; padding: 0.2rem 0.4rem; border-radius: 0.4rem; }
.cgrad-stop-remove:hover { background: #fee2e2; }
.cgrad-code { background: #f9fafb; border-radius: 0.75rem; padding: 1rem; margin-top: 0.5rem; }
.cgrad-code-label { display: block; font-weight: 700; font-size: 0.82rem; color: #6366f1; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem; }
.cgrad-code-text { font-family: monospace; font-size: 0.85rem; color: #374151; word-break: break-all; margin-bottom: 0.75rem; }
.cgrad-copy-btn { padding: 0.45rem 1.1rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.82rem; border: none; cursor: pointer; }
.cgrad-presets { margin-top: 1rem; }
.cgrad-presets-label { display: block; font-weight: 700; font-size: 0.88rem; color: #374151; margin-bottom: 0.6rem; }
.cgrad-presets-row { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.cgrad-preset { width: 64px; height: 40px; border-radius: 0.6rem; border: 2px solid transparent; cursor: pointer; transition: border-color 0.15s, transform 0.15s; }
.cgrad-preset:hover { border-color: #6366f1; transform: scale(1.08); }
.cgrad-actions { margin-top: 1.25rem; }
.cgrad-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; }

/* ---- CONTRAST CHECKER (ccon-*) ---- */
.ccon-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 0 auto 2rem;
}
.ccon-pickers { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
.ccon-picker-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.ccon-picker-label { font-weight: 600; font-size: 0.9rem; color: #374151; min-width: 140px; }
.ccon-picker-inputs { display: flex; align-items: center; gap: 0.6rem; }
.ccon-color-input { width: 48px; height: 48px; border: none; border-radius: 0.6rem; cursor: pointer; padding: 2px; background: none; }
.ccon-hex-input { border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.75rem; font-family: monospace; font-size: 0.95rem; width: 110px; }
.ccon-preview { padding: 2rem; border-radius: 1rem; margin-bottom: 1.5rem; transition: background 0.2s; }
.ccon-preview-text { font-size: 1rem; font-weight: 500; transition: color 0.2s; margin-bottom: 0.5rem; }
.ccon-preview-text--lg { font-size: 1.4rem; font-weight: 700; }
.ccon-ratio { text-align: center; margin-bottom: 1.5rem; }
.ccon-ratio-label { display: block; font-size: 0.85rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.25rem; }
.ccon-ratio-num { font-size: 3rem; font-weight: 800; color: #111827; letter-spacing: -0.02em; }
.ccon-badges { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
.ccon-badge { padding: 1rem; border-radius: 0.75rem; text-align: center; border: 2px solid transparent; }
.ccon-badge--pass { background: #f0fdf4; border-color: #86efac; }
.ccon-badge--fail { background: #fef2f2; border-color: #fca5a5; }
.ccon-badge-title { display: block; font-weight: 700; font-size: 0.9rem; color: #111827; }
.ccon-badge-subtitle { display: block; font-size: 0.78rem; color: #6b7280; margin: 0.2rem 0; }
.ccon-badge-result { display: block; font-size: 1.1rem; font-weight: 800; }
.ccon-badge--pass .ccon-badge-result { color: #16a34a; }
.ccon-badge--fail .ccon-badge-result { color: #dc2626; }
.ccon-thresholds { display: flex; flex-direction: column; gap: 0.4rem; padding: 1rem; background: #f9fafb; border-radius: 0.75rem; }
.ccon-threshold-item { font-size: 0.88rem; color: #374151; }
@media (max-width: 500px) {
  .ccon-badges { grid-template-columns: 1fr; }
}

/* ---- COLOR PICKER TOOL (cpktool-*) ---- */
.cpktool-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 640px;
  margin: 0 auto 2rem;
}
.cpktool-picker-area { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
.cpktool-sv-canvas { width: 100%; height: 200px; border-radius: 0.75rem; cursor: crosshair; display: block; }
.cpktool-sliders { display: flex; flex-direction: column; gap: 0.75rem; }
.cpktool-slider-row { display: flex; align-items: center; gap: 0.75rem; }
.cpktool-slider-label { font-weight: 600; font-size: 0.88rem; color: #374151; min-width: 50px; }
.cpktool-hue-slider { flex: 1; height: 14px; border-radius: 9999px; cursor: pointer; accent-color: #6366f1; }
.cpktool-alpha-slider { flex: 1; accent-color: #6366f1; }
.cpktool-slider-val { font-size: 0.85rem; color: #6b7280; min-width: 40px; }
.cpktool-preview-row { display: flex; align-items: center; gap: 1rem; }
.cpktool-swatch-lg { width: 80px; height: 60px; border-radius: 0.75rem; box-shadow: 0 2px 10px rgba(0,0,0,0.12); }
.cpktool-eyedrop-btn { padding: 0.55rem 1.1rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.85rem; border: none; cursor: pointer; }
.cpktool-values { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem; }
.cpktool-value-row { display: flex; align-items: center; gap: 0.75rem; }
.cpktool-format-label { font-weight: 700; font-size: 0.82rem; color: #6366f1; min-width: 40px; text-transform: uppercase; }
.cpktool-value-input { flex: 1; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.75rem; font-family: monospace; font-size: 0.9rem; background: #f9fafb; }
.cpktool-copy-btn { padding: 0.4rem 0.9rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.8rem; border: none; cursor: pointer; }
.cpktool-history { margin-top: 0.5rem; }
.cpktool-history-label { display: block; font-weight: 600; font-size: 0.85rem; color: #374151; margin-bottom: 0.5rem; }
.cpktool-history-swatches { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.cpktool-swatch { width: 36px; height: 36px; border-radius: 0.5rem; border: 2px solid transparent; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.12); transition: transform 0.12s; }
.cpktool-swatch:hover { transform: scale(1.15); border-color: #6366f1; }

/* ---- SCREEN RECORDER (srec-*) ---- */
.srec-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 0 auto 2rem;
}
.srec-error { background: #fef2f2; border: 1.5px solid #fca5a5; border-radius: 0.75rem; padding: 0.85rem 1rem; color: #dc2626; font-size: 0.9rem; margin-bottom: 1rem; }
.srec-idle { text-align: center; padding: 3rem 2rem; }
.srec-icon { font-size: 3.5rem; margin-bottom: 1rem; }
.srec-idle-text { font-size: 1rem; color: #6b7280; margin-bottom: 1.5rem; }
.srec-audio-toggle { display: flex; align-items: center; gap: 0.5rem; justify-content: center; font-size: 0.9rem; color: #374151; cursor: pointer; margin-bottom: 1.5rem; }
.srec-start-btn { padding: 0.8rem 2.5rem; border-radius: 9999px; background: linear-gradient(135deg,#ef4444,#dc2626); color: #fff; font-weight: 700; font-size: 1rem; border: none; cursor: pointer; box-shadow: 0 4px 14px rgba(239,68,68,0.35); }
.srec-start-btn:hover { opacity: 0.9; }
.srec-controls { text-align: center; padding: 2rem; }
.srec-status { display: flex; align-items: center; justify-content: center; gap: 0.6rem; margin-bottom: 0.5rem; }
.srec-dot { width: 12px; height: 12px; border-radius: 50%; background: #ef4444; animation: srec-blink 1s infinite; }
.srec-dot--paused { background: #f59e0b; animation: none; }
@keyframes srec-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
.srec-status-text { font-weight: 600; font-size: 0.95rem; color: #374151; }
.srec-timer { font-size: 3.5rem; font-weight: 800; color: #111827; letter-spacing: -0.02em; margin: 0.75rem 0 1.5rem; font-family: monospace; }
.srec-btns { display: flex; gap: 0.75rem; justify-content: center; }
.srec-pause-btn { padding: 0.7rem 1.8rem; border-radius: 9999px; background: linear-gradient(135deg,#f59e0b,#d97706); color: #fff; font-weight: 700; border: none; cursor: pointer; }
.srec-stop-btn { padding: 0.7rem 1.8rem; border-radius: 9999px; background: linear-gradient(135deg,#ef4444,#dc2626); color: #fff; font-weight: 700; border: none; cursor: pointer; }
.srec-result { padding: 1rem 0; }
.srec-preview { width: 100%; border-radius: 0.75rem; margin-bottom: 1rem; }
.srec-result-info { display: flex; gap: 1.5rem; font-size: 0.9rem; color: #374151; margin-bottom: 1rem; flex-wrap: wrap; }
.srec-result-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.srec-download-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; text-decoration: none; border: none; cursor: pointer; }
.srec-restart-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: #f3f4f6; color: #374151; font-weight: 700; font-size: 0.9rem; border: 1.5px solid #e5e7eb; cursor: pointer; }
.srec-privacy-note { margin-top: 1.5rem; font-size: 0.85rem; color: #6b7280; text-align: center; padding-top: 1rem; border-top: 1px solid #f3f4f6; }

/* ---- SCREENSHOT CAPTURE (scap-*) ---- */
.scap-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 860px;
  margin: 0 auto 2rem;
}
.scap-drop { border: 2.5px dashed #c4b5fd; border-radius: 1.25rem; padding: 4rem 2rem; text-align: center; background: #faf8ff; cursor: default; transition: border-color 0.15s; }
.scap-drop:hover { border-color: #6366f1; }
.scap-drop-icon { font-size: 3rem; margin-bottom: 0.75rem; }
.scap-drop-text { font-size: 1rem; color: #374151; margin-bottom: 1rem; }
.scap-file-label { display: inline-block; padding: 0.55rem 1.4rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; cursor: pointer; font-size: 0.9rem; }
.scap-toolbar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
.scap-tool-btn { padding: 0.45rem 1rem; border-radius: 9999px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.15s; }
.scap-tool-btn--active { background: #6366f1; border-color: #6366f1; color: #fff; }
.scap-tool-btn--reset { border-color: #fca5a5; color: #dc2626; }
.scap-tool-btn--reset:hover { background: #fef2f2; }
.scap-canvas-wrap { position: relative; margin-bottom: 1rem; }
.scap-canvas { width: 100%; border-radius: 0.75rem; display: block; cursor: crosshair; }
.scap-text-overlay { position: absolute; top: 12px; left: 12px; display: flex; gap: 0.5rem; }
.scap-text-overlay-input { border: 2px solid #6366f1; border-radius: 0.5rem; padding: 0.4rem 0.75rem; font-size: 0.95rem; background: rgba(255,255,255,0.95); outline: none; }
.scap-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.scap-download-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; }
.scap-download-btn--jpg { background: linear-gradient(135deg,#f59e0b,#d97706); }
.scap-copy-btn { padding: 0.65rem 1.5rem; border-radius: 9999px; background: #f3f4f6; color: #374151; font-weight: 700; font-size: 0.9rem; border: 1.5px solid #e5e7eb; cursor: pointer; }

/* ---- WORD COUNTER (wc-*) ---- */
.wc-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 860px;
  margin: 0 auto 2rem;
}
.wc-textarea { width: 100%; min-height: 200px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; font-size: 1rem; color: #111827; background: #f9fafb; resize: vertical; outline: none; font-family: inherit; transition: border-color 0.15s; box-sizing: border-box; }
.wc-textarea:focus { border-color: #6366f1; }
.wc-actions { display: flex; gap: 0.75rem; margin: 1rem 0; }
.wc-btn { padding: 0.55rem 1.3rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.88rem; border: none; cursor: pointer; }
.wc-btn--outline { background: #fff; color: #6366f1; border: 2px solid #6366f1; }
.wc-stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
.wc-stat { background: #f9fafb; border-radius: 0.75rem; padding: 1rem; text-align: center; border: 1.5px solid #f3f4f6; }
.wc-stat-val { display: block; font-size: 1.6rem; font-weight: 800; color: #6366f1; }
.wc-stat-lbl { display: block; font-size: 0.78rem; color: #6b7280; margin-top: 0.2rem; }
.wc-top-words { margin-top: 0.5rem; }
.wc-top-words-title { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; }
.wc-word-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.5rem; }
.wc-word-item { display: flex; justify-content: space-between; align-items: center; background: #f9fafb; border-radius: 0.5rem; padding: 0.5rem 0.75rem; }
.wc-word-text { font-size: 0.88rem; color: #374151; }
.wc-word-count { font-size: 0.85rem; font-weight: 700; color: #6366f1; }

/* ---- CASE CONVERTER (ccase-*) ---- */
.ccase-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 860px;
  margin: 0 auto 2rem;
}
.ccase-label { font-weight: 700; font-size: 0.88rem; color: #374151; margin-bottom: 0.5rem; display: block; }
.ccase-input { width: 100%; min-height: 130px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; font-size: 0.95rem; color: #111827; background: #f9fafb; resize: vertical; outline: none; font-family: inherit; transition: border-color 0.15s; box-sizing: border-box; margin-bottom: 1rem; }
.ccase-input:focus { border-color: #6366f1; }
.ccase-btns { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; }
.ccase-btn { padding: 0.45rem 1rem; border-radius: 9999px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; font-size: 0.83rem; font-weight: 500; cursor: pointer; transition: all 0.15s; }
.ccase-btn:hover { border-color: #6366f1; color: #6366f1; }
.ccase-btn--on { background: #6366f1; border-color: #6366f1; color: #fff; }
.ccase-output-wrap { position: relative; }
.ccase-output { width: 100%; min-height: 130px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; font-size: 0.95rem; color: #111827; background: #f9fafb; resize: vertical; font-family: inherit; box-sizing: border-box; }
.ccase-copy-btn { position: absolute; top: 0.6rem; right: 0.6rem; padding: 0.4rem 0.9rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.8rem; border: none; cursor: pointer; }

/* ---- LOREM IPSUM (lorem-*) ---- */
.lorem-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 0 auto 2rem;
}
.lorem-controls { display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 1.5rem; }
.lorem-count-row { display: flex; align-items: center; gap: 1rem; }
.lorem-label { font-weight: 600; font-size: 0.9rem; color: #374151; min-width: 70px; }
.lorem-number-input { border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.85rem; font-size: 0.95rem; width: 90px; outline: none; transition: border-color 0.15s; }
.lorem-number-input:focus { border-color: #6366f1; }
.lorem-type-group { display: flex; gap: 0.5rem; }
.lorem-type-btn { padding: 0.45rem 1.1rem; border-radius: 9999px; border: 1.5px solid #e5e7eb; background: #f9fafb; color: #374151; font-size: 0.88rem; font-weight: 500; cursor: pointer; transition: all 0.15s; }
.lorem-type-btn--on { background: #6366f1; border-color: #6366f1; color: #fff; }
.lorem-toggles { display: flex; flex-direction: column; gap: 0.5rem; }
.lorem-toggle { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #374151; cursor: pointer; }
.lorem-btn { padding: 0.65rem 1.6rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; }
.lorem-btn--outline { background: #fff; color: #6366f1; border: 2px solid #6366f1; }
.lorem-output { margin-top: 0.5rem; }
.lorem-textarea { width: 100%; min-height: 200px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; font-size: 0.9rem; color: #374151; background: #f9fafb; font-family: inherit; resize: vertical; box-sizing: border-box; margin-bottom: 1rem; }
.lorem-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

/* ---- DIFF CHECKER (diff-*) ---- */
.diff-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 1000px;
  margin: 0 auto 2rem;
}
.diff-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; }
.diff-panel { display: flex; flex-direction: column; gap: 0.4rem; }
.diff-panel-label { font-weight: 700; font-size: 0.88rem; color: #374151; }
.diff-textarea { width: 100%; min-height: 180px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.85rem; font-size: 0.88rem; font-family: monospace; color: #111827; background: #f9fafb; resize: vertical; outline: none; transition: border-color 0.15s; box-sizing: border-box; }
.diff-textarea:focus { border-color: #6366f1; }
.diff-controls-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
.diff-btn { padding: 0.65rem 1.8rem; border-radius: 9999px; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; }
.diff-word-toggle { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #374151; cursor: pointer; }
.diff-summary { display: flex; gap: 1rem; margin-bottom: 0.75rem; font-size: 0.9rem; font-weight: 600; }
.diff-summary-add { color: #16a34a; }
.diff-summary-del { color: #dc2626; }
.diff-result { border: 1.5px solid #e5e7eb; border-radius: 0.75rem; overflow: auto; max-height: 400px; }
.diff-line { padding: 0.25rem 1rem; font-family: monospace; font-size: 0.88rem; white-space: pre-wrap; border-bottom: 1px solid transparent; }
.diff-line--add { background: #f0fdf4; color: #166534; border-bottom-color: #bbf7d0; }
.diff-line--del { background: #fef2f2; color: #991b1b; border-bottom-color: #fecaca; text-decoration: line-through; }
.diff-line--same { color: #374151; }
.diff-word-del { background: #fecaca; border-radius: 2px; }
.diff-word-add { background: #bbf7d0; border-radius: 2px; }
.diff-word-same { color: inherit; }
@media (max-width: 640px) {
  .diff-panels { grid-template-columns: 1fr; }
}

/* ---- TEXT TO SPEECH (tts-*) ---- */
.tts-wrap {
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 0 auto 2rem;
}
.tts-textarea { width: 100%; min-height: 180px; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; font-size: 0.95rem; color: #111827; background: #f9fafb; resize: vertical; outline: none; font-family: inherit; transition: border-color 0.15s; box-sizing: border-box; margin-bottom: 1.25rem; }
.tts-textarea:focus { border-color: #6366f1; }
.tts-highlight { background: #f9fafb; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.85rem 1rem; font-size: 0.95rem; color: #374151; line-height: 1.7; margin-bottom: 1.25rem; }
.tts-highlight-word { background: #fde68a; border-radius: 3px; padding: 0 2px; font-weight: 700; }
.tts-controls { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.25rem; }
.tts-voice-row { display: flex; align-items: center; gap: 0.75rem; }
.tts-slider-label { font-weight: 600; font-size: 0.88rem; color: #374151; min-width: 60px; }
.tts-voice-select { flex: 1; border: 1.5px solid #e5e7eb; border-radius: 0.75rem; padding: 0.5rem 0.75rem; font-size: 0.9rem; outline: none; background: #f9fafb; }
.tts-slider-row { display: flex; align-items: center; gap: 0.75rem; }
.tts-slider { flex: 1; accent-color: #6366f1; }
.tts-slider-val { font-size: 0.85rem; color: #6b7280; min-width: 36px; text-align: right; }
.tts-btns { display: flex; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
.tts-btn { padding: 0.65rem 1.6rem; border-radius: 9999px; font-weight: 700; font-size: 0.9rem; border: none; cursor: pointer; transition: opacity 0.15s; }
.tts-btn--play { background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; }
.tts-btn--play:disabled { opacity: 0.5; cursor: not-allowed; }
.tts-btn--pause { background: linear-gradient(135deg,#f59e0b,#d97706); color: #fff; }
.tts-btn--stop { background: linear-gradient(135deg,#ef4444,#dc2626); color: #fff; }
.tts-note { font-size: 0.82rem; color: #9ca3af; border-top: 1px solid #f3f4f6; padding-top: 1rem; }

/* ---- DARK MODE: all new namespaces ---- */
@media (prefers-color-scheme: dark) {
  .cpal-wrap, .ccnv-wrap, .cgrad-wrap, .ccon-wrap, .cpktool-wrap,
  .srec-wrap, .scap-wrap, .wc-wrap, .ccase-wrap, .lorem-wrap, .diff-wrap, .tts-wrap {
    background: #1e1e2e;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }
  .cpal-label, .cpal-type-btn, .cgrad-angle-label, .cgrad-stops-title,
  .ccnv-format-label, .ccon-picker-label, .cpktool-slider-label, .cpktool-history-label,
  .srec-idle-text, .srec-status-text, .srec-audio-toggle,
  .scap-drop-text, .scap-tool-btn, .wc-stat-lbl, .wc-word-text, .ccase-label,
  .lorem-label, .lorem-toggle, .diff-panel-label, .diff-word-toggle, .tts-slider-label {
    color: #d1d5db;
  }
  .cpal-type-btn, .cgrad-type-btn, .scap-tool-btn, .ccase-btn, .lorem-type-btn {
    background: #2d2d3f; border-color: #3f3f5a; color: #d1d5db;
  }
  .cpal-swatch-info, .wc-stat, .wc-word-item, .ccnv-cmyk-row, .cgrad-stop,
  .cgrad-code, .ccon-thresholds, .tts-highlight, .diff-result {
    background: #2d2d3f;
  }
  .cpal-swatch-hex, .wc-top-words-title { color: #e2e8f0; }
  .ccon-ratio-num { color: #e2e8f0; }
  .ccnv-input, .ccon-hex-input, .cpktool-value-input, .ccase-input,
  .ccase-output, .lorem-number-input, .lorem-textarea, .diff-textarea,
  .wc-textarea, .tts-textarea, .tts-voice-select {
    background: #2d2d3f; border-color: #3f3f5a; color: #e2e8f0;
  }
  .scap-drop { background: #1e1e2e; border-color: #4c4c7a; }
  .diff-line--same { color: #d1d5db; }
  .srec-timer { color: #e2e8f0; }
  .tts-note { color: #6b7280; border-top-color: #2d2d3f; }
  .ccon-badge--pass { background: #14532d; border-color: #166534; }
  .ccon-badge--fail { background: #450a0a; border-color: #7f1d1d; }
  .ccon-badge-title { color: #e2e8f0; }
  .cgrad-code-text { color: #d1d5db; }
  .ccnv-cmyk-val { color: #d1d5db; }
  .srec-restart-btn { background: #2d2d3f; color: #d1d5db; border-color: #3f3f5a; }
  .scap-copy-btn { background: #2d2d3f; color: #d1d5db; border-color: #3f3f5a; }
  .srec-privacy-note { border-top-color: #2d2d3f; }
}
`;

const globalsPath = path.join('C:/Users/Kashyap/Desktop/webp-converter', 'app', 'globals.css');
fs.appendFileSync(globalsPath, css, 'utf8');
console.log('CSS appended: ' + css.length + ' chars');
