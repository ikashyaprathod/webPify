import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifCreator from "@/components/GifCreator";

export const metadata = {
  title: "GIF Creator Online Free — Make GIF from Images",
  description: "Create GIF animations from multiple images online free. Set FPS, width, and loop count. Uses FFmpeg WebAssembly. No uploads to server.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/create" },
  openGraph: { title: "GIF Creator Online Free — Make GIF from Images | webpifyy", description: "Create GIF animations from multiple images online free. Set FPS, width, and loop count. Uses FFmpeg WebAssembly. No uploads to server.", url: "https://webpifyy.vercel.app/gif/create", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "GIF Creator Online Free — Make GIF from Images | webpifyy", description: "Create GIF animations from multiple images online free. Set FPS, width, and loop count. Uses FFmpeg WebAssembly. No uploads to server.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What image formats can be used to create a GIF?", a: "This tool accepts PNG, JPEG, and WebP images as input frames. All images are decoded by the browser before being passed to FFmpeg WASM, so any format your browser can display is supported. For best results, use images of the same dimensions so frames align cleanly in the animation." },
  { q: "How is the frame order determined?", a: "Frames are assembled in the order you add or arrange them in the interface. You can drag to reorder frames before generating. The first frame in the list becomes the first frame of the GIF. FFmpeg then encodes them in that sequence at the specified FPS." },
  { q: "What does FPS mean and how does it affect the GIF?", a: "FPS (frames per second) determines how many image frames are displayed per second of animation. A higher FPS produces smoother motion but a larger file (more frames stored). A lower FPS produces a choppier, slide-show-like animation but a smaller file. For most web GIFs, 10–15 FPS is a good balance between smoothness and file size." },
  { q: "How can I reduce the output GIF file size?", a: "Several strategies reduce GIF size: lower the FPS (fewer frames), reduce the output width (fewer pixels per frame), reduce the number of input images, and limit the number of colors in the palette. This tool uses FFmpeg's palettegen and paletteuse filters to generate an optimized per-GIF color palette, which significantly reduces file size compared to using a generic 256-color palette." },
];

export default function GifCreatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "GIF Tools", item: "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", position: 3, name: "GIF Creator", item: "https://webpifyy.vercel.app/gif/create" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/gif/create#software", name: "GIF Creator", url: "https://webpifyy.vercel.app/gif/create", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "GIF Tools", href: "/gif" }, { label: "GIF Creator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF</span>
          <h1 className="toolpg-title">GIF <span className="toolpg-title-accent">Creator</span></h1>
          <p className="toolpg-subtitle">Make animated GIFs from PNG, JPEG, or WebP images. Set FPS, width, and loops. Optimized palette — runs in your browser.</p>
        </div>
        <GifCreator />
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
