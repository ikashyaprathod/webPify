import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import LoanCalc from "@/components/LoanCalc";

export const metadata = {
  title: "Loan Calculator Online Free — Monthly Payment & Amortization",
  description: "Calculate monthly loan payments, total interest, and view a full amortization schedule. Free mortgage and personal loan calculator — no signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/loan" },
  openGraph: { title: "Loan Calculator Online Free — Monthly Payment & Amortization | webpifyy", description: "Calculate monthly loan payments, total interest, and view a full amortization schedule. Free mortgage and personal loan calculator — no signup needed.", url: "https://webpifyy.vercel.app/calc/loan", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Loan Calculator Online Free — Monthly Payment & Amortization | webpifyy", description: "Calculate monthly loan payments, total interest, and view a full amortization schedule. Free mortgage and personal loan calculator — no signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How is the monthly loan payment calculated?", a: "Using the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the principal, r is the monthly interest rate (annual rate / 12), and n is the total number of monthly payments." },
  { q: "What is an amortization schedule?", a: "An amortization schedule shows each monthly payment broken down into principal and interest portions, along with the remaining balance. Early payments are mostly interest; later payments shift toward principal." },
  { q: "Does this calculator work for mortgages?", a: "Yes. Enter your loan amount, annual interest rate, and term in years. The calculator works for mortgages, personal loans, auto loans, and any fixed-rate installment loan." },
  { q: "What happens if the interest rate is 0%?", a: "With a 0% interest rate, the monthly payment is simply the principal divided by the number of months. No interest accrues and the total payment equals the original loan amount." },
];

export default function LoanCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Loan Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/loan#software", name: "Loan Calculator", url: "https://webpifyy.vercel.app/calc/loan", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Loan Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Loan <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate monthly payments, total interest paid, and view the full amortization schedule for any loan.</p></div>
        <LoanCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All calculations run in your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates live as you adjust inputs.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
