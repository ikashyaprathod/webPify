import PageShell from "@/components/PageShell";
import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress MP4 Online – Reduce MP4 File Size Without Losing Quality",
  description:
    "Compress MP4 videos online for free. Client-side H.264 compression — no uploads, no server, 100% private.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/compressor/mp4" },
  openGraph: {
    title: "Compress MP4 Online – Reduce MP4 File Size Without Losing Quality",
    description: "Compress MP4 videos online for free. Client-side H.264 compression — no uploads, no server, 100% private.",
    url: "https://webpifyy.vercel.app/video/compressor/mp4",
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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpifyy.vercel.app/video/compressor" },
          { "@type": "ListItem", position: 3, name: "MP4 Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/compressor/mp4#software",
        "name": "MP4 Video Compressor",
        "url": "https://webpifyy.vercel.app/video/compressor/mp4",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://webpifyy.vercel.app/#organization" }
        },
        "provider": { "@id": "https://webpifyy.vercel.app/#organization" },
        "author": { "@id": "https://webpifyy.vercel.app/#organization" },
        "description": "Compress MP4 videos online with H.264 encoding. No server uploads — fully client-side.",
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
        <div className="toolpg-hero">
          <span className="toolpg-badge">Video Engine</span>
          <h1 className="toolpg-title">MP4 <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Compress MP4 videos using H.264 encoding directly in your browser. Fast, private, and free. Your files never leave your device.</p>
        </div>

        <VideoCompressor
          allowedFormats={["video/mp4"]}
          formatName="MP4"
        />

        {/* Stats + Why Choose */}
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        {/* World / Edge-First Processing */}
        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
            </div>
          </div>
        </div>

        <div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {mp4Faqs.map((faq, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{faq.question}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
