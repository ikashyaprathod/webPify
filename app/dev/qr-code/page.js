import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import QrCodeGenerator from "@/components/QrCodeGenerator";

export const metadata = {
  title: "QR Code Generator Free Online — webpifyy",
  description: "Create QR codes for any URL, text, or data. Download as PNG or SVG instantly. Free, browser-based, no sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/qr-code" },
  openGraph: {
    title: "QR Code Generator Free Online — webpifyy",
    description: "Create QR codes for any URL, text, or data. Download as PNG or SVG. Free, instant, no sign-up.",
    url: "https://webpifyy.vercel.app/dev/qr-code",
  },
  twitter: { card: "summary_large_image", title: "QR Code Generator Free Online — webpifyy", description: "Create QR codes for any URL or text. Download PNG or SVG instantly." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"QR Code Generator"}]})
  },
};

const faqs = [
  { q: "What is a QR code?", a: "A QR (Quick Response) code is a 2D barcode that can store text, URLs, contact information, and more. Smartphones can scan QR codes instantly using their cameras." },
  { q: "Can I generate a QR code for any URL?", a: "Yes. Simply paste any URL into the input field and the QR code will update live. You can also encode plain text, phone numbers, emails, or any string of characters." },
  { q: "What is the difference between PNG and SVG QR codes?", a: "PNG is a raster image ideal for printing at a fixed size. SVG is a vector format that scales to any size without losing quality, making it perfect for logos, signage, or responsive designs." },
  { q: "Are the QR codes generated privately?", a: "Yes. All QR codes are generated entirely in your browser using JavaScript. No data is ever sent to a server, so your URLs and text stay completely private." },
];

export default function QrCodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "QR Code Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/qr-code#software",
        name: "QR Code Generator",
        url: "https://webpifyy.vercel.app/dev/qr-code",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "QR Code Generator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">QR CODE</span>
          <h1 className="toolpg-title">QR Code <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Create QR codes for any URL, text, or data. Download as PNG or SVG. Free, instant, no sign-up.</p>
        </div>

        <QrCodeGenerator />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
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
