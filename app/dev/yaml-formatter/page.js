import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import YamlFormatter from "@/components/YamlFormatter";

export const metadata = {
  title: "YAML Formatter Online Free — Format & Convert YAML",
  description: "Format YAML and convert YAML to JSON online free. Normalize indentation, clean up YAML structure. Browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/yaml-formatter" },
  openGraph: { title: "YAML Formatter Online Free — Format & Convert YAML | webpifyy", description: "Format YAML and convert YAML to JSON online free. Normalize indentation, clean up YAML structure. Browser-based, no uploads.", url: "https://webpifyy.vercel.app/dev/yaml-formatter", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "YAML Formatter Online Free — Format & Convert YAML | webpifyy", description: "Format YAML and convert YAML to JSON online free. Normalize indentation, clean up YAML structure. Browser-based, no uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is YAML and how does it differ from JSON?", a: "YAML (YAML Ain't Markup Language) is a human-friendly data serialization format that uses indentation and minimal punctuation to represent structured data. Unlike JSON, YAML supports comments, multi-line strings, and anchors for reuse. YAML is a superset of JSON, so all valid JSON is also valid YAML, but YAML is generally easier to read and write by hand." },
  { q: "Why does indentation matter so much in YAML?", a: "YAML uses indentation to define nesting and hierarchy — there are no brackets or braces. Inconsistent indentation (mixing tabs and spaces, or using incorrect levels) will cause parse errors or silently alter the structure of your data. The formatter normalizes all indentation to a consistent number of spaces so your YAML is always valid and predictable." },
  { q: "When would I convert YAML to JSON?", a: "YAML to JSON conversion is useful when you need to pass configuration data to an API or program that only accepts JSON, when debugging to see the exact parsed structure, or when using tools like jq that operate on JSON. JSON is more portable across languages and systems; YAML is preferred for human-edited files like CI/CD configs, Kubernetes manifests, and Docker Compose files." },
  { q: "What are common YAML use cases in software development?", a: "YAML is ubiquitous in configuration files: GitHub Actions workflows, Kubernetes resource manifests, Docker Compose definitions, Ansible playbooks, Helm chart values, and application config files (such as database.yml in Ruby on Rails). Its readability makes it the format of choice wherever humans regularly edit configuration." },
];

export default function YamlFormatterPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "YAML Formatter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/yaml-formatter#software",
        name: "YAML Formatter",
        url: "https://webpifyy.vercel.app/dev/yaml-formatter",
        applicationCategory: "DeveloperApplication",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "YAML Formatter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">YAML</span>
          <h1 className="toolpg-title">YAML <span className="toolpg-title-accent">Formatter</span></h1>
          <p className="toolpg-subtitle">Format YAML and convert YAML to JSON. Normalize indentation and clean up YAML structure instantly.</p>
        </div>

        <YamlFormatter />

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
