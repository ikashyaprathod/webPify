import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UnitConverter from "@/components/UnitConverter";

export const metadata = {
  title: "Data Size Converter Online Free — GB, MB, KB, TB, Bits",
  description: "Convert data storage units online free: bits, bytes, KB, MB, GB, TB, PB, Kb, Mb, Gb. Binary (base-1024) conversions shown instantly. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert/data-size" },
  openGraph: { title: "Data Size Converter Online Free — GB, MB, KB, TB, Bits | webpifyy", description: "Convert data storage units online free: bits, bytes, KB, MB, GB, TB, PB, Kb, Mb, Gb. Binary (base-1024) conversions shown instantly. No signup.", url: "https://webpifyy.vercel.app/convert/data-size", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Data Size Converter Online Free — GB, MB, KB, TB, Bits | webpifyy", description: "Convert data storage units online free: bits, bytes, KB, MB, GB, TB, PB, Kb, Mb, Gb. Binary (base-1024) conversions shown instantly. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How many bytes are in a kilobyte?", a: "In computing, 1 kilobyte (KB) = 1,024 bytes (binary/base-2 definition). This calculator uses binary prefixes (1024-based) which is the standard in operating systems and storage devices." },
  { q: "How many MB in a GB?", a: "1 gigabyte (GB) = 1,024 megabytes (MB). So 1 GB = 1,024 MB = 1,048,576 KB = 1,073,741,824 bytes." },
  { q: "What is the difference between bits and bytes?", a: "1 byte = 8 bits. Bits (b) are used for network transfer speeds (Mbps, Gbps), while bytes (B) are used for file sizes and storage capacity. A 100 Mbps connection transfers 12.5 MB per second." },
  { q: "What does TB and PB mean?", a: "TB = terabyte = 1,024 GB ≈ 1 trillion bytes. PB = petabyte = 1,024 TB ≈ 1 quadrillion bytes. Modern data centers and cloud storage are measured in petabytes and beyond." },
];

export default function DataSizeConverterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters", item: "https://webpifyy.vercel.app/convert" }, { "@type": "ListItem", position: 3, name: "Data Size Converter" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/convert/data-size#software", name: "Data Size Converter", url: "https://webpifyy.vercel.app/convert/data-size", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters", href: "/convert" }, { label: "Data Size Converter" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Data Size <span className="toolpg-title-accent">Converter</span></h1><p className="toolpg-subtitle">Convert bits, bytes, KB, MB, GB, TB, PB and more — using binary (1024-based) definitions. All units shown at once.</p></div>
        <UnitConverter category="data-size" />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">10</p><p className="tpg-sl">Units Supported</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Conversions update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
