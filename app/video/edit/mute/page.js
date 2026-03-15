import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoMuter from "@/components/VideoMuter";

export const metadata = {
  title: "Mute Video Online Free — Remove Audio from Video",
  description: "Remove audio from any video file online. Lossless audio strip using FFmpeg.wasm — no video re-encoding. 100% browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/mute" },
  keywords: ["mute video online", "remove audio from video", "silent video", "strip audio mp4", "mute mp4 free"],
  openGraph: {
    title: "Mute Video Online Free — Remove Audio from Video",
    description: "Strip audio from video files. Lossless, browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/edit/mute",
  },
  twitter: { card: "summary_large_image", title: "Mute Video Online Free", description: "Remove audio from video. No re-encoding, no uploads." },
};

const faqs = [
  { q: "How do I remove audio from a video?", a: "Upload your video and click Remove Audio. We use FFmpeg with the -an flag to strip the audio stream without re-encoding the video." },
  { q: "Does muting a video affect video quality?", a: "No. We use -c:v copy which copies the video stream without any re-encoding. Video quality is identical to the original." },
  { q: "Will the muted video be smaller?", a: "Yes, slightly. Removing the audio track reduces file size by a small amount (typically 2–10% depending on audio bitrate)." },
  { q: "What formats can I mute?", a: "MP4, WebM, and MOV files are supported. The output is saved as MP4." },
];

export default function VideoMutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Mute" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/mute#software",
        name: "Video Muter",
        url: "https://webpifyy.vercel.app/video/edit/mute",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Remove audio from video files. Lossless. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Edit",href:"/video/edit"},{label:"Mute"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VIDEO</span>
          <h1 className="toolpg-title">Mute Video <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Remove audio from any video file. No re-encoding — video quality unchanged. 100% browser-based using FFmpeg.wasm.</p>
        </div>

        <VideoMuter />

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
