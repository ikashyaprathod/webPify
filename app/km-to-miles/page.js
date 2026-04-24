import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Kilometers to Miles Converter — km to mi Free",
  description: "Convert kilometers to miles instantly. 1 km = 0.621371 miles. Also converts to meters, feet, inches. Free length converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/km-to-miles" },
  openGraph: { title: "Kilometers to Miles Converter — km to mi Free | webpifyy", description: "Convert kilometers to miles instantly. 1 km = 0.621371 miles. Also converts to meters, feet, inches. Free length converter.", url: "https://webpifyy.vercel.app/km-to-miles", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Kilometers to Miles Converter — km to mi Free | webpifyy", description: "Convert kilometers to miles instantly. 1 km = 0.621371 miles. Also converts to meters, feet, inches. Free length converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many miles are in a kilometer?", a: "1 kilometer = 0.621371 miles. So 10 km = 6.21371 miles, and 42.195 km (a marathon) = 26.2188 miles." },
  { q: "How do I convert km to miles without a calculator?", a: "Multiply kilometers by 0.6214 for an accurate result. A quick mental trick: multiply by 5 and divide by 8. For example, 40 km × 5 ÷ 8 = 25 miles." },
  { q: "What is 100 km in miles?", a: "100 km = 62.1371 miles. Speed limits of 100 km/h are therefore roughly 62 mph." },
  { q: "Is a kilometer longer than a mile?", a: "No. A mile is longer — 1 mile = 1.60934 km. So 1 km is only about 62% of a mile." },
];

export default function KmToMilesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Kilometers to Miles" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/km-to-miles#software", name: "Kilometers to Miles Converter", url: "https://webpifyy.vercel.app/km-to-miles", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "km to Miles" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Kilometers to <span className="toolpg-title-accent">Miles</span></h1><p className="toolpg-subtitle">Convert km to miles instantly. 1 km = 0.621371 miles. Also shows meters, feet, inches, yards, and more.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
