import PageShell from "@/components/PageShell";
import VideoCompressor from "@/components/VideoCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress MOV Online – Reduce iPhone MOV File Size Free",
  description:
    "Compress MOV videos from iPhone online. Convert and compress to MP4 or WebM — client-side, no uploads.",
  alternates: { canonical: "https://webpify.vercel.app/video/compressor/mov" },
  openGraph: {
    title: "Compress MOV Online – Reduce iPhone MOV File Size Free",
    description: "Compress MOV videos from iPhone online. Convert and compress to MP4 or WebM — client-side, no uploads.",
    url: "https://webpify.vercel.app/video/compressor/mov",
  },
};

const movFaqs = [
  {
    question: "What is a MOV file?",
    answer:
      "MOV is Apple's QuickTime movie format. It's the default recording format on iPhones and Mac cameras. MOV files are often very large because they use high-quality HEVC or H.264 encoding at high bitrates.",
  },
  {
    question: "How do I reduce MOV file size from iPhone?",
    answer:
      "Upload your MOV file and select MP4 as output format with 'Balanced' or 'Maximum Compression' preset. This re-encodes the video at lower bitrate, dramatically reducing file size while keeping good quality.",
  },
  {
    question: "Can I convert MOV to MP4?",
    answer:
      "Yes. Upload your MOV file and select 'MP4' as output format. The tool will re-encode it using H.264, which is universally compatible with all devices, browsers, and platforms.",
  },
  {
    question: "Why are iPhone MOV files so large?",
    answer:
      "iPhones record at very high bitrates (50–200 Mbps on newer models) to preserve maximum quality. While great for editing, these files are impractical for sharing. Compression reduces them to practical sizes.",
  },
  {
    question: "Does compressing MOV affect quality?",
    answer:
      "Using our 'High Quality' preset, the visual difference is nearly imperceptible for screen viewing. File sizes can be reduced by 60–85% while maintaining excellent visual clarity.",
  },
];

export default function MOVCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Video", href: "/video/compressor" },
    { label: "Compressor", href: "/video/compressor" },
    { label: "MOV", href: "/video/compressor/mov" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpify.vercel.app/video/compressor" },
          { "@type": "ListItem", position: 3, name: "MOV Compressor" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "MOV Video Compressor",
        applicationCategory: "VideoProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress and convert MOV files from iPhone online. No server uploads — fully client-side.",
      },
      {
        "@type": "FAQPage",
        mainEntity: movFaqs.map((faq) => ({
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
          <h1 className="page-title">MOV Compressor</h1>
          <p className="page-subtitle">
            Compress and convert MOV files from iPhone, iPad, or Mac directly in your browser. No uploads. No server.
          </p>
          <div className="use-tags">
            <span className="use-tag">iPhone Videos</span>
            <span className="use-tag">No Uploads</span>
            <span className="use-tag">100% Private</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/video/compressor">← All Video Formats</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/mp4">MP4</Link>
          <span className="tool-nav-sep" />
          <Link href="/video/compressor/webm">WebM</Link>
        </div>

        <VideoCompressor
          allowedFormats={["video/quicktime", "video/mp4"]}
          formatName="MOV"
          title="MOV Compressor – Compress iPhone Videos Online"
          description="Compress and convert MOV files from iPhone, iPad, or Mac directly in your browser. No uploads. No server."
        />

        <div className="faq-section">
          <h2>MOV Compression FAQ</h2>
          {movFaqs.map((faq, i) => (
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
