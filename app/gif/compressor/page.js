import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "GIF Compressor – Compress GIF & Convert to MP4/WebM Online",
  description: "Compress animated GIFs or convert them to MP4/WebM. Free, fast, browser-based. No upload needed.",
};

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
      <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "860px", width: "100%" }}>
          <Breadcrumb items={breadcrumbs} />

          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>GIF Compressor</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8, marginBottom: "2.5rem" }}>
              Compress animated GIFs or convert them to video format for dramatically smaller files.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
              <a href="/gif/compressor/gif" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🗜️</div>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 600, marginBottom: "0.5rem" }}>Compress GIF</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Shrink GIF size with palettegen optimization</p>
              </a>
              <a href="/gif/compressor/mp4" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎬</div>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 600, marginBottom: "0.5rem" }}>GIF to MP4</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert GIF to H.264 MP4 — up to 90% smaller</p>
              </a>
              <a href="/gif/compressor/webm" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌐</div>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 600, marginBottom: "0.5rem" }}>GIF to WebM</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert GIF to VP9 WebM for web use</p>
              </a>
              <a href="/video/to-gif" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎥</div>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 600, marginBottom: "0.5rem" }}>Video to GIF</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert MP4/WebM/MOV clips to animated GIF</p>
              </a>
            </div>

            <div style={{ marginTop: "2rem", fontSize: "0.875rem", opacity: 0.7 }}>
              Need image tools? <Link href="/image/compressor" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compress Images</Link>
            </div>
          </div>

          <div style={{ background: "rgba(0,112,243,0.04)", border: "1px solid rgba(0,112,243,0.15)", borderRadius: "12px", padding: "1.5rem 2rem", marginBottom: "3rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>Why Convert GIF to Video?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div><strong>📉 Up to 90% Smaller</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>MP4 and WebM are far more efficient than GIF.</span></div>
              <div><strong>🎨 Better Quality</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>Video formats support millions of colors vs. GIF's 256.</span></div>
              <div><strong>🔒 Privacy-First</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>Everything processed in your browser — no uploads.</span></div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/image/compressor", label: "Image Compressor" },
                { href: "/video/compressor", label: "Video Compressor" },
                { href: "/svg-optimizer", label: "SVG Optimizer" },
                { href: "/image/resizer", label: "Image Resizer" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ padding: "0.5rem 1rem", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", fontSize: "0.875rem", textDecoration: "none", color: "var(--foreground)" }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compressor-card { padding: 2rem; border: 2px solid #e0e0e0; border-radius: 12px; text-decoration: none; color: inherit; transition: all 0.3s ease; display: block; }
        .compressor-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        @media (prefers-color-scheme: dark) { .compressor-card { border-color: rgba(255,255,255,0.15); } }
      `}} />
    </>
  );
}
