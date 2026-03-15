import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Video Compressor Online – Reduce MP4 & MOV Size Without Losing Quality",
  description:
    "Compress MP4, MOV, and WebM videos online using privacy-first compression. No server uploads. Client-side processing powered by FFmpeg.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/compressor" },
  openGraph: {
    title: "Video Compressor Online – Reduce MP4 & MOV Size Without Losing Quality",
    description: "Compress MP4, MOV, and WebM videos online using privacy-first compression. No server uploads. Client-side processing powered by FFmpeg.",
    url: "https://webpifyy.vercel.app/video/compressor",
  },
};

const videoFaqs = [
  { question: "Does video compression reduce quality?", answer: "Compression always involves some trade-off, but using the right settings you can reduce file size by 50–80% with minimal visible quality loss. Our 'High Quality' preset uses CRF 18 which is visually lossless for most content." },
  { question: "What is the best bitrate for MP4?", answer: "For 1080p video, 4–8 Mbps with H.264 is typical for streaming. For 720p, 2–4 Mbps is usually sufficient. Our 'Balanced' preset targets a good middle ground automatically." },
  { question: "How much can you compress a video?", answer: "It depends heavily on the source content. Screen recordings with static backgrounds can often be compressed 80–90%. High-motion footage like sports typically compresses 40–60%. Our Maximum Compression preset pushes the limit for smaller files." },
  { question: "Is H.264 better than H.265?", answer: "H.265 (HEVC) achieves the same quality at roughly half the file size of H.264, but requires more processing power and has limited browser support. H.264 (MP4) remains the most compatible format for web and social media use." },
  { question: "What video format is best for websites?", answer: "MP4 with H.264 encoding is the gold standard for web compatibility. WebM with VP9 is a strong alternative for browsers that support it, offering similar compression efficiency to H.265." },
  { question: "How to compress video for faster loading?", answer: "Use a lower resolution (720p instead of 1080p), reduce frame rate to 24fps or 30fps, and choose our 'Maximum Compression' preset. Also consider removing audio if it's a background video." },
  { question: "Is my video uploaded to any server?", answer: "No. All compression happens entirely in your browser using FFmpeg.wasm – a WebAssembly port of FFmpeg. Your video never leaves your device." },
  { question: "What is the maximum file size supported?", answer: "There is no hard file size limit — the tool processes files entirely in your browser using WebAssembly. Performance depends on your device's available RAM. Very large files (multi-GB) may take longer but will compress successfully on most modern devices." },
  { question: "Can I compress MOV files from iPhone?", answer: "Yes. Upload your MOV file and choose MP4 as output. The tool will re-encode it to H.264/MP4 which is widely compatible with all devices and platforms." },
  { question: "Does removing audio make the file significantly smaller?", answer: "Audio typically accounts for 5–15% of total video file size. Removing it helps, but the biggest gains come from adjusting video bitrate and resolution." },
  { question: "What does CRF mean in video compression?", answer: "CRF (Constant Rate Factor) controls quality vs. file size. Lower CRF = higher quality, larger file. Our 'High Quality' mode uses CRF 18 (near-lossless), 'Balanced' uses CRF 28, and 'Maximum Compression' uses CRF 38." },
  { question: "Can I compress video for SEO?", answer: "Yes. Page speed is a Google ranking factor. Embedding heavy videos slows down load times. Compressing video to under 5MB and using lazy loading significantly improves Core Web Vitals scores." },
];

const cards = [
  {
    href: "/video/compressor/mp4",
    icon: "🎬",
    title: "MP4 Compressor",
    desc: "Compress MP4 videos with H.264 encoding. Reduce file size 50–80% while preserving visual quality.",
    gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    cta: "Compress MP4",
  },
  {
    href: "/video/compressor/webm",
    icon: "🌐",
    title: "WebM Compressor",
    desc: "Compress WebM videos with VP9 codec. Excellent quality-to-size ratio for modern web browsers.",
    gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    cta: "Compress WebM",
  },
  {
    href: "/video/compressor/mov",
    icon: "📱",
    title: "MOV Compressor",
    desc: "Convert and compress iPhone MOV files to web-compatible MP4. Dramatically reduce file size.",
    gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
    cta: "Compress MOV",
  },
];

export default function VideoCompressorHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Video Compressor", href: "/video/compressor" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/compressor#software",
        "name": "Video Compressor",
        "url": "https://webpifyy.vercel.app/video/compressor",
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
        "description": "Compress MP4, MOV, and WebM videos online using privacy-first client-side compression. No server uploads.",
        "featureList": ["MP4 Compression", "WebM Compression", "MOV Compression", "Client-side Processing", "No Uploads"],
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

        {/* ── Hero ── */}
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">Workspace</span>
          <h1 className="hubv2-hero-title">
            Video <span className="hubv2-hero-title-accent">Compressor</span>
          </h1>
          <p className="hubv2-hero-subtitle">
            Reduce video file size online without uploading to any server. Privacy-first compression powered by FFmpeg.wasm — runs entirely in your browser.
          </p>
          <a href="#tools" className="hubv2-hero-doc-btn">
            <span className="hubv2-hero-doc-btn-icon">📋</span>
            View All Compressors
          </a>
        </div>

        {/* ── Core Tools ── */}
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left">
              <span className="hubv2-section-hd-icon">⊞</span>
              <h2 className="hubv2-section-hd-title">Core Tools</h2>
            </div>
            <div className="hubv2-section-hd-actions">
              <span className="hubv2-section-hd-btn">≡</span>
              <span className="hubv2-section-hd-btn">⊞</span>
            </div>
          </div>
          <div className="hubv2-grid">
            {cards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header">
                  <div className="hubv2-card-icon-box">{card.icon}</div>
                </div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Compression Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🎬</span>
              <p className="hubv2-stat-label">Max Compression</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">85%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--blue">Smaller files</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "85%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🌐</span>
              <p className="hubv2-stat-label">Video Formats</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">3</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--green">MP4 · WebM · MOV</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
            <div className="hubv2-stat-card">
              <span className="hubv2-stat-ghost">🔒</span>
              <p className="hubv2-stat-label">Privacy</p>
              <div className="hubv2-stat-row">
                <span className="hubv2-stat-value">100%</span>
                <span className="hubv2-stat-badge hubv2-stat-badge--purple">Browser-only</span>
              </div>
              <div className="hubv2-stat-progress-track">
                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recent Assets ── */}
        <section className="hubv2-recent">
          <div className="hubv2-recent-hd">
            <h2 className="hubv2-recent-hd-title">Recent Assets</h2>
            <a href="/video/compressor/mp4" className="hubv2-recent-view-all">Try Compressor →</a>
          </div>
          <div className="hubv2-recent-card">
            <table className="hubv2-recent-table">
              <thead className="hubv2-recent-thead">
                <tr>
                  <th className="hubv2-recent-th">File Name</th>
                  <th className="hubv2-recent-th">Type</th>
                  <th className="hubv2-recent-th">Original</th>
                  <th className="hubv2-recent-th">Optimized</th>
                  <th className="hubv2-recent-th hubv2-recent-td-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🎬</div><span className="hubv2-recent-filename">intro-video.mp4</span></div></td>
                  <td className="hubv2-recent-td">MP4 → MP4</td>
                  <td className="hubv2-recent-td">48 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">8.2 MB (-83%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/video/compressor/mp4" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">📱</div><span className="hubv2-recent-filename">tutorial.mov</span></div></td>
                  <td className="hubv2-recent-td">MOV → MP4</td>
                  <td className="hubv2-recent-td">125 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">18 MB (-86%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/video/compressor/mov" className="hubv2-recent-dl">↓</a></td>
                </tr>
                <tr className="hubv2-recent-tr">
                  <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🌐</div><span className="hubv2-recent-filename">promo.webm</span></div></td>
                  <td className="hubv2-recent-td">WebM → WebM</td>
                  <td className="hubv2-recent-td">32 MB</td>
                  <td className="hubv2-recent-td"><span className="hubv2-recent-badge">5.4 MB (-83%)</span></td>
                  <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/video/compressor/webm" className="hubv2-recent-dl">↓</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Video Compression FAQ</h2>
          {videoFaqs.map((faq, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{faq.question}</summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </section>
      </PageShell>
    </>
  );
}
