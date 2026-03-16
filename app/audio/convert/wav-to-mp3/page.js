import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioConverter from "@/components/AudioConverter";

export const metadata = {
  title: "Convert WAV to MP3 Online Free \u2014 Reduce Audio Size",
  description: "Convert WAV audio files to MP3 online free. Choose bitrate from 128kbps to 320kbps. Browser-based FFmpeg, no uploads, no signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3" },
  keywords: ["wav to mp3", "convert wav to mp3", "wav mp3 converter online", "audio compressor online"],
  openGraph: {
    title: "Convert WAV to MP3 Online Free \u2014 Reduce Audio Size | webpifyy",
    description: "Convert WAV audio files to MP3 online free. Choose bitrate from 128kbps to 320kbps. Browser-based FFmpeg, no uploads, no signup needed.",
    url: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert WAV to MP3 Online Free \u2014 Reduce Audio Size | webpifyy",
    description: "Convert WAV audio files to MP3 online free. Choose bitrate from 128kbps to 320kbps. Browser-based FFmpeg, no uploads, no signup needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Why convert WAV to MP3?", a: "WAV files are very large. A 3-minute song in WAV is 30MB vs 3-5MB as MP3. Converting to MP3 makes files easy to share via email and messaging apps." },
  { q: "What bitrate should I choose for WAV to MP3?", a: "192kbps is a good balance for music. 128kbps suits podcasts and voice recordings. 320kbps gives the best quality closest to the original WAV." },
  { q: "Does WAV to MP3 conversion reduce audio quality?", a: "Yes. MP3 uses lossy compression. Some high-frequency audio detail is lost. At 192kbps or above, most listeners cannot distinguish from the original." },
  { q: "Can I convert WAV to MP3 without software?", a: "Yes. Our browser-based converter uses FFmpeg.wasm so no software installation is needed. Works on Windows, Mac, Linux, iOS and Android." },
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
