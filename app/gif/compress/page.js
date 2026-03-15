import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "GIF Compressor – Compress GIF & Convert to MP4/WebM Online Free",
  description: "Compress animated GIFs or convert them to MP4/WebM for up to 90% smaller files. Free, fast, browser-based — your files never leave your device. No upload needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/compress" },
  keywords: ["gif compressor", "compress gif online", "gif to mp4", "gif to webm", "reduce gif size free"],
  openGraph: {
    title: "GIF Compressor – Compress GIF & Convert to MP4/WebM Online Free",
    description: "Compress animated GIFs or convert to MP4/WebM for up to 90% smaller files. Free, browser-based.",
    url: "https://webpifyy.vercel.app/gif/compress",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIF Compressor – Compress GIF & Convert to MP4/WebM Free",
    description: "Compress GIFs or convert to video for up to 90% smaller files. Free, browser-based, no sign-up.",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"GIF Tools","item":"https://webpifyy.vercel.app/gif"},{"@type":"ListItem","position":3,"name":"Compress"}]})
  },
};

const cards = [
  {
    href: "/gif/compress/gif",
    icon: "🗜️",
    title: "Compress GIF",
    desc: "Shrink GIF file size with palettegen optimization. Reduce colors intelligently for 30–60% smaller files.",
    gradient: "linear-gradient(135deg,#fff1f2,#ffe4e6)",
    cta: "Compress GIF",
  },
  {
    href: "/gif/convert/gif-to-mp4",
    icon: "🎬",
    title: "GIF to MP4",
    desc: "Convert GIF to H.264 MP4 for up to 90% smaller files. Perfect for social media and web embedding.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Convert to MP4",
  },
  {
    href: "/gif/convert/gif-to-webm",
    icon: "🌐",
    title: "GIF to WebM",
    desc: "Convert GIF to VP9 WebM for modern browsers. Excellent quality-to-size ratio for web use.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Convert to WebM",
  },
  {
    href: "/video/convert/video-to-gif",
    icon: "🎥",
    title: "Video to GIF",
    desc: "Convert MP4, WebM, or MOV video clips to animated GIF for sharing on any platform.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Convert to GIF",
  },
];

const faqs = [
  { q: "What is the best way to reduce GIF file size?", a: "Converting to MP4 or WebM is the most effective approach — it can reduce file size by 80–90%. If you need to keep the GIF format (for email clients, older platforms), use GIF compression with palette optimization for 30–60% reduction." },
  { q: "Why are GIF files so large?", a: "GIF uses an outdated LZW compression algorithm and is limited to 256 colors per frame. For animations with many frames or colors, this results in very large files. Modern video codecs like H.264 and VP9 are 10–20x more efficient." },
  { q: "Can I use MP4 instead of GIF everywhere?", a: "On modern web browsers and most platforms, yes. Use the HTML video element with autoplay muted loop playsinline attributes to replicate GIF behavior. Email clients and some older systems still require actual GIF format." },
  { q: "Is my GIF processed on a server or in the browser?", a: "All processing (compression and conversion) happens entirely in your browser using FFmpeg.wasm. Your files never leave your device — no uploads, no storage, no privacy concerns." },
  { q: "What quality loss should I expect from GIF compression?", a: "Color palette optimization may slightly affect colors in very complex animations. For most GIFs, the visual difference is minimal. Converting to MP4/WebM instead can actually improve quality while dramatically reducing file size." },
];

export default function GifCompressorHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "GIF", "item": "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", "position": 3, "name": "GIF Compressor" },
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/gif/compress#software",
        "name": "GIF Compressor",
        "url": "https://webpifyy.vercel.app/gif/compress",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://webpifyy.vercel.app/#organization" }
        },
        "provider": { "@id": "https://webpifyy.vercel.app/#organization" },
        "author": { "@id": "https://webpifyy.vercel.app/#organization" },
        "description": "Compress GIF files or convert them to MP4/WebM for up to 90% smaller files. Free, browser-based, no uploads.",
        "featureList": ["GIF Compression", "GIF to MP4", "GIF to WebM", "Video to GIF", "Browser-based", "Free"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'GIF Tools',href:'/gif'},{label:'Compress'}]} />

        {/* ── Hero ── */}
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">GIF COMPRESSOR</span>
          <h1 className="hubv2-hero-title">
            GIF <span className="hubv2-hero-title-accent">Compressor</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Compress animated GIFs or convert them to video format for up to 90% smaller files. Everything runs in your browser — your files never leave your device.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Tools
          </a>
        </div>

        {/* ── Core Tools ── */}
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left">
              <span className="hubv2-section-hd-icon">⊞</span>
              <h2 className="hubv2-section-hd-title">Core Tools</h2>
            </div>
            <div className="hubv2-section-hd-actions">
              <span className="hubv2-section-hd-btn">≡</span>
              <span className="hubv2-section-hd-btn">⊞</span>
            </div>
          </div>
          <div className="hubv2-grid">
            {cards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header">
                  <div className="hubv2-card-icon-box">{card.icon}</div>
                </div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Why Convert GIF to Video?</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">📉</span>
              <p className="hubv2-stat-label">Max Size Reduction</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">90%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">GIF → MP4</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "90%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🎨</span>
              <p className="hubv2-stat-label">Color Depth (MP4/WebM)</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">16M</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">vs GIF 256</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🔒</span>
              <p className="hubv2-stat-label">Browser Processing</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">100%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">No uploads</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">GIF Compression FAQ</h2>
          {faqs.map((f, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </section>
      </PageShell>
    </>
  );
}
