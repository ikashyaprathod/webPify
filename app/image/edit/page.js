import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Image Editor Online – Crop, Rotate, Watermark, Remove Background",
  description: "Free online image editing tools. Crop, rotate, flip, add watermarks, or remove backgrounds instantly. All tools run in your browser — no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit" },
  openGraph: {
    title: "Image Editor Online – Crop, Rotate, Watermark, Remove Background",
    description: "Free online image editing tools. All run in your browser — no uploads needed.",
    url: "https://webpifyy.vercel.app/image/edit",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Image Tools","item":"https://webpifyy.vercel.app/image"},{"@type":"ListItem","position":3,"name":"Edit"}]})
  },
};

const cards = [
  {
    href: "/image/edit/crop",
    icon: "✂️",
    title: "Crop Image",
    desc: "Draw a selection and crop any image instantly. Download PNG. Zero uploads.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Crop Image",
  },
  {
    href: "/image/edit/rotate",
    icon: "🔄",
    title: "Rotate & Flip",
    desc: "Rotate 90°, 180°, 270° or flip horizontally/vertically. Instant preview.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Rotate Image",
  },
  {
    href: "/image/edit/watermark",
    icon: "💧",
    title: "Add Watermark",
    desc: "Stamp custom text on any image. Control position, opacity, font size, and color.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Add Watermark",
  },
  {
    href: "/image/edit/remove-background",
    icon: "🤖",
    title: "Remove Background",
    desc: "AI-powered background removal. Get transparent PNG in seconds — no uploads.",
    gradient: "linear-gradient(135deg,#faf5ff,#f3e8ff)",
    cta: "Remove Background",
  },
  {
    href: "/image/edit/compare",
    icon: "⚖️",
    title: "Compare Tools",
    desc: "Not sure whether to compress or convert? Side-by-side tool comparison guide.",
    gradient: "linear-gradient(135deg,#fff1f2,#ffe4e6)",
    cta: "View Comparison",
  },
  {
    href: "/image/edit/color-picker",
    icon: "🎨",
    title: "Color Picker",
    desc: "Click any pixel in your image to pick its color. Get HEX, RGB, and HSL values instantly.",
    gradient: "linear-gradient(135deg,#fdf4ff,#f3e8ff)",
    cta: "Pick Color",
  },
  {
    href: "/image/edit/metadata",
    icon: "🔍",
    title: "Image Metadata",
    desc: "View EXIF data, GPS coordinates, camera settings, and file info from any image.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "View Metadata",
  },
  {
    href: "/image/edit/blur",
    icon: "🌀",
    title: "Blur Image",
    desc: "Apply Gaussian blur to any image. Adjustable intensity from 1 to 20.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Blur Image",
  },
  {
    href: "/image/edit/grayscale",
    icon: "⬛",
    title: "Convert to Grayscale",
    desc: "Convert any image to black and white. Instant conversion, free download.",
    gradient: "linear-gradient(135deg,#f9fafb,#f3f4f6)",
    cta: "Convert to B&W",
  },
  {
    href: "/image/edit/brightness",
    icon: "☀️",
    title: "Adjust Brightness",
    desc: "Brighten or darken images with precision brightness and saturation sliders.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Adjust Brightness",
  },
];

const faqs = [
  { q: "Do these image editing tools require any software?", a: "No. All tools run entirely in your browser using WebAssembly and Canvas APIs. Nothing is installed, and your images never leave your device." },
  { q: "What image formats are supported?", a: "PNG, JPEG, and WebP are supported by all tools. Some tools also accept GIF and BMP." },
  { q: "Is there a file size limit?", a: "There is no strict limit — tools run locally in your browser. Very large images above 50MP may take a few seconds to process on older devices." },
];

export default function ImageEditHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Image Editor" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools',href:'/image'},{label:'Edit'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">IMAGE EDITOR</span>
          <h1 className="hubv2-hero-title">
            Image <span className="hubv2-hero-title-accent">Editor</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Crop, rotate, watermark, and remove backgrounds. All tools run entirely in your browser — no server uploads, no sign-up required.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Tools
          </a>
        </div>

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

        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Editor Capabilities</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🛠️</span>
              <p className="hubv2-stat-label">Editing Tools</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">5</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">Crop · Rotate · More</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🔒</span>
              <p className="hubv2-stat-label">Privacy</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">100%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">Browser-only</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🖼️</span>
              <p className="hubv2-stat-label">Formats Supported</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">3+</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">PNG · JPEG · WebP</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Image Editing FAQ</h2>
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
