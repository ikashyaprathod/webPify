import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "KPH to MPH Converter — km/h to Miles per Hour",
  description: "Convert kph to mph instantly. 1 km/h = 0.621371 mph. Also converts to m/s, knots, Mach. Free speed converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/kph-to-mph" },
  openGraph: { title: "KPH to MPH Converter — km/h to Miles per Hour | webpifyy", description: "Convert kph to mph instantly. 1 km/h = 0.621371 mph. Also converts to m/s, knots, Mach. Free speed converter.", url: "https://webpifyy.vercel.app/kph-to-mph", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "KPH to MPH Converter — km/h to Miles per Hour | webpifyy", description: "Convert kph to mph instantly. 1 km/h = 0.621371 mph. Also converts to m/s, knots, Mach. Free speed converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I convert kph to mph?", a: "Multiply km/h by 0.621371 to get mph. For example, 120 km/h × 0.621371 = 74.56 mph. A quick mental trick: divide by 1.6." },
  { q: "What is 100 km/h in mph?", a: "100 km/h × 0.621371 = 62.14 mph. Speed limits of 100 km/h (common on European motorways) translate to about 62 mph." },
  { q: "What is 130 km/h in mph?", a: "130 km/h × 0.621371 = 80.78 mph. This is the autobahn advisory speed limit and a common limit on French motorways." },
  { q: "What is 1 m/s in km/h and mph?", a: "1 m/s = 3.6 km/h = 2.23694 mph. Human walking speed is roughly 1.4 m/s, or about 5 km/h (3.1 mph)." },
];

export default function KphToMphPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Speed Converter", item: "https://webpifyy.vercel.app/convert/speed" }, { "@type": "ListItem", position: 4, name: "KPH to MPH" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/kph-to-mph#software", name: "KPH to MPH Converter", url: "https://webpifyy.vercel.app/kph-to-mph", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Speed Converter", href: "/convert/speed" }, { label: "KPH to MPH" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">KPH to <span className="toolpg-title-accent">MPH</span></h1><p className="toolpg-subtitle">Convert km/h to miles per hour instantly. 1 km/h = 0.621371 mph. Also shows m/s, knots, and Mach number.</p></div>
        <UnitConverter category="speed" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
