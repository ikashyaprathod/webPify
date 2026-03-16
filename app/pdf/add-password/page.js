import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PdfPassword from "@/components/PdfPassword";

export const metadata = {
  title: "Add Password to PDF Online Free \u2014 Protect PDF",
  description: "Protect PDF files with a password online free. Set open and owner passwords. Control permissions. Browser-based pdf-lib, no uploads needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/add-password" },
  openGraph: {
    title: "Add Password to PDF Online Free \u2014 Protect PDF | webpifyy",
    description: "Protect PDF files with a password online free. Set open and owner passwords. Control permissions. Browser-based pdf-lib, no uploads needed.",
    url: "https://webpifyy.vercel.app/pdf/add-password",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Password to PDF Online Free \u2014 Protect PDF | webpifyy",
    description: "Protect PDF files with a password online free. Set open and owner passwords. Control permissions. Browser-based pdf-lib, no uploads needed.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "What types of passwords can I set on a PDF?", a: "Set a user password (required to open the document) and an owner password (required to edit, print or copy content). Both can be set independently." },
  { q: "What permissions can I restrict?", a: "Restrict printing, copying text, editing content, and adding annotations. Permissions are enforced by PDF reader software that respects PDF standards." },
  { q: "Is password-protected PDF secure?", a: "PDF password protection uses AES-256 encryption. It is secure against casual access. For highly sensitive documents, consider additional security measures." },
  { q: "Can I remove a PDF password later?", a: "Without the password, removal is not possible. With the correct password, any PDF tool that supports decryption can remove the protection." },
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
