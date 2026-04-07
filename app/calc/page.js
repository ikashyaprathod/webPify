import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Free Online Calculators — Percentage, Loan, BMI, Age & More",
  description: "Free online calculators: percentage, loan & mortgage, BMI, age, date difference, tip, discount, and scientific calculator. Browser-based, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc" },
  openGraph: { title: "Free Online Calculators — Percentage, Loan, BMI, Age & More | webpifyy", description: "Free online calculators: percentage, loan & mortgage, BMI, age, date difference, tip, discount, and scientific calculator. Browser-based, no signup.", url: "https://webpifyy.vercel.app/calc", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Online Calculators — Percentage, Loan, BMI, Age & More | webpifyy", description: "Free online calculators: percentage, loan & mortgage, BMI, age, date difference, tip, discount, and scientific calculator. Browser-based, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const TOOLS = [
  { href: "/calc/percentage", label: "Percentage Calculator", desc: "% of, X is what % of Y, % change", icon: "%" },
  { href: "/calc/loan", label: "Loan Calculator", desc: "Monthly payment, total interest, amortization", icon: "$" },
  { href: "/calc/bmi", label: "BMI Calculator", desc: "Metric & imperial, category gauge", icon: "♥" },
  { href: "/calc/age", label: "Age Calculator", desc: "Exact age in years, months, days", icon: "🎂" },
  { href: "/calc/date-difference", label: "Date Difference", desc: "Days, weeks, months, business days", icon: "📅" },
  { href: "/calc/tip", label: "Tip Calculator", desc: "Tip amount + bill split", icon: "🍽" },
  { href: "/calc/discount", label: "Discount Calculator", desc: "Sale price, savings, % off", icon: "🏷" },
  { href: "/calc/scientific", label: "Scientific Calculator", desc: "Trig, log, powers, DEG/RAD", icon: "∑" },
];

export default function CalcHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators" }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Free Online <span className="toolpg-title-accent">Calculators</span></h1><p className="toolpg-subtitle">8 free calculators for everyday math — percentage, loan, BMI, age, date difference, tip, discount, and scientific. All browser-based, no signup.</p></div>
        <div className="hub-grid">
          {TOOLS.map(t => (
            <Link key={t.href} href={t.href} className="hub-card">
              <span className="hub-card-icon">{t.icon}</span>
              <h2 className="hub-card-title">{t.label}</h2>
              <p className="hub-card-desc">{t.desc}</p>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}
