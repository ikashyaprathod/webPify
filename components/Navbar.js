"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ALL_TOOLS = [
  { name: "Image Compressor",    href: "/image/compress",                  category: "Image" },
  { name: "Image Converter",     href: "/image/convert",                   category: "Image" },
  { name: "Image Resizer",       href: "/image/resize",                    category: "Image" },
  { name: "Image Editor",        href: "/image/edit",                      category: "Image" },
  { name: "Image Compare",       href: "/image/edit/compare",              category: "Image" },
  { name: "Crop Image",          href: "/image/edit/crop",                 category: "Image" },
  { name: "Rotate Image",        href: "/image/edit/rotate",               category: "Image" },
  { name: "Add Watermark",       href: "/image/edit/watermark",            category: "Image" },
  { name: "HEIC to JPG",         href: "/image/convert/heic-to-jpg",       category: "Image" },
  { name: "Image to PDF",        href: "/image/convert/image-to-pdf",      category: "Image" },
  { name: "Remove Background",   href: "/image/edit/remove-background",    category: "Image" },
  { name: "PNG Compressor",      href: "/image/compress/png",              category: "Image" },
  { name: "JPEG Compressor",     href: "/image/compress/jpeg",             category: "Image" },
  { name: "WebP Compressor",     href: "/image/compress/webp",             category: "Image" },
  { name: "PNG Converter",       href: "/image/convert/to-png",            category: "Image" },
  { name: "JPEG Converter",      href: "/image/convert/to-jpeg",           category: "Image" },
  { name: "WebP Converter",      href: "/image/convert/to-webp",           category: "Image" },
  { name: "PDF to JPG",          href: "/pdf/pdf-to-jpg",                  category: "Image" },
  { name: "AVIF Compressor",      href: "/image/compress/avif",             category: "Image" },
  { name: "Convert to AVIF",     href: "/image/convert/to-avif",           category: "Image" },
  { name: "BMP to PNG",          href: "/image/convert/bmp-to-png",        category: "Image" },
  { name: "TIFF to JPEG",        href: "/image/convert/tiff-to-jpg",       category: "Image" },
  { name: "Color Picker",        href: "/image/edit/color-picker",         category: "Image" },
  { name: "Image Metadata",      href: "/image/edit/metadata",             category: "Image" },
  { name: "Video Compressor",    href: "/video/compress",                  category: "Video" },
  { name: "MP4 Compressor",      href: "/video/compress/mp4",              category: "Video" },
  { name: "WebM Compressor",     href: "/video/compress/webm",             category: "Video" },
  { name: "MOV Compressor",      href: "/video/compress/mov",              category: "Video" },
  { name: "Video to GIF",        href: "/video/convert/video-to-gif",      category: "Video" },
  { name: "MP4 to WebM",         href: "/video/convert/mp4-to-webm",       category: "Video" },
  { name: "MP4 to MP3",          href: "/video/convert/mp4-to-mp3",        category: "Video" },
  { name: "Trim Video",          href: "/video/edit/trim",                 category: "Video" },
  { name: "Mute Video",          href: "/video/edit/mute",                 category: "Video" },
  { name: "Video Screenshot",    href: "/video/edit/screenshot",           category: "Video" },
  { name: "GIF Compressor",      href: "/gif/compress",                    category: "GIF & SVG" },
  { name: "GIF to MP4",          href: "/gif/convert/gif-to-mp4",          category: "GIF & SVG" },
  { name: "GIF to WebM",         href: "/gif/convert/gif-to-webm",         category: "GIF & SVG" },
  { name: "SVG Optimizer",       href: "/svg/optimize",                    category: "GIF & SVG" },
  { name: "PDF Compressor",      href: "/pdf/compress",                    category: "PDF" },
  { name: "Merge PDF",           href: "/pdf/merge",                       category: "PDF" },
  { name: "Split PDF",           href: "/pdf/split",                       category: "PDF" },
  { name: "Rotate PDF",          href: "/pdf/rotate",                      category: "PDF" },
  { name: "JPG to PDF",          href: "/pdf/jpg-to-pdf",                  category: "PDF" },
  { name: "PDF to JPG",          href: "/pdf/pdf-to-jpg",                  category: "PDF" },
  { name: "Audio Compressor",    href: "/audio/compress/mp3",              category: "Audio" },
  { name: "MP3 to WAV",          href: "/audio/convert/mp3-to-wav",        category: "Audio" },
  { name: "WAV to MP3",          href: "/audio/convert/wav-to-mp3",        category: "Audio" },
  { name: "Trim Audio",          href: "/audio/edit/trim",                 category: "Audio" },
  { name: "Favicon Generator",   href: "/dev/favicon-generator",           category: "Dev Tools" },
  { name: "OG Image Resizer",    href: "/dev/og-image-resizer",            category: "Dev Tools" },
  { name: "Base64 Encoder",      href: "/dev/base64-encoder",              category: "Dev Tools" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const toolsRef = useRef(null);
  const legalRef = useRef(null);
  const searchRef = useRef(null);
  const searchTimer = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) setToolsOpen(false);
      if (legalRef.current && !legalRef.current.contains(e.target)) setLegalOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = searchQuery.trim().length > 0
    ? ALL_TOOLS.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setSearchOpen(true);
  }

  function handleSearchSelect(href) {
    setSearchQuery("");
    setSearchOpen(false);
    router.push(href);
  }

  function handleSearchKeyDown(e) {
    if (e.key === "Escape") { setSearchQuery(""); setSearchOpen(false); }
    if (e.key === "Enter" && searchResults.length > 0) handleSearchSelect(searchResults[0].href);
  }

  return (
    <header className="nb-header">
      <div className="nb-inner">

        {/* ── Logo ── */}
        <Link href="/" className="nb-logo">
          <div className="nb-logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <span className="nb-logo-text">webpifyy</span>
        </Link>

        {/* ── Center nav ── */}
        <nav className="nb-nav">

          {/* Tools dropdown */}
          <div ref={toolsRef} className="nb-dropdown">
            <button
              className="nb-navlink nb-navlink--btn"
              onClick={() => { setToolsOpen(v => !v); setLegalOpen(false); }}
              onMouseEnter={() => { setToolsOpen(true); setLegalOpen(false); }}
            >
              Tools
              <svg className={`nb-chevron${toolsOpen ? " nb-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            {toolsOpen && (
              <div className="nb-dropdown-menu nb-dropdown-menu--wide nb-dropdown-menu--open">
                <div className="nb-dropdown-cols">
                  <div className="nb-dropdown-group">
                    <span className="nb-dropdown-label">Image</span>
                    <Link href="/image/compress" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Image Compressor</Link>
                    <Link href="/image/convert" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Image Converter</Link>
                    <Link href="/image/resize" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Image Resizer</Link>
                    <Link href="/image/edit" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Image Editor</Link>
                    <Link href="/image/edit/crop" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Crop Image</Link>
                    <Link href="/image/edit/rotate" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Rotate Image</Link>
                    <Link href="/image/edit/watermark" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Add Watermark</Link>
                    <Link href="/image/convert/heic-to-jpg" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>HEIC → JPG</Link>
                    <Link href="/image/convert/image-to-pdf" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Image → PDF</Link>
                    <Link href="/pdf/pdf-to-jpg" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>PDF → JPG</Link>
                    <Link href="/image/edit/remove-background" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Remove Background</Link>
                  </div>
                  <div className="nb-dropdown-group">
                    <span className="nb-dropdown-label">Video</span>
                    <Link href="/video/compress" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Video Compressor</Link>
                    <Link href="/video/compress/mp4" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>MP4 Compressor</Link>
                    <Link href="/video/compress/webm" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>WebM Compressor</Link>
                    <Link href="/video/compress/mov" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>MOV Compressor</Link>
                    <Link href="/video/convert/video-to-gif" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Video → GIF</Link>
                    <Link href="/video/convert/mp4-to-webm" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>MP4 → WebM</Link>
                    <Link href="/video/convert/mp4-to-mp3" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>MP4 → MP3</Link>
                    <Link href="/video/edit/trim" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Trim Video</Link>
                    <Link href="/video/edit/mute" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Mute Video</Link>
                    <Link href="/video/edit/screenshot" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Video Screenshot</Link>
                  </div>
                  <div className="nb-dropdown-group">
                    <span className="nb-dropdown-label">GIF, PDF &amp; SVG</span>
                    <Link href="/gif/compress" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>GIF Compressor</Link>
                    <Link href="/gif/convert/gif-to-mp4" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>GIF → MP4</Link>
                    <Link href="/gif/convert/gif-to-webm" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>GIF → WebM</Link>
                    <Link href="/svg/optimize" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>SVG Optimizer</Link>
                    <Link href="/pdf/compress" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>PDF Compressor</Link>
                    <Link href="/pdf/merge" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Merge PDF</Link>
                    <Link href="/pdf/split" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Split PDF</Link>
                    <Link href="/pdf/jpg-to-pdf" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>JPG → PDF</Link>
                  </div>
                  <div className="nb-dropdown-group">
                    <span className="nb-dropdown-label">Audio &amp; Dev</span>
                    <Link href="/audio/compress/mp3" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Audio Compressor</Link>
                    <Link href="/audio/convert/mp3-to-wav" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>MP3 → WAV</Link>
                    <Link href="/audio/convert/wav-to-mp3" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>WAV → MP3</Link>
                    <Link href="/audio/edit/trim" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Trim Audio</Link>
                    <Link href="/dev/favicon-generator" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Favicon Generator</Link>
                    <Link href="/dev/og-image-resizer" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>OG Image Resizer</Link>
                    <Link href="/dev/base64-encoder" className="nb-dropdown-item" onClick={() => setToolsOpen(false)}>Base64 Encoder</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="nb-navlink">About</Link>

          {/* Legal dropdown */}
          <div ref={legalRef} className="nb-dropdown">
            <button
              className="nb-navlink nb-navlink--btn"
              onClick={() => { setLegalOpen(v => !v); setToolsOpen(false); }}
              onMouseEnter={() => { setLegalOpen(true); setToolsOpen(false); }}
            >
              Legal
              <svg className={`nb-chevron${legalOpen ? " nb-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            {legalOpen && (
              <div className="nb-dropdown-menu nb-dropdown-menu--open">
                <Link href="/privacy" className="nb-dropdown-item" onClick={() => setLegalOpen(false)}>Privacy Policy</Link>
                <Link href="/terms" className="nb-dropdown-item" onClick={() => setLegalOpen(false)}>Terms of Service</Link>
              </div>
            )}
          </div>

        </nav>

        {/* ── Search ── */}
        <div ref={searchRef} className="nb-search">
          <svg className="nb-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            className="nb-search-input"
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => { if (searchQuery.trim()) setSearchOpen(true); }}
            autoComplete="off"
          />
          {searchOpen && searchResults.length > 0 && (
            <div className="nb-search-results">
              {searchResults.map(tool => (
                <button
                  key={tool.href}
                  className="nb-search-result-item"
                  onMouseDown={() => handleSearchSelect(tool.href)}
                >
                  <span className="nb-search-result-name">{tool.name}</span>
                  <span className="nb-search-result-cat">{tool.category}</span>
                </button>
              ))}
            </div>
          )}
          {searchOpen && searchQuery.trim().length > 0 && searchResults.length === 0 && (
            <div className="nb-search-results">
              <div className="nb-search-no-results">No tools found for &quot;{searchQuery}&quot;</div>
            </div>
          )}
        </div>

        {/* ── CTA ── */}
        <a
          href="https://www.linkedin.com/in/kashyaprathod/"
          target="_blank"
          rel="noopener noreferrer"
          className="nb-cta"
        >
          Connect with Builder
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="nb-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>

      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="nb-mobile-menu">
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">Image Tools</span>
            <Link href="/image/compress" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Compressor</Link>
            <Link href="/image/convert" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Converter</Link>
            <Link href="/image/resize" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Resizer</Link>
            <Link href="/image/edit" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Editor</Link>
            <Link href="/image/edit/crop" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Crop Image</Link>
            <Link href="/image/edit/rotate" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Rotate Image</Link>
            <Link href="/image/edit/watermark" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Add Watermark</Link>
            <Link href="/image/convert/heic-to-jpg" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>HEIC → JPG</Link>
            <Link href="/image/convert/image-to-pdf" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image → PDF</Link>
            <Link href="/pdf/pdf-to-jpg" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>PDF → JPG</Link>
            <Link href="/image/edit/remove-background" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Remove Background</Link>
          </div>
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">Video Tools</span>
            <Link href="/video/compress" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Video Compressor</Link>
            <Link href="/video/convert/video-to-gif" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Video → GIF</Link>
            <Link href="/video/convert/mp4-to-webm" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>MP4 → WebM</Link>
            <Link href="/video/convert/mp4-to-mp3" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>MP4 → MP3</Link>
            <Link href="/video/edit/trim" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Trim Video</Link>
            <Link href="/video/edit/mute" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Mute Video</Link>
          </div>
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">GIF, PDF &amp; SVG</span>
            <Link href="/gif/compress" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>GIF Compressor</Link>
            <Link href="/svg/optimize" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>SVG Optimizer</Link>
            <Link href="/pdf/compress" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>PDF Compressor</Link>
            <Link href="/pdf/merge" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Merge PDF</Link>
            <Link href="/pdf/jpg-to-pdf" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>JPG → PDF</Link>
          </div>
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">Audio &amp; Dev Tools</span>
            <Link href="/audio/compress/mp3" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Audio Compressor</Link>
            <Link href="/audio/convert/mp3-to-wav" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>MP3 → WAV</Link>
            <Link href="/audio/edit/trim" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Trim Audio</Link>
            <Link href="/dev/favicon-generator" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Favicon Generator</Link>
            <Link href="/dev/og-image-resizer" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>OG Image Resizer</Link>
            <Link href="/dev/base64-encoder" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Base64 Encoder</Link>
          </div>
          <div className="nb-mobile-section">
            <Link href="/about" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/privacy" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Privacy Policy</Link>
            <Link href="/terms" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Terms of Service</Link>
          </div>
          <a
            href="https://github.com/ikashyaprathod/webPify"
            target="_blank"
            rel="noopener noreferrer"
            className="nb-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Connect with Builder
          </a>
        </div>
      )}
    </header>
  );
}
