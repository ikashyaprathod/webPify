import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "GIF Edit Tools Online Free — Resize Speed",
  description: "Free online GIF editing tools. Resize GIFs, change playback speed, and more. All browser-based, no uploads to server.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/edit" },
  openGraph: { title: "GIF Edit Tools Online Free — Resize Speed | webpifyy", description: "Free online GIF editing tools. Resize GIFs, change playback speed, and more. All browser-based, no uploads to server.", url: "https://webpifyy.vercel.app/gif/edit", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "GIF Edit Tools Online Free — Resize Speed | webpifyy", description: "Free online GIF editing tools. Resize GIFs, change playback speed, and more. All browser-based, no uploads to server.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "Can I edit GIF files directly in the browser?", a: "Yes. All GIF editing on this site runs entirely in your browser using FFmpeg WebAssembly (FFmpeg.wasm). There is no server-side processing, no file uploads, and no size limits imposed by a backend. Your GIF files stay on your device throughout the entire process." },
  { q: "What is FFmpeg WebAssembly and how does it power GIF editing?", a: "FFmpeg is the industry-standard open-source multimedia processing library. FFmpeg WebAssembly (FFmpeg.wasm) is a version compiled to WebAssembly so it can run inside a web browser at near-native speed. It supports the full FFmpeg filter and codec pipeline, enabling operations like GIF resizing and speed adjustment without any native software installation." },
  { q: "Does resizing a GIF affect its file size?", a: "Yes. Reducing a GIF's dimensions significantly reduces file size because there are fewer pixels to store per frame. A GIF resized to half its original width typically sees a file size reduction of 60–75%, depending on the content complexity and color palette. Increasing dimensions will increase file size." },
  { q: "What happens to GIF quality when changing playback speed?", a: "Changing playback speed only modifies the frame delay values stored in the GIF metadata — it does not re-encode or alter any pixel data. This means there is no quality loss when speeding up or slowing down a GIF. The visual content of every frame remains identical to the original." },
];

export default function GifEditPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "GIF Tools", item: "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", position: 3, name: "GIF Edit", item: "https://webpifyy.vercel.app/gif/edit" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "GIF Tools", href: "/gif" }, { label: "GIF Edit" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF</span>
          <h1 className="toolpg-title">GIF Edit <span className="toolpg-title-accent">Tools</span></h1>
          <p className="toolpg-subtitle">Resize and adjust GIF playback speed directly in your browser.</p>
        </div>
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
