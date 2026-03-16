import PageShell from "@/components/PageShell";
import ImageRotate from "@/components/ImageRotate";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Rotate & Flip Images Online Free",
  description: "Rotate images 90, 180 or 270 degrees and flip horizontally or vertically online free. Instant preview, no uploads, supports all formats.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/rotate" },
  openGraph: {
    title: "Rotate & Flip Images Online Free | webpifyy",
    description: "Rotate images 90, 180 or 270 degrees and flip horizontally or vertically online free. Instant preview, no uploads, supports all formats.",
    url: "https://webpifyy.vercel.app/image/edit/rotate",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotate & Flip Images Online Free | webpifyy",
    description: "Rotate images 90, 180 or 270 degrees and flip horizontally or vertically online free. Instant preview, no uploads, supports all formats.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Can I rotate an image by a custom angle?", a: "Yes. In addition to 90/180/270 degree presets, you can enter any custom rotation angle. Background fill color can be set for corners." },
  { q: "Does rotating an image reduce quality?", a: "90/180/270 degree rotations are lossless for PNG. For JPEG, lossless rotation is used when available. Custom angles require re-encoding with minimal loss." },
  { q: "Can I flip an image horizontally and vertically?", a: "Yes. Horizontal flip creates a mirror image. Vertical flip turns it upside down. Both can be combined with rotation in one operation." },
  { q: "What image formats support rotation?", a: "All common formats are supported: PNG, JPEG, WebP, AVIF, BMP and TIFF. Output format matches input." },
];

export default function ImageRotatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Rotate" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/rotate#software",
        name: "Image Rotate & Flip Tool",
        url: "https://webpifyy.vercel.app/image/edit/rotate",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Rotate and flip images online. 90°, 180°, 270° rotation. Horizontal and vertical flip. Browser-based.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Rotate & Flip" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">ROTATE</span>
          <h1 className="toolpg-title">Rotate &amp; Flip <span className="toolpg-title-accent">Image</span></h1>
          <p className="toolpg-subtitle">Rotate images 90°, 180°, or 270°. Flip horizontally or vertically. Instant preview. Download as PNG. Zero server uploads.</p>
        </div>

        <ImageRotate />

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
              <div className="tpg-ti tpg-ti-p">🔃</div>
              <h5 className="tpg-ttl">Lossless Rotation</h5>
              <p className="tpg-tds">Canvas-based rotation with zero quality loss on output.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

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
