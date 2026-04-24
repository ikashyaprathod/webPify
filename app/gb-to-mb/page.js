import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "GB to MB Converter — Gigabytes to Megabytes Free",
  description: "Convert gigabytes to megabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.",
  alternates: { canonical: "https://webpifyy.vercel.app/gb-to-mb" },
  openGraph: { title: "GB to MB Converter — Gigabytes to Megabytes Free | webpifyy", description: "Convert gigabytes to megabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.", url: "https://webpifyy.vercel.app/gb-to-mb", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "GB to MB Converter — Gigabytes to Megabytes Free | webpifyy", description: "Convert gigabytes to megabytes instantly. 1 GB = 1,024 MB (binary). All data size units shown. Free converter.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many MB are in a GB?", a: "In binary (used by operating systems): 1 GB = 1,024 MB. In decimal (used by storage manufacturers): 1 GB = 1,000 MB. So 4 GB of RAM = 4,096 MB in binary terms." },
  { q: "What is 2 GB in MB?", a: "2 GB × 1,024 = 2,048 MB (binary). This is a common file attachment limit for many email services and is roughly the size of a 4K short video." },
  { q: "What is 256 GB in MB?", a: "256 GB × 1,024 = 262,144 MB. This is a typical smartphone storage capacity, equivalent to around 262 thousand megabytes." },
  { q: "Why does my 1 GB file show a different size in MB on different systems?", a: "Different systems use different definitions. Windows uses binary (1 GB = 1,024 MB), while macOS (since 10.6) and most storage vendors use decimal (1 GB = 1,000 MB). A 1 GB file in decimal = 953.67 MB in binary." },
];

export default function GbToMbPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Data Size Converter", item: "https://webpifyy.vercel.app/convert/data-size" }, { "@type": "ListItem", position: 4, name: "GB to MB" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/gb-to-mb#software", name: "GB to MB Converter", url: "https://webpifyy.vercel.app/gb-to-mb", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Data Size Converter", href: "/convert/data-size" }, { label: "GB to MB" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Gigabytes to <span className="toolpg-title-accent">Megabytes</span></h1><p className="toolpg-subtitle">Convert GB to MB instantly. 1 GB = 1,024 MB (binary). All data units shown from bits to terabytes.</p></div>
        <UnitConverter category="data-size" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Conversions</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
