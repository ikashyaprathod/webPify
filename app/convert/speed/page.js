import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Speed Converter Online Free — mph, km/h, m/s, knots, Mach",
  description: "Convert speed units online free: miles per hour, kilometers per hour, meters per second, feet per second, knots, Mach, and speed of light.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/speed" },
  openGraph: { title: "Speed Converter Online Free — mph, km/h, m/s, knots, Mach | webpifyy", description: "Convert speed units online free: miles per hour, kilometers per hour, meters per second, feet per second, knots, Mach, and speed of light.", url: "https://webpifyy.vercel.app/convert/speed", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Speed Converter Online Free — mph, km/h, m/s, knots, Mach | webpifyy", description: "Convert speed units online free: miles per hour, kilometers per hour, meters per second, feet per second, knots, Mach, and speed of light.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I convert mph to km/h?", a: "Multiply mph by 1.60934 to get km/h. For example, 60 mph × 1.60934 ≈ 96.56 km/h. To convert km/h to mph, divide by 1.60934." },
  { q: "What is Mach 1?", a: "Mach 1 is the speed of sound at sea level under standard atmospheric conditions, approximately 343 meters per second (1,234 km/h or 767 mph). The exact speed varies with altitude and temperature." },
  { q: "How fast is the speed of light?", a: "The speed of light in a vacuum is exactly 299,792,458 meters per second (about 299,792 km/s or 186,282 miles per second). It is denoted as c and is a fundamental constant of nature." },
  { q: "What is a knot in mph?", a: "1 knot = 1.15078 mph or 1.852 km/h. A knot is one nautical mile per hour and is the standard unit of speed used in maritime and aviation contexts." },
];

export default function SpeedConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Speed Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/speed#software", name: "Speed Converter", url: "https://webpifyy.vercel.app/convert/speed", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Speed Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Speed <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert mph, km/h, m/s, knots, Mach, and speed of light — all conversions shown at once instantly.</p></div>
        <UnitConverter category="speed" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">7</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
