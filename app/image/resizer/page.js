import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Image Resizer Online – Resize PNG, JPEG, WebP, AVIF Free",
  description: "Resize images to exact dimensions online. Supports PNG, JPEG, WebP, and AVIF. Choose fit mode, width, height. Fast server-side processing.",
};

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
      <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "860px", width: "100%" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>Image Resizer</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8, marginBottom: "2.5rem" }}>
              Resize images to any dimension. Supports bulk resizing with fit mode control.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {[
                { href: "/image/resizer/png",  icon: "🖼️", label: "Resize PNG",  desc: "Resize PNG images losslessly" },
                { href: "/image/resizer/jpeg", icon: "📷", label: "Resize JPEG", desc: "Resize JPEG with quality control" },
                { href: "/image/resizer/webp", icon: "⚡", label: "Resize WebP", desc: "Resize modern WebP images" },
              ].map(card => (
                <a key={card.href} href={card.href} className="compressor-card">
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{card.icon}</div>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.375rem" }}>{card.label}</h2>
                  <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>{card.desc}</p>
                </a>
              ))}
            </div>

            <div style={{ marginTop: "2rem", fontSize: "0.875rem", opacity: 0.7 }}>
              All formats supported on the main tool. <Link href="/image/resizer/png" style={{ color: "var(--primary)", textDecoration: "underline" }}>Open Image Resizer</Link>
            </div>
          </div>

          <div style={{ background: "rgba(0,112,243,0.04)", border: "1px solid rgba(0,112,243,0.15)", borderRadius: "12px", padding: "1.5rem 2rem", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>Fit Modes Explained</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "left" }}>
              <div><strong>Fit Inside</strong> — Keeps aspect ratio, image fits within your dimensions</div>
              <div><strong>Cover</strong> — Fills dimensions exactly, may crop edges</div>
              <div><strong>Contain</strong> — Adds letterbox to fit inside dimensions</div>
              <div><strong>Fill</strong> — Stretches to exact dimensions (may distort)</div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/image/compressor", label: "Image Compressor" },
                { href: "/image/converter",  label: "Image Converter" },
                { href: "/svg-optimizer",    label: "SVG Optimizer" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ padding: "0.5rem 1rem", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", fontSize: "0.875rem", textDecoration: "none", color: "var(--foreground)" }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compressor-card { padding: 1.5rem; border: 2px solid #e0e0e0; border-radius: 12px; text-decoration: none; color: inherit; transition: all 0.3s ease; display: block; text-align: center; }
        .compressor-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        @media (prefers-color-scheme: dark) { .compressor-card { border-color: rgba(255,255,255,0.15); } }
      `}} />
    </>
  );
}
