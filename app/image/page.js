import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
    title: "Image Tools – Compress, Convert & Resize PNG, JPEG, WebP",
    description: "Professional image compression, conversion, and resizing tools. Optimize images for SEO, speed, and Core Web Vitals.",
    alternates: { canonical: "https://webpify.vercel.app/image" },
    openGraph: {
        title: "Image Tools – Compress, Convert & Resize PNG, JPEG, WebP",
        description: "Professional image compression, conversion, and resizing tools. Optimize images for SEO, speed, and Core Web Vitals.",
        url: "https://webpify.vercel.app/image",
    },
};

const cards = [
    {
        href: "/image/compressor",
        icon: "⚡",
        title: "Image Compressor",
        desc: "Compress PNG, JPEG, and WebP images without visible quality loss.",
        accent: "linear-gradient(90deg,#0070f3,#38bdf8)",
        iconBg: "rgba(0,112,243,0.08)",
    },
    {
        href: "/image/converter",
        icon: "🔄",
        title: "Image Converter",
        desc: "Convert images between PNG, JPEG, and WebP formats.",
        accent: "linear-gradient(90deg,#06b6d4,#67e8f9)",
        iconBg: "rgba(6,182,212,0.08)",
    },
    {
        href: "/image/resizer",
        icon: "📐",
        title: "Image Resizer",
        desc: "Resize PNG, JPEG, and WebP images to exact dimensions.",
        accent: "linear-gradient(90deg,#10b981,#34d399)",
        iconBg: "rgba(16,185,129,0.08)",
    },
];

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

            <PageShell blob1="#bfdbfe" blob2="#d1fae5">
                <Breadcrumb items={breadcrumbItems} />

                <div className="page-hero">
                    <div className="page-badge">Free · Browser-based · No Upload</div>
                    <h1 className="page-title">Image Tools</h1>
                    <p className="page-subtitle">
                        Professional tools to compress, convert, and resize images. Optimize for SEO, speed, and Core Web Vitals.
                    </p>
                </div>

                <div className="hub-grid">
                    {cards.map(card => (
                        <a
                            key={card.href}
                            href={card.href}
                            className="hub-card"
                            style={{ "--hub-accent": card.accent, "--hub-icon-bg": card.iconBg }}
                        >
                            <div className="hub-card-icon">{card.icon}</div>
                            <div className="hub-card-title">{card.title}</div>
                            <div className="hub-card-desc">{card.desc}</div>
                        </a>
                    ))}
                </div>

                <div className="info-box" style={{ marginTop: "2rem" }}>
                    <h2>Why Optimize Images?</h2>
                    <div className="info-box-grid">
                        <div>
                            <strong>SEO Optimization</strong>
                            <p>Smaller images improve page speed, a key Google ranking factor.</p>
                        </div>
                        <div>
                            <strong>Website Speed</strong>
                            <p>Faster loading times reduce bounce rates and improve user experience.</p>
                        </div>
                        <div>
                            <strong>Core Web Vitals</strong>
                            <p>Optimized images improve LCP (Largest Contentful Paint) scores.</p>
                        </div>
                        <div>
                            <strong>E-commerce</strong>
                            <p>Fast product images improve conversion rates and sales.</p>
                        </div>
                        <div>
                            <strong>Bandwidth Savings</strong>
                            <p>Smaller file sizes reduce hosting and CDN bandwidth costs.</p>
                        </div>
                        <div>
                            <strong>Mobile Experience</strong>
                            <p>Smaller images load faster on cellular connections.</p>
                        </div>
                    </div>
                </div>

                <h2 className="section-heading">Related Tools</h2>
                <div className="tool-chips">
                    <Link href="/image/compare" className="tool-chip">Compare Compressor vs Converter</Link>
                    <Link href="/svg-optimizer" className="tool-chip">SVG Optimizer</Link>
                    <Link href="/video/compressor" className="tool-chip">Video Compressor</Link>
                    <Link href="/gif/compressor" className="tool-chip">GIF Compressor</Link>
                </div>
            </PageShell>
        </>
    );
}
