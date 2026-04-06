import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioMerger from "@/components/AudioMerger";

export const metadata = {
  title: "Audio Merger Online Free — Join & Mix Audio Files",
  description: "Merge and join multiple audio files online free. Sequential concat or simultaneous overlay mix. Supports MP3, WAV, OGG, AAC. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/edit/merge" },
  openGraph: { title: "Audio Merger Online Free — Join & Mix Audio Files | webpifyy", description: "Merge and join multiple audio files online free. Sequential concat or simultaneous overlay mix. Supports MP3, WAV, OGG, AAC. No uploads.", url: "https://webpifyy.vercel.app/audio/edit/merge", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Audio Merger Online Free — Join & Mix Audio Files | webpifyy", description: "Merge and join multiple audio files online free. Sequential concat or simultaneous overlay mix. Supports MP3, WAV, OGG, AAC. No uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the difference between concat and mix mode?", a: "Concat (sequential) mode joins audio files end to end — the second file starts playing after the first ends. This is used for joining podcast segments, combining voice lines, or assembling a playlist into one file. Mix (overlay) mode plays all files simultaneously, layering them on top of each other — useful for mixing a voice recording with background music or combining multiple instrument tracks." },
  { q: "What audio formats are supported for input?", a: "This tool supports MP3, WAV, OGG, AAC, M4A, and FLAC as input formats. FFmpeg WebAssembly includes decoders for all common audio codecs, so any format that FFmpeg supports can be decoded in the browser. Input files do not need to be the same format — you can mix and match formats in the same merge operation." },
  { q: "What format is the merged output file?", a: "The output format can be selected before processing. MP3 is the default for maximum compatibility. WAV is available for lossless output. OGG Vorbis is a good option for open-source projects and web audio. Choosing MP3 at 192k or above is recommended for mixed music content; 128k is sufficient for speech-only output." },
  { q: "Is there a limit on how many files I can merge?", a: "There is no hard limit on the number of files. Practically, the constraint is available browser memory — very long or high-bitrate files will use more WASM heap. For most use cases (under 10 files, each under 50 MB), merging completes within seconds. Processing many large files simultaneously may require a modern device with at least 4 GB of RAM." },
];

export default function AudioMergerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Edit", item: "https://webpifyy.vercel.app/audio/edit" },
          { "@type": "ListItem", position: 4, name: "Audio Merger", item: "https://webpifyy.vercel.app/audio/edit/merge" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/audio/edit/merge#software", name: "Audio Merger", url: "https://webpifyy.vercel.app/audio/edit/merge", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Audio Edit", href: "/audio/edit" }, { label: "Audio Merger" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">Audio <span className="toolpg-title-accent">Merger</span></h1>
          <p className="toolpg-subtitle">Join multiple audio files sequentially or mix them together. Supports MP3, WAV, OGG, AAC, FLAC. FFmpeg WASM.</p>
        </div>
        <AudioMerger />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
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
