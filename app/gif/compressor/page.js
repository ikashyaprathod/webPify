import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "GIF Compressor – Compress GIF & Convert to MP4/WebM Online",
  description: "Compress animated GIFs or convert them to MP4/WebM. Free, fast, browser-based. No upload needed.",
};

const cards = [
  { href: "/gif/compressor/gif",  icon: "🗜️", title: "Compress GIF",  desc: "Shrink GIF size with palettegen optimization" },
  { href: "/gif/compressor/mp4",  icon: "🎬", title: "GIF to MP4",    desc: "Convert GIF to H.264 MP4 — up to 90% smaller" },
  { href: "/gif/compressor/webm", icon: "🌐", title: "GIF to WebM",   desc: "Convert GIF to VP9 WebM for web use" },
  { href: "/video/to-gif",        icon: "🎥", title: "Video to GIF",  desc: "Convert MP4/WebM/MOV clips to animated GIF" },
];

const ACCENT = "linear-gradient(90deg,#ec4899,#f472b6)";
const ICON_BG = "rgba(236,72,153,0.08)";

export default function GifCompressorHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "GIF Compressor", item: "https://webpify.vercel.app/gif/compressor" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "GIF Compressor",
        applicationCategory: "ImageProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress GIF files or convert them to MP4/WebM for smaller size and better quality.",
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
          <h1 className="page-title">GIF Compressor</h1>
          <p className="page-subtitle">
            Compress animated GIFs or convert them to video format for dramatically smaller files.
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
          <h2>Why Convert GIF to Video?</h2>
          <div className="info-box-grid">
            <div><strong>📉 Up to 90% Smaller</strong><br /><span>MP4 and WebM are far more efficient than GIF.</span></div>
            <div><strong>🎨 Better Quality</strong><br /><span>Video formats support millions of colors vs. GIF's 256.</span></div>
            <div><strong>🔒 Privacy-First</strong><br /><span>Everything processed in your browser — no uploads.</span></div>
          </div>
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/video/compressor" className="tool-chip">Video Compressor</Link>
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/svg-optimizer" className="tool-chip">SVG Optimizer</Link>
          <Link href="/image/resizer" className="tool-chip">Image Resizer</Link>
        </div>
      </PageShell>
    </>
  );
}
