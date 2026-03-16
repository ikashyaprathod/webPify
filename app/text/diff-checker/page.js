import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import DiffChecker from "@/components/DiffChecker";

export const metadata = {
  title: "Text Diff Checker Online Free — Compare Two Texts",
  description: "Compare two text blocks side by side with highlighted line-by-line and word-level differences. Shows added lines in green and removed lines in red. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/diff-checker" },
  openGraph: { title: "Text Diff Checker Online Free — Compare Two Texts", description: "Side-by-side text comparison with line and word level diff highlighting.", url: "https://webpifyy.vercel.app/text/diff-checker" },
  twitter: { card: "summary_large_image", title: "Text Diff Checker Online Free — Compare Two Texts", description: "Compare text blocks with green/red diff highlighting. Free and browser-based." },
};

const faqs = [
  { q: "How does the line-by-line diff work?", a: "The tool uses a Longest Common Subsequence (LCS) algorithm to identify which lines are shared between the two texts, then highlights additions in green and deletions in red." },
  { q: "What is word-level diff mode?", a: "Enabling word-level diff shows which specific words changed within each modified line, not just which lines changed. This is useful for spotting small edits." },
  { q: "How many lines can I compare?", a: "The diff checker handles any amount of text entirely in your browser. Very large texts (thousands of lines) may be slower due to the LCS computation." },
  { q: "Is my text sent to a server?", a: "No. All comparison logic runs in JavaScript in your browser. Your text is never transmitted anywhere." },
];

export default function DiffCheckerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
          {"@type":"ListItem","position":3,"name":"Diff Checker","item":"https://webpifyy.vercel.app/text/diff-checker"},
        ]
      },
      { "@type": ["SoftwareApplication","WebApplication"], "@id": "https://webpifyy.vercel.app/text/diff-checker#software", "name": "Text Diff Checker", "url": "https://webpifyy.vercel.app/text/diff-checker", "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "inLanguage": "en", "isAccessibleForFree": true, "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"} },
      { "@type": "FAQPage", "mainEntity": faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools",href:"/text"},{label:"Diff Checker"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DIFF</span>
          <h1 className="toolpg-title">Text Diff <span className="toolpg-title-accent">Checker</span></h1>
          <p className="toolpg-subtitle">Compare two texts side by side and instantly see every addition, deletion, and change.</p>
        </div>
        <DiffChecker />
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
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">LCS Algorithm</h5><p className="tpg-tds">Accurate line-by-line comparison.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Word Diff Mode</h5><p className="tpg-tds">Spot per-word changes easily.</p></div>
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
