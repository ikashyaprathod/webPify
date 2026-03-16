import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Online Audio Compressor \u2014 Reduce Audio File Size",
  description: "Compress audio files online free. Reduce MP3, WAV, AAC file size. Browser-based FFmpeg processing. No uploads, no signup required.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/compress" },
  openGraph: {
    title: "Online Audio Compressor \u2014 Reduce Audio File Size | webpifyy",
    description: "Compress audio files online free. Reduce MP3, WAV, AAC file size. Browser-based FFmpeg processing. No uploads, no signup required.",
    url: "https://webpifyy.vercel.app/audio/compress",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Audio Compressor \u2014 Reduce Audio File Size | webpifyy",
    description: "Compress audio files online free. Reduce MP3, WAV, AAC file size. Browser-based FFmpeg processing. No uploads, no signup required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const cards = [
  { href: "/audio/compress/mp3", icon: "🎵", title: "MP3 Compressor", desc: "Reduce MP3 file size with 128kbps VBR encoding. Smaller files for web and sharing.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Compress MP3" },
];

const faqs = [
  { q: "How much can I reduce an audio file size?", a: "MP3 files compressed with VBR 128kbps typically achieve 40–60% size reduction. WAV files compressed to MP3 can be 80–90% smaller." },
  { q: "Does audio compression affect sound quality?", a: "At 128kbps VBR, the quality difference is minimal for most listeners. For studio work, use lossless formats. For web and sharing, 128kbps is the standard." },
  { q: "Are my audio files uploaded to a server?", a: "No. All processing runs entirely in your browser using FFmpeg.wasm. Files never leave your device." },
  { q: "What audio formats are supported?", a: "MP3 input is supported. The output is always a compressed MP3 file suitable for web, streaming, and sharing." },
];

export default function AudioCompressHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/compress#software",
        name: "Audio Compressor",
        url: "https://webpifyy.vercel.app/audio/compress",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free online audio compressor. Reduce MP3 file sizes using VBR encoding. Browser-based, no uploads.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Compress"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">AUDIO COMPRESSOR</span>
          <h1 className="hubv2-hero-title">Audio <span className="hubv2-hero-title-accent">Compressor</span></h1>
          <p className="hubv2-hero-subtitle">Reduce audio file sizes in your browser. No uploads, no sign-up required.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All</a>
        </div>

        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Core Tools</h2></div>
            <div className="hubv2-section-hd-actions">
              <span className="hubv2-section-hd-btn">≡</span>
              <span className="hubv2-section-hd-btn">⊞</span>
            </div>
          </div>
          <div className="hubv2-grid">
            {cards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Compression Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🎵</span><p className="hubv2-stat-label">Size Reduction</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">60%</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Typical</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "60%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Engine</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">FFmpeg</span><span className="hubv2-stat-badge hubv2-stat-badge--green">WASM</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>

        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Audio Compression FAQ</h2>
          {faqs.map((f,i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </section>
      </PageShell>
    </>
  );
}
