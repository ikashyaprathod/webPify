import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfReorderPages from "@/components/PdfReorderPages";

export const metadata = {
  title: "Reorder PDF Pages Online Free \u2014 Drag to Sort",
  description: "Reorder and rearrange PDF pages online free. Drag thumbnails to sort, delete or duplicate pages. Browser-based pdf-lib, no file uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/reorder-pages" },
  openGraph: {
    title: "Reorder PDF Pages Online Free \u2014 Drag to Sort | webpifyy",
    description: "Reorder and rearrange PDF pages online free. Drag thumbnails to sort, delete or duplicate pages. Browser-based pdf-lib, no file uploads.",
    url: "https://webpifyy.vercel.app/pdf/reorder-pages",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reorder PDF Pages Online Free \u2014 Drag to Sort | webpifyy",
    description: "Reorder and rearrange PDF pages online free. Drag thumbnails to sort, delete or duplicate pages. Browser-based pdf-lib, no file uploads.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I reorder pages in a PDF?", a: "Upload your PDF and see thumbnail previews of all pages. Drag pages to your desired order, delete unwanted pages, then download the reordered PDF." },
  { q: "Can I delete pages from a PDF while reordering?", a: "Yes. Click the delete button on any page thumbnail to remove it from the document. Changes preview in real time before downloading." },
  { q: "Can I duplicate a page in the PDF?", a: "Yes. Click duplicate on any page thumbnail to add a copy of that page to the document. Useful for templates and repeated content." },
  { q: "Is there a page limit for reordering?", a: "No. pdf-lib handles PDFs of any page count in your browser. Large documents may require more memory depending on your device." },
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
