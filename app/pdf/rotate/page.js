import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfRotator from "@/components/PdfRotator";

export const metadata = {
  title: "Rotate PDF Pages Online Free",
  description: "Rotate all pages in a PDF by 90°, 180°, or 270°. Instant, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/rotate" },
  keywords: ["rotate pdf", "pdf rotator online", "rotate pdf pages", "flip pdf", "rotate pdf free"],
  openGraph: {
    title: "Rotate PDF Pages Online Free",
    description: "Rotate all PDF pages 90°, 180°, or 270°. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/pdf/rotate",
  },
  twitter: { card: "summary_large_image", title: "Rotate PDF Pages Online Free", description: "Rotate PDF pages instantly. No uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"PDF Tools","item":"https://webpifyy.vercel.app/pdf"},{"@type":"ListItem","position":3,"name":"Rotate"}]})
  },
};

const faqs = [
  { q: "How do I rotate a PDF?", a: "Upload your PDF, choose a rotation direction (90° CW, 90° CCW, or 180°), and download the rotated PDF." },
  { q: "Does rotation change file size?", a: "Minimal change. Rotation is stored as metadata in the PDF rather than re-encoding all pages, so file size impact is negligible." },
  { q: "Can I rotate only specific pages?", a: "Currently the tool rotates all pages uniformly. For selective rotation, use our Split PDF tool first to extract the pages you need." },
  { q: "Will my PDF quality change after rotation?", a: "No. Rotation is a lossless operation — all text, images, and formatting remain at full quality." },
];

export default function PdfRotatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Rotate" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/rotate#software",
        name: "PDF Rotator",
        url: "https://webpifyy.vercel.app/pdf/rotate",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Rotate all pages in a PDF by 90°, 180°, or 270°. Instant, browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"Rotate PDF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">Rotate PDF <span className="toolpg-title-accent">Pages Online</span></h1>
          <p className="toolpg-subtitle">Rotate all pages in a PDF clockwise, counter-clockwise, or 180°. 100% in your browser — no uploads.</p>
        </div>

        <PdfRotator />

        
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
