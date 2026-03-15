import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfMerger from "@/components/PdfMerger";

export const metadata = {
  title: "Merge PDF Files Online Free — Combine PDFs Instantly",
  description: "Merge multiple PDF files into one document online. Drag to reorder pages. 100% browser-based, no uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/merge" },
  keywords: ["merge pdf", "combine pdf", "join pdf files", "pdf merger online", "merge pdf free"],
  openGraph: {
    title: "Merge PDF Files Online Free — Combine PDFs Instantly",
    description: "Merge multiple PDFs into one document. Drag to reorder. 100% browser-based.",
    url: "https://webpifyy.vercel.app/pdf/merge",
  },
  twitter: { card: "summary_large_image", title: "Merge PDF Files Online Free", description: "Combine multiple PDFs instantly. No uploads, no sign-up." },
};

const faqs = [
  { q: "How many PDF files can I merge?", a: "You can merge up to 10 PDF files at a time. Simply upload them and drag to reorder before merging." },
  { q: "Can I reorder pages before merging?", a: "Yes. After uploading, use the up/down buttons to change the order of each PDF file. The final PDF will follow your custom order." },
  { q: "Does merging affect PDF quality?", a: "No. All text, images, and formatting are preserved exactly. We only combine the page streams — no re-encoding." },
  { q: "Is the merged PDF secure?", a: "Yes. Everything runs in your browser using pdf-lib. No file is ever uploaded to any server." },
];

export default function PdfMergePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Merge PDF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/merge#software",
        name: "PDF Merger",
        url: "https://webpifyy.vercel.app/pdf/merge",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Merge multiple PDF files into one. Drag to reorder. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"Merge PDF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Merge PDF <span className="toolpg-title-accent">Files Online</span></h1>
          <p className="toolpg-subtitle">Combine multiple PDF files into one document. Reorder pages freely. 100% in your browser — no uploads.</p>
        </div>

        <PdfMerger />

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
