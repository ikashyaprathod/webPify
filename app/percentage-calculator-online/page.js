import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PercentageCalc from "@/components/PercentageCalc";

export const metadata = {
  title: "Percentage Calculator Online — % Of, Change, What Percent",
  description: "Free percentage calculator online. Calculate X% of a number, find what percentage X is of Y, or compute percent increase/decrease. Instant results.",
  alternates: { canonical: "https://webpifyy.vercel.app/percentage-calculator-online" },
  openGraph: { title: "Percentage Calculator Online — % Of, Change, What Percent | webpifyy", description: "Free percentage calculator online. Calculate X% of a number, find what percentage X is of Y, or compute percent increase/decrease. Instant results.", url: "https://webpifyy.vercel.app/percentage-calculator-online", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Percentage Calculator Online — % Of, Change, What Percent | webpifyy", description: "Free percentage calculator online. Calculate X% of a number, find what percentage X is of Y, or compute percent increase/decrease. Instant results.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is 15% of 200?", a: "15% of 200 = (15/100) × 200 = 30. Use the '% of' mode and enter 15 and 200 to confirm." },
  { q: "What percentage is 45 out of 180?", a: "45 ÷ 180 × 100 = 25%. Use the 'X is what % of Y' mode with 45 and 180." },
  { q: "How do I calculate a 20% increase?", a: "New value = original × 1.20. Or use the '% change' mode: enter the original value and new value to find the percentage change." },
  { q: "How do I calculate a percentage decrease?", a: "% decrease = ((Old − New) / Old) × 100. If sales went from 500 to 400: ((500−400)/500) × 100 = 20% decrease." },
];

export default function PctCalcOnlinePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Percentage Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/percentage-calculator-online#software", name: "Percentage Calculator Online", url: "https://webpifyy.vercel.app/percentage-calculator-online", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Percentage Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Percentage Calculator <span className="toolpg-title-accent">Online</span></h1><p className="toolpg-subtitle">Three modes: find X% of Y, calculate what % X is of Y, or compute percent change. Instant answers, no signup.</p></div>
        <PercentageCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">3</p><p className="tpg-sl">Modes</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All math runs in your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Answers update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
