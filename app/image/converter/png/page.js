import PageShell from "@/components/PageShell";
import ImageConverter from "@/components/ImageConverter";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to PNG Online – Fast & High Quality",
  description: "Convert images to PNG online. Supports JPEG, WebP with professional compression.",
  alternates: { canonical: "https://webpify.vercel.app/image/converter/png" },
  openGraph: {
    title: "Convert Images to PNG Online – Fast & High Quality",
    description: "Convert images to PNG online. Supports JPEG, WebP with professional compression.",
    url: "https://webpify.vercel.app/image/converter/png",
  },
};

export default function PNGConverterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Converter", href: "/image/converter" },
    { label: "PNG", href: "/image/converter/png" }
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
                  { "@type": "ListItem", "position": 4, "name": "PNG" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Image to PNG Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Convert images to PNG online. Supports JPEG, WebP with professional compression."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Convert Images to PNG</h1>
          <p className="page-subtitle">
            Convert images to PNG format with high quality and optimized file size.
          </p>
          <div className="use-tags">
            <span className="use-tag">Lossless Quality</span>
            <span className="use-tag">Transparency Support</span>
            <span className="use-tag">Universal Compatibility</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/converter">← Converter Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/webp">Convert to WebP</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/jpeg">Convert to JPEG</Link>
        </div>

        <ImageConverter
          outputFormat="image/png"
          outputFormatName="PNG"
          title="Convert Image to PNG"
          description="Convert JPEG, WebP, and other images to PNG format. Supports transparency and lossless compression."
        />
      </PageShell>
    </>
  );
}
