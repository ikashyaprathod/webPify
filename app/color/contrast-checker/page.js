import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ContrastChecker from "@/components/ContrastChecker";

export const metadata = {
  title: "Color Contrast Checker Free — WCAG AA AAA",
  description: "Check WCAG AA and AAA accessibility contrast ratios for any foreground and background color combination. Shows pass/fail for normal and large text thresholds.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/contrast-checker" },
  openGraph: { title: "Color Contrast Checker Free — WCAG AA AAA", description: "Verify WCAG accessibility contrast ratios instantly.", url: "https://webpifyy.vercel.app/color/contrast-checker" },
  twitter: { card: "summary_large_image", title: "Color Contrast Checker Free — WCAG AA AAA", description: "Check WCAG AA and AAA contrast pass/fail for any color pair." },
};

const faqs = [
  { q: "What is WCAG contrast ratio?", a: "WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios between text and background to ensure readability for people with visual impairments. AA requires 4.5:1 for normal text; AAA requires 7:1." },
  { q: "What is the difference between AA and AAA?", a: "WCAG AA is the standard compliance level (4.5:1 for normal text, 3:1 for large text). WCAG AAA is the enhanced level offering better accessibility (7:1 for normal text, 4.5:1 for large text)." },
  { q: "What counts as 'large text'?", a: "WCAG defines large text as 18pt (24px) or larger for regular weight, or 14pt (approximately 18.67px) or larger for bold text." },
  { q: "How is the contrast ratio calculated?", a: "The ratio is calculated using relative luminance values from the WCAG formula: (L1+0.05)/(L2+0.05), where L1 is the lighter color's luminance and L2 is the darker one's." },
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
