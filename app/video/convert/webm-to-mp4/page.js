import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WebmToMp4 from "@/components/WebmToMp4";

export const metadata = {
  title: "Convert WebM to MP4 Online Free",
  description: "Convert WebM videos to MP4 format online free. Browser-based FFmpeg, no uploads. Broad device compatibility. Fast, private, no signup required.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/convert/webm-to-mp4" },
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Convert WebM to MP4 Online Free | webpifyy",
    description: "Convert WebM videos to MP4 format online free. Browser-based FFmpeg, no uploads. Broad device compatibility. Fast, private, no signup required.",
    url: "https://webpifyy.vercel.app/video/convert/webm-to-mp4",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert WebM to MP4 Online Free | webpifyy",
    description: "Convert WebM videos to MP4 format online free. Browser-based FFmpeg, no uploads. Broad device compatibility. Fast, private, no signup required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "Why convert WebM to MP4?", a: "MP4 has broader device compatibility than WebM. It plays natively on all phones, tablets, smart TVs, and media players without additional codec support." },
  { q: "Does WebM to MP4 conversion reduce quality?", a: "Minor quality reduction occurs during transcoding. Set quality to High to minimize visible differences from the original WebM." },
  { q: "How long does WebM to MP4 conversion take?", a: "A 1-minute 1080p WebM typically converts in 2-3 minutes in the browser using WebAssembly." },
  { q: "What codec does the MP4 output use?", a: "Output uses H.264 video codec and AAC audio codec, the most widely supported combination for MP4 files across all devices and platforms." },
];

export default function WebmToMp4Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/video/convert" },
          { "@type": "ListItem", position: 4, name: "WebM to MP4" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/convert/webm-to-mp4#software",
        name: "WebM to MP4 Converter",
        url: "https://webpifyy.vercel.app/video/convert/webm-to-mp4",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert WebM videos to MP4 format online free. Browser-based FFmpeg, no uploads. Broad device compatibility. Fast, private, no signup required.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Video Tools", href: "/video" }, { label: "Convert", href: "/video/convert" }, { label: "WebM to MP4" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MP4</span>
          <h1 className="toolpg-title">WebM to <span className="toolpg-title-accent">MP4</span></h1>
          <p className="toolpg-subtitle">Convert WebM videos to MP4 format for maximum compatibility. H.264 + AAC output. 100% browser-based.</p>
        </div>
        <WebmToMp4 />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Universal MP4</h5><p className="tpg-tds">H.264 + AAC — plays everywhere.</p></div>
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
