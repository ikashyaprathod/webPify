import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Audio Tools Online Free — Compress, Convert & Trim",
  description: "Free browser-based audio tools. Compress MP3, convert audio formats, trim audio clips. FFmpeg.wasm powered — files never leave your device.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio" },
  openGraph: {
    title: "Audio Tools Online Free — Compress, Convert & Trim",
    description: "Browser-based audio tools powered by FFmpeg.wasm. 100% private.",
    url: "https://webpifyy.vercel.app/audio",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Audio Tools"}]})
  },
};

const compressCards = [
  { href: "/audio/compress/mp3", icon: "🎵", title: "MP3 Compressor", desc: "Reduce MP3 file size with 128kbps VBR encoding. Smaller files for web and sharing.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Compress MP3" },
];

const convertCards = [
  { href: "/audio/convert/mp3-to-wav", icon: "🔄", title: "MP3 to WAV", desc: "Convert MP3 audio to uncompressed WAV format. Lossless quality for studio use.", gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)", cta: "Convert to WAV" },
  { href: "/audio/convert/wav-to-mp3", icon: "🔃", title: "WAV to MP3", desc: "Convert WAV to compressed MP3. Smaller files for web and mobile.", gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)", cta: "Convert to MP3" },
];

const editCards = [
  { href: "/audio/edit/trim", icon: "✂️", title: "Audio Trimmer", desc: "Cut and trim audio clips to exact start/end times. Perfect for ringtones and clips.", gradient: "linear-gradient(135deg,#fdf4ff,#fae8ff)", cta: "Trim Audio" },
];

export default function AudioHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio#software",
        name: "Audio Tools",
        url: "https://webpifyy.vercel.app/audio",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free browser-based audio tools. Compress, convert, and trim audio files.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">AUDIO TOOLS</span>
          <h1 className="hubv2-hero-title">Audio <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Compress, convert, and trim audio files entirely in your browser. FFmpeg.wasm powered — your files never leave your device.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>

        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⚡</span><h2 className="hubv2-section-hd-title">Compress Audio</h2></div>
            <a href="/audio/compress" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {compressCards.map(card => (
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
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">🔄</span><h2 className="hubv2-section-hd-title">Convert Audio</h2></div>
            <a href="/audio/convert" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {convertCards.map(card => (
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
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">✂️</span><h2 className="hubv2-section-hd-title">Edit Audio</h2></div>
            <a href="/audio/edit" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {editCards.map(card => (
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
          <h2 className="hubv2-stats-hd">Audio Tools Overview</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🎵</span><p className="hubv2-stat-label">Categories</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">3</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Audio</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Engine</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">FFmpeg</span><span className="hubv2-stat-badge hubv2-stat-badge--green">WASM</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">Private</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
