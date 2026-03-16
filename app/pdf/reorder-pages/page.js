import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfReorderPages from "@/components/PdfReorderPages";

export const metadata = {
  title: "Reorder PDF Pages Online Free — webpifyy",
  description: "Rearrange, reorder, and delete pages from any PDF online for free. Enter custom page order. 100% browser-based using pdf-lib.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/reorder-pages" },
  openGraph: {
    title: "Reorder PDF Pages Online Free — webpifyy",
    description: "Rearrange, reorder, and delete pages from any PDF. Enter custom page order. 100% browser-based.",
    url: "https://webpifyy.vercel.app/pdf/reorder-pages",
  },
  twitter: { card: "summary_large_image", title: "Reorder PDF Pages Online Free — webpifyy", description: "Reorder and delete PDF pages. Browser-based, free." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"PDF Tools","item":"https://webpifyy.vercel.app/pdf"},{"@type":"ListItem","position":3,"name":"Reorder Pages"}]})
  },
};

const faqs = [
  { q: "How do I specify a custom page order?", a: 'Enter page numbers separated by commas. Use ranges like 4-6 for consecutive pages. Example: entering "3,1,2" will put page 3 first, then page 1, then page 2.' },
  { q: "Can I delete pages from a PDF?", a: 'Yes. Enter the page numbers you want to remove in the "Delete Pages" field, separated by commas. You can use ranges like 5-8 to delete multiple consecutive pages.' },
  { q: "What happens if I enter an invalid page number?", a: "Page numbers outside the valid range (1 to total pages) are silently ignored. The tool will process only valid page numbers." },
  { q: "Is my PDF uploaded to a server?", a: "No. All reordering happens entirely in your browser using pdf-lib. Your PDF never leaves your device." },
];

export default function PdfReorderPagesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Reorder Pages" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/reorder-pages#software",
        name: "PDF Page Reorder Tool",
        url: "https://webpifyy.vercel.app/pdf/reorder-pages",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF Tools", href: "/pdf" }, { label: "Reorder Pages" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Reorder PDF <span className="toolpg-title-accent">Pages</span></h1>
          <p className="toolpg-subtitle">Rearrange, reorder, and delete pages from any PDF. Enter custom page order. 100% browser-based.</p>
        </div>
        <PdfReorderPages />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Delete Pages</h5><p className="tpg-tds">Reorder and remove pages in one step.</p></div>
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
