import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";

export const metadata = {
  title: "Convert Images to AVIF Online Free",
  description: "Convert PNG, JPEG, and WebP images to AVIF format online for free. AVIF offers the smallest file sizes of any modern image format. No sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/to-avif" },
  keywords: ["convert to avif", "image to avif", "jpeg to avif", "png to avif converter", "avif converter online"],
  openGraph: {
    title: "Convert Images to AVIF Online Free",
    description: "Convert images to AVIF format. Smallest modern image format. No sign-up.",
    url: "https://webpifyy.vercel.app/image/convert/to-avif",
  },
  twitter: { card: "summary_large_image", title: "Convert Images to AVIF Online Free", description: "Convert to AVIF. No sign-up, instant." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/image/convert"},{"@type":"ListItem","position":4,"name":"to AVIF"}]})
  },
};

const faqs = [
  { q: "What is AVIF and why should I use it?", a: "AVIF is a next-generation image format based on the AV1 codec. It achieves 50% smaller files than JPEG at the same visual quality, and outperforms WebP for most images." },
  { q: "Which browsers support AVIF?", a: "AVIF is supported in Chrome 85+, Firefox 93+, Edge 121+, and Safari 16.4+. For older browsers, consider serving WebP as a fallback." },
  { q: "How does conversion quality compare to WebP?", a: "AVIF typically achieves 20–30% better compression than WebP at the same visual quality, making it the most efficient format for web images." },
  { q: "What files can I convert to AVIF?", a: "PNG, JPEG, and WebP files can all be converted to AVIF. HEIC conversion requires additional browser support." },
];

export default function ToAvifPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "to AVIF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/to-avif#software",
        name: "Image to AVIF Converter",
        url: "https://webpifyy.vercel.app/image/convert/to-avif",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert images to AVIF format online. Smallest modern image format.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Convert",href:"/image/convert"},{label:"to AVIF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AVIF</span>
          <h1 className="toolpg-title">Convert to AVIF <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Convert PNG, JPEG, and WebP images to AVIF. The smallest file sizes of any modern image format — up to 50% smaller than JPEG.</p>
        </div>

        <ImageConverter outputFormat="image/avif" outputFormatName="AVIF" />

        
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
