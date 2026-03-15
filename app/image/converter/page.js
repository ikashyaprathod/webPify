import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Image Converter – Convert Images to PNG, JPEG, WebP Online Free",
  description: "Convert images between PNG, JPEG, and WebP formats online. Free, high quality, no sign-up required. Powered by Sharp for professional format conversion.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/converter" },
  keywords: ["image converter", "convert image online", "png to webp", "jpeg to png", "image format converter free"],
  openGraph: {
    title: "Image Converter – Convert Images to PNG, JPEG, WebP Online Free",
    description: "Convert images between PNG, JPEG, and WebP formats online. Free, high quality, no sign-up.",
    url: "https://webpifyy.vercel.app/image/converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter – Convert PNG, JPEG, WebP Online Free",
    description: "Convert images between formats online. Free, instant, no sign-up required.",
  },
};

const cards = [
  {
    href: "/image/converter/webp",
    icon: "🔄",
    title: "Convert to WebP",
    desc: "Convert any image to WebP format — 25–35% smaller than PNG/JPEG at the same quality. Supported by all modern browsers.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Convert to WebP",
  },
  {
    href: "/image/converter/png",
    icon: "🖼️",
    title: "Convert to PNG",
    desc: "Convert any image to lossless PNG format. Perfect for graphics, logos, and images requiring transparency.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Convert to PNG",
  },
  {
    href: "/image/converter/jpeg",
    icon: "📷",
    title: "Convert to JPEG",
    desc: "Convert any image to JPEG for maximum compatibility. Best for photographs and images without transparency.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Convert to JPEG",
  },
];

const faqs = [
  { q: "Which image format should I use for websites?", a: "WebP is the best format for modern websites — it's 25–35% smaller than PNG and JPEG at the same quality, and is now supported by all major browsers. Use PNG for transparency and logos, JPEG for photographs where WebP isn't accepted." },
  { q: "Can I convert any image format to WebP?", a: "Yes. Our converter accepts PNG, JPEG, WebP, AVIF, and other common formats and converts them to your chosen output format. Multiple files can be converted at once." },
  { q: "Does converting images reduce quality?", a: "Converting to JPEG or WebP uses lossy compression which may slightly reduce quality depending on the quality setting. Converting to PNG is lossless — no quality loss. At quality 80+, lossy formats are visually indistinguishable from the original." },
  { q: "Is image conversion free?", a: "Yes. All conversions are completely free with no file count limits, no watermarks, and no sign-up required." },
  { q: "What is the difference between image conversion and compression?", a: "Conversion changes the file format (e.g., PNG to WebP). Compression reduces the file size within the same format or during format conversion. You can do both simultaneously — convert to WebP and apply compression in one step." },
];

export default function ConverterHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Converter", href: "/image/converter" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Converter" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/converter#software",
        "name": "Image Converter",
        "url": "https://webpifyy.vercel.app/image/converter",
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
        "description": "Convert images between PNG, JPEG, and WebP formats online. Free, high quality, no sign-up required.",
        "featureList": ["PNG to WebP", "JPEG to WebP", "WebP to PNG", "WebP to JPEG", "Free"]
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
            Image Format <span className="hubv2-hero-title-accent">Converter</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Convert between WebP, PNG, and JPEG instantly with professional quality. WebP delivers 25–35% smaller files for modern web performance.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Converters
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
          <h2 className="hubv2-stats-hd">Conversion Benefits</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🔄</span>
              <p className="hubv2-stat-label">WebP Size Advantage</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">35%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">vs PNG/JPEG</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "35%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🖼️</span>
              <p className="hubv2-stat-label">PNG Quality</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">100%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">Lossless</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">⚡</span>
              <p className="hubv2-stat-label">Processing Speed</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">&lt;1s</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">Server-side</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{ "--prog": "95%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent Assets ── */}
        <section className="hubv2-recent">
          <div className="hubv2-recent-hd">
            <h2 className="hubv2-recent-hd-title">Recent Assets</h2>
            <a href="/image/converter/webp" className="hubv2-recent-view-all">Try Converter →</a>
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
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🖼️</div><span className="hubv2-recent-filename">hero-banner.jpg</span></div></td>
                  <td className="hubv2-recent-td">JPG → WebP</td>
                  <td className="hubv2-recent-td">2.4 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">420 KB (-82%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/converter/webp" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🏞️</div><span className="hubv2-recent-filename">product-shot.png</span></div></td>
                  <td className="hubv2-recent-td">PNG → WebP</td>
                  <td className="hubv2-recent-td">1.1 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">195 KB (-82%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/converter/webp" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🖥️</div><span className="hubv2-recent-filename">screenshot.png</span></div></td>
                  <td className="hubv2-recent-td">PNG → JPEG</td>
                  <td className="hubv2-recent-td">680 KB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">98 KB (-86%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/converter/jpeg" className="hubv2-recent-dl">↓</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Image Conversion FAQ</h2>
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
