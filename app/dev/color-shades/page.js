import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ColorShades from "@/components/ColorShades";

export const metadata = {
  title: "Color Shade Generator Online Free — Tints & Shades",
  description: "Generate color tints and shades from any hex color online free. Get 11 shades from lightest to darkest. Export as CSS variables. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/color-shades" },
  openGraph: { title: "Color Shade Generator Online Free — Tints & Shades | webpifyy", description: "Generate color tints and shades from any hex color online free. Get 11 shades from lightest to darkest. Export as CSS variables. No signup.", url: "https://webpifyy.vercel.app/dev/color-shades", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Color Shade Generator Online Free — Tints & Shades | webpifyy", description: "Generate color tints and shades from any hex color online free. Get 11 shades from lightest to darkest. Export as CSS variables. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the difference between a tint and a shade?", a: "A tint is created by mixing a color with white, making it lighter while preserving the hue. A shade is created by mixing a color with black, making it darker. In a design palette, tints sit above the base color (lighter values) and shades sit below it (darker values). Both tints and shades maintain the same hue family, giving you a harmonious range from near-white to near-black." },
  { q: "How does the HSL color model help generate shades?", a: "HSL (Hue, Saturation, Lightness) separates a color into three independent axes. To generate a tint/shade scale, the tool holds Hue and Saturation constant and only adjusts the Lightness value across the range (for example, from 95% down to 5%). This produces perceptually consistent steps without color shifting, unlike naively interpolating hex values." },
  { q: "What are CSS custom properties (variables) and why export shades as them?", a: "CSS custom properties (--variable-name) let you define values once and reuse them throughout your stylesheet. Exporting shades as variables like --color-100 through --color-900 means you can reference them consistently, swap your entire palette by changing one definition, and support theming. They are the standard approach for design tokens in modern CSS and are supported in all current browsers." },
  { q: "What are design tokens and how do color shades fit in?", a: "Design tokens are named values that represent visual design decisions — colors, spacing, typography — in a format that can be shared across design tools, code, and platforms. A color shade scale is the most fundamental token set: by naming shades (--blue-50 through --blue-950), teams ensure designers and developers reference the same values, making handoff consistent and refactoring easy." },
];

export default function ColorShadesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Color Shade Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/color-shades#software",
        name: "Color Shade Generator",
        url: "https://webpifyy.vercel.app/dev/color-shades",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Color Shade Generator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">COLOR</span>
          <h1 className="toolpg-title">Color Shade <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate tints and shades from any color. Get 11 steps from lightest to darkest, with one-click CSS variable export.</p>
        </div>

        <ColorShades />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
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
