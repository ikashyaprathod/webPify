import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "GIF Tools Online – Compress GIF & Convert to MP4/WebM Free",
  description: "Free online GIF tools. Compress animated GIFs or convert them to MP4/WebM for up to 90% smaller files. All browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif" },
  openGraph: {
    title: "GIF Tools Online – Compress GIF & Convert to MP4/WebM Free",
    description: "Compress GIFs or convert to video. All browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/gif",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"GIF Tools"}]})
  },
};

const tools = [
  { href:'/gif/compress', icon:'🎞', title:'GIF Compressor', desc:'Reduce GIF file size by up to 90%. Keeps animation loops intact.', gradient:'linear-gradient(135deg,#faf5ff,#f3e8ff)', cta:'Compress GIF' },
  { href:'/gif/convert/gif-to-mp4', icon:'🎬', title:'GIF to MP4', desc:'Convert animated GIFs to MP4 video. Up to 95% smaller than GIF.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Convert to MP4' },
  { href:'/gif/convert/gif-to-webm', icon:'🌐', title:'GIF to WebM', desc:'Convert GIFs to WebM for modern browsers. Smallest file size.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Convert to WebM' },
];

const faqs = [
  { q:'What GIF tools does Webpifyy offer?', a:'We offer GIF compression and conversion to MP4/WebM formats.' },
  { q:'Why convert GIF to MP4?', a:'MP4 files are up to 95% smaller than GIF with better quality and smoother animation.' },
  { q:'Are GIF files processed on a server?', a:'No. All GIF processing uses FFmpeg.wasm in your browser. Files never leave your device.' },
  { q:'What is the maximum GIF size I can process?', a:'Up to 500MB per file in the browser. Processing speed depends on your device.' },
];

export default function GifHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "GIF Tools" },
        ],
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'GIF Tools'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">GIF TOOLS</span>
          <h1 className="hubv2-hero-title">GIF <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Compress GIFs or convert them to MP4/WebM for massive file size savings.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">GIF Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {tools.map(card => (
              <div key={card.href} className="hubv2-card" style={{"--card-gradient":card.gradient}}>
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
          <h2 className="hubv2-stats-hd">Processing Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🎞</span><p className="hubv2-stat-label">Max Compression</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">90%</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">GIF to MP4</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{"--prog":"90%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--green">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{"--prog":"100%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🌐</span><p className="hubv2-stat-label">Formats Supported</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">3</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">GIF/MP4/WebM</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{"--prog":"100%"}}></div></div></div>
          </div>
        </section>
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Frequently Asked Questions</h2>
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
