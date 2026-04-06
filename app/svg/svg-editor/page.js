import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SvgEditor from "@/components/SvgEditor";

export const metadata = {
  title: "SVG Editor Online Free — Code Editor with Live Preview",
  description: "Edit SVG code with live preview online free. Insert shapes, text, and elements with one click. Download or copy SVG instantly. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/svg/svg-editor" },
  openGraph: { title: "SVG Editor Online Free — Code Editor with Live Preview | webpifyy", description: "Edit SVG code with live preview online free. Insert shapes, text, and elements with one click. Download or copy SVG instantly. Browser-based.", url: "https://webpifyy.vercel.app/svg/svg-editor", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "SVG Editor Online Free — Code Editor with Live Preview | webpifyy", description: "Edit SVG code with live preview online free. Insert shapes, text, and elements with one click. Download or copy SVG instantly. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What can I edit in the SVG editor?", a: "You can edit any valid SVG markup directly in the code editor. This includes paths, shapes (circle, rect, ellipse, polygon), text elements, gradients, filters, masks, and group transforms. The live preview updates immediately as you type, so you see the visual result of every change in real time." },
  { q: "How do I insert shapes using the toolbar?", a: "The toolbar provides one-click snippets for common SVG elements: circle, rectangle, line, text, and more. Clicking an element button inserts a properly formed SVG snippet at the cursor position in the editor. You can then adjust the attributes (cx, cy, r, fill, etc.) to customize the element." },
  { q: "How do I download my edited SVG?", a: "Click the Download button to save the current SVG code as a .svg file. The file is generated entirely in your browser using a Blob URL — no server is involved. You can also use the Copy button to copy the SVG markup to your clipboard for pasting directly into your codebase or design tool." },
  { q: "How is SVG different from HTML?", a: "SVG is an XML-based vector format that describes 2D graphics using geometric elements like paths, shapes, and text. HTML describes document structure and content. While SVG can be embedded inside HTML, it has its own element set, coordinate system, and rendering model. SVG elements use attributes like cx, cy, fill, and stroke rather than CSS box-model properties." },
];

export default function SvgEditorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "SVG Tools", item: "https://webpifyy.vercel.app/svg" },
          { "@type": "ListItem", position: 3, name: "SVG Editor", item: "https://webpifyy.vercel.app/svg/svg-editor" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/svg/svg-editor#software", name: "SVG Code Editor", url: "https://webpifyy.vercel.app/svg/svg-editor", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "SVG Tools", href: "/svg" }, { label: "SVG Editor" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SVG</span>
          <h1 className="toolpg-title">SVG Code <span className="toolpg-title-accent">Editor</span></h1>
          <p className="toolpg-subtitle">Edit SVG with live preview. Insert circles, rectangles, text, and lines with toolbar shortcuts. Download or copy instantly.</p>
        </div>
        <SvgEditor />
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
