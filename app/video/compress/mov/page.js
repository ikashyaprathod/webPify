import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import VideoCompressor from "@/components/VideoCompressor";

export const metadata = {
  title: "Compress MOV Online – Reduce iPhone MOV File Size Free",
  description:
    "Compress MOV videos from iPhone online. Convert and compress to MP4 or WebM — client-side, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/video/compress/mov" },
  openGraph: {
    title: "Compress MOV Online – Reduce iPhone MOV File Size Free",
    description: "Compress MOV videos from iPhone online. Convert and compress to MP4 or WebM — client-side, no uploads.",
    url: "https://webpifyy.vercel.app/video/compress/mov",
  },
};

const movFaqs = [
  {
    question: "What is a MOV file?",
    answer:
      "MOV is Apple's QuickTime movie format. It's the default recording format on iPhones and Mac cameras. MOV files are often very large because they use high-quality HEVC or H.264 encoding at high bitrates.",
  },
  {
    question: "How do I reduce MOV file size from iPhone?",
    answer:
      "Upload your MOV file and select MP4 as output format with 'Balanced' or 'Maximum Compression' preset. This re-encodes the video at lower bitrate, dramatically reducing file size while keeping good quality.",
  },
  {
    question: "Can I convert MOV to MP4?",
    answer:
      "Yes. Upload your MOV file and select 'MP4' as output format. The tool will re-encode it using H.264, which is universally compatible with all devices, browsers, and platforms.",
  },
  {
    question: "Why are iPhone MOV files so large?",
    answer:
      "iPhones record at very high bitrates (50–200 Mbps on newer models) to preserve maximum quality. While great for editing, these files are impractical for sharing. Compression reduces them to practical sizes.",
  },
  {
    question: "Does compressing MOV affect quality?",
    answer:
      "Using our 'High Quality' preset, the visual difference is nearly imperceptible for screen viewing. File sizes can be reduced by 60–85% while maintaining excellent visual clarity.",
  },
];

export default function MOVCompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Video Compressor", item: "https://webpifyy.vercel.app/video/compress" },
          { "@type": "ListItem", position: 3, name: "MOV Compressor" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/video/compress/mov#software",
        "name": "MOV Video Compressor",
        "url": "https://webpifyy.vercel.app/video/compress/mov",
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
        "description": "Compress and convert MOV files from iPhone online. No server uploads — fully client-side.",
      },
      {
        "@type": "FAQPage",
        mainEntity: movFaqs.map((faq) => ({
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
        <Breadcrumb items={[{label:'Home',href:'/'},{label:'Video Tools',href:'/video'},{label:'Compress',href:'/video/compress'},{label:'MOV'}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">MOV</span>
          <h1 className="toolpg-title">MOV <span className="toolpg-title-accent">Compressor</span></h1>
          <p className="toolpg-subtitle">Compress and convert MOV files from iPhone, iPad, or Mac directly in your browser. No uploads. No server. 100% private.</p>
        </div>

        <VideoCompressor
          allowedFormats={["video/quicktime", "video/mp4"]}
          formatName="MOV"
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
            {movFaqs.map((faq, i) => (
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
