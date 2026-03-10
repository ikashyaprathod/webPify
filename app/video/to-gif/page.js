import VideoToGif from "@/components/VideoToGif";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Video to GIF Converter – Convert MP4 to GIF Online Free",
  description: "Convert MP4, WebM, or MOV videos to animated GIF online. Choose FPS, width, and color depth. Free, browser-based, no uploads.",
};

export default function VideoToGifPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Video to GIF", href: "/video/to-gif" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video to GIF", item: "https://webpify.vercel.app/video/to-gif" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Video to GIF Converter",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert MP4, WebM, and MOV videos to animated GIF in your browser. Powered by FFmpeg.wasm.",
      },
    ],
  };

  const faqs = [
    { q: "What video formats can I convert to GIF?", a: "MP4, WebM, and MOV are all supported." },
    { q: "Will my video be uploaded to a server?", a: "No. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
    { q: "What's the best FPS setting for GIFs?", a: "15 fps is a good balance between smoothness and file size. 10 fps creates smaller files; 20–24 fps creates smoother but larger GIFs." },
    { q: "What width should I choose?", a: "480px is the most common choice for web use. If you need a small sticker or icon, choose 240px." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Video to GIF Converter</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Turn any video clip into a high-quality animated GIF. Adjust FPS, width, and color count.</p>
          </div>

          <VideoToGif />

          <div style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/gif/compressor",      label: "GIF Compressor" },
                { href: "/gif/compressor/mp4",  label: "GIF to MP4" },
                { href: "/video/compressor",    label: "Video Compressor" },
                { href: "/image/compressor",    label: "Image Compressor" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ padding: "0.5rem 1rem", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", fontSize: "0.875rem", textDecoration: "none", color: "var(--foreground)" }}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="faq-section" style={{ marginTop: "3rem" }}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <details key={i} className="faq-details">
                <summary className="faq-question">{f.q}</summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
