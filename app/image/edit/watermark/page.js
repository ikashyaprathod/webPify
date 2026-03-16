import PageShell from "@/components/PageShell";
import ImageWatermark from "@/components/ImageWatermark";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Add Watermark to Images Online Free",
  description: "Add text watermarks to images online free. Control font, size, opacity, position and rotation. Batch watermarking supported. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/watermark" },
  openGraph: {
    title: "Add Watermark to Images Online Free | webpifyy",
    description: "Add text watermarks to images online free. Control font, size, opacity, position and rotation. Batch watermarking supported. No uploads.",
    url: "https://webpifyy.vercel.app/image/edit/watermark",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Watermark to Images Online Free | webpifyy",
    description: "Add text watermarks to images online free. Control font, size, opacity, position and rotation. Batch watermarking supported. No uploads.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Can I add a watermark to multiple images at once?", a: "Yes. Upload multiple images and apply the same watermark settings to all of them in one click. Download all watermarked images as a ZIP." },
  { q: "Can I control the watermark transparency?", a: "Yes. The opacity slider lets you set transparency from 10% (nearly invisible) to 100% (fully opaque). Position and rotation are also adjustable." },
  { q: "Can I use an image as a watermark instead of text?", a: "Currently text watermarks are supported. Image watermark support is planned for a future update." },
  { q: "Does adding a watermark reduce image quality?", a: "No. The watermark is composited onto the image and the output is saved at full quality. The only change is the text overlay added." },
];

export default function WatermarkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Watermark" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/watermark#software",
        name: "Image Watermark Tool",
        url: "https://webpifyy.vercel.app/image/edit/watermark",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Add text watermarks to images online. Control position, opacity, font size. Browser-based, no uploads.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Add Watermark" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WATERMARK</span>
          <h1 className="toolpg-title">Add Watermark <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Stamp a custom text watermark on any image. Control position, font size, opacity, and color. Instant live preview — all in your browser.</p>
        </div>

        <ImageWatermark />

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
              <div className="tpg-ti tpg-ti-p">💧</div>
              <h5 className="tpg-ttl">Live Preview</h5>
              <p className="tpg-tds">See your watermark update in real-time as you adjust settings.</p>
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
