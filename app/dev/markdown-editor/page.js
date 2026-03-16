import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import MarkdownEditor from "@/components/MarkdownEditor";

export const metadata = {
  title: "Markdown Editor Online Free — Live Preview",
  description: "Write Markdown with instant HTML preview. Toolbar shortcuts for bold, italic, headings, links, and code. Copy HTML or Markdown. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/markdown-editor" },
  openGraph: {
    title: "Markdown Editor Online Free — Live Preview",
    description: "Write Markdown with instant HTML preview. Toolbar shortcuts, word count, copy HTML or Markdown.",
    url: "https://webpifyy.vercel.app/dev/markdown-editor",
  },
  twitter: { card: "summary_large_image", title: "Markdown Editor Online Free — Live Preview", description: "Write Markdown with instant HTML preview and toolbar shortcuts." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"Markdown Editor"}]})
  },
};

const faqs = [
  { q: "What is Markdown?", a: "Markdown is a lightweight markup language that converts plain text formatting to HTML. It is widely used for README files, documentation, blog posts, and content management systems. Symbols like **bold**, *italic*, and # headings are rendered as HTML." },
  { q: "How does the live preview work?", a: "As you type in the left pane, the editor converts your Markdown to HTML in real time using marked.js. The rendered HTML is displayed in the right pane, giving you an instant visual of the final output." },
  { q: "Can I use the generated HTML on my website?", a: "Yes. Click 'Copy HTML' to copy the rendered HTML output, then paste it into any webpage. The HTML is clean and standards-compliant." },
  { q: "What Markdown syntax is supported?", a: "The editor supports standard CommonMark syntax: headings (#, ##, ###), bold (**text**), italic (*text*), links ([text](url)), inline code (`code`), unordered lists (- item), blockquotes (>), and more." },
];

export default function MarkdownEditorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Markdown Editor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/markdown-editor#software",
        name: "Markdown Editor",
        url: "https://webpifyy.vercel.app/dev/markdown-editor",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Markdown Editor" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MARKDOWN</span>
          <h1 className="toolpg-title">Markdown <span className="toolpg-title-accent">Editor</span></h1>
          <p className="toolpg-subtitle">Write Markdown with instant HTML preview. Toolbar shortcuts, word count, copy HTML or Markdown.</p>
        </div>

        <MarkdownEditor />

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
