import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Video Compressor Online – Reduce MP4 & MOV Size Without Losing Quality",
  description:
    "Compress MP4, MOV, and WebM videos online using privacy-first compression. No server uploads. Client-side processing powered by FFmpeg.",
};

const videoFaqs = [
  {
    question: "Does video compression reduce quality?",
    answer:
      "Compression always involves some trade-off, but using the right settings you can reduce file size by 50–80% with minimal visible quality loss. Our 'High Quality' preset uses CRF 18 which is visually lossless for most content.",
  },
  {
    question: "What is the best bitrate for MP4?",
    answer:
      "For 1080p video, 4–8 Mbps with H.264 is typical for streaming. For 720p, 2–4 Mbps is usually sufficient. Our 'Balanced' preset targets a good middle ground automatically.",
  },
  {
    question: "How much can you compress a video?",
    answer:
      "It depends heavily on the source content. Screen recordings with static backgrounds can often be compressed 80–90%. High-motion footage like sports typically compresses 40–60%. Our Maximum Compression preset pushes the limit for smaller files.",
  },
  {
    question: "Is H.264 better than H.265?",
    answer:
      "H.265 (HEVC) achieves the same quality at roughly half the file size of H.264, but requires more processing power and has limited browser support. H.264 (MP4) remains the most compatible format for web and social media use.",
  },
  {
    question: "What video format is best for websites?",
    answer:
      "MP4 with H.264 encoding is the gold standard for web compatibility. WebM with VP9 is a strong alternative for browsers that support it, offering similar compression efficiency to H.265.",
  },
  {
    question: "How to compress video for faster loading?",
    answer:
      "Use a lower resolution (720p instead of 1080p), reduce frame rate to 24fps or 30fps, and choose our 'Maximum Compression' preset. Also consider removing audio if it's a background video.",
  },
  {
    question: "Is my video uploaded to any server?",
    answer:
      "No. All compression happens entirely in your browser using FFmpeg.wasm – a WebAssembly port of FFmpeg. Your video never leaves your device.",
  },
  {
    question: "What is the maximum file size supported?",
    answer:
      "Our browser-based tool supports files up to 500MB. For larger files, you will be prompted with suggestions for alternative processing.",
  },
  {
    question: "Can I compress MOV files from iPhone?",
    answer:
      "Yes. Upload your MOV file and choose MP4 as output. The tool will re-encode it to H.264/MP4 which is widely compatible with all devices and platforms.",
  },
  {
    question: "Does removing audio make the file significantly smaller?",
    answer:
      "Audio typically accounts for 5–15% of total video file size. Removing it helps, but the biggest gains come from adjusting video bitrate and resolution.",
  },
  {
    question: "What does CRF mean in video compression?",
    answer:
      "CRF (Constant Rate Factor) controls quality vs. file size. Lower CRF = higher quality, larger file. Our 'High Quality' mode uses CRF 18 (near-lossless), 'Balanced' uses CRF 28, and 'Maximum Compression' uses CRF 38.",
  },
  {
    question: "Can I compress video for SEO?",
    answer:
      "Yes. Page speed is a Google ranking factor. Embedding heavy videos slows down load times. Compressing video to under 5MB and using lazy loading significantly improves Core Web Vitals scores.",
  },
];

export default function VideoCompressorHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Video", href: "/video/compressor" },
    { label: "Compressor", href: "/video/compressor" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Video Compressor",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Compress MP4, MOV, and WebM videos online using privacy-first client-side compression. No server uploads.",
        featureList: ["MP4 Compression", "WebM Compression", "MOV Compression", "Client-side Processing", "No Uploads"],
      },
      {
        "@type": "FAQPage",
        mainEntity: videoFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "860px", width: "100%" }}>
          <Breadcrumb items={breadcrumbItems} />

          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
              Video Compressor
            </h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8, marginBottom: "2.5rem" }}>
              Reduce video file size online. No uploads, no registration — compression happens entirely in your browser.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              <a href="/video/compressor/mp4" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎬</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>MP4 Compressor</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress MP4 videos with H.264 encoding</p>
              </a>

              <a href="/video/compressor/webm" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌐</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>WebM Compressor</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress WebM videos with VP9 codec</p>
              </a>

              <a href="/video/compressor/mov" className="compressor-card">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📱</div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>MOV Compressor</h2>
                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert and compress iPhone MOV files</p>
              </a>
            </div>

            <div style={{ marginTop: "2rem", fontSize: "0.875rem", opacity: 0.7 }}>
              Need to compress images? <Link href="/image/compressor" style={{ color: "var(--primary)", textDecoration: "underline" }}>Try Image Compressor</Link>
            </div>
          </div>

          {/* Trust Section */}
          <div style={{
            background: "rgba(0,112,243,0.04)",
            border: "1px solid rgba(0,112,243,0.15)",
            borderRadius: "12px",
            padding: "1.5rem 2rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>Privacy-First Compression</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div><strong>🔒 No Server Uploads</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>Your videos never leave your device.</span></div>
              <div><strong>⚡ FFmpeg-Powered</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>Client-side compression using WebAssembly.</span></div>
              <div><strong>🗑️ No Storage</strong><br /><span style={{ fontSize: "0.875rem", opacity: 0.75 }}>Nothing is saved, logged, or stored.</span></div>
            </div>
          </div>

          {/* Internal Links */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/image/compressor", label: "Image Compressor" },
                { href: "/image/converter", label: "Image Converter" },
                { href: "/image/compressor/png", label: "PNG Compressor" },
                { href: "/image/compressor/jpeg", label: "JPEG Compressor" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1.5px solid rgba(0,0,0,0.12)",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    color: "var(--foreground)",
                    transition: "all 0.15s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {videoFaqs.map((faq, i) => (
              <details key={i} className="faq-details">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compressor-card {
          padding: 2rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }
        .compressor-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        @media (prefers-color-scheme: dark) {
          .compressor-card { border-color: rgba(255,255,255,0.15); }
        }
      `}} />
    </>
  );
}
