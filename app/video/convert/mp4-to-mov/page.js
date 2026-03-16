import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Mp4ToMov from "@/components/Mp4ToMov";

export const metadata = {
  title: "MP4 to MOV Converter Free Online — webpifyy",
  description: "Convert MP4 videos to MOV format for Apple devices and Final Cut Pro online for free. No re-encoding — instant conversion. 100% browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/mp4-to-mov" },
  openGraph: {
    title: "MP4 to MOV Converter Free Online — webpifyy",
    description: "Convert MP4 videos to MOV format for Apple devices and Final Cut Pro. No re-encoding — instant conversion.",
    url: "https://webpifyy.vercel.app/video/convert/mp4-to-mov",
  },
  twitter: { card: "summary_large_image", title: "MP4 to MOV Converter Free Online — webpifyy", description: "Convert MP4 to MOV. No re-encoding, instant." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Video Tools","item":"https://webpifyy.vercel.app/video"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/video/convert"},{"@type":"ListItem","position":4,"name":"MP4 to MOV"}]})
  },
};

const faqs = [
  { q: "Why convert MP4 to MOV?", a: "MOV is Apple's QuickTime format, preferred by iMovie, Final Cut Pro, and many iOS/macOS applications. Converting to MOV ensures compatibility with Apple's ecosystem." },
  { q: "Will converting MP4 to MOV re-encode the video?", a: "No. This converter uses stream copy mode (-c copy), which moves the video and audio streams into the new container without re-encoding. Conversion is instant and quality is preserved." },
  { q: "Will the MOV file be larger than MP4?", a: "With stream copy mode the file sizes are nearly identical since the video data itself is not changed — only the container format changes." },
  { q: "Is my video file uploaded anywhere?", a: "No. All conversion happens in your browser using FFmpeg.wasm. Your videos never leave your device." },
];

export default function Mp4ToMovPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/video/convert" },
          { "@type": "ListItem", position: 4, name: "MP4 to MOV" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/convert/mp4-to-mov#software",
        name: "MP4 to MOV Converter",
        url: "https://webpifyy.vercel.app/video/convert/mp4-to-mov",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Video Tools", href: "/video" }, { label: "Convert", href: "/video/convert" }, { label: "MP4 to MOV" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MOV</span>
          <h1 className="toolpg-title">MP4 to <span className="toolpg-title-accent">MOV</span></h1>
          <p className="toolpg-subtitle">Convert MP4 videos to MOV format for Apple devices and Final Cut Pro. No re-encoding — instant conversion.</p>
        </div>
        <Mp4ToMov />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing uploaded — all browser-based.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant</h5><p className="tpg-tds">Stream copy — no re-encoding needed.</p></div>
          </div>
        </div>
        <div className="toolpg-faq">
          <div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
