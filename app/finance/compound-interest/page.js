import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import CompoundInterest from "@/components/CompoundInterest";

export const metadata = {
  title: "Compound Interest Calculator — Future Value with Contributions",
  description: "Calculate compound interest with monthly contributions. See future value, total interest earned, and year-by-year growth table. Free, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/finance/compound-interest" },
  openGraph: { title: "Compound Interest Calculator — Future Value with Contributions | webpifyy", description: "Calculate compound interest with monthly contributions. See future value, total interest earned, and year-by-year growth table. Free, no signup.", url: "https://webpifyy.vercel.app/finance/compound-interest", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Compound Interest Calculator — Future Value with Contributions | webpifyy", description: "Calculate compound interest with monthly contributions. See future value, total interest earned, and year-by-year growth table. Free, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the compound interest formula?", a: "A = P(1 + r/n)^(nt), where P = principal, r = annual interest rate (decimal), n = compounding frequency per year, t = time in years. With regular contributions, each payment also compounds over the remaining period." },
  { q: "How does compounding frequency affect growth?", a: "More frequent compounding yields slightly more. $10,000 at 7% for 10 years: annual compounding = $19,672; monthly compounding = $20,097; daily = $20,137. The difference is small but grows with time and rate." },
  { q: "What is the rule of 72?", a: "Divide 72 by the annual interest rate to estimate how long it takes to double your money. At 7% annual return: 72 ÷ 7 ≈ 10.3 years. At 10%: 72 ÷ 10 = 7.2 years." },
  { q: "How much should I save per month to reach $1 million?", a: "At 7% annual return compounded monthly, starting from $0: saving $500/month = ~32 years; $1,000/month = ~27 years; $2,000/month = ~22 years. Starting earlier dramatically reduces the monthly amount needed." },
];

export default function CompoundInterestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://webpifyy.vercel.app/finance" }, { "@type": "ListItem", position: 3, name: "Compound Interest Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/finance/compound-interest#software", name: "Compound Interest Calculator", url: "https://webpifyy.vercel.app/finance/compound-interest", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Finance", href: "/finance" }, { label: "Compound Interest Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">FINANCE</span><h1 className="toolpg-title">Compound Interest <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate future investment value with compound interest and regular monthly contributions. Choose compounding frequency and see year-by-year growth.</p></div>
        <CompoundInterest />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">4</p><p className="tpg-sl">Compounding Modes</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All calculations run locally.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates live as you adjust inputs.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
