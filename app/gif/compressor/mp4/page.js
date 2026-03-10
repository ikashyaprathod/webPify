import PageShell from "@/components/PageShell";
import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

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
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">GIF to MP4 Converter</h1>
          <p className="page-subtitle">Convert animated GIFs to H.264 MP4 — up to 90% smaller, same visual quality.</p>
          <div className="use-tags">
            <span className="use-tag">Up to 90% Smaller</span>
            <span className="use-tag">H.264 Encoding</span>
            <span className="use-tag">No Uploads</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/gif/compressor">← GIF Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/gif">Compress GIF</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/webm">GIF to WebM</Link>
        </div>

        <GifCompressor defaultTask="gif-to-mp4" />

        <div className="info-box">
          <h2>Why convert GIF to MP4?</h2>
          <div className="info-box-grid">
            <div>
              GIF is one of the oldest image formats and extremely inefficient for animation. A 5 MB GIF can often be converted to a 0.5 MB MP4 with identical or better visual quality. MP4 videos use H.264 encoding which supports millions of colors (vs GIF's 256), smooth gradients, and advanced compression algorithms. The result loads faster and looks sharper.
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
