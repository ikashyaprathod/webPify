import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfSplitter from "@/components/PdfSplitter";

export const metadata = {
  title: "Split PDF Online Free — Extract PDF Pages",
  description: "Split a PDF and extract specific pages or page ranges. Enter ranges like 1-3, 5, 7-9. 100% browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/split" },
  keywords: ["split pdf", "extract pdf pages", "pdf splitter online", "pdf page extractor", "split pdf free"],
  openGraph: {
    title: "Split PDF Online Free — Extract PDF Pages",
    description: "Extract specific pages from a PDF. Enter page ranges. 100% browser-based.",
    url: "https://webpifyy.vercel.app/pdf/split",
  },
  twitter: { card: "summary_large_image", title: "Split PDF Online Free", description: "Extract PDF pages by range. No uploads, no sign-up." },
};

const faqs = [
  { q: "How do I extract specific pages from a PDF?", a: "Upload your PDF, then enter a page range like '1-3, 5, 7-9'. Click Extract to download a new PDF with only those pages." },
  { q: "What page range formats are supported?", a: "You can use single pages (e.g. 5), ranges (e.g. 2-8), or a combination separated by commas (e.g. 1-3, 5, 8-10)." },
  { q: "Does splitting change the page quality?", a: "No. Pages are copied exactly from the source PDF without any re-encoding or quality loss." },
  { q: "Is the PDF processed on a server?", a: "No. All splitting happens in your browser using pdf-lib. Your files never leave your device." },
];

export default function PdfSplitPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Split PDF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/split#software",
        name: "PDF Splitter",
        url: "https://webpifyy.vercel.app/pdf/split",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Split a PDF and extract specific pages or page ranges. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"Split PDF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Split PDF <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Extract specific pages or page ranges from any PDF. Enter ranges like 1-3, 5, 7-9. 100% in your browser.</p>
        </div>

        <PdfSplitter />

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
