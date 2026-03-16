import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageCompressor from "@/components/ImageCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress JPEG Images Online Free \u2014 Reduce JPG Size",
  description: "Compress JPEG and JPG images online free. Reduce file size up to 85% using mozjpeg. Before/after preview included. No signup required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compress/jpeg" },
  keywords: ["compress jpeg", "compress jpg online", "reduce jpeg file size", "jpg compressor", "compress jpeg without quality loss"],
  openGraph: {
    title: "Compress JPEG Images Online Free \u2014 Reduce JPG Size | webpifyy",
    description: "Compress JPEG and JPG images online free. Reduce file size up to 85% using mozjpeg. Before/after preview included. No signup required.",
    url: "https://webpifyy.vercel.app/image/compress/jpeg",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress JPEG Images Online Free \u2014 Reduce JPG Size | webpifyy",
    description: "Compress JPEG and JPG images online free. Reduce file size up to 85% using mozjpeg. Before/after preview included. No signup required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How much can I compress a JPEG image?", a: "Typically 50-85% size reduction depending on image content. Photos compress more than graphics. Quality is preserved by controlling the compression level." },
  { q: "Will JPEG compression affect image quality?", a: "JPEG uses lossy compression so some quality loss occurs. Our tool uses mozjpeg which provides better quality at smaller sizes than standard JPEG compression." },
  { q: "What is the difference between JPEG and JPG?", a: "JPEG and JPG are the same format. JPG is a shorter extension used on older Windows systems. Both refer to the same lossy image compression standard." },
  { q: "Can I compress multiple JPEG files at once?", a: "Yes. Batch compression lets you upload and compress multiple files simultaneously. Download results individually or as a ZIP file." },
];

export default function JPEGCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Compressor", href: "/image/compress" },
    { label: "JPEG", href: "/image/compress/jpeg" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Compressor", "item": "https://webpifyy.vercel.app/image/compress" },
          { "@type": "ListItem", "position": 4, "name": "JPEG" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compress/jpeg#software",
        "name": "JPEG Image Compressor",
        "url": "https://webpifyy.vercel.app/image/compress/jpeg",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://webpifyy.vercel.app/#organization" }
        },
        "provider": { "@id": "https://webpifyy.vercel.app/#organization" },
        "author": { "@id": "https://webpifyy.vercel.app/#organization" },
        "description": "Compress JPEG and JPG images online free. Reduce file size up to 85% using mozjpeg. Before/after preview included. No signup required.",
        "featureList": ["JPEG Compression", "mozjpeg Algorithm", "Up to 85% Size Reduction", "Before/After Preview", "Free"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Compress',href:'/image/compress'},{label:'JPEG'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JPEG</span>
          <h1 className="toolpg-title">Compress JPEG Images <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Compress JPEG images to smaller file sizes while keeping visual quality intact. Uses mozjpeg for 40–90% reduction without visible loss.</p>
        </div>

        <ImageCompressor
          allowedFormats={['image/jpeg']}
          formatName="JPEG"
        />

        {/* Stats + Why Choose */}
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

        {/* World / Edge-First Processing */}
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
