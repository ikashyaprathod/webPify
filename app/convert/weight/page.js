import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Weight Converter Online Free — kg, lb, oz, g, t, st",
  description: "Convert weight and mass units online free: kilograms, grams, pounds, ounces, metric tons, stones, carats, and micrograms. All conversions shown instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/weight" },
  openGraph: { title: "Weight Converter Online Free — kg, lb, oz, g, t, st | webpifyy", description: "Convert weight and mass units online free: kilograms, grams, pounds, ounces, metric tons, stones, carats, and micrograms. All conversions shown instantly.", url: "https://webpifyy.vercel.app/convert/weight", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Weight Converter Online Free — kg, lb, oz, g, t, st | webpifyy", description: "Convert weight and mass units online free: kilograms, grams, pounds, ounces, metric tons, stones, carats, and micrograms. All conversions shown instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many pounds are in a kilogram?", a: "1 kilogram = 2.20462 pounds. Conversely, 1 pound = 0.453592 kilograms. For a quick approximation, multiply kg by 2.2 to get pounds." },
  { q: "How do I convert pounds to kilograms?", a: "Divide pounds by 2.20462 to get kilograms. For example, 150 lbs ÷ 2.20462 ≈ 68.04 kg." },
  { q: "What is a stone (st)?", a: "A stone is a unit of mass used in Britain and Ireland, equal to 14 pounds or approximately 6.35 kilograms. It is commonly used to express body weight in those regions." },
  { q: "How many carats are in a gram?", a: "1 gram = 5 carats. The carat (ct) is a unit of mass for gemstones and pearls, equal to 0.2 grams or 200 milligrams." },
];

export default function WeightConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Weight Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/weight#software", name: "Weight Converter", url: "https://webpifyy.vercel.app/convert/weight", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Weight Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Weight <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert between kilograms, pounds, grams, ounces, stones, metric tons, carats, and more — all shown at once.</p></div>
        <UnitConverter category="weight" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">9</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
