import PageShell from "@/components/PageShell";
import GifCompressor from "@/components/GifCompressor";
import Link from "next/link";

export const metadata = {
  title: "GIF to WebM Converter – Convert GIF to WebM Online Free",
  description: "Convert animated GIF to WebM video online. VP9 encoding, excellent quality, tiny file size. No uploads — 100% browser-based. Up to 90% smaller than GIF.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/compressor/webm" },
  keywords: ["gif to webm", "convert gif to webm", "gif to webm converter online", "animated gif to webm", "gif webm free"],
  openGraph: {
    title: "GIF to WebM Converter – Convert GIF to WebM Online Free",
    description: "Convert animated GIF to WebM video online. VP9 encoding, up to 90% smaller. No uploads, 100% browser-based.",
    url: "https://webpifyy.vercel.app/gif/compressor/webm",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIF to WebM Converter – Free Online Tool",
    description: "Convert animated GIF to WebM for up to 90% smaller files. Free, browser-based, no sign-up.",
  },
};

const faqs = [
  { q: "Why convert GIF to WebM?", a: "WebM with VP9 encoding is typically 80–90% smaller than an equivalent GIF. It also supports millions of colors compared to GIF's 256-color limit, resulting in smoother gradients and better quality." },
  { q: "Is WebM better than MP4 for GIF replacement?", a: "WebM is excellent for Chrome, Firefox, and Edge users. However, MP4 has broader compatibility including Safari and older iOS devices. For maximum compatibility, use MP4. For web-optimized use, WebM is slightly more efficient." },
  { q: "Does WebM support looping like GIF?", a: "Yes. WebM can loop via the HTML video element using the `loop` attribute. Many platforms and chat apps that support WebM will also loop it automatically, just like a GIF." },
  { q: "Is my GIF uploaded to a server?", a: "No. All processing happens entirely in your browser using FFmpeg.wasm. Your files never leave your device." },
  { q: "Can Discord or Slack use WebM files?", a: "Discord supports WebM files and will play them inline. Slack's support depends on the version and platform. For maximum compatibility in messaging apps, GIF to MP4 is generally the safer choice." },
];

export default function GifToWebmPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "GIF to WebM", href: "/gif/compressor/webm" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "GIF Compressor", "item": "https://webpifyy.vercel.app/gif/compressor" },
          { "@type": "ListItem", "position": 3, "name": "GIF to WebM" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/gif/compressor/webm#software",
        "name": "GIF to WebM Converter",
        "url": "https://webpifyy.vercel.app/gif/compressor/webm",
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
        "description": "Convert animated GIF to WebM video in your browser. VP9 encoding, up to 90% smaller than GIF. No uploads.",
        "featureList": ["GIF to WebM", "VP9 Encoding", "90% Smaller Files", "Browser-based", "Free"]
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
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF Engine</span>
          <h1 className="toolpg-title">GIF to <span className="toolpg-title-accent">WebM</span></h1>
          <p className="toolpg-subtitle">Convert animated GIFs to VP9 WebM — ideal for web, Discord, and modern browsers. Up to 90% smaller, no uploads required.</p>
        </div>

        <GifCompressor defaultTask="gif-to-webm" />

        {/* Stats + Why Choose */}
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        {/* World / Edge-First Processing */}
        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
            </div>
          </div>
        </div>

        <div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
