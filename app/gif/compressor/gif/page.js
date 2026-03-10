import PageShell from "@/components/PageShell";
import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress GIF Online Free – Reduce GIF File Size Without Quality Loss",
  description: "Compress animated GIFs online with palettegen optimization. Reduce GIF file size by up to 60% while maintaining animation quality. Free browser-based tool.",
  alternates: { canonical: "https://webpify.vercel.app/gif/compressor/gif" },
  openGraph: {
    title: "Compress GIF Online Free – Reduce GIF File Size Without Quality Loss",
    description: "Compress animated GIFs online with palettegen optimization. Reduce GIF file size by up to 60% while maintaining animation quality. Free browser-based tool.",
    url: "https://webpify.vercel.app/gif/compressor/gif",
  },
};

export default function CompressGifPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "Compress GIF", href: "/gif/compressor/gif" },
  ];

  return (
    <>
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">GIF Compressor</h1>
          <p className="page-subtitle">Reduce GIF file size with advanced palette optimization. Keep your animations smooth and colorful.</p>
          <div className="use-tags">
            <span className="use-tag">Palette Optimization</span>
            <span className="use-tag">Animation Preserved</span>
            <span className="use-tag">Browser-based</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/gif/compressor">← GIF Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/mp4">GIF to MP4</Link>
          <span className="tool-nav-sep" />
          <Link href="/gif/compressor/webm">GIF to WebM</Link>
        </div>

        <GifCompressor defaultTask="gif-compress" />
      </PageShell>
    </>
  );
}
