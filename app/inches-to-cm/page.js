import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Inches to Centimeters Converter — in to cm Free",
  description: "Convert inches to centimeters instantly. 1 inch = 2.54 cm exactly. All length units shown. Free online converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/inches-to-cm" },
  openGraph: { title: "Inches to Centimeters Converter — in to cm Free | webpifyy", description: "Convert inches to centimeters instantly. 1 inch = 2.54 cm exactly. All length units shown. Free online converter.", url: "https://webpifyy.vercel.app/inches-to-cm", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Inches to Centimeters Converter — in to cm Free | webpifyy", description: "Convert inches to centimeters instantly. 1 inch = 2.54 cm exactly. All length units shown. Free online converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many centimeters are in an inch?", a: "1 inch = 2.54 centimeters exactly. This is a defined (not measured) conversion set by international agreement in 1959. So 12 inches = 30.48 cm, and 36 inches (1 yard) = 91.44 cm." },
  { q: "What is 5 inches in centimeters?", a: "5 inches × 2.54 = 12.7 cm. Common screen sizes: a 6-inch phone screen = 15.24 cm, and a 10-inch tablet = 25.4 cm." },
  { q: "What is 12 inches in centimeters?", a: "12 inches = 12 × 2.54 = 30.48 cm. Since 12 inches = 1 foot, this also means 1 foot = 30.48 cm." },
  { q: "How do I convert inches to cm quickly in my head?", a: "Multiply inches by 2.54. A good mental shortcut: multiply by 2.5 (shift decimal, double) and add 2% more. For example, 10 inches ≈ 25 + 0.5 = 25.4 cm." },
];

export default function InchesToCmPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Inches to Centimeters" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/inches-to-cm#software", name: "Inches to Centimeters Converter", url: "https://webpifyy.vercel.app/inches-to-cm", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "Inches to cm" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Inches to <span className="toolpg-title-accent">Centimeters</span></h1><p className="toolpg-subtitle">Convert inches to cm instantly. 1 inch = 2.54 cm exactly. All length units shown including feet, meters, km, and miles.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
