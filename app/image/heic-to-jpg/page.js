import PageShell from "@/components/PageShell";
import HEICConverter from "@/components/HEICConverter";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "HEIC to JPG Converter – Free Online, No Upload",
  description: "Convert iPhone HEIC photos to JPG instantly in your browser. No uploads, no signup, batch supported. Free forever.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/heic-to-jpg" },
  openGraph: {
    title: "HEIC to JPG Converter – Free Online",
    description: "Convert iPhone HEIC photos to JPG instantly. Browser-based, zero uploads.",
    url: "https://webpifyy.vercel.app/image/heic-to-jpg",
  },
};

export default function HEICToJPGPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "HEIC to JPG" }]} />
      <div className="page-hero">
        <span className="page-badge">📱 iPhone Photos</span>
        <h1 className="page-title">HEIC to JPG Converter</h1>
        <p className="page-subtitle">Convert your iPhone &amp; iPad HEIC photos to universal JPG format instantly. All processing happens in your browser — your files never leave your device.</p>
      </div>
      <HEICConverter />
    </PageShell>
  );
}
