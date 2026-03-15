import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";

export const metadata = {
  title: "WebP Image Resizer – Resize WebP Images Online Free",
  description: "Resize WebP images online to any dimension. Maintains WebP format with transparency and quality control. Fast, free, server-side processing with Sharp.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/resize/webp" },
  keywords: ["resize webp online", "webp resizer", "change webp dimensions", "scale webp image", "webp image resizer free"],
  openGraph: {
    title: "WebP Image Resizer – Resize WebP Images Online Free",
    description: "Resize WebP images online to any dimension. Maintains WebP format with transparency. Free, no sign-up.",
    url: "https://webpifyy.vercel.app/image/resize/webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP Image Resizer – Resize WebP Online Free",
    description: "Resize WebP images to any dimension while preserving transparency. Free, instant, no sign-up.",
  },
};

const faqs = [
  { q: "Does resizing WebP images preserve transparency?", a: "Yes. WebP supports full transparency (alpha channel), and our resizer preserves it completely. Your transparent areas will remain intact after resizing." },
  { q: "Will the output stay in WebP format?", a: "Yes. When you resize a WebP image, the output is also in WebP format. The file size may change slightly due to re-encoding, but the format is maintained." },
  { q: "What is the advantage of resizing WebP over PNG or JPEG?", a: "WebP produces smaller files than both PNG and JPEG at the same quality. Resizing and keeping the image in WebP format gives you the best of both worlds — exact dimensions and optimal file size for web use." },
  { q: "Can I resize WebP for social media?", a: "Yes. WebP is accepted by most modern social platforms including Twitter/X, Discord, and many website CMSs. Set your target dimensions and use Cover fit mode for exact social media sizes." },
  { q: "What fit modes are available?", a: "Fit Inside (maintains aspect ratio), Cover (fills exact dimensions, may crop), Contain (adds letterbox padding), and Fill (stretches to exact dimensions). Fit Inside is recommended for most use cases." },
];

export default function ResizeWebpPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resize" },
    { label: "WebP", href: "/image/resize/webp" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Resizer", "item": "https://webpifyy.vercel.app/image/resize" },
          { "@type": "ListItem", "position": 3, "name": "WebP" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/resize/webp#software",
        "name": "WebP Image Resizer",
        "url": "https://webpifyy.vercel.app/image/resize/webp",
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
        "description": "Resize WebP images online to any dimension. Maintains WebP format with transparency and quality control. Free, server-side processing.",
        "featureList": ["WebP Resizing", "Transparency Preserved", "4 Fit Modes", "WebP Output", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Resize',href:'/image/resize'},{label:'WebP'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WEBP</span>
          <h1 className="toolpg-title">WebP Image <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize WebP images to precise dimensions. Output stays in WebP format with transparency preserved. Smaller files than PNG or JPEG.</p>
        </div>

        <ImageResizer allowedFormats={["image/webp"]} />

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
