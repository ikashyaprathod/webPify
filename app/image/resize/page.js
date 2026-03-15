import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Image Resizer Online – Resize PNG, JPEG, WebP Free",
  description: "Resize images to exact dimensions online. Supports PNG, JPEG, and WebP. Choose fit mode, width, height. Fast server-side processing with Sharp. Free, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/resize" },
  keywords: ["image resizer", "resize image online", "change image size", "resize png jpeg webp", "image dimensions changer free"],
  openGraph: {
    title: "Image Resizer Online – Resize PNG, JPEG, WebP Free",
    description: "Resize images to exact dimensions online. PNG, JPEG, WebP supported. 4 fit modes. Free, no sign-up.",
    url: "https://webpifyy.vercel.app/image/resize",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Resizer Online – Resize PNG, JPEG, WebP Free",
    description: "Resize images to any dimension with 4 fit modes. Free, instant, no sign-up required.",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Resize"}]})
  },
};

const cards = [
  {
    href: "/image/resize/png",
    icon: "🖼️",
    title: "Resize PNG",
    desc: "Resize PNG images losslessly to exact dimensions. Choose from 4 fit modes with precision control.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Resize PNG",
  },
  {
    href: "/image/resize/jpeg",
    icon: "📷",
    title: "Resize JPEG",
    desc: "Resize JPEG images with quality control. Perfect for social media, thumbnails, and product images.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Resize JPEG",
  },
  {
    href: "/image/resize/webp",
    icon: "⚡",
    title: "Resize WebP",
    desc: "Resize modern WebP images while maintaining the format's compression advantages.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Resize WebP",
  },
];

const faqs = [
  { q: "What fit modes are available for image resizing?", a: "We offer four modes: Fit Inside (maintains aspect ratio, fits within bounds), Cover (fills exact dimensions, may crop), Contain (adds letterbox padding), and Fill (stretches to exact dimensions). Fit Inside is the most commonly used for resizing without distortion." },
  { q: "Can I resize images in bulk?", a: "Yes. Upload multiple images at once and set a single target dimension. All images will be resized with the same settings and can be downloaded individually or all at once." },
  { q: "Will resizing images lose quality?", a: "PNG resizing is lossless and maintains full quality. JPEG resizing re-encodes the image which may slightly reduce quality (our tool uses quality 85 by default). WebP resizing also re-encodes with quality 80 by default." },
  { q: "What dimensions should I use for social media?", a: "Common sizes: Instagram post (1080×1080), Instagram story (1080×1920), Twitter/X header (1500×500), Facebook cover (851×315), LinkedIn banner (1584×396), YouTube thumbnail (1280×720)." },
  { q: "Can I resize images without changing the aspect ratio?", a: "Yes. Use Fit Inside mode which automatically maintains the original aspect ratio. The image will be scaled proportionally to fit within your specified dimensions." },
];

export default function ImageResizerHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/image" },
    { label: "Resizer", href: "/image/resize" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", "position": 2, "name": "Image Tools", "item": "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", "position": 3, "name": "Image Resizer", "item": "https://webpifyy.vercel.app/image/resize" },
        ]
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/resize#software",
        "name": "Image Resizer",
        "url": "https://webpifyy.vercel.app/image/resize",
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
        "description": "Resize PNG, JPEG, and WebP images online with precise dimension control. 4 fit modes. Free, server-side processing.",
        "featureList": ["PNG Resizing", "JPEG Resizing", "WebP Resizing", "4 Fit Modes", "Bulk Resize", "Free"]
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Resize'}]} />

        {/* ── Hero ── */}
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">IMAGE RESIZER</span>
          <h1 className="hubv2-hero-title">
            Smart Image <span className="hubv2-hero-title-accent">Resizer</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Resize images to any dimension with precision. 4 fit modes — Fit Inside, Cover, Contain, and Fill. Batch resize for social media and web platforms.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Resizers
          </a>
        </div>

        {/* ── Core Tools ── */}
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left">
              <span className="hubv2-section-hd-icon">⊞</span>
              <h2 className="hubv2-section-hd-title">Core Tools</h2>
            </div>
            <div className="hubv2-section-hd-actions">
              <span className="hubv2-section-hd-btn">≡</span>
              <span className="hubv2-section-hd-btn">⊞</span>
            </div>
          </div>
          <div className="hubv2-grid">
            {cards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header">
                  <div className="hubv2-card-icon-box">{card.icon}</div>
                </div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Resizer Capabilities</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">📐</span>
              <p className="hubv2-stat-label">Fit Modes</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">4</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">Inside · Cover · Contain · Fill</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🖼️</span>
              <p className="hubv2-stat-label">Formats Supported</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">3</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">PNG · JPEG · WebP</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🎯</span>
              <p className="hubv2-stat-label">Dimension Precision</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">1px</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">Exact control</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Image Resizing FAQ</h2>
          {faqs.map((f, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </section>
      </PageShell>
    </>
  );
}
