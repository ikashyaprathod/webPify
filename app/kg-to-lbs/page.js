import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "kg to lbs Converter — Kilograms to Pounds Online Free",
  description: "Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs. Also converts to grams, ounces, stones, and metric tons. Free, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/kg-to-lbs" },
  openGraph: { title: "kg to lbs Converter — Kilograms to Pounds Online Free | webpifyy", description: "Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs. Also converts to grams, ounces, stones, and metric tons. Free, no signup.", url: "https://webpifyy.vercel.app/kg-to-lbs", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "kg to lbs Converter — Kilograms to Pounds Online Free | webpifyy", description: "Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs. Also converts to grams, ounces, stones, and metric tons. Free, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many pounds is 1 kg?", a: "1 kilogram = 2.20462 pounds. For a quick estimate, multiply kg by 2.2." },
  { q: "How many lbs is 70 kg?", a: "70 kg × 2.20462 = 154.32 lbs. Enter 70 in the converter above to see the exact result." },
  { q: "How many lbs is 100 kg?", a: "100 kg = 220.46 lbs. This is a common reference point — 100 kg is about 220 pounds." },
  { q: "How do I convert kg to pounds manually?", a: "Multiply the weight in kilograms by 2.20462. For example, 50 kg × 2.20462 = 110.23 lbs." },
];

export default function KgToLbsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Weight Converter", item: "https://webpifyy.vercel.app/convert/weight" }, { "@type": "ListItem", position: 4, name: "kg to lbs" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/kg-to-lbs#software", name: "Kilograms to Pounds Converter", url: "https://webpifyy.vercel.app/kg-to-lbs", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Weight", href: "/convert/weight" }, { label: "kg to lbs" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">kg to <span className="toolpg-title-accent">lbs</span></h1><p className="toolpg-subtitle">Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs. All weight units shown at once.</p></div>
        <UnitConverter category="weight" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">9</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
