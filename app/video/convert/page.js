import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Video Converter Online – MP4 to WebM, MP4 to MP3, Video to GIF",
  description: "Free online video conversion tools. Convert MP4 to WebM, extract audio as MP3, or convert video to GIF. Browser-based, no uploads, powered by FFmpeg.wasm.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert" },
  openGraph: {
    title: "Video Converter Online – MP4 to WebM, MP4 to MP3, Video to GIF",
    description: "Convert video files to WebM, MP3, or GIF. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/convert",
  },
};

const tools = [
  { href:'/video/convert/video-to-gif', icon:'🎞', title:'Video to GIF', desc:'Convert MP4, WebM, or MOV clips to animated GIF. Control FPS and size.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Convert to GIF' },
  { href:'/video/convert/mp4-to-webm', icon:'🔄', title:'MP4 to WebM', desc:'Convert MP4 videos to WebM format using VP9 codec. Smaller files, same quality.', gradient:'linear-gradient(135deg,#eff6ff,#dbeafe)', cta:'Convert to WebM' },
  { href:'/video/convert/mp4-to-mp3', icon:'🎵', title:'MP4 to MP3', desc:'Extract audio from MP4, MOV, or WebM video files as high-quality MP3.', gradient:'linear-gradient(135deg,#fdf4ff,#f3e8ff)', cta:'Extract Audio' },
];

const faqs = [
  { q:'How do I convert MP4 to WebM?', a:'Upload your MP4 file and click Convert. The tool uses VP9 encoding via FFmpeg.wasm in your browser — no uploads required.' },
  { q:'Can I extract MP3 audio from a video?', a:'Yes. Use the MP4 to MP3 tool to extract audio from MP4, MOV, or WebM files. The output is a high-quality 192kbps MP3.' },
  { q:'How do I convert video to GIF?', a:'Upload your video, set the time range and output size, then click Convert. GIFs are optimized for small file size.' },
  { q:'Does video conversion reduce quality?', a:'For format conversions like MP4 to WebM we use VP9 with CRF 30 for excellent quality. GIF conversion reduces color depth to 256 colors.' },
];

export default function VideoConvertHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Video Converter" },
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Video Tools',href:'/video'},{label:'Convert'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">VIDEO CONVERTER</span>
          <h1 className="hubv2-hero-title">Video <span className="hubv2-hero-title-accent">Converter</span></h1>
          <p className="hubv2-hero-subtitle">Convert video files to WebM, GIF, or extract audio as MP3. All conversion happens directly in your browser — no uploads, no waiting.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Conversion Tools</h2></div>
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
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Processing</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Fast</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Browser</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{"--prog":"90%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--green">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{"--prog":"100%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔄</span><p className="hubv2-stat-label">Output Formats</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">3</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">WebM/MP3/GIF</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{"--prog":"100%"}}></div></div></div>
          </div>
        </section>
        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq,i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
}
