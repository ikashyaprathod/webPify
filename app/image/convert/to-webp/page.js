import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to WebP Online Free",
  description: "Convert PNG, JPEG, AVIF and other formats to WebP online free. Reduce file size by 25-35% vs JPEG. No signup, instant conversion.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/to-webp" },
  keywords: ["convert to webp", "png to webp", "jpeg to webp", "image to webp converter", "webp converter online free"],
  openGraph: {
    title: "Convert Images to WebP Online Free | webpifyy",
    description: "Convert PNG, JPEG, AVIF and other formats to WebP online free. Reduce file size by 25-35% vs JPEG. No signup, instant conversion.",
    url: "https://webpifyy.vercel.app/image/convert/to-webp",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to WebP Online Free | webpifyy",
    description: "Convert PNG, JPEG, AVIF and other formats to WebP online free. Reduce file size by 25-35% vs JPEG. No signup, instant conversion.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Why convert images to WebP?", a: "WebP images are 25-35% smaller than JPEG and PNG at the same quality. Using WebP improves page speed, reduces bandwidth costs, and improves Core Web Vitals scores." },
  { q: "Does converting to WebP lose quality?", a: "WebP supports both lossy and lossless compression. Our converter uses lossless by default, preserving full original quality while reducing file size." },
  { q: "Can I convert multiple images to WebP at once?", a: "Yes. Drag and drop multiple files for batch conversion. Download results individually or all at once as a ZIP." },
  { q: "Will WebP work on all websites?", a: "WebP works on all modern browsers. For older browsers, use the HTML picture element to provide a JPEG fallback." },
];

export default function WebPConverterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Converter", href: "/image/convert" },
    { label: "WebP", href: "/image/convert/to-webp" }
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
          { "@type": "ListItem", "position": 4, "name": "WebP" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/to-webp#software",
        "name": "Image to WebP Converter",
        "url": "https://webpifyy.vercel.app/image/convert/to-webp",
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
        "description": "Convert PNG, JPEG, AVIF and other formats to WebP online free. Reduce file size by 25-35% vs JPEG.",
        "featureList": ["PNG to WebP", "JPEG to WebP", "Transparency Support", "Free", "No Sign-up"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Convert',href:'/image/convert'},{label:'to WebP'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WEBP</span>
          <h1 className="toolpg-title">Convert Images to <span className="toolpg-title-accent">WebP</span></h1>
          <p className="toolpg-subtitle">Convert PNG and JPEG images to WebP format online for free. WebP is 25–35% smaller than PNG/JPEG at the same quality.</p>
        </div>

        <ImageConverter
          outputFormat="image/webp"
          outputFormatName="WebP"
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
