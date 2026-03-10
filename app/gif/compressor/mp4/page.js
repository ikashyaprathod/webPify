import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "GIF to MP4 Converter – Convert Animated GIF to MP4 Online Free",
  description: "Convert animated GIF to MP4 video online. Up to 90% smaller file size. Free, fast, browser-based — your files never leave your device.",
};

export default function GifToMp4Page() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "GIF to MP4", href: "/gif/compressor/mp4" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "GIF Compressor", item: "https://webpify.vercel.app/gif/compressor" },
          { "@type": "ListItem", position: 3, name: "GIF to MP4" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "GIF to MP4 Converter",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert animated GIF files to MP4 video in your browser. No uploads. Powered by FFmpeg.wasm.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>GIF to MP4 Converter</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Convert animated GIFs to H.264 MP4 — up to 90% smaller, same visual quality.</p>
          </div>
          <GifCompressor defaultTask="gif-to-mp4" />
          <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(0,112,243,0.04)", border: "1px solid rgba(0,112,243,0.15)", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>Why convert GIF to MP4?</h2>
            <p style={{ fontSize: "0.9375rem", opacity: 0.85, lineHeight: 1.7 }}>
              GIF is one of the oldest image formats and extremely inefficient for animation. A 5 MB GIF can often be converted to a 0.5 MB MP4 with identical or better visual quality. MP4 videos use H.264 encoding which supports millions of colors (vs GIF's 256), smooth gradients, and advanced compression algorithms. The result loads faster and looks sharper.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
