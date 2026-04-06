import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import UuidGenerator from "@/components/UuidGenerator";

export const metadata = {
  title: "UUID Generator Online Free \u2014 v4 UUID / GUID",
  description: "Generate UUID v4 (GUID) online free. Cryptographically secure random UUIDs. Standard, uppercase, and no-dash formats. No signup, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/uuid-generator" },
  openGraph: { title: "UUID Generator Online Free \u2014 v4 UUID / GUID | webpifyy", description: "Generate UUID v4 (GUID) online free. Cryptographically secure random UUIDs. Standard, uppercase, and no-dash formats. No signup, browser-based.", url: "https://webpifyy.vercel.app/dev/uuid-generator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "UUID Generator Online Free \u2014 v4 UUID / GUID | webpifyy", description: "Generate UUID v4 (GUID) online free. Cryptographically secure random UUIDs. Standard, uppercase, and no-dash formats. No signup, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is a UUID?", a: "A UUID (Universally Unique Identifier), also called a GUID (Globally Unique Identifier), is a 128-bit number used to uniquely identify objects. The standard format is 8-4-4-4-12 hexadecimal characters separated by hyphens, e.g. 550e8400-e29b-41d4-a716-446655440000." },
  { q: "What is UUID v4?", a: "UUID v4 is the most commonly used UUID version. It is entirely random — 122 bits are randomly generated, making collisions statistically impossible. This tool uses the browser's crypto.randomUUID() which is cryptographically secure." },
  { q: "Are the generated UUIDs guaranteed to be unique?", a: "They are statistically unique. With 2^122 possible v4 UUIDs, the probability of a collision is negligibly small — you would need to generate approximately 2.7 quintillion UUIDs to have a 50% chance of a single collision." },
  { q: "What is the difference between UUID and GUID?", a: "UUID and GUID refer to the same concept. UUID (Universally Unique Identifier) is the standard IETF term, while GUID (Globally Unique Identifier) is Microsoft's terminology. They are interchangeable in practice." },
];

export default function UuidGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" }, { "@type": "ListItem", position: 3, name: "UUID Generator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/dev/uuid-generator#software", name: "UUID Generator", url: "https://webpifyy.vercel.app/dev/uuid-generator", applicationCategory: "DeveloperApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "UUID Generator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">DEV</span><h1 className="toolpg-title">UUID <span className="toolpg-title-accent">Generator</span></h1><p className="toolpg-subtitle">Generate cryptographically secure UUID v4 (GUID) instantly. Standard, uppercase, and no-dash formats.</p></div>
        <UuidGenerator />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">UUIDs Generated</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
