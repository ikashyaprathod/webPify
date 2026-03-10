import PageShell from "@/components/PageShell";
import ImageConverter from "@/components/ImageConverter";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to JPEG Online – Fast & High Quality",
  description: "Convert images to JPEG online. Supports PNG, WebP with professional compression.",
};

export default function JPEGConverterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Converter", href: "/image/converter" },
    { label: "JPEG", href: "/image/converter/jpeg" }
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
                  { "@type": "ListItem", "position": 4, "name": "JPEG" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Image to JPEG Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Convert images to JPEG online. Supports PNG, WebP with professional compression."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Convert Images to JPEG</h1>
          <p className="page-subtitle">
            Convert images to JPEG format with high quality and optimized file size.
          </p>
          <div className="use-tags">
            <span className="use-tag">Maximum Compatibility</span>
            <span className="use-tag">Web & Social Media</span>
            <span className="use-tag">Compact File Size</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/converter">← Converter Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/webp">Convert to WebP</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/png">Convert to PNG</Link>
        </div>

        <ImageConverter
          outputFormat="image/jpeg"
          outputFormatName="JPEG"
          title="Convert Image to JPEG"
          description="Convert PNG, WebP, and other images to JPEG format for maximum compatibility across all devices and platforms."
        />
      </PageShell>
    </>
  );
}
