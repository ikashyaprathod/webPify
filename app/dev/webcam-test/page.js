import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WebcamTest from "@/components/WebcamTest";

export const metadata = {
  title: "Webcam Test Online Free — Test Camera & Microphone",
  description: "Test your webcam and microphone online. Check camera resolution, device label, audio levels, and switch between devices. Free, browser-based, nothing recorded.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/webcam-test" },
  openGraph: {
    title: "Webcam Test Online Free — Test Camera & Microphone",
    description: "Test your webcam and microphone online. Check resolution, frame rate, audio levels, and device info.",
    url: "https://webpifyy.vercel.app/dev/webcam-test",
  },
  twitter: { card: "summary_large_image", title: "Webcam Test Online Free", description: "Test your camera and microphone instantly in your browser." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"Webcam Test"}]})
  },
};

const faqs = [
  { q: "How do I test my webcam?", a: "Click 'Start Camera', allow the browser permission prompt, and your webcam will appear live. The tool displays your camera resolution and device name automatically." },
  { q: "Why does the browser ask for permission?", a: "Browsers require explicit user permission to access camera and microphone hardware. This protects your privacy. The permission applies only to this tab and can be revoked at any time from your browser settings." },
  { q: "Is my video recorded or uploaded?", a: "No. The video stream is displayed only in your browser using the HTML5 video element. Nothing is recorded, stored, or transmitted. When you click Stop, the browser releases camera access immediately." },
  { q: "What does the microphone level meter show?", a: "The audio level bar shows the real-time amplitude of your microphone input, analysed using the Web Audio API. It is useful for confirming your microphone is working and detecting background noise." },
];

export default function WebcamTestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Webcam Test" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/webcam-test#software",
        name: "Webcam Test",
        url: "https://webpifyy.vercel.app/dev/webcam-test",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Webcam Test" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WEBCAM</span>
          <h1 className="toolpg-title">Webcam <span className="toolpg-title-accent">Test</span></h1>
          <p className="toolpg-subtitle">Test your webcam and microphone online. Check resolution, frame rate, audio levels, and device info.</p>
        </div>

        <WebcamTest />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
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
