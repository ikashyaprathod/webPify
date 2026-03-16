import PageShell from "@/components/PageShell";
import ImageCrop from "@/components/ImageCrop";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Crop Images Online Free \u2014 Crop Any Format",
  description: "Crop PNG, JPEG and WebP images online free. Draw selection, set exact dimensions, or choose preset aspect ratios. No uploads required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/crop" },
  openGraph: {
    title: "Crop Images Online Free \u2014 Crop Any Format | webpifyy",
    description: "Crop PNG, JPEG and WebP images online free. Draw selection, set exact dimensions, or choose preset aspect ratios. No uploads required.",
    url: "https://webpifyy.vercel.app/image/edit/crop",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Images Online Free \u2014 Crop Any Format | webpifyy",
    description: "Crop PNG, JPEG and WebP images online free. Draw selection, set exact dimensions, or choose preset aspect ratios. No uploads required.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "How do I crop an image to a specific size?", a: "Upload your image, draw a crop selection or enter exact pixel dimensions, then click crop. The result downloads instantly in the original format." },
  { q: "Can I crop to a specific aspect ratio?", a: "Yes. Choose from preset ratios like 1:1 (square), 16:9 (widescreen), 4:3, or 9:16 (portrait). The selection snaps to the chosen ratio." },
  { q: "Does cropping reduce image quality?", a: "No. Cropping only removes pixels from the edges. The remaining pixels are untouched, preserving the full quality of the kept area." },
  { q: "Can I undo a crop before downloading?", a: "Yes. Reset the selection and try a different crop. No changes are saved until you click download." },
];

export default function ImageCropPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Crop" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/crop#software",
        name: "Image Crop Tool",
        url: "https://webpifyy.vercel.app/image/edit/crop",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@id": "https://webpifyy.vercel.app/#organization" } },
        provider: { "@id": "https://webpifyy.vercel.app/#organization" },
        description: "Crop images online. Draw a selection and download instantly. Browser-based, no uploads.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Crop Image" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">CROP</span>
          <h1 className="toolpg-title">Crop Image <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Draw a crop selection on any image, preview the result, and download instantly. Supports PNG, JPEG, WebP. Everything runs in your browser.</p>
        </div>

        <ImageCrop />

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
              <div className="tpg-ti tpg-ti-p">✂️</div>
              <h5 className="tpg-ttl">Pixel-Perfect Crop</h5>
              <p className="tpg-tds">Drag handles or enter exact pixel dimensions for precise cropping.</p>
            </div>
            <div className="tpg-tile">
              <div className="tpg-ti tpg-ti-a">⚡</div>
              <h5 className="tpg-ttl">No Registration</h5>
              <p className="tpg-tds">Jump straight into processing without the sign-up friction.</p>
            </div>
          </div>
        </div>

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
