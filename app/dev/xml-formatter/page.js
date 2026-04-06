import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import XmlFormatter from "@/components/XmlFormatter";

export const metadata = {
  title: "XML Formatter & Validator Online Free",
  description: "Format, beautify, minify and validate XML online free. Instant XML syntax validation with error messages. No uploads, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/xml-formatter" },
  openGraph: { title: "XML Formatter & Validator Online Free | webpifyy", description: "Format, beautify, minify and validate XML online free. Instant XML syntax validation with error messages. No uploads, browser-based.", url: "https://webpifyy.vercel.app/dev/xml-formatter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "XML Formatter & Validator Online Free | webpifyy", description: "Format, beautify, minify and validate XML online free. Instant XML syntax validation with error messages. No uploads, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is XML formatting?", a: "XML formatting (beautifying) adds consistent indentation and line breaks to a flat or poorly indented XML document, making its nested structure easy to read and navigate. The output is semantically identical to the input — only whitespace between tags changes." },
  { q: "How does XML validation work in the browser?", a: "This tool uses the browser's built-in DOMParser to parse the XML. If the XML is well-formed, parsing succeeds. If there is a syntax error — such as an unclosed tag, mismatched element names, or invalid characters — DOMParser returns a parsererror document instead, and the tool reports the error message and location." },
  { q: "What is the difference between beautify and minify for XML?", a: "Beautify expands XML by adding indentation and newlines, making it human-readable. Minify strips all non-essential whitespace — spaces between tags, indentation, and blank lines — to produce the most compact representation for transmission or storage. Both operations preserve all XML data and attributes." },
  { q: "What is well-formed XML?", a: "Well-formed XML follows the core XML syntax rules: every element must have a closing tag, attribute values must be quoted, tags must be properly nested, there must be exactly one root element, and special characters like <, >, and & inside text must be represented as entities. A well-formed document can be parsed by any standard XML parser." },
];

export default function XmlFormatterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "XML Formatter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/xml-formatter#software",
        name: "XML Formatter",
        url: "https://webpifyy.vercel.app/dev/xml-formatter",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "XML Formatter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">XML</span>
          <h1 className="toolpg-title">XML <span className="toolpg-title-accent">Formatter</span></h1>
          <p className="toolpg-subtitle">Beautify, minify, and validate XML instantly. Syntax error detection with line-level feedback.</p>
        </div>

        <XmlFormatter />

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
