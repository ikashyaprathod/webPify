import GifCompressor from "@/components/GifCompressor";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Compress GIF Online Free – Reduce GIF File Size Without Quality Loss",
  description: "Compress animated GIFs online with palettegen optimization. Reduce GIF file size by up to 60% while maintaining animation quality. Free browser-based tool.",
};

export default function CompressGifPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "GIF Compressor", href: "/gif/compressor" },
    { label: "Compress GIF", href: "/gif/compressor/gif" },
  ];

  return (
    <>
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>GIF Compressor</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Reduce GIF file size with advanced palette optimization. Keep your animations smooth and colorful.</p>
          </div>
          <GifCompressor defaultTask="gif-compress" />
        </div>
      </div>
    </>
  );
}
