import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SvgViewer from "@/components/SvgViewer";

export const metadata = {
  title: "SVG Viewer Online Free — Preview & Inspect SVG Files",
  description: "View and preview SVG files online free. Inspect dimensions, viewBox, and element count. Toggle checker, white, and dark backgrounds. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/svg/svg-viewer" },
  openGraph: { title: "SVG Viewer Online Free — Preview & Inspect SVG Files | webpifyy", description: "View and preview SVG files online free. Inspect dimensions, viewBox, and element count. Toggle checker, white, and dark backgrounds. No uploads.", url: "https://webpifyy.vercel.app/svg/svg-viewer", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "SVG Viewer Online Free — Preview & Inspect SVG Files | webpifyy", description: "View and preview SVG files online free. Inspect dimensions, viewBox, and element count. Toggle checker, white, and dark backgrounds. No uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the difference between SVG and raster images?", a: "SVG (Scalable Vector Graphics) stores shapes as mathematical paths and coordinates, so it scales to any size without pixelation. Raster images like PNG and JPEG store pixel data at a fixed resolution and become blurry when enlarged. SVG is ideal for logos, icons, and illustrations; raster formats are better for photographs." },
  { q: "What is the viewBox attribute in SVG?", a: "The viewBox attribute defines the internal coordinate system of an SVG — it sets the origin point and the width/height of the visible area in user units. It is separate from the width and height attributes, which control the rendered size in the browser. A properly set viewBox allows the SVG to scale proportionally at any display size." },
  { q: "Which browsers support SVG files?", a: "All modern browsers — Chrome, Firefox, Safari, Edge, and Opera — have full native SVG support. SVG can be embedded directly in HTML, referenced as an img src, or used as a CSS background-image. Internet Explorer 11 has partial support. Mobile browsers also render SVG natively." },
  { q: "How can I check if my SVG file is valid?", a: "This viewer renders the SVG directly using the browser's built-in SVG engine. If the SVG fails to render or displays incorrectly, the file likely contains syntax errors, unsupported elements, or external references that cannot be loaded. You can also inspect the element count shown in the info panel to confirm the SVG was parsed correctly." },
];

export default function SvgViewerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "SVG Tools", item: "https://webpifyy.vercel.app/svg" },
          { "@type": "ListItem", position: 3, name: "SVG Viewer", item: "https://webpifyy.vercel.app/svg/svg-viewer" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/svg/svg-viewer#software", name: "SVG Viewer", url: "https://webpifyy.vercel.app/svg/svg-viewer", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "SVG Tools", href: "/svg" }, { label: "SVG Viewer" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SVG</span>
          <h1 className="toolpg-title">SVG <span className="toolpg-title-accent">Viewer</span></h1>
          <p className="toolpg-subtitle">Upload or paste SVG code to preview it. Inspect dimensions, viewBox, and element count. Toggle background colors.</p>
        </div>
        <SvgViewer />
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
