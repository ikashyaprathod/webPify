import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import DateDiff from "@/components/DateDiff";

export const metadata = {
  title: "Date Difference Calculator — Days Between Two Dates",
  description: "Calculate the exact difference between two dates in days, weeks, months, years, and business days. Free date duration calculator — no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/date-difference" },
  openGraph: { title: "Date Difference Calculator — Days Between Two Dates | webpifyy", description: "Calculate the exact difference between two dates in days, weeks, months, years, and business days. Free date duration calculator — no signup.", url: "https://webpifyy.vercel.app/calc/date-difference", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Date Difference Calculator — Days Between Two Dates | webpifyy", description: "Calculate the exact difference between two dates in days, weeks, months, years, and business days. Free date duration calculator — no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How are business days calculated?", a: "Business days are weekdays (Monday–Friday). The calculator iterates through each day in the range and counts non-weekend days. Public holidays are not excluded, as these vary by country and region." },
  { q: "What if the start date is after the end date?", a: "The calculator shows the absolute difference and notes that the start date is after the end date. The result is always a positive value regardless of order." },
  { q: "How are months and years counted?", a: "The calculator counts complete calendar months and years — taking into account varying month lengths and leap years — then shows the remainder in days." },
  { q: "Can I calculate how many days until a future event?", a: "Yes. Set the start date to today and the end date to your future event. The calendar days result shows exactly how many days remain." },
];

export default function DateDiffPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Date Difference Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/date-difference#software", name: "Date Difference Calculator", url: "https://webpifyy.vercel.app/calc/date-difference", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Date Difference Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Date Difference <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Find the exact duration between two dates — in calendar days, weeks, months, years, and business days.</p></div>
        <DateDiff />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Duration updates as you pick dates.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
