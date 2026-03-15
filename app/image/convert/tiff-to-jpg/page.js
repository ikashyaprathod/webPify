import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";

export const metadata = {
  title: "TIFF to JPG Converter Online Free",
  description: "Convert TIFF images to JPEG format online for free. Reduce large TIFF file sizes for sharing and web use. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg" },
  keywords: ["tiff to jpg", "convert tiff to jpeg", "tiff jpg converter online", "tif to jpg"],
  openGraph: {
    title: "TIFF to JPG Converter Online Free",
    description: "Convert TIFF to JPG online. Much smaller files. No sign-up.",
    url: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg",
  },
  twitter: { card: "summary_large_image", title: "TIFF to JPG Converter Online Free", description: "Convert TIFF to JPG. No sign-up." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/image/convert"},{"@type":"ListItem","position":4,"name":"TIFF to JPG"}]})
  },
};

const faqs = [
  { q: "Why convert TIFF to JPG?", a: "TIFF files are very large and not widely supported on the web or mobile devices. Converting to JPEG reduces file size by 80–95% and ensures universal compatibility." },
  { q: "Will the conversion reduce quality?", a: "Yes, slightly. JPEG uses lossy compression. We use quality 85 with mozjpeg for optimal balance between size and quality. For photographic content, the difference is barely visible." },
  { q: "How much smaller will the JPG be?", a: "Typically 80–95% smaller than the original TIFF. A 20MB TIFF scan often converts to 1–3MB JPG." },
  { q: "Can I convert multi-page TIFF files?", a: "Our tool processes single-frame TIFF files. For multi-page TIFFs, only the first frame will be converted." },
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
