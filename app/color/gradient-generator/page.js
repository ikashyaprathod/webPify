import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GradientGenerator from "@/components/GradientGenerator";

export const metadata = {
  title: "CSS Gradient Generator Free Online — webpifyy",
  description: "Build beautiful CSS gradients visually. Linear, radial, and conic gradients with custom color stops, angle control, and 6 built-in presets. Copy CSS or download as PNG.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/gradient-generator" },
  openGraph: { title: "CSS Gradient Generator Free Online — webpifyy", description: "Build linear, radial and conic CSS gradients visually.", url: "https://webpifyy.vercel.app/color/gradient-generator" },
  twitter: { card: "summary_large_image", title: "CSS Gradient Generator Free Online — webpifyy", description: "Visual CSS gradient builder with color stops, angle control, and presets." },
};

const faqs = [
  { q: "What gradient types are supported?", a: "The generator supports linear (directional), radial (circular from center outward), and conic (angular sweep) gradient types." },
  { q: "How do I add more color stops?", a: "Click '+ Add Stop' to insert a new color stop. You can then adjust its color and position with the sliders. At least 2 stops are always required." },
  { q: "How do I use the generated CSS?", a: "The CSS Output box shows the complete 'background:' declaration. Click 'Copy CSS' to copy it directly to your clipboard, then paste it into your stylesheet." },
  { q: "Can I download the gradient as an image?", a: "Yes. Click 'Download PNG' to save an 800×400px PNG of your current gradient, useful for design mockups or presentations." },
];

export default function GradientGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
          {"@type":"ListItem","position":3,"name":"Gradient Generator","item":"https://webpifyy.vercel.app/color/gradient-generator"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/color/gradient-generator#software", "name": "CSS Gradient Generator", "url": "https://webpifyy.vercel.app/color/gradient-generator", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools",href:"/color"},{label:"Gradient Generator"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GRADIENT</span>
          <h1 className="toolpg-title">CSS Gradient <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Build stunning linear, radial, and conic CSS gradients with a live visual editor.</p>
        </div>
        <GradientGenerator />
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
