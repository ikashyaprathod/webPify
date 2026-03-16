import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Online Audio Converter \u2014 MP3 WAV OGG AAC Free",
  description: "Convert audio between MP3, WAV, OGG and AAC formats online free. Browser-based FFmpeg processing. No uploads, no signup, completely private.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert" },
  openGraph: {
    title: "Online Audio Converter \u2014 MP3 WAV OGG AAC Free | webpifyy",
    description: "Convert audio between MP3, WAV, OGG and AAC formats online free. Browser-based FFmpeg processing. No uploads, no signup, completely private.",
    url: "https://webpifyy.vercel.app/audio/convert",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Audio Converter \u2014 MP3 WAV OGG AAC Free | webpifyy",
    description: "Convert audio between MP3, WAV, OGG and AAC formats online free. Browser-based FFmpeg processing. No uploads, no signup, completely private.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const cards = [
  { href: "/audio/convert/mp3-to-wav", icon: "🔄", title: "MP3 to WAV", desc: "Convert MP3 to uncompressed WAV format. Full quality for studio and production use.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Convert to WAV" },
  { href: "/audio/convert/wav-to-mp3", icon: "🔃", title: "WAV to MP3", desc: "Convert WAV to compressed MP3. Much smaller file sizes for web and sharing.", gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)", cta: "Convert to MP3" },
  { href: "/audio/convert/wav-to-ogg", icon: "🎵", title: "WAV to OGG", desc: "Convert WAV audio to OGG Vorbis format. Open-source, royalty-free, smaller file sizes.", gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)", cta: "Convert to OGG" },
  { href: "/audio/convert/mp3-to-ogg", icon: "🎶", title: "MP3 to OGG", desc: "Convert MP3 to OGG Vorbis. Royalty-free format ideal for web audio and games.", gradient: "linear-gradient(135deg,#faf5ff,#f3e8ff)", cta: "Convert to OGG" },
];

const faqs = [
  { q: "What is the difference between MP3 and WAV?", a: "WAV is uncompressed and lossless — ideal for editing and studio work. MP3 is compressed and much smaller, ideal for web, streaming, and sharing. Converting WAV to MP3 reduces file size by 80–90%." },
  { q: "Does converting audio lose quality?", a: "Converting to MP3 is lossy — some audio data is discarded. At 192kbps or higher, the quality difference is inaudible for most listeners. Converting MP3 to WAV is lossless but won't recover quality already lost in the original MP3." },
  { q: "Are my audio files uploaded to a server?", a: "No. All conversion runs entirely in your browser using FFmpeg.wasm. Files never leave your device." },
  { q: "How long does audio conversion take?", a: "Most conversions complete in under 10 seconds for files up to 50MB. Longer files may take a few minutes depending on your device speed." },
];

export default function AudioConvertHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Converter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert#software",
        name: "Audio Converter",
        url: "https://webpifyy.vercel.app/audio/convert",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free online audio converter. Convert between MP3, WAV, OGG, AAC, and FLAC. Browser-based, no uploads.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Convert"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">AUDIO CONVERTER</span>
          <h1 className="hubv2-hero-title">Audio <span className="hubv2-hero-title-accent">Converter</span></h1>
          <p className="hubv2-hero-subtitle">Convert audio files between MP3, WAV, OGG, AAC, and FLAC formats. 100% browser-based, no uploads.</p>
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
          <h2 className="hubv2-stats-hd">Conversion Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔄</span><p className="hubv2-stat-label">WAV → MP3 Reduction</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">90%</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Smaller</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "90%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Engine</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">FFmpeg</span><span className="hubv2-stat-badge hubv2-stat-badge--green">WASM</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>

        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Audio Conversion FAQ</h2>
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
