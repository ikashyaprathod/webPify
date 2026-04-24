import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Grams to Ounces Converter — g to oz Free",
  description: "Convert grams to ounces instantly. 1 gram = 0.035274 oz. All weight units shown. Free online weight converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/grams-to-oz" },
  openGraph: { title: "Grams to Ounces Converter — g to oz Free | webpifyy", description: "Convert grams to ounces instantly. 1 gram = 0.035274 oz. All weight units shown. Free online weight converter.", url: "https://webpifyy.vercel.app/grams-to-oz", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Grams to Ounces Converter — g to oz Free | webpifyy", description: "Convert grams to ounces instantly. 1 gram = 0.035274 oz. All weight units shown. Free online weight converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many ounces are in a gram?", a: "1 gram = 0.035274 ounces. To convert, divide grams by 28.3495. For example, 500 grams = 500 ÷ 28.3495 = 17.637 ounces." },
  { q: "What is 200 grams in ounces?", a: "200 grams ÷ 28.3495 = 7.0548 ounces. This is a common cooking measurement — many recipes call for 200 g of ingredients." },
  { q: "What is 454 grams in ounces?", a: "454 grams ÷ 28.3495 ≈ 16.01 ounces, which is approximately 1 pound. Accurate figure: 1 lb = 453.592 g." },
  { q: "How is a gram different from an ounce in everyday use?", a: "Grams are used worldwide for measuring food, medicine, and small objects under the metric system. Ounces are used in the US and UK for food labeling and cooking. 1 oz equals about 28.35 g, making ounces roughly 28 times larger than grams." },
];

export default function GramsToOzPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Weight Converter", item: "https://webpifyy.vercel.app/convert/weight" }, { "@type": "ListItem", position: 4, name: "Grams to Ounces" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/grams-to-oz#software", name: "Grams to Ounces Converter", url: "https://webpifyy.vercel.app/grams-to-oz", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Weight Converter", href: "/convert/weight" }, { label: "Grams to oz" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Grams to <span className="toolpg-title-accent">Ounces</span></h1><p className="toolpg-subtitle">Convert grams to oz instantly. 1 gram = 0.035274 oz. All weight units shown including kg, lb, and stones.</p></div>
        <UnitConverter category="weight" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
