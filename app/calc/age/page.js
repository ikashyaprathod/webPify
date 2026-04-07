import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import AgeCalc from "@/components/AgeCalc";

export const metadata = {
  title: "Age Calculator Online Free — Exact Age in Years, Months, Days",
  description: "Calculate your exact age in years, months, and days from your date of birth. Also shows total days, weeks, months lived and days to next birthday.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/age" },
  openGraph: { title: "Age Calculator Online Free — Exact Age in Years, Months, Days | webpifyy", description: "Calculate your exact age in years, months, and days from your date of birth. Also shows total days, weeks, months lived and days to next birthday.", url: "https://webpifyy.vercel.app/calc/age", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Age Calculator Online Free — Exact Age in Years, Months, Days | webpifyy", description: "Calculate your exact age in years, months, and days from your date of birth. Also shows total days, weeks, months lived and days to next birthday.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How does the age calculator work?", a: "Enter your date of birth and an optional reference date (defaults to today). The calculator computes the exact difference: years first, then remaining months, then remaining days — accounting for varying month lengths." },
  { q: "Can I calculate age as of a past or future date?", a: "Yes. Change the 'Age as of' field to any date — past or future — to see what your age was or will be on that date." },
  { q: "How are total weeks and months calculated?", a: "Total days is the simple difference in calendar days. Total weeks is total days ÷ 7 (rounded down). Total months counts completed calendar months between the two dates." },
  { q: "How is 'days to next birthday' calculated?", a: "The calculator finds the next occurrence of your birth month and day on or after the reference date, then counts the days until that date." },
];

export default function AgeCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Age Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/age#software", name: "Age Calculator", url: "https://webpifyy.vercel.app/calc/age", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Age Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Age <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Find your exact age in years, months, and days. See total days, weeks, and months lived plus days until your next birthday.</p></div>
        <AgeCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Age updates as you change dates.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
