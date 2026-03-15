import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoToMp3 from "@/components/VideoToMp3";

export const metadata = {
  title: "MP4 to MP3 Converter Online Free — Extract Audio",
  description: "Extract audio from MP4, MOV, and WebM videos and save as MP3. 100% browser-based using FFmpeg.wasm. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3" },
  keywords: ["mp4 to mp3", "extract audio from video", "video to mp3 converter", "mp4 audio extractor"],
  openGraph: {
    title: "MP4 to MP3 Converter Online Free — Extract Audio",
    description: "Extract audio from MP4 as MP3. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3",
  },
  twitter: { card: "summary_large_image", title: "MP4 to MP3 Converter Online Free", description: "Extract MP3 from MP4. No uploads." },
};

const faqs = [
  { q: "What video formats can I extract audio from?", a: "You can extract audio from MP4, MOV, and WebM files. The output is always an MP3 file." },
  { q: "What quality is the extracted MP3?", a: "We use libmp3lame with -q:a 2 which produces Variable Bitrate (VBR) MP3 at approximately 190 kbps — high quality." },
  { q: "Is the video uploaded anywhere?", a: "No. All processing happens in your browser using FFmpeg.wasm. Your files never leave your device." },
  { q: "Why is my extracted MP3 much smaller than the video?", a: "This is expected. Audio-only files are far smaller than video files since all the video frames are discarded." },
];

export default function Mp4ToMp3Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/video/convert" },
          { "@type": "ListItem", position: 4, name: "MP4 to MP3" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/convert/mp4-to-mp3#software",
        name: "MP4 to MP3 Converter",
        url: "https://webpifyy.vercel.app/video/convert/mp4-to-mp3",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Extract audio from MP4, MOV, WebM and save as MP3. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Convert",href:"/video/convert"},{label:"MP4 to MP3"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VIDEO</span>
          <h1 className="toolpg-title">MP4 to MP3 <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Extract audio from MP4, MOV, and WebM videos and save as high-quality MP3. 100% browser-based using FFmpeg.wasm.</p>
        </div>

        <VideoToMp3 />

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
