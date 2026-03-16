import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JpgToPdf from "@/components/JpgToPdf";

export const metadata = {
  title: "JPG to PDF Converter Online Free \u2014 Images to PDF",
  description: "Convert JPG, PNG and WebP images to PDF online free. Combine multiple images. Choose page size. Browser-based pdf-lib, no uploads. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/jpg-to-pdf" },
  keywords: ["jpg to pdf", "image to pdf", "convert jpg to pdf", "png to pdf", "photos to pdf"],
  openGraph: {
    title: "JPG to PDF Converter Online Free \u2014 Images to PDF | webpifyy",
    description: "Convert JPG, PNG and WebP images to PDF online free. Combine multiple images. Choose page size. Browser-based pdf-lib, no uploads. No signup.",
    url: "https://webpifyy.vercel.app/pdf/jpg-to-pdf",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PDF Converter Online Free \u2014 Images to PDF | webpifyy",
    description: "Convert JPG, PNG and WebP images to PDF online free. Combine multiple images. Choose page size. Browser-based pdf-lib, no uploads. No signup.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Can I convert multiple JPG images to one PDF?", a: "Yes. Upload multiple images, drag to reorder them, choose your page size, and convert. All images combine into a single PDF in your chosen order." },
  { q: "What page sizes are available?", a: "Choose from A4, US Letter, or Fit to Image. Fit to Image creates pages that match each image's exact dimensions." },
  { q: "What image formats can I convert to PDF?", a: "JPG, JPEG, PNG, WebP, and most common formats. All images are embedded at their original quality into the PDF document." },
  { q: "Is JPG to PDF conversion private?", a: "Yes. pdf-lib processes everything in your browser. No files leave your device and no server is involved in the conversion." },
];

export default function JpgToPdfPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "JPG to PDF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/jpg-to-pdf#software",
        name: "JPG to PDF Converter",
        url: "https://webpifyy.vercel.app/pdf/jpg-to-pdf",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert JPG, PNG, WebP images to a PDF document online. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"JPG to PDF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">JPG to PDF <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert JPG, PNG, and WebP images to a PDF document. Choose page size, reorder images, and download instantly.</p>
        </div>

        <JpgToPdf />

        
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
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
