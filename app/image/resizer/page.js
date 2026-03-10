import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Image Resizer Online – Resize PNG, JPEG, WebP, AVIF Free",
  description: "Resize images to exact dimensions online. Supports PNG, JPEG, WebP, and AVIF. Choose fit mode, width, height. Fast server-side processing.",
  alternates: { canonical: "https://webpify.vercel.app/image/resizer" },
  openGraph: {
    title: "Image Resizer Online – Resize PNG, JPEG, WebP, AVIF Free",
    description: "Resize images to exact dimensions online. Supports PNG, JPEG, WebP, and AVIF. Choose fit mode, width, height. Fast server-side processing.",
    url: "https://webpify.vercel.app/image/resizer",
  },
};

const cards = [
  { href: "/image/resizer/png",  icon: "🖼️", title: "Resize PNG",  desc: "Resize PNG images losslessly" },
  { href: "/image/resizer/jpeg", icon: "📷", title: "Resize JPEG", desc: "Resize JPEG with quality control" },
  { href: "/image/resizer/webp", icon: "⚡", title: "Resize WebP", desc: "Resize modern WebP images" },
];

const ACCENT = "linear-gradient(90deg,#10b981,#34d399)";
const ICON_BG = "rgba(16,185,129,0.08)";

export default function ImageResizerHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Resizer", item: "https://webpify.vercel.app/image/resizer" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Image Resizer",
        applicationCategory: "ImageProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Resize PNG, JPEG, WebP, and AVIF images online with precise dimension control.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <div className="page-badge">Free · Browser-based · No Upload</div>
          <h1 className="page-title">Image Resizer</h1>
          <p className="page-subtitle">
            Resize images to any dimension. Supports bulk resizing with fit mode control.
          </p>
        </div>

        <div className="hub-grid">
          {cards.map(card => (
            <a key={card.href} href={card.href} className="hub-card"
               style={{ "--hub-accent": ACCENT, "--hub-icon-bg": ICON_BG }}>
              <div className="hub-card-icon">{card.icon}</div>
              <div className="hub-card-title">{card.title}</div>
              <div className="hub-card-desc">{card.desc}</div>
            </a>
          ))}
        </div>

        <div className="info-box">
          <h2>Fit Modes Explained</h2>
          <div className="info-box-grid">
            <div><strong>Fit Inside</strong> — Keeps aspect ratio, image fits within your dimensions</div>
            <div><strong>Cover</strong> — Fills dimensions exactly, may crop edges</div>
            <div><strong>Contain</strong> — Adds letterbox to fit inside dimensions</div>
            <div><strong>Fill</strong> — Stretches to exact dimensions (may distort)</div>
          </div>
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/image/converter" className="tool-chip">Image Converter</Link>
          <Link href="/svg-optimizer" className="tool-chip">SVG Optimizer</Link>
        </div>
      </PageShell>
    </>
  );
}
