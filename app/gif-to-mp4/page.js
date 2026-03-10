import GifCompressor from "@/components/GifCompressor";

export const metadata = {
  title: "GIF to MP4 Converter Online – Free, Fast, No Upload",
  description: "Convert GIF to MP4 online. Reduce file size by up to 90%. H.264 encoding, browser-based, no server uploads. Works with all browsers.",
};

export default function GifToMp4SeoPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>GIF to MP4</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Convert animated GIFs to MP4 video. Up to 90% smaller. No upload required.</p>
        </div>
        <GifCompressor defaultTask="gif-to-mp4" />
        <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(0,0,0,0.03)", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>How GIF to MP4 works</h2>
          <p style={{ fontSize: "0.9375rem", opacity: 0.85, lineHeight: 1.75 }}>
            GIF files store each frame as a 256-color indexed image, making them extremely large for animations. MP4 uses H.264 video encoding which compresses inter-frame differences rather than storing each frame individually. This is why a 10 MB GIF can become a 1 MB MP4 with identical visual appearance. Our tool converts GIFs entirely in your browser using FFmpeg.wasm — no server required.
          </p>
        </div>
      </div>
    </div>
  );
}
