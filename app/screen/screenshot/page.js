import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ScreenshotCapture from "@/components/ScreenshotCapture";

export const metadata = {
  title: "Screenshot Tool Online Free \u2014 Capture & Annotate",
  description: "Capture and annotate screenshots online free. Paste from clipboard, add annotations, download as PNG or JPG. Browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/screen/screenshot" },
  openGraph: { title: "Screenshot Tool Online Free \u2014 Capture & Annotate | webpifyy", description: "Capture and annotate screenshots online free. Paste from clipboard, add annotations, download as PNG or JPG. Browser-based, no uploads.", url: "https://webpifyy.vercel.app/screen/screenshot", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Screenshot Tool Online Free \u2014 Capture & Annotate | webpifyy", description: "Capture and annotate screenshots online free. Paste from clipboard, add annotations, download as PNG or JPG. Browser-based, no uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I use the screenshot tool?", a: "Take a screenshot with your OS (Win+Shift+S on Windows, Cmd+Shift+4 on Mac), then paste it directly into the tool with Ctrl+V or Cmd+V." },
  { q: "Can I annotate my screenshot?", a: "Yes. Add text labels, arrows, and rectangles to highlight areas of your screenshot. Useful for bug reports, documentation, and tutorials." },
  { q: "Can I crop the screenshot after pasting?", a: "Yes. Use the crop tool to select the exact area you want before downloading. Remove unnecessary parts for cleaner images." },
  { q: "What format can I download the screenshot as?", a: "Download as PNG (lossless, best quality) or JPG (smaller file size). PNG is recommended for screenshots containing text or UI elements." },
];

export default function ScreenshotPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Screen Tools","item":"https://webpifyy.vercel.app/screen"},
          {"@type":"ListItem","position":3,"name":"Screenshot Tool","item":"https://webpifyy.vercel.app/screen/screenshot"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/screen/screenshot#software", "name": "Screenshot Tool", "url": "https://webpifyy.vercel.app/screen/screenshot", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Screen Tools",href:"/screen"},{label:"Screenshot Tool"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SCREENSHOT</span>
          <h1 className="toolpg-title">Screenshot <span className="toolpg-title-accent">Tool</span></h1>
          <p className="toolpg-subtitle">Paste, drag, or upload screenshots. Annotate with rectangles and text, then download as PNG or JPG.</p>
        </div>
        <ScreenshotCapture />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Operations Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Avg Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use instantly, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Paste & Go</h5><p className="tpg-tds">Ctrl+V to load any screenshot.</p></div>
          </div>
        </div>
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
