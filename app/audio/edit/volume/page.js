import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioVolumeAdjuster from "@/components/AudioVolumeAdjuster";

export const metadata = {
  title: "Adjust Audio Volume Online Free",
  description: "Increase or decrease audio volume online free. Adjust from 0% to 200% volume. Browser-based FFmpeg, no uploads, supports MP3 WAV OGG.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/edit/volume" },
  openGraph: {
    title: "Adjust Audio Volume Online Free | webpifyy",
    description: "Increase or decrease audio volume online free. Adjust from 0% to 200% volume. Browser-based FFmpeg, no uploads, supports MP3 WAV OGG.",
    url: "https://webpifyy.vercel.app/audio/edit/volume",
    type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: { card: "summary_large_image", title: "Adjust Audio Volume Online Free | webpifyy", description: "Increase or decrease audio volume online free. Adjust from 0% to 200% volume. Browser-based FFmpeg, no uploads, supports MP3 WAV OGG.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How much can I increase audio volume?", a: "Volume can be increased up to 200% of original level. Be careful \u2014 excessive volume increase causes clipping distortion. Use 110-150% for subtle boosts." },
  { q: "Can I reduce volume to make audio quieter?", a: "Yes. Set volume below 100% to reduce loudness. 50% makes it half as loud. 0% produces silence. Useful for mixing audio at different levels." },
  { q: "Does adjusting volume reduce audio quality?", a: "Minor quality reduction occurs due to FFmpeg re-encoding. Use WAV input for best results if quality preservation is critical." },
  { q: "What formats are supported for volume adjustment?", a: "MP3, WAV, OGG, AAC and FLAC. Output format matches the input file format automatically." },
];

export default function AudioVolumePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/audio/edit" },
          { "@type": "ListItem", position: 4, name: "Volume Adjuster" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/edit/volume#software",
        name: "Audio Volume Adjuster",
        url: "https://webpifyy.vercel.app/audio/edit/volume",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Edit", href: "/audio/edit" }, { label: "Volume Adjuster" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VOLUME</span>
          <h1 className="toolpg-title">Audio Volume <span className="toolpg-title-accent">Adjuster</span></h1>
          <p className="toolpg-subtitle">Increase or decrease audio volume from 0% to 200%. Process MP3, WAV, and OGG files. 100% browser-based.</p>
        </div>
        <AudioVolumeAdjuster />
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
