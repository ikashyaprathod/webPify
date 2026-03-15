import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
  title: "Compress AVIF Images Online Free",
  description: "Compress AVIF images online for free. Reduce AVIF file size using Sharp's native AVIF encoder. No sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/compress/avif" },
  keywords: ["compress avif", "avif compressor online", "reduce avif file size", "avif optimizer"],
  openGraph: {
    title: "Compress AVIF Images Online Free",
    description: "Compress AVIF images online. Reduce file size with quality 60 encoding.",
    url: "https://webpifyy.vercel.app/image/compress/avif",
  },
  twitter: { card: "summary_large_image", title: "AVIF Compressor Online Free", description: "Compress AVIF images. No sign-up." },
};

const faqs = [
  { q: "What is AVIF?", a: "AVIF (AV1 Image File Format) is a modern image format based on the AV1 video codec. It typically achieves 50% smaller files than JPEG at the same visual quality." },
  { q: "How does AVIF compression work?", a: "We use Sharp's built-in AVIF encoder with quality 60 and effort 6. This typically reduces AVIF files by 20–40% while maintaining good visual quality." },
  { q: "Is AVIF widely supported?", a: "AVIF is supported in Chrome, Firefox, Edge, and Safari. For maximum compatibility, consider also keeping a WebP fallback." },
  { q: "Is my image uploaded to a server?", a: "Images are sent to our Edge processing API, compressed server-side using Sharp, and returned immediately. Files are never stored." },
];

export default function AvifCompressorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Compress", item: "https://webpifyy.vercel.app/image/compress" },
          { "@type": "ListItem", position: 4, name: "AVIF" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/compress/avif#software",
        name: "AVIF Image Compressor",
        url: "https://webpifyy.vercel.app/image/compress/avif",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Compress AVIF images online. Sharp native AVIF encoder.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Compress",href:"/image/compress"},{label:"AVIF"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">AVIF</span>
          <h1 className="toolpg-title">Compress AVIF <span className="toolpg-title-accent">Online</span></h1>
          <p className="toolpg-subtitle">Compress AVIF images to smaller file sizes. Next-gen format with the smallest footprint of any modern image format.</p>
        </div>

        <ImageCompressor allowedFormats={["image/avif"]} formatName="AVIF" />

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
