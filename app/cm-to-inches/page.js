import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Centimeters to Inches Converter — cm to in Free",
  description: "Convert centimeters to inches instantly. 1 cm = 0.393701 inches. All length units shown. Free online converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/cm-to-inches" },
  openGraph: { title: "Centimeters to Inches Converter — cm to in Free | webpifyy", description: "Convert centimeters to inches instantly. 1 cm = 0.393701 inches. All length units shown. Free online converter.", url: "https://webpifyy.vercel.app/cm-to-inches", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Centimeters to Inches Converter — cm to in Free | webpifyy", description: "Convert centimeters to inches instantly. 1 cm = 0.393701 inches. All length units shown. Free online converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many inches are in a centimeter?", a: "1 centimeter = 0.393701 inches. Conversely, 1 inch = 2.54 cm. So 10 cm = 3.93701 inches, and 30 cm ≈ 11.81 inches." },
  { q: "What is 150 cm in inches?", a: "150 cm ÷ 2.54 = 59.0551 inches, which is exactly 4 feet 11.06 inches — a common height reference." },
  { q: "What is 180 cm in inches?", a: "180 cm ÷ 2.54 = 70.866 inches = 5 feet 10.87 inches, commonly cited as just under 6 feet." },
  { q: "How do I convert cm to inches without a calculator?", a: "Divide centimeters by 2.54. A quick approximation: divide by 2.5 (or multiply by 0.4). For example, 100 cm ÷ 2.5 = 40 inches (actual: 39.37 inches — only 1.6% off)." },
];

export default function CmToInchesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Centimeters to Inches" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/cm-to-inches#software", name: "Centimeters to Inches Converter", url: "https://webpifyy.vercel.app/cm-to-inches", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "cm to Inches" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Centimeters to <span className="toolpg-title-accent">Inches</span></h1><p className="toolpg-subtitle">Convert cm to inches instantly. 1 cm = 0.393701 inches. All length units shown including feet, meters, km, and miles.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
