import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import WordCounter from "@/components/WordCounter";

export const metadata = {
  title: "Word Counter Online Free \u2014 Count Words Characters",
  description: "Count words, characters, sentences, paragraphs and reading time online free. Live stats as you type. No signup, no data stored. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/word-counter" },
  openGraph: { title: "Word Counter Online Free \u2014 Count Words Characters | webpifyy", description: "Count words, characters, sentences, paragraphs and reading time online free. Live stats as you type. No signup, no data stored. Browser-based.", url: "https://webpifyy.vercel.app/text/word-counter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Word Counter Online Free \u2014 Count Words Characters | webpifyy", description: "Count words, characters, sentences, paragraphs and reading time online free. Live stats as you type. No signup, no data stored. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What does the word counter measure?", a: "Words, characters (with and without spaces), sentences, paragraphs, reading time at 200 words per minute, and speaking time at 130 words per minute. All update live." },
  { q: "Is there a word count limit?", a: "No. Paste as much text as needed. The counter handles entire documents, essays, and long-form content without performance issues." },
  { q: "Does the word counter store my text?", a: "No. All processing happens in your browser using JavaScript. Text is never sent to any server or stored anywhere." },
  { q: "Can I count words in multiple languages?", a: "Yes. The counter detects word boundaries for Latin-script languages accurately. CJK languages use character count as the primary metric." },
];

export default function WordCounterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
          {"@type":"ListItem","position":3,"name":"Word Counter","item":"https://webpifyy.vercel.app/text/word-counter"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/text/word-counter#software", "name": "Word Counter", "url": "https://webpifyy.vercel.app/text/word-counter", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools",href:"/text"},{label:"Word Counter"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WORD COUNT</span>
          <h1 className="toolpg-title">Word <span className="toolpg-title-accent">Counter</span></h1>
          <p className="toolpg-subtitle">Count words, characters, sentences, and more. Live stats update as you type.</p>
        </div>
        <WordCounter />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Live Stats</h5><p className="tpg-tds">Updates with every keystroke.</p></div>
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
