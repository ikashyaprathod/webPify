import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";

export const metadata = {
    title: "About WebPify – Professional Image Optimization Tools",
    description: "Learn about WebPify, our mission to provide free professional image compression and conversion tools for web optimization and SEO.",
    alternates: {
        canonical: 'https://webpify.vercel.app/about'
    }
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

            <div style={{ minHeight: "100vh", padding: "2rem" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "2rem" }}>
                        About WebPify
                    </h1>

                    <div style={{ fontSize: "1.05rem", lineHeight: "1.7", opacity: 0.9 }}>
                        <section style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                What is WebPify?
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify is a professional image compression and conversion platform designed to help users optimize images for web performance and SEO. We provide free, high-quality tools that process images directly in your browser for maximum privacy and speed.
                            </p>
                        </section>

                        <section style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                What Problem Does It Solve?
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                Large image files slow down websites, hurt SEO rankings, fail Core Web Vitals audits, and increase bandwidth costs. Many website owners don't realize how much file size impacts performance.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify solves this by:
                            </p>
                            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Compressing images by 60-90%</strong> without visible quality loss
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Converting images to modern formats</strong> like WebP for better compression
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Processing images client-side</strong> for privacy, security, and speed
                                </li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Who It's For
                            </h2>
                            <ul style={{ marginLeft: "1.5rem" }}>
                                <li style={{ marginBottom: "0.75rem" }}>
                                    <strong>Web developers</strong> optimizing site performance and Core Web Vitals
                                </li>
                                <li style={{ marginBottom: "0.75rem" }}>
                                    <strong>Designers</strong> preparing assets for web delivery
                                </li>
                                <li style={{ marginBottom: "0.75rem" }}>
                                    <strong>Content creators</strong> improving page load times for blogs and media sites
                                </li>
                                <li style={{ marginBottom: "0.75rem" }}>
                                    <strong>SEO specialists</strong> enhancing website speed for better rankings
                                </li>
                                <li style={{ marginBottom: "0.75rem" }}>
                                    <strong>E-commerce managers</strong> optimizing product images for faster checkout
                                </li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                How It Works
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify uses professional compression algorithms to reduce image file sizes while maintaining visual quality:
                            </p>
                            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>PNG compression:</strong> Uses pngquant for lossless compression (60-90% reduction)
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>JPEG compression:</strong> Uses mozjpeg for optimized lossy compression (40-90% reduction)
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>WebP conversion:</strong> Uses Sharp library for modern format conversion (25-35% smaller than PNG/JPEG)
                                </li>
                            </ul>
                            <p style={{ marginBottom: "1rem" }}>
                                All processing happens in your browser. No files are uploaded to servers, ensuring complete privacy and instant results.
                            </p>
                        </section>

                        <section style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Our Technology
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify is built on modern web technologies for maximum performance:
                            </p>
                            <ul style={{ marginLeft: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Client-side processing:</strong> Privacy-friendly, secure, and fast
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>No file uploads:</strong> Everything happens in your browser
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Professional algorithms:</strong> Industry-standard compression tools
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>Supported formats:</strong> PNG, JPEG, and WebP
                                </li>
                            </ul>
                        </section>

                        <TrustBadges />

                        <section style={{ marginTop: "4rem", padding: "2rem", background: "rgba(0, 112, 243, 0.05)", borderRadius: "12px" }}>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Our Commitment
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify is committed to providing free, professional-grade image optimization tools that respect user privacy. We believe fast websites should be accessible to everyone.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                <strong>Free forever.</strong> No ads. No tracking. No file size limits.
                            </p>
                            <div style={{ marginTop: "1.5rem" }}>
                                <Link href="/privacy" style={{ color: "var(--primary)", marginRight: "1.5rem", textDecoration: "underline" }}>
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                    Terms of Service
                                </Link>
                            </div>
                        </section>

                        <section style={{ marginTop: "3rem", textAlign: "center" }}>
                            <Link href="/image" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "var(--primary)", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}>
                                Try Our Image Tools
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
