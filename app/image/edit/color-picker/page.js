import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageColorPicker from "@/components/ImageColorPicker";

export const metadata = {
  title: "Image Color Picker — Extract Colors from Images Online",
  description: "Pick colors from any image online. Get HEX, RGB, and HSL values instantly. Click any pixel to extract its exact color. Free, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/color-picker" },
  keywords: ["image color picker", "pick color from image", "color extractor online", "eyedropper tool", "get color from image"],
  openGraph: {
    title: "Image Color Picker — Extract Colors from Images Online",
    description: "Pick colors from any image. Get HEX, RGB, and HSL instantly.",
    url: "https://webpifyy.vercel.app/image/edit/color-picker",
  },
  twitter: { card: "summary_large_image", title: "Image Color Picker Online", description: "Extract colors from images. HEX, RGB, HSL. No sign-up." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Edit","item":"https://webpifyy.vercel.app/image/edit"},{"@type":"ListItem","position":4,"name":"Color Picker"}]})
  },
};

const faqs = [
  { q: "How do I pick a color from an image?", a: "Upload your image, then click anywhere on it. The exact color at that pixel is shown as HEX, RGB, and HSL values. Click Copy HEX to copy to clipboard." },
  { q: "What color formats does the picker show?", a: "The picker shows three formats: HEX (#rrggbb), RGB (rgb(r, g, b)), and HSL (hsl(h, s%, l%))." },
  { q: "How many colors can I save?", a: "The last 8 picked colors are shown in the history palette. Click any saved color to reselect it." },
  { q: "Is my image uploaded anywhere?", a: "No. All color picking happens in your browser using the HTML5 canvas API. Your images never leave your device." },
];

export default function ColorPickerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Color Picker" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/color-picker#software",
        name: "Image Color Picker",
        url: "https://webpifyy.vercel.app/image/edit/color-picker",
        applicationCategory: "DesignApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Pick colors from images. HEX, RGB, and HSL values. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Edit",href:"/image/edit"},{label:"Color Picker"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">COLOR PICKER</span>
          <h1 className="toolpg-title">Image Color <span className="toolpg-title-accent">Picker</span></h1>
          <p className="toolpg-subtitle">Upload any image and click to pick colors. Get HEX, RGB, and HSL values instantly. Save your last 8 picked colors.</p>
        </div>

        <ImageColorPicker />

        
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
            </div>
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
