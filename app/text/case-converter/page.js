import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import CaseConverter from "@/components/CaseConverter";

export const metadata = {
  title: "Text Case Converter Online Free",
  description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more online free. Instant conversion, copy output.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/case-converter" },
  openGraph: { title: "Text Case Converter Online Free | webpifyy", description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more online free. Instant conversion, copy output.", url: "https://webpifyy.vercel.app/text/case-converter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Text Case Converter Online Free | webpifyy", description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more online free. Instant conversion, copy output.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What case formats can I convert to?", a: "UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and aLtErNaTiNg case. All formats available simultaneously." },
  { q: "Is case conversion instant?", a: "Yes. All formats update in real time as you type. No button press needed. Copy any format with a single click." },
  { q: "What is camelCase vs PascalCase?", a: "camelCase starts with a lowercase letter (myVariable). PascalCase starts with uppercase (MyComponent). camelCase is used in JavaScript variables, PascalCase in React components." },
  { q: "Is my text stored when I use the case converter?", a: "No. All conversion happens in your browser. Nothing is sent to any server or saved anywhere." },
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
