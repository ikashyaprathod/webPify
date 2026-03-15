import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageConverter from "@/components/ImageConverter";

export const metadata = {
  title: "TIFF to JPG Converter Online Free",
  description: "Convert TIFF images to JPEG format online for free. Reduce large TIFF file sizes for sharing and web use. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg" },
  keywords: ["tiff to jpg", "convert tiff to jpeg", "tiff jpg converter online", "tif to jpg"],
  openGraph: {
    title: "TIFF to JPG Converter Online Free",
    description: "Convert TIFF to JPG online. Much smaller files. No sign-up.",
    url: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg",
  },
  twitter: { card: "summary_large_image", title: "TIFF to JPG Converter Online Free", description: "Convert TIFF to JPG. No sign-up." },
};

const faqs = [
  { q: "Why convert TIFF to JPG?", a: "TIFF files are very large and not widely supported on the web or mobile devices. Converting to JPEG reduces file size by 80–95% and ensures universal compatibility." },
  { q: "Will the conversion reduce quality?", a: "Yes, slightly. JPEG uses lossy compression. We use quality 85 with mozjpeg for optimal balance between size and quality. For photographic content, the difference is barely visible." },
  { q: "How much smaller will the JPG be?", a: "Typically 80–95% smaller than the original TIFF. A 20MB TIFF scan often converts to 1–3MB JPG." },
  { q: "Can I convert multi-page TIFF files?", a: "Our tool processes single-frame TIFF files. For multi-page TIFFs, only the first frame will be converted." },
];

export default function TiffToJpgPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Convert", item: "https://webpifyy.vercel.app/image/convert" },
          { "@type": "ListItem", position: 4, name: "TIFF to JPG" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/convert/tiff-to-jpg#software",
        name: "TIFF to JPG Converter",
        url: "https://webpifyy.vercel.app/image/convert/tiff-to-jpg",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Convert",href:"/image/convert"},{label:"TIFF to JPG"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">TIFF</span>
          <h1 className="toolpg-title">TIFF to JPG <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert large TIFF images to compressed JPEG format. Up to 95% smaller — perfect for web and sharing. Free, no sign-up.</p>
        </div>

        <ImageConverter outputFormat="image/jpeg" outputFormatName="JPEG" />

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
