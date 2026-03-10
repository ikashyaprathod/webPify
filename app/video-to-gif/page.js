import VideoToGif from "@/components/VideoToGif";

export const metadata = {
  title: "Video to GIF Converter Online – MP4 to GIF Free",
  description: "Convert MP4, WebM, or MOV to animated GIF online. Choose FPS, width, and colors. Free browser-based tool — no upload needed.",
};

export default function VideoToGifSeoPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Video to GIF</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Turn any video clip into an animated GIF. Adjust FPS, width, and color depth.</p>
        </div>
        <VideoToGif />
      </div>
    </div>
  );
}
