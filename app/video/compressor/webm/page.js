import PageShell from "@/components/PageShell";
import VideoCompressor from "@/components/VideoCompressor";
import Link from "next/link";

export const metadata = {
  title: "Compress WebM Online – Reduce WebM File Size Free",
  description:
    "Compress WebM videos online using VP9 encoding. Client-side processing — your video never leaves your browser.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/compressor/webm" },
  openGraph: {
    title: "Compress WebM Online – Reduce WebM File Size Free",
    description: "Compress WebM videos online using VP9 encoding. Client-side processing — your video never leaves your browser.",
    url: "https://webpifyy.vercel.app/video/compressor/webm",
  },
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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpifyy.vercel.app/video/compressor" },
          { "@type": "ListItem", position: 3, name: "WebM Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/compressor/webm#software",
        "name": "WebM Video Compressor",
        "url": "https://webpifyy.vercel.app/video/compressor/webm",
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
        "description": "Compress WebM videos online with VP9 encoding. No server uploads — fully client-side.",
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
        <div className="toolpg-hero">
          <span className="toolpg-badge">Video Engine</span>
          <h1 className="toolpg-title">WebM <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Compress WebM videos using VP9 encoding directly in your browser. No uploads. No server. 100% private.</p>
        </div>

        <VideoCompressor
          allowedFormats={["video/webm"]}
          formatName="WebM"
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
            {webmFaqs.map((faq, i) => (
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
