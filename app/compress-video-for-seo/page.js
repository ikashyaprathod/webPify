import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress Video for SEO – Faster Load Times, Better Rankings",
  description:
    "Compress video files for SEO and page speed. Smaller videos improve Core Web Vitals and Google rankings. Client-side, no uploads.",
};

export default function CompressVideoForSeoPage() {
  return (
    <>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)" }}>← Video Compressor Hub</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress for Website</Link>
          {" · "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4", "video/webm", "video/quicktime"]}
        title="Compress Video for SEO – Improve Core Web Vitals"
        description="Heavy videos hurt your Google ranking. Compress them to improve LCP, page speed scores, and organic visibility."
      />

      <div className="faq-section">
        <h2>Video SEO Compression Guide</h2>
        <details className="faq-details">
          <summary className="faq-question">How does video size affect SEO?</summary>
          <p className="faq-answer">
            Large videos slow down page load time, which directly impacts Core Web Vitals — particularly Largest Contentful
            Paint (LCP) and First Contentful Paint (FCP). Google uses page speed as a ranking signal, so slow pages rank lower.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">What is the ideal video file size for SEO?</summary>
          <p className="faq-answer">
            For embedded web video, target under 5MB for above-the-fold content and under 10MB for below-the-fold video.
            Use lazy loading (<code>loading="lazy"</code>) for videos not immediately visible.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Should I add VideoObject schema markup?</summary>
          <p className="faq-answer">
            Yes. Adding VideoObject structured data helps Google index your video content and can earn video rich results
            in search. Include name, description, thumbnailUrl, uploadDate, and duration properties.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-question">Does removing audio help SEO?</summary>
          <p className="faq-answer">
            For background/decorative videos, remove audio to reduce file size by 5–15% and ensure autoplay works
            (browsers block autoplay with audio). Smaller files → faster load → better Core Web Vitals → better SEO.
          </p>
        </details>
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem 3rem" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Related:{" "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor for SEO</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress Video for Website</Link>
          {" · "}
          <Link href="/shrink-video-without-losing-quality" style={{ color: "var(--primary)" }}>Shrink Video Without Losing Quality</Link>
        </p>
      </div>
    </>
  );
}
