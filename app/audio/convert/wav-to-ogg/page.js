import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WavToOgg from "@/components/WavToOgg";

export const metadata = {
  title: "WAV to OGG Converter Free Online — webpifyy",
  description: "Convert WAV audio to OGG Vorbis format online for free. Smaller file sizes for web streaming. 100% browser-based using FFmpeg.wasm — no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/wav-to-ogg" },
  openGraph: {
    title: "WAV to OGG Converter Free Online — webpifyy",
    description: "Convert WAV audio to OGG Vorbis format. Smaller file sizes for web streaming. 100% browser-based.",
    url: "https://webpifyy.vercel.app/audio/convert/wav-to-ogg",
  },
  twitter: { card: "summary_large_image", title: "WAV to OGG Converter Free Online — webpifyy", description: "Convert WAV to OGG. Browser-based, no uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Audio Tools","item":"https://webpifyy.vercel.app/audio"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/audio/convert"},{"@type":"ListItem","position":4,"name":"WAV to OGG"}]})
  },
};

const faqs = [
  { q: "Why convert WAV to OGG?", a: "OGG Vorbis is an open, royalty-free audio format that produces significantly smaller files than WAV while maintaining good quality. It is ideal for web streaming and HTML5 audio." },
  { q: "Will OGG sound worse than WAV?", a: "OGG uses lossy compression, so some quality is discarded during encoding. However, at standard bitrates OGG is virtually indistinguishable from the original WAV for most listeners." },
  { q: "How much smaller will the OGG file be?", a: "Typically 5x to 10x smaller than WAV. A 50MB WAV file may compress to 5-10MB as OGG depending on the audio content and bitrate." },
  { q: "Is my audio file uploaded anywhere?", a: "No. All conversion happens entirely in your browser using FFmpeg.wasm. Your files never leave your device and nothing is sent to any server." },
];

export default function WavToOggPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "WAV to OGG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/wav-to-ogg#software",
        name: "WAV to OGG Converter",
        url: "https://webpifyy.vercel.app/audio/convert/wav-to-ogg",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Convert", href: "/audio/convert" }, { label: "WAV to OGG" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">OGG</span>
          <h1 className="toolpg-title">WAV to <span className="toolpg-title-accent">OGG</span></h1>
          <p className="toolpg-subtitle">Convert WAV audio to OGG Vorbis format. Smaller file sizes for web streaming. 100% browser-based.</p>
        </div>
        <WavToOgg />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing uploaded — all browser-based.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant</h5><p className="tpg-tds">Process in your browser instantly.</p></div>
          </div>
        </div>
        <div className="toolpg-faq">
          <div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
