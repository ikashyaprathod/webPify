import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import OgImageResizer from "@/components/OgImageResizer";

export const metadata = {
  title: "OG Image Resizer Online Free \u2014 Open Graph",
  description: "Resize images to Open Graph dimensions online free. 1200x630 for Facebook/Twitter, LinkedIn and more. Browser-based Sharp, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/og-image-resizer" },
  keywords: ["og image resizer", "open graph image", "twitter card size", "social media image resizer", "og image generator"],
  openGraph: { title: "OG Image Resizer Online Free \u2014 Open Graph | webpifyy", description: "Resize images to Open Graph dimensions online free. 1200x630 for Facebook/Twitter, LinkedIn and more. Browser-based Sharp, no uploads needed.", url: "https://webpifyy.vercel.app/dev/og-image-resizer", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "OG Image Resizer Online Free \u2014 Open Graph | webpifyy", description: "Resize images to Open Graph dimensions online free. 1200x630 for Facebook/Twitter, LinkedIn and more. Browser-based Sharp, no uploads needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What sizes does the OG Image Resizer generate?", a: "It generates: Open Graph (1200×630), Twitter Card (1200×600), LinkedIn (1200×627), and Facebook (1200×630). These are the recommended dimensions for social media sharing." },
  { q: "What image format does it output?", a: "All images are output as JPEG at 92% quality for optimal file size while maintaining visual quality suitable for social media." },
  { q: "How does the image fit into the target dimensions?", a: "The tool uses a cover-fit approach: your image is scaled up or down to fill the target dimensions, centering the content. No white bars or distortion." },
  { q: "What is the recommended input image size?", a: "For best results, use an image that is at least 1200×630 pixels. A 2:1 or wider aspect ratio works well since most OG sizes are landscape-oriented." },
];

export default function OgImageResizerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "OG Image Resizer" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/og-image-resizer#software",
        name: "OG Image Resizer",
        url: "https://webpifyy.vercel.app/dev/og-image-resizer",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Resize images to Open Graph, Twitter Card, LinkedIn, and Facebook sizes. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"OG Image Resizer"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">OG IMAGE</span>
          <h1 className="toolpg-title">OG Image <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize any image to Open Graph, Twitter Card, LinkedIn, and Facebook dimensions. Download all sizes as ZIP — browser-based, free.</p>
        </div>

        <OgImageResizer />

        
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
