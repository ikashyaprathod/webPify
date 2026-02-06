import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Image Converter – Convert Images to PNG, JPEG, WebP",
    description: "Convert images between PNG, JPEG, and WebP formats easily while keeping quality.",
};

export default function ConverterHubPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/" },
        { label: "Converter", href: "/image/converter" }
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
                                        "name": "Converter"
                                    }
                                ]
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Image Converter",
                                "applicationCategory": "ImageProcessing",
                                "operatingSystem": "Web",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0"
                                },
                                "description": "Convert images between PNG, JPEG, and WebP formats easily while keeping quality."
                            }
                        ]
                    })
                }}
            />

            <style dangerouslySetInnerHTML={{
                __html: `
        .converter-card {
          padding: 2rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }
        .converter-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .hub-link {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.875rem;
          opacity: 0.7;
        }
        .hub-link a {
          color: var(--primary);
          text-decoration: underline;
        }
      `}} />

            <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ maxWidth: "800px", width: "100%" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>Image Converter</h1>
                        <p style={{ fontSize: "1.125rem", marginBottom: "3rem", opacity: 0.8 }}>
                            Convert images to PNG, JPEG, or WebP format with high quality.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                            <a href="/image/converter/webp" className="converter-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔄</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Convert to WebP</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert any image to WebP format</p>
                            </a>

                            <a href="/image/converter/png" className="converter-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖼️</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Convert to PNG</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert any image to PNG format</p>
                            </a>

                            <a href="/image/converter/jpeg" className="converter-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>Convert to JPEG</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Convert any image to JPEG format</p>
                            </a>
                        </div>

                        <div className="hub-link">
                            Need to compress without changing format? <a href="/image/compressor">Try Image Compressor</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
