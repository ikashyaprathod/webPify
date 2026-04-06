import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifResize from "@/components/GifResize";

export const metadata = {
  title: "GIF Resizer Online Free — Resize GIF Images",
  description: "Resize GIF files online free. Set width in pixels, keep aspect ratio. FFmpeg WebAssembly, browser-based processing. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/edit/resize" },
  openGraph: { title: "GIF Resizer Online Free — Resize GIF Images | webpifyy", description: "Resize GIF files online free. Set width in pixels, keep aspect ratio. FFmpeg WebAssembly, browser-based processing. No uploads.", url: "https://webpifyy.vercel.app/gif/edit/resize", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "GIF Resizer Online Free — Resize GIF Images | webpifyy", description: "Resize GIF files online free. Set width in pixels, keep aspect ratio. FFmpeg WebAssembly, browser-based processing. No uploads.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How does browser-based GIF resizing work?", a: "This tool uses FFmpeg WebAssembly to run FFmpeg's video scaling filter (scale) directly inside your browser. The GIF is decoded frame-by-frame, each frame is scaled to the target dimensions using the Lanczos algorithm, and then the frames are re-encoded back into GIF format — all without sending any data to a server." },
  { q: "Does aspect ratio lock preserve the original proportions?", a: "Yes. When aspect ratio lock is enabled, entering a target width automatically calculates the correct height to maintain the original width-to-height ratio. This prevents the GIF from appearing stretched or squashed. The FFmpeg scale filter uses -1 as the height value which tells FFmpeg to compute it automatically." },
  { q: "Does resizing affect GIF image quality?", a: "Reducing a GIF's dimensions generally does not introduce visible quality loss as long as you stay within a reasonable reduction range. Enlarging a GIF beyond its original size will cause pixelation because GIF is a raster format with no vector information. For best results, always resize down rather than up." },
  { q: "Are there maximum or minimum dimension limits?", a: "There is no hard maximum enforced by this tool beyond available browser memory. Practically, GIFs above 2000 pixels wide may take significant time to process due to the frame count and WASM memory constraints. The minimum useful width is 1 pixel, but values below 16 pixels typically produce unreadable results." },
];

export default function GifResizePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "GIF Tools", item: "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", position: 3, name: "GIF Edit", item: "https://webpifyy.vercel.app/gif/edit" },
          { "@type": "ListItem", position: 4, name: "GIF Resizer", item: "https://webpifyy.vercel.app/gif/edit/resize" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/gif/edit/resize#software", name: "GIF Resizer", url: "https://webpifyy.vercel.app/gif/edit/resize", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "GIF Tools", href: "/gif" }, { label: "GIF Edit", href: "/gif/edit" }, { label: "GIF Resizer" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF</span>
          <h1 className="toolpg-title">GIF <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize GIF files to any width with aspect ratio lock. Uses FFmpeg WASM — your files never leave your browser.</p>
        </div>
        <GifResize />
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
