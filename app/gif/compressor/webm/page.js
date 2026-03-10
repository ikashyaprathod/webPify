import PageShell from "@/components/PageShell";
import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "GIF to WebM Converter – Convert GIF to WebM Online Free",
  description: "Convert animated GIF to WebM video online. VP9 encoding, excellent quality, tiny file size. No uploads — 100% browser-based.",
};

export default function GifToWebmPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "GIF to WebM", href: "/gif/compressor/webm" },
  ];

  return (
    <>
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">GIF to WebM Converter</h1>
          <p className="page-subtitle">Convert animated GIFs to VP9 WebM — ideal for web, Discord, and modern browsers.</p>
          <div className="use-tags">
            <span className="use-tag">VP9 Encoding</span>
            <span className="use-tag">Web Optimized</span>
            <span className="use-tag">No Uploads</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/gif/compressor">← GIF Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/gif">Compress GIF</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/mp4">GIF to MP4</Link>
        </div>

        <GifCompressor defaultTask="gif-to-webm" />
      </PageShell>
    </>
  );
}
