import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Shrink Video Without Losing Quality – Online Video Compressor",
  description:
    "Shrink video file size without visible quality loss. Client-side FFmpeg compression — no uploads, no server.",
};

export default function ShrinkVideoWithoutLosingQualityPage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>← Video Compressor Hub</Link>
          {" · "}
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)" }}>Compress MP4 Online</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4", "video/webm", "video/quicktime"]}
        title="Shrink Video Without Losing Quality"
        description="Use 'High Quality' preset for visually lossless compression. Reduce file size by 30–60% with no perceptible difference."
      />

      <div className="faq-section">
        <h2>Quality-Preserving Video Compression</h2>
        <details className="faq-details">
          <summary className="faq-question">What does 'without losing quality' actually mean?</summary>
          <p className="faq-answer">
            True lossless video compression is rarely practical for size reduction. 'Without losing quality' in practice means
            using a high-quality CRF setting (like CRF 18) where the compression artifacts are invisible at normal viewing
            distances and screen sizes. Our 'High Quality' preset achieves this.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Which preset should I choose to preserve quality?</summary>
          <p className="faq-answer">
            Use the 'High Quality' preset (CRF 18). This will reduce file size by 20–50% for most videos while producing
            output that is visually indistinguishable from the original at normal viewing.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Can I shrink a 1GB video without quality loss?</summary>
          <p className="faq-answer">
            Large files are often recorded at unnecessarily high bitrates. A 1GB video can typically be reduced to 200–400MB
            using 'High Quality' preset with no visible difference on standard displays. For web use, even 50–150MB is usually
            sufficient for full HD video.
          </p>
        </details>
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem 3rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/reduce-mp4-file-size" style={{ color: "var(--primary)" }}>Reduce MP4 File Size</Link>
          {" · "}
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)" }}>Compress MP4 Online</Link>
          {" · "}
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>All Video Formats</Link>
        </p>
      </div>
    </>
  );
}
