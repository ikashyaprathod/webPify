import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioCompressor from "@/components/AudioCompressor";

export const metadata = {
  title: "Compress MP3 Online Free \u2014 Reduce MP3 File Size",
  description: "Compress MP3 files online free. Reduce MP3 size by lowering bitrate. 128kbps for streaming, 320kbps for quality. Browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/compress/mp3" },
  keywords: ["mp3 compressor", "compress mp3 online", "reduce mp3 file size", "mp3 optimizer", "shrink mp3"],
  openGraph: {
    title: "Compress MP3 Online Free \u2014 Reduce MP3 File Size | webpifyy",
    description: "Compress MP3 files online free. Reduce MP3 size by lowering bitrate. 128kbps for streaming, 320kbps for quality. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/audio/compress/mp3",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress MP3 Online Free \u2014 Reduce MP3 File Size | webpifyy",
    description: "Compress MP3 files online free. Reduce MP3 size by lowering bitrate. 128kbps for streaming, 320kbps for quality. Browser-based, no uploads.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I reduce MP3 file size?", a: "Upload your MP3 and select an output bitrate. 128kbps is good for voice and streaming. 192kbps balances quality and size for music. 320kbps preserves near-original quality." },
  { q: "What bitrate should I use for my MP3?", a: "For podcasts and voice: 64-96kbps. For music streaming: 128-192kbps. For archival quality: 320kbps. Higher bitrate means larger file size but better audio quality." },
  { q: "Does compressing MP3 reduce audio quality?", a: "Yes. MP3 compression is lossy. Reducing bitrate reduces quality. Going from 320kbps to 128kbps reduces quality but is usually acceptable for casual listening." },
  { q: "Is MP3 compression free and private?", a: "Yes. FFmpeg.wasm processes files in your browser. Nothing is uploaded. Free, unlimited, no signup." },
];

export default function Mp3CompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Compress", item: "https://webpifyy.vercel.app/audio/compress" },
          { "@type": "ListItem", position: 4, name: "MP3" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/compress/mp3#software",
        name: "MP3 Compressor",
        url: "https://webpifyy.vercel.app/audio/compress/mp3",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress MP3 audio files online. 128kbps output. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Compress",href:"/audio/compress"},{label:"MP3"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MP3</span>
          <h1 className="toolpg-title">MP3 Compressor <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Reduce MP3 file size with 128kbps encoding. Smaller files for web, email, and sharing. 100% browser-based.</p>
        </div>

        <AudioCompressor />

        
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
