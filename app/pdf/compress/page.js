import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfCompressor from "@/components/PdfCompressor";

export const metadata = {
  title: "Compress PDF Online Free \u2014 Reduce PDF Size",
  description: "Compress PDF files online free. Reduce PDF file size by removing metadata and optimizing streams. Browser-based pdf-lib, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/compress" },
  keywords: ["compress pdf", "reduce pdf size", "pdf compressor online", "pdf optimizer", "shrink pdf"],
  openGraph: {
    title: "Compress PDF Online Free \u2014 Reduce PDF Size | webpifyy",
    description: "Compress PDF files online free. Reduce PDF file size by removing metadata and optimizing streams. Browser-based pdf-lib, no uploads needed.",
    url: "https://webpifyy.vercel.app/pdf/compress",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Online Free \u2014 Reduce PDF Size | webpifyy",
    description: "Compress PDF files online free. Reduce PDF file size by removing metadata and optimizing streams. Browser-based pdf-lib, no uploads needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How much can I compress a PDF?", a: "Compression is most effective on PDFs with embedded images. Text-only PDFs may only reduce by 5-10%. Image-heavy PDFs can reduce by 30-60%." },
  { q: "Does PDF compression reduce document quality?", a: "Metadata removal and stream optimization are lossless. Image compression within PDFs reduces visual quality slightly depending on compression level." },
  { q: "Why is my PDF still large after compression?", a: "PDFs with scanned images, embedded fonts, or CAD drawings cannot compress as efficiently. Consider reducing image resolution before creating the PDF." },
  { q: "Is PDF compression free with no file size limits?", a: "Yes, completely free. Processing uses pdf-lib running in your browser. No files are uploaded and there are no file size restrictions." },
];

export default function PdfCompressPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Compress" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/compress#software",
        name: "PDF Compressor",
        url: "https://webpifyy.vercel.app/pdf/compress",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Reduce PDF file size without re-printing. Remove metadata and optimize streams — 100% in your browser.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"PDF Compressor"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Compress PDF <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Reduce PDF file size without re-printing. Remove metadata and optimize streams — 100% in your browser.</p>
        </div>

        <PdfCompressor />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Compression Engine</h4>
              <span className="tpg-lm-badge">pdf-lib</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">Up to 40%</p><p className="tpg-sl">Smaller PDF</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">🔒</div>
                <div><p className="tpg-sv">Metadata</p><p className="tpg-sl">Stripped</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">100%</p><p className="tpg-sl">Private</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">100% Private</h5>
              <p className="tpg-tds">Your PDF never leaves your browser. No uploads, no servers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">📦</div>
              <h5 className="tpg-ttl">Metadata Stripped</h5>
              <p className="tpg-tds">Hidden author data, creation dates, and software info removed.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">No sign-up, no account, no limits. Just compress and download.</p>
            </div>
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
