import VideoCompressor from "@/components/VideoCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress MP4 Online – Reduce MP4 File Size Without Losing Quality",
  description:
    "Compress MP4 videos online for free. Client-side H.264 compression — no uploads, no server, 100% private.",
};

const mp4Faqs = [
  {
    question: "How do I compress an MP4 file without losing quality?",
    answer:
      "Use our 'High Quality' preset which applies CRF 18 — a near-lossless setting. You can reduce file size by 20–40% without any visible difference at normal viewing distances.",
  },
  {
    question: "What codec does MP4 use?",
    answer:
      "MP4 is a container format that typically uses H.264 (AVC) video codec and AAC audio codec. H.264 is the most widely supported codec for web, mobile, and social media.",
  },
  {
    question: "Can I compress MP4 for WhatsApp or Instagram?",
    answer:
      "Yes. Use 'Balanced' or 'Maximum Compression' preset, set resolution to 720p, and frame rate to 30fps. This produces files well within platform limits.",
  },
  {
    question: "Is my MP4 file uploaded to a server?",
    answer:
      "No. Compression runs entirely in your browser using FFmpeg.wasm. Your video never leaves your device.",
  },
  {
    question: "How long does MP4 compression take?",
    answer:
      "It depends on file size and your device's CPU. A 100MB file typically takes 30–90 seconds in the browser. Performance-intensive devices will be faster.",
  },
];

export default function MP4CompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Video", href: "/video/compressor" },
    { label: "Compressor", href: "/video/compressor" },
    { label: "MP4", href: "/video/compressor/mp4" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpify.vercel.app/video/compressor" },
          { "@type": "ListItem", position: 3, name: "MP4 Compressor" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "MP4 Video Compressor",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress MP4 videos online with H.264 encoding. No server uploads — fully client-side.",
      },
      {
        "@type": "FAQPage",
        mainEntity: mp4Faqs.map((faq) => ({
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

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem 0" }}>
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto", padding: "0 1rem" }}>
        <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "0.5rem" }}>
          <Link href="/video/compressor" style={{ color: "var(--primary)", textDecoration: "underline" }}>← All Video Formats</Link>
          {" | "}
          <Link href="/video/compressor/webm" style={{ color: "var(--primary)", textDecoration: "underline" }}>WebM Compressor</Link>
          {" | "}
          <Link href="/video/compressor/mov" style={{ color: "var(--primary)", textDecoration: "underline" }}>MOV Compressor</Link>
        </p>
      </div>

      <VideoCompressor
        allowedFormats={["video/mp4"]}
        formatName="MP4"
        title="MP4 Compressor – Reduce MP4 File Size Online"
        description="Compress MP4 videos using H.264 encoding directly in your browser. Fast, private, and free."
      />

      {/* FAQ */}
      <div className="faq-section">
        <h2>MP4 Compression FAQ</h2>
        {mp4Faqs.map((faq, i) => (
          <details key={i} className="faq-details">
            <summary className="faq-question">{faq.question}</summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* Internal Links */}
      <div style={{ maxWidth: "860px", margin: "2rem auto", padding: "0 1rem 3rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          Also try:{" "}
          <Link href="/image/compressor" style={{ color: "var(--primary)" }}>Image Compressor</Link>
          {" · "}
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)" }}>Compress MP4 Online</Link>
          {" · "}
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)" }}>Compress Video for Website</Link>
        </p>
      </div>
    </>
  );
}
