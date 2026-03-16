import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WavToOgg from "@/components/WavToOgg";

export const metadata = {
  title: "Convert WAV to OGG Online Free",
  description: "Convert WAV audio files to OGG Vorbis format online free. Browser-based FFmpeg, no uploads. Open-source format for web audio. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/wav-to-ogg" },
  openGraph: {
    title: "Convert WAV to OGG Online Free | webpifyy",
    description: "Convert WAV audio files to OGG Vorbis format online free. Browser-based FFmpeg, no uploads. Open-source format for web audio. No signup.",
    url: "https://webpifyy.vercel.app/audio/convert/wav-to-ogg",
    type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: { card: "summary_large_image", title: "Convert WAV to OGG Online Free | webpifyy", description: "Convert WAV audio files to OGG Vorbis format online free. Browser-based FFmpeg, no uploads. Open-source format for web audio. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is OGG format?", a: "OGG Vorbis is a free open-source audio format. It offers better quality than MP3 at the same bitrate and is used in games, web apps and platforms that prefer open formats." },
  { q: "Is OGG better than MP3?", a: "OGG Vorbis typically offers better audio quality than MP3 at equivalent bitrates, especially at lower bitrates. It is fully patent-free making it preferred for open-source projects." },
  { q: "Does all software support OGG files?", a: "OGG is supported in most modern browsers, VLC, and many media players. Windows Media Player and iTunes require a codec plugin for OGG playback." },
  { q: "How do I play OGG files?", a: "VLC Media Player plays OGG on all platforms. Chrome, Firefox, and Edge support OGG natively in HTML5 audio elements." },
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
