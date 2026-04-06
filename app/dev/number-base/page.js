import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import NumberBase from "@/components/NumberBase";

export const metadata = {
  title: "Number Base Converter Online Free — Binary Hex Decimal",
  description: "Convert numbers between decimal, binary, octal, and hexadecimal online free. Instant conversion, all bases shown simultaneously. Browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/number-base" },
  openGraph: { title: "Number Base Converter Online Free — Binary Hex Decimal | webpifyy", description: "Convert numbers between decimal, binary, octal, and hexadecimal online free. Instant conversion, all bases shown simultaneously. Browser-based.", url: "https://webpifyy.vercel.app/dev/number-base", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Number Base Converter Online Free — Binary Hex Decimal | webpifyy", description: "Convert numbers between decimal, binary, octal, and hexadecimal online free. Instant conversion, all bases shown simultaneously. Browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What are number bases and why do they matter in computing?", a: "A number base (or radix) defines how many unique digits a positional numeral system uses. Decimal (base 10) uses digits 0–9. Binary (base 2) uses only 0 and 1, matching the two electrical states (off/on) of transistors — making it the native language of all digital hardware. Octal (base 8) and hexadecimal (base 16) are shorthand for binary: each octal digit represents 3 bits and each hex digit represents 4 bits, making large binary numbers much more readable." },
  { q: "How does binary work?", a: "Binary is a base-2 system where each digit position represents a power of 2. Reading right to left: 2^0=1, 2^1=2, 2^2=4, 2^3=8, and so on. The binary number 1011 equals (1×8)+(0×4)+(1×2)+(1×1) = 11 in decimal. All computer data — integers, text, images — is ultimately stored and processed as binary values." },
  { q: "Why is hexadecimal so commonly used by developers?", a: "Hexadecimal (base 16) uses digits 0–9 and letters A–F, where A=10 through F=15. Because 16 is a power of 2, each hex digit maps exactly to 4 binary bits (a nibble). This means an 8-bit byte is always two hex digits, a 32-bit integer is 8 hex digits, and so on. Hex is used everywhere binary data appears in developer contexts: memory addresses, color codes (#FF5733), Unicode code points (U+1F600), checksums, and network MAC addresses." },
  { q: "What is octal and where is it still used?", a: "Octal (base 8) uses digits 0–7. Each octal digit represents exactly 3 binary bits. While octal is less common than hex today, it remains relevant in Unix/Linux file permission notation — for example, chmod 755 sets permissions using three octal digits that encode read/write/execute bits for owner, group, and others. You will also encounter octal in older C code where integer literals beginning with 0 are treated as octal." },
];

export default function NumberBasePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Number Base Converter" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/number-base#software",
        name: "Number Base Converter",
        url: "https://webpifyy.vercel.app/dev/number-base",
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Number Base Converter" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">Number Base <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert between decimal, binary, octal, and hexadecimal instantly. Type in any base and see all conversions simultaneously.</p>
        </div>

        <NumberBase />

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
