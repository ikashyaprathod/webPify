import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Mp3ToOgg from "@/components/Mp3ToOgg";

export const metadata = {
  title: "MP3 to OGG Converter Free Online — webpifyy",
  description: "Convert MP3 audio files to OGG Vorbis format online for free. Open-source, royalty-free audio. 100% browser-based — no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/mp3-to-ogg" },
  openGraph: {
    title: "MP3 to OGG Converter Free Online — webpifyy",
    description: "Convert MP3 audio files to OGG Vorbis format. Open-source, royalty-free audio. 100% browser-based.",
    url: "https://webpifyy.vercel.app/audio/convert/mp3-to-ogg",
  },
  twitter: { card: "summary_large_image", title: "MP3 to OGG Converter Free Online — webpifyy", description: "Convert MP3 to OGG Vorbis. Browser-based, no uploads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Audio Tools","item":"https://webpifyy.vercel.app/audio"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/audio/convert"},{"@type":"ListItem","position":4,"name":"MP3 to OGG"}]})
  },
};

const faqs = [
  { q: "What is OGG Vorbis?", a: "OGG Vorbis is a free, open-source, royalty-free audio compression format. It offers similar quality to MP3 and AAC but without any patent or licensing restrictions." },
  { q: "Is OGG better quality than MP3?", a: "At the same bitrate, OGG Vorbis generally achieves slightly better quality than MP3 due to its more advanced encoding algorithm. However, the difference is subtle for casual listening." },
  { q: "Which browsers support OGG audio?", a: "OGG is natively supported in Chrome, Firefox, and Opera. Safari and Edge also support it in modern versions. It is widely used for HTML5 audio in web games and applications." },
  { q: "Does the converter keep my files private?", a: "Yes. The entire conversion runs in your browser using FFmpeg.wasm. No data is sent to any server and your files stay completely private." },
];

export default function Mp3ToOggPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "MP3 to OGG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/mp3-to-ogg#software",
        name: "MP3 to OGG Converter",
        url: "https://webpifyy.vercel.app/audio/convert/mp3-to-ogg",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Convert", href: "/audio/convert" }, { label: "MP3 to OGG" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">OGG</span>
          <h1 className="toolpg-title">MP3 to <span className="toolpg-title-accent">OGG</span></h1>
          <p className="toolpg-subtitle">Convert MP3 audio files to OGG Vorbis format. Open-source, royalty-free audio. 100% browser-based.</p>
        </div>
        <Mp3ToOgg />
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
