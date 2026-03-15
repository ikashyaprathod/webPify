import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import FaviconGenerator from "@/components/FaviconGenerator";

export const metadata = {
  title: "Favicon Generator Online Free — All Sizes",
  description: "Generate all favicon sizes from any image. 16×16, 32×32, 48×48, apple-touch-icon (180×180), and PWA icons (192×512). Download as ZIP with favicon.ico.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/favicon-generator" },
  keywords: ["favicon generator", "create favicon online", "favicon maker free", "favicon all sizes", "website icon generator"],
  openGraph: {
    title: "Favicon Generator Online Free — All Sizes",
    description: "Generate favicon in all sizes from any image. Download as ZIP.",
    url: "https://webpifyy.vercel.app/dev/favicon-generator",
  },
  twitter: { card: "summary_large_image", title: "Favicon Generator Online Free", description: "Generate all favicon sizes. Download as ZIP." },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools","item":"https://webpifyy.vercel.app/dev"},{"@type":"ListItem","position":3,"name":"Favicon Generator"}]})
  },
};

const faqs = [
  { q: "What favicon sizes does this tool generate?", a: "The tool generates: 16×16, 32×32, 48×48 (standard favicons), 180×180 (Apple touch icon), 192×192 and 512×512 (PWA icons). A favicon.ico is also included." },
  { q: "What image should I use as input?", a: "Use a square image (1:1 ratio) at least 512×512 pixels for best results. PNG with transparency works great for logos." },
  { q: "Is the favicon.ico generated correctly?", a: "The ZIP includes a favicon.ico file which is the 32×32 PNG renamed. For a proper multi-resolution ICO, you may want to use an ICO-specific tool." },
  { q: "How do I add the favicon to my website?", a: "Add these lines to your HTML: <link rel=\"icon\" href=\"/favicon.ico\"> <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\"> and include the PWA icons in your manifest.json." },
];

export default function FaviconGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Favicon Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/favicon-generator#software",
        name: "Favicon Generator",
        url: "https://webpifyy.vercel.app/dev/favicon-generator",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Generate all favicon sizes from any image. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"Favicon Generator"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">FAVICON</span>
          <h1 className="toolpg-title">Favicon <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate all favicon sizes from any image. 16px to 512px, Apple touch icon, PWA icons, and favicon.ico — download everything as ZIP.</p>
        </div>

        <FaviconGenerator />

        
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" />
            <div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-b">📊</div>
                <div><p className="tpg-sv">1.2 TB</p><p className="tpg-sl">Bandwidth Saved Today</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-i">⚡</div>
                <div><p className="tpg-sv">0.4s</p><p className="tpg-sl">Avg Process Time</p></div>
              </div>
              <div className="tpg-sc">
                <div className="tpg-sci tpg-sci-e">✓</div>
                <div><p className="tpg-sv">99.9%</p><p className="tpg-sl">Compression Fidelity</p></div>
              </div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-b">🔒</div>
              <h5 className="tpg-ttl">Military-Grade Privacy</h5>
              <p className="tpg-tds">Auto-purge after 60m. Zero logs. Fully encrypted processing.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-p">◈</div>
              <h5 className="tpg-ttl">Perfect Transparency</h5>
              <p className="tpg-tds">Advanced alpha-channel preservation for UI designers.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

        <div className="tpg-world">
          <div className="tpg-wmap" />
          <div className="tpg-wping" style={{top:"30%",left:"20%"}} />
          <div className="tpg-wping" style={{top:"40%",left:"45%"}} />
          <div className="tpg-wping" style={{top:"35%",left:"75%"}} />
          <div className="tpg-wping" style={{top:"65%",left:"30%"}} />
          <div className="tpg-wping" style={{top:"20%",left:"85%"}} />
          <div className="tpg-woverlay">
            <h4 className="tpg-wtitle">Edge-First Processing</h4>
            <p className="tpg-wdesc">Our global CDN ensures your files are optimized at the server nearest to you, reducing latency by up to 90%.</p>
            <div className="tpg-wnodes">
              <div className="tpg-wnode">US</div>
              <div className="tpg-wnode">EU</div>
              <div className="tpg-wnode">AS</div>
              <div className="tpg-wnode tpg-wnode-b">+9</div>
              <div className="tpg-wbar"><div className="tpg-wbar-fill" /></div>
              <span className="tpg-wstatus">Global Status: Optimal</span>
            </div>
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
