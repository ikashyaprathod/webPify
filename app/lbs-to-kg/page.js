import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "lbs to kg Converter — Pounds to Kilograms Online Free",
  description: "Convert pounds to kilograms instantly. 1 lb = 0.453592 kg. Also converts to grams, ounces, stones, and metric tons. Free, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/lbs-to-kg" },
  openGraph: { title: "lbs to kg Converter — Pounds to Kilograms Online Free | webpifyy", description: "Convert pounds to kilograms instantly. 1 lb = 0.453592 kg. Also converts to grams, ounces, stones, and metric tons. Free, no signup.", url: "https://webpifyy.vercel.app/lbs-to-kg", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "lbs to kg Converter — Pounds to Kilograms Online Free | webpifyy", description: "Convert pounds to kilograms instantly. 1 lb = 0.453592 kg. Also converts to grams, ounces, stones, and metric tons. Free, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many kg is 1 pound?", a: "1 pound = 0.453592 kilograms exactly (by international definition)." },
  { q: "How many kg is 150 lbs?", a: "150 lbs × 0.453592 = 68.04 kg. Enter 150 above to see all conversions instantly." },
  { q: "How many kg is 200 lbs?", a: "200 lbs × 0.453592 = 90.72 kg." },
  { q: "What is 1 stone in kg?", a: "1 stone = 14 pounds = 6.35029 kg. Stones are used commonly in the UK and Ireland to express body weight." },
];

export default function LbsToKgPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Weight Converter", item: "https://webpifyy.vercel.app/convert/weight" }, { "@type": "ListItem", position: 4, name: "lbs to kg" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/lbs-to-kg#software", name: "Pounds to Kilograms Converter", url: "https://webpifyy.vercel.app/lbs-to-kg", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Weight", href: "/convert/weight" }, { label: "lbs to kg" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">lbs to <span className="toolpg-title-accent">kg</span></h1><p className="toolpg-subtitle">Convert pounds to kilograms instantly. 1 lb = 0.453592 kg. All weight units shown at once.</p></div>
        <UnitConverter category="weight" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">9</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
