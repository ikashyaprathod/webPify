import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import LoremIpsum from "@/components/LoremIpsum";

export const metadata = {
  title: "Lorem Ipsum Generator Free Online — webpifyy",
  description: "Generate lorem ipsum placeholder text by words, sentences, or paragraphs. Option to start with 'Lorem ipsum...' and wrap in HTML paragraph tags. Free, instant.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/lorem-ipsum" },
  openGraph: { title: "Lorem Ipsum Generator Free Online — webpifyy", description: "Generate placeholder lorem ipsum text by words, sentences, or paragraphs.", url: "https://webpifyy.vercel.app/text/lorem-ipsum" },
  twitter: { card: "summary_large_image", title: "Lorem Ipsum Generator Free Online — webpifyy", description: "Generate lorem ipsum with optional HTML paragraph wrapping." },
};

const faqs = [
  { q: "What is Lorem Ipsum?", a: "Lorem ipsum is standard placeholder text used in design and publishing to fill space where real content will go. It originates from a scrambled passage of Cicero's 'de Finibus Bonorum et Malorum' from 45 BC." },
  { q: "Can I generate just a few words instead of full paragraphs?", a: "Yes. Use the type selector to switch between Words, Sentences, and Paragraphs, then set the number you need in the Number input." },
  { q: "What does 'Wrap in <p> tags' do?", a: "Enabling this option wraps each paragraph (or the entire output for words/sentences) in HTML <p> tags, making the output ready to paste directly into HTML markup." },
  { q: "Can I download the generated text?", a: "Yes. Click 'Download .txt' to save the generated content as a plain text file to your device." },
];

export default function LoremIpsumPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
          {"@type":"ListItem","position":3,"name":"Lorem Ipsum Generator","item":"https://webpifyy.vercel.app/text/lorem-ipsum"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/text/lorem-ipsum#software", "name": "Lorem Ipsum Generator", "url": "https://webpifyy.vercel.app/text/lorem-ipsum", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools",href:"/text"},{label:"Lorem Ipsum Generator"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">LOREM IPSUM</span>
          <h1 className="toolpg-title">Lorem Ipsum <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate placeholder text by words, sentences, or paragraphs — with optional HTML output.</p>
        </div>
        <LoremIpsum />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">HTML Ready</h5><p className="tpg-tds">Optional &lt;p&gt; tag wrapping.</p></div>
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
