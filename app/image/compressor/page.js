import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Image Compressor – Compress PNG, JPEG, WebP Online",
    description: "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats.",
};

export default function CompressorHubPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/" },
        { label: "Compressor", href: "/image/compressor" }
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
                                        "name": "Compressor"
                                    }
                                ]
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Image Compressor",
                                "applicationCategory": "ImageProcessing",
                                "operatingSystem": "Web",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0"
                                },
                                "description": "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats."
                            }
                        ]
                    })
                }}
            />

            <style dangerouslySetInnerHTML={{
                __html: `
        .compressor-card {
          padding: 2rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }
        .compressor-card:hover {
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
                        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>Image Compressor</h1>
                        <p style={{ fontSize: "1.125rem", marginBottom: "3rem", opacity: 0.8 }}>
                            Reduce image file size without losing quality. Keep the original format — PNG stays PNG, JPEG stays JPEG.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                            <a href="/image/compressor/png" className="compressor-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖼️</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>PNG Compressor</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress PNG without quality loss</p>
                            </a>

                            <a href="/image/compressor/jpeg" className="compressor-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>JPEG Compressor</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress JPG images online</p>
                            </a>

                            <a href="/image/compressor/webp" className="compressor-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔄</div>
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>WebP Compressor</h2>
                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Reduce WebP file size</p>
                            </a>
                        </div>

                        <div className="hub-link">
                            Need to change format? <a href="/image/converter">Try Image Converter</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
