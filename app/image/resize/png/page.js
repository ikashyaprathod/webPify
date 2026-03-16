import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";

export const metadata = {
  title: "Resize PNG Images Online Free \u2014 Exact Dimensions",
  description: "Resize PNG images to any dimension online free. Maintain aspect ratio or set custom width and height. No uploads, browser-based processing.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/resize/png" },
  keywords: ["resize png online", "png resizer", "change png dimensions", "scale png image", "png image resizer free"],
  openGraph: {
    title: "Resize PNG Images Online Free \u2014 Exact Dimensions | webpifyy",
    description: "Resize PNG images to any dimension online free. Maintain aspect ratio or set custom width and height. No uploads, browser-based processing.",
    url: "https://webpifyy.vercel.app/image/resize/png",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize PNG Images Online Free \u2014 Exact Dimensions | webpifyy",
    description: "Resize PNG images to any dimension online free. Maintain aspect ratio or set custom width and height. No uploads, browser-based processing.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I resize a PNG to specific dimensions?", a: "Upload your PNG, enter your target width and height, choose a fit mode (contain, cover, fill or thumb), and click resize. The result downloads instantly." },
  { q: "Will resizing a PNG reduce its quality?", a: "Enlarging a PNG can cause pixelation. Reducing size is lossless. Use contain or cover mode to avoid distortion when changing the aspect ratio." },
  { q: "What fit modes are available for resizing?", a: "Four modes: Contain (fit within dimensions preserving ratio), Cover (fill dimensions cropping if needed), Fill (stretch to exact size), Thumb (smart crop)." },
  { q: "Can I resize multiple PNG files at once?", a: "Yes. Batch processing lets you upload and resize multiple PNG files to the same dimensions simultaneously. Download all results as a ZIP file." },
];

export default function ResizePngPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resize" },
    { label: "PNG", href: "/image/resize/png" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Resizer", "item": "https://webpifyy.vercel.app/image/resize" },
          { "@type": "ListItem", "position": 3, "name": "PNG" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/resize/png#software",
        "name": "PNG Image Resizer",
        "url": "https://webpifyy.vercel.app/image/resize/png",
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
        "description": "Resize PNG images online to exact dimensions. Preserve transparency, maintain aspect ratio. Free, server-side processing.",
        "featureList": ["PNG Resizing", "Transparency Preserved", "4 Fit Modes", "Bulk Resize", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Resize',href:'/image/resize'},{label:'PNG'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PNG</span>
          <h1 className="toolpg-title">PNG Image <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize PNG images to any width and height. Preserves transparency. Choose from 4 fit modes — Fit Inside, Cover, Contain, and Fill.</p>
        </div>

        <ImageResizer allowedFormats={["image/png"]} />

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
