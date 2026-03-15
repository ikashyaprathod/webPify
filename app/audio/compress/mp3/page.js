import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioCompressor from "@/components/AudioCompressor";

export const metadata = {
  title: "MP3 Compressor Online Free — Reduce MP3 File Size",
  description: "Compress MP3 audio files online for free. Reduce file size with 128kbps encoding. Browser-based using FFmpeg.wasm — no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/compress/mp3" },
  keywords: ["mp3 compressor", "compress mp3 online", "reduce mp3 file size", "mp3 optimizer", "shrink mp3"],
  openGraph: {
    title: "MP3 Compressor Online Free — Reduce MP3 File Size",
    description: "Compress MP3 files in your browser. 128kbps output, no uploads.",
    url: "https://webpifyy.vercel.app/audio/compress/mp3",
  },
  twitter: { card: "summary_large_image", title: "MP3 Compressor Online Free", description: "Compress MP3 files. No uploads, no sign-up." },
};

const faqs = [
  { q: "How does MP3 compression work?", a: "We use FFmpeg's libmp3lame encoder at 128kbps. Higher source bitrates (e.g. 320kbps) will be reduced to 128kbps, significantly reducing file size while maintaining acceptable quality." },
  { q: "Will compression reduce audio quality?", a: "Yes, slightly. Reducing from 320kbps to 128kbps is noticeable on high-end audio equipment. For casual listening and web use, 128kbps is perfectly adequate." },
  { q: "What formats can I compress?", a: "You can compress MP3, WAV, AAC, OGG, and FLAC files. All outputs are saved as 128kbps MP3." },
  { q: "Is my audio uploaded to a server?", a: "No. All compression happens in your browser using FFmpeg.wasm. Your audio files never leave your device." },
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
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">MP3 Compressor <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Reduce MP3 file size with 128kbps encoding. Smaller files for web, email, and sharing. 100% browser-based.</p>
        </div>

        <AudioCompressor />

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
