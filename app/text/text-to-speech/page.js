import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TextToSpeech from "@/components/TextToSpeech";

export const metadata = {
  title: "Text to Speech Online Free \u2014 TTS Voice Reader",
  description: "Convert text to speech online free using Web Speech API. Multiple voices, speed and pitch control. Play text aloud instantly. No uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/text-to-speech" },
  openGraph: { title: "Text to Speech Online Free \u2014 TTS Voice Reader | webpifyy", description: "Convert text to speech online free using Web Speech API. Multiple voices, speed and pitch control. Play text aloud instantly. No uploads needed.", url: "https://webpifyy.vercel.app/text/text-to-speech", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Text to Speech Online Free \u2014 TTS Voice Reader | webpifyy", description: "Convert text to speech online free using Web Speech API. Multiple voices, speed and pitch control. Play text aloud instantly. No uploads needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I use the text to speech tool?", a: "Paste or type your text, select a voice from the available options, adjust speed and pitch, then click Play. The text reads aloud instantly." },
  { q: "What voices are available?", a: "Voices depend on your operating system. Windows, Mac, and mobile devices include different voice options. Chrome and Edge typically have the most voice choices." },
  { q: "Can I download the audio as an MP3?", a: "The Web Speech API does not support audio download. This tool is for live playback only. For downloadable TTS audio, use a dedicated TTS service." },
  { q: "What languages are supported?", a: "Language support depends on your device's installed voices. Most devices include English, Spanish, French, German, and other major languages." },
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
