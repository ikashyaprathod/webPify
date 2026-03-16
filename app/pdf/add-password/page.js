import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfPassword from "@/components/PdfPassword";

export const metadata = {
  title: "PDF Password Protect Online Free — webpifyy",
  description: "Add password protection to PDF files online for free. Set user and owner passwords with permission controls. Browser-based pdf-lib processing.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/add-password" },
  openGraph: {
    title: "PDF Password Protect Online Free — webpifyy",
    description: "Add password protection to PDF files. Set user and owner passwords with permission controls.",
    url: "https://webpifyy.vercel.app/pdf/add-password",
  },
  twitter: { card: "summary_large_image", title: "PDF Password Protect Online Free — webpifyy", description: "Password protect PDF files. Set permissions." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"PDF Tools","item":"https://webpifyy.vercel.app/pdf"},{"@type":"ListItem","position":3,"name":"Add Password"}]})
  },
};

const faqs = [
  { q: "What is the difference between user and owner passwords?", a: "The user password (also called open password) is required to open and view the PDF. The owner password controls editing permissions such as printing and copying text." },
  { q: "Is this tool's encryption secure?", a: "This browser-based tool uses pdf-lib for PDF metadata protection. For strong AES-256 encryption that will be enforced by PDF readers, use a desktop tool such as Adobe Acrobat or qpdf." },
  { q: "What permissions can I control?", a: "You can toggle whether the document allows printing and whether text copying is permitted. These permissions are set alongside the password metadata." },
  { q: "Is my PDF uploaded to a server?", a: "No. All processing happens in your browser using pdf-lib. Your PDF never leaves your device." },
];

export default function PdfAddPasswordPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "Add Password" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/add-password#software",
        name: "PDF Password Protector",
        url: "https://webpifyy.vercel.app/pdf/add-password",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF Tools", href: "/pdf" }, { label: "Add Password" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">PDF <span className="toolpg-title-accent">Password</span></h1>
          <p className="toolpg-subtitle">Add password protection to PDF files. Set user and owner passwords with permission controls.</p>
        </div>
        <PdfPassword />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing uploaded — all browser-based.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant</h5><p className="tpg-tds">Process in your browser instantly.</p></div>
          </div>
        </div>
        <div className="toolpg-faq">
          <div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
