import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import RoiCalc from "@/components/RoiCalc";

export const metadata = {
  title: "ROI Calculator Online Free — Return on Investment & CAGR",
  description: "Calculate ROI, net profit or loss, and annualized return (CAGR) from any investment. Free online return on investment calculator — no signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/finance/roi-calculator" },
  openGraph: { title: "ROI Calculator Online Free — Return on Investment & CAGR | webpifyy", description: "Calculate ROI, net profit or loss, and annualized return (CAGR) from any investment. Free online return on investment calculator — no signup needed.", url: "https://webpifyy.vercel.app/finance/roi-calculator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "ROI Calculator Online Free — Return on Investment & CAGR | webpifyy", description: "Calculate ROI, net profit or loss, and annualized return (CAGR) from any investment. Free online return on investment calculator — no signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the ROI formula?", a: "ROI = ((Final Value − Initial Investment) / Initial Investment) × 100. For example, invest $10,000, get back $13,500: ROI = (3,500/10,000) × 100 = 35%." },
  { q: "What is CAGR (annualized ROI)?", a: "CAGR = (Final Value / Initial Value)^(1/years) − 1. It is the constant annual growth rate that would produce the same final value. More useful than total ROI for comparing investments of different durations." },
  { q: "What is a good ROI?", a: "It depends on the investment type and risk. The S&P 500 historically returns ~7-10% annually (CAGR). Real estate averages ~8-12%. A higher ROI is better, but must be weighed against risk and time horizon." },
  { q: "How is ROI different from profit margin?", a: "ROI measures return relative to the cost of the investment. Profit margin measures profit as a percentage of revenue. ROI is used for investment decisions; profit margin for business performance." },
];

export default function RoiCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://webpifyy.vercel.app/finance" }, { "@type": "ListItem", position: 3, name: "ROI Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/finance/roi-calculator#software", name: "ROI Calculator", url: "https://webpifyy.vercel.app/finance/roi-calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Finance", href: "/finance" }, { label: "ROI Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">FINANCE</span><h1 className="toolpg-title">ROI <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate return on investment, net profit/loss, annualized CAGR, and return multiple from any investment.</p></div>
        <RoiCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All calculations run locally.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
