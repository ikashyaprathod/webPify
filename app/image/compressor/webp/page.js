import PageShell from "@/components/PageShell";
import ImageCompressor from "@/components/ImageCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress WebP Images Online – Reduce WebP File Size",
  description: "Compress WebP images online with professional-grade compression. Fast, free, and high quality.",
};

export default function WebPCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Compressor", href: "/image/compressor" },
    { label: "WebP", href: "/image/compressor/webp" }
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
                  { "@type": "ListItem", "position": 4, "name": "WebP" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "WebP Image Compressor",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Compress WebP images online with professional-grade compression. Fast, free, and high quality."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Compress WebP Images Online</h1>
          <p className="page-subtitle">
            Compress WebP images to smaller file sizes while keeping visual quality intact.
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
          <Link href="/image/converter/webp">Convert to WebP</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/compressor/jpeg">Compress JPEG</Link>
        </div>

        <ImageCompressor
          allowedFormats={['image/webp']}
          formatName="WebP"
          title="WebP Image Compressor"
          description="Compress WebP images without quality loss using professional Sharp compression. Reduces file size by 50-80% while preserving transparency and format."
        />
      </PageShell>
    </>
  );
}
