import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SvgOptimizer from "@/components/SvgOptimizer";

export const metadata = {
  title: "SVG Optimizer Online – Optimize & Minify SVG Files Free",
  description: "Optimize SVG files online. Removes metadata, minifies paths, merges styles. Powered by SVGO. Free, instant, no upload needed.",
  alternates: { canonical: "https://webpifyy.vercel.app/svg/optimize" },
  openGraph: {
    title: "SVG Optimizer Online – Optimize & Minify SVG Files Free",
    description: "Optimize SVG files online. Removes metadata, minifies paths, merges styles. Powered by SVGO. Free, instant, no upload needed.",
    url: "https://webpifyy.vercel.app/svg/optimize",
  },
};

export default function SvgOptimizerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "SVG", item: "https://webpifyy.vercel.app/svg" },
          { "@type": "ListItem", position: 3, name: "SVG Optimizer" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/svg/optimize#software",
        "name": "SVG Optimizer",
        "url": "https://webpifyy.vercel.app/svg/optimize",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://webpifyy.vercel.app/#organization" }
        },
        "provider": { "@id": "https://webpifyy.vercel.app/#organization" },
        "author": { "@id": "https://webpifyy.vercel.app/#organization" },
        "description": "Optimize and minify SVG files online using SVGO. Removes unnecessary metadata, comments, and editor artifacts.",
      },
    ],
  };

  const faqs = [
    { q: "What does SVG optimization do?", a: "It removes redundant attributes, comments, editor metadata (Inkscape, Adobe Illustrator), merges identical styles, minifies path data, and collapses unnecessary groups. The result is a smaller, cleaner SVG that loads faster." },
    { q: "Will optimization break my SVG?", a: "For most SVGs, no. The optimizer uses safe, widely-tested SVGO plugins. Complex SVGs with animations, scripts, or external dependencies may need manual review." },
    { q: "How much smaller will my SVG be?", a: "Typical savings range from 20–60%. SVGs exported from Illustrator or Inkscape with full metadata can see 60–80% reduction." },
    { q: "Is my SVG uploaded to a server?", a: "The SVG is sent to our server for SVGO processing (a Node.js library), then immediately discarded. No files are stored." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'SVG Tools',href:'/svg'},{label:'Optimize'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">SVG</span>
          <h1 className="toolpg-title">SVG <span className="toolpg-title-accent">Optimizer</span></h1>
          <p className="toolpg-subtitle">Minify and clean SVG files using SVGO. Remove metadata, merge styles, optimize paths. Typical savings of 20–60%.</p>
        </div>

        <SvgOptimizer />

        {/* Stats + Why Choose */}
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

        {/* World / Edge-First Processing */}
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

        <div className="toolpg-infobox">
          <h2>What gets optimized?</h2>
          <div className="toolpg-infobox-grid">
            <div>✂️ Removes doctype, XML declarations, comments</div>
            <div>🏷️ Strips editor metadata (Inkscape, Illustrator)</div>
            <div>🎨 Merges and minifies CSS styles</div>
            <div>📐 Converts and minifies path data</div>
            <div>🔤 Cleans up IDs and attribute names</div>
            <div>🗂️ Collapses redundant groups</div>
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
