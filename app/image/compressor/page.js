import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Image Compressor – Compress PNG, JPEG, WebP Online Free",
  description: "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats. Reduce file size by 60–90% using pngquant and mozjpeg. Free, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compressor" },
  keywords: ["image compressor", "compress images online", "reduce image size", "png compressor", "jpeg compressor", "webp compressor"],
  openGraph: {
    title: "Image Compressor – Compress PNG, JPEG, WebP Online Free",
    description: "Compress images online without visible quality loss. Reduce file size by 60–90%. Free, no sign-up.",
    url: "https://webpifyy.vercel.app/image/compressor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor – Compress PNG, JPEG, WebP Online Free",
    description: "Reduce image file size by 60–90% without quality loss. Free, instant, no sign-up required.",
  },
};

const cards = [
  {
    href: "/image/compressor/png",
    icon: "🖼️",
    title: "PNG Compressor",
    desc: "Compress PNG images up to 90% smaller using pngquant palette optimization. Lossless visual quality.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Compress PNG",
  },
  {
    href: "/image/compressor/jpeg",
    icon: "📷",
    title: "JPEG Compressor",
    desc: "Compress JPG images up to 85% smaller with mozjpeg. Ideal for photographs and product images.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Compress JPEG",
  },
  {
    href: "/image/compressor/webp",
    icon: "🔄",
    title: "WebP Compressor",
    desc: "Reduce WebP file size while maintaining the modern format advantages over PNG and JPEG.",
    gradient: "linear-gradient(135deg,#faf5ff,#f3e8ff)",
    cta: "Compress WebP",
  },
];

const faqs = [
  { q: "What is image compression?", a: "Image compression reduces file size by removing redundant or non-essential data. Lossless compression (used for PNG) removes redundant data without affecting quality. Lossy compression (used for JPEG and WebP) discards some visual data, resulting in smaller files with minimal visible difference." },
  { q: "How much can images be compressed?", a: "PNG images typically compress 60–90% with pngquant. JPEG images compress 40–90% with mozjpeg. Converting to WebP can reduce file size by a further 25–35% compared to PNG/JPEG." },
  { q: "Does compressing images affect SEO?", a: "Yes, positively. Smaller images load faster, which improves Core Web Vitals scores (especially LCP), reduces Time to First Byte (TTFB), and lowers bounce rates — all signals that Google uses in its ranking algorithm." },
  { q: "What image format compresses best?", a: "WebP generally achieves the best compression for web images. PNG is best for lossless compression of graphics and logos. JPEG is efficient for photographs. For best results, convert to WebP after initial compression." },
  { q: "Is online image compression safe?", a: "Our tool processes images on our servers using Sharp — files are compressed and returned immediately without being stored. No images are saved, logged, or retained after processing." },
];

export default function CompressorHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Compressor", href: "/image/compressor" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Compressor" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compressor#software",
        "name": "Image Compressor",
        "url": "https://webpifyy.vercel.app/image/compressor",
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
        "description": "Compress PNG, JPEG, and WebP images online without visible quality loss. Free, no sign-up required.",
        "featureList": ["PNG Compression", "JPEG Compression", "WebP Compression", "60-90% Size Reduction", "Free"]
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

        {/* ── Hero ── */}
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">Workspace</span>
          <h1 className="hubv2-hero-title">
            Image <span className="hubv2-hero-title-accent">Compressor</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Reduce image file size by 60–90% without losing quality. Keep the original format — PNG stays PNG, JPEG stays JPEG.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Compressors
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
          <h2 className="hubv2-stats-hd">Compression Performance</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🖼️</span>
              <p className="hubv2-stat-label">PNG Compression</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">90%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">pngquant</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "90%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">📷</span>
              <p className="hubv2-stat-label">JPEG Compression</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">85%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">mozjpeg</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "85%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🚀</span>
              <p className="hubv2-stat-label">WebP Advantage</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">35%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">vs PNG/JPEG</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "35%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent Assets ── */}
        <section className="hubv2-recent">
          <div className="hubv2-recent-hd">
            <h2 className="hubv2-recent-hd-title">Recent Assets</h2>
            <a href="/image/compressor/png" className="hubv2-recent-view-all">Try Compressor →</a>
          </div>
          <div className="hubv2-recent-card">
            <table className="hubv2-recent-table">
              <thead className="hubv2-recent-thead">
                <tr>
                  <th className="hubv2-recent-th">File Name</th>
                  <th className="hubv2-recent-th">Type</th>
                  <th className="hubv2-recent-th">Original</th>
                  <th className="hubv2-recent-th">Optimized</th>
                  <th className="hubv2-recent-th hubv2-recent-td-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🖼️</div><span className="hubv2-recent-filename">banner-2024.png</span></div></td>
                  <td className="hubv2-recent-td">PNG → PNG</td>
                  <td className="hubv2-recent-td">3.2 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">380 KB (-88%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/compressor/png" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">📷</div><span className="hubv2-recent-filename">profile-pic.jpg</span></div></td>
                  <td className="hubv2-recent-td">JPG → JPG</td>
                  <td className="hubv2-recent-td">980 KB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">145 KB (-85%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/compressor/jpeg" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🔄</div><span className="hubv2-recent-filename">thumbnail.webp</span></div></td>
                  <td className="hubv2-recent-td">WebP → WebP</td>
                  <td className="hubv2-recent-td">520 KB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">89 KB (-83%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/compressor/webp" className="hubv2-recent-dl">↓</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Image Compression FAQ</h2>
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
