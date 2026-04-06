import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UrlEncoder from "@/components/UrlEncoder";

export const metadata = {
  title: "URL Encoder Decoder Online Free",
  description: "Encode and decode URLs and URI components online free. Supports encodeURIComponent and encodeURI modes. Instant, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/url-encoder" },
  openGraph: { title: "URL Encoder Decoder Online Free | webpifyy", description: "Encode and decode URLs and URI components online free. Supports encodeURIComponent and encodeURI modes. Instant, browser-based.", url: "https://webpifyy.vercel.app/dev/url-encoder", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "URL Encoder Decoder Online Free | webpifyy", description: "Encode and decode URLs and URI components online free. Supports encodeURIComponent and encodeURI modes. Instant, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is URL encoding?", a: "URL encoding (percent encoding) converts characters that are not allowed or have special meaning in a URL into a safe representation. Each unsafe character is replaced by a percent sign followed by two hexadecimal digits representing its UTF-8 byte value — for example, a space becomes %20 and an ampersand becomes %26." },
  { q: "What is the difference between encodeURIComponent and encodeURI?", a: "encodeURI is designed to encode a complete URL and leaves structural characters like '/', '?', '#', '&', and '=' intact, because they are meaningful parts of URL syntax. encodeURIComponent is meant for encoding individual query parameter values or path segments and escapes those structural characters too. Use encodeURIComponent when encoding values that will be inserted into a URL." },
  { q: "Which characters are safe in a URL without encoding?", a: "Unreserved characters — letters (A–Z, a–z), digits (0–9), hyphen (-), underscore (_), period (.), and tilde (~) — are always safe and never need encoding. All other characters, including spaces, non-ASCII Unicode, and reserved characters used outside their intended structural role, must be percent-encoded." },
  { q: "Why does a plus sign (+) sometimes represent a space?", a: "In the older application/x-www-form-urlencoded encoding (used by HTML forms), a space is encoded as a plus sign (+) rather than %20. In standard percent encoding used in path segments and modern query strings, a space must be encoded as %20. This tool uses standard percent encoding (encodeURIComponent / encodeURI), so spaces become %20." },
];

export default function UrlEncoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "URL Encoder / Decoder" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/url-encoder#software",
        name: "URL Encoder / Decoder",
        url: "https://webpifyy.vercel.app/dev/url-encoder",
        applicationCategory: "DeveloperApplication",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "URL Encoder / Decoder" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">URL Encoder / <span className="toolpg-title-accent">Decoder</span></h1>
          <p className="toolpg-subtitle">Encode and decode URLs and URI components. Supports component and full URL encoding modes.</p>
        </div>

        <UrlEncoder />

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
