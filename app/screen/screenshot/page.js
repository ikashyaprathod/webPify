import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ScreenshotCapture from "@/components/ScreenshotCapture";

export const metadata = {
  title: "Screenshot Tool Online Free — Capture & Annotate",
  description: "Paste, drag-and-drop, or upload screenshots. Draw rectangles, add text annotations, and download as PNG or JPG. Works entirely in your browser.",
  alternates: { canonical: "https://webpifyy.vercel.app/screen/screenshot" },
  openGraph: { title: "Screenshot Tool Online Free — Capture & Annotate", description: "Annotate screenshots with rectangles and text. Download as PNG or JPG.", url: "https://webpifyy.vercel.app/screen/screenshot" },
  twitter: { card: "summary_large_image", title: "Screenshot Tool Online Free — Capture & Annotate", description: "Paste or drag screenshots, annotate, and download. Fully browser-based." },
};

const faqs = [
  { q: "How do I add a screenshot to the tool?", a: "You can paste (Ctrl+V / Cmd+V) any image from your clipboard, drag and drop an image file onto the drop zone, or click 'Or browse file' to select a file." },
  { q: "What annotation tools are available?", a: "You can draw rectangle outlines on the screenshot and add text labels. Select the tool from the toolbar, then click or drag on the canvas." },
  { q: "Can I copy the annotated screenshot back to my clipboard?", a: "Yes. Click 'Copy to Clipboard' to write the annotated canvas as a PNG directly to your clipboard, ready to paste anywhere." },
  { q: "Is the image uploaded to a server?", a: "No. All processing happens in your browser using HTML5 Canvas. No image data leaves your device at any point." },
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
