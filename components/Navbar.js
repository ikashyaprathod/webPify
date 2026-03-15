"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ALL_TOOLS = [
  { name: "Image Compressor",   href: "/image/compressor",       category: "Image" },
  { name: "Image Converter",    href: "/image/converter",        category: "Image" },
  { name: "Image Resizer",      href: "/image/resizer",          category: "Image" },
  { name: "Image Compare",      href: "/image/compare",          category: "Image" },
  { name: "PNG Compressor",     href: "/image/compressor/png",   category: "Image" },
  { name: "JPEG Compressor",    href: "/image/compressor/jpeg",  category: "Image" },
  { name: "WebP Compressor",    href: "/image/compressor/webp",  category: "Image" },
  { name: "PNG Converter",      href: "/image/converter/png",    category: "Image" },
  { name: "JPEG Converter",     href: "/image/converter/jpeg",   category: "Image" },
  { name: "WebP Converter",     href: "/image/converter/webp",   category: "Image" },
  { name: "Video Compressor",   href: "/video/compressor",       category: "Video" },
  { name: "MP4 Compressor",     href: "/video/compressor/mp4",   category: "Video" },
  { name: "WebM Compressor",    href: "/video/compressor/webm",  category: "Video" },
  { name: "MOV Compressor",     href: "/video/compressor/mov",   category: "Video" },
  { name: "Video to GIF",       href: "/video/to-gif",           category: "Video" },
  { name: "GIF Compressor",     href: "/gif/compressor",         category: "GIF & SVG" },
  { name: "GIF to MP4",         href: "/gif/compressor/mp4",     category: "GIF & SVG" },
  { name: "GIF to WebM",        href: "/gif/compressor/webm",    category: "GIF & SVG" },
  { name: "SVG Optimizer",      href: "/svg-optimizer",          category: "GIF & SVG" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const toolsTimer = useRef(null);
  const legalTimer = useRef(null);
  const searchTimer = useRef(null);

  function openTools() { clearTimeout(toolsTimer.current); setToolsOpen(true); }
  function closeTools() { toolsTimer.current = setTimeout(() => setToolsOpen(false), 150); }
  function openLegal() { clearTimeout(legalTimer.current); setLegalOpen(true); }
  function closeLegal() { legalTimer.current = setTimeout(() => setLegalOpen(false), 150); }

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
          <div
            className="nb-dropdown"
            onMouseEnter={openTools}
            onMouseLeave={closeTools}
          >
            <button className="nb-navlink nb-navlink--btn">
              Tools
              <svg className="nb-chevron" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            <div className={`nb-dropdown-menu nb-dropdown-menu--wide${toolsOpen ? " nb-dropdown-menu--open" : ""}`}>
              <div className="nb-dropdown-cols">
                <div className="nb-dropdown-group">
                  <span className="nb-dropdown-label">Image</span>
                  <Link href="/image/compressor" className="nb-dropdown-item">Image Compressor</Link>
                  <Link href="/image/converter" className="nb-dropdown-item">Image Converter</Link>
                  <Link href="/image/resizer" className="nb-dropdown-item">Image Resizer</Link>
                  <Link href="/image/compare" className="nb-dropdown-item">Image Compare</Link>
                </div>
                <div className="nb-dropdown-group">
                  <span className="nb-dropdown-label">Video</span>
                  <Link href="/video/compressor" className="nb-dropdown-item">Video Compressor</Link>
                  <Link href="/video/compressor/mp4" className="nb-dropdown-item">MP4 Compressor</Link>
                  <Link href="/video/compressor/webm" className="nb-dropdown-item">WebM Compressor</Link>
                  <Link href="/video/compressor/mov" className="nb-dropdown-item">MOV Compressor</Link>
                  <Link href="/video/to-gif" className="nb-dropdown-item">Video → GIF</Link>
                </div>
                <div className="nb-dropdown-group">
                  <span className="nb-dropdown-label">GIF &amp; SVG</span>
                  <Link href="/gif/compressor" className="nb-dropdown-item">GIF Compressor</Link>
                  <Link href="/gif/compressor/mp4" className="nb-dropdown-item">GIF → MP4</Link>
                  <Link href="/gif/compressor/webm" className="nb-dropdown-item">GIF → WebM</Link>
                  <Link href="/svg-optimizer" className="nb-dropdown-item">SVG Optimizer</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="nb-navlink">About</Link>

          {/* Legal dropdown */}
          <div
            className="nb-dropdown"
            onMouseEnter={openLegal}
            onMouseLeave={closeLegal}
          >
            <button className="nb-navlink nb-navlink--btn">
              Legal
              <svg className="nb-chevron" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            <div className={`nb-dropdown-menu${legalOpen ? " nb-dropdown-menu--open" : ""}`}>
              <Link href="/privacy" className="nb-dropdown-item">Privacy Policy</Link>
              <Link href="/terms" className="nb-dropdown-item">Terms of Service</Link>
            </div>
          </div>

        </nav>

        {/* ── Search ── */}
        <div
          className="nb-search"
          onBlur={() => { searchTimer.current = setTimeout(() => setSearchOpen(false), 150); }}
          onFocus={() => { clearTimeout(searchTimer.current); if (searchQuery.trim()) setSearchOpen(true); }}
        >
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
            <Link href="/image/compressor" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Compressor</Link>
            <Link href="/image/converter" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Converter</Link>
            <Link href="/image/resizer" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Resizer</Link>
            <Link href="/image/compare" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Image Compare</Link>
          </div>
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">Video Tools</span>
            <Link href="/video/compressor" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Video Compressor</Link>
            <Link href="/video/to-gif" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>Video → GIF</Link>
          </div>
          <div className="nb-mobile-section">
            <span className="nb-mobile-label">GIF &amp; SVG</span>
            <Link href="/gif/compressor" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>GIF Compressor</Link>
            <Link href="/svg-optimizer" className="nb-mobile-item" onClick={() => setMobileOpen(false)}>SVG Optimizer</Link>
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
