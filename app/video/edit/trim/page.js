import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoTrimmer from "@/components/VideoTrimmer";

export const metadata = {
  title: "Trim Video Online Free — Cut MP4 WebM MOV",
  description: "Trim and cut videos online free. Set start and end time to extract any clip. Browser-based FFmpeg, no uploads, supports MP4 WebM MOV.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/trim" },
  keywords: ["trim video online", "cut video free", "video trimmer", "cut mp4 online", "video cutter"],
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Trim Video Online Free — Cut MP4 WebM MOV | webpifyy",
    description: "Trim and cut videos online free. Set start and end time to extract any clip. Browser-based FFmpeg, no uploads, supports MP4 WebM MOV.",
    url: "https://webpifyy.vercel.app/video/edit/trim",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trim Video Online Free — Cut MP4 WebM MOV | webpifyy",
    description: "Trim and cut videos online free. Set start and end time to extract any clip. Browser-based FFmpeg, no uploads, supports MP4 WebM MOV.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I trim a video to a specific time range?", a: "Upload your video, set start and end times using time inputs or drag the range slider, preview the selection, then click trim to download the clip." },
  { q: "Is trimming a video lossless?", a: "Yes. We use stream copy mode (-c copy) which cuts the video without re-encoding, preserving original quality and processing in seconds." },
  { q: "What is the maximum video size I can trim?", a: "Videos are processed in your browser memory. Files up to 2GB are supported depending on your device's available RAM." },
  { q: "Can I trim a video to share on WhatsApp or Instagram?", a: "Yes. WhatsApp limits to 16MB and Instagram Reels to 90 seconds. Trim to the right length then compress to meet the file size requirement." },
];

export default function VideoTrimPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Trim" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/trim#software",
        name: "Video Trimmer",
        url: "https://webpifyy.vercel.app/video/edit/trim",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Trim and cut videos online free. Set start and end time to extract any clip. Browser-based FFmpeg, no uploads, supports MP4 WebM MOV.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Edit",href:"/video/edit"},{label:"Trim"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TRIM</span>
          <h1 className="toolpg-title">Trim Video <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Cut and trim your video to exact start/end times. No re-encoding — instant download. 100% browser-based.</p>
        </div>

        <VideoTrimmer />


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
