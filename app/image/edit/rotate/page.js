import PageShell from "@/components/PageShell";
import ImageRotate from "@/components/ImageRotate";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Rotate & Flip Image Free Online – PNG, JPEG, WebP",
  description: "Rotate images 90°, 180°, 270° or flip horizontally/vertically. Free, instant, browser-based. No uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/rotate" },
  openGraph: {
    title: "Rotate & Flip Image Free Online",
    description: "Rotate 90°/180° or flip any image instantly in your browser.",
    url: "https://webpifyy.vercel.app/image/edit/rotate",
  },
};

export default function ImageRotatePage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Rotate & Flip" }]} />
      <div className="page-hero">
        <span className="page-badge">ROTATE</span>
        <h1 className="page-title">Rotate & Flip Image</h1>
        <p className="page-subtitle">Rotate images 90°, 180°, or 270°. Flip horizontally or vertically. Instant preview. Download as PNG. Zero server uploads.</p>
      </div>
      <ImageRotate />
    </PageShell>
  );
}
