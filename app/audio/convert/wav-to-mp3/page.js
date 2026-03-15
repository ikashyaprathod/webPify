import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioConverter from "@/components/AudioConverter";

export const metadata = {
  title: "WAV to MP3 Converter Online Free",
  description: "Convert WAV audio to compressed MP3 format online for free. Browser-based using FFmpeg.wasm — no uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3" },
  keywords: ["wav to mp3", "convert wav to mp3", "wav mp3 converter online", "audio compressor online"],
  openGraph: {
    title: "WAV to MP3 Converter Online Free",
    description: "Convert WAV to MP3 in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3",
  },
  twitter: { card: "summary_large_image", title: "WAV to MP3 Converter Online Free", description: "Convert WAV to MP3. No uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Audio Tools","item":"https://webpifyy.vercel.app/audio"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/audio/convert"},{"@type":"ListItem","position":4,"name":"WAV to MP3"}]})
  },
};

const faqs = [
  { q: "Why convert WAV to MP3?", a: "WAV files are very large. Converting to MP3 reduces file size by 90% or more, making audio easier to share, stream, and store." },
  { q: "What quality is the output MP3?", a: "We use libmp3lame with -q:a 2 which produces high-quality Variable Bitrate MP3 at approximately 190 kbps." },
  { q: "How much smaller is MP3 than WAV?", a: "Significantly smaller. A 40MB WAV file typically becomes 3–5MB as MP3, a reduction of 85–93%." },
  { q: "Is my audio private?", a: "Yes. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
];

export default function WavToMp3Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "WAV to MP3" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/wav-to-mp3#software",
        name: "WAV to MP3 Converter",
        url: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Convert",href:"/audio/convert"},{label:"WAV to MP3"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MP3</span>
          <h1 className="toolpg-title">WAV to MP3 <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert large WAV files to compressed MP3 format. Up to 90% smaller. 100% browser-based — no uploads required.</p>
        </div>

        <AudioConverter defaultOutputFormat="mp3" />

        
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
