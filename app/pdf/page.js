import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "PDF Tools Online – PDF to JPG Converter Free",
  description: "Free online PDF tools. Convert PDF pages to JPG images. Browser-based, no server uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf" },
  openGraph: {
    title: "PDF Tools Online – PDF to JPG Converter Free",
    description: "Convert PDF pages to JPG images instantly. Browser-based, no uploads.",
    url: "https://webpifyy.vercel.app/pdf",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"PDF Tools"}]})
  },
};

const tools = [
  { href:'/pdf/compress', icon:'📦', title:'PDF Compressor', desc:'Reduce PDF file size without re-printing. Remove metadata and optimize streams — 100% in your browser.', gradient:'linear-gradient(135deg,#fef2f2,#fee2e2)', cta:'Compress PDF' },
  { href:'/pdf/merge', icon:'📑', title:'Merge PDF', desc:'Combine multiple PDF files into one. Drag to reorder pages. Up to 10 files.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Merge PDFs' },
  { href:'/pdf/split', icon:'✂️', title:'Split PDF', desc:'Extract specific pages or page ranges from any PDF. Enter ranges like 1-3, 5, 7-9.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Split PDF' },
  { href:'/pdf/rotate', icon:'🔃', title:'Rotate PDF', desc:'Rotate all pages in a PDF clockwise, counter-clockwise, or 180°. Instant.', gradient:'linear-gradient(135deg,#fffbeb,#fef3c7)', cta:'Rotate PDF' },
  { href:'/pdf/jpg-to-pdf', icon:'🖼️', title:'JPG to PDF', desc:'Convert JPG, PNG, WebP images to a PDF document. Choose page size, reorder freely.', gradient:'linear-gradient(135deg,#faf5ff,#f3e8ff)', cta:'Convert Images' },
  { href:'/pdf/pdf-to-jpg',       icon:'📄', title:'PDF to JPG',        desc:'Convert every page of a PDF to a high-quality JPG. Download individually or as ZIP.', gradient:'linear-gradient(135deg,#fdf4ff,#fae8ff)', cta:'Convert PDF' },
  { href:'/pdf/add-watermark',    icon:'💧', title:'Add Watermark',      desc:'Add custom text watermark to every page of a PDF. Control font, opacity, rotation.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Add Watermark' },
  { href:'/pdf/add-password',     icon:'🔐', title:'Add Password',       desc:'Set password protection on any PDF. User and owner passwords with permission controls.', gradient:'linear-gradient(135deg,#fef2f2,#fee2e2)', cta:'Protect PDF' },
  { href:'/pdf/reorder-pages',    icon:'🔀', title:'Reorder Pages',      desc:'Rearrange, delete, or reorder PDF pages by entering a custom page order.', gradient:'linear-gradient(135deg,#fffbeb,#fef3c7)', cta:'Reorder Pages' },
];

const faqs = [
  { q:'How do I convert PDF to JPG?', a:'Upload your PDF, choose quality settings, and download each page as a JPG or all as a ZIP.' },
  { q:'Does PDF to JPG conversion lose quality?', a:'You can choose the output quality. Higher quality settings preserve more detail.' },
  { q:'Can I convert multi-page PDFs?', a:'Yes. Every page of your PDF is converted to a separate JPG image.' },
  { q:'Is it safe to convert PDF online?', a:'Yes. PDF processing runs in your browser — files are never uploaded to any server.' },
];

export default function PDFHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools" },
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'PDF Tools'}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">PDF TOOLS</span>
          <h1 className="hubv2-hero-title">PDF <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Convert and process PDF files online. Fast, private, no account required.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">PDF Tools</h2></div>
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
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Processing</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Instant</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Browser</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{"--prog":"95%"}}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🔒</span><p className="hubv2-stat-label">Privacy</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">100%</span><span className="hubv2-stat-badge hubv2-stat-badge--green">No Upload</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{"--prog":"100%"}}></div></div></div>
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
