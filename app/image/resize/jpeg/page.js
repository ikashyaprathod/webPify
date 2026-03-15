import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";

export const metadata = {
  title: "JPEG Image Resizer – Resize JPEG/JPG Online Free",
  description: "Resize JPEG and JPG images online to exact dimensions. Quality control, aspect ratio options, 4 fit modes. Fast, free, server-side processing with Sharp.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/resize/jpeg" },
  keywords: ["resize jpeg online", "jpeg resizer", "jpg resizer", "change jpeg dimensions", "resize jpg image free"],
  openGraph: {
    title: "JPEG Image Resizer – Resize JPEG/JPG Online Free",
    description: "Resize JPEG and JPG images to exact dimensions. Quality control, 4 fit modes. Free, no sign-up.",
    url: "https://webpifyy.vercel.app/image/resize/jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPEG Image Resizer – Resize JPG Online Free",
    description: "Resize JPEG photos to any dimension with quality control. Free, instant, no sign-up.",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Resize","item":"https://webpifyy.vercel.app/image/resize"},{"@type":"ListItem","position":4,"name":"JPEG"}]})
  },
};

const faqs = [
  { q: "Will resizing JPEG reduce quality?", a: "Re-encoding JPEG during resize applies lossy compression again. Our tool uses mozjpeg with quality 85 by default, providing excellent visual quality. Avoid repeatedly resizing the same JPEG file as each round adds slight quality loss." },
  { q: "How do I resize a JPG without distortion?", a: "Use 'Fit Inside' mode which maintains the original aspect ratio. The image fits within your specified dimensions without stretching. If you need exact dimensions with cropping, use 'Cover' mode instead." },
  { q: "Can I resize JPEG for social media?", a: "Yes. Common social media dimensions: Instagram square (1080×1080), Twitter/X header (1500×500), Facebook cover (851×315), LinkedIn post (1200×627). Set these dimensions and use Cover fit mode for pixel-perfect results." },
  { q: "What is the difference between resize and crop?", a: "Resizing changes the overall image dimensions. Cropping removes parts of the image. 'Cover' fit mode combines both — it scales the image to fill your target dimensions and crops any overflow." },
  { q: "Does JPEG support transparency after resizing?", a: "No. JPEG does not support transparency. If you need to resize an image with a transparent background, use the PNG or WebP resizer instead to preserve the transparent areas." },
];

export default function ResizeJpegPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resize" },
    { label: "JPEG", href: "/image/resize/jpeg" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Resizer", "item": "https://webpifyy.vercel.app/image/resize" },
          { "@type": "ListItem", "position": 3, "name": "JPEG" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/resize/jpeg#software",
        "name": "JPEG Image Resizer",
        "url": "https://webpifyy.vercel.app/image/resize/jpeg",
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
        "description": "Resize JPEG and JPG images online to exact dimensions. Quality control, 4 fit modes. Free, server-side processing with Sharp.",
        "featureList": ["JPEG Resizing", "Quality Control", "4 Fit Modes", "Bulk Resize", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Resize',href:'/image/resize'},{label:'JPEG'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JPEG</span>
          <h1 className="toolpg-title">JPEG Image <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize JPEG photos to any width and height. Re-encodes with mozjpeg quality control. 4 fit modes for precise output.</p>
        </div>

        <ImageResizer allowedFormats={["image/jpeg", "image/jpg"]} />

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
