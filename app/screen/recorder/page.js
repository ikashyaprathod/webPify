import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ScreenRecorder from "@/components/ScreenRecorder";

export const metadata = {
  title: "Screen Recorder Online Free — No Install Required",
  description: "Record your screen, window, or browser tab directly in your browser. No software to install. Includes audio, pause/resume, and WebM download. 100% private.",
  alternates: { canonical: "https://webpifyy.vercel.app/screen/recorder" },
  openGraph: { title: "Screen Recorder Online Free — No Install Required", description: "Record your screen in the browser with audio. Download as WebM.", url: "https://webpifyy.vercel.app/screen/recorder" },
  twitter: { card: "summary_large_image", title: "Screen Recorder Online Free — No Install Required", description: "Browser-based screen recorder with audio and no install required." },
};

const faqs = [
  { q: "Does the screen recorder require any software installation?", a: "No. It runs entirely in your browser using the Screen Capture API and MediaRecorder API. Chrome, Edge, and Firefox are all supported." },
  { q: "Can I record audio along with my screen?", a: "Yes. The recorder requests both display and system audio when you start. You can toggle audio off with the checkbox before starting." },
  { q: "What format is the recording saved in?", a: "Recordings are saved as WebM (VP9/Opus), which is the native format supported by all major browsers for MediaRecorder." },
  { q: "Is my recording uploaded anywhere?", a: "No. Everything happens entirely within your browser. No data is transmitted to any server. The recording blob is stored in memory until you download it." },
];

export default function ScreenRecorderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Screen Tools","item":"https://webpifyy.vercel.app/screen"},
          {"@type":"ListItem","position":3,"name":"Screen Recorder","item":"https://webpifyy.vercel.app/screen/recorder"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/screen/recorder#software", "name": "Screen Recorder", "url": "https://webpifyy.vercel.app/screen/recorder", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Screen Tools",href:"/screen"},{label:"Screen Recorder"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">RECORDER</span>
          <h1 className="toolpg-title">Screen <span className="toolpg-title-accent">Recorder</span></h1>
          <p className="toolpg-subtitle">Record your screen in the browser — no install, no sign-up, no uploads. Everything stays on your device.</p>
        </div>
        <ScreenRecorder />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing is uploaded. Ever.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Install</h5><p className="tpg-tds">Works in any modern browser.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">With Audio</h5><p className="tpg-tds">Capture system & mic audio.</p></div>
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
