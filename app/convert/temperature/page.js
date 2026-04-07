import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TemperatureConverter from "@/components/TemperatureConverter";

export const metadata = {
  title: "Temperature Converter Online Free — °C, °F, Kelvin, Rankine",
  description: "Convert temperature units online free: Celsius, Fahrenheit, Kelvin, and Rankine. Instant bidirectional conversion with all units shown at once.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/temperature" },
  openGraph: { title: "Temperature Converter Online Free — °C, °F, Kelvin, Rankine | webpifyy", description: "Convert temperature units online free: Celsius, Fahrenheit, Kelvin, and Rankine. Instant bidirectional conversion with all units shown at once.", url: "https://webpifyy.vercel.app/convert/temperature", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Temperature Converter Online Free — °C, °F, Kelvin, Rankine | webpifyy", description: "Convert temperature units online free: Celsius, Fahrenheit, Kelvin, and Rankine. Instant bidirectional conversion with all units shown at once.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How do I convert Celsius to Fahrenheit?", a: "°F = (°C × 9/5) + 32. For example, 100°C × 9/5 = 180, plus 32 = 212°F (boiling point of water at sea level)." },
  { q: "How do I convert Fahrenheit to Celsius?", a: "°C = (°F − 32) × 5/9. For example, 98.6°F − 32 = 66.6, × 5/9 = 37°C (normal human body temperature)." },
  { q: "What is absolute zero in Celsius and Fahrenheit?", a: "Absolute zero is 0 Kelvin = −273.15°C = −459.67°F. At absolute zero, all molecular motion theoretically stops. It is the coldest possible temperature." },
  { q: "What is the Rankine scale?", a: "The Rankine scale is an absolute temperature scale like Kelvin but based on Fahrenheit degrees. 0°R = absolute zero; water freezes at 491.67°R and boils at 671.67°R. It is used mainly in engineering contexts in the US." },
];

export default function TemperatureConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Temperature Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/temperature#software", name: "Temperature Converter", url: "https://webpifyy.vercel.app/convert/temperature", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Temperature Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Temperature <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert Celsius, Fahrenheit, Kelvin, and Rankine — bidirectional with all units shown simultaneously.</p></div>
        <TemperatureConverter />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">4</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
