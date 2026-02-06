import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Image Tools – Compress & Convert PNG, JPEG, WebP",
    description: "Professional image compression and conversion tools. Optimize images for SEO, speed, and Core Web Vitals.",
};

export default function ImageMasterHub() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/image" }
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
                                        "name": "Image Tools"
                                    }
                                ]
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Image Compression & Conversion Tools",
                                "applicationCategory": "ImageProcessing",
                                "operatingSystem": "Web",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0"
                                },
                                "description": "Professional image compression and conversion tools. Optimize images for SEO, speed, and Core Web Vitals."
                            }
                        ]
                    })
                }}
            />

            <div style={{ minHeight: "100vh", padding: "2rem" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: 700 }}>
                            Image Compression & Conversion Tools
                        </h1>
                        <p style={{ fontSize: "1.25rem", opacity: 0.8, maxWidth: "800px", margin: "0 auto" }}>
                            Professional tools to optimize images for SEO, speed, and Core Web Vitals
                        </p>
                    </div>

                    <div style={{ marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", fontWeight: 600 }}>
                            What are Image Compression & Conversion?
                        </h2>
                        <div style={{ fontSize: "1.05rem", lineHeight: "1.7", opacity: 0.85, marginBottom: "1.5rem" }}>
                            <p style={{ marginBottom: "1rem" }}>
                                <strong>Image compression</strong> reduces file size while maintaining visual quality. It keeps your images in their original format (PNG stays PNG, JPEG stays JPEG) while removing unnecessary data. This improves website speed and SEO performance.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                <strong>Image conversion</strong> changes the file format while optimizing quality and file size. Converting to modern formats like WebP can reduce file sizes by 25-35% compared to PNG and JPEG.
                            </p>
                            <p>
                                <strong>Key difference:</strong> Compression reduces size without changing format. Conversion changes format to achieve better compression and compatibility.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 600, textAlign: "center" }}>
                            Image Compression Tools
                        </h2>
                        <p style={{ textAlign: "center", fontSize: "1.05rem", opacity: 0.8, marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
                            Reduce file size without changing format. Keeps PNG as PNG, JPEG as JPEG.
                        </p>
                        <div className="tools-grid" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
                            <Link href="/image/compressor/png" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">🖼️</div>
                                <h3 className="tool-card-title">PNG Compressor</h3>
                                <p className="tool-card-description">Compress PNG images by 60-90% with lossless compression. Preserves transparency.</p>
                            </Link>

                            <Link href="/image/compressor/jpeg" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">📸</div>
                                <h3 className="tool-card-title">JPEG Compressor</h3>
                                <p className="tool-card-description">Compress JPEG images by 40-90% with professional mozjpeg compression.</p>
                            </Link>

                            <Link href="/image/compressor/webp" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">⚡</div>
                                <h3 className="tool-card-title">WebP Compressor</h3>
                                <p className="tool-card-description">Compress WebP images by 50-80% with Sharp compression. Modern format.</p>
                            </Link>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link href="/image/compressor" style={{ color: "var(--primary)", fontSize: "0.95rem", textDecoration: "underline" }}>
                                View all compression tools →
                            </Link>
                        </div>
                    </div>

                    <div style={{ marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 600, textAlign: "center" }}>
                            Image Conversion Tools
                        </h2>
                        <p style={{ textAlign: "center", fontSize: "1.05rem", opacity: 0.8, marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
                            Convert between PNG, JPEG, and WebP with optimized compression.
                        </p>
                        <div className="tools-grid" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
                            <Link href="/image/converter/webp" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">🔄</div>
                                <h3 className="tool-card-title">Convert to WebP</h3>
                                <p className="tool-card-description">Convert images to WebP format. 25-35% smaller than PNG/JPEG.</p>
                            </Link>

                            <Link href="/image/converter/png" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">🎨</div>
                                <h3 className="tool-card-title">Convert to PNG</h3>
                                <p className="tool-card-description">Convert images to PNG format. Best for graphics and transparency.</p>
                            </Link>

                            <Link href="/image/converter/jpeg" className="tool-card-detailed" style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card-icon">📷</div>
                                <h3 className="tool-card-title">Convert to JPEG</h3>
                                <p className="tool-card-description">Convert images to JPEG format. Universal compatibility, ideal for photos.</p>
                            </Link>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Link href="/image/converter" style={{ color: "var(--primary)", fontSize: "0.95rem", textDecoration: "underline" }}>
                                View all conversion tools →
                            </Link>
                        </div>
                    </div>

                    <div style={{ background: "rgba(0, 112, 243, 0.05)", border: "1px solid rgba(0, 112, 243, 0.1)", borderRadius: "12px", padding: "2.5rem", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", fontWeight: 600 }}>
                            Why Optimize Images?
                        </h2>
                        <div className="tools-grid" style={{ gap: "1.5rem" }}>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>SEO Optimization</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Smaller images improve page speed, a key Google ranking factor.
                                </p>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Website Speed</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Faster loading times reduce bounce rates and improve user experience.
                                </p>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Core Web Vitals</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Optimized images improve LCP (Largest Contentful Paint) scores.
                                </p>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Performance Marketing</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Smaller file sizes reduce bandwidth costs and improve ad performance.
                                </p>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>E-commerce</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Fast product images improve conversion rates and sales.
                                </p>
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Mobile Experience</h3>
                                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", margin: 0 }}>
                                    Smaller images load faster on cellular connections.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link href="/image/compare" style={{ color: "var(--primary)", fontSize: "1rem", textDecoration: "underline" }}>
                            Compare Compressor vs Converter →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
