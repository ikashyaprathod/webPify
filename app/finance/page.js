import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Free Finance Calculators Online — Compound Interest, ROI, VAT",
  description: "Free online finance calculators: compound interest with monthly contributions, ROI & CAGR, and VAT calculator. Browser-based, no signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/finance" },
  openGraph: { title: "Free Finance Calculators Online — Compound Interest, ROI, VAT | webpifyy", description: "Free online finance calculators: compound interest with monthly contributions, ROI & CAGR, and VAT calculator. Browser-based, no signup needed.", url: "https://webpifyy.vercel.app/finance", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Finance Calculators Online — Compound Interest, ROI, VAT | webpifyy", description: "Free online finance calculators: compound interest with monthly contributions, ROI & CAGR, and VAT calculator. Browser-based, no signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const TOOLS = [
  { href: "/finance/compound-interest", label: "Compound Interest", desc: "Future value with monthly contributions & compounding schedule", icon: "📈" },
  { href: "/finance/roi-calculator", label: "ROI Calculator", desc: "Return on investment, net profit, CAGR annualized return", icon: "💹" },
  { href: "/finance/vat-calculator", label: "VAT Calculator", desc: "Add or remove VAT — any rate, with common presets", icon: "🧾" },
];

export default function FinanceHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Finance Calculators" }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Finance Calculators" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">FINANCE</span><h1 className="toolpg-title">Finance <span className="toolpg-title-accent">Calculators</span></h1><p className="toolpg-subtitle">Compound interest, ROI & CAGR, and VAT calculator — all free, browser-based, no signup.</p></div>
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
