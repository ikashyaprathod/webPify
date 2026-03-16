import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";

export const metadata = {
  title: "Convert TIFF to JPG Online Free",
  description: "Convert TIFF images to JPG online free. Reduce large TIFF file sizes instantly. Browser-based, no uploads, no signup required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg" },
  keywords: ["tiff to jpg", "convert tiff to jpeg", "tiff jpg converter online", "tif to jpg"],
  openGraph: {
    title: "Convert TIFF to JPG Online Free | webpifyy",
    description: "Convert TIFF images to JPG online free. Reduce large TIFF file sizes instantly. Browser-based, no uploads, no signup required.",
    url: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert TIFF to JPG Online Free | webpifyy",
    description: "Convert TIFF images to JPG online free. Reduce large TIFF file sizes instantly. Browser-based, no uploads, no signup required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Why convert TIFF to JPG?", a: "TIFF files are very large because they store uncompressed data. Converting to JPG reduces file size by 90%+, making images easy to share via email or web." },
  { q: "Does converting TIFF to JPG lose quality?", a: "JPG uses lossy compression so some quality is reduced. Set quality to 90%+ to minimize visible quality loss. For lossless conversion, convert TIFF to PNG instead." },
  { q: "What is TIFF format used for?", a: "TIFF is used in professional photography, scanning, printing and publishing where maximum quality is needed. Not suitable for web use due to large file sizes." },
  { q: "Can I convert multi-page TIFF files?", a: "Our tool converts single-page TIFF files. For multi-page TIFF documents, each page will be extracted and converted to a separate JPG file." },
];

export default function TiffToJpgPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "TIFF to JPG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/tiff-to-jpg#software",
        name: "TIFF to JPG Converter",
        url: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert TIFF images to JPG online free. Reduce large TIFF file sizes instantly.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Convert",href:"/image/convert"},{label:"TIFF to JPG"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TIFF</span>
          <h1 className="toolpg-title">TIFF to JPG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert large TIFF images to compressed JPEG format. Up to 95% smaller — perfect for web and sharing. Free, no sign-up.</p>
        </div>

        <ImageConverter outputFormat="image/jpeg" outputFormatName="JPEG" />


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
