import PageShell from "@/components/PageShell";
import PDFToJPG from "@/components/PDFToJPG";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "PDF to JPG Converter – Free Online, No Upload",
  description: "Convert PDF pages to JPG images online. Each page becomes a separate high-quality JPG. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/pdf-to-jpg" },
  openGraph: {
    title: "PDF to JPG Converter – Free Online",
    description: "Convert every PDF page to a JPG image instantly. No uploads, free forever.",
    url: "https://webpifyy.vercel.app/pdf/pdf-to-jpg",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"PDF Tools","item":"https://webpifyy.vercel.app/pdf"},{"@type":"ListItem","position":3,"name":"PDF to JPG"}]})
  },
};

const faqs = [
  { q: "How do I convert a PDF to JPG?", a: "Upload your PDF file, choose the output quality and resolution settings, then click Convert. Each page of the PDF is rendered as a separate JPG image. Download individually or as a ZIP." },
  { q: "Will each PDF page become a separate image?", a: "Yes. Each page of the PDF is converted to its own JPG file. A 10-page PDF produces 10 JPG images. You can download all at once as a ZIP file." },
  { q: "What resolution can I choose?", a: "Output resolution is configurable — higher DPI gives sharper images for print use. 150 DPI is suitable for screen viewing; 300 DPI is standard for print quality." },
  { q: "Is my PDF uploaded to a server?", a: "No. All conversion happens in your browser using PDF.js and the Canvas API. Your files never leave your device." },
  { q: "Can I convert a password-protected PDF?", a: "Password-protected PDFs must be unlocked before conversion. The tool will prompt you to enter the PDF password if one is set." },
];

export default function PDFToJPGPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "PDF to JPG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/pdf-to-jpg#software",
        name: "PDF to JPG Converter",
        url: "https://webpifyy.vercel.app/pdf/pdf-to-jpg",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Convert PDF pages to high-quality JPG images. Browser-based, no uploads.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF Tools", href: "/pdf" }, { label: "PDF to JPG" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">PDF to JPG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert every page of a PDF into a high-quality JPG image. Choose resolution and quality, then download all pages as a ZIP. Runs entirely in your browser — no server, no uploads.</p>
        </div>

        <PDFToJPG />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Conversion Engine</h4>
              <span className="tpg-lm-badge">PDF.js</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📄</div>
                <div><p className="tpg-sv">Any Size</p><p className="tpg-sl">PDF Supported</p></div>
              </div>
              <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">Per Page</p><p className="tpg-sl">JPG Output</p></div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">100%</p><p className="tpg-sl">Private</p></div>
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
              <div className="tpg-ti tpg-ti-p">📦</div>
              <h5 className="tpg-ttl">ZIP Download</h5>
              <p className="tpg-tds">Download all converted JPG pages at once in a single ZIP file.</p>
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
