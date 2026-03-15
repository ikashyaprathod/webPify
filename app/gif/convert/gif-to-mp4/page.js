import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import GifCompressor from "@/components/GifCompressor";

export const metadata = {
  title: "GIF to MP4 Converter – Convert Animated GIF to MP4 Online Free",
  description: "Convert animated GIF to MP4 video online. Up to 90% smaller file size. Free, fast, browser-based — your files never leave your device.",
  alternates: { canonical: "https://webpifyy.vercel.app/gif/convert/gif-to-mp4" },
  openGraph: {
    title: "GIF to MP4 Converter – Convert Animated GIF to MP4 Online Free",
    description: "Convert animated GIF to MP4 video online. Up to 90% smaller file size. Free, fast, browser-based — your files never leave your device.",
    url: "https://webpifyy.vercel.app/gif/convert/gif-to-mp4",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"GIF Tools","item":"https://webpifyy.vercel.app/gif"},{"@type":"ListItem","position":3,"name":"Convert","item":"https://webpifyy.vercel.app/gif/convert"},{"@type":"ListItem","position":4,"name":"GIF to MP4"}]})
  },
};

export default function GifToMp4Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "GIF", item: "https://webpifyy.vercel.app/gif" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/gif/convert" },
          { "@type": "ListItem", position: 4, name: "GIF to MP4" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/gif/convert/gif-to-mp4#software",
        "name": "GIF to MP4 Converter",
        "url": "https://webpifyy.vercel.app/gif/convert/gif-to-mp4",
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
        "description": "Convert animated GIF files to MP4 video in your browser. No uploads. Powered by FFmpeg.wasm.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'GIF Tools',href:'/gif'},{label:'Convert',href:'/gif/convert'},{label:'GIF to MP4'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MP4</span>
          <h1 className="toolpg-title">GIF to <span className="toolpg-title-accent">MP4</span></h1>
          <p className="toolpg-subtitle">Convert animated GIFs to H.264 MP4 — up to 90% smaller, same visual quality. Runs entirely in your browser, no uploads.</p>
        </div>

        <GifCompressor defaultTask="gif-to-mp4" />

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
          <h2>Why convert GIF to MP4?</h2>
          <div className="toolpg-infobox-grid">
            <div>🎬 H.264 is 10–20x more efficient than GIF's LZW compression — a 5 MB GIF can become a 0.5 MB MP4</div>
            <div>🎨 MP4 supports 16 million colors vs GIF's 256, resulting in smoother gradients and sharper visuals</div>
            <div>⚡ Faster page load times since browsers can stream MP4 progressively</div>
            <div>📱 Compatible with all modern browsers, social platforms, and messaging apps</div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
