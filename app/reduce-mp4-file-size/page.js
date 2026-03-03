import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Reduce MP4 File Size Online – Compress Without Quality Loss",
  description:
    "Reduce MP4 file size online for free. Client-side compression — your video never leaves your device.",
};

export default function ReduceMP4FileSizePage() {
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
        title="Reduce MP4 File Size – Online Video Compressor"
        description="Shrink large MP4 files for email, social media, or storage. All processing happens in your browser."
      />

      <div className="faq-section">
        <h2>How to Reduce MP4 File Size</h2>
        <details className="faq-details">
          <summary className="faq-question">What's the fastest way to reduce MP4 file size?</summary>
          <p className="faq-answer">
            Use the 'Maximum Compression' preset with 720p resolution. This provides the largest file reduction for
            most use cases. For sharing on messaging apps, this is usually the right balance.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Can I reduce MP4 size without re-encoding?</summary>
          <p className="faq-answer">
            True lossless trimming (cutting portions) avoids re-encoding but doesn't reduce bitrate.
            To actually reduce file size for the same duration, you must re-encode at lower bitrate — which this tool does.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">How small can I make an MP4 file?</summary>
          <p className="faq-answer">
            Using Maximum Compression preset at 360p, you can reduce a typical file by 80–90%. The minimum
            practical size depends on content — highly compressed video may show artifacts at extreme compression levels.
          </p>
        </details>
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem 3rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)" }}>Compress MP4 Online</Link>
          {" · "}
          <Link href="/shrink-video-without-losing-quality" style={{ color: "var(--primary)" }}>Shrink Video Without Losing Quality</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress Video for Website</Link>
        </p>
      </div>
    </>
  );
}
