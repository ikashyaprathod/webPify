import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AacToMp3 from "@/components/AacToMp3";

export const metadata = {
  title: "AAC to MP3 Converter Online Free — M4A to MP3",
  description: "Convert AAC and M4A files to MP3 online free. Choose output bitrate 128k–320k. FFmpeg WebAssembly processing, no server uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/aac-to-mp3" },
  openGraph: { title: "AAC to MP3 Converter Online Free — M4A to MP3 | webpifyy", description: "Convert AAC and M4A files to MP3 online free. Choose output bitrate 128k–320k. FFmpeg WebAssembly processing, no server uploads.", url: "https://webpifyy.vercel.app/audio/convert/aac-to-mp3", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "AAC to MP3 Converter Online Free — M4A to MP3 | webpifyy", description: "Convert AAC and M4A files to MP3 online free. Choose output bitrate 128k–320k. FFmpeg WebAssembly processing, no server uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "Is AAC or MP3 better quality at the same bitrate?", a: "AAC (Advanced Audio Coding) generally produces better audio quality than MP3 at the same bitrate. At 128 kbps, AAC sounds noticeably cleaner than MP3, with less compression artifacts. AAC is the successor to MP3 and the native format for Apple devices, iTunes, and YouTube. However, MP3 has near-universal compatibility across all devices and software." },
  { q: "What is the difference between M4A and AAC?", a: "M4A is a file container (an MPEG-4 audio file) that typically holds AAC-encoded audio. AAC refers to the audio codec itself. An M4A file is essentially AAC audio wrapped in an MP4 container. This tool accepts both .aac and .m4a files, as FFmpeg handles the container transparently during decoding." },
  { q: "What input audio formats does this converter support?", a: "This converter accepts AAC (.aac), M4A (.m4a), and any other container format that holds AAC audio, such as .mp4 or .3gp files with audio tracks. FFmpeg WASM decodes the input using its built-in demuxers and AAC decoder before re-encoding to MP3 at your chosen bitrate." },
  { q: "Will converting AAC to MP3 lose quality?", a: "Yes — converting between two lossy formats always involves a generation loss, because the AAC audio is decoded to raw PCM and then re-encoded using MP3 compression. To minimize quality loss, choose a high output bitrate (192k or 320k). If you have access to the original lossless source (WAV or FLAC), encoding directly from that is preferable to transcoding from AAC." },
];

export default function AacToMp3Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "AAC to MP3", item: "https://webpifyy.vercel.app/audio/convert/aac-to-mp3" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/audio/convert/aac-to-mp3#software", name: "AAC to MP3 Converter", url: "https://webpifyy.vercel.app/audio/convert/aac-to-mp3", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Audio Convert", href: "/audio/convert" }, { label: "AAC to MP3" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">AAC to MP3 <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert AAC / M4A audio files to MP3. Choose output bitrate. FFmpeg WASM — your files never leave your device.</p>
        </div>
        <AacToMp3 />
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
