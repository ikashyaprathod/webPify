import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ColorConverter from "@/components/ColorConverter";

export const metadata = {
  title: "Color Converter Online Free \u2014 HEX RGB HSL CMYK",
  description: "Convert colors between HEX, RGB, HSL, HSV and CMYK online free. Instant conversion, color preview, copy all formats. Browser-based, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/converter" },
  openGraph: { title: "Color Converter Online Free \u2014 HEX RGB HSL CMYK | webpifyy", description: "Convert colors between HEX, RGB, HSL, HSV and CMYK online free. Instant conversion, color preview, copy all formats. Browser-based, no signup.", url: "https://webpifyy.vercel.app/color/converter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Color Converter Online Free \u2014 HEX RGB HSL CMYK | webpifyy", description: "Convert colors between HEX, RGB, HSL, HSV and CMYK online free. Instant conversion, color preview, copy all formats. Browser-based, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I convert a hex color to RGB?", a: "Enter your hex code in the HEX field and all other formats (RGB, HSL, HSV, CMYK) update instantly. Click any format to copy its value." },
  { q: "Can I enter named colors like red or blue?", a: "Yes. Type any CSS named color (red, blue, tomato, cornflowerblue etc.) and it converts to all numeric formats instantly." },
  { q: "What is the difference between HSL and HSV?", a: "HSL (Hue, Saturation, Lightness) and HSV (Hue, Saturation, Value) differ in how lightness is calculated. HSL is more intuitive for CSS, HSV is common in design applications." },
  { q: "Can I convert CMYK to hex?", a: "Yes. Enter CMYK values (0-100%) and the converter outputs the equivalent HEX, RGB and HSL values. CMYK to screen conversion assumes sRGB color space." },
];

export default function ColorConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
          {"@type":"ListItem","position":3,"name":"Color Converter","item":"https://webpifyy.vercel.app/color/converter"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/color/converter#software", "name": "Color Converter", "url": "https://webpifyy.vercel.app/color/converter", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools",href:"/color"},{label:"Color Converter"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">CONVERTER</span>
          <h1 className="toolpg-title">Color <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert between HEX, RGB, HSL, and CMYK instantly. All formats stay in sync as you type.</p>
        </div>
        <ColorConverter />
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
