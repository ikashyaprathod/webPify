import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to JPEG Online Free",
  description: "Convert PNG, WebP, AVIF and other formats to JPEG online free. Control quality settings. Smallest file size for photos. No signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/to-jpeg" },
  keywords: ["convert to jpeg", "png to jpeg", "webp to jpg", "image to jpg converter", "convert image to jpeg online free"],
  openGraph: {
    title: "Convert Images to JPEG Online Free | webpifyy",
    description: "Convert PNG, WebP, AVIF and other formats to JPEG online free. Control quality settings. Smallest file size for photos. No signup needed.",
    url: "https://webpifyy.vercel.app/image/convert/to-jpeg",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to JPEG Online Free | webpifyy",
    description: "Convert PNG, WebP, AVIF and other formats to JPEG online free. Control quality settings. Smallest file size for photos. No signup needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "When should I convert images to JPEG?", a: "JPEG is best for photographs and complex images where small file size matters more than perfect quality. Not ideal for logos, text, or transparent images." },
  { q: "What quality setting should I use when converting to JPEG?", a: "80-85% quality is the sweet spot for most web images. It offers a good balance between file size and visual quality that most viewers cannot distinguish from 100%." },
  { q: "Does JPEG support transparency?", a: "No. JPEG does not support transparency. If your image has a transparent background, convert to PNG or WebP instead to preserve the transparency." },
  { q: "How small will my JPEG file be after conversion?", a: "JPEG typically reduces file size by 60-80% compared to PNG. The exact reduction depends on image complexity and the quality level you choose." },
];

export default function JPEGConverterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Converter", href: "/image/convert" },
    { label: "JPEG", href: "/image/convert/to-jpeg" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Converter", "item": "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", "position": 4, "name": "JPEG" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/to-jpeg#software",
        "name": "Image to JPEG Converter",
        "url": "https://webpifyy.vercel.app/image/convert/to-jpeg",
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
        "description": "Convert PNG, WebP, AVIF and other formats to JPEG online free. Control quality settings. Smallest file size for photos.",
        "featureList": ["PNG to JPEG", "WebP to JPEG", "Quality Control", "Maximum Compatibility", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Convert',href:'/image/convert'},{label:'to JPEG'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JPEG</span>
          <h1 className="toolpg-title">Convert Images to <span className="toolpg-title-accent">JPEG</span></h1>
          <p className="toolpg-subtitle">Convert PNG, WebP, and other images to JPEG format for maximum compatibility across all devices and platforms.</p>
        </div>

        <ImageConverter
          outputFormat="image/jpeg"
          outputFormatName="JPEG"
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
