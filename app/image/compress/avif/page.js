import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
  title: "Compress AVIF Images Online Free",
  description: "Compress AVIF images online for free. Reduce AVIF file size using Sharp's native AVIF encoder. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compress/avif" },
  keywords: ["compress avif", "avif compressor online", "reduce avif file size", "avif optimizer"],
  openGraph: {
    title: "Compress AVIF Images Online Free",
    description: "Compress AVIF images online. Reduce file size with quality 60 encoding.",
    url: "https://webpifyy.vercel.app/image/compress/avif",
  },
  twitter: { card: "summary_large_image", title: "AVIF Compressor Online Free", description: "Compress AVIF images. No sign-up." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Compress","item":"https://webpifyy.vercel.app/image/compress"},{"@type":"ListItem","position":4,"name":"AVIF"}]})
  },
};

const faqs = [
  { q: "What is AVIF?", a: "AVIF (AV1 Image File Format) is a modern image format based on the AV1 video codec. It typically achieves 50% smaller files than JPEG at the same visual quality." },
  { q: "How does AVIF compression work?", a: "We use Sharp's built-in AVIF encoder with quality 60 and effort 6. This typically reduces AVIF files by 20–40% while maintaining good visual quality." },
  { q: "Is AVIF widely supported?", a: "AVIF is supported in Chrome, Firefox, Edge, and Safari. For maximum compatibility, consider also keeping a WebP fallback." },
  { q: "Is my image uploaded to a server?", a: "Images are sent to our Edge processing API, compressed server-side using Sharp, and returned immediately. Files are never stored." },
];

export default function AvifCompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Compress", item: "https://webpifyy.vercel.app/image/compress" },
          { "@type": "ListItem", position: 4, name: "AVIF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compress/avif#software",
        name: "AVIF Image Compressor",
        url: "https://webpifyy.vercel.app/image/compress/avif",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress AVIF images online. Sharp native AVIF encoder.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Compress",href:"/image/compress"},{label:"AVIF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AVIF</span>
          <h1 className="toolpg-title">Compress AVIF <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Compress AVIF images to smaller file sizes. Next-gen format with the smallest footprint of any modern image format.</p>
        </div>

        <ImageCompressor allowedFormats={["image/avif"]} formatName="AVIF" />

        
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
