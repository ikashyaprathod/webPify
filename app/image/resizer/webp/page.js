import PageShell from "@/components/PageShell";
import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "WebP Image Resizer – Resize WebP Images Online Free",
  description: "Resize WebP images online to any dimension. Maintains WebP format with quality control. Free, fast, server-side processing.",
  alternates: { canonical: "https://webpify.vercel.app/image/resizer/webp" },
  openGraph: {
    title: "WebP Image Resizer – Resize WebP Images Online Free",
    description: "Resize WebP images online to any dimension. Maintains WebP format with quality control. Free, fast, server-side processing.",
    url: "https://webpify.vercel.app/image/resizer/webp",
  },
};

export default function ResizeWebpPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
    { label: "WebP", href: "/image/resizer/webp" },
  ];

  return (
    <>
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">WebP Image Resizer</h1>
          <p className="page-subtitle">Resize WebP images to precise dimensions. Output stays in WebP format.</p>
          <div className="use-tags">
            <span className="use-tag">Exact Dimensions</span>
            <span className="use-tag">WebP Output</span>
            <span className="use-tag">Bulk Resize</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/resizer">← Resizer Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/png">Resize PNG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/resizer/jpeg">Resize JPEG</Link>
        </div>

        <ImageResizer allowedFormats={["image/webp"]} />
      </PageShell>
    </>
  );
}
