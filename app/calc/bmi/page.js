import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import BmiCalc from "@/components/BmiCalc";

export const metadata = {
  title: "BMI Calculator Online Free — Metric & Imperial",
  description: "Calculate your Body Mass Index (BMI) online free. Supports metric (cm/kg) and imperial (ft·in/lbs). Shows BMI category and visual gauge instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/bmi" },
  openGraph: { title: "BMI Calculator Online Free — Metric & Imperial | webpifyy", description: "Calculate your Body Mass Index (BMI) online free. Supports metric (cm/kg) and imperial (ft·in/lbs). Shows BMI category and visual gauge instantly.", url: "https://webpifyy.vercel.app/calc/bmi", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "BMI Calculator Online Free — Metric & Imperial | webpifyy", description: "Calculate your Body Mass Index (BMI) online free. Supports metric (cm/kg) and imperial (ft·in/lbs). Shows BMI category and visual gauge instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How is BMI calculated?", a: "BMI = weight (kg) / height² (m²) for metric units. For imperial, BMI = (weight in lbs / height in inches²) × 703. For example, a person 170 cm tall weighing 70 kg has a BMI of 70 / 1.7² = 24.2." },
  { q: "What are the BMI categories?", a: "Under 18.5 = Underweight; 18.5–24.9 = Normal weight; 25.0–29.9 = Overweight; 30.0 and above = Obese. These thresholds are defined by the World Health Organization (WHO)." },
  { q: "Is BMI an accurate health measure?", a: "BMI is a simple screening tool, not a diagnostic measure. It does not account for muscle mass, bone density, body fat distribution, or age. Athletes often have high BMI despite low body fat. Consult a healthcare professional for a full assessment." },
  { q: "What is a healthy BMI range?", a: "For adults, a BMI between 18.5 and 24.9 is generally considered healthy. However, optimal ranges can vary by age, sex, and ethnicity. Asian populations may face health risks at lower BMI thresholds." },
];

export default function BmiCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "BMI Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/bmi#software", name: "BMI Calculator", url: "https://webpifyy.vercel.app/calc/bmi", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "BMI Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">BMI <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate your Body Mass Index instantly. Supports metric and imperial units with category labels and visual gauge.</p></div>
        <BmiCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">BMI updates live as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
