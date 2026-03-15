import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";

export const metadata = {
  title: "BMP to PNG Converter Online Free",
  description: "Convert BMP images to PNG format online for free. PNG is smaller, widely supported, and preserves transparency. No sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/bmp-to-png" },
  keywords: ["bmp to png", "convert bmp to png", "bmp png converter online", "bitmap to png"],
  openGraph: {
    title: "BMP to PNG Converter Online Free",
    description: "Convert BMP to PNG online. Smaller files with full quality. No sign-up.",
    url: "https://webpifyy.vercel.app/image/convert/bmp-to-png",
  },
  twitter: { card: "summary_large_image", title: "BMP to PNG Converter Online Free", description: "Convert BMP to PNG. No sign-up." },
};

const faqs = [
  { q: "Why convert BMP to PNG?", a: "BMP files are uncompressed and extremely large. Converting to PNG reduces file size by 70–90% while maintaining full lossless quality and transparency support." },
  { q: "Is PNG better than BMP?", a: "Yes. PNG uses lossless compression to achieve much smaller file sizes while preserving identical image quality. PNG also supports transparency which BMP does not." },
  { q: "Will the image quality change?", a: "No. PNG uses lossless compression so there is no quality loss compared to BMP. Every pixel is preserved exactly." },
  { q: "Can I convert multiple BMP files?", a: "Yes. You can upload multiple BMP files and they will all be converted to PNG in sequence." },
];

export default function BmpToPngPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "BMP to PNG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/bmp-to-png#software",
        name: "BMP to PNG Converter",
        url: "https://webpifyy.vercel.app/image/convert/bmp-to-png",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Convert",href:"/image/convert"},{label:"BMP to PNG"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">BMP</span>
          <h1 className="toolpg-title">BMP to PNG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert BMP bitmap images to compressed PNG format. 70–90% smaller files with zero quality loss. Free, no sign-up.</p>
        </div>

        <ImageConverter outputFormat="image/png" outputFormatName="PNG" />

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
