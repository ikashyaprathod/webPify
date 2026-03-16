import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Mp4ToMov from "@/components/Mp4ToMov";

export const metadata = {
  title: "Convert MP4 to MOV Online Free",
  description: "Convert MP4 videos to MOV QuickTime format online free. Browser-based FFmpeg, no uploads. Compatible with Apple devices and Final Cut Pro.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/mp4-to-mov" },
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Convert MP4 to MOV Online Free | webpifyy",
    description: "Convert MP4 videos to MOV QuickTime format online free. Browser-based FFmpeg, no uploads. Compatible with Apple devices and Final Cut Pro.",
    url: "https://webpifyy.vercel.app/video/convert/mp4-to-mov",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert MP4 to MOV Online Free | webpifyy",
    description: "Convert MP4 videos to MOV QuickTime format online free. Browser-based FFmpeg, no uploads. Compatible with Apple devices and Final Cut Pro.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Why convert MP4 to MOV?", a: "MOV is Apple's native format and works best with Final Cut Pro, iMovie, and other Apple applications. Some older Apple devices also prefer MOV over MP4." },
  { q: "Does MP4 to MOV conversion lose quality?", a: "Using stream copy mode (-c copy), conversion is lossless and near-instant. Quality and file size remain identical to the source MP4." },
  { q: "How long does MP4 to MOV conversion take?", a: "With stream copy, conversion is near-instant regardless of video length. A 1GB MP4 converts in seconds without re-encoding." },
  { q: "Is MOV compatible with Windows?", a: "MOV requires QuickTime on Windows or a compatible player like VLC. For broad compatibility, MP4 is better. Use MOV when working with Apple tools." },
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
        description: "Convert MP4 videos to MOV QuickTime format online free. Browser-based FFmpeg, no uploads. Compatible with Apple devices and Final Cut Pro.",
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
