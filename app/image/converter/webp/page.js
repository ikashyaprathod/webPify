import PageShell from "@/components/PageShell";
import ImageConverter from "@/components/ImageConverter";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to WebP Online – Fast & High Quality",
  description: "Convert images to WebP online. Supports PNG, JPEG with professional compression.",
};

export default function WebPConverterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Converter", href: "/image/converter" },
    { label: "WebP", href: "/image/converter/webp" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpify.vercel.app/" },
                  { "@type": "ListItem", "position": 2, "name": "Image", "item": "https://webpify.vercel.app/" },
                  { "@type": "ListItem", "position": 3, "name": "Converter", "item": "https://webpify.vercel.app/image/converter" },
                  { "@type": "ListItem", "position": 4, "name": "WebP" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Image to WebP Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Convert images to WebP online. Supports PNG, JPEG with professional compression."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Convert Images to WebP</h1>
          <p className="page-subtitle">
            Convert images to WebP format with high quality and optimized file size.
          </p>
          <div className="use-tags">
            <span className="use-tag">Web Performance</span>
            <span className="use-tag">Modern Format</span>
            <span className="use-tag">Smaller Files</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/converter">← Converter Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/png">Convert to PNG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/jpeg">Convert to JPEG</Link>
        </div>

        <ImageConverter
          outputFormat="image/webp"
          outputFormatName="WebP"
          title="Convert Image to WebP"
          description="Convert PNG, JPEG, and other images to WebP format for better compression and web performance."
        />
      </PageShell>
    </>
  );
}
