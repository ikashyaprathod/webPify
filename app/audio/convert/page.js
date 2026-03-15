import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Audio Converter Online Free — MP3, WAV, OGG, AAC, FLAC",
  description: "Convert audio files between formats online. MP3, WAV, OGG, AAC, FLAC. Browser-based using FFmpeg.wasm — no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert" },
  openGraph: {
    title: "Audio Converter Online Free",
    description: "Convert audio between MP3, WAV, OGG, AAC, FLAC. Browser-based.",
    url: "https://webpifyy.vercel.app/audio/convert",
  },
};

const cards = [
  { href: "/audio/convert/mp3-to-wav", icon: "🔄", title: "MP3 to WAV", desc: "Convert MP3 to uncompressed WAV format. Full quality for studio and production use.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Convert to WAV" },
  { href: "/audio/convert/wav-to-mp3", icon: "🔃", title: "WAV to MP3", desc: "Convert WAV to compressed MP3. Much smaller file sizes for web and sharing.", gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)", cta: "Convert to MP3" },
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
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Convert Audio</h2></div>
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
      </PageShell>
    </>
  );
}
