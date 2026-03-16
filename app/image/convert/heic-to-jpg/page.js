import PageShell from "@/components/PageShell";
import HEICConverter from "@/components/HEICConverter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "HEIC to JPG Converter Online Free — iPhone Photos",
  description: "Convert iPhone HEIC photos to JPG online free. Batch conversion supported. No uploads, converts instantly in your browser. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/heic-to-jpg" },
  openGraph: {
    title: "HEIC to JPG Converter Online Free — iPhone Photos | webpifyy",
    description: "Convert iPhone HEIC photos to JPG online free. Batch conversion supported. No uploads, converts instantly in your browser. No signup.",
    url: "https://webpifyy.vercel.app/image/convert/heic-to-jpg",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEIC to JPG Converter Online Free — iPhone Photos | webpifyy",
    description: "Convert iPhone HEIC photos to JPG online free. Batch conversion supported. No uploads, converts instantly in your browser. No signup.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "What is HEIC format and why do iPhones use it?", a: "HEIC (High Efficiency Image Container) is Apple's format that stores photos at roughly half the size of JPEG while maintaining the same quality. iPhones use it to save storage space." },
  { q: "Why do I need to convert HEIC to JPG?", a: "HEIC is not supported on Windows by default or on many websites and apps. Converting to JPG ensures your iPhone photos can be opened and shared anywhere." },
  { q: "Is HEIC to JPG conversion free?", a: "Yes, completely free with no file size limits or signup required. Batch convert multiple HEIC files and download as individual JPGs or a ZIP." },
  { q: "Does converting HEIC to JPG reduce quality?", a: "Minor quality loss may occur as HEIC supports higher bit depth than standard JPG. However the difference is virtually invisible in normal viewing conditions." },
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
        description: "Convert iPhone HEIC photos to JPG online free. Batch conversion supported. No uploads, converts instantly in your browser.",
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
