"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";

const CARDS = [
  {
    icon: "🔄",
    title: "Image Converter",
    desc: "Convert between WebP, PNG, and JPEG with zero quality loss.",
    href: "/image/converter",
    accent: "linear-gradient(90deg,#0070f3,#38bdf8)",
    iconBg: "rgba(0,112,243,0.1)",
    btnBg: "#0070f3",
    links: [
      { label: "Convert to WebP",  href: "/image/converter/webp" },
      { label: "Convert to PNG",   href: "/image/converter/png"  },
      { label: "Convert to JPEG",  href: "/image/converter/jpeg" },
    ],
  },
  {
    icon: "⚡",
    title: "Image Compressor",
    desc: "Compress PNG, JPEG, WebP & AVIF. Before/after slider. Clipboard paste.",
    href: "/image/compressor",
    accent: "linear-gradient(90deg,#f59e0b,#fbbf24)",
    iconBg: "rgba(245,158,11,0.1)",
    btnBg: "#d97706",
    links: [
      { label: "Compress PNG",  href: "/image/compressor/png"  },
      { label: "Compress JPEG", href: "/image/compressor/jpeg" },
      { label: "Compress WebP", href: "/image/compressor/webp" },
    ],
  },
  {
    icon: "🎬",
    title: "Video Compressor",
    desc: "Compress MP4, MOV, WebM in your browser. Smart Adaptive. 100% private.",
    href: "/video/compressor",
    accent: "linear-gradient(90deg,#7c3aed,#a78bfa)",
    iconBg: "rgba(124,58,237,0.1)",
    btnBg: "#7c3aed",
    links: [
      { label: "Compress MP4",  href: "/video/compressor/mp4"  },
      { label: "Compress WebM", href: "/video/compressor/webm" },
      { label: "Compress MOV",  href: "/video/compressor/mov"  },
    ],
  },
  {
    icon: "🎞️",
    title: "GIF Compressor",
    desc: "Compress GIFs or convert to MP4/WebM for up to 90% size reduction.",
    href: "/gif/compressor",
    accent: "linear-gradient(90deg,#ec4899,#f472b6)",
    iconBg: "rgba(236,72,153,0.1)",
    btnBg: "#db2777",
    links: [
      { label: "Compress GIF", href: "/gif/compressor/gif" },
      { label: "GIF → MP4",    href: "/gif/compressor/mp4" },
      { label: "Video → GIF",  href: "/video/to-gif"       },
    ],
  },
  {
    icon: "📐",
    title: "Image Resizer",
    desc: "Resize PNG, JPEG, WebP & AVIF to any dimension. Four fit modes. Bulk.",
    href: "/image/resizer",
    accent: "linear-gradient(90deg,#10b981,#34d399)",
    iconBg: "rgba(16,185,129,0.1)",
    btnBg: "#059669",
    links: [
      { label: "Resize PNG",  href: "/image/resizer/png"  },
      { label: "Resize JPEG", href: "/image/resizer/jpeg" },
      { label: "Resize WebP", href: "/image/resizer/webp" },
    ],
  },
  {
    icon: "✨",
    title: "SVG Optimizer",
    desc: "Minify SVGs with SVGO. Strip metadata, merge styles, shrink path data.",
    href: "/svg-optimizer",
    accent: "linear-gradient(90deg,#6366f1,#818cf8)",
    iconBg: "rgba(99,102,241,0.1)",
    btnBg: "#4f46e5",
    links: [
      { label: "Optimize SVG", href: "/svg-optimizer" },
    ],
  },
];

function ToolCard({ card }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r   = el.getBoundingClientRect();
    const x   = (e.clientX - r.left) / r.width  - 0.5;
    const y   = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transition = "transform 0.07s ease-out, box-shadow 0.07s ease-out";
    el.style.transform  = `perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateZ(8px)`;
    el.style.boxShadow  =
      `${-x*28}px ${y*14}px 48px rgba(0,0,0,0.13), ` +
      `0 8px 24px rgba(0,0,0,0.07), ` +
      `inset 0 1px 0 rgba(255,255,255,0.5)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(.23,1,.32,1), box-shadow 0.45s cubic-bezier(.23,1,.32,1)";
    el.style.transform  = "";
    el.style.boxShadow  = "";
  }, []);

  return (
    <div ref={ref} className="hp-card" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Color accent top line */}
      <div className="hp-card-accent" style={{ background: card.accent }} />

      {/* Icon */}
      <div className="hp-card-icon" style={{ background: card.iconBg }}>
        {card.icon}
      </div>

      <h2 className="hp-card-title">{card.title}</h2>
      <p className="hp-card-desc">{card.desc}</p>

      {/* CTA */}
      <Link href={card.href} className="hp-card-btn" style={{ background: card.btnBg }}>
        Open {card.title}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>

      {/* Sub-links */}
      <div className="hp-card-links">
        {card.links.map(l => (
          <Link key={l.href} href={l.href} className="hp-card-link">
            <span className="hp-card-link-arrow">›</span>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Sheen overlay (CSS handles animation via hover) */}
      <div className="hp-card-sheen" aria-hidden="true" />
    </div>
  );
}

export default function HomeHero() {
  return (
    <div className="hp-wrap">
      {/* Background blobs */}
      <div className="hp-blob hp-blob--blue" aria-hidden="true" />
      <div className="hp-blob hp-blob--purple" aria-hidden="true" />
      <div className="hp-blob hp-blob--pink" aria-hidden="true" />
      {/* Dot grid */}
      <div className="hp-grid-dots" aria-hidden="true" />

      <div className="hp-inner">
        {/* ── Hero ── */}
        <div className="hp-hero">
          <div className="hp-badge">
            <span className="hp-dot" />
            6 Free Tools · No Uploads · Instant Results
          </div>

          <h1 className="hp-title">
            Compress, Convert<br className="hp-br" />&amp; Optimize
            <span className="hp-title-accent"> — Everything</span>
          </h1>

          <p className="hp-subtitle">
            Professional-grade image, video, and GIF tools.<br className="hp-br-md" />
            All free, all fast, all private.
          </p>

          <div className="hp-trust">
            <span className="hp-trust-item"><span className="hp-dot" />Privacy-first</span>
            <span className="hp-trust-sep" />
            <span className="hp-trust-item"><span className="hp-dot" />Browser-based</span>
            <span className="hp-trust-sep" />
            <span className="hp-trust-item"><span className="hp-dot" />No registration</span>
          </div>
        </div>

        {/* ── 3D Tool Cards ── */}
        <div className="hp-grid">
          {CARDS.map(card => <ToolCard key={card.href} card={card} />)}
        </div>

        {/* ── Quick links ── */}
        <div className="hp-quicklinks">
          <Link href="/image/compare">Compare Tools</Link>
        </div>
      </div>
    </div>
  );
}
