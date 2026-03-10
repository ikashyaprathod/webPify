import PageShell from "@/components/PageShell";
import VideoCompressor from "@/components/VideoCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress MP4 Online – Reduce MP4 File Size Without Losing Quality",
  description:
    "Compress MP4 videos online for free. Client-side H.264 compression — no uploads, no server, 100% private.",
  alternates: { canonical: "https://webpify.vercel.app/video/compressor/mp4" },
  openGraph: {
    title: "Compress MP4 Online – Reduce MP4 File Size Without Losing Quality",
    description: "Compress MP4 videos online for free. Client-side H.264 compression — no uploads, no server, 100% private.",
    url: "https://webpify.vercel.app/video/compressor/mp4",
  },
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
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">MP4 Compressor</h1>
          <p className="page-subtitle">
            Compress MP4 videos using H.264 encoding directly in your browser. Fast, private, and free.
          </p>
          <div className="use-tags">
            <span className="use-tag">No Uploads</span>
            <span className="use-tag">H.264 Encoding</span>
            <span className="use-tag">100% Private</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/video/compressor">← All Video Formats</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/webm">WebM</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/mov">MOV</Link>
        </div>

        <VideoCompressor
          allowedFormats={["video/mp4"]}
          formatName="MP4"
          title="MP4 Compressor – Reduce MP4 File Size Online"
          description="Compress MP4 videos using H.264 encoding directly in your browser. Fast, private, and free."
        />

        <div className="faq-section">
          <h2>MP4 Compression FAQ</h2>
          {mp4Faqs.map((faq, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/video/compressor" className="tool-chip">Video Compressor</Link>
          <Link href="/gif/compressor" className="tool-chip">GIF Compressor</Link>
        </div>
      </PageShell>
    </>
  );
}
