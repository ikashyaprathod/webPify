import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JpgToPdf from "@/components/JpgToPdf";

export const metadata = {
  title: "JPG to PDF Converter Online Free — Images to PDF",
  description: "Convert JPG, PNG, and WebP images to a PDF document online. Reorder pages, choose page size. 100% browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/pdf/jpg-to-pdf" },
  keywords: ["jpg to pdf", "image to pdf", "convert jpg to pdf", "png to pdf", "photos to pdf"],
  openGraph: {
    title: "JPG to PDF Converter Online Free — Images to PDF",
    description: "Convert JPG, PNG, WebP images to PDF. Reorder pages freely. No uploads.",
    url: "https://webpifyy.vercel.app/pdf/jpg-to-pdf",
  },
  twitter: { card: "summary_large_image", title: "JPG to PDF Converter Online Free", description: "Convert images to PDF. No uploads, no sign-up." },
};

const faqs = [
  { q: "What image formats can I convert to PDF?", a: "You can convert JPG, PNG, and WebP images. HEIC and other formats may also work depending on your browser's image support." },
  { q: "Can I set the page size?", a: "Yes. Choose from A4 (595×842pt), US Letter (612×792pt), or Fit to image (each page matches the image dimensions)." },
  { q: "Can I reorder images before creating the PDF?", a: "Yes. After uploading, use the up/down buttons to arrange images in any order. Each image becomes one page in the PDF." },
  { q: "Is my data private?", a: "Completely. All conversion happens in your browser using pdf-lib. No images are ever uploaded to any server." },
];

export default function JpgToPdfPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://webpifyy.vercel.app/pdf" },
          { "@type": "ListItem", position: 3, name: "JPG to PDF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/pdf/jpg-to-pdf#software",
        name: "JPG to PDF Converter",
        url: "https://webpifyy.vercel.app/pdf/jpg-to-pdf",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Convert JPG, PNG, WebP images to a PDF document online. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"PDF Tools",href:"/pdf"},{label:"JPG to PDF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">PDF</span>
          <h1 className="toolpg-title">JPG to PDF <span className="toolpg-title-accent">Converter</span></h1>
          <p className="toolpg-subtitle">Convert JPG, PNG, and WebP images to a PDF document. Choose page size, reorder images, and download instantly.</p>
        </div>

        <JpgToPdf />

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
