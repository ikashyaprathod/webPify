import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Ounces to Grams Converter — oz to g Free",
  description: "Convert ounces to grams instantly. 1 oz = 28.3495 grams. All weight units shown. Free online weight converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/oz-to-grams" },
  openGraph: { title: "Ounces to Grams Converter — oz to g Free | webpifyy", description: "Convert ounces to grams instantly. 1 oz = 28.3495 grams. All weight units shown. Free online weight converter.", url: "https://webpifyy.vercel.app/oz-to-grams", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Ounces to Grams Converter — oz to g Free | webpifyy", description: "Convert ounces to grams instantly. 1 oz = 28.3495 grams. All weight units shown. Free online weight converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many grams are in an ounce?", a: "1 avoirdupois ounce = 28.3495 grams. This is the standard ounce used for everyday goods. A troy ounce (used for precious metals) = 31.1035 grams." },
  { q: "What is 8 ounces in grams?", a: "8 oz × 28.3495 = 226.796 grams. This is equivalent to half a pound, which is commonly seen on food packaging." },
  { q: "How many ounces are in 100 grams?", a: "100 grams ÷ 28.3495 = 3.5274 ounces. Nutrition labels in many countries list values per 100 g, making this a frequent conversion." },
  { q: "What is 1 pound in grams and ounces?", a: "1 pound = 16 ounces = 453.592 grams. So 1 oz = 1/16 lb = 28.3495 g." },
];

export default function OzToGramsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Weight Converter", item: "https://webpifyy.vercel.app/convert/weight" }, { "@type": "ListItem", position: 4, name: "Ounces to Grams" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/oz-to-grams#software", name: "Ounces to Grams Converter", url: "https://webpifyy.vercel.app/oz-to-grams", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Weight Converter", href: "/convert/weight" }, { label: "oz to Grams" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Ounces to <span className="toolpg-title-accent">Grams</span></h1><p className="toolpg-subtitle">Convert oz to grams instantly. 1 oz = 28.3495 g. All weight units shown including kg, lb, and stones.</p></div>
        <UnitConverter category="weight" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
