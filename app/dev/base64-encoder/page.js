import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Base64Encoder from "@/components/Base64Encoder";

export const metadata = {
  title: "Base64 Image Encoder Online Free",
  description: "Encode images to Base64 data URL online free. Get data:image/png;base64 string. Copy or download. Decode Base64 back to image. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/base64-encoder" },
  keywords: ["image to base64", "base64 encoder", "base64 decoder", "image base64 online", "data url generator"],
  openGraph: { title: "Base64 Image Encoder Online Free | webpifyy", description: "Encode images to Base64 data URL online free. Get data:image/png;base64 string. Copy or download. Decode Base64 back to image. No uploads.", url: "https://webpifyy.vercel.app/dev/base64-encoder", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Base64 Image Encoder Online Free | webpifyy", description: "Encode images to Base64 data URL online free. Get data:image/png;base64 string. Copy or download. Decode Base64 back to image. No uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is base64 encoding for images?", a: "Base64 encoding converts binary image data into a text string that can be embedded directly in HTML, CSS, or JavaScript as a data URL (data:image/png;base64,...). This eliminates an HTTP request for the image." },
  { q: "When should I use base64 images?", a: "Use base64 for small icons, inline SVGs, or email templates where you cannot link to external files. For larger images, use standard URLs as base64 increases file size by ~33%." },
  { q: "What is the format of a base64 data URL?", a: "A data URL follows the format: data:[mime-type];base64,[base64-string]. For example: data:image/png;base64,iVBORw0KGgo..." },
  { q: "Can I decode any base64 string?", a: "You can decode a base64 string with or without the data: prefix. If you paste just the raw base64 characters, the tool will automatically prepend data:image/png;base64, to preview it." },
];

export default function Base64EncoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Base64 Encoder" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/base64-encoder#software",
        name: "Base64 Image Encoder",
        url: "https://webpifyy.vercel.app/dev/base64-encoder",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Encode images to base64 strings or decode base64 back to images. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"Base64 Encoder"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">BASE64</span>
          <h1 className="toolpg-title">Base64 Image <span className="toolpg-title-accent">Encoder</span></h1>
          <p className="toolpg-subtitle">Encode any image to a base64 data URL string, or decode base64 back to a viewable image. Copy, preview, and download — all in your browser.</p>
        </div>

        <Base64Encoder />

        
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
