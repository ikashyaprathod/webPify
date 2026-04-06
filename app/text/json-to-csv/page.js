import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JsonToCsv from "@/components/JsonToCsv";

export const metadata = {
  title: "JSON to CSV Converter Online Free — CSV to JSON Too",
  description: "Convert JSON to CSV and CSV to JSON online free. Handles arrays of objects. Download converted file directly. Browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/json-to-csv" },
  openGraph: { title: "JSON to CSV Converter Online Free — CSV to JSON Too | webpifyy", description: "Convert JSON to CSV and CSV to JSON online free. Handles arrays of objects. Download converted file directly. Browser-based, no uploads.", url: "https://webpifyy.vercel.app/text/json-to-csv", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "JSON to CSV Converter Online Free — CSV to JSON Too | webpifyy", description: "Convert JSON to CSV and CSV to JSON online free. Handles arrays of objects. Download converted file directly. Browser-based, no uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the difference between JSON and CSV?", a: "JSON (JavaScript Object Notation) is a hierarchical, schema-flexible format that supports nested objects and arrays. CSV (Comma-Separated Values) is a flat, tabular format supported by spreadsheets and databases. JSON is better for APIs; CSV is better for bulk data exports and Excel." },
  { q: "How does this tool handle nested JSON objects?", a: "Nested objects are flattened using dot notation (e.g., address.city becomes a column header). Nested arrays are serialized as JSON strings within the CSV cell, since CSV cannot natively represent multi-level nesting." },
  { q: "Can I download the converted file?", a: "Yes. After conversion, a Download button lets you save the output as a .csv or .json file directly. The file is generated in your browser using a Blob URL — no server is involved." },
  { q: "What data types are supported?", a: "JSON strings, numbers, booleans, and null values are all supported. Numbers and booleans are preserved as-is in CSV output. When converting CSV back to JSON, all values are initially strings unless you enable type inference, which parses numbers and booleans automatically." },
];

export default function JsonToCsvPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Text Tools", item: "https://webpifyy.vercel.app/text" },
          { "@type": "ListItem", position: 3, name: "JSON to CSV Converter", item: "https://webpifyy.vercel.app/text/json-to-csv" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/text/json-to-csv#software", name: "JSON to CSV Converter", url: "https://webpifyy.vercel.app/text/json-to-csv", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }, { label: "JSON to CSV Converter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TEXT</span>
          <h1 className="toolpg-title">JSON to CSV <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert JSON arrays to CSV and CSV back to JSON. Download the converted file instantly.</p>
        </div>
        <JsonToCsv />
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
