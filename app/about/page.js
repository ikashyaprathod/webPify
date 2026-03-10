import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "About Webpifyy – Professional Image Optimization Tools",
    description: "Learn about Webpifyy, our mission to provide free professional image compression and conversion tools for web optimization and SEO.",
    alternates: {
        canonical: 'https://webpify.vercel.app/about'
    },
    openGraph: {
        title: "About Webpifyy – Professional Image Optimization Tools",
        description: "Learn about Webpifyy, our mission to provide free professional image compression and conversion tools for web optimization and SEO.",
        url: "https://webpify.vercel.app/about",
    },
};

export default function AboutPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" }
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
                                        "name": "About"
                                    }
                                ]
                            },
                            {
                                "@type": "AboutPage",
                                "@id": "https://webpify.vercel.app/about",
                                "mainEntity": {
                                    "@id": "https://webpify.vercel.app/#organization"
                                }
                            }
                        ]
                    })
                }}
            />

            <PageShell blob1="#bfdbfe" blob2="#ddd6fe">
                <Breadcrumb items={breadcrumbItems} />

                <div className="page-hero">
                    <div className="page-badge">Free Tools · Privacy-First · Open Source</div>
                    <h1 className="page-title">About Webpifyy</h1>
                    <p className="page-subtitle">
                        Professional image, video, and GIF tools that run entirely in your browser. No uploads, no tracking, no limits.
                    </p>
                </div>

                <div className="info-box-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
                    <div className="info-box">
                        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>6</div>
                        <strong>Free Tools</strong>
                        <p>Image, video, GIF, SVG — all covered</p>
                    </div>
                    <div className="info-box">
                        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>100%</div>
                        <strong>Browser-based</strong>
                        <p>Processing runs in your device, not our servers</p>
                    </div>
                    <div className="info-box">
                        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>0</div>
                        <strong>Zero Uploads</strong>
                        <p>Your files never leave your device</p>
                    </div>
                </div>

                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <h2>What is Webpifyy?</h2>
                    <p>
                        Webpifyy is a professional image compression and conversion platform designed to help users optimize images and videos for web performance and SEO. We provide free, high-quality tools that process files directly in your browser for maximum privacy and speed.
                    </p>
                </div>

                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <h2>What Problem Does It Solve?</h2>
                    <p style={{ marginBottom: "1rem" }}>
                        Large image files slow down websites, hurt SEO rankings, fail Core Web Vitals audits, and increase bandwidth costs. Many website owners don't realize how much file size impacts performance.
                    </p>
                    <p style={{ marginBottom: "0.75rem" }}>Webpifyy solves this by:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li><strong>Compressing images by 60–90%</strong> without visible quality loss</li>
                        <li><strong>Converting images to modern formats</strong> like WebP for better compression</li>
                        <li><strong>Processing files client-side</strong> for privacy, security, and speed</li>
                    </ul>
                </div>

                <h2 className="section-heading">Who It's For</h2>
                <div className="info-box-grid" style={{ marginBottom: "2.5rem" }}>
                    <div>
                        <strong>Web Developers</strong>
                        <p>Optimizing site performance and Core Web Vitals</p>
                    </div>
                    <div>
                        <strong>Designers</strong>
                        <p>Preparing assets for web delivery</p>
                    </div>
                    <div>
                        <strong>Content Creators</strong>
                        <p>Improving page load times for blogs and media sites</p>
                    </div>
                    <div>
                        <strong>SEO Specialists</strong>
                        <p>Enhancing website speed for better rankings</p>
                    </div>
                    <div>
                        <strong>E-commerce Managers</strong>
                        <p>Optimizing product images for faster checkout</p>
                    </div>
                </div>

                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <h2>How It Works</h2>
                    <p style={{ marginBottom: "1rem" }}>Webpifyy uses professional compression algorithms to reduce file sizes while maintaining visual quality:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li><strong>PNG compression:</strong> Uses pngquant for lossless compression (60–90% reduction)</li>
                        <li><strong>JPEG compression:</strong> Uses mozjpeg for optimized lossy compression (40–90% reduction)</li>
                        <li><strong>WebP conversion:</strong> Uses Sharp library for modern format conversion (25–35% smaller than PNG/JPEG)</li>
                        <li><strong>Video compression:</strong> Uses FFmpeg.wasm for client-side H.264/VP9 encoding</li>
                        <li><strong>GIF tools:</strong> Convert GIFs to MP4/WebM for up to 90% size reduction</li>
                    </ul>
                    <p style={{ marginTop: "1rem" }}>
                        All processing happens in your browser. No files are uploaded to servers, ensuring complete privacy and instant results.
                    </p>
                </div>

                <div className="info-box" style={{ marginBottom: "2.5rem" }}>
                    <h2>Our Commitment</h2>
                    <p style={{ marginBottom: "1rem" }}>
                        Webpifyy is committed to providing free, professional-grade image optimization tools that respect user privacy. We believe fast websites should be accessible to everyone.
                    </p>
                    <p>
                        <strong>Free forever.</strong> No ads. No tracking. No file size limits.
                    </p>
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                    <Link href="/image/compressor" className="hub-card-btn">Try Image Tools</Link>
                    <Link href="/video/compressor" className="hub-card-btn">Try Video Tools</Link>
                </div>

                <h2 className="section-heading">Related Pages</h2>
                <div className="tool-chips">
                    <Link href="/privacy" className="tool-chip">Privacy Policy</Link>
                    <Link href="/terms" className="tool-chip">Terms of Service</Link>
                    <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
                    <Link href="/video/compressor" className="tool-chip">Video Compressor</Link>
                </div>
            </PageShell>
        </>
    );
}
