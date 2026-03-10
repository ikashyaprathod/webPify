import PageShell from "@/components/PageShell";
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
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">Video to GIF Converter</h1>
          <p className="page-subtitle">Turn any video clip into a high-quality animated GIF. Adjust FPS, width, and color count.</p>
          <div className="use-tags">
            <span className="use-tag">MP4 to GIF</span>
            <span className="use-tag">No Uploads</span>
            <span className="use-tag">Custom FPS & Size</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/gif/compressor">← GIF Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/mp4">GIF to MP4</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor">Video Compressor</Link>
        </div>

        <VideoToGif />

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/gif/compressor" className="tool-chip">GIF Compressor</Link>
          <Link href="/gif/compressor/mp4" className="tool-chip">GIF to MP4</Link>
          <Link href="/video/compressor" className="tool-chip">Video Compressor</Link>
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </PageShell>
    </>
  );
}
