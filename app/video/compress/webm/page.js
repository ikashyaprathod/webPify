import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoCompressor from "@/components/VideoCompressor";

export const metadata = {
  title: "Compress WebM Video Online Free",
  description:
    "Compress WebM videos online free in your browser. Reduce WebM file size without uploading to servers. Free, private, no signup required.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/compress/webm" },
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Compress WebM Video Online Free | webpifyy",
    description: "Compress WebM videos online free in your browser. Reduce WebM file size without uploading to servers. Free, private, no signup required.",
    url: "https://webpifyy.vercel.app/video/compress/webm",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress WebM Video Online Free | webpifyy",
    description: "Compress WebM videos online free in your browser. Reduce WebM file size without uploading to servers. Free, private, no signup required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const webmFaqs = [
  {
    question: "What is WebM format?",
    answer:
      "WebM is an open-source video format developed by Google, designed for web use. It uses VP8 or VP9 video codecs and is natively supported in all modern browsers.",
  },
  {
    question: "Why compress WebM files?",
    answer:
      "Even though WebM is efficient, compressing further reduces bandwidth for streaming, storage costs, and improves load times on video-heavy web pages.",
  },
  {
    question: "Can I convert WebM to MP4 after compressing?",
    answer:
      "Yes. After compression use our WebM to MP4 converter to change the format for broader device compatibility.",
  },
  {
    question: "Is WebM compression free?",
    answer:
      "Completely free, unlimited, no signup required. Processing uses FFmpeg.wasm running in your browser so no files are ever uploaded.",
  },
];

export default function WebMCompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpifyy.vercel.app/video/compress" },
          { "@type": "ListItem", position: 3, name: "WebM Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/compress/webm#software",
        "name": "WebM Video Compressor",
        "url": "https://webpifyy.vercel.app/video/compress/webm",
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
        "description": "Compress WebM videos online free in your browser. Reduce WebM file size without uploading to servers. Free, private, no signup required.",
      },
      {
        "@type": "FAQPage",
        mainEntity: webmFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Video Tools',href:'/video'},{label:'Compress',href:'/video/compress'},{label:'WebM'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">WEBM</span>
          <h1 className="toolpg-title">WebM <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Compress WebM videos using VP9 encoding directly in your browser. No uploads. No server. 100% private.</p>
        </div>

        <VideoCompressor
          allowedFormats={["video/webm"]}
          formatName="WebM"
        />

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

        <div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {webmFaqs.map((faq, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{faq.question}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
