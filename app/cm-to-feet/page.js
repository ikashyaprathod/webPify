import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "cm to Feet Converter — Centimeters to Feet & Inches",
  description: "Convert centimeters to feet and inches instantly. 1 cm = 0.0328084 ft. Also converts to meters, km, miles, yards. Free online length converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/cm-to-feet" },
  openGraph: { title: "cm to Feet Converter — Centimeters to Feet & Inches | webpifyy", description: "Convert centimeters to feet and inches instantly. 1 cm = 0.0328084 ft. Also converts to meters, km, miles, yards. Free online length converter.", url: "https://webpifyy.vercel.app/cm-to-feet", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "cm to Feet Converter — Centimeters to Feet & Inches | webpifyy", description: "Convert centimeters to feet and inches instantly. 1 cm = 0.0328084 ft. Also converts to meters, km, miles, yards. Free online length converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many feet is 170 cm?", a: "170 cm ÷ 30.48 = 5.577 ft, which is 5 feet 6.9 inches. Enter 170 above to see all unit conversions." },
  { q: "How many cm is 6 feet?", a: "6 feet × 30.48 = 182.88 cm. Switch the converter to go from feet to centimeters." },
  { q: "How many cm is 5 feet 10 inches?", a: "5 feet = 152.4 cm, plus 10 inches = 25.4 cm, total = 177.8 cm." },
  { q: "What is 1 foot in centimeters?", a: "1 foot = 30.48 centimeters exactly (1 foot = 12 inches, 1 inch = 2.54 cm, so 12 × 2.54 = 30.48 cm)." },
];

export default function CmToFeetPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "cm to Feet" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/cm-to-feet#software", name: "Centimeters to Feet Converter", url: "https://webpifyy.vercel.app/cm-to-feet", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length", href: "/convert/length" }, { label: "cm to Feet" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">cm to <span className="toolpg-title-accent">Feet</span></h1><p className="toolpg-subtitle">Convert centimeters to feet and inches instantly. 1 cm = 0.0328 ft. All length units shown at once.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">10</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
