import PageShell from "@/components/PageShell";
import ImageCompressor from "@/components/ImageCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress JPEG Images Online – Reduce JPG File Size",
  description: "Compress JPEG images online with professional-grade compression. Fast, free, and high quality.",
};

export default function JPEGCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Compressor", href: "/image/compressor" },
    { label: "JPEG", href: "/image/compressor/jpeg" }
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
                  { "@type": "ListItem", "position": 3, "name": "Compressor", "item": "https://webpify.vercel.app/image/compressor" },
                  { "@type": "ListItem", "position": 4, "name": "JPEG" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "JPEG Image Compressor",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Compress JPEG images online with professional-grade compression. Fast, free, and high quality."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Compress JPEG Images Online</h1>
          <p className="page-subtitle">
            Compress JPEG images to smaller file sizes while keeping visual quality intact.
          </p>
          <div className="use-tags">
            <span className="use-tag">Website Performance</span>
            <span className="use-tag">SEO Optimization</span>
            <span className="use-tag">Faster Loading</span>
            <span className="use-tag">Reduced Storage</span>
          </div>
        </div>

        <div className="tool-nav">
          <Link href="/image/compressor">← Compressor Hub</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/converter/jpeg">Convert JPEG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/compressor/png">Compress PNG</Link>
        </div>

        <ImageCompressor
          allowedFormats={['image/jpeg']}
          formatName="JPEG"
          title="JPEG Image Compressor"
          description="Compress JPEG/JPG images without visible quality loss using professional mozjpeg compression. Reduces file size by 40-90% while maintaining format."
        />
      </PageShell>
    </>
  );
}
