import PageShell from "@/components/PageShell";
import ImageCrop from "@/components/ImageCrop";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Crop Image Free Online – PNG, JPEG, WebP",
  description: "Crop images to any size online. Draw a selection, crop instantly, download PNG. Free, browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/crop" },
  openGraph: {
    title: "Crop Image Free Online",
    description: "Draw a selection and crop any image instantly. Zero uploads.",
    url: "https://webpifyy.vercel.app/image/edit/crop",
  },
};

export default function ImageCropPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Crop Image" }]} />
      <div className="page-hero">
        <span className="page-badge">CROP</span>
        <h1 className="page-title">Crop Image Online</h1>
        <p className="page-subtitle">Draw a crop selection on any image, preview the result, and download instantly. Supports PNG, JPEG, WebP. Everything runs in your browser.</p>
      </div>
      <ImageCrop />
    </PageShell>
  );
}
