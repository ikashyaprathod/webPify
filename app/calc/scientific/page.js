import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ScientificCalc from "@/components/ScientificCalc";

export const metadata = {
  title: "Scientific Calculator Online Free — Trig, Log, Powers",
  description: "Free online scientific calculator with sin, cos, tan, log, ln, sqrt, powers, and more. Supports degrees and radians. No download, no signup needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/calc/scientific" },
  openGraph: { title: "Scientific Calculator Online Free — Trig, Log, Powers | webpifyy", description: "Free online scientific calculator with sin, cos, tan, log, ln, sqrt, powers, and more. Supports degrees and radians. No download, no signup needed.", url: "https://webpifyy.vercel.app/calc/scientific", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Scientific Calculator Online Free — Trig, Log, Powers | webpifyy", description: "Free online scientific calculator with sin, cos, tan, log, ln, sqrt, powers, and more. Supports degrees and radians. No download, no signup needed.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is the difference between DEG and RAD mode?", a: "In DEG mode, trigonometric functions expect angles in degrees (e.g., sin(90) = 1). In RAD mode, they expect radians (e.g., sin(π/2) = 1). Most everyday calculations use degrees; scientific and engineering work often uses radians." },
  { q: "What does log() calculate vs. ln()?", a: "log() computes the base-10 logarithm (common log). ln() computes the natural logarithm (base e ≈ 2.71828). For example, log(100) = 2 and ln(e) = 1." },
  { q: "How do I calculate powers and roots?", a: "Use the ^ operator for powers (e.g., 2^8 = 256). Use sqrt() for square roots. For other roots, use fractional exponents: the cube root of 27 = 27^(1/3) = 3." },
  { q: "What is the x² button?", a: "The x² button appends **2 to the current expression, squaring the previous number or expression. For example, pressing 5 then x² gives 5**2 = 25." },
];

export default function ScientificCalcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Calculators", item: "https://webpifyy.vercel.app/calc" }, { "@type": "ListItem", position: 3, name: "Scientific Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/calc/scientific#software", name: "Scientific Calculator", url: "https://webpifyy.vercel.app/calc/scientific", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calc" }, { label: "Scientific Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CALC</span><h1 className="toolpg-title">Scientific <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Full-featured scientific calculator with trig functions, logarithms, powers, roots, and constants. DEG/RAD toggle.</p></div>
        <ScientificCalc />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Calculations</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">All math runs in your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Evaluates expressions instantly.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
