import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AudioConverter from "@/components/AudioConverter";

export const metadata = {
  title: "WAV to MP3 Converter Online Free",
  description: "Convert WAV audio to compressed MP3 format online for free. Browser-based using FFmpeg.wasm — no uploads, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3" },
  keywords: ["wav to mp3", "convert wav to mp3", "wav mp3 converter online", "audio compressor online"],
  openGraph: {
    title: "WAV to MP3 Converter Online Free",
    description: "Convert WAV to MP3 in your browser. No uploads.",
    url: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3",
  },
  twitter: { card: "summary_large_image", title: "WAV to MP3 Converter Online Free", description: "Convert WAV to MP3. No uploads." },
};

const faqs = [
  { q: "Why convert WAV to MP3?", a: "WAV files are very large. Converting to MP3 reduces file size by 90% or more, making audio easier to share, stream, and store." },
  { q: "What quality is the output MP3?", a: "We use libmp3lame with -q:a 2 which produces high-quality Variable Bitrate MP3 at approximately 190 kbps." },
  { q: "How much smaller is MP3 than WAV?", a: "Significantly smaller. A 40MB WAV file typically becomes 3–5MB as MP3, a reduction of 85–93%." },
  { q: "Is my audio private?", a: "Yes. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
];

export default function WavToMp3Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Audio Tools", item: "https://webpifyy.vercel.app/audio" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/audio/convert" },
          { "@type": "ListItem", position: 4, name: "WAV to MP3" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/audio/convert/wav-to-mp3#software",
        name: "WAV to MP3 Converter",
        url: "https://webpifyy.vercel.app/audio/convert/wav-to-mp3",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Audio Tools",href:"/audio"},{label:"Convert",href:"/audio/convert"},{label:"WAV to MP3"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AUDIO</span>
          <h1 className="toolpg-title">WAV to MP3 <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert large WAV files to compressed MP3 format. Up to 90% smaller. 100% browser-based — no uploads required.</p>
        </div>

        <AudioConverter defaultOutputFormat="mp3" />

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
