import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress Video for Website – Improve Page Speed & Core Web Vitals",
  description:
    "Compress video for websites to improve loading speed and Core Web Vitals. Client-side processing — no server uploads.",
};

export default function CompressVideoForWebsitePage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>← Video Compressor Hub</Link>
          {" · "}
          <Link href="/compress-video-for-seo" style={{ color: "var(--primary)" }}>Compress Video for SEO</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4", "video/webm", "video/quicktime"]}
        title="Compress Video for Website – Boost Page Speed"
        description="Optimise video for web embedding. Smaller files = faster load times = better Core Web Vitals scores."
      />

      <div className="faq-section">
        <h2>Video Compression for Website Performance</h2>
        <details className="faq-details">
          <summary className="faq-question">What video settings are best for websites?</summary>
          <p className="faq-answer">
            For website background videos: 720p resolution, 24fps, 'Balanced' or 'Maximum Compression' preset, and consider
            removing audio if it's a muted background video. Target under 5MB for fast loading.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Does video size affect SEO and Core Web Vitals?</summary>
          <p className="faq-answer">
            Yes. Heavy videos slow page load time, increasing Largest Contentful Paint (LCP) and Total Blocking Time (TBT).
            Google uses Core Web Vitals as a ranking signal. Compress video files to under 5MB for above-the-fold content.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Should I use MP4 or WebM for websites?</summary>
          <p className="faq-answer">
            Use both: serve WebM for Chrome/Firefox/Edge (better compression) and MP4 as fallback for Safari.
            This is done with the HTML5{" "}<code>&lt;video&gt;</code> element with multiple{" "}<code>&lt;source&gt;</code> tags.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">How do I embed compressed video on a website?</summary>
          <p className="faq-answer">
            Use the HTML5 video element:{" "}
            <code>&lt;video autoplay muted loop playsinline&gt;&lt;source src="video.webm" type="video/webm"&gt;&lt;source src="video.mp4" type="video/mp4"&gt;&lt;/video&gt;</code>.
            Always include <code>muted</code> for autoplay and <code>preload="metadata"</code> or <code>lazy</code> for performance.
          </p>
        </details>
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem 3rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Compress Images for Website</Link>
          {" · "}
          <Link href="/compress-video-for-seo" style={{ color: "var(--primary)" }}>Compress Video for SEO</Link>
          {" · "}
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>Video Compressor Hub</Link>
        </p>
      </div>
    </>
  );
}
