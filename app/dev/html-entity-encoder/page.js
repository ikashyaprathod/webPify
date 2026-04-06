import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import HtmlEntityEncoder from "@/components/HtmlEntityEncoder";

export const metadata = {
  title: "HTML Entity Encoder Decoder Online Free",
  description: "Encode and decode HTML entities online free. Convert special characters like <, >, &, quotes to HTML entities and back. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/html-entity-encoder" },
  openGraph: { title: "HTML Entity Encoder Decoder Online Free | webpifyy", description: "Encode and decode HTML entities online free. Convert special characters like <, >, &, quotes to HTML entities and back. Browser-based.", url: "https://webpifyy.vercel.app/dev/html-entity-encoder", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "HTML Entity Encoder Decoder Online Free | webpifyy", description: "Encode and decode HTML entities online free. Convert special characters like <, >, &, quotes to HTML entities and back. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What are HTML entities?", a: "HTML entities are text sequences used to represent characters that have special meaning in HTML or that cannot be typed directly. They start with an ampersand and end with a semicolon. For example, &lt; represents a less-than sign (<), &amp; represents an ampersand (&), and &copy; represents the copyright symbol. Named entities, decimal references (&#60;), and hexadecimal references (&#x3C;) are all valid forms." },
  { q: "Why do you need to encode HTML entities?", a: "When inserting user-provided text into an HTML document, characters like <, >, and & must be encoded as entities. Without encoding, a browser may interpret the text as HTML tags, which can break your page layout or — more seriously — allow an attacker to inject malicious script tags, a vulnerability known as Cross-Site Scripting (XSS). Always encode untrusted text before inserting it into HTML." },
  { q: "How do HTML entities help prevent XSS attacks?", a: "XSS occurs when an attacker injects a script tag or event handler into a page through user input. By converting < to &lt; and > to &gt;, the browser renders the angle brackets as visible text rather than parsing them as HTML markup. This neutralizes any injected tags or scripts, protecting users from executing malicious code." },
  { q: "What are the most common HTML entities to know?", a: "The essential entities are: &lt; for <, &gt; for >, &amp; for &, &quot; for a double quote (\"), and &apos; for a single quote ('). Other frequently used entities include &nbsp; for a non-breaking space, &copy; for ©, &reg; for ®, &trade; for ™, and &mdash; for an em dash (—)." },
];

export default function HtmlEntityEncoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "HTML Entity Encoder" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/html-entity-encoder#software",
        name: "HTML Entity Encoder",
        url: "https://webpifyy.vercel.app/dev/html-entity-encoder",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "HTML Entity Encoder" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">HTML</span>
          <h1 className="toolpg-title">HTML Entity <span className="toolpg-title-accent">Encoder</span></h1>
          <p className="toolpg-subtitle">Encode and decode HTML entities instantly. Convert &lt;, &gt;, &amp;, quotes and Unicode characters to safe HTML.</p>
        </div>

        <HtmlEntityEncoder />

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
