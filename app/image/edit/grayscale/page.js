import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageGrayscale from "@/components/ImageGrayscale";

export const metadata = {
  title: "Convert Image to Grayscale Online Free",
  description: "Convert any image to black and white grayscale online free. Instant conversion with before/after preview. No uploads, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/grayscale" },
  openGraph: {
    title: "Convert Image to Grayscale Online Free | webpifyy",
    description: "Convert any image to black and white grayscale online free. Instant conversion with before/after preview. No uploads, browser-based.",
    url: "https://webpifyy.vercel.app/image/edit/grayscale",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Image to Grayscale Online Free | webpifyy",
    description: "Convert any image to black and white grayscale online free. Instant conversion with before/after preview. No uploads, browser-based.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "What is grayscale conversion?", a: "Grayscale conversion removes color information, converting each pixel to a shade of gray based on its luminance. The result is a black and white image." },
  { q: "Does converting to grayscale reduce file size?", a: "Yes. Grayscale images contain less color data so they compress more efficiently. Run through our compressor after conversion for maximum size savings." },
  { q: "Can I convert a color image to grayscale without quality loss?", a: "The spatial resolution is fully preserved. Grayscale only removes hue and saturation. The output has the same sharpness and detail as the original." },
  { q: "What image formats support grayscale output?", a: "All formats are supported: PNG, JPEG, WebP and AVIF. PNG and WebP produce the best grayscale results due to lossless or near-lossless compression." },
];

export default function ImageGrayscalePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Grayscale" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/grayscale#software",
        name: "Image Grayscale Converter",
        url: "https://webpifyy.vercel.app/image/edit/grayscale",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Grayscale" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GRAYSCALE</span>
          <h1 className="toolpg-title">Image to <span className="toolpg-title-accent">Grayscale</span></h1>
          <p className="toolpg-subtitle">Convert any image to black and white grayscale. Instant conversion, free download.</p>
        </div>
        <ImageGrayscale />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant</h5><p className="tpg-tds">Process in your browser instantly.</p></div>
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
