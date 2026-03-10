import ImageResizer from "@/components/ImageResizer";

export const metadata = {
  title: "Resize Image Online Free – Bulk Image Resizer PNG JPEG WebP",
  description: "Resize images online for free. Supports PNG, JPEG, WebP, AVIF. Set exact width and height, choose fit mode. Fast server-side processing.",
};

export default function ResizeImageOnlinePage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Resize Image Online</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Resize PNG, JPEG, WebP, and AVIF images to any dimension. Batch support included.</p>
        </div>
        <ImageResizer />
        <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(0,0,0,0.03)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>About the Fit Modes</h2>
          <ul style={{ fontSize: "0.9375rem", lineHeight: 2, opacity: 0.85, paddingLeft: "1.25rem" }}>
            <li><strong>Fit Inside</strong> — Scales image down to fit within your dimensions while preserving aspect ratio. Never upscales.</li>
            <li><strong>Cover</strong> — Fills the target area completely, cropping edges if needed. Good for thumbnails.</li>
            <li><strong>Contain</strong> — Adds transparent/white borders to make the image fit exactly without cropping.</li>
            <li><strong>Fill</strong> — Stretches image to exactly match your dimensions. May distort aspect ratio.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
