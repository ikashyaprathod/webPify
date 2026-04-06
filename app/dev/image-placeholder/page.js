import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: "Image Placeholder Generator Online Free",
  description: "Generate custom placeholder images online free. Set width, height, background color, text, and format. Download PNG, JPEG, or WebP instantly.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/image-placeholder" },
  openGraph: { title: "Image Placeholder Generator Online Free | webpifyy", description: "Generate custom placeholder images online free. Set width, height, background color, text, and format. Download PNG, JPEG, or WebP instantly.", url: "https://webpifyy.vercel.app/dev/image-placeholder", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Image Placeholder Generator Online Free | webpifyy", description: "Generate custom placeholder images online free. Set width, height, background color, text, and format. Download PNG, JPEG, or WebP instantly.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What are placeholder images used for?", a: "Placeholder images are temporary stand-ins used during the design and development phase before real content is available. Designers use them to fill image slots in mockups and wireframes to show layout and proportions. Developers use them in prototypes, test pages, and component libraries so the UI can be built and reviewed without waiting for final assets." },
  { q: "How does the Canvas API generate placeholder images in the browser?", a: "The HTML Canvas API lets JavaScript draw graphics programmatically. This tool creates an off-screen canvas element at the specified dimensions, fills it with the chosen background color, draws centered text (such as the dimensions label), and then exports the canvas to the selected image format (PNG, JPEG, or WebP) using canvas.toBlob() or toDataURL(). No server is involved — everything happens locally." },
  { q: "What image formats are supported for download?", a: "The generator supports PNG (lossless, great for crisp text and graphics), JPEG (lossy compression, ideal for photographic placeholders where file size matters), and WebP (modern format with superior compression for both lossless and lossy modes). All three formats are supported by current browsers and are safe to use in web projects." },
  { q: "Can I use generated placeholder images in production?", a: "Technically yes, but placeholders are designed for development and prototyping. For production, you should replace them with real, optimized images. If you need a permanent placeholder-style image — for example, a default avatar or empty-state graphic — you can use the generator to create a polished asset and export it in your required format." },
];

export default function ImagePlaceholderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Image Placeholder Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/image-placeholder#software",
        name: "Image Placeholder Generator",
        url: "https://webpifyy.vercel.app/dev/image-placeholder",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "Image Placeholder Generator" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">Image Placeholder <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Create custom placeholder images with any dimensions, colors, and text. Download PNG, JPEG, or WebP instantly.</p>
        </div>

        <ImagePlaceholder />

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
