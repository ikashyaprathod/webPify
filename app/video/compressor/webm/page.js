import PageShell from "@/components/PageShell";
import VideoCompressor from "@/components/VideoCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress WebM Online – Reduce WebM File Size Free",
  description:
    "Compress WebM videos online using VP9 encoding. Client-side processing — your video never leaves your browser.",
};

const webmFaqs = [
  {
    question: "What is the WebM format?",
    answer:
      "WebM is an open media format developed by Google, designed for web use. It uses VP8 or VP9 for video and Vorbis or Opus for audio. It's supported natively in Chrome, Firefox, and Edge.",
  },
  {
    question: "Is WebM better than MP4 for websites?",
    answer:
      "WebM with VP9 generally achieves better compression than MP4 with H.264 at the same quality. However, MP4 has broader compatibility. Many sites serve both: WebM for modern browsers and MP4 as fallback.",
  },
  {
    question: "How do I compress a WebM video?",
    answer:
      "Upload your WebM file, choose your quality preset, and click Compress. The tool uses VP9 encoding with a constant rate factor to reduce file size while preserving quality.",
  },
  {
    question: "Can I convert WebM to MP4?",
    answer:
      "Yes. Upload your WebM file and select 'MP4' as the output format. The tool will re-encode it using H.264, making it compatible with all devices.",
  },
  {
    question: "Does WebM support transparency?",
    answer:
      "Yes, WebM supports an alpha channel (transparency) with VP8/VP9. If your WebM has a transparent background, it will be preserved when compressing to WebM output.",
  },
];

export default function WebMCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Video", href: "/video/compressor" },
    { label: "Compressor", href: "/video/compressor" },
    { label: "WebM", href: "/video/compressor/webm" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpify.vercel.app/video/compressor" },
          { "@type": "ListItem", position: 3, name: "WebM Compressor" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "WebM Video Compressor",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress WebM videos online with VP9 encoding. No server uploads — fully client-side.",
      },
      {
        "@type": "FAQPage",
        mainEntity: webmFaqs.map((faq) => ({
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
          <h1 className="page-title">WebM Compressor</h1>
          <p className="page-subtitle">
            Compress WebM videos using VP9 encoding directly in your browser. No uploads. No server.
          </p>
          <div className="use-tags">
            <span className="use-tag">No Uploads</span>
            <span className="use-tag">VP9 Encoding</span>
            <span className="use-tag">100% Private</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/video/compressor">← All Video Formats</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/mp4">MP4</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/mov">MOV</Link>
        </div>

        <VideoCompressor
          allowedFormats={["video/webm"]}
          formatName="WebM"
          title="WebM Compressor – Reduce WebM File Size Online"
          description="Compress WebM videos using VP9 encoding directly in your browser. No uploads. No server."
        />

        <div className="faq-section">
          <h2>WebM Compression FAQ</h2>
          {webmFaqs.map((faq, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/compress-video-for-website" className="tool-chip">Compress Video for Website</Link>
        </div>
      </PageShell>
    </>
  );
}
