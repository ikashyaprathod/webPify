import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WavCompressor from "@/components/WavCompressor";

export const metadata = {
  title: "WAV to MP3 Converter Online Free — Compress WAV Files",
  description: "Convert and compress WAV files to MP3 online free. Choose bitrate from 96k to 320k. Uses FFmpeg WebAssembly — no server uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/compress/wav" },
  openGraph: { title: "WAV to MP3 Converter Online Free — Compress WAV Files | webpifyy", description: "Convert and compress WAV files to MP3 online free. Choose bitrate from 96k to 320k. Uses FFmpeg WebAssembly — no server uploads.", url: "https://webpifyy.vercel.app/audio/compress/wav", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "WAV to MP3 Converter Online Free — Compress WAV Files | webpifyy", description: "Convert and compress WAV files to MP3 online free. Choose bitrate from 96k to 320k. Uses FFmpeg WebAssembly — no server uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How much smaller is MP3 compared to WAV?", a: "WAV is an uncompressed audio format, so a typical 3-minute stereo WAV file at CD quality (44.1 kHz, 16-bit) is approximately 30 MB. The same audio encoded as MP3 at 128 kbps is about 2.8 MB — roughly a 10x reduction. At 320 kbps (high quality MP3) the file is about 7 MB, still a 4x reduction over WAV." },
  { q: "What does audio bitrate mean?", a: "Bitrate is the amount of audio data encoded per second, measured in kilobits per second (kbps). Higher bitrate means more data is stored per second, which preserves more audio detail and produces better sound quality but creates a larger file. Lower bitrate produces smaller files but removes more audio information through lossy compression." },
  { q: "What is the quality difference between 96k, 128k, 192k, and 320k MP3?", a: "96k is suitable for speech, podcasts, and voice recordings where file size matters most. 128k is the standard quality for music streaming and is transparent to most listeners. 192k provides high quality suitable for music libraries. 320k is the highest MP3 bitrate and is considered transparent to human hearing for virtually all audio content." },
  { q: "Why are WAV files so large?", a: "WAV stores raw, uncompressed pulse-code modulation (PCM) audio data. Every sample of audio is stored at full resolution with no compression applied. A CD-quality stereo WAV uses 44,100 samples per second, 16 bits per sample, and 2 channels — that is 1,411,200 bits per second (about 176 KB/s), which adds up quickly for longer recordings." },
];

export default function WavCompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Audio Compress", item: "https://webpifyy.vercel.app/audio/compress" },
          { "@type": "ListItem", position: 4, name: "WAV Compressor", item: "https://webpifyy.vercel.app/audio/compress/wav" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/audio/compress/wav#software", name: "WAV Compressor", url: "https://webpifyy.vercel.app/audio/compress/wav", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Audio Tools", href: "/audio" }, { label: "Audio Compress", href: "/audio/compress" }, { label: "WAV Compressor" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">WAV <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Convert large WAV files to compressed MP3. Choose bitrate 96k–320k. FFmpeg WASM — files stay in your browser.</p>
        </div>
        <WavCompressor />
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
