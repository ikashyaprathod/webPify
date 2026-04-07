import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Length Converter Online Free — m, km, cm, ft, in, mi",
  description: "Convert length and distance units online free: meters, kilometers, centimeters, millimeters, miles, yards, feet, inches, nautical miles, and light-years.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/length" },
  openGraph: { title: "Length Converter Online Free — m, km, cm, ft, in, mi | webpifyy", description: "Convert length and distance units online free: meters, kilometers, centimeters, millimeters, miles, yards, feet, inches, nautical miles, and light-years.", url: "https://webpifyy.vercel.app/convert/length", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Length Converter Online Free — m, km, cm, ft, in, mi | webpifyy", description: "Convert length and distance units online free: meters, kilometers, centimeters, millimeters, miles, yards, feet, inches, nautical miles, and light-years.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many feet are in a meter?", a: "1 meter = 3.28084 feet. Conversely, 1 foot = 0.3048 meters exactly (by international definition since 1959)." },
  { q: "How do I convert kilometers to miles?", a: "1 kilometer = 0.621371 miles. Multiply kilometers by 0.621371 to get miles, or divide miles by 0.621371 to get kilometers." },
  { q: "What is a nautical mile?", a: "A nautical mile equals 1,852 meters (or about 1.151 statute miles). It is based on one minute of arc of latitude along a meridian, and is used in navigation and aviation." },
  { q: "How far is a light-year in kilometers?", a: "One light-year is approximately 9.461 × 10¹² kilometers (about 9.46 trillion km). It is the distance light travels in one Julian year at 299,792 km/s." },
];

export default function LengthConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/length#software", name: "Length Converter", url: "https://webpifyy.vercel.app/convert/length", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Length <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert between meters, kilometers, feet, inches, miles, nautical miles, and more — with all unit conversions shown at once.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">10</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
