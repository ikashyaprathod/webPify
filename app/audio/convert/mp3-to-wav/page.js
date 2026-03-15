import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioConverter from "@/components/AudioConverter";

export const metadata = {
  title: "MP3 to WAV Converter Online Free",
  description: "Convert MP3 audio to uncompressed WAV format online for free. Browser-based using FFmpeg.wasm — no uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav" },
  keywords: ["mp3 to wav", "convert mp3 to wav", "mp3 wav converter online", "audio converter free"],
  openGraph: {
    title: "MP3 to WAV Converter Online Free",
    description: "Convert MP3 to WAV in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav",
  },
  twitter: { card: "summary_large_image", title: "MP3 to WAV Converter Online Free", description: "Convert MP3 to WAV. No uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Audio Tools","item":"https://webpifyy.vercel.app/audio"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/audio/convert"},{"@type":"ListItem","position":4,"name":"MP3 to WAV"}]})
  },
};

const faqs = [
  { q: "Why convert MP3 to WAV?", a: "WAV is uncompressed audio, making it ideal for audio editing, music production, and applications that require the highest quality source files." },
  { q: "Will converting MP3 to WAV improve quality?", a: "No. MP3 uses lossy compression so quality information is already discarded. Converting to WAV will not restore lost quality — it just changes the container format." },
  { q: "Why is the WAV file so much larger?", a: "WAV stores uncompressed audio samples, which requires much more storage. A 4MB MP3 may become a 40MB WAV file." },
  { q: "Is my audio safe?", a: "Yes. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
];

export default function Mp3ToWavPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "MP3 to WAV" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/mp3-to-wav#software",
        name: "MP3 to WAV Converter",
        url: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Convert",href:"/audio/convert"},{label:"MP3 to WAV"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WAV</span>
          <h1 className="toolpg-title">MP3 to WAV <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert MP3 audio files to uncompressed WAV format. Ideal for audio editing and production. 100% browser-based.</p>
        </div>

        <AudioConverter defaultOutputFormat="wav" />

        
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
