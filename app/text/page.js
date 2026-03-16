import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Free Text Tools Online \u2014 Counter Converter Editor",
  description: "Free online text tools \u2014 word counter, case converter, lorem ipsum generator, diff checker, text to speech. Browser-based, no data stored.",
  alternates: { canonical: "https://webpifyy.vercel.app/text" },
  openGraph: { title: "Free Text Tools Online \u2014 Counter Converter Editor | webpifyy", description: "Free online text tools \u2014 word counter, case converter, lorem ipsum generator, diff checker, text to speech. Browser-based, no data stored.", url: "https://webpifyy.vercel.app/text", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Text Tools Online \u2014 Counter Converter Editor | webpifyy", description: "Free online text tools \u2014 word counter, case converter, lorem ipsum generator, diff checker, text to speech. Browser-based, no data stored.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const toolCards = [
  { href: "/text/word-counter", icon: "📝", title: "Word Counter", desc: "Count words, characters, sentences, paragraphs, and estimate reading and speaking time.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Count Words" },
  { href: "/text/case-converter", icon: "Aa", title: "Case Converter", desc: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case, and more.", gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)", cta: "Convert Case" },
  { href: "/text/lorem-ipsum", icon: "📄", title: "Lorem Ipsum", desc: "Generate placeholder lorem ipsum text by words, sentences, or paragraphs with optional HTML wrapping.", gradient: "linear-gradient(135deg,#fef9c3,#fde68a)", cta: "Generate Text" },
  { href: "/text/diff-checker", icon: "⟺", title: "Diff Checker", desc: "Compare two text blocks side by side with line-by-line and word-level diff highlighting.", gradient: "linear-gradient(135deg,#dcfce7,#bbf7d0)", cta: "Compare Text" },
  { href: "/text/text-to-speech", icon: "🔊", title: "Text to Speech", desc: "Read any text aloud using your browser's speech synthesis. Control voice, speed, and pitch.", gradient: "linear-gradient(135deg,#ede9fe,#c4b5fd)", cta: "Listen" },
];

export default function TextHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Text Tools","item":"https://webpifyy.vercel.app/text"},
        ]
      },
      {
        "@type": ["SoftwareApplication","WebApplication"],
        "@id": "https://webpifyy.vercel.app/text#software",
        "name": "Text Tools",
        "url": "https://webpifyy.vercel.app/text",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"}
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Text Tools"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">TEXT TOOLS</span>
          <h1 className="hubv2-hero-title">Text <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Essential text utilities for writers, developers, and content creators — all free, all in your browser.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📝</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⚡</span><h2 className="hubv2-section-hd-title">All Text Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {toolCards.map(card => (
              <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                <div className="hubv2-card-body">
                  <h3 className="hubv2-card-title">{card.title}</h3>
                  <p className="hubv2-card-desc">{card.desc}</p>
                  <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
}
