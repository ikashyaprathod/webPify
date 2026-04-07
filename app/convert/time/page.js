import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Time Converter Online Free — seconds, minutes, hours, days",
  description: "Convert time units online free: nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, and years. All conversions shown instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/time" },
  openGraph: { title: "Time Converter Online Free — seconds, minutes, hours, days | webpifyy", description: "Convert time units online free: nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, and years. All conversions shown instantly.", url: "https://webpifyy.vercel.app/convert/time", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Time Converter Online Free — seconds, minutes, hours, days | webpifyy", description: "Convert time units online free: nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, and years. All conversions shown instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many seconds are in a day?", a: "1 day = 24 hours × 60 minutes × 60 seconds = 86,400 seconds." },
  { q: "How many days are in a year?", a: "This converter uses the average Julian year = 365.25 days = 31,557,600 seconds, accounting for leap years. A calendar year is exactly 365 days (366 in a leap year)." },
  { q: "How many milliseconds are in a second?", a: "1 second = 1,000 milliseconds (ms) = 1,000,000 microseconds (µs) = 1,000,000,000 nanoseconds (ns)." },
  { q: "How is a month defined in this converter?", a: "This converter uses an average month of 30.4375 days (365.25 / 12 = 2,629,800 seconds). Calendar months vary from 28 to 31 days, so this is an approximation for conversion purposes." },
];

export default function TimeConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Time Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/time#software", name: "Time Converter", url: "https://webpifyy.vercel.app/convert/time", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Time Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Time <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, and years — all at once.</p></div>
        <UnitConverter category="time" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">10</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
