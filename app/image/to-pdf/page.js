import PageShell from "@/components/PageShell";
import ImageToPDF from "@/components/ImageToPDF";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Image to PDF Converter – Free Online, Multiple Images",
  description: "Convert images to PDF online. Combine multiple JPG, PNG, WebP images into one PDF. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/to-pdf" },
  openGraph: {
    title: "Image to PDF Converter – Free Online",
    description: "Convert multiple images to a single PDF instantly. No uploads, free forever.",
    url: "https://webpifyy.vercel.app/image/to-pdf",
  },
};

export default function ImageToPDFPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "Image to PDF" }]} />
      <div className="page-hero">
        <span className="page-badge">📄 PDF</span>
        <h1 className="page-title">Image to PDF Converter</h1>
        <p className="page-subtitle">Combine multiple images into a single PDF document. Choose page size, orientation, and order. Everything runs in your browser — no server, no uploads.</p>
      </div>
      <ImageToPDF />
    </PageShell>
  );
}
