import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import IdealWeight from "@/components/IdealWeight";

export const metadata = {
  title: "Ideal Weight Calculator Online Free — IBW by Height",
  description: "Calculate ideal body weight (IBW) by height using Devine, Robinson, Miller, and Hamwi formulas. Also shows healthy BMI weight range. Free, no signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/health/ideal-weight" },
  openGraph: { title: "Ideal Weight Calculator Online Free — IBW by Height | webpifyy", description: "Calculate ideal body weight (IBW) by height using Devine, Robinson, Miller, and Hamwi formulas. Also shows healthy BMI weight range. Free, no signup.", url: "https://webpifyy.vercel.app/health/ideal-weight", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Ideal Weight Calculator Online Free — IBW by Height | webpifyy", description: "Calculate ideal body weight (IBW) by height using Devine, Robinson, Miller, and Hamwi formulas. Also shows healthy BMI weight range. Free, no signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What is ideal body weight (IBW)?", a: "IBW is a clinically derived estimate of the healthiest weight for a given height and sex. It was originally developed for drug dosing in hospitals, not as a fitness target. Several different formulas exist (Devine, Robinson, Miller, Hamwi) and their results differ slightly." },
  { q: "Which IBW formula is most accurate?", a: "No single formula is universally best. Devine (1974) is most commonly used in clinical settings. Miller and Robinson (1983) are refinements. The BMI-based healthy range (18.5–24.9) is the most widely accepted standard for general population use." },
  { q: "What is IBW for a 5'10 male?", a: "Using the Devine formula: IBW = 50 + 2.3 × (70 − 60) = 50 + 23 = 73 kg (160.9 lbs). The healthy BMI range for 5'10 is approximately 58–78 kg (128–172 lbs)." },
  { q: "Should I aim to reach my IBW?", a: "IBW formulas give a rough estimate and don't account for muscle mass, body composition, or individual variation. Use it as a rough benchmark alongside BMI, body fat percentage, and guidance from a healthcare professional." },
];

export default function IdealWeightPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Health Calculators", item: "https://webpifyy.vercel.app/health" }, { "@type": "ListItem", position: 3, name: "Ideal Weight Calculator" }] },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/health/ideal-weight#software", name: "Ideal Weight Calculator", url: "https://webpifyy.vercel.app/health/ideal-weight", applicationCategory: "UtilitiesApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Health", href: "/health" }, { label: "Ideal Weight Calculator" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">HEALTH</span><h1 className="toolpg-title">Ideal Weight <span className="toolpg-title-accent">Calculator</span></h1><p className="toolpg-subtitle">Calculate ideal body weight by height using Devine, Robinson, Miller, and Hamwi formulas. Metric and imperial, with BMI healthy range.</p></div>
        <IdealWeight />
        <div className="tpg-stats-wrap"><div className="tpg-glass tpg-lm-panel"><div className="tpg-glow-1" /><div className="tpg-glow-2" /><div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div><div className="tpg-sc-grid"><div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">4</p><p className="tpg-sl">Formulas Used</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div><div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div></div></div><div className="tpg-tiles"><div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">No data leaves your browser.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration.</p></div><div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">All formulas update as you type.</p></div></div></div>
        <div className="toolpg-faq"><div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div><div className="toolpg-faq-list">{faqs.map((f,i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}</div></div>
      </PageShell>
    </>
  );
}
