import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Free Color Tools Online \u2014 Picker Palette Gradient",
  description: "Free online color tools \u2014 color picker, palette generator, color converter, gradient generator, contrast checker. All browser-based, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/color" },
  openGraph: { title: "Free Color Tools Online \u2014 Picker Palette Gradient | webpifyy", description: "Free online color tools \u2014 color picker, palette generator, color converter, gradient generator, contrast checker. All browser-based, no signup.", url: "https://webpifyy.vercel.app/color", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Color Tools Online \u2014 Picker Palette Gradient | webpifyy", description: "Free online color tools \u2014 color picker, palette generator, color converter, gradient generator, contrast checker. All browser-based, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const toolCards = [
  { href: "/color/palette-generator", icon: "🎨", title: "Palette Generator", desc: "Generate harmonious color palettes from a base color. Complementary, analogous, triadic and more.", gradient: "linear-gradient(135deg,#ede9fe,#c4b5fd)", cta: "Generate Palette" },
  { href: "/color/picker", icon: "🖌️", title: "Color Picker", desc: "Full-spectrum color picker with HEX, RGB, HSL, HSV output and eyedropper support.", gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)", cta: "Pick Color" },
  { href: "/color/converter", icon: "🔄", title: "Color Converter", desc: "Convert between HEX, RGB, HSL and CMYK with live preview and named color lookup.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Convert Color" },
  { href: "/color/gradient-generator", icon: "🌈", title: "Gradient Generator", desc: "Build linear, radial and conic CSS gradients visually. Copy CSS or download as PNG.", gradient: "linear-gradient(135deg,#fef9c3,#fde68a)", cta: "Build Gradient" },
  { href: "/color/contrast-checker", icon: "⚡", title: "Contrast Checker", desc: "Check WCAG AA and AAA contrast ratios for text and background color combinations.", gradient: "linear-gradient(135deg,#dcfce7,#bbf7d0)", cta: "Check Contrast" },
];

export default function ColorHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Color Tools","item":"https://webpifyy.vercel.app/color"},
        ]
      },
      {
        "@type": ["SoftwareApplication","WebApplication"],
        "@id": "https://webpifyy.vercel.app/color#software",
        "name": "Color Tools",
        "url": "https://webpifyy.vercel.app/color",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"}
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Color Tools"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">COLOR TOOLS</span>
          <h1 className="hubv2-hero-title">Color <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Professional color tools for designers and developers. Generate palettes, convert formats, build gradients, and check accessibility — all free, all browser-based.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">🎨</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⚡</span><h2 className="hubv2-section-hd-title">All Color Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {toolCards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
}
