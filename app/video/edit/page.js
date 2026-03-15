import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Video Editor Online Free — Trim, Mute & Screenshot",
  description: "Free browser-based video editing tools. Trim videos, remove audio, and capture screenshots. FFmpeg.wasm powered, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit" },
  openGraph: {
    title: "Video Editor Online Free — Trim, Mute & Screenshot",
    description: "Browser-based video editing. Trim, mute, screenshot. No uploads.",
    url: "https://webpifyy.vercel.app/video/edit",
  },
};

const cards = [
  { href: "/video/edit/trim", icon: "✂️", title: "Video Trimmer", desc: "Cut and trim videos to exact start/end times. Downloads as MP4 instantly.", gradient: "linear-gradient(135deg,#fef2f2,#fee2e2)", cta: "Trim Video" },
  { href: "/video/edit/mute", icon: "🔇", title: "Mute Video", desc: "Remove audio from any video file. No re-encoding — instant and lossless.", gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)", cta: "Mute Video" },
  { href: "/video/edit/screenshot", icon: "📷", title: "Video Screenshot", desc: "Capture any frame from a video as a PNG image. No FFmpeg needed.", gradient: "linear-gradient(135deg,#faf5ff,#f3e8ff)", cta: "Take Screenshot" },
];

export default function VideoEditHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Video Editor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit#software",
        name: "Video Editor",
        url: "https://webpifyy.vercel.app/video/edit",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free browser-based video editing tools. Trim, mute, screenshot.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Video Editor"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">VIDEO EDITOR</span>
          <h1 className="hubv2-hero-title">Video <span className="hubv2-hero-title-accent">Editor</span></h1>
          <p className="hubv2-hero-subtitle">Browser-based video editing tools. Trim, mute audio, and capture screenshots. FFmpeg.wasm powered — your files never leave your device.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>

        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Editing Tools</h2></div>
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
          <h2 className="hubv2-stats-hd">Tool Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🛠️</span><p className="hubv2-stat-label">Tools</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">3</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Video Editor</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Engine</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">FFmpeg</span><span className="hubv2-stat-badge hubv2-stat-badge--green">Powered</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">Private</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
