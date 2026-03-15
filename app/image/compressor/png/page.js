import PageShell from "@/components/PageShell";
import ImageCompressor from "@/components/ImageCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress PNG Images Online – Reduce File Size Without Quality Loss",
  description: "Compress PNG images online for free. Uses pngquant to reduce file size by 60–90% while preserving transparency and visual quality. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compressor/png" },
  keywords: ["compress png", "png compressor online", "reduce png file size", "png optimizer", "compress png without quality loss"],
  openGraph: {
    title: "Compress PNG Images Online – Reduce File Size Without Quality Loss",
    description: "Compress PNG images online for free. Reduce file size by 60–90% while preserving transparency. No sign-up required.",
    url: "https://webpifyy.vercel.app/image/compressor/png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PNG Images Online – Free PNG Compressor",
    description: "Reduce PNG file size by 60–90% without visible quality loss. Free, instant, no sign-up.",
  },
};

const faqs = [
  { q: "How do I compress a PNG without losing quality?", a: "Use lossless compression — our tool uses pngquant which reduces the color palette intelligently. You can achieve 60–80% size reduction without any visible difference at normal viewing distances." },
  { q: "Does compressing PNG affect transparency?", a: "No. PNG compression preserves the alpha channel (transparency) fully. Your transparent backgrounds and edges will be maintained after compression." },
  { q: "What is the best PNG compression method?", a: "pngquant-based lossy compression is the most effective for web use, typically reducing file size by 60–90%. It works by quantizing the color palette while maintaining visual fidelity." },
  { q: "How much can I compress a PNG file?", a: "Most PNG files compress 60–90% with pngquant. Photographic PNGs may see slightly less reduction. Screenshots and graphics with flat colors typically see the highest compression ratios." },
  { q: "Should I use PNG or WebP for web images?", a: "WebP is generally 25–35% smaller than PNG at the same quality. However, PNG is universally supported and essential when transparency or wide compatibility is required." },
];

export default function PNGCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Compressor", href: "/image/compressor" },
    { label: "PNG", href: "/image/compressor/png" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Compressor", "item": "https://webpifyy.vercel.app/image/compressor" },
          { "@type": "ListItem", "position": 4, "name": "PNG" }
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compressor/png#software",
        "name": "PNG Image Compressor",
        "url": "https://webpifyy.vercel.app/image/compressor/png",
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
        "description": "Compress PNG images online for free. Uses pngquant to reduce file size by 60–90% while preserving transparency.",
        "featureList": ["PNG Compression", "Transparency Preserved", "60-90% Size Reduction", "Free", "pngquant Algorithm"]
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
        <div className="toolpg-hero">
          <span className="toolpg-badge">Image Engine</span>
          <h1 className="toolpg-title">Compress PNG Images <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Compress PNG images to smaller file sizes while keeping visual quality intact. Transparency preserved. Uses pngquant for 60–90% reduction.</p>
        </div>

        <ImageCompressor
          allowedFormats={['image/png']}
          formatName="PNG"
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
