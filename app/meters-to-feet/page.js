import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Meters to Feet Converter — m to ft Free",
  description: "Convert meters to feet instantly. 1 meter = 3.28084 feet. All length units shown. Free online length converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/meters-to-feet" },
  openGraph: { title: "Meters to Feet Converter — m to ft Free | webpifyy", description: "Convert meters to feet instantly. 1 meter = 3.28084 feet. All length units shown. Free online length converter.", url: "https://webpifyy.vercel.app/meters-to-feet", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Meters to Feet Converter — m to ft Free | webpifyy", description: "Convert meters to feet instantly. 1 meter = 3.28084 feet. All length units shown. Free online length converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many feet are in a meter?", a: "1 meter = 3.28084 feet. Equivalently, 1 meter = 3 feet and 3.3701 inches. So 10 meters = 32.8084 feet." },
  { q: "What is 100 meters in feet?", a: "100 meters = 328.084 feet. The 100-meter sprint — the flagship Olympic event — is therefore about 328 feet long." },
  { q: "How do I convert meters to feet and inches?", a: "First multiply meters by 3.28084 to get total feet. Then take the decimal part and multiply by 12 to get inches. Example: 1.8 m × 3.28084 = 5.905 ft = 5 ft 10.87 in." },
  { q: "What is 1.75 meters in feet?", a: "1.75 m × 3.28084 = 5.7414 feet, which is 5 feet 8.9 inches — a very common adult height worldwide." },
];

export default function MetersToFeetPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Meters to Feet" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/meters-to-feet#software", name: "Meters to Feet Converter", url: "https://webpifyy.vercel.app/meters-to-feet", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "Meters to Feet" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Meters to <span className="toolpg-title-accent">Feet</span></h1><p className="toolpg-subtitle">Convert meters to feet instantly. 1 meter = 3.28084 feet. All length units shown including cm, km, miles, and yards.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
