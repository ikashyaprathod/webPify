import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import CssMinifier from "@/components/CssMinifier";

export const metadata = {
  title: "CSS Minifier Online Free \u2014 Minify CSS Instantly",
  description: "Minify and compress CSS code online free. Remove whitespace and comments, reduce file size. Copy or download. Browser-based, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/css-minifier" },
  openGraph: { title: "CSS Minifier Online Free \u2014 Minify CSS Instantly | webpifyy", description: "Minify and compress CSS code online free. Remove whitespace and comments, reduce file size. Copy or download. Browser-based, no uploads needed.", url: "https://webpifyy.vercel.app/dev/css-minifier", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "CSS Minifier Online Free \u2014 Minify CSS Instantly | webpifyy", description: "Minify and compress CSS code online free. Remove whitespace and comments, reduce file size. Copy or download. Browser-based, no uploads needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What does CSS minification do?", a: "CSS minification removes all whitespace, newlines, comments, and other non-essential characters from a CSS file. The resulting file is functionally identical but smaller, leading to faster page load times." },
  { q: "How much can CSS minification save?", a: "Savings vary by file, but typical CSS files see 20–80% size reduction. Files with many comments and generous whitespace/indentation will see the greatest reductions." },
  { q: "Does minified CSS work the same as the original?", a: "Yes. Minification only removes characters that have no effect on how the browser interprets the CSS rules. The rendered output will be identical to the original stylesheet." },
  { q: "Should I serve minified CSS in production?", a: "Absolutely. Minified CSS reduces bytes transferred over the network, lowers parse time, and improves Core Web Vitals scores. Always serve minified assets in production and keep the original source in version control." },
];

export default function CssMinifierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "CSS Minifier" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/css-minifier#software",
        name: "CSS Minifier",
        url: "https://webpifyy.vercel.app/dev/css-minifier",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "CSS Minifier" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">CSS</span>
          <h1 className="toolpg-title">CSS <span className="toolpg-title-accent">Minifier</span></h1>
          <p className="toolpg-subtitle">Minify CSS by removing whitespace and comments. Reduce CSS file size by up to 80%. Free and instant.</p>
        </div>

        <CssMinifier />

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
