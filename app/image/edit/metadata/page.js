import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageMetadata from "@/components/ImageMetadata";

export const metadata = {
  title: "Image Metadata Viewer — View EXIF Data Online Free",
  description: "View image metadata and EXIF data online. Camera model, GPS location, ISO, focal length, and more. 100% browser-based, no uploads.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/metadata" },
  keywords: ["image metadata viewer", "exif data viewer", "view photo metadata online", "exif reader", "image info viewer"],
  openGraph: {
    title: "Image Metadata Viewer — View EXIF Data Online Free",
    description: "View EXIF and metadata from images. Camera, GPS, settings. Browser-based.",
    url: "https://webpifyy.vercel.app/image/edit/metadata",
  },
  twitter: { card: "summary_large_image", title: "Image Metadata Viewer Online", description: "View EXIF data from photos. Camera, GPS, settings. No uploads." },
};

const faqs = [
  { q: "What is EXIF data?", a: "EXIF (Exchangeable Image File Format) data is metadata embedded in photos by cameras and smartphones. It includes camera model, GPS location, date taken, ISO, aperture, and more." },
  { q: "Which image formats contain EXIF data?", a: "JPEG and TIFF images typically contain EXIF data. PNG and WebP images usually do not contain EXIF data." },
  { q: "Can I see GPS location from photos?", a: "Yes, if the photo was taken with GPS enabled on your camera or phone, the viewer will show latitude and longitude coordinates." },
  { q: "Is my image uploaded anywhere?", a: "No. All metadata reading happens in your browser using the exifr library. Your images never leave your device." },
];

export default function MetadataPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Metadata" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/metadata#software",
        name: "Image Metadata Viewer",
        url: "https://webpifyy.vercel.app/image/edit/metadata",
        applicationCategory: "DesignApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "View image metadata and EXIF data. Browser-based, no uploads.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Edit",href:"/image/edit"},{label:"Metadata"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">METADATA</span>
          <h1 className="toolpg-title">Image Metadata <span className="toolpg-title-accent">Viewer</span></h1>
          <p className="toolpg-subtitle">View EXIF metadata from any image. Camera model, GPS coordinates, ISO, focal length, and more. 100% browser-based.</p>
        </div>

        <ImageMetadata />

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
