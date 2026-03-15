import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Video Tools Online – Compress, Convert & Edit Videos Free",
  description: "Free online video tools. Compress MP4, WebM, MOV, convert to GIF or WebM, extract MP3, trim, mute, and take screenshots. All tools run client-side — your files never leave your browser.",
  alternates: { canonical: "https://webpifyy.vercel.app/video" },
  openGraph: {
    title: "Video Tools Online – Compress, Convert & Edit Videos Free",
    description: "Compress, convert, trim, mute, and screenshot video files. All client-side, no uploads.",
    url: "https://webpifyy.vercel.app/video",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Video Tools"}]})
  },
};

const compressTools = [
  { href:'/video/compress', icon:'🎬', title:'Video Compressor', desc:'Compress MP4, WebM, MOV in your browser. No uploads. 100% private.', gradient:'linear-gradient(135deg,#fef2f2,#fee2e2)', cta:'Compress video' },
  { href:'/video/compress/mp4', icon:'📹', title:'MP4 Compressor', desc:'Compress MP4 files with CRF-based encoding. Smart resolution detection.', gradient:'linear-gradient(135deg,#fff7ed,#fed7aa)', cta:'Compress MP4' },
  { href:'/video/compress/webm', icon:'🖥️', title:'WebM Compressor', desc:'Reduce WebM file size using VP9 encoding in your browser.', gradient:'linear-gradient(135deg,#eff6ff,#dbeafe)', cta:'Compress WebM' },
  { href:'/video/compress/mov', icon:'🎥', title:'MOV Compressor', desc:'Compress MOV video files without uploading to any server.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Compress MOV' },
];

const convertTools = [
  { href:'/video/convert/video-to-gif', icon:'🎞', title:'Video to GIF', desc:'Convert any video clip to an animated GIF directly in your browser.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Convert to GIF' },
  { href:'/video/convert/mp4-to-webm', icon:'🔄', title:'MP4 to WebM', desc:'Convert MP4 videos to WebM format using VP9 codec. Browser-based.', gradient:'linear-gradient(135deg,#eff6ff,#dbeafe)', cta:'Convert to WebM' },
  { href:'/video/convert/mp4-to-mp3', icon:'🎵', title:'MP4 to MP3', desc:'Extract audio from MP4, MOV, or WebM video files as MP3.', gradient:'linear-gradient(135deg,#fdf4ff,#f3e8ff)', cta:'Extract Audio' },
];

const editTools = [
  { href:'/video/edit/trim', icon:'✂️', title:'Video Trimmer', desc:'Trim video clips to a specific start and end time. No re-encoding for fast cut.', gradient:'linear-gradient(135deg,#fffbeb,#fef3c7)', cta:'Trim video' },
  { href:'/video/edit/mute', icon:'🔇', title:'Mute Video', desc:'Remove audio track from any video file instantly. No re-encoding.', gradient:'linear-gradient(135deg,#fef2f2,#fee2e2)', cta:'Mute video' },
  { href:'/video/edit/screenshot', icon:'📸', title:'Video Screenshot', desc:'Capture a screenshot from any video frame. Instant PNG download.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Take screenshot' },
];

const faqs = [
  { q:'What video formats does Webpifyy support?', a:'We support MP4, WebM, and MOV for compression and editing. MP4 can be converted to WebM or GIF, and audio can be extracted as MP3.' },
  { q:'Are my videos uploaded to a server?', a:'No. All video processing runs in your browser using FFmpeg.wasm. Files never leave your device.' },
  { q:'How much can I reduce a video file size?', a:'Most videos compress 50–80% with minimal visible quality loss using our Balanced preset.' },
  { q:'Is there a file size limit?', a:'We process up to 500MB per file in the browser. Larger files may be slow on low-end devices.' },
];

export default function VideoHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools" },
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Video Tools'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">VIDEO TOOLS</span>
          <h1 className="hubv2-hero-title">Video <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Compress, convert, and edit video files entirely in your browser using WebAssembly. 100% private, no uploads.</p>
          <a href="#compress" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>

        <section className="hubv2-section" id="compress">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Compress Video</h2></div>
            <a href="/video/compress" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {compressTools.map(card => (
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

        <section className="hubv2-section" id="convert">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Convert Video</h2></div>
            <a href="/video/convert" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {convertTools.map(card => (
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

        <section className="hubv2-section" id="edit">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Edit Video</h2></div>
            <a href="/video/edit" className="hubv2-section-view-all">View all →</a>
          </div>
          <div className="hubv2-grid">
            {editTools.map(card => (
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
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🎬</span><p className="hubv2-stat-label">Max Compression</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">80%</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Excellent</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{"--prog":"80%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--green">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{"--prog":"100%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🎞</span><p className="hubv2-stat-label">Total Tools</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">10</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">Video Tools</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{"--prog":"100%"}}></div></div></div>
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
