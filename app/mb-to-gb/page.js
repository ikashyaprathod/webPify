import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "MB to GB Converter — Megabytes to Gigabytes Free",
  description: "Convert megabytes to gigabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/mb-to-gb" },
  openGraph: { title: "MB to GB Converter — Megabytes to Gigabytes Free | webpifyy", description: "Convert megabytes to gigabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.", url: "https://webpifyy.vercel.app/mb-to-gb", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "MB to GB Converter — Megabytes to Gigabytes Free | webpifyy", description: "Convert megabytes to gigabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many MB are in a GB?", a: "In binary (IEC standard used by operating systems): 1 GB = 1,024 MB. In decimal (SI standard used by storage manufacturers): 1 GB = 1,000 MB. This discrepancy is why a '1 TB' hard drive shows as ~931 GB in Windows." },
  { q: "What is 500 MB in GB?", a: "500 MB ÷ 1,024 = 0.4883 GB (binary). In decimal, 500 MB ÷ 1,000 = 0.5 GB. Mobile data plans typically use the decimal definition." },
  { q: "How many MB is a typical HD video file?", a: "A 1-minute 1080p video at standard compression is roughly 100–150 MB. A full-length 2-hour movie in 1080p is approximately 4–8 GB (4,096–8,192 MB)." },
  { q: "What is 1 TB in MB and GB?", a: "1 TB (binary) = 1,024 GB = 1,048,576 MB. In decimal, 1 TB = 1,000 GB = 1,000,000 MB. Operating systems report 1 TB drives as ~931 GB due to this binary/decimal difference." },
];

export default function MbToGbPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Data Size Converter", item: "https://webpifyy.vercel.app/convert/data-size" }, { "@type": "ListItem", position: 4, name: "MB to GB" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/mb-to-gb#software", name: "MB to GB Converter", url: "https://webpifyy.vercel.app/mb-to-gb", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Data Size Converter", href: "/convert/data-size" }, { label: "MB to GB" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Megabytes to <span className="toolpg-title-accent">Gigabytes</span></h1><p className="toolpg-subtitle">Convert MB to GB instantly. 1 GB = 1,024 MB (binary). All data units shown from bits to terabytes.</p></div>
        <UnitConverter category="data-size" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
