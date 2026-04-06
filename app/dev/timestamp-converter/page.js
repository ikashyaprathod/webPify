import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TimestampConverter from "@/components/TimestampConverter";

export const metadata = {
  title: "Unix Timestamp Converter Online Free",
  description: "Convert Unix timestamps to human-readable dates and vice versa. Supports UTC, ISO 8601, and local formats. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/timestamp-converter" },
  openGraph: { title: "Unix Timestamp Converter Online Free | webpifyy", description: "Convert Unix timestamps to human-readable dates and vice versa. Supports UTC, ISO 8601, and local formats. Free, browser-based.", url: "https://webpifyy.vercel.app/dev/timestamp-converter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Unix Timestamp Converter Online Free | webpifyy", description: "Convert Unix timestamps to human-readable dates and vice versa. Supports UTC, ISO 8601, and local formats. Free, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is a Unix timestamp?", a: "A Unix timestamp (also called epoch time or POSIX time) is the number of seconds that have elapsed since 00:00:00 UTC on January 1, 1970, not counting leap seconds. It is a widely used standard for representing a point in time as a single integer, independent of time zones." },
  { q: "What is the difference between seconds and milliseconds timestamps?", a: "Unix timestamps are traditionally expressed in seconds. JavaScript's Date.now() and many web APIs return milliseconds (multiply seconds by 1000). To convert a millisecond timestamp to seconds, divide by 1000. This tool auto-detects whether the input is in seconds (10 digits) or milliseconds (13 digits)." },
  { q: "How do time zones affect Unix timestamps?", a: "Unix timestamps are always UTC-based and time-zone agnostic — a given timestamp represents the same instant everywhere on Earth. When displaying a timestamp as a human-readable date, the result depends on your local time zone offset. This tool shows both UTC and your browser's local time so you can compare both representations." },
  { q: "What is ISO 8601 format?", a: "ISO 8601 is an international standard for date and time representations, for example '2024-06-15T10:30:00Z'. The trailing 'Z' denotes UTC. This format is unambiguous, sortable as a string, and used by most modern APIs, databases, and programming languages. The tool converts Unix timestamps to and from ISO 8601 strings." },
];

export default function TimestampConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Timestamp Converter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/timestamp-converter#software",
        name: "Timestamp Converter",
        url: "https://webpifyy.vercel.app/dev/timestamp-converter",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Timestamp Converter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">Timestamp <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert Unix timestamps to human-readable dates instantly. Supports UTC, ISO 8601, local, and relative formats.</p>
        </div>

        <TimestampConverter />

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
