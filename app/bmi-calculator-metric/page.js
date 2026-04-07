import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import BmiCalc from "@/components/BmiCalc";

export const metadata = {
  title: "BMI Calculator Metric — Body Mass Index cm and kg",
  description: "Free BMI calculator using metric units (cm and kg). Enter height in centimeters and weight in kilograms to get your BMI and category instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/bmi-calculator-metric" },
  openGraph: { title: "BMI Calculator Metric — Body Mass Index cm and kg | webpifyy", description: "Free BMI calculator using metric units (cm and kg). Enter height in centimeters and weight in kilograms to get your BMI and category instantly.", url: "https://webpifyy.vercel.app/bmi-calculator-metric", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "BMI Calculator Metric — Body Mass Index cm and kg | webpifyy", description: "Free BMI calculator using metric units (cm and kg). Enter height in centimeters and weight in kilograms to get your BMI and category instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the BMI formula in metric units?", a: "BMI = weight (kg) ÷ height² (m²). First convert height from cm to meters (divide by 100), then square it, then divide weight by that result. Example: 70 kg, 170 cm → 70 ÷ 1.7² = 70 ÷ 2.89 = 24.2." },
  { q: "What BMI is considered healthy in metric?", a: "A BMI between 18.5 and 24.9 is considered Normal weight. Below 18.5 is Underweight; 25.0–29.9 is Overweight; 30.0+ is Obese (WHO classification)." },
  { q: "What is the BMI for 70 kg and 175 cm?", a: "BMI = 70 ÷ (1.75)² = 70 ÷ 3.0625 = 22.9 — Normal weight range." },
  { q: "Is BMI the same for men and women?", a: "The BMI formula is the same for both sexes. However, men typically have more muscle mass at the same BMI, so the health risk interpretation may differ. Waist circumference and body fat percentage are complementary measures." },
];

export default function BmiMetricPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "BMI Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/bmi-calculator-metric#software", name: "BMI Calculator Metric", url: "https://webpifyy.vercel.app/bmi-calculator-metric", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "BMI Calculator", href: "/calc/bmi" }, { label: "Metric" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">BMI Calculator <span className="toolpg-title-accent">Metric</span></h1><p className="toolpg-subtitle">Calculate your Body Mass Index using cm and kg. Supports imperial too. Shows category, gauge, and healthy range.</p></div>
        <BmiCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">BMI updates live as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
