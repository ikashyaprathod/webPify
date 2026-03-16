import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JsMinifier from "@/components/JsMinifier";

export const metadata = {
  title: "JavaScript Minifier Online Free — webpifyy",
  description: "Minify JavaScript using Terser. Remove whitespace, shorten variables, and reduce JS bundle size by up to 80%. Free, browser-based, no upload needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/js-minifier" },
  openGraph: {
    title: "JavaScript Minifier Online Free — webpifyy",
    description: "Minify JavaScript using Terser. Remove whitespace, shorten variables, and reduce JS file size by up to 80%.",
    url: "https://webpifyy.vercel.app/dev/js-minifier",
  },
  twitter: { card: "summary_large_image", title: "JavaScript Minifier Online Free", description: "Minify JS with Terser. Shorten variables and strip whitespace instantly." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"JS Minifier"}]})
  },
};

const faqs = [
  { q: "What is JavaScript minification?", a: "JS minification is the process of removing whitespace, comments, and renaming variables to shorter names without changing the program's behavior. The result is a smaller file that loads and parses faster." },
  { q: "What is Terser?", a: "Terser is the industry-standard JavaScript minifier and compressor. It performs dead-code elimination, constant folding, variable mangling, and many other optimizations. It is used by Webpack, Vite, and most modern build tools." },
  { q: "Can minification break my JavaScript?", a: "Well-written JavaScript should not break after minification. If your code relies on function.name or uses eval(), some minifications can cause issues. Keep your original source in version control and always test the minified output." },
  { q: "What is the difference between minify and uglify?", a: "Minification primarily removes whitespace and comments. Uglification goes further by renaming variables to shorter names (mangling). Terser performs both, giving maximum size reduction. The resulting code is not human-readable." },
];

export default function JsMinifierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "JS Minifier" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/js-minifier#software",
        name: "JavaScript Minifier",
        url: "https://webpifyy.vercel.app/dev/js-minifier",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "JS Minifier" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JS</span>
          <h1 className="toolpg-title">JavaScript <span className="toolpg-title-accent">Minifier</span></h1>
          <p className="toolpg-subtitle">Minify JavaScript using Terser. Remove whitespace, shorten variables, and reduce JS file size by up to 80%.</p>
        </div>

        <JsMinifier />

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
