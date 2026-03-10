import PageShell from "@/components/PageShell";
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

const cards = [
  { href: "/video/compressor/mp4",  icon: "🎬", title: "MP4 Compressor",  desc: "Compress MP4 videos with H.264 encoding" },
  { href: "/video/compressor/webm", icon: "🌐", title: "WebM Compressor", desc: "Compress WebM videos with VP9 codec" },
  { href: "/video/compressor/mov",  icon: "📱", title: "MOV Compressor",  desc: "Convert and compress iPhone MOV files" },
];

const ACCENT = "linear-gradient(90deg,#7c3aed,#a78bfa)";
const ICON_BG = "rgba(124,58,237,0.08)";

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
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <div className="page-badge">Free · Browser-based · No Upload</div>
          <h1 className="page-title">Video Compressor</h1>
          <p className="page-subtitle">
            Reduce video file size online. No uploads, no registration — compression happens entirely in your browser.
          </p>
        </div>

        <div className="hub-grid">
          {cards.map(card => (
            <a key={card.href} href={card.href} className="hub-card"
               style={{ "--hub-accent": ACCENT, "--hub-icon-bg": ICON_BG }}>
              <div className="hub-card-icon">{card.icon}</div>
              <div className="hub-card-title">{card.title}</div>
              <div className="hub-card-desc">{card.desc}</div>
            </a>
          ))}
        </div>

        <div className="info-box">
          <h2>Privacy-First Compression</h2>
          <div className="info-box-grid">
            <div><strong>🔒 No Server Uploads</strong><br /><span>Your videos never leave your device.</span></div>
            <div><strong>⚡ FFmpeg-Powered</strong><br /><span>Client-side compression using WebAssembly.</span></div>
            <div><strong>🗑️ No Storage</strong><br /><span>Nothing is saved, logged, or stored.</span></div>
          </div>
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/gif/compressor" className="tool-chip">GIF Compressor</Link>
          <Link href="/image/converter" className="tool-chip">Image Converter</Link>
          <Link href="/image/compressor/png" className="tool-chip">PNG Compressor</Link>
          <Link href="/image/compressor/jpeg" className="tool-chip">JPEG Compressor</Link>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {videoFaqs.map((faq, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </PageShell>
    </>
  );
}
