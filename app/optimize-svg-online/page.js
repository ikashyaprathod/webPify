import SvgOptimizer from "@/components/SvgOptimizer";

export const metadata = {
  title: "Optimize SVG Online Free – Minify SVG Files with SVGO",
  description: "Optimize and minify SVG files online using SVGO. Remove metadata, minify paths and styles. Free, instant results.",
};

export default function OptimizeSvgOnlinePage() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Optimize SVG Online</h1>
          <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>Minify SVG files with SVGO. Remove editor bloat, comments, and redundant attributes.</p>
        </div>
        <SvgOptimizer />
      </div>
    </div>
  );
}
