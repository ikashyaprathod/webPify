import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Feet to Centimeters Converter — ft to cm Free",
  description: "Convert feet to centimeters instantly. 1 foot = 30.48 cm. Also converts to meters, km, miles, yards. Free length converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/feet-to-cm" },
  openGraph: { title: "Feet to Centimeters Converter — ft to cm Free | webpifyy", description: "Convert feet to centimeters instantly. 1 foot = 30.48 cm. Also converts to meters, km, miles, yards. Free length converter.", url: "https://webpifyy.vercel.app/feet-to-cm", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Feet to Centimeters Converter — ft to cm Free | webpifyy", description: "Convert feet to centimeters instantly. 1 foot = 30.48 cm. Also converts to meters, km, miles, yards. Free length converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many centimeters are in a foot?", a: "1 foot = 30.48 centimeters exactly. This is a fixed, defined conversion: 1 foot = 12 inches, and 1 inch = 2.54 cm, so 12 × 2.54 = 30.48 cm." },
  { q: "What is 5 feet in centimeters?", a: "5 feet = 5 × 30.48 = 152.4 cm. For height, 5 feet 0 inches is exactly 152.4 cm, and 5 feet 11 inches is 180.34 cm." },
  { q: "What is 6 feet in centimeters?", a: "6 feet = 6 × 30.48 = 182.88 cm, commonly rounded to 183 cm. This is a frequently referenced height in sports and profiles." },
  { q: "How do I convert feet and inches to centimeters?", a: "Convert feet to inches first (multiply by 12), add any extra inches, then multiply the total by 2.54. For example, 5 ft 9 in = (5×12+9) × 2.54 = 69 × 2.54 = 175.26 cm." },
];

export default function FeetToCmPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Feet to Centimeters" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/feet-to-cm#software", name: "Feet to Centimeters Converter", url: "https://webpifyy.vercel.app/feet-to-cm", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "Feet to cm" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Feet to <span className="toolpg-title-accent">Centimeters</span></h1><p className="toolpg-subtitle">Convert feet to cm instantly. 1 foot = 30.48 cm. Also shows meters, kilometers, miles, yards, and inches.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
