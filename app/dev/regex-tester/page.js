import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import RegexTester from "@/components/RegexTester";

export const metadata = {
  title: "Regex Tester Online Free \u2014 Test Regular Expressions",
  description: "Test and debug regular expressions online free. Live match highlighting, capture groups, match count. Common patterns library. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/regex-tester" },
  openGraph: { title: "Regex Tester Online Free \u2014 Test Regular Expressions | webpifyy", description: "Test and debug regular expressions online free. Live match highlighting, capture groups, match count. Common patterns library. Browser-based.", url: "https://webpifyy.vercel.app/dev/regex-tester", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Regex Tester Online Free \u2014 Test Regular Expressions | webpifyy", description: "Test and debug regular expressions online free. Live match highlighting, capture groups, match count. Common patterns library. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is a regular expression?", a: "A regular expression (regex) is a sequence of characters that defines a search pattern. They are used for string matching, validation, and text manipulation in virtually every programming language." },
  { q: "What do the regex flags do?", a: "The 'g' flag finds all matches (not just the first). 'i' makes matching case-insensitive. 'm' makes ^ and $ match line starts/ends. 's' (dotAll) makes the dot (.) also match newline characters." },
  { q: "What are capture groups?", a: "Capture groups are parts of a regex wrapped in parentheses, e.g. (\\d+). When a match is found, the text matched by each group is extracted separately, which is useful for parsing structured data." },
  { q: "Can I use this for email or URL validation?", a: "Yes. Use the Quick Patterns dropdown to load pre-built patterns for common formats like email addresses, URLs, phone numbers, dates, and IP addresses, then adjust them to your needs." },
];

export default function RegexTesterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Regex Tester" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/regex-tester#software",
        name: "Regex Tester",
        url: "https://webpifyy.vercel.app/dev/regex-tester",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Regex Tester" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">REGEX</span>
          <h1 className="toolpg-title">Regex <span className="toolpg-title-accent">Tester</span></h1>
          <p className="toolpg-subtitle">Test regular expressions against any text. See all matches, capture groups, and indexes live as you type.</p>
        </div>

        <RegexTester />

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
