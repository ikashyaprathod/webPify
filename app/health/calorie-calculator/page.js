import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import CalorieCalc from "@/components/CalorieCalc";

export const metadata = {
  title: "Calorie Calculator Online Free — TDEE, BMR & Daily Intake",
  description: "Calculate your daily calorie needs (TDEE and BMR) based on age, height, weight, sex, and activity level. Set weight loss or gain goals. Mifflin-St Jeor formula.",
  alternates: { canonical: "https://webpifyy.vercel.app/health/calorie-calculator" },
  openGraph: { title: "Calorie Calculator Online Free — TDEE, BMR & Daily Intake | webpifyy", description: "Calculate your daily calorie needs (TDEE and BMR) based on age, height, weight, sex, and activity level. Set weight loss or gain goals. Mifflin-St Jeor formula.", url: "https://webpifyy.vercel.app/health/calorie-calculator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Calorie Calculator Online Free — TDEE, BMR & Daily Intake | webpifyy", description: "Calculate your daily calorie needs (TDEE and BMR) based on age, height, weight, sex, and activity level. Set weight loss or gain goals. Mifflin-St Jeor formula.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is BMR vs TDEE?", a: "BMR (Basal Metabolic Rate) is the calories your body burns at complete rest to maintain vital functions. TDEE (Total Daily Energy Expenditure) is BMR multiplied by your activity level — it is the total calories you burn in a day." },
  { q: "What formula does this calculator use?", a: "The Mifflin-St Jeor equation, which is widely considered the most accurate for estimating BMR. Male: BMR = 10W + 6.25H − 5A + 5. Female: BMR = 10W + 6.25H − 5A − 161 (W = kg, H = cm, A = age)." },
  { q: "How many calories to lose 1 pound per week?", a: "A 500 calorie/day deficit results in approximately 1 pound (0.45 kg) of fat loss per week, since 1 pound of fat ≈ 3,500 calories. The calculator subtracts 500 from your TDEE when you select this goal." },
  { q: "What activity level should I choose?", a: "Be honest — most people overestimate their activity. Sedentary means a desk job with no exercise. Lightly active means 1-3 days of gym or walking. Moderately active means 3-5 workout days. Very active means hard exercise 6-7 days. Extra active means twice-daily training or a physical labor job." },
];

export default function CalorieCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Health Calculators", item: "https://webpifyy.vercel.app/health" }, { "@type": "ListItem", position: 3, name: "Calorie Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/health/calorie-calculator#software", name: "Calorie Calculator", url: "https://webpifyy.vercel.app/health/calorie-calculator", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Health", href: "/health" }, { label: "Calorie Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">HEALTH</span><h1 className="toolpg-title">Calorie <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate your daily calorie needs (TDEE & BMR) using the Mifflin-St Jeor formula. Set your goal for weight loss, maintenance, or gain.</p></div>
        <CalorieCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">5</p><p className="tpg-sl">Activity Levels</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you change inputs.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
