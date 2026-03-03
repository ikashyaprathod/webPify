import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Reduce Video File Size Without Losing Quality – Free Online Tool",
  description:
    "Reduce video file size without visible quality loss. Dynamic CRF compression in your browser — no uploads, no server, completely private.",
};

const faqs = [
  {
    q: "What is CRF and how does it preserve quality?",
    a: "CRF (Constant Rate Factor) allocates more bits to complex scenes and fewer to simple scenes, maintaining consistent perceived quality throughout the video. Unlike fixed-bitrate encoding, CRF produces better quality at smaller file sizes.",
  },
  {
    q: "Which CRF value should I use to preserve quality?",
    a: "For near-lossless output: CRF 18 (High Quality preset). For a good balance: CRF 23–26 (Balanced preset). Values above 28 may introduce noticeable artifacts. This tool selects CRF dynamically based on your source video's resolution.",
  },
  {
    q: "How does resolution affect perceived quality after compression?",
    a: "Keeping original resolution but lowering bitrate can introduce blockiness. A better strategy is to slightly reduce resolution (e.g., 4K→1080p) while keeping a moderate CRF — this often produces sharper-looking output at much smaller file sizes.",
  },
  {
    q: "What is the difference between bitrate and CRF?",
    a: "Bitrate sets a fixed data rate regardless of scene complexity, which wastes bits on simple scenes and under-encodes complex ones. CRF is quality-driven — it varies bitrate per frame to maintain consistent visual quality, always resulting in better compression efficiency.",
  },
  {
    q: "Can I really reduce video size without any quality loss?",
    a: "True lossless size reduction is only possible if the original was encoded inefficiently (e.g., very high bitrate screen recording). In practice, 'without losing quality' means using CRF 18–20 where the difference is imperceptible at normal viewing sizes and distances.",
  },
  {
    q: "What is the H.264 profile:high setting?",
    a: "H.264 High Profile enables better compression tools than Baseline or Main profiles, including 8×8 transforms and CABAC entropy coding. This allows H.264 High to achieve 10–15% better compression at the same quality vs. Main Profile.",
  },
  {
    q: "Does frame rate reduction help reduce file size?",
    a: "Yes — halving frame rate from 60fps to 30fps can reduce file size by 20–30% for high-motion content. For static or slow-motion video, the gain is less significant. Our Aggressive Mode automatically caps at 30fps.",
  },
  {
    q: "Is my video processed on a server?",
    a: "No. All compression runs entirely in your browser using FFmpeg.wasm — a WebAssembly port of the professional FFmpeg library. Nothing is uploaded or stored.",
  },
];

export default function ReduceVideoFileSizeWithoutLosingQualityPage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>← Video Compressor Hub</Link>
          {" · "}
          <Link href="/shrink-video-without-losing-quality" style={{ color: "var(--primary)" }}>Shrink Video</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress for Website</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4", "video/webm", "video/quicktime"]}
        title="Reduce Video File Size Without Losing Quality"
        description="Dynamic CRF compression adapts to your video's resolution for the best quality-to-size ratio. Bulk upload supported. 100% client-side."
      />

      <div className="faq-section">
        <h2>CRF, Bitrate & Quality — Complete Guide</h2>

        {/* Explainer blocks */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
          marginBottom: "2.5rem",
        }}>
          {[
            {
              icon: "🎯",
              title: "What is CRF?",
              body: "Constant Rate Factor (CRF 0–51) controls quality vs size. Lower = better quality. This tool selects CRF dynamically: CRF 22 for 4K, 24 for 1080p, 26 for 720p — then adjusts based on your quality preset.",
            },
            {
              icon: "📐",
              title: "Resolution & Bitrate",
              body: "A 1080p video at 20 Mbps can often be re-encoded to 4 Mbps with no visible difference on standard screens. The key is encoding efficiency: H.264 High Profile with CRF produces visually transparent results at a fraction of the original bitrate.",
            },
            {
              icon: "⚡",
              title: "Encoding Speed",
              body: "Ultra Fast uses simpler analysis but larger output. Max Compression uses exhaustive search for the most efficient encoding. For best size reduction without quality loss, use Balanced or Max Compression with High Quality preset.",
            },
          ].map((card) => (
            <div key={card.title} style={{
              padding: "1.25rem",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "10px",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{card.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>{card.title}</h3>
              <p style={{ fontSize: "0.875rem", opacity: 0.75, margin: 0, lineHeight: 1.6 }}>{card.body}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        {faqs.map((faq, i) => (
          <details key={i} className="faq-details">
            <summary className="faq-question">{faq.q}</summary>
            <p className="faq-answer">{faq.a}</p>
          </details>
        ))}
      </div>

      <div style={{ maxWidth: "860px", margin: "2rem auto", padding: "0 1rem 3rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)" }}>Compress MP4 Online</Link>
          {" · "}
          <Link href="/reduce-mp4-file-size" style={{ color: "var(--primary)" }}>Reduce MP4 File Size</Link>
          {" · "}
          <Link href="/compress-video-for-seo" style={{ color: "var(--primary)" }}>Compress Video for SEO</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>
    </>
  );
}
