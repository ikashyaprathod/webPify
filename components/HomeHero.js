"use client";

import Link from "next/link";

const TOOLS = [
  {
    icon: "🔄",
    title: "Image Converter",
    desc: "Convert between WebP, PNG, and JPEG with zero quality loss. Batch processing supported.",
    href: "/image/convert",
    headerGradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    links: [
      { label: "Convert to WebP", href: "/image/convert/to-webp" },
      { label: "Convert to PNG", href: "/image/convert/to-png" },
    ],
  },
  {
    icon: "⚡",
    title: "Image Compressor",
    desc: "Compress PNG, JPEG, WebP & AVIF with before/after preview. Supports clipboard paste.",
    href: "/image/compress",
    headerGradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    links: [
      { label: "Lossless JPEG", href: "/image/compress/jpeg" },
      { label: "Bulk Compression", href: "/image/compress/png" },
    ],
  },
  {
    icon: "🎬",
    title: "Video Compressor",
    desc: "Compress MP4, MOV, WebM in your browser using WebAssembly. 100% private.",
    href: "/video/compress",
    headerGradient: "linear-gradient(135deg,#fef2f2,#fee2e2)",
    links: [
      { label: "MP4 Optimization", href: "/video/compress/mp4" },
      { label: "Resize for WhatsApp", href: "/video/compress/mp4" },
    ],
  },
  {
    icon: "🎞",
    title: "GIF Compressor",
    desc: "Compress GIFs or convert to MP4/WebM for up to 90% size reduction.",
    href: "/gif/compress",
    headerGradient: "linear-gradient(135deg,#faf5ff,#f3e8ff)",
    links: [
      { label: "GIF to MP4", href: "/gif/convert/gif-to-mp4" },
      { label: "Loop Adjustment", href: "/gif/compress/gif" },
    ],
  },
  {
    icon: "📐",
    title: "Image Resizer",
    desc: "Resize PNG, JPEG, WebP & AVIF to any dimension. Four fit modes. Bulk processing.",
    href: "/image/resize",
    headerGradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    links: [
      { label: "Instagram Cropper", href: "/image/resize/jpeg" },
      { label: "Bulk Resizing", href: "/image/resize/png" },
    ],
  },
  {
    icon: "✨",
    title: "SVG Optimizer",
    desc: "Minify SVGs with SVGO. Strip metadata, merge styles, shrink path data.",
    href: "/svg/optimize",
    headerGradient: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
    links: [
      { label: "XML Cleanup", href: "/svg/optimize" },
      { label: "Path Simplification", href: "/svg/optimize" },
    ],
  },
];

const QUICK_ACTIONS = [
  {
    icon: "🖼",
    label: "PDF to JPG",
    desc: "Convert docs to images",
    iconClass: "hp2-quick-icon--blue",
  },
  {
    icon: "📷",
    label: "HEIC to JPG",
    desc: "Apple format support",
    iconClass: "hp2-quick-icon--green",
  },
  {
    icon: "✨",
    label: "Remove Background",
    desc: "AI-powered masking",
    iconClass: "hp2-quick-icon--purple",
  },
  {
    icon: "💧",
    label: "Add Watermark",
    desc: "Brand your content",
    iconClass: "hp2-quick-icon--amber",
  },
];

const STATS = [
  {
    label: "Files Optimized",
    value: "250M+",
    badge: "+12% this mo",
    badgeClass: "hp2-stat-badge--blue",
    fillClass: "hp2-stat-bar-fill--blue",
  },
  {
    label: "Average Reduction",
    value: "75.4%",
    badge: "+5% improvement",
    badgeClass: "hp2-stat-badge--green",
    fillClass: "hp2-stat-bar-fill--green",
  },
  {
    label: "Processing Speed",
    value: "0.4s",
    badge: "Industry leading",
    badgeClass: "hp2-stat-badge--purple",
    fillClass: "hp2-stat-bar-fill--purple",
  },
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Processes files in your browser using WebAssembly — no server roundtrip needed.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Files never leave your device. Zero server uploads. Your data stays yours.",
  },
  {
    icon: "💻",
    title: "Multi-format Support",
    desc: "PNG, JPEG, WebP, MP4, MOV, WebM, GIF, SVG — every major format covered.",
  },
];

export default function HomeHero() {
  return (
    <div className="hp2-wrap">
      <div className="hp2-main">

        {/* ── Hero ── */}
        <section className="hp2-hero">
          <h1 className="hp2-title">
            Compress, Convert &amp;{" "}
            <span className="hp2-title-gradient">Optimize — Everything</span>
          </h1>
          <p className="hp2-subtitle">
            The ultimate all-in-one media toolkit for creators, developers, and speed enthusiasts.
          </p>
        </section>

        {/* ── Tool Cards Grid ── */}
        <div className="hp2-grid">
          {TOOLS.map((tool) => (
            <div key={tool.href + tool.title} className="hp2-card">
              <div
                className="hp2-card-header"
                style={{ background: tool.headerGradient }}
              >
                <div className="hp2-card-header-inner" aria-hidden="true" />
                <div className="hp2-card-icon-box">{tool.icon}</div>
              </div>
              <div className="hp2-card-body">
                <h2 className="hp2-card-title">{tool.title}</h2>
                <p className="hp2-card-desc">{tool.desc}</p>
                <Link href={tool.href} className="hp2-card-btn">
                  Open {tool.title} →
                </Link>
                <div className="hp2-card-popular-label">Popular Tools</div>
                <div className="hp2-card-links">
                  {tool.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} className="hp2-card-link">
                      <span className="hp2-card-link-dot">✓</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Quick Actions ── */}
        <section>
          <div className="hp2-section-header">
            <h2 className="hp2-section-title">Quick Actions</h2>
            <Link href="/image/convert" className="hp2-section-link">
              View All Tools →
            </Link>
          </div>
          <div className="hp2-quick-grid">
            {QUICK_ACTIONS.map((action) => (
              <div key={action.label} className="hp2-quick-card">
                <div className={`hp2-quick-icon ${action.iconClass}`}>
                  {action.icon}
                </div>
                <div>
                  <div className="hp2-quick-name">{action.label}</div>
                  <div className="hp2-quick-desc">{action.desc}</div>
                  <span className="hp2-quick-badge">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="hp2-stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="hp2-stat-card">
              <div className="hp2-stat-label">{stat.label}</div>
              <div className="hp2-stat-row">
                <span className="hp2-stat-value">{stat.value}</span>
                <span className={`hp2-stat-badge ${stat.badgeClass}`}>{stat.badge}</span>
              </div>
              <div className="hp2-stat-bar">
                <div className={`hp2-stat-bar-fill ${stat.fillClass}`} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Dark Features Section ── */}
        <section className="hp2-features">
          <div className="hp2-features-glow-1" aria-hidden="true" />
          <div className="hp2-features-glow-2" aria-hidden="true" />
          <div className="hp2-features-inner">
            <div>
              <h2 className="hp2-features-heading">
                Why professionals choose{" "}
                <span className="hp2-features-heading-accent">webpifyy</span>
              </h2>
              <div className="hp2-features-list">
                {FEATURES.map((feature) => (
                  <div key={feature.title} className="hp2-feature-item">
                    <div className="hp2-feature-icon">{feature.icon}</div>
                    <div>
                      <div className="hp2-feature-title">{feature.title}</div>
                      <div className="hp2-feature-desc">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hp2-features-visual">
              <div className="hp2-features-glass">
                <div className="hp2-features-glass-inner">🚀</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
