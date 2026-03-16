import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata = {
  title: "Password Generator Free Online — Secure & Random",
  description: "Generate secure, random passwords up to 64 characters. Customize with uppercase, lowercase, symbols, and numbers. Free, browser-based, no data stored.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/password-generator" },
  openGraph: {
    title: "Password Generator Free Online — Secure & Random",
    description: "Generate secure, random passwords up to 64 characters. Customize with symbols, numbers, and more.",
    url: "https://webpifyy.vercel.app/dev/password-generator",
  },
  twitter: { card: "summary_large_image", title: "Password Generator Free Online — Secure & Random", description: "Generate strong random passwords instantly. Free and private." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"Password Generator"}]})
  },
};

const faqs = [
  { q: "How are the passwords generated?", a: "Passwords are generated using the Web Cryptography API (crypto.getRandomValues), which provides cryptographically secure random numbers. The process runs entirely in your browser — nothing is sent to any server." },
  { q: "What makes a password strong?", a: "A strong password has high entropy, meaning a large character pool combined with sufficient length. Enabling all character types (uppercase, lowercase, numbers, symbols) and using 16+ characters creates a very strong password." },
  { q: "What does the entropy number mean?", a: "Entropy measures how unpredictable a password is, expressed in bits. A password with 80+ bits of entropy is considered very strong and would take billions of years to brute-force with modern hardware." },
  { q: "Is it safe to use this tool for real passwords?", a: "Yes. The generator uses cryptographically secure randomness (not Math.random). Since everything runs client-side and nothing is logged, you can safely use generated passwords for real accounts." },
];

export default function PasswordGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Password Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/password-generator#software",
        name: "Password Generator",
        url: "https://webpifyy.vercel.app/dev/password-generator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Password Generator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PASSWORD</span>
          <h1 className="toolpg-title">Password <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate secure, random passwords up to 64 characters. Customize with symbols, numbers, and more.</p>
        </div>

        <PasswordGenerator />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
          </div>
        </div>

        <div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
