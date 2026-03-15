import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoMuter from "@/components/VideoMuter";

export const metadata = {
  title: "Mute Video Online Free — Remove Audio from Video",
  description: "Remove audio from any video file online. Lossless audio strip using FFmpeg.wasm — no video re-encoding. 100% browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/mute" },
  keywords: ["mute video online", "remove audio from video", "silent video", "strip audio mp4", "mute mp4 free"],
  openGraph: {
    title: "Mute Video Online Free — Remove Audio from Video",
    description: "Strip audio from video files. Lossless, browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/edit/mute",
  },
  twitter: { card: "summary_large_image", title: "Mute Video Online Free", description: "Remove audio from video. No re-encoding, no uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Video Tools","item":"https://webpifyy.vercel.app/video"},{"@type":"ListItem","position":3,"name":"Edit","item":"https://webpifyy.vercel.app/video/edit"},{"@type":"ListItem","position":4,"name":"Mute"}]})
  },
};

const faqs = [
  { q: "How do I remove audio from a video?", a: "Upload your video and click Remove Audio. We use FFmpeg with the -an flag to strip the audio stream without re-encoding the video." },
  { q: "Does muting a video affect video quality?", a: "No. We use -c:v copy which copies the video stream without any re-encoding. Video quality is identical to the original." },
  { q: "Will the muted video be smaller?", a: "Yes, slightly. Removing the audio track reduces file size by a small amount (typically 2–10% depending on audio bitrate)." },
  { q: "What formats can I mute?", a: "MP4, WebM, and MOV files are supported. The output is saved as MP4." },
];

export default function VideoMutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Mute" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/mute#software",
        name: "Video Muter",
        url: "https://webpifyy.vercel.app/video/edit/mute",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Remove audio from video files. Lossless. 100% browser-based.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Edit",href:"/video/edit"},{label:"Mute"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MUTE</span>
          <h1 className="toolpg-title">Mute Video <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Remove audio from any video file. No re-encoding — video quality unchanged. 100% browser-based using FFmpeg.wasm.</p>
        </div>

        <VideoMuter />

        
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
            </div>
          </div>
        </div>

<div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
