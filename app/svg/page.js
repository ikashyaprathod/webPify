import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "SVG Tools Online – Optimize & Minify SVG Free",
  description: "Free online SVG tools. Optimize and minify SVG files using SVGO. Remove metadata, optimize paths. Free, instant.",
  alternates: { canonical: "https://webpifyy.vercel.app/svg" },
  openGraph: {
    title: "SVG Tools Online – Optimize & Minify SVG Free",
    description: "Optimize and minify SVG files using SVGO. Remove metadata, optimize paths.",
    url: "https://webpifyy.vercel.app/svg",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"SVG Tools"}]})
  },
};

const tools = [
  { href:'/svg/optimize', icon:'✨', title:'SVG Optimizer', desc:'Minify SVGs with SVGO. Strip metadata, merge styles, shrink path data by up to 80%.', gradient:'linear-gradient(135deg,#f0f9ff,#e0f2fe)', cta:'Optimize SVG' },
];

const faqs = [
  { q:'What is SVG optimization?', a:'SVG optimization removes unnecessary code from SVG files (comments, metadata, redundant paths) to reduce file size.' },
  { q:'How much can SVG files be compressed?', a:'Typically 40–80% size reduction depending on the SVG complexity and how it was created.' },
  { q:'Does SVG optimization affect rendering?', a:'No. SVGO only removes redundant code. The visual output is identical to the original.' },
  { q:'What does SVGO do?', a:'SVGO (SVG Optimizer) is an open-source Node.js tool that applies a set of optimization plugins to clean up SVG markup.' },
];

export default function SVGHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "SVG Tools" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'SVG Tools'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">SVG TOOLS</span>
          <h1 className="hubv2-hero-title">SVG <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Optimize and minify SVG files using SVGO. Reduce size without losing quality.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">SVG Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {tools.map(card => (
              <div key={card.href} className="hubv2-card" style={{"--card-gradient":card.gradient}}>
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
        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Processing Statistics</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">📉</span><p className="hubv2-stat-label">Size Reduction</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">80%</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Typical</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{"--prog":"80%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">✅</span><p className="hubv2-stat-label">Quality</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Lossless</span><span className="hubv2-stat-badge hubv2-stat-badge--green">SVGO</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{"--prog":"100%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">💰</span><p className="hubv2-stat-label">Cost</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Free</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">Always</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{"--prog":"100%"}}></div></div></div>
          </div>
        </section>
        <section className="hubv2-faq">
          <h2 className="hubv2-faq-title">Frequently Asked Questions</h2>
          {faqs.map((f,i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </section>
      </PageShell>
    </>
  );
}
