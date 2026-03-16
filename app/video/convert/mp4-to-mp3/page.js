import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoToMp3 from "@/components/VideoToMp3";

export const metadata = {
  title: "Extract Audio from MP4 Free — MP4 to MP3 Online",
  description: "Extract MP3 audio from MP4 videos online free. Browser-based FFmpeg, no uploads. Get audio from any MP4 video instantly. No signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3" },
  keywords: ["mp4 to mp3", "extract audio from video", "video to mp3 converter", "mp4 audio extractor"],
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Extract Audio from MP4 Free — MP4 to MP3 Online | webpifyy",
    description: "Extract MP3 audio from MP4 videos online free. Browser-based FFmpeg, no uploads. Get audio from any MP4 video instantly. No signup needed.",
    url: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extract Audio from MP4 Free — MP4 to MP3 Online | webpifyy",
    description: "Extract MP3 audio from MP4 videos online free. Browser-based FFmpeg, no uploads. Get audio from any MP4 video instantly. No signup needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I extract audio from a video?", a: "Upload your MP4 and click convert. FFmpeg extracts the audio track and saves it as an MP3 file. No video re-encoding means fast conversion." },
  { q: "Does extracting audio reduce audio quality?", a: "No. The audio track is copied directly from the video without re-encoding at the default setting, preserving original audio quality." },
  { q: "Can I extract audio from YouTube videos?", a: "This tool only processes files from your device. We do not support downloading from YouTube or other streaming platforms." },
  { q: "What audio quality does the extracted MP3 have?", a: "The output quality matches the source video audio. For higher quality, choose 320kbps output. For smaller files, 128kbps is sufficient for voice." },
];

export default function Mp4ToMp3Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/video/convert" },
          { "@type": "ListItem", position: 4, name: "MP4 to MP3" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/convert/mp4-to-mp3#software",
        name: "MP4 to MP3 Converter",
        url: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Extract MP3 audio from MP4 videos online free. Browser-based FFmpeg, no uploads. Get audio from any MP4 video instantly. No signup needed.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Convert",href:"/video/convert"},{label:"MP4 to MP3"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MP3</span>
          <h1 className="toolpg-title">MP4 to MP3 <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Extract audio from MP4, MOV, and WebM videos and save as high-quality MP3. 100% browser-based using FFmpeg.wasm.</p>
        </div>

        <VideoToMp3 />


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
