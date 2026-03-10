import PageShell from "@/components/PageShell";
import ImageCompressor from "@/components/ImageCompressor";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Compress PNG Images Online – Reduce File Size Without Quality Loss",
  description: "Compress PNG images online with professional-grade compression. Fast, free, and high quality.",
};

export default function PNGCompressorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Image", href: "/" },
    { label: "Compressor", href: "/image/compressor" },
    { label: "PNG", href: "/image/compressor/png" }
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
                  { "@type": "ListItem", "position": 4, "name": "PNG" }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "PNG Image Compressor",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Compress PNG images online with professional-grade compression. Fast, free, and high quality."
              }
            ]
          })
        }}
      />
      <PageShell>
        <Breadcrumb items={breadcrumbItems} />
        <div className="page-hero">
          <h1 className="page-title">Compress PNG Images Online</h1>
          <p className="page-subtitle">
            Compress PNG images to smaller file sizes while keeping visual quality intact.
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
          <Link href="/image/converter/png">Convert PNG</Link>
          <span className="tool-nav-sep" />
          <Link href="/image/compressor/jpeg">Compress JPEG</Link>
        </div>

        <ImageCompressor
          allowedFormats={['image/png']}
          formatName="PNG"
          title="PNG Image Compressor"
          description="Compress PNG images without quality loss using professional pngquant compression. Reduces file size by 60-90% while preserving transparency and format."
        />
      </PageShell>
    </>
  );
}
