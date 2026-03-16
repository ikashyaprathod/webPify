import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfWatermark from "@/components/PdfWatermark";

export const metadata = {
  title: "Add Watermark to PDF Online Free",
  description: "Add text watermarks to PDF files online free. Control font, size, opacity, rotation and position. Browser-based pdf-lib, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/add-watermark" },
  openGraph: {
    title: "Add Watermark to PDF Online Free | webpifyy",
    description: "Add text watermarks to PDF files online free. Control font, size, opacity, rotation and position. Browser-based pdf-lib, no uploads needed.",
    url: "https://webpifyy.vercel.app/pdf/add-watermark",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Watermark to PDF Online Free | webpifyy",
    description: "Add text watermarks to PDF files online free. Control font, size, opacity, rotation and position. Browser-based pdf-lib, no uploads needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Can I add a watermark to every page of a PDF?", a: "Yes. The watermark applies to all pages by default. Customize text, font size, opacity, rotation angle and position for each placement." },
  { q: "Can I make a watermark semi-transparent?", a: "Yes. The opacity slider from 10% to 100% controls transparency. 20-30% opacity is typical for watermarks that are visible but not distracting." },
  { q: "Can I position the watermark anywhere on the page?", a: "Yes. Choose center, diagonal (across the full page), or specific corner positions. Diagonal placement is the most tamper-resistant option." },
  { q: "Is adding a PDF watermark free?", a: "Yes, completely free. pdf-lib runs in your browser with no file size limits or signup requirements." },
];

export default function PdfAddWatermarkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Add Watermark" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/add-watermark#software",
        name: "PDF Watermark Tool",
        url: "https://webpifyy.vercel.app/pdf/add-watermark",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF Tools", href: "/pdf" }, { label: "Add Watermark" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Add PDF <span className="toolpg-title-accent">Watermark</span></h1>
          <p className="toolpg-subtitle">Add text watermarks to every page of a PDF. Control font, size, opacity, rotation and position. 100% browser-based.</p>
        </div>
        <PdfWatermark />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">All Pages</h5><p className="tpg-tds">Watermark applied to every page.</p></div>
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
