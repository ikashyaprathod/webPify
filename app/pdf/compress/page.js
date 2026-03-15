import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfCompressor from "@/components/PdfCompressor";

export const metadata = {
  title: "PDF Compressor — Reduce PDF File Size Online Free",
  description: "Reduce PDF file size without re-printing. Remove metadata and optimize streams — 100% in your browser. No uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/compress" },
  keywords: ["compress pdf", "reduce pdf size", "pdf compressor online", "pdf optimizer", "shrink pdf"],
  openGraph: {
    title: "PDF Compressor — Reduce PDF File Size Online Free",
    description: "Reduce PDF file size without re-printing. 100% browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/pdf/compress",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Compressor — Reduce PDF File Size Online Free",
    description: "Reduce PDF file size in your browser. No uploads, no sign-up.",
  },
};

const faqs = [
  { q: "How does browser-based PDF compression work?", a: "We use pdf-lib to reload your PDF and re-save it with object streams enabled. This removes redundant metadata and optimizes internal structure, reducing file size by 10–40% for most PDFs." },
  { q: "Does compression affect PDF quality?", a: "No visual quality is lost. We only optimize the file structure and remove metadata — all text, images, and formatting remain intact." },
  { q: "Is my PDF uploaded to a server?", a: "Never. All processing happens entirely in your browser using JavaScript. Your files never leave your device." },
  { q: "What is the maximum PDF file size?", a: "There is no hard server limit since processing is client-side. Very large PDFs (100MB+) may be slow depending on your device's memory." },
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
          { "@type": "ListItem", position: 3, name: "PDF Compressor" },
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
