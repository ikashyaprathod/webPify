import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import OgImageResizer from "@/components/OgImageResizer";

export const metadata = {
  title: "OG Image Resizer — Open Graph Image Generator Online",
  description: "Resize images to Open Graph, Twitter Card, LinkedIn, and Facebook sizes. Generate all OG images at once. Download as ZIP. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/og-image-resizer" },
  keywords: ["og image resizer", "open graph image", "twitter card size", "social media image resizer", "og image generator"],
  openGraph: {
    title: "OG Image Resizer — Open Graph Image Generator Online",
    description: "Generate Open Graph, Twitter Card, LinkedIn, and Facebook images. Download as ZIP.",
    url: "https://webpifyy.vercel.app/dev/og-image-resizer",
  },
  twitter: { card: "summary_large_image", title: "OG Image Resizer Online Free", description: "Generate all OG image sizes. Download as ZIP." },
};

const faqs = [
  { q: "What sizes does the OG Image Resizer generate?", a: "It generates: Open Graph (1200×630), Twitter Card (1200×600), LinkedIn (1200×627), and Facebook (1200×630). These are the recommended dimensions for social media sharing." },
  { q: "What image format does it output?", a: "All images are output as JPEG at 92% quality for optimal file size while maintaining visual quality suitable for social media." },
  { q: "How does the image fit into the target dimensions?", a: "The tool uses a cover-fit approach: your image is scaled up or down to fill the target dimensions, centering the content. No white bars or distortion." },
  { q: "What is the recommended input image size?", a: "For best results, use an image that is at least 1200×630 pixels. A 2:1 or wider aspect ratio works well since most OG sizes are landscape-oriented." },
];

export default function OgImageResizerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "OG Image Resizer" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/og-image-resizer#software",
        name: "OG Image Resizer",
        url: "https://webpifyy.vercel.app/dev/og-image-resizer",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Resize images to Open Graph, Twitter Card, LinkedIn, and Facebook sizes. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"OG Image Resizer"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">OG Image <span className="toolpg-title-accent">Resizer</span></h1>
          <p className="toolpg-subtitle">Resize any image to Open Graph, Twitter Card, LinkedIn, and Facebook dimensions. Download all sizes as ZIP — browser-based, free.</p>
        </div>

        <OgImageResizer />

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
