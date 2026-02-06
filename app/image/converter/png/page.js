import ImageConverter from "@/components/ImageConverter";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to PNG Online – Fast & High Quality",
  description: "Convert images to PNG online. Supports JPEG, WebP with professional compression.",
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
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://webpify.vercel.app/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Image",
                    "item": "https://webpify.vercel.app/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Converter",
                    "item": "https://webpify.vercel.app/image/converter"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "PNG"
                  }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Image to PNG Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0"
                },
                "description": "Convert images to PNG online. Supports JPEG, WebP with professional compression."
              }
            ]
          })
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .landing-header {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
          padding: 2rem 1rem 0;
        }
        .landing-intro {
          font-size: 1.125rem;
          opacity: 0.8;
          margin: 1rem 0 1.5rem;
          line-height: 1.6;
        }
        .supported-formats {
          font-size: 0.95rem;
          opacity: 0.7;
          margin-bottom: 1.5rem;
        }
        .supported-formats strong {
          opacity: 1;
          font-weight: 600;
        }
        .tool-navigation {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1rem;
        }
        .tool-navigation a {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.875rem;
          margin: 0 0.5rem;
        }
        .tool-navigation a:hover {
          text-decoration: underline;
        }
      `}} />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="landing-header">
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Convert Images to PNG
        </h1>
        <p className="landing-intro">
          Convert images to PNG format with high quality and optimized file size.
        </p>
        <p className="supported-formats">
          <strong>Supported Input Formats:</strong> PNG, JPEG, WebP
        </p>
      </div>

      <div className="tool-navigation">
        <Link href="/image/converter">← Back to Converter Hub</Link> |
        <Link href="/image/compressor/png"> Compress PNG instead →</Link> |
        <Link href="/image/compare"> Compare Tools</Link>
      </div>

      <ImageConverter
        outputFormat="image/png"
        outputFormatName="PNG"
        title="Convert Image to PNG"
        description="Convert JPEG, WebP, and other images to PNG format. Supports transparency and lossless compression."
      />
    </>
  );
}
