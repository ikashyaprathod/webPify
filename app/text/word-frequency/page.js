import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WordFrequency from "@/components/WordFrequency";

export const metadata = {
  title: "Word Frequency Counter Online Free — Text Analysis",
  description: "Count word frequency in any text online free. Sort by count or alphabetically, filter by minimum length, export as CSV. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/word-frequency" },
  openGraph: { title: "Word Frequency Counter Online Free — Text Analysis | webpifyy", description: "Count word frequency in any text online free. Sort by count or alphabetically, filter by minimum length, export as CSV. Browser-based.", url: "https://webpifyy.vercel.app/text/word-frequency", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Word Frequency Counter Online Free — Text Analysis | webpifyy", description: "Count word frequency in any text online free. Sort by count or alphabetically, filter by minimum length, export as CSV. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How is word frequency counted?", a: "The tool splits text on whitespace and punctuation boundaries, lowercases all tokens, and counts how many times each unique word appears. Contractions are kept intact (e.g., don't counts as one word). The result is a sortable table showing each word and its count." },
  { q: "Does this tool filter stopwords?", a: "The tool includes an optional stopword filter that removes common English words like 'the', 'is', 'and', and 'of' that carry little meaning. You can toggle stopword filtering on or off depending on whether you want a full frequency count or a meaningful-words-only view." },
  { q: "Can I export the word frequency results as CSV?", a: "Yes. Click the Export CSV button to download a comma-separated file with two columns: word and count. This file opens in Excel, Google Sheets, or any data tool, making it easy to do further analysis or create charts." },
  { q: "What are typical use cases for word frequency analysis?", a: "Writers use it to spot overused words and improve prose variety. SEO professionals analyze keyword density in content drafts. Academics study corpus linguistics patterns. Developers use frequency counts to build custom stopword lists or train lightweight text classifiers." },
];

export default function WordFrequencyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Text Tools", item: "https://webpifyy.vercel.app/text" },
          { "@type": "ListItem", position: 3, name: "Word Frequency Counter", item: "https://webpifyy.vercel.app/text/word-frequency" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/text/word-frequency#software", name: "Word Frequency Counter", url: "https://webpifyy.vercel.app/text/word-frequency", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }, { label: "Word Frequency Counter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TEXT</span>
          <h1 className="toolpg-title">Word Frequency <span className="toolpg-title-accent">Counter</span></h1>
          <p className="toolpg-subtitle">Analyze word frequency in any text. Sortable table, CSV export, minimum length filter.</p>
        </div>
        <WordFrequency />
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
