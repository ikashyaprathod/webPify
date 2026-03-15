import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoTrimmer from "@/components/VideoTrimmer";

export const metadata = {
  title: "Video Trimmer Online Free — Cut & Trim Video",
  description: "Trim and cut videos to exact start/end times online. Downloads as MP4 instantly. 100% browser-based using FFmpeg.wasm.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/trim" },
  keywords: ["trim video online", "cut video free", "video trimmer", "cut mp4 online", "video cutter"],
  openGraph: {
    title: "Video Trimmer Online Free — Cut & Trim Video",
    description: "Trim videos to exact times. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/video/edit/trim",
  },
  twitter: { card: "summary_large_image", title: "Video Trimmer Online Free", description: "Cut and trim videos. No uploads, no sign-up." },
};

const faqs = [
  { q: "How do I trim a video online?", a: "Upload your video, enter a start time and end time (in MM:SS or seconds format), and click Trim. Download the trimmed video as MP4." },
  { q: "What time format should I use?", a: "You can use MM:SS format (e.g. 1:30 for 1 minute 30 seconds) or just seconds (e.g. 90). Both formats work." },
  { q: "Does trimming affect video quality?", a: "No. We use the -c copy flag which copies the video stream without re-encoding. This is lossless and extremely fast." },
  { q: "What video formats are supported?", a: "MP4, WebM, and MOV files are supported for trimming. The output is always saved as MP4." },
];

export default function VideoTrimPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Trim" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/trim#software",
        name: "Video Trimmer",
        url: "https://webpifyy.vercel.app/video/edit/trim",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Trim and cut videos to exact start/end times. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Edit",href:"/video/edit"},{label:"Trim"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VIDEO</span>
          <h1 className="toolpg-title">Trim Video <span className="toolpg-title-accent">Online Free</span></h1>
          <p className="toolpg-subtitle">Cut and trim your video to exact start/end times. No re-encoding — instant download. 100% browser-based.</p>
        </div>

        <VideoTrimmer />

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
