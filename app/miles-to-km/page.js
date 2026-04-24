import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Miles to Kilometers Converter — mi to km Free",
  description: "Convert miles to kilometers instantly. 1 mile = 1.60934 km. Also converts to meters, feet, inches. Free length converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/miles-to-km" },
  openGraph: { title: "Miles to Kilometers Converter — mi to km Free | webpifyy", description: "Convert miles to kilometers instantly. 1 mile = 1.60934 km. Also converts to meters, feet, inches. Free length converter.", url: "https://webpifyy.vercel.app/miles-to-km", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Miles to Kilometers Converter — mi to km Free | webpifyy", description: "Convert miles to kilometers instantly. 1 mile = 1.60934 km. Also converts to meters, feet, inches. Free length converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many kilometers are in a mile?", a: "1 mile = 1.60934 kilometers exactly. So 5 miles = 8.0467 km, and 10 miles = 16.0934 km." },
  { q: "How do I convert miles to km manually?", a: "Multiply the number of miles by 1.60934. For example, 26.2 miles (a marathon) × 1.60934 = 42.165 km." },
  { q: "Why do some countries use miles and others use kilometers?", a: "The United States, UK, and a few other countries use miles rooted in the imperial system. Most other countries use the metric system (kilometers) adopted after the French Revolution in the late 18th century." },
  { q: "What is 100 miles in kilometers?", a: "100 miles = 160.934 kilometers. A useful mental shortcut: multiply miles by 1.6 for a close approximation." },
];

export default function MilesToKmPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Length Converter", item: "https://webpifyy.vercel.app/convert/length" }, { "@type": "ListItem", position: 4, name: "Miles to Kilometers" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/miles-to-km#software", name: "Miles to Kilometers Converter", url: "https://webpifyy.vercel.app/miles-to-km", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Length Converter", href: "/convert/length" }, { label: "Miles to km" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Miles to <span className="toolpg-title-accent">Kilometers</span></h1><p className="toolpg-subtitle">Convert miles to km instantly. 1 mile = 1.60934 km. Also shows meters, feet, inches, yards, and more.</p></div>
        <UnitConverter category="length" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
