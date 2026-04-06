import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SlugGenerator from "@/components/SlugGenerator";

export const metadata = {
  title: "URL Slug Generator Online Free — Text to Slug",
  description: "Convert any text to a URL-friendly slug online free. Handles special characters, accents, and spaces. Hyphen or underscore separator. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/slug-generator" },
  openGraph: { title: "URL Slug Generator Online Free — Text to Slug | webpifyy", description: "Convert any text to a URL-friendly slug online free. Handles special characters, accents, and spaces. Hyphen or underscore separator. No signup.", url: "https://webpifyy.vercel.app/text/slug-generator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "URL Slug Generator Online Free — Text to Slug | webpifyy", description: "Convert any text to a URL-friendly slug online free. Handles special characters, accents, and spaces. Hyphen or underscore separator. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is a URL slug?", a: "A URL slug is the human-readable part of a web address that identifies a specific page, appearing after the domain name (e.g., /url-slug-generator). Slugs use lowercase letters, numbers, and hyphens. They are generated from a page title by removing special characters, replacing spaces with hyphens, and lowercasing everything." },
  { q: "Why do URL slugs matter for SEO?", a: "Search engines read slugs as signals about page content. A descriptive slug like /best-free-seo-tools communicates topic relevance directly to Google's crawler. Short, keyword-rich slugs without stop words and special characters consistently outperform long, numeric, or symbol-laden URLs in search rankings." },
  { q: "How are accented characters handled?", a: "Accented and diacritic characters (é, ñ, ü, ç, etc.) are normalized using Unicode NFD decomposition and then stripped of their combining diacritical marks, converting them to their ASCII base letters before slug generation. This ensures slugs remain ASCII-safe across all server environments." },
  { q: "Should I use hyphens or underscores in URL slugs?", a: "Hyphens are strongly recommended. Google officially treats hyphens as word separators, so 'slug-generator' is read as two words. Underscores join words together, so 'slug_generator' is treated as one compound word. Hyphens improve keyword matching and are the universal convention for modern CMS and blogging platforms." },
];

export default function SlugGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Text Tools", item: "https://webpifyy.vercel.app/text" },
          { "@type": "ListItem", position: 3, name: "Slug Generator", item: "https://webpifyy.vercel.app/text/slug-generator" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/text/slug-generator#software", name: "URL Slug Generator", url: "https://webpifyy.vercel.app/text/slug-generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }, { label: "Slug Generator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TEXT</span>
          <h1 className="toolpg-title">URL Slug <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Convert titles and text to clean URL slugs. Handles accents, special characters, and spaces automatically.</p>
        </div>
        <SlugGenerator />
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
