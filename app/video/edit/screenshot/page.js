import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoScreenshot from "@/components/VideoScreenshot";

export const metadata = {
  title: "Video Screenshot Tool — Capture Video Frame Online",
  description: "Capture any frame from a video as a PNG image. Seek to exact position and download. No FFmpeg needed — pure browser canvas.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/screenshot" },
  keywords: ["video screenshot", "capture video frame", "video to image", "screenshot from video", "grab frame from video"],
  openGraph: {
    title: "Video Screenshot Tool — Capture Video Frame Online",
    description: "Capture frames from video as PNG. No uploads, instant download.",
    url: "https://webpifyy.vercel.app/video/edit/screenshot",
  },
  twitter: { card: "summary_large_image", title: "Video Screenshot Tool Online", description: "Capture video frames as PNG. Instant, no uploads." },
};

const faqs = [
  { q: "How do I capture a frame from a video?", a: "Upload your video, use the player controls to seek to the exact moment you want, then click Capture Frame. The frame is saved as a PNG." },
  { q: "What resolution is the captured frame?", a: "The frame is captured at the video's native resolution using HTML5 canvas, so the PNG matches the original video dimensions." },
  { q: "Does this use FFmpeg?", a: "No. Frame capture uses the browser's native HTML5 video and canvas APIs, making it instant and available on all devices." },
  { q: "What formats are supported?", a: "MP4, WebM, and MOV files are supported for frame capture in most modern browsers." },
];

export default function VideoScreenshotPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Screenshot" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/screenshot#software",
        name: "Video Screenshot Tool",
        url: "https://webpifyy.vercel.app/video/edit/screenshot",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Capture any frame from a video as PNG. Browser canvas API, no FFmpeg.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Edit",href:"/video/edit"},{label:"Screenshot"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VIDEO</span>
          <h1 className="toolpg-title">Video Screenshot <span className="toolpg-title-accent">Capture</span></h1>
          <p className="toolpg-subtitle">Capture any frame from a video as a full-resolution PNG. Seek to the exact moment and click capture — instant download.</p>
        </div>

        <VideoScreenshot />

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
