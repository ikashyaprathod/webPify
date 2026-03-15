import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Audio Compressor Online Free — Reduce Audio File Size",
  description: "Compress audio files online. Reduce MP3, WAV, AAC, OGG, and FLAC file sizes. Browser-based using FFmpeg.wasm.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/compress" },
  openGraph: {
    title: "Audio Compressor Online Free",
    description: "Compress audio files in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/compress",
  },
};

const cards = [
  { href: "/audio/compress/mp3", icon: "🎵", title: "MP3 Compressor", desc: "Reduce MP3 file size with 128kbps VBR encoding. Smaller files for web and sharing.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Compress MP3" },
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
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Compress Audio</h2></div>
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
