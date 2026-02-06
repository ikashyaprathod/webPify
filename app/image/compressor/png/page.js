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
                    "name": "Compressor",
                    "item": "https://webpify.vercel.app/image/compressor"
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
                "name": "PNG Image Compressor",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0"
                },
                "description": "Compress PNG images online with professional-grade compression. Fast, free, and high quality."
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
          margin: 1rem 0 2rem;
          line-height: 1.6;
        }
        .use-cases {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          max-width: 700px;
          margin: 2rem auto;
          text-align: left;
        }
        .use-case {
          font-size: 0.9rem;
          opacity: 0.8;
          padding-left: 1.5rem;
          position: relative;
        }
        .use-case::before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          font-weight: bold;
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
          Compress PNG Images Online
        </h1>
        <p className="landing-intro">
          Compress PNG images to smaller file sizes while keeping visual quality intact.
        </p>

        <div className="use-cases">
          <div className="use-case">Website performance</div>
          <div className="use-case">SEO optimization</div>
          <div className="use-case">Faster loading</div>
          <div className="use-case">Reduced storage</div>
        </div>
      </div>

      <div className="tool-navigation">
        <Link href="/image/compressor">← Back to Compressor Hub</Link> |
        <Link href="/image/converter/png"> Convert to PNG instead →</Link> |
        <Link href="/image/compare"> Compare Tools</Link>
      </div>

      <ImageCompressor
        allowedFormats={['image/png']}
        formatName="PNG"
        title="PNG Image Compressor"
        description="Compress PNG images without quality loss using professional pngquant compression. Reduces file size by 60-90% while preserving transparency and format."
      />
    </>
  );
}
