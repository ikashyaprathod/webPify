import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ColorPaletteGenerator from "@/components/ColorPaletteGenerator";

export const metadata = {
  title: "Color Palette Generator Online Free",
  description: "Generate color palettes online free. Complementary, analogous, triadic schemes. Get HEX RGB HSL values. Copy CSS variables. No signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/color/palette-generator" },
  openGraph: { title: "Color Palette Generator Online Free | webpifyy", description: "Generate color palettes online free. Complementary, analogous, triadic schemes. Get HEX RGB HSL values. Copy CSS variables. No signup needed.", url: "https://webpifyy.vercel.app/color/palette-generator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Color Palette Generator Online Free | webpifyy", description: "Generate color palettes online free. Complementary, analogous, triadic schemes. Get HEX RGB HSL values. Copy CSS variables. No signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I generate a color palette?", a: "Pick a base color, choose a palette type (complementary, analogous, triadic, split-complementary, or monochromatic), and click generate to get 5 harmonious colors." },
  { q: "What color harmony schemes are available?", a: "Complementary (opposite on color wheel), Analogous (adjacent colors), Triadic (evenly spaced thirds), Split-complementary, and Monochromatic (tints/shades)." },
  { q: "Can I copy the palette as CSS variables?", a: "Yes. Click Copy CSS to get all colors as CSS custom properties. Example: --color-1: #FF5733; Ready to paste into your stylesheet." },
  { q: "Can I download the color palette as an image?", a: "Yes. Download as a PNG swatch image showing all 5 colors with their HEX values labeled. Useful for design documentation and presentations." },
];

export default function PaletteGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
          {"@type":"ListItem","position":3,"name":"Palette Generator","item":"https://webpifyy.vercel.app/color/palette-generator"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/color/palette-generator#software", "name": "Color Palette Generator", "url": "https://webpifyy.vercel.app/color/palette-generator", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools",href:"/color"},{label:"Palette Generator"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PALETTE</span>
          <h1 className="toolpg-title">Color Palette <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate beautiful, harmonious color palettes from any base color using proven color theory.</p>
        </div>
        <ColorPaletteGenerator />
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
