import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JsonFormatter from "@/components/JsonFormatter";

export const metadata = {
  title: "JSON Formatter & Validator Online Free — webpifyy",
  description: "Format, validate, and minify JSON data instantly. Beautify JSON with proper indentation, detect syntax errors with line numbers. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/json-formatter" },
  openGraph: {
    title: "JSON Formatter & Validator Online Free — webpifyy",
    description: "Format, validate, and minify JSON data. Instantly beautify JSON with proper indentation and error detection.",
    url: "https://webpifyy.vercel.app/dev/json-formatter",
  },
  twitter: { card: "summary_large_image", title: "JSON Formatter & Validator Online Free", description: "Beautify, validate, and minify JSON instantly. Free online tool." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"JSON Formatter"}]})
  },
};

const faqs = [
  { q: "What is JSON formatting?", a: "JSON formatting (beautifying) adds proper indentation and line breaks to compact JSON, making it human-readable. It is the same valid JSON data, just structured for easier inspection and debugging." },
  { q: "What is the difference between Beautify and Minify?", a: "Beautify adds whitespace and indentation for readability. Minify removes all unnecessary whitespace and produces the smallest valid JSON string, ideal for network transmission or storage." },
  { q: "How does JSON validation work?", a: "The validator uses the built-in JSON.parse() function. If parsing succeeds the JSON is valid; if it throws an error, the tool reports the error message and the approximate line number of the syntax problem." },
  { q: "Does this tool handle large JSON files?", a: "Yes. Since processing happens in your browser, performance depends on your device memory. Files up to several megabytes are handled smoothly. No data is uploaded to any server." },
];

export default function JsonFormatterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "JSON Formatter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/json-formatter#software",
        name: "JSON Formatter",
        url: "https://webpifyy.vercel.app/dev/json-formatter",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "JSON Formatter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JSON</span>
          <h1 className="toolpg-title">JSON <span className="toolpg-title-accent">Formatter</span></h1>
          <p className="toolpg-subtitle">Format, validate, and minify JSON data. Instantly beautify JSON with proper indentation and error detection.</p>
        </div>

        <JsonFormatter />

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
