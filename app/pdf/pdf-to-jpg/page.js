import PageShell from "@/components/PageShell";
import PDFToJPG from "@/components/PDFToJPG";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "PDF to JPG Converter – Free Online, No Upload",
  description: "Convert PDF pages to JPG images online. Each page becomes a separate high-quality JPG. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/pdf-to-jpg" },
  openGraph: {
    title: "PDF to JPG Converter – Free Online",
    description: "Convert every PDF page to a JPG image instantly. No uploads, free forever.",
    url: "https://webpifyy.vercel.app/pdf/pdf-to-jpg",
  },
};

export default function PDFToJPGPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF", href: "/pdf" }, { label: "PDF to JPG" }]} />
      <div className="page-hero">
        <span className="page-badge">PDF</span>
        <h1 className="page-title">PDF to JPG Converter</h1>
        <p className="page-subtitle">Convert every page of a PDF into a high-quality JPG image. Choose resolution and quality, then download all pages as a ZIP. Runs entirely in your browser — no server, no uploads.</p>
      </div>
      <PDFToJPG />
    </PageShell>
  );
}
