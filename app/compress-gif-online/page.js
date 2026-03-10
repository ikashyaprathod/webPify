import GifCompressor from "@/components/GifCompressor";

export const metadata = {
  title: "Compress GIF Online Free – Reduce GIF Size Without Quality Loss",
  description: "Compress animated GIFs online for free. Reduce GIF file size using palettegen optimization. No registration, no upload, no quality loss.",
};

export default function CompressGifOnlinePage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Compress GIF Online</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Reduce GIF file size with advanced palette optimization. Keep animation quality.</p>
        </div>
        <GifCompressor defaultTask="gif-compress" />
      </div>
    </div>
  );
}
