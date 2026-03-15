import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
    title: "Image Compressor vs Image Converter – What's the Difference?",
    description: "Compare image compression and image conversion tools. Learn which tool to use for PNG, JPEG, and WebP images.",
    alternates: { canonical: "https://webpifyy.vercel.app/image/compare" },
    keywords: ["image compressor vs converter", "when to compress vs convert images", "image optimization guide"],
    twitter: {
        card: "summary_large_image",
        title: "Image Compressor vs Image Converter – What's the Difference?",
        description: "Not sure whether to compress or convert? Clear comparison to help you choose the right tool.",
    },
    openGraph: {
        title: "Image Compressor vs Image Converter – What's the Difference?",
        description: "Compare image compression and image conversion tools. Learn which tool to use for PNG, JPEG, and WebP images.",
        url: "https://webpifyy.vercel.app/image/compare",
    },
};

export default function ComparePage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/" },
        { label: "Compare", href: "/image/compare" }
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
                                        "item": "https://webpifyy.vercel.app/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Image",
                                        "item": "https://webpifyy.vercel.app/image"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Compare"
                                    }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What's the difference between image compression and image conversion?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Image compression reduces file size while keeping the same format. Image conversion changes the file format (e.g., PNG to WebP)."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Should I compress or convert my images?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Use compression if you want to reduce file size without changing format. Use conversion if you need to change to a different format like WebP."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I compress and convert images at the same time?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, if you use the Image Converter, the output is automatically compressed with professional-grade compression."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            <PageShell blob1="#bfdbfe" blob2="#99f6e4">

                <div className="hubv2-hero">
                    <span className="hubv2-hero-badge">Tool Guide</span>
                    <h1 className="hubv2-hero-title">
                        Compress vs <span className="hubv2-hero-title-accent">Convert</span>
                    </h1>
                    <p className="hubv2-hero-subtitle">
                        Not sure whether to compress or convert? A clear side-by-side comparison to help you choose the right tool for the job.
                    </p>
                    <a href="#compare" className="hubv2-hero-doc-btn">
                        <span className="hubv2-hero-doc-btn-icon">📋</span>
                        View Comparison
                    </a>
                </div>

                <div className="comparison-table-wrapper" id="compare">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Image Compressor</th>
                                <th>Image Converter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reduces file size</td>
                                <td className="check">✅</td>
                                <td className="check">✅</td>
                            </tr>
                            <tr>
                                <td>Changes image format</td>
                                <td className="cross">❌</td>
                                <td className="check">✅</td>
                            </tr>
                            <tr>
                                <td>Keeps original format</td>
                                <td className="check">✅</td>
                                <td className="cross">❌</td>
                            </tr>
                            <tr>
                                <td>Best for SEO &amp; performance</td>
                                <td className="check">✅</td>
                                <td className="check">✅</td>
                            </tr>
                            <tr>
                                <td>Common use cases</td>
                                <td>Speed optimization</td>
                                <td>Format compatibility</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                    <Link href="/image/compressor" className="comparison-cta">
                        Open Image Compressor
                    </Link>
                    <Link href="/image/converter" className="comparison-cta">
                        Open Image Converter
                    </Link>
                </div>

                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>

                    <details className="faq-details">
                        <summary className="faq-question">What's the difference between image compression and image conversion?</summary>
                        <p className="faq-answer">Image compression reduces file size while keeping the same format. Image conversion changes the file format (e.g., PNG to WebP).</p>
                    </details>

                    <details className="faq-details">
                        <summary className="faq-question">Should I compress or convert my images?</summary>
                        <p className="faq-answer">Use compression if you want to reduce file size without changing format. Use conversion if you need to change to a different format like WebP.</p>
                    </details>

                    <details className="faq-details">
                        <summary className="faq-question">Can I compress and convert images at the same time?</summary>
                        <p className="faq-answer">Yes, if you use the Image Converter, the output is automatically compressed with professional-grade compression.</p>
                    </details>
                </div>
            </PageShell>
        </>
    );
}
