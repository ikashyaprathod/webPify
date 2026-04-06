import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import HtmlToText from "@/components/HtmlToText";

export const metadata = {
  title: "HTML to Text Converter Online Free — Strip HTML Tags",
  description: "Strip HTML tags and convert HTML to plain text online free. Preserves line breaks from block elements. Instant, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/text/html-to-text" },
  openGraph: { title: "HTML to Text Converter Online Free — Strip HTML Tags | webpifyy", description: "Strip HTML tags and convert HTML to plain text online free. Preserves line breaks from block elements. Instant, browser-based.", url: "https://webpifyy.vercel.app/text/html-to-text", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "HTML to Text Converter Online Free — Strip HTML Tags | webpifyy", description: "Strip HTML tags and convert HTML to plain text online free. Preserves line breaks from block elements. Instant, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "Which HTML tags are stripped?", a: "All HTML tags are stripped — including structural tags like div, p, section, nav, header, footer; inline tags like span, strong, em, a, img; and script and style blocks whose content is also removed entirely to avoid outputting raw JavaScript or CSS." },
  { q: "How are line breaks handled?", a: "Block-level elements such as p, div, h1–h6, li, br, blockquote, and tr insert newline characters at the appropriate positions before stripping the tags. This preserves the visual structure of the text so paragraphs and list items appear on separate lines." },
  { q: "Are HTML entities decoded?", a: "Yes. Common HTML entities like &amp;, &lt;, &gt;, &quot;, &nbsp;, and numeric entities such as &#169; are decoded to their corresponding Unicode characters before output, so the plain text reads naturally." },
  { q: "What are common use cases for HTML to text conversion?", a: "Common uses include extracting readable content from scraped HTML pages, preparing email plain-text fallbacks from HTML email templates, feeding HTML content into NLP pipelines that expect plain text, and cleaning CMS or rich-text editor output before indexing." },
];

export default function HtmlToTextPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Text Tools", item: "https://webpifyy.vercel.app/text" },
          { "@type": "ListItem", position: 3, name: "HTML to Text", item: "https://webpifyy.vercel.app/text/html-to-text" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/text/html-to-text#software", name: "HTML to Text Converter", url: "https://webpifyy.vercel.app/text/html-to-text", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }, { label: "HTML to Text" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TEXT</span>
          <h1 className="toolpg-title">HTML to <span className="toolpg-title-accent">Plain Text</span></h1>
          <p className="toolpg-subtitle">Strip all HTML tags and extract clean plain text. Preserves line breaks from paragraphs and block elements.</p>
        </div>
        <HtmlToText />
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
