import ImageResizer from "@/components/ImageResizer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "JPEG Image Resizer – Resize JPEG/JPG Online Free",
  description: "Resize JPEG and JPG images online to exact dimensions. Choose fit mode, maintain aspect ratio. Fast, free server-side processing.",
};

export default function ResizeJpegPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Image Resizer", href: "/image/resizer" },
    { label: "JPEG", href: "/image/resizer/jpeg" },
  ];
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <Breadcrumb items={breadcrumbs} />
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>JPEG Image Resizer</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Resize JPEG photos to any width and height. Re-encodes with mozjpeg quality.</p>
        </div>
        <ImageResizer allowedFormats={["image/jpeg", "image/jpg"]} />
      </div>
    </div>
  );
}
