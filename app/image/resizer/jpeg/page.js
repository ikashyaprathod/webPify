import PageShell from "@/components/PageShell";
import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "JPEG Image Resizer – Resize JPEG/JPG Online Free",
  description: "Resize JPEG and JPG images online to exact dimensions. Choose fit mode, maintain aspect ratio. Fast, free server-side processing.",
  alternates: { canonical: "https://webpify.vercel.app/image/resizer/jpeg" },
  openGraph: {
    title: "JPEG Image Resizer – Resize JPEG/JPG Online Free",
    description: "Resize JPEG and JPG images online to exact dimensions. Choose fit mode, maintain aspect ratio. Fast, free server-side processing.",
    url: "https://webpify.vercel.app/image/resizer/jpeg",
  },
};

export default function ResizeJpegPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
    { label: "JPEG", href: "/image/resizer/jpeg" },
  ];

  return (
    <>
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">JPEG Image Resizer</h1>
          <p className="page-subtitle">Resize JPEG photos to any width and height. Re-encodes with mozjpeg quality.</p>
          <div className="use-tags">
            <span className="use-tag">Exact Dimensions</span>
            <span className="use-tag">Quality Control</span>
            <span className="use-tag">Bulk Resize</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/resizer">← Resizer Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/png">Resize PNG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/webp">Resize WebP</Link>
        </div>

        <ImageResizer allowedFormats={["image/jpeg", "image/jpg"]} />
      </PageShell>
    </>
  );
}
