import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GradientGenerator from "@/components/GradientGenerator";

export const metadata = {
  title: "CSS Gradient Generator Online Free",
  description: "Generate CSS gradients online free. Linear, radial and conic gradients. Add color stops, copy CSS code, download as PNG. No signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/gradient-generator" },
  openGraph: { title: "CSS Gradient Generator Online Free | webpifyy", description: "Generate CSS gradients online free. Linear, radial and conic gradients. Add color stops, copy CSS code, download as PNG. No signup needed.", url: "https://webpifyy.vercel.app/color/gradient-generator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "CSS Gradient Generator Online Free | webpifyy", description: "Generate CSS gradients online free. Linear, radial and conic gradients. Add color stops, copy CSS code, download as PNG. No signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What types of CSS gradients can I create?", a: "Linear gradients (directional), radial gradients (circular from center), and conic gradients (rotating around a point). All support multiple color stops." },
  { q: "How do I add multiple colors to my gradient?", a: "Click Add Color Stop to add new stops. Drag stops to position them. Click a stop to change its color. Gradients update live as you make changes." },
  { q: "Can I copy the CSS gradient code?", a: "Yes. Click Copy CSS to get the complete background gradient property ready to use in your stylesheet. Includes browser prefixes." },
  { q: "Can I download the gradient as an image?", a: "Yes. Download as PNG at any resolution. Useful for backgrounds, design mockups, or when you need a gradient as an image rather than CSS." },
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
