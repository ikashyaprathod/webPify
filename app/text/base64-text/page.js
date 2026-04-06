import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Base64Text from "@/components/Base64Text";

export const metadata = {
  title: "Base64 Text Encoder Decoder Online Free",
  description: "Encode text to Base64 and decode Base64 back to text online free. Supports Unicode text. Instant, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/base64-text" },
  openGraph: { title: "Base64 Text Encoder Decoder Online Free | webpifyy", description: "Encode text to Base64 and decode Base64 back to text online free. Supports Unicode text. Instant, browser-based, no uploads.", url: "https://webpifyy.vercel.app/text/base64-text", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Base64 Text Encoder Decoder Online Free | webpifyy", description: "Encode text to Base64 and decode Base64 back to text online free. Supports Unicode text. Instant, browser-based, no uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is Base64 encoding?", a: "Base64 is a binary-to-text encoding scheme that represents binary data using 64 printable ASCII characters (A–Z, a–z, 0–9, +, /). It is commonly used to safely transmit binary data over text-based protocols like HTTP, email (MIME), and JSON." },
  { q: "What are common use cases for Base64?", a: "Base64 is used to embed images in HTML/CSS as data URIs, encode email attachments, store binary data in JSON APIs, pass credentials in HTTP Basic Auth headers, and encode tokens in JWTs. Any context where binary data must travel through a text channel benefits from Base64." },
  { q: "Is Base64 encoding the same as encryption?", a: "No. Base64 is an encoding scheme, not encryption. It does not protect your data — anyone can decode it instantly. Encryption uses a secret key to make data unreadable without that key. Base64 only ensures safe transmission through text-based channels." },
  { q: "Does this tool support Unicode and emoji?", a: "Yes. This tool is Unicode-safe. It uses TextEncoder/TextDecoder (UTF-8) before and after Base64 encoding, ensuring that accented characters, CJK characters, Arabic, and emoji all encode and decode correctly without data loss." },
];

export default function Base64TextPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Text Tools", item: "https://webpifyy.vercel.app/text" },
          { "@type": "ListItem", position: 3, name: "Base64 Text Encoder", item: "https://webpifyy.vercel.app/text/base64-text" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/text/base64-text#software", name: "Base64 Text Encoder Decoder", url: "https://webpifyy.vercel.app/text/base64-text", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }, { label: "Base64 Text Encoder" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TEXT</span>
          <h1 className="toolpg-title">Base64 Text Encoder / <span className="toolpg-title-accent">Decoder</span></h1>
          <p className="toolpg-subtitle">Encode any text to Base64 or decode Base64 back to plain text. Unicode-safe, instant, no data sent.</p>
        </div>
        <Base64Text />
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
