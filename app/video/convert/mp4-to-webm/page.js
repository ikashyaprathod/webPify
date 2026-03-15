import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoConverter from "@/components/VideoConverter";

export const metadata = {
  title: "MP4 to WebM Converter Online Free",
  description: "Convert MP4 videos to WebM format online for free. VP9 encoding, smaller files for web use. 100% browser-based using FFmpeg.wasm.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/mp4-to-webm" },
  keywords: ["mp4 to webm", "convert mp4 to webm", "webm converter online", "mp4 webm converter"],
  openGraph: {
    title: "MP4 to WebM Converter Online Free",
    description: "Convert MP4 to WebM in your browser. VP9 encoding. No uploads.",
    url: "https://webpifyy.vercel.app/video/convert/mp4-to-webm",
  },
  twitter: { card: "summary_large_image", title: "MP4 to WebM Converter Online Free", description: "Convert MP4 to WebM. No uploads, no sign-up." },
};

const faqs = [
  { q: "Why convert MP4 to WebM?", a: "WebM with VP9 encoding produces smaller files than MP4 with H.264, making it ideal for web use. It is also open-source and royalty-free." },
  { q: "Does conversion affect video quality?", a: "We use CRF 30 with libvpx-vp9 which gives excellent quality at small file sizes. The conversion may slightly reduce quality compared to the original." },
  { q: "Is my video uploaded to a server?", a: "No. All conversion happens in your browser using FFmpeg.wasm. Your files never leave your device." },
  { q: "How long does conversion take?", a: "Conversion time depends on your device's CPU and the video length. A 1-minute video typically takes 30–90 seconds." },
];

export default function Mp4ToWebmPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/video/convert" },
          { "@type": "ListItem", position: 4, name: "MP4 to WebM" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/convert/mp4-to-webm#software",
        name: "MP4 to WebM Converter",
        url: "https://webpifyy.vercel.app/video/convert/mp4-to-webm",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert MP4 to WebM online. VP9 encoding. 100% browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Video Tools",href:"/video"},{label:"Convert",href:"/video/convert"},{label:"MP4 to WebM"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">VIDEO</span>
          <h1 className="toolpg-title">MP4 to WebM <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert MP4 videos to WebM format using VP9 encoding. Smaller file sizes for web use. 100% browser-based.</p>
        </div>

        <VideoConverter />

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
