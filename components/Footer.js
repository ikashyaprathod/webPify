"use client";

import { useState } from "react";
import Link from "next/link";

const LANGUAGES = [
  { code: "en",    label: "English (USA)" },
  { code: "hi",    label: "हिन्दी (Hindi)" },
  { code: "es",    label: "Español (Spanish)" },
  { code: "fr",    label: "Français (French)" },
  { code: "de",    label: "Deutsch (German)" },
  { code: "zh-CN", label: "中文简体 (Chinese)" },
  { code: "ja",    label: "日本語 (Japanese)" },
  { code: "ko",    label: "한국어 (Korean)" },
  { code: "pt",    label: "Português (Portuguese)" },
  { code: "ru",    label: "Русский (Russian)" },
  { code: "ar",    label: "العربية (Arabic)" },
  { code: "it",    label: "Italiano (Italian)" },
  { code: "nl",    label: "Nederlands (Dutch)" },
  { code: "tr",    label: "Türkçe (Turkish)" },
  { code: "pl",    label: "Polski (Polish)" },
  { code: "sv",    label: "Svenska (Swedish)" },
  { code: "id",    label: "Bahasa Indonesia" },
  { code: "th",    label: "ภาษาไทย (Thai)" },
  { code: "vi",    label: "Tiếng Việt (Vietnamese)" },
  { code: "bn",    label: "বাংলা (Bengali)" },
];

function translatePage(langCode) {
  if (langCode === "en") {
    // Reset to original English
    const cookie = document.cookie.match(/googtrans=([^;]+)/);
    if (cookie) {
      document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    window.location.reload();
    return;
  }
  // Set the googtrans cookie then trigger the Google Translate widget
  const combo = document.querySelector(".goog-te-combo");
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event("change"));
  } else {
    // Widget not loaded yet — set cookie and reload
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;
    window.location.reload();
  }
}

export default function Footer() {
  const [lang, setLang] = useState("en");

  function handleLangChange(e) {
    const code = e.target.value;
    setLang(code);
    translatePage(code);
  }

  return (
    <footer className="ft-footer">
      {/* ── Top content ── */}
      <div className="ft-top">
        {/* Left: logo + language + socials */}
        <div className="ft-brand-col">
          <Link href="/" className="ft-logo">
            <div className="ft-logo-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <span className="ft-logo-text">webpifyy</span>
          </Link>

          <div className="ft-lang-wrap">
            <span className="ft-lang-label">Language</span>
            <div className="ft-lang-select-wrap">
              <select className="ft-lang-select" value={lang} onChange={handleLangChange}>
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code}>{label}</option>
                ))}
              </select>
              <svg className="ft-lang-chevron" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <div className="ft-socials">
            <a href="https://x.com/ikashyaprathod" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/ikashyaprathod/" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://github.com/ikashyaprathod" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/kashyaprathod/" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Right: nav columns */}
        <div className="ft-nav-grid">
          <div className="ft-nav-col">
            <h4 className="ft-nav-heading">Image Tools</h4>
            <Link href="/image/compress" className="ft-nav-link">Image Compressor</Link>
            <Link href="/image/convert" className="ft-nav-link">Image Converter</Link>
            <Link href="/image/resize" className="ft-nav-link">Image Resizer</Link>
            <Link href="/image/edit" className="ft-nav-link">Image Editor</Link>
            <Link href="/image/convert/heic-to-jpg" className="ft-nav-link">HEIC to JPG</Link>
            <Link href="/image/convert/image-to-pdf" className="ft-nav-link">Image to PDF</Link>
            <Link href="/image/edit/remove-background" className="ft-nav-link">Remove Background</Link>
          </div>
          <div className="ft-nav-col">
            <h4 className="ft-nav-heading">Video Tools</h4>
            <Link href="/video/compress" className="ft-nav-link">Video Compressor</Link>
            <Link href="/video/compress/mp4" className="ft-nav-link">MP4 Compressor</Link>
            <Link href="/video/compress/webm" className="ft-nav-link">WebM Compressor</Link>
            <Link href="/video/compress/mov" className="ft-nav-link">MOV Compressor</Link>
            <Link href="/video/convert/video-to-gif" className="ft-nav-link">Video to GIF</Link>
          </div>
          <div className="ft-nav-col">
            <h4 className="ft-nav-heading">GIF, PDF &amp; SVG</h4>
            <Link href="/gif/compress" className="ft-nav-link">GIF Compressor</Link>
            <Link href="/gif/convert/gif-to-mp4" className="ft-nav-link">GIF to MP4</Link>
            <Link href="/gif/convert/gif-to-webm" className="ft-nav-link">GIF to WebM</Link>
            <Link href="/pdf/pdf-to-jpg" className="ft-nav-link">PDF to JPG</Link>
            <Link href="/svg/optimize" className="ft-nav-link">SVG Optimizer</Link>
          </div>
          <div className="ft-nav-col">
            <h4 className="ft-nav-heading">Company</h4>
            <Link href="/about" className="ft-nav-link">About</Link>
            <a href="https://github.com/ikashyaprathod/webPify" target="_blank" rel="noopener noreferrer" className="ft-nav-link">GitHub</a>
            <Link href="/privacy" className="ft-nav-link">Privacy Policy</Link>
            <Link href="/terms" className="ft-nav-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* ── Giant watermark ── */}
      <div className="ft-watermark" aria-hidden="true">webpifyy</div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <div className="ft-copy">
            <div className="ft-copy-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <span>© 2026–2027 webpifyy.</span>
          </div>
          <div className="ft-legal-links">
            <Link href="/privacy" className="ft-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="ft-legal-link">Terms of Service</Link>
            <a href="https://github.com/ikashyaprathod/webPify" target="_blank" rel="noopener noreferrer" className="ft-legal-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
