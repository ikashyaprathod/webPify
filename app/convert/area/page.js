import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Area Converter Online Free — m², km², ft², acres, hectares",
  description: "Convert area units online free: square meters, square feet, square kilometers, square miles, acres, hectares, and more. All conversions shown instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/area" },
  openGraph: { title: "Area Converter Online Free — m², km², ft², acres, hectares | webpifyy", description: "Convert area units online free: square meters, square feet, square kilometers, square miles, acres, hectares, and more. All conversions shown instantly.", url: "https://webpifyy.vercel.app/convert/area", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Area Converter Online Free — m², km², ft², acres, hectares | webpifyy", description: "Convert area units online free: square meters, square feet, square kilometers, square miles, acres, hectares, and more. All conversions shown instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many square feet are in an acre?", a: "1 acre = 43,560 square feet. An acre is defined as 1/640 of a square mile, or 4,046.86 square meters." },
  { q: "What is the difference between a hectare and an acre?", a: "A hectare = 10,000 square meters = 2.471 acres. A hectare is a metric unit used internationally; an acre is used mainly in the US and UK for land measurement." },
  { q: "How do I convert square kilometers to square miles?", a: "1 square kilometer = 0.386102 square miles. Multiply km² by 0.386102 to get mi². Conversely, 1 square mile = 2.58999 km²." },
  { q: "How many square meters are in a square foot?", a: "1 square foot = 0.092903 square meters. Conversely, 1 square meter = 10.7639 square feet." },
];

export default function AreaConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Area Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/area#software", name: "Area Converter", url: "https://webpifyy.vercel.app/convert/area", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Area Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Area <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert square meters, feet, kilometers, miles, acres, and hectares — all conversions shown simultaneously.</p></div>
        <UnitConverter category="area" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">10</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
