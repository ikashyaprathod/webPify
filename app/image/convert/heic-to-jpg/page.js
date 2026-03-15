import PageShell from "@/components/PageShell";
import HEICConverter from "@/components/HEICConverter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "HEIC to JPG Converter – Free Online, No Upload",
  description: "Convert iPhone HEIC photos to JPG instantly in your browser. No uploads, no signup, batch supported. Free forever.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/heic-to-jpg" },
  openGraph: {
    title: "HEIC to JPG Converter – Free Online",
    description: "Convert iPhone HEIC photos to JPG instantly. Browser-based, zero uploads.",
    url: "https://webpifyy.vercel.app/image/convert/heic-to-jpg",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/image/convert"},{"@type":"ListItem","position":4,"name":"HEIC to JPG"}]})
  },
};

const faqs = [
  { q: "What is a HEIC file?", a: "HEIC (High Efficiency Image Container) is Apple's default photo format used on iPhone and iPad. It uses HEVC compression for excellent quality at half the file size of JPEG. However, it's not universally supported on Windows or older apps." },
  { q: "Why convert HEIC to JPG?", a: "JPG is universally compatible with all platforms, apps, and websites. Converting HEIC to JPG ensures your photos can be opened, shared, and uploaded anywhere without compatibility issues." },
  { q: "Does converting HEIC to JPG lose quality?", a: "Some quality may be lost since JPG is lossy. However, at 85+ quality settings the difference is imperceptible. The output is always a high-quality JPG suitable for sharing and printing." },
  { q: "Is my HEIC file uploaded to a server?", a: "No. All conversion happens entirely in your browser. Your photos never leave your device — we use JavaScript-based HEIC decoding for 100% private, offline-capable conversion." },
  { q: "Can I convert multiple HEIC files at once?", a: "Yes. You can drop multiple HEIC files and convert them all at once. Each file is converted and downloaded individually." },
];

export default function HEICToJPGPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "HEIC to JPG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/heic-to-jpg#software",
        name: "HEIC to JPG Converter",
        url: "https://webpifyy.vercel.app/image/convert/heic-to-jpg",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Convert iPhone HEIC photos to JPG instantly in your browser. No uploads, batch supported.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Convert", href: "/image/convert" }, { label: "HEIC to JPG" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">HEIC</span>
          <h1 className="toolpg-title">HEIC to JPG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert your iPhone &amp; iPad HEIC photos to universal JPG format instantly. All processing happens in your browser — your files never leave your device.</p>
        </div>

        <HEICConverter />

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
              <div className="tpg-ti tpg-ti-p">📱</div>
              <h5 className="tpg-ttl">iPhone Optimized</h5>
              <p className="tpg-tds">Native HEIC decoding for iPhone, iPad, and Mac photos.</p>
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
