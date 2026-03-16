import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TextToSpeech from "@/components/TextToSpeech";

export const metadata = {
  title: "Text to Speech Online Free — TTS Voice Reader",
  description: "Convert any text to speech in your browser using your system's voices. Control speed, pitch, and voice. Live word highlighting shows the current word being spoken.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/text-to-speech" },
  openGraph: { title: "Text to Speech Online Free — TTS Voice Reader", description: "Read any text aloud with controllable speed, pitch, and voice selection.", url: "https://webpifyy.vercel.app/text/text-to-speech" },
  twitter: { card: "summary_large_image", title: "Text to Speech Online Free — TTS Voice Reader", description: "Free browser-based TTS with live word highlighting, speed, and pitch control." },
};

const faqs = [
  { q: "Which voices are available?", a: "Available voices depend on your operating system and browser. Windows typically includes Microsoft voices, macOS includes Siri/Alex voices, and Chrome adds Google voices. The voice selector shows all available options." },
  { q: "Can I control reading speed?", a: "Yes. The Speed slider ranges from 0.5x (half speed) to 2x (double speed). The default is 1x normal speed." },
  { q: "What is word highlighting?", a: "As the text is read, the current word is highlighted in the preview area below the text box, so you can follow along visually." },
  { q: "Can I download the audio?", a: "No. The Web Speech API used by browsers does not provide a way to export or download the generated audio. For audio download, a server-side TTS service would be required." },
];

export default function TextToSpeechPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
          {"@type":"ListItem","position":3,"name":"Text to Speech","item":"https://webpifyy.vercel.app/text/text-to-speech"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/text/text-to-speech#software", "name": "Text to Speech", "url": "https://webpifyy.vercel.app/text/text-to-speech", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools",href:"/text"},{label:"Text to Speech"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TTS</span>
          <h1 className="toolpg-title">Text to <span className="toolpg-title-accent">Speech</span></h1>
          <p className="toolpg-subtitle">Read any text aloud with voice, speed, and pitch control — entirely in your browser.</p>
        </div>
        <TextToSpeech />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Word Highlight</h5><p className="tpg-tds">Follow along as text is read.</p></div>
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
