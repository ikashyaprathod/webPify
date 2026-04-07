import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import TemperatureConverter from "@/components/TemperatureConverter";

export const metadata = {
  title: "Celsius to Fahrenheit Converter — °C to °F Instantly",
  description: "Convert Celsius to Fahrenheit instantly. Formula: °F = (°C × 9/5) + 32. Also converts to Kelvin and Rankine. Free, browser-based, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/celsius-to-fahrenheit" },
  openGraph: { title: "Celsius to Fahrenheit Converter — °C to °F Instantly | webpifyy", description: "Convert Celsius to Fahrenheit instantly. Formula: °F = (°C × 9/5) + 32. Also converts to Kelvin and Rankine. Free, browser-based, no signup.", url: "https://webpifyy.vercel.app/celsius-to-fahrenheit", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Celsius to Fahrenheit Converter — °C to °F Instantly | webpifyy", description: "Convert Celsius to Fahrenheit instantly. Formula: °F = (°C × 9/5) + 32. Also converts to Kelvin and Rankine. Free, browser-based, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the formula for Celsius to Fahrenheit?", a: "°F = (°C × 9/5) + 32. For example, 100°C = (100 × 9/5) + 32 = 180 + 32 = 212°F." },
  { q: "What is 37°C in Fahrenheit?", a: "37°C = (37 × 9/5) + 32 = 66.6 + 32 = 98.6°F. This is normal human body temperature." },
  { q: "What temperature is the same in Celsius and Fahrenheit?", a: "-40°C = -40°F. This is the only temperature where both scales are equal." },
  { q: "What is 0°C in Fahrenheit?", a: "0°C = 32°F. This is the freezing point of water at standard atmospheric pressure." },
];

export default function CToFPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Temperature Converter", item: "https://webpifyy.vercel.app/convert/temperature" }, { "@type": "ListItem", position: 4, name: "Celsius to Fahrenheit" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/celsius-to-fahrenheit#software", name: "Celsius to Fahrenheit Converter", url: "https://webpifyy.vercel.app/celsius-to-fahrenheit", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Temperature", href: "/convert/temperature" }, { label: "°C to °F" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Celsius to <span className="toolpg-title-accent">Fahrenheit</span></h1><p className="toolpg-subtitle">Convert °C to °F instantly using the formula °F = (°C × 9/5) + 32. Also shows Kelvin and Rankine.</p></div>
        <TemperatureConverter />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">4</p><p className="tpg-sl">Scales Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Updates as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
