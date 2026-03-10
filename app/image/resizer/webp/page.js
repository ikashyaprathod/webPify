import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "WebP Image Resizer – Resize WebP Images Online Free",
  description: "Resize WebP images online to any dimension. Maintains WebP format with quality control. Free, fast, server-side processing.",
};

export default function ResizeWebpPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
    { label: "WebP", href: "/image/resizer/webp" },
  ];
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>WebP Image Resizer</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Resize WebP images to precise dimensions. Output stays in WebP format.</p>
        </div>
        <ImageResizer allowedFormats={["image/webp"]} />
      </div>
    </div>
  );
}
