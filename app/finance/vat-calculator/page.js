import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VatCalc from "@/components/VatCalc";

export const metadata = {
  title: "VAT Calculator Online Free — Add or Remove VAT Any Rate",
  description: "Add VAT to a net price or remove VAT from a gross price. Common rate presets (5%, 10%, 15%, 20%, 25%) or custom rate. Free VAT calculator, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/finance/vat-calculator" },
  openGraph: { title: "VAT Calculator Online Free — Add or Remove VAT Any Rate | webpifyy", description: "Add VAT to a net price or remove VAT from a gross price. Common rate presets (5%, 10%, 15%, 20%, 25%) or custom rate. Free VAT calculator, no signup.", url: "https://webpifyy.vercel.app/finance/vat-calculator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "VAT Calculator Online Free — Add or Remove VAT Any Rate | webpifyy", description: "Add VAT to a net price or remove VAT from a gross price. Common rate presets (5%, 10%, 15%, 20%, 25%) or custom rate. Free VAT calculator, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I add VAT to a price?", a: "Gross price = Net price × (1 + VAT rate/100). For example, £100 + 20% VAT = £100 × 1.20 = £120." },
  { q: "How do I remove VAT from a price?", a: "Net price = Gross price ÷ (1 + VAT rate/100). For example, remove 20% VAT from £120: £120 ÷ 1.20 = £100 net, VAT = £20." },
  { q: "What is the UK standard VAT rate?", a: "The UK standard VAT rate is 20% as of 2024. Reduced rate is 5% (e.g. home energy, children's car seats). Zero-rated includes food, books, and children's clothing." },
  { q: "What is the EU standard VAT rate?", a: "EU VAT rates vary by country. Common rates: Germany 19%, France 20%, Italy 22%, Ireland 23%, Sweden 25%. The minimum standard rate in the EU is 15%. Use the custom rate field for your country." },
];

export default function VatCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://webpifyy.vercel.app/finance" }, { "@type": "ListItem", position: 3, name: "VAT Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/finance/vat-calculator#software", name: "VAT Calculator", url: "https://webpifyy.vercel.app/finance/vat-calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Finance", href: "/finance" }, { label: "VAT Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">FINANCE</span><h1 className="toolpg-title">VAT <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Add or remove VAT from any price. Common rate presets (5%–25%) plus custom rate support. Shows net, VAT amount, and gross.</p></div>
        <VatCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All calculations run locally.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
