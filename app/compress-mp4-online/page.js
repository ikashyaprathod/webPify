import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress MP4 Online Free – Fast MP4 Compressor",
  description:
    "Compress MP4 videos online for free. No registration, no upload required. Client-side compression using FFmpeg.",
};

export default function CompressMp4OnlinePage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>← Video Compressor Hub</Link>
          {" · "}
          <Link href="/video/compressor/mp4" style={{ color: "var(--primary)" }}>MP4 Compressor</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4", "video/webm", "video/quicktime"]}
        title="Compress MP4 Online – Free & Private"
        description="Instantly compress MP4 videos in your browser. No file uploads, no account needed. Powered by FFmpeg.wasm."
      />

      <div className="faq-section">
        <h2>About This Tool</h2>
        <details className="faq-details">
          <summary className="faq-question">How does this MP4 compressor work?</summary>
          <p className="faq-answer">
            This tool uses FFmpeg.wasm — a WebAssembly port of the industry-standard FFmpeg library — to compress your video
            directly in your browser. No file is ever uploaded to any server.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">What formats can I compress?</summary>
          <p className="faq-answer">
            This page supports MP4, MOV, and WebM input files. Output can be MP4 (H.264) or WebM (VP9).
            For format-specific tools, visit{" "}
            <Link href="/video/compressor/mp4" style={{ color: "var(--primary)" }}>MP4 Compressor</Link> or{" "}
            <Link href="/video/compressor/webm" style={{ color: "var(--primary)" }}>WebM Compressor</Link>.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Is there a file size limit?</summary>
          <p className="faq-answer">
            Yes — 500MB for browser-based compression. Files larger than 500MB will trigger a warning and suggestions for alternatives.
          </p>
        </details>
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem 3rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/reduce-mp4-file-size" style={{ color: "var(--primary)" }}>Reduce MP4 File Size</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress Video for Website</Link>
          {" · "}
          <Link href="/compress-video-for-seo" style={{ color: "var(--primary)" }}>Compress Video for SEO</Link>
        </p>
      </div>
    </>
  );
}
