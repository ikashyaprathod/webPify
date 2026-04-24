import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "MPH to KPH Converter — Miles per Hour to km/h",
  description: "Convert mph to kph instantly. 1 mph = 1.60934 km/h. Also converts to m/s, knots, Mach. Free speed converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/mph-to-kph" },
  openGraph: { title: "MPH to KPH Converter — Miles per Hour to km/h | webpifyy", description: "Convert mph to kph instantly. 1 mph = 1.60934 km/h. Also converts to m/s, knots, Mach. Free speed converter.", url: "https://webpifyy.vercel.app/mph-to-kph", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "MPH to KPH Converter — Miles per Hour to km/h | webpifyy", description: "Convert mph to kph instantly. 1 mph = 1.60934 km/h. Also converts to m/s, knots, Mach. Free speed converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I convert mph to kph?", a: "Multiply mph by 1.60934 to get km/h. For example, 60 mph × 1.60934 = 96.56 km/h. A quick mental estimate: multiply by 1.6." },
  { q: "What is 100 mph in kph?", a: "100 mph × 1.60934 = 160.934 km/h. Many sports cars and motorcycles cite top speeds around 200 mph, which equals about 321.9 km/h." },
  { q: "What is 70 mph in km/h?", a: "70 mph × 1.60934 = 112.654 km/h. 70 mph is the standard UK motorway speed limit, equivalent to ~113 km/h on metric signs." },
  { q: "What is the speed of sound in mph and kph?", a: "The speed of sound at sea level is approximately 767 mph or 1,235 km/h (Mach 1). Supersonic aircraft travel faster than this — for example, Mach 2 = 1,534 mph = 2,470 km/h." },
];

export default function MphToKphPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Speed Converter", item: "https://webpifyy.vercel.app/convert/speed" }, { "@type": "ListItem", position: 4, name: "MPH to KPH" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/mph-to-kph#software", name: "MPH to KPH Converter", url: "https://webpifyy.vercel.app/mph-to-kph", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Speed Converter", href: "/convert/speed" }, { label: "MPH to KPH" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">MPH to <span className="toolpg-title-accent">KPH</span></h1><p className="toolpg-subtitle">Convert miles per hour to km/h instantly. 1 mph = 1.60934 km/h. Also shows m/s, knots, and Mach number.</p></div>
        <UnitConverter category="speed" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
