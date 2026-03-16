import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import CaseConverter from "@/components/CaseConverter";

export const metadata = {
  title: "Case Converter Online Free — Text Case Changer",
  description: "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and alternating case instantly. Free online tool.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/case-converter" },
  openGraph: { title: "Case Converter Online Free — Text Case Changer", description: "Convert text case: UPPERCASE, camelCase, snake_case, kebab-case, and more.", url: "https://webpifyy.vercel.app/text/case-converter" },
  twitter: { card: "summary_large_image", title: "Case Converter Online Free — Text Case Changer", description: "9 case conversion modes for any text. Instant, free, browser-based." },
};

const faqs = [
  { q: "How many case conversion types are available?", a: "The tool supports 9 case types: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and aLtErNaTiNg case." },
  { q: "What is camelCase vs PascalCase?", a: "camelCase starts with a lowercase letter and capitalizes each subsequent word (e.g., 'myVariableName'). PascalCase capitalizes every word including the first (e.g., 'MyVariableName')." },
  { q: "What is snake_case used for?", a: "snake_case uses underscores between words and all lowercase. It is commonly used for variable names in Python, Ruby, and database column names." },
  { q: "Can I convert a long paragraph?", a: "Yes. The converter handles text of any length. Paste your entire paragraph or document and click the desired case button to convert it all at once." },
];

export default function CaseConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
          {"@type":"ListItem","position":3,"name":"Case Converter","item":"https://webpifyy.vercel.app/text/case-converter"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/text/case-converter#software", "name": "Case Converter", "url": "https://webpifyy.vercel.app/text/case-converter", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools",href:"/text"},{label:"Case Converter"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">CASE</span>
          <h1 className="toolpg-title">Case <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert text between 9 different case formats instantly. Perfect for coding, writing, and design.</p>
        </div>
        <CaseConverter />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Operations Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Avg Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use instantly, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">9 Case Modes</h5><p className="tpg-tds">All common formats covered.</p></div>
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
