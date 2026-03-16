import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Free Online Audio Editing Tools",
  description: "Free audio editing tools \u2014 trim audio clips, adjust volume. Browser-based FFmpeg, files never uploaded. No signup, completely private.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/edit" },
  openGraph: {
    title: "Free Online Audio Editing Tools | webpifyy",
    description: "Free audio editing tools \u2014 trim audio clips, adjust volume. Browser-based FFmpeg, files never uploaded. No signup, completely private.",
    url: "https://webpifyy.vercel.app/audio/edit",
    type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: { card: "summary_large_image", title: "Free Online Audio Editing Tools | webpifyy", description: "Free audio editing tools \u2014 trim audio clips, adjust volume. Browser-based FFmpeg, files never uploaded. No signup, completely private.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const cards = [
  { href: "/audio/edit/trim",   icon: "✂️", title: "Audio Trimmer",        desc: "Cut and trim audio clips to exact start/end times. Perfect for ringtones and clips.", gradient: "linear-gradient(135deg,#fdf4ff,#fae8ff)", cta: "Trim Audio" },
  { href: "/audio/edit/volume", icon: "🔊", title: "Volume Adjuster",       desc: "Increase or decrease audio volume from 0% to 200%. Supports MP3, WAV, OGG.",         gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)", cta: "Adjust Volume" },
];

const faqs = [
  { q: "How do I trim an audio file?", a: "Upload your audio file, set the start and end times using the slider or by typing values, then click Trim. The trimmed file downloads automatically." },
  { q: "Does trimming audio affect quality?", a: "No. Audio trimming uses stream-copy mode — no re-encoding. The output quality is identical to the source file." },
  { q: "What formats can I trim?", a: "MP3, WAV, OGG, AAC, and FLAC formats are all supported. Output is in the same format as the input." },
  { q: "Is my audio uploaded to a server?", a: "No. All processing runs entirely in your browser using FFmpeg.wasm. Files never leave your device." },
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
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/edit#software",
        name: "Audio Editor",
        url: "https://webpifyy.vercel.app/audio/edit",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free online audio editor. Trim audio clips to exact times. Browser-based using FFmpeg.wasm, no uploads.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Edit"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">AUDIO EDITOR</span>
          <h1 className="hubv2-hero-title">Audio <span className="hubv2-hero-title-accent">Editor</span></h1>
          <p className="hubv2-hero-subtitle">Edit audio files in your browser. Trim, cut, and adjust audio clips. FFmpeg.wasm powered — 100% private.</p>
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
          <h2 className="hubv2-stats-hd">Editor Capabilities</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">✂️</span><p className="hubv2-stat-label">Precision</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">0.1s</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Accuracy</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Quality Loss</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Zero</span><span className="hubv2-stat-badge hubv2-stat-badge--green">Stream Copy</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>

        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Audio Editing FAQ</h2>
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
