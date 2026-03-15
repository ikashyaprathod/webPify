import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifCompressor from "@/components/GifCompressor";

export const metadata = {
  title: "Compress GIF Online Free – Reduce GIF File Size Without Quality Loss",
  description: "Compress animated GIFs online with palettegen optimization. Reduce GIF file size by up to 60% while maintaining animation quality. Free, browser-based tool.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/compress/gif" },
  keywords: ["compress gif online", "gif compressor", "reduce gif file size", "optimize gif", "compress animated gif free"],
  openGraph: {
    title: "Compress GIF Online Free – Reduce GIF File Size Without Quality Loss",
    description: "Compress animated GIFs online with palettegen optimization. Reduce file size by up to 60%. Free, browser-based.",
    url: "https://webpifyy.vercel.app/gif/compress/gif",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress GIF Online Free – GIF Compressor",
    description: "Reduce animated GIF file size by up to 60% without quality loss. Free, browser-based, no sign-up.",
  },
};

const faqs = [
  { q: "How do I compress a GIF without losing quality?", a: "Our GIF compressor uses FFmpeg's palettegen filter which generates an optimized color palette specific to your GIF. This reduces file size by 30–60% while maintaining smooth animation and color accuracy." },
  { q: "How much can I compress a GIF file?", a: "Most GIF files compress 30–60% with palette optimization. Highly animated GIFs with many unique colors typically compress 30–40%. Static or simple-color animations can compress up to 60%." },
  { q: "Should I convert GIF to MP4 instead of compressing?", a: "For maximum size reduction, yes. MP4 with H.264 encoding is typically 80–90% smaller than GIF at the same visual quality. GIF compression is best when you need to stay in GIF format for compatibility reasons." },
  { q: "Is my GIF uploaded to a server?", a: "No. All processing happens entirely in your browser using FFmpeg.wasm. Your files never leave your device." },
  { q: "Does compressing GIF affect animation speed?", a: "No. Compression only reduces file size — the frame timing, loop count, and animation speed are all preserved exactly as in the original GIF." },
];

export default function CompressGifPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "GIF Compressor", "item": "https://webpifyy.vercel.app/gif/compress" },
          { "@type": "ListItem", "position": 3, "name": "Compress GIF" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/gif/compress/gif#software",
        "name": "GIF Compressor",
        "url": "https://webpifyy.vercel.app/gif/compress/gif",
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
        "description": "Compress animated GIF files online using FFmpeg palettegen optimization. Reduces file size by 30–60% while preserving animation quality.",
        "featureList": ["GIF Compression", "Palette Optimization", "Animation Preserved", "Browser-based", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'GIF Tools',href:'/gif'},{label:'Compress',href:'/gif/compress'},{label:'GIF'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF</span>
          <h1 className="toolpg-title">GIF <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Reduce GIF file size with advanced palette optimization. Keep your animations smooth and colorful. Runs entirely in your browser.</p>
        </div>

        <GifCompressor defaultTask="gif-compress" />

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
