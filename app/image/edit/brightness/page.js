import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageBrightness from "@/components/ImageBrightness";

export const metadata = {
  title: "Adjust Image Brightness Online Free — webpifyy",
  description: "Adjust image brightness and saturation online for free. Lighten or darken any image with precision sliders. Powered by Sharp.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/brightness" },
  openGraph: {
    title: "Adjust Image Brightness Online Free — webpifyy",
    description: "Adjust image brightness and saturation. Lighten or darken any image with precision sliders.",
    url: "https://webpifyy.vercel.app/image/edit/brightness",
  },
  twitter: { card: "summary_large_image", title: "Adjust Image Brightness Online Free — webpifyy", description: "Adjust image brightness and saturation. Precision sliders." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Edit","item":"https://webpifyy.vercel.app/image/edit"},{"@type":"ListItem","position":4,"name":"Brightness"}]})
  },
};

const faqs = [
  { q: "What does brightness adjustment do?", a: "Brightness adjustment multiplies the luminance of each pixel. A value of 100% leaves the image unchanged. Values below 100% darken the image; values above 100% lighten it." },
  { q: "What is saturation and how does it affect my image?", a: "Saturation controls the intensity of colors. At 100% colors are unchanged. Lowering saturation moves towards grayscale. Increasing it makes colors more vibrant and vivid." },
  { q: "Can I preview changes before downloading?", a: "Yes. A live CSS filter preview updates as you move the sliders, showing an approximation of the result. Click Apply to process the actual image with precise Sharp adjustments." },
  { q: "What brightness range should I use for minor corrections?", a: "For subtle corrections, stay between 80%-120%. The 0.1-3.0 range (10%-300%) allows dramatic changes but extreme values will cause loss of detail." },
];

export default function ImageBrightnessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Brightness" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/brightness#software",
        name: "Image Brightness Adjuster",
        url: "https://webpifyy.vercel.app/image/edit/brightness",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Brightness" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">BRIGHTNESS</span>
          <h1 className="toolpg-title">Adjust <span className="toolpg-title-accent">Brightness</span></h1>
          <p className="toolpg-subtitle">Adjust image brightness and saturation. Lighten or darken any image with precision sliders.</p>
        </div>
        <ImageBrightness />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing uploaded — all browser-based.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Live Preview</h5><p className="tpg-tds">CSS filter preview updates instantly.</p></div>
          </div>
        </div>
        <div className="toolpg-faq">
          <div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
