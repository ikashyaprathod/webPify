import SvgOptimizer from "@/components/SvgOptimizer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "SVG Optimizer Online – Optimize & Minify SVG Files Free",
  description: "Optimize SVG files online. Removes metadata, minifies paths, merges styles. Powered by SVGO. Free, instant, no upload needed.",
};

export default function SvgOptimizerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "SVG Optimizer", href: "/svg-optimizer" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpify.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "SVG Optimizer", item: "https://webpify.vercel.app/svg-optimizer" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "SVG Optimizer",
        applicationCategory: "ImageProcessing",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Optimize and minify SVG files online using SVGO. Removes unnecessary metadata, comments, and editor artifacts.",
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
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Breadcrumb items={breadcrumbs} />
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>SVG Optimizer</h1>
            <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Minify and clean SVG files using SVGO. Remove metadata, merge styles, optimize paths.</p>
          </div>

          <SvgOptimizer />

          <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "rgba(0,112,243,0.04)", border: "1px solid rgba(0,112,243,0.15)", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.75rem" }}>What gets optimized?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", fontSize: "0.9rem" }}>
              <div>✂️ Removes doctype, XML declarations, comments</div>
              <div>🏷️ Strips editor metadata (Inkscape, Illustrator)</div>
              <div>🎨 Merges and minifies CSS styles</div>
              <div>📐 Converts and minifies path data</div>
              <div>🔤 Cleans up IDs and attribute names</div>
              <div>🗂️ Collapses redundant groups</div>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/image/compressor", label: "Image Compressor" },
                { href: "/image/converter",  label: "Image Converter" },
                { href: "/image/resizer",    label: "Image Resizer" },
                { href: "/gif/compressor",   label: "GIF Compressor" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ padding: "0.5rem 1rem", border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", fontSize: "0.875rem", textDecoration: "none", color: "var(--foreground)" }}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="faq-section" style={{ marginTop: "3rem" }}>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <details key={i} className="faq-details">
                <summary className="faq-question">{f.q}</summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
