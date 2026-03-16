import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AddSubtitles from "@/components/AddSubtitles";

export const metadata = {
  title: "Add Subtitles to Video Online Free — SRT Burn In",
  description: "Add and burn subtitles into video online free. Upload SRT file, customize font and color. FFmpeg WebAssembly processing, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/add-subtitles" },
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Add Subtitles to Video Online Free — SRT Burn In | webpifyy",
    description: "Add and burn subtitles into video online free. Upload SRT file, customize font and color. FFmpeg WebAssembly processing, no uploads needed.",
    url: "https://webpifyy.vercel.app/video/edit/add-subtitles",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Subtitles to Video Online Free — SRT Burn In | webpifyy",
    description: "Add and burn subtitles into video online free. Upload SRT file, customize font and color. FFmpeg WebAssembly processing, no uploads needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I add subtitles to a video?", a: "Upload your video and SRT subtitle file. Set font size and color, then click process. FFmpeg burns the subtitles permanently into the video." },
  { q: "What subtitle format is supported?", a: "SRT (SubRip Text) is the supported format. It is the most universal subtitle format, supported by all major video players and editing software." },
  { q: "Can I create an SRT file for my video?", a: "SRT files are plain text files with timestamp/text pairs. Use a text editor or auto-generate one using YouTube's auto-caption feature." },
  { q: "Are subtitles burned in permanently?", a: "Yes. This tool burns subtitles directly into the video frames. They cannot be turned off after processing. This is called hardcoded subtitles." },
];

export default function AddSubtitlesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Tools", item: "https://webpifyy.vercel.app/video" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/video/edit" },
          { "@type": "ListItem", position: 4, name: "Add Subtitles" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/edit/add-subtitles#software",
        name: "Add Subtitles to Video",
        url: "https://webpifyy.vercel.app/video/edit/add-subtitles",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Add and burn subtitles into video online free. Upload SRT file, customize font and color. FFmpeg WebAssembly processing, no uploads needed.",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Video Tools", href: "/video" }, { label: "Edit", href: "/video/edit" }, { label: "Add Subtitles" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SUBTITLES</span>
          <h1 className="toolpg-title">Add <span className="toolpg-title-accent">Subtitles</span></h1>
          <p className="toolpg-subtitle">Burn SRT subtitles into any video. Upload video + SRT file, choose font size and color, download result.</p>
        </div>
        <AddSubtitles />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Hardcoded Subs</h5><p className="tpg-tds">Subtitles burned in — play on any device.</p></div>
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
