import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SvgToPng from "@/components/SvgToPng";

export const metadata = {
  title: "SVG to PNG Converter Online Free — Export SVG as PNG",
  description: "Convert SVG files to PNG, JPEG, or WebP online free. Choose 1x, 2x, 3x, or 4x resolution scale. Uses Canvas API, no server uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/svg/svg-to-png" },
  openGraph: { title: "SVG to PNG Converter Online Free — Export SVG as PNG | webpifyy", description: "Convert SVG files to PNG, JPEG, or WebP online free. Choose 1x, 2x, 3x, or 4x resolution scale. Uses Canvas API, no server uploads.", url: "https://webpifyy.vercel.app/svg/svg-to-png", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "SVG to PNG Converter Online Free — Export SVG as PNG | webpifyy", description: "Convert SVG files to PNG, JPEG, or WebP online free. Choose 1x, 2x, 3x, or 4x resolution scale. Uses Canvas API, no server uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "Why would I convert SVG to PNG?", a: "PNG is universally supported by apps, email clients, social platforms, and messaging tools that do not render SVG. Converting to PNG allows you to use vector artwork in contexts that only accept raster images, such as app stores, Open Graph images, favicon packages, and Word documents." },
  { q: "What does the resolution scale (1x, 2x, 3x, 4x) mean?", a: "The scale multiplier determines the output pixel dimensions relative to the SVG's declared width and height. At 1x you get the native size; at 2x you get double the pixels on each axis (4x total pixel count), which is ideal for Retina / HiDPI screens. At 4x you get a high-resolution export suitable for print at standard DPI." },
  { q: "Is PNG transparency preserved when converting from SVG?", a: "Yes. When you export to PNG, the Canvas API preserves any transparent areas defined in the SVG. If you export to JPEG, transparency is not supported and transparent regions are filled with white. Exporting to WebP preserves transparency like PNG but with better compression." },
  { q: "What is the difference between exporting as PNG, JPEG, and WebP?", a: "PNG uses lossless compression and supports transparency — best for logos and icons. JPEG uses lossy compression and has no transparency — best for photographic content. WebP is a modern format that supports both lossless and lossy modes as well as transparency, achieving smaller file sizes than PNG or JPEG at comparable quality." },
];

export default function SvgToPngPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "SVG Tools", item: "https://webpifyy.vercel.app/svg" },
          { "@type": "ListItem", position: 3, name: "SVG to PNG", item: "https://webpifyy.vercel.app/svg/svg-to-png" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/svg/svg-to-png#software", name: "SVG to PNG Converter", url: "https://webpifyy.vercel.app/svg/svg-to-png", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "SVG Tools", href: "/svg" }, { label: "SVG to PNG" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SVG</span>
          <h1 className="toolpg-title">SVG to PNG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Export SVG files as PNG, JPEG, or WebP at 1x–4x resolution. Canvas API, browser-based, no data uploaded.</p>
        </div>
        <SvgToPng />
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
