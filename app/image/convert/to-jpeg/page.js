import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to JPEG Online – PNG/WebP to JPG Free",
  description: "Convert PNG, WebP, and other images to JPEG/JPG format online for free. Maximum compatibility across all devices and platforms. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/to-jpeg" },
  keywords: ["convert to jpeg", "png to jpeg", "webp to jpg", "image to jpg converter", "convert image to jpeg online free"],
  openGraph: {
    title: "Convert Images to JPEG Online – PNG/WebP to JPG Free",
    description: "Convert PNG, WebP, and other images to JPEG format online. Maximum compatibility. Free, no sign-up.",
    url: "https://webpifyy.vercel.app/image/convert/to-jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Images to JPEG Online – Free JPG Converter",
    description: "Convert PNG/WebP to JPEG for maximum compatibility. Free, instant, no sign-up required.",
  },
};

const faqs = [
  { q: "When should I convert to JPEG?", a: "Use JPEG when you need the widest device compatibility (email clients, older software, social media), when file size matters more than transparency, or when sharing photographs where JPEG's compression is efficient." },
  { q: "Does JPEG support transparency?", a: "No. JPEG does not support transparency. If you convert a PNG with transparent areas to JPEG, the transparent parts will be filled with white (or another background color). Use PNG or WebP if transparency is needed." },
  { q: "Will converting PNG to JPEG lose quality?", a: "Yes, JPEG is a lossy format. Converting a PNG to JPEG will reduce quality slightly depending on the quality setting chosen. Quality 85–95 preserves excellent visual quality with moderate file size reduction." },
  { q: "Is JPEG the same as JPG?", a: "Yes, JPEG and JPG are the same format. JPG was the filename extension used on older Windows systems (which required 3-character extensions). JPEG is the full format name. Both extensions refer to the same format." },
  { q: "What quality should I use when converting to JPEG?", a: "For web images, quality 75–85 provides a good balance of size and quality. For print-ready images or high-quality photography, use 90–95. For very small thumbnails, 60–70 is acceptable." },
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
        "description": "Convert PNG, WebP, and other images to JPEG format online for free. Maximum compatibility across all devices and platforms.",
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
