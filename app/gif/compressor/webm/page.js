import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "GIF to WebM Converter – Convert GIF to WebM Online Free",
  description: "Convert animated GIF to WebM video online. VP9 encoding, excellent quality, tiny file size. No uploads — 100% browser-based.",
};

export default function GifToWebmPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "GIF to WebM", href: "/gif/compressor/webm" },
  ];

  return (
    <>
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>GIF to WebM Converter</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Convert animated GIFs to VP9 WebM — ideal for web, Discord, and modern browsers.</p>
          </div>
          <GifCompressor defaultTask="gif-to-webm" />
        </div>
      </div>
    </>
  );
}
