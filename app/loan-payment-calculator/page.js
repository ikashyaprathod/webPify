import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import LoanCalc from "@/components/LoanCalc";

export const metadata = {
  title: "Loan Payment Calculator — Monthly Payment & Total Interest",
  description: "Calculate monthly loan payments, total interest, and see the full amortization schedule. Works for mortgages, personal loans, auto loans. Free, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/loan-payment-calculator" },
  openGraph: { title: "Loan Payment Calculator — Monthly Payment & Total Interest | webpifyy", description: "Calculate monthly loan payments, total interest, and see the full amortization schedule. Works for mortgages, personal loans, auto loans. Free, no signup.", url: "https://webpifyy.vercel.app/loan-payment-calculator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Loan Payment Calculator — Monthly Payment & Total Interest | webpifyy", description: "Calculate monthly loan payments, total interest, and see the full amortization schedule. Works for mortgages, personal loans, auto loans. Free, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the monthly payment on a $200,000 mortgage at 6.5%?", a: "For a 30-year mortgage: monthly rate = 6.5%/12 = 0.5417%, n = 360 payments. Monthly payment ≈ $1,264. Enter these values above to see the exact result and full amortization schedule." },
  { q: "How much interest will I pay on a 5-year car loan?", a: "Enter your loan amount, interest rate, and 5 years. The calculator shows total interest paid over the life of the loan. For example, a $25,000 loan at 7% for 5 years = ~$4,678 total interest." },
  { q: "What is an amortization schedule?", a: "An amortization schedule shows each monthly payment split into principal and interest portions. Early payments are mostly interest; as the loan matures, more goes to principal. Click 'Show Amortization Schedule' to see the full breakdown." },
  { q: "How can I reduce the total interest paid?", a: "Pay extra principal each month, make bi-weekly payments instead of monthly, or choose a shorter loan term. Even small extra payments early in the loan significantly reduce total interest." },
];

export default function LoanPaymentCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Loan Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/loan-payment-calculator#software", name: "Loan Payment Calculator", url: "https://webpifyy.vercel.app/loan-payment-calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Loan Calculator", href: "/calc/loan" }, { label: "Monthly Payment" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Loan Payment <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate your monthly payment, total interest paid, and view the full amortization schedule for any loan or mortgage.</p></div>
        <LoanCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates live as you adjust inputs.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
