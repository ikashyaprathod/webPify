import PageShell from "@/components/PageShell";
import ImageToPDF from "@/components/ImageToPDF";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Convert Images to PDF Online Free — JPG PNG to PDF",
  description: "Convert JPG, PNG, WebP and other images to PDF online free. Combine multiple images into one PDF. Choose page size. No uploads required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/image-to-pdf" },
  openGraph: {
    title: "Convert Images to PDF Online Free — JPG PNG to PDF | webpifyy",
    description: "Convert JPG, PNG, WebP and other images to PDF online free. Combine multiple images into one PDF. Choose page size. No uploads required.",
    url: "https://webpifyy.vercel.app/image/convert/image-to-pdf",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to PDF Online Free — JPG PNG to PDF | webpifyy",
    description: "Convert JPG, PNG, WebP and other images to PDF online free. Combine multiple images into one PDF. Choose page size. No uploads required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Can I combine multiple images into one PDF?", a: "Yes. Upload multiple images, reorder by drag and drop, choose your page size (A4, Letter, or fit to image) and convert all images into a single PDF document." },
  { q: "What image formats can I convert to PDF?", a: "You can convert JPG, PNG, WebP, AVIF and most common image formats to PDF. All processing happens in your browser with no file size restrictions." },
  { q: "Can I choose the page size for my PDF?", a: "Yes. Choose from A4, US Letter, or fit to image size. Fit to image creates a PDF page that matches each image's exact dimensions." },
  { q: "Is image to PDF conversion private?", a: "Yes. All conversion happens in your browser using JavaScript. No files are uploaded to any server, ensuring complete privacy for your documents." },
];

export default function ImageToPDFPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "Image to PDF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/image-to-pdf#software",
        name: "Image to PDF Converter",
        url: "https://webpifyy.vercel.app/image/convert/image-to-pdf",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Convert JPG, PNG, WebP and other images to PDF online free. Combine multiple images into one PDF.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Convert", href: "/image/convert" }, { label: "Image to PDF" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Image to PDF <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Combine multiple images into a single PDF document. Choose page size, orientation, and order. Everything runs in your browser — no server, no uploads.</p>
        </div>

        <ImageToPDF />

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
              <div className="tpg-ti tpg-ti-p">📄</div>
              <h5 className="tpg-ttl">Multi-Page PDF</h5>
              <p className="tpg-tds">Combine unlimited images into a single downloadable PDF document.</p>
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
