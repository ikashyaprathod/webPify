import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
    title: "Image Compressor vs Image Converter – What's the Difference?",
    description: "Compare image compression and image conversion tools. Learn which tool to use for PNG, JPEG, and WebP images.",
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

            <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ maxWidth: "900px", width: "100%" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 700 }}>
                            Image Compressor vs Image Converter
                        </h1>
                        <p style={{ fontSize: "1.125rem", opacity: 0.8, marginBottom: "0.5rem" }}>
                            Not sure whether to compress or convert?
                        </p>
                        <p style={{ fontSize: "1.125rem", opacity: 0.8 }}>
                            Here's a clear breakdown to help you choose the right tool.
                        </p>
                    </div>

                    <div className="comparison-table-wrapper">
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
                                    <td>Best for SEO & performance</td>
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

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
                        <Link href="/image/compressor" className="comparison-cta">
                            Open Image Compressor
                        </Link>
                        <Link href="/image/converter" className="comparison-cta">
                            Open Image Converter
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", textAlign: "left" }}>
                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", fontWeight: 600 }}>
                            Frequently Asked Questions
                        </h2>

                        <div className="faq-item">
                            <h3>What's the difference between image compression and image conversion?</h3>
                            <p>Image compression reduces file size while keeping the same format. Image conversion changes the file format (e.g., PNG to WebP).</p>
                        </div>

                        <div className="faq-item">
                            <h3>Should I compress or convert my images?</h3>
                            <p>Use compression if you want to reduce file size without changing format. Use conversion if you need to change to a different format like WebP.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can I compress and convert images at the same time?</h3>
                            <p>Yes, if you use the Image Converter, the output is automatically compressed with professional-grade compression.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
