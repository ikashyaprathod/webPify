import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ContrastChecker from "@/components/ContrastChecker";

export const metadata = {
  title: "Color Contrast Checker WCAG Free Online",
  description: "Check color contrast ratio online free. WCAG AA and AAA compliance testing. Live preview, accessibility rating, color suggestions. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/contrast-checker" },
  openGraph: { title: "Color Contrast Checker WCAG Free Online | webpifyy", description: "Check color contrast ratio online free. WCAG AA and AAA compliance testing. Live preview, accessibility rating, color suggestions. No signup.", url: "https://webpifyy.vercel.app/color/contrast-checker", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Color Contrast Checker WCAG Free Online | webpifyy", description: "Check color contrast ratio online free. WCAG AA and AAA compliance testing. Live preview, accessibility rating, color suggestions. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is WCAG contrast ratio?", a: "WCAG requires minimum contrast ratios for readable text. AA requires 4.5:1 for normal text and 3:1 for large text. AAA requires 7:1 for normal text." },
  { q: "How do I use the contrast checker?", a: "Enter foreground (text) and background colors. The checker instantly shows the contrast ratio and whether it passes WCAG AA and AAA standards." },
  { q: "What contrast ratio do I need to pass WCAG AA?", a: "Normal text (under 18px): 4.5:1 minimum. Large text (18px+ or 14px+ bold): 3:1 minimum. These are the legal accessibility requirements in many countries." },
  { q: "Can the tool suggest accessible color alternatives?", a: "Yes. If your colors fail the contrast check, the tool suggests the nearest colors that pass AA standards while staying close to your original choices." },
];

export default function ContrastCheckerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
          {"@type":"ListItem","position":3,"name":"Contrast Checker","item":"https://webpifyy.vercel.app/color/contrast-checker"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/color/contrast-checker#software", "name": "Color Contrast Checker", "url": "https://webpifyy.vercel.app/color/contrast-checker", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools",href:"/color"},{label:"Contrast Checker"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">CONTRAST</span>
          <h1 className="toolpg-title">Contrast <span className="toolpg-title-accent">Checker</span></h1>
          <p className="toolpg-subtitle">Verify WCAG AA and AAA accessibility compliance for any color pair in seconds.</p>
        </div>
        <ContrastChecker />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds.</p></div>
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
