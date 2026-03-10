import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";

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
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>PNG Image Resizer</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Resize PNG images to any width and height. Preserves transparency.</p>
        </div>
        <ImageResizer allowedFormats={["image/png"]} />
      </div>
    </div>
  );
}
