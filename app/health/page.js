import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Free Health Calculators Online — Calorie, Ideal Weight",
  description: "Free online health calculators: daily calorie needs (TDEE/BMR) with activity level and goals, and ideal body weight using 4 medical formulas.",
  alternates: { canonical: "https://webpifyy.vercel.app/health" },
  openGraph: { title: "Free Health Calculators Online — Calorie, Ideal Weight | webpifyy", description: "Free online health calculators: daily calorie needs (TDEE/BMR) with activity level and goals, and ideal body weight using 4 medical formulas.", url: "https://webpifyy.vercel.app/health", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Health Calculators Online — Calorie, Ideal Weight | webpifyy", description: "Free online health calculators: daily calorie needs (TDEE/BMR) with activity level and goals, and ideal body weight using 4 medical formulas.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const TOOLS = [
  { href: "/health/calorie-calculator", label: "Calorie Calculator", desc: "Daily calorie needs — TDEE, BMR, activity level, weight goals", icon: "🔥" },
  { href: "/health/ideal-weight", label: "Ideal Weight Calculator", desc: "IBW using Devine, Robinson, Miller, Hamwi formulas + BMI range", icon: "⚖" },
];

export default function HealthHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Health Calculators" }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Health Calculators" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">HEALTH</span><h1 className="toolpg-title">Health <span className="toolpg-title-accent">Calculators</span></h1><p className="toolpg-subtitle">Free calorie needs calculator (TDEE/BMR) and ideal body weight calculator using evidence-based formulas. No signup.</p></div>
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
