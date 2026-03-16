import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import HtmlMinifier from "@/components/HtmlMinifier";

export const metadata = {
  title: "HTML Minifier Online Free — webpifyy",
  description: "Minify HTML by removing whitespace and comments. Get faster page loads and smaller HTML file sizes. Free, instant, browser-based — no upload needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/html-minifier" },
  openGraph: {
    title: "HTML Minifier Online Free — webpifyy",
    description: "Minify HTML by removing whitespace and comments. Faster page loads, smaller file sizes.",
    url: "https://webpifyy.vercel.app/dev/html-minifier",
  },
  twitter: { card: "summary_large_image", title: "HTML Minifier Online Free", description: "Remove whitespace and comments from HTML for faster page loads." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"HTML Minifier"}]})
  },
};

const faqs = [
  { q: "What does HTML minification do?", a: "HTML minification removes unnecessary whitespace, newlines, and HTML comments from your markup. The browser renders the page identically, but the file is smaller, reducing Time to First Byte (TTFB) and improving page speed." },
  { q: "Is it safe to remove HTML comments?", a: "In production, yes. HTML comments are developer notes and conditional IE comments that are invisible to users. Removing them reduces file size without affecting the rendered page. Ensure you are not relying on comments for IE legacy support before removing." },
  { q: "Does collapsing whitespace affect layout?", a: "For most markup it is safe. However, inline elements separated only by whitespace (e.g., two span elements) may lose the single space between them. Review your output carefully if you use inline elements that rely on whitespace separation." },
  { q: "How much size can I save by minifying HTML?", a: "Typically 5–30% depending on how much whitespace and comment content the original file has. Combined with gzip/brotli compression on your server, total savings can be significantly higher." },
];

export default function HtmlMinifierPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "HTML Minifier" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/html-minifier#software",
        name: "HTML Minifier",
        url: "https://webpifyy.vercel.app/dev/html-minifier",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "HTML Minifier" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">HTML</span>
          <h1 className="toolpg-title">HTML <span className="toolpg-title-accent">Minifier</span></h1>
          <p className="toolpg-subtitle">Minify HTML by removing whitespace and comments. Faster page loads, smaller file sizes.</p>
        </div>

        <HtmlMinifier />

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
