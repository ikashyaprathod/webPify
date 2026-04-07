import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PercentageCalc from "@/components/PercentageCalc";

export const metadata = {
  title: "Percentage Calculator Online Free — % Of, % Change",
  description: "Calculate percentages online free. Find X% of Y, what percentage X is of Y, and percent change between two numbers instantly. No signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/percentage" },
  openGraph: { title: "Percentage Calculator Online Free — % Of, % Change | webpifyy", description: "Calculate percentages online free. Find X% of Y, what percentage X is of Y, and percent change between two numbers instantly. No signup needed.", url: "https://webpifyy.vercel.app/calc/percentage", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Percentage Calculator Online Free — % Of, % Change | webpifyy", description: "Calculate percentages online free. Find X% of Y, what percentage X is of Y, and percent change between two numbers instantly. No signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I calculate X% of Y?", a: "Multiply Y by X and divide by 100. For example, 20% of 150 = (20/100) × 150 = 30. Use the '% of' mode in this calculator to get the result instantly." },
  { q: "How do I find what percentage X is of Y?", a: "Divide X by Y and multiply by 100. For example, 30 is what percentage of 150? (30/150) × 100 = 20%. Use the 'X is what % of Y' mode." },
  { q: "How is percent change calculated?", a: "Percent change = ((New Value − Original Value) / |Original Value|) × 100. A positive result means an increase; negative means a decrease." },
  { q: "What is the difference between percentage and percentage points?", a: "A percentage point is an absolute difference between two percentages. If interest rates rise from 3% to 5%, that is a 2 percentage point increase, but a 66.7% relative increase." },
];

export default function PercentageCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Percentage Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/percentage#software", name: "Percentage Calculator", url: "https://webpifyy.vercel.app/calc/percentage", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Percentage Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Percentage <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate X% of Y, find what percentage a number is of another, or compute percent change — instantly, no signup.</p></div>
        <PercentageCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All calculations run in your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Answers update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
