import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ColorPickerTool from "@/components/ColorPickerTool";

export const metadata = {
  title: "Color Picker Online Free — HEX RGB HSL",
  description: "Free online color picker with full spectrum canvas, hue and alpha sliders. Get HEX, RGB, HSL, and HSV values instantly. Supports EyeDropper API and recent color history.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/picker" },
  openGraph: { title: "Color Picker Online Free — HEX RGB HSL", description: "Pick any color and get HEX, RGB, HSL, HSV values instantly.", url: "https://webpifyy.vercel.app/color/picker" },
  twitter: { card: "summary_large_image", title: "Color Picker Online Free — HEX RGB HSL", description: "Full spectrum color picker with HEX, RGB, HSL, HSV and eyedropper." },
};

const faqs = [
  { q: "What color formats does the picker output?", a: "The picker outputs HEX, RGB, HSL, and HSV formats simultaneously. All values update in real-time as you move the selector." },
  { q: "What is the EyeDropper tool?", a: "The EyeDropper button lets you sample any color from your screen. It uses the native browser EyeDropper API and is available in Chrome, Edge, and other Chromium-based browsers." },
  { q: "Does the picker support transparency?", a: "Yes. Use the Alpha slider to set opacity from 0% to 100%. The HEX output will include an alpha channel (8-digit hex) when alpha is below 100%." },
  { q: "How does the recent colors history work?", a: "The last 8 colors you copied are saved as swatches below the picker. Click any swatch to restore that color. History is stored in your browser's memory during the session." },
];

export default function ColorPickerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
          {"@type":"ListItem","position":3,"name":"Color Picker","item":"https://webpifyy.vercel.app/color/picker"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/color/picker#software", "name": "Color Picker", "url": "https://webpifyy.vercel.app/color/picker", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools",href:"/color"},{label:"Color Picker"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">COLOR PICKER</span>
          <h1 className="toolpg-title">Color <span className="toolpg-title-accent">Picker</span></h1>
          <p className="toolpg-subtitle">Pick any color with full-spectrum precision. Get HEX, RGB, HSL, and HSV values instantly.</p>
        </div>
        <ColorPickerTool />
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
