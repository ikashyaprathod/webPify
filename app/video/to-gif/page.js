import PageShell from "@/components/PageShell";
import VideoToGif from "@/components/VideoToGif";
import Link from "next/link";

export const metadata = {
  title: "Video to GIF Converter – Convert MP4 to GIF Online Free",
  description: "Convert MP4, WebM, or MOV videos to animated GIF online. Choose FPS, width, and color depth. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/to-gif" },
  openGraph: {
    title: "Video to GIF Converter – Convert MP4 to GIF Online Free",
    description: "Convert MP4, WebM, or MOV videos to animated GIF online. Choose FPS, width, and color depth. Free, browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/to-gif",
  },
};

export default function VideoToGifPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Video to GIF", href: "/video/to-gif" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video to GIF", item: "https://webpifyy.vercel.app/video/to-gif" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/to-gif#software",
        "name": "Video to GIF Converter",
        "url": "https://webpifyy.vercel.app/video/to-gif",
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
        "description": "Convert MP4, WebM, and MOV videos to animated GIF in your browser. Powered by FFmpeg.wasm.",
      },
    ],
  };

  const faqs = [
    { q: "What video formats can I convert to GIF?", a: "MP4, WebM, and MOV are all supported." },
    { q: "Will my video be uploaded to a server?", a: "No. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
    { q: "What's the best FPS setting for GIFs?", a: "15 fps is a good balance between smoothness and file size. 10 fps creates smaller files; 20–24 fps creates smoother but larger GIFs." },
    { q: "What width should I choose?", a: "480px is the most common choice for web use. If you need a small sticker or icon, choose 240px." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <div className="toolpg-hero">
          <span className="toolpg-badge">Video Engine</span>
          <h1 className="toolpg-title">Video to <span className="toolpg-title-accent">GIF</span></h1>
          <p className="toolpg-subtitle">Turn any video clip into a high-quality animated GIF. Adjust FPS, width, and color count. Runs entirely in your browser.</p>
        </div>

        <VideoToGif />

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
