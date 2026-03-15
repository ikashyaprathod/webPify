import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Base64Encoder from "@/components/Base64Encoder";

export const metadata = {
  title: "Image to Base64 Encoder Online Free",
  description: "Encode images to base64 strings or decode base64 back to images. Supports data URL format. Copy base64 string, preview decoded image. Free, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/base64-encoder" },
  keywords: ["image to base64", "base64 encoder", "base64 decoder", "image base64 online", "data url generator"],
  openGraph: {
    title: "Image to Base64 Encoder Online Free",
    description: "Encode images to base64 or decode base64 back to images. Browser-based.",
    url: "https://webpifyy.vercel.app/dev/base64-encoder",
  },
  twitter: { card: "summary_large_image", title: "Image to Base64 Encoder Online Free", description: "Encode/decode images to base64. Free tool." },
};

const faqs = [
  { q: "What is base64 encoding for images?", a: "Base64 encoding converts binary image data into a text string that can be embedded directly in HTML, CSS, or JavaScript as a data URL (data:image/png;base64,...). This eliminates an HTTP request for the image." },
  { q: "When should I use base64 images?", a: "Use base64 for small icons, inline SVGs, or email templates where you cannot link to external files. For larger images, use standard URLs as base64 increases file size by ~33%." },
  { q: "What is the format of a base64 data URL?", a: "A data URL follows the format: data:[mime-type];base64,[base64-string]. For example: data:image/png;base64,iVBORw0KGgo..." },
  { q: "Can I decode any base64 string?", a: "You can decode a base64 string with or without the data: prefix. If you paste just the raw base64 characters, the tool will automatically prepend data:image/png;base64, to preview it." },
];

export default function Base64EncoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Base64 Encoder" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/base64-encoder#software",
        name: "Base64 Image Encoder",
        url: "https://webpifyy.vercel.app/dev/base64-encoder",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Encode images to base64 strings or decode base64 back to images. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"Base64 Encoder"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">Base64 Image <span className="toolpg-title-accent">Encoder</span></h1>
          <p className="toolpg-subtitle">Encode any image to a base64 data URL string, or decode base64 back to a viewable image. Copy, preview, and download — all in your browser.</p>
        </div>

        <Base64Encoder />

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
