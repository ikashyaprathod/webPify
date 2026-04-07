import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TemperatureConverter from "@/components/TemperatureConverter";

export const metadata = {
  title: "Fahrenheit to Celsius Converter — °F to °C Instantly",
  description: "Convert Fahrenheit to Celsius instantly. Formula: °C = (°F − 32) × 5/9. Also converts to Kelvin and Rankine. Free, browser-based, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/fahrenheit-to-celsius" },
  openGraph: { title: "Fahrenheit to Celsius Converter — °F to °C Instantly | webpifyy", description: "Convert Fahrenheit to Celsius instantly. Formula: °C = (°F − 32) × 5/9. Also converts to Kelvin and Rankine. Free, browser-based, no signup.", url: "https://webpifyy.vercel.app/fahrenheit-to-celsius", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Fahrenheit to Celsius Converter — °F to °C Instantly | webpifyy", description: "Convert Fahrenheit to Celsius instantly. Formula: °C = (°F − 32) × 5/9. Also converts to Kelvin and Rankine. Free, browser-based, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the formula for Fahrenheit to Celsius?", a: "°C = (°F − 32) × 5/9. For example, 98.6°F = (98.6 − 32) × 5/9 = 66.6 × 5/9 = 37°C (body temperature)." },
  { q: "What is 32°F in Celsius?", a: "32°F = 0°C. This is the freezing point of water at standard atmospheric pressure." },
  { q: "What is 212°F in Celsius?", a: "212°F = 100°C. This is the boiling point of water at sea level." },
  { q: "What is normal body temperature in Celsius?", a: "Normal human body temperature is approximately 37°C (98.6°F). Fever is generally considered 38°C (100.4°F) or above." },
];

export default function FToCPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Temperature Converter", item: "https://webpifyy.vercel.app/convert/temperature" }, { "@type": "ListItem", position: 4, name: "Fahrenheit to Celsius" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/fahrenheit-to-celsius#software", name: "Fahrenheit to Celsius Converter", url: "https://webpifyy.vercel.app/fahrenheit-to-celsius", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Temperature", href: "/convert/temperature" }, { label: "°F to °C" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Fahrenheit to <span className="toolpg-title-accent">Celsius</span></h1><p className="toolpg-subtitle">Convert °F to °C instantly using the formula °C = (°F − 32) × 5/9. Also shows Kelvin and Rankine.</p></div>
        <TemperatureConverter />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">4</p><p className="tpg-sl">Scales Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
