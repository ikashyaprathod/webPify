import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Audio Editor Online Free — Trim & Cut Audio",
  description: "Free online audio editing tools. Trim audio clips, cut to specific times. Browser-based using FFmpeg.wasm.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/edit" },
  openGraph: {
    title: "Audio Editor Online Free",
    description: "Trim audio clips in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/edit",
  },
};

const cards = [
  { href: "/audio/edit/trim", icon: "✂️", title: "Audio Trimmer", desc: "Cut and trim audio clips to exact start/end times. Perfect for ringtones and clips.", gradient: "linear-gradient(135deg,#fdf4ff,#fae8ff)", cta: "Trim Audio" },
];

export default function AudioEditHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Editor" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Edit"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">AUDIO EDITOR</span>
          <h1 className="hubv2-hero-title">Audio <span className="hubv2-hero-title-accent">Editor</span></h1>
          <p className="hubv2-hero-subtitle">Edit audio files in your browser. Trim, cut, and adjust audio clips. FFmpeg.wasm powered — 100% private.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Edit Audio</h2></div>
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
