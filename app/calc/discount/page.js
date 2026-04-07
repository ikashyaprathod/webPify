import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import DiscountCalc from "@/components/DiscountCalc";

export const metadata = {
  title: "Discount Calculator Online Free — Sale Price & Savings",
  description: "Calculate discounted price, savings amount, and discount percentage instantly. Enter original price + % off, or final price, or savings — free discount calculator.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/discount" },
  openGraph: { title: "Discount Calculator Online Free — Sale Price & Savings | webpifyy", description: "Calculate discounted price, savings amount, and discount percentage instantly. Enter original price + % off, or final price, or savings — free discount calculator.", url: "https://webpifyy.vercel.app/calc/discount", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Discount Calculator Online Free — Sale Price & Savings | webpifyy", description: "Calculate discounted price, savings amount, and discount percentage instantly. Enter original price + % off, or final price, or savings — free discount calculator.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I calculate a discounted price?", a: "Multiply the original price by the discount percentage and divide by 100 to get the savings amount. Subtract savings from the original price to get the final price. For example: $80 item with 25% off → savings = $20 → final price = $60." },
  { q: "How do I find the discount percentage from two prices?", a: "Divide the savings (original minus final price) by the original price, then multiply by 100. For example: $100 original, $75 final → savings = $25 → discount = (25/100) × 100 = 25%." },
  { q: "What is the '% Off' mode vs. 'Final Price' mode?", a: "In '% Off' mode you enter the original price and discount rate. In 'Final Price' mode you enter both prices and it calculates the discount percentage and savings. In 'Savings Amount' mode you enter the original price and how much you save." },
  { q: "Can this calculate stacked discounts?", a: "For stacked discounts, apply them sequentially: first discount reduces to an intermediate price, then apply the second discount to that intermediate price. They do not simply add together." },
];

export default function DiscountCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Discount Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/discount#software", name: "Discount Calculator", url: "https://webpifyy.vercel.app/calc/discount", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Discount Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Discount <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Find the sale price, savings amount, and discount percentage. Work backwards from any two known values.</p></div>
        <DiscountCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Results update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
