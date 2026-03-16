import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageBlur from "@/components/ImageBlur";

export const metadata = {
  title: "Blur Images Online Free \u2014 Gaussian Blur Effect",
  description: "Add blur effects to images online free. Gaussian blur with adjustable intensity. Perfect for privacy blurring and artistic effects. No uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/blur" },
  openGraph: {
    title: "Blur Images Online Free \u2014 Gaussian Blur Effect | webpifyy",
    description: "Add blur effects to images online free. Gaussian blur with adjustable intensity. Perfect for privacy blurring and artistic effects. No uploads.",
    url: "https://webpifyy.vercel.app/image/edit/blur",
    type: "website",
    siteName: "webpifyy",
    images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blur Images Online Free \u2014 Gaussian Blur Effect | webpifyy",
    description: "Add blur effects to images online free. Gaussian blur with adjustable intensity. Perfect for privacy blurring and artistic effects. No uploads.",
    images: ["https://webpifyy.vercel.app/opengraph-image"],
  },
};

const faqs = [
  { q: "What can I use image blurring for?", a: "Blur is used to obscure personal information in screenshots, create depth-of-field effects, add artistic bokeh, or prepare privacy-compliant images for social media." },
  { q: "How do I control the blur intensity?", a: "Use the blur intensity slider from 1 (subtle) to 20 (heavy blur). Preview updates in real time so you can find the right level before downloading." },
  { q: "Can I blur only part of an image?", a: "Currently the tool applies blur to the entire image. Selective blur for a specific region is planned for a future update." },
  { q: "Does blurring reduce image file size?", a: "Yes. Blurred images compress better than sharp ones. Run through our compressor after blurring for maximum size reduction." },
];

export default function ImageBlurPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Blur" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/blur#software",
        name: "Image Blur Tool",
        url: "https://webpifyy.vercel.app/image/edit/blur",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image Tools", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Blur" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">BLUR</span>
          <h1 className="toolpg-title">Blur <span className="toolpg-title-accent">Image</span></h1>
          <p className="toolpg-subtitle">Apply Gaussian blur to any image. Adjust blur intensity from 1 to 20. Download instantly.</p>
        </div>
        <ImageBlur />
        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head"><h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4><span className="tpg-lm-badge">v2.4.0-Stable</span></div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Nothing uploaded — all browser-based.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately, no account needed.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant</h5><p className="tpg-tds">Process in your browser instantly.</p></div>
          </div>
        </div>
        <div className="toolpg-faq">
          <div className="toolpg-faq-hd"><p className="toolpg-faq-badge">Knowledge Base</p><h2 className="toolpg-faq-title">Frequently Asked Questions</h2></div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (<details key={i} className="toolpg-faq-item"><summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary><p>{f.a}</p></details>))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
