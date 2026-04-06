import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifSpeed from "@/components/GifSpeed";

export const metadata = {
  title: "GIF Speed Changer Online Free — Speed Up or Slow Down GIF",
  description: "Change GIF playback speed online free. Speed up or slow down GIFs from 0.25x to 4x. FFmpeg WebAssembly, no uploads to server.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/edit/speed" },
  openGraph: { title: "GIF Speed Changer Online Free — Speed Up or Slow Down GIF | webpifyy", description: "Change GIF playback speed online free. Speed up or slow down GIFs from 0.25x to 4x. FFmpeg WebAssembly, no uploads to server.", url: "https://webpifyy.vercel.app/gif/edit/speed", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "GIF Speed Changer Online Free — Speed Up or Slow Down GIF | webpifyy", description: "Change GIF playback speed online free. Speed up or slow down GIFs from 0.25x to 4x. FFmpeg WebAssembly, no uploads to server.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "How does frame delay affect GIF playback speed?", a: "GIF playback speed is controlled by a delay value stored per frame, measured in hundredths of a second (centiseconds). A frame with a delay of 10 displays for 100ms, giving 10 frames per second. Halving the delay doubles the speed; doubling the delay halves it. This tool reads each frame's delay and applies the speed multiplier to produce the new values." },
  { q: "What is the setpts FFmpeg filter and how does it change GIF speed?", a: "The setpts (set presentation timestamps) filter rescales the timestamps of each frame in a video stream. For GIFs, applying setpts=0.5*PTS halves all timestamps, which doubles playback speed. Applying setpts=2.0*PTS doubles timestamps, halving speed. This approach is accurate and preserves all frames without frame duplication or deletion." },
  { q: "Does changing GIF speed affect file size?", a: "Speeding up a GIF does not change the number of frames or any pixel data, so the file size stays virtually identical — only the delay metadata values change. Slowing down a GIF also does not add frames; it only increases delay values. File size therefore remains nearly the same regardless of the speed multiplier chosen." },
  { q: "What is the best speed for a seamlessly looping GIF?", a: "For most looping GIFs, a speed of 1x to 1.5x feels natural. Speeds above 2x can make motion feel frantic and reduce legibility. Speeds below 0.5x can feel sluggish. For reaction GIFs and memes, 1.25x to 1.5x is often the sweet spot that keeps energy high without losing clarity." },
];

export default function GifSpeedPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app" },
          { "@type": "ListItem", position: 2, name: "GIF Tools", item: "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", position: 3, name: "GIF Edit", item: "https://webpifyy.vercel.app/gif/edit" },
          { "@type": "ListItem", position: 4, name: "GIF Speed Changer", item: "https://webpifyy.vercel.app/gif/edit/speed" },
        ],
      },
      { "@type": ["SoftwareApplication", "WebApplication"], "@id": "https://webpifyy.vercel.app/gif/edit/speed#software", name: "GIF Speed Changer", url: "https://webpifyy.vercel.app/gif/edit/speed", applicationCategory: "MultimediaApplication", operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "GIF Tools", href: "/gif" }, { label: "GIF Edit", href: "/gif/edit" }, { label: "GIF Speed Changer" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">GIF</span>
          <h1 className="toolpg-title">GIF Speed <span className="toolpg-title-accent">Changer</span></h1>
          <p className="toolpg-subtitle">Speed up or slow down any GIF from 0.25x to 4x. FFmpeg WASM processing — files stay in your browser.</p>
        </div>
        <GifSpeed />
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
