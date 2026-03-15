import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioConverter from "@/components/AudioConverter";

export const metadata = {
  title: "MP3 to WAV Converter Online Free",
  description: "Convert MP3 audio to uncompressed WAV format online for free. Browser-based using FFmpeg.wasm — no uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav" },
  keywords: ["mp3 to wav", "convert mp3 to wav", "mp3 wav converter online", "audio converter free"],
  openGraph: {
    title: "MP3 to WAV Converter Online Free",
    description: "Convert MP3 to WAV in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav",
  },
  twitter: { card: "summary_large_image", title: "MP3 to WAV Converter Online Free", description: "Convert MP3 to WAV. No uploads." },
};

const faqs = [
  { q: "Why convert MP3 to WAV?", a: "WAV is uncompressed audio, making it ideal for audio editing, music production, and applications that require the highest quality source files." },
  { q: "Will converting MP3 to WAV improve quality?", a: "No. MP3 uses lossy compression so quality information is already discarded. Converting to WAV will not restore lost quality — it just changes the container format." },
  { q: "Why is the WAV file so much larger?", a: "WAV stores uncompressed audio samples, which requires much more storage. A 4MB MP3 may become a 40MB WAV file." },
  { q: "Is my audio safe?", a: "Yes. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
];

export default function Mp3ToWavPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "MP3 to WAV" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/mp3-to-wav#software",
        name: "MP3 to WAV Converter",
        url: "https://webpifyy.vercel.app/audio/convert/mp3-to-wav",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Convert",href:"/audio/convert"},{label:"MP3 to WAV"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">MP3 to WAV <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert MP3 audio files to uncompressed WAV format. Ideal for audio editing and production. 100% browser-based.</p>
        </div>

        <AudioConverter defaultOutputFormat="wav" />

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
