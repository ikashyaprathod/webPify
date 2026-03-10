import PageShell from "@/components/PageShell";
import SvgOptimizer from "@/components/SvgOptimizer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "SVG Optimizer Online – Optimize & Minify SVG Files Free",
  description: "Optimize SVG files online. Removes metadata, minifies paths, merges styles. Powered by SVGO. Free, instant, no upload needed.",
  alternates: { canonical: "https://webpify.vercel.app/svg-optimizer" },
  openGraph: {
    title: "SVG Optimizer Online – Optimize & Minify SVG Files Free",
    description: "Optimize SVG files online. Removes metadata, minifies paths, merges styles. Powered by SVGO. Free, instant, no upload needed.",
    url: "https://webpify.vercel.app/svg-optimizer",
  },
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
      <PageShell>
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero">
          <h1 className="page-title">SVG Optimizer</h1>
          <p className="page-subtitle">Minify and clean SVG files using SVGO. Remove metadata, merge styles, optimize paths.</p>
        </div>

        <SvgOptimizer />

        <div className="info-box">
          <h2>What gets optimized?</h2>
          <div className="info-box-grid">
            <div>✂️ Removes doctype, XML declarations, comments</div>
            <div>🏷️ Strips editor metadata (Inkscape, Illustrator)</div>
            <div>🎨 Merges and minifies CSS styles</div>
            <div>📐 Converts and minifies path data</div>
            <div>🔤 Cleans up IDs and attribute names</div>
            <div>🗂️ Collapses redundant groups</div>
          </div>
        </div>

        <h2 className="section-heading">Related Tools</h2>
        <div className="tool-chips">
          <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
          <Link href="/image/converter" className="tool-chip">Image Converter</Link>
          <Link href="/image/resizer" className="tool-chip">Image Resizer</Link>
          <Link href="/gif/compressor" className="tool-chip">GIF Compressor</Link>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <details key={i} className="faq-details">
              <summary className="faq-question">{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </PageShell>
    </>
  );
}
