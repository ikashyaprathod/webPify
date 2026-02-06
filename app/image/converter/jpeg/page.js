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
                    "name": "JPEG"
                  }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Image to JPEG Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0"
                },
                "description": "Convert images to JPEG online. Supports PNG, WebP with professional compression."
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
          Convert Images to JPEG
        </h1>
        <p className="landing-intro">
          Convert images to JPEG format with high quality and optimized file size.
        </p>
        <p className="supported-formats">
          <strong>Supported Input Formats:</strong> PNG, JPEG, WebP
        </p>
      </div>

      <div className="tool-navigation">
        <Link href="/image/converter">← Back to Converter Hub</Link> |
        <Link href="/image/compressor/jpeg"> Compress JPEG instead →</Link> |
        <Link href="/image/compare"> Compare Tools</Link>
      </div>

      <ImageConverter
        outputFormat="image/jpeg"
        outputFormatName="JPEG"
        title="Convert Image to JPEG"
        description="Convert PNG, WebP, and other images to JPEG format for maximum compatibility across all devices and platforms."
      />
    </>
  );
}
