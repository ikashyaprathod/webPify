import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifCompressor from "@/components/GifCompressor";

export const metadata = {
  title: "Compress GIF Online Free — Smaller GIF Files",
  description: "Compress animated GIF files online free. Reduce GIF size while maintaining animation quality. Browser-based processing, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/compress/gif" },
  keywords: ["compress gif online", "gif compressor", "reduce gif file size", "optimize gif", "compress animated gif free"],
  openGraph: {
    title: "Compress GIF Online Free — Smaller GIF Files | webpifyy",
    description: "Compress animated GIF files online free. Reduce GIF size while maintaining animation quality. Browser-based processing, no uploads needed.",
    url: "https://webpifyy.vercel.app/gif/compress/gif",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress GIF Online Free — Smaller GIF Files | webpifyy",
    description: "Compress animated GIF files online free. Reduce GIF size while maintaining animation quality. Browser-based processing, no uploads needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How much can I compress a GIF file?", a: "GIF compression typically achieves 20-50% reduction while maintaining animation quality. For more aggressive compression, convert to MP4 which achieves 80-95% reduction." },
  { q: "Why is GIF format inefficient?", a: "GIF uses an outdated LZW compression algorithm and is limited to 256 colors. Modern formats like MP4 and WebM are 10-20x more efficient for animation." },
  { q: "Should I use GIF or MP4 for web animations?", a: "MP4 with autoplay and loop attributes is strongly preferred over GIF for web. MP4 files are 10-20x smaller, support more colors, and play more smoothly." },
  { q: "Can I reduce GIF file size without losing frames?", a: "Yes. Our compressor reduces frame colors and applies dithering to reduce file size while preserving all frames and animation timing." },
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
        "description": "Compress animated GIF files online free. Reduce GIF size while maintaining animation quality. Browser-based processing, no uploads needed.",
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
