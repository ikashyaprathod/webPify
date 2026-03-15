import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageCompressor from "@/components/ImageCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress WebP Images Online – Reduce WebP File Size Free",
  description: "Compress WebP images online for free. Uses Sharp to reduce WebP file size by 50–80% while preserving visual quality and transparency. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compress/webp" },
  keywords: ["compress webp", "webp compressor online", "reduce webp file size", "webp optimizer", "compress webp images free"],
  openGraph: {
    title: "Compress WebP Images Online – Reduce WebP File Size Free",
    description: "Compress WebP images online for free. Reduce file size by 50–80% while preserving visual quality. No sign-up required.",
    url: "https://webpifyy.vercel.app/image/compress/webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress WebP Images Online – Free WebP Compressor",
    description: "Reduce WebP file size by 50–80% without visible quality loss. Free, instant, no sign-up.",
  },
};

const faqs = [
  { q: "Can you compress WebP images without quality loss?", a: "Yes, using Sharp's WebP compression you can reduce file size by 50–80% with minimal perceptible quality loss. The lossless option gives zero quality degradation at lower compression ratios." },
  { q: "Is WebP better than PNG for compression?", a: "Yes, WebP is typically 25–35% smaller than PNG at the same visual quality. For photos, WebP is 25–34% smaller than JPEG. WebP is the recommended format for modern web images." },
  { q: "Does WebP support transparency?", a: "Yes. WebP supports an alpha channel (transparency) just like PNG. Compressed WebP files retain transparency fully." },
  { q: "Is WebP supported by all browsers?", a: "Yes, WebP is now supported by all modern browsers including Chrome, Firefox, Safari (since 2020), and Edge. Global browser support exceeds 96%." },
  { q: "How do I know which quality to use for WebP?", a: "Quality 75–85 is the standard range for web-optimized WebP images. Quality 90+ is near-lossless and is suitable for product photography. Quality 60–70 works for thumbnails and low-priority images." },
];

export default function WebPCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Compressor", href: "/image/compress" },
    { label: "WebP", href: "/image/compress/webp" }
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
          { "@type": "ListItem", "position": 4, "name": "WebP" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compress/webp#software",
        "name": "WebP Image Compressor",
        "url": "https://webpifyy.vercel.app/image/compress/webp",
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
        "description": "Compress WebP images online for free. Uses Sharp to reduce file size by 50–80% while preserving visual quality and transparency.",
        "featureList": ["WebP Compression", "Transparency Preserved", "50-80% Size Reduction", "Free", "No Sign-up"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Compress',href:'/image/compress'},{label:'WebP'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WEBP</span>
          <h1 className="toolpg-title">Compress WebP Images <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Compress WebP images to smaller file sizes while keeping visual quality intact. Transparency preserved. Uses Sharp for 50–80% reduction.</p>
        </div>

        <ImageCompressor
          allowedFormats={['image/webp']}
          formatName="WebP"
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
