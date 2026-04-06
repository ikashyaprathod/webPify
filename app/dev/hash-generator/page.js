import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import HashGenerator from "@/components/HashGenerator";

export const metadata = {
  title: "Hash Generator Online Free \u2014 SHA-256 SHA-512 SHA-1",
  description: "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes online free. Uses Web Crypto API — runs entirely in your browser. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/hash-generator" },
  openGraph: { title: "Hash Generator Online Free \u2014 SHA-256 SHA-512 SHA-1 | webpifyy", description: "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes online free. Uses Web Crypto API — runs entirely in your browser. No uploads.", url: "https://webpifyy.vercel.app/dev/hash-generator", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Hash Generator Online Free \u2014 SHA-256 SHA-512 SHA-1 | webpifyy", description: "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes online free. Uses Web Crypto API — runs entirely in your browser. No uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is a cryptographic hash?", a: "A cryptographic hash function takes input data of any size and produces a fixed-size output (the hash or digest). The same input always produces the same output, but it is computationally infeasible to reverse the process or find two inputs with the same hash." },
  { q: "Which hash algorithm should I use?", a: "SHA-256 is the most widely used for general purposes (checksums, certificates, blockchain). SHA-512 provides more security for sensitive applications. SHA-1 is considered weak for security purposes and should only be used for non-security checksums. Avoid MD5 for any security use." },
  { q: "Is this tool safe to use for passwords?", a: "No. Never use a simple hash for password storage. Use dedicated password hashing algorithms like bcrypt, scrypt, or Argon2 which add salting and are deliberately slow. This tool is for file checksums, data verification, and similar tasks." },
  { q: "Does my text get sent to a server?", a: "No. This tool uses the browser's built-in Web Crypto API (crypto.subtle.digest) to compute hashes entirely on your device. Nothing is ever transmitted." },
];

export default function HashGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" }, { "@type": "ListItem", position: 3, name: "Hash Generator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/dev/hash-generator#software", name: "Hash Generator", url: "https://webpifyy.vercel.app/dev/hash-generator", applicationCategory: "DeveloperApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Hash Generator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">DEV</span><h1 className="toolpg-title">Hash <span className="toolpg-title-accent">Generator</span></h1><p className="toolpg-subtitle">Generate SHA-256, SHA-512, SHA-384, and SHA-1 hashes. Browser-based via Web Crypto API — nothing is uploaded.</p></div>
        <HashGenerator />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Hashes Generated</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
