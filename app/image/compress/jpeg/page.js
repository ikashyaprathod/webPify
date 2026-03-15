import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageCompressor from "@/components/ImageCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress JPEG Images Online – Reduce JPG File Size Free",
  description: "Compress JPEG and JPG images online for free. Uses mozjpeg to reduce file size by 40–90% while maintaining visual quality. Instant, no sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compress/jpeg" },
  keywords: ["compress jpeg", "compress jpg online", "reduce jpeg file size", "jpg compressor", "compress jpeg without quality loss"],
  openGraph: {
    title: "Compress JPEG Images Online – Reduce JPG File Size Free",
    description: "Compress JPEG images online for free. Reduce file size by 40–90% with mozjpeg. No sign-up required.",
    url: "https://webpifyy.vercel.app/image/compress/jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress JPEG Images Online – Free JPG Compressor",
    description: "Reduce JPEG file size by 40–90% without visible quality loss. Free, instant, no sign-up.",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Compress","item":"https://webpifyy.vercel.app/image/compress"},{"@type":"ListItem","position":4,"name":"JPEG"}]})
  },
};

const faqs = [
  { q: "How do I compress a JPEG without losing quality?", a: "Use quality settings between 75–85%. Our tool uses mozjpeg, an optimized JPEG encoder that produces smaller files at the same perceived quality compared to standard libjpeg. You can reduce file size by 40–70% with minimal visible difference." },
  { q: "What is the best quality setting for JPEG compression?", a: "Quality 80–85 is the sweet spot for most web images — good visual quality with significant file size reduction. For photos where quality matters most, use 90+. For thumbnails or previews, 60–75 is usually sufficient." },
  { q: "Is JPEG compression reversible?", a: "No. JPEG compression is lossy — each compression reduces quality slightly and cannot be undone. Always keep the original file. For repeated editing, use PNG which is lossless." },
  { q: "How much can I compress a JPEG file?", a: "JPEG files typically compress 40–90% depending on the original quality and content. A 2MB photo can often be reduced to 200–400KB with no noticeable quality loss at screen viewing sizes." },
  { q: "Should I use JPEG or WebP for photos?", a: "WebP provides 25–35% better compression than JPEG at the same quality. If you need broad browser compatibility, JPEG is safest. For modern websites targeting Chrome/Edge/Firefox, WebP is the better choice." },
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
        "description": "Compress JPEG images online for free. Uses mozjpeg to reduce file size by 40–90% while maintaining visual quality.",
        "featureList": ["JPEG Compression", "mozjpeg Algorithm", "40-90% Size Reduction", "Free", "No Sign-up"]
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
