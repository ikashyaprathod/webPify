import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AddSubtitles from "@/components/AddSubtitles";

export const metadata = {
  title: "Add Subtitles to Video Online Free — webpifyy",
  description: "Burn SRT subtitles into any video online for free. Upload video + SRT file, choose font size and color, download result. 100% browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/edit/add-subtitles" },
  openGraph: {
    title: "Add Subtitles to Video Online Free — webpifyy",
    description: "Burn SRT subtitles into any video. Upload video + SRT file, choose font size and color, download result.",
    url: "https://webpifyy.vercel.app/video/edit/add-subtitles",
  },
  twitter: { card: "summary_large_image", title: "Add Subtitles to Video Online Free — webpifyy", description: "Burn SRT subtitles into video. Browser-based, free." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Video Tools","item":"https://webpifyy.vercel.app/video"},{"@type":"ListItem","position":3,"name":"Edit","item":"https://webpifyy.vercel.app/video/edit"},{"@type":"ListItem","position":4,"name":"Add Subtitles"}]})
  },
};

const faqs = [
  { q: "What is subtitle burning?", a: "Burning (hardcoding) subtitles means the text is permanently rendered into the video frames. Unlike soft subtitles which can be toggled, burned subtitles are always visible regardless of the player used." },
  { q: "What subtitle format does this tool support?", a: "This tool supports SRT (SubRip) files — the most widely used subtitle format. SRT files are plain text and contain timestamps and text for each subtitle line." },
  { q: "Can I change the subtitle appearance?", a: "Yes. You can adjust the font size (12-32px) and subtitle text color before processing. For advanced styling, edit the SRT file or use a dedicated subtitling application." },
  { q: "Does this work with any video format?", a: "This tool works with MP4, WebM, MOV and other common web video formats. The output format matches the input format." },
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
