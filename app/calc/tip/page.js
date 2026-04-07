import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TipCalc from "@/components/TipCalc";

export const metadata = {
  title: "Tip Calculator Online Free — Split Bill by Person",
  description: "Calculate tip amount and split the bill among multiple people. Choose tip percentage presets or enter a custom rate. Free tip calculator — no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/tip" },
  openGraph: { title: "Tip Calculator Online Free — Split Bill by Person | webpifyy", description: "Calculate tip amount and split the bill among multiple people. Choose tip percentage presets or enter a custom rate. Free tip calculator — no signup.", url: "https://webpifyy.vercel.app/calc/tip", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Tip Calculator Online Free — Split Bill by Person | webpifyy", description: "Calculate tip amount and split the bill among multiple people. Choose tip percentage presets or enter a custom rate. Free tip calculator — no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How much should I tip at a restaurant?", a: "In the United States, standard tipping ranges are: 15% for adequate service, 18–20% for good service, and 20–25% for excellent service. For takeout, 10–15% is common. This varies by country and culture." },
  { q: "How does the bill splitter work?", a: "Enter the bill amount, choose a tip percentage, and set the number of people. The calculator divides the total (bill + tip) equally among all diners and shows both the tip per person and total per person." },
  { q: "Can I use a custom tip percentage?", a: "Yes. Type any percentage in the custom tip field. The preset buttons (10%, 15%, 18%, 20%, 25%) are quick shortcuts, but you can enter any value you need." },
  { q: "Should I tip on the pre-tax or post-tax amount?", a: "Traditionally, tips are calculated on the pre-tax total. However, many people tip on the post-tax amount for simplicity. This calculator uses the bill amount you enter directly — enter pre-tax or post-tax based on your preference." },
];

export default function TipCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Tip Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/tip#software", name: "Tip Calculator", url: "https://webpifyy.vercel.app/calc/tip", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Tip Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Tip <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate the tip amount and split the total bill among any number of people. Quick presets or custom tip percentage.</p></div>
        <TipCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Totals update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
