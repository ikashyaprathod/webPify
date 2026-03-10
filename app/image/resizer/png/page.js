import PageShell from "@/components/PageShell";
import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "PNG Image Resizer – Resize PNG Online Free",
  description: "Resize PNG images online to exact dimensions. Choose fit mode, maintain aspect ratio. Fast, free, server-side processing with Sharp.",
};

export default function ResizePngPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
    { label: "PNG", href: "/image/resizer/png" },
  ];

  return (
    <>
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">PNG Image Resizer</h1>
          <p className="page-subtitle">Resize PNG images to any width and height. Preserves transparency.</p>
          <div className="use-tags">
            <span className="use-tag">Exact Dimensions</span>
            <span className="use-tag">Transparency Preserved</span>
            <span className="use-tag">Bulk Resize</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/resizer">← Resizer Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/jpeg">Resize JPEG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/webp">Resize WebP</Link>
        </div>

        <ImageResizer allowedFormats={["image/png"]} />
      </PageShell>
    </>
  );
}
