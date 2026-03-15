import PageShell from "@/components/PageShell";
import ImageWatermark from "@/components/ImageWatermark";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Add Watermark to Image Free Online – Text Watermark",
  description: "Add a text watermark to any image online. Choose position, size, opacity, color. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/watermark" },
  openGraph: {
    title: "Add Watermark to Image Free Online",
    description: "Add custom text watermarks to images. Choose position, opacity, font size. Zero uploads.",
    url: "https://webpifyy.vercel.app/image/edit/watermark",
  },
};

export default function WatermarkPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Add Watermark" }]} />
      <div className="page-hero">
        <span className="page-badge">WATERMARK</span>
        <h1 className="page-title">Add Watermark to Image</h1>
        <p className="page-subtitle">Stamp a custom text watermark on any image. Control position, font size, opacity, and color. Instant live preview — all in your browser.</p>
      </div>
      <ImageWatermark />
    </PageShell>
  );
}
