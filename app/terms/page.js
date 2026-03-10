import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Terms of Service – WebPify",
    description: "WebPify Terms of Service. Free image compression and conversion tools provided as-is.",
    alternates: {
        canonical: 'https://webpify.vercel.app/terms'
    },
    robots: 'index, follow',
    openGraph: {
        title: "Terms of Service – WebPify",
        description: "WebPify Terms of Service. Free image compression and conversion tools provided as-is.",
        url: "https://webpify.vercel.app/terms",
    },
};

export default function TermsPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Terms of Service", href: "/terms" }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
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
                                "name": "Terms of Service"
                            }
                        ]
                    })
                }}
            />

            <PageShell blob1="#fef3c7" blob2="#ddd6fe">
                <Breadcrumb items={breadcrumbItems} />

                <div className="page-hero">
                    <div className="page-badge">Legal</div>
                    <h1 className="page-title">Terms of Service</h1>
                    <p className="page-subtitle">
                        Simple, fair terms for a free tool that respects your privacy.
                    </p>
                    <p style={{ fontSize: "0.9rem", opacity: 0.6, marginTop: "0.5rem" }}>Last updated: February 2026</p>
                </div>

                <div className="info-box" style={{ marginBottom: "2rem", borderLeft: "4px solid #f59e0b" }}>
                    <h2 style={{ marginBottom: "0.5rem" }}>Summary</h2>
                    <p>
                        <strong>WebPify is free, provided as-is, with no warranties. Use responsibly and keep backups of your files.</strong> Your files are never uploaded or stored — all processing happens in your browser.
                    </p>
                </div>

                <h2 className="section-heading">Acceptance of Terms</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p>
                        By accessing and using WebPify, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                    </p>
                </div>

                <h2 className="section-heading">Service Description</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>WebPify provides free image compression and conversion tools that process files client-side in your browser. We offer:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>PNG image compression</li>
                        <li>JPEG image compression</li>
                        <li>WebP image conversion</li>
                        <li>Image format conversion (PNG, JPEG, WebP)</li>
                    </ul>
                </div>

                <h2 className="section-heading">Use of Service</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>WebPify is provided "as-is" for personal and commercial use. You may:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8", marginBottom: "1rem" }}>
                        <li>Use the service for free without registration</li>
                        <li>Process unlimited images</li>
                        <li>Use compressed/converted images for any purpose</li>
                    </ul>
                    <p style={{ marginBottom: "1rem" }}>You must not:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Attempt to reverse engineer or modify the service</li>
                        <li>Use the service for illegal purposes</li>
                        <li>Attempt to overload or interfere with the service</li>
                    </ul>
                </div>

                <h2 className="section-heading">No Guarantees</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>While we strive for high-quality results:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Compression results may vary based on image complexity</li>
                        <li>We do not guarantee specific file size reductions</li>
                        <li>Quality perception varies by use case</li>
                        <li>Service availability is not guaranteed (though we aim for 99%+ uptime)</li>
                    </ul>
                </div>

                <h2 className="section-heading">User Responsibility</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>You are responsible for:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Keeping backups of original images before processing</li>
                        <li>Verifying compressed/converted images meet your quality standards</li>
                        <li>Ensuring you have rights to process images you upload</li>
                    </ul>
                </div>

                <h2 className="section-heading">Limitation of Liability</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>WebPify is provided free of charge. To the maximum extent permitted by law:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>We are not liable for any data loss</li>
                        <li>We are not liable for compression quality issues</li>
                        <li>We are not liable for service interruptions</li>
                        <li>We are not liable for any indirect or consequential damages</li>
                    </ul>
                </div>

                <h2 className="section-heading">Intellectual Property</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p>
                        You retain all rights to images you process. We do not claim ownership of your files. The WebPify platform and its code remain our intellectual property.
                    </p>
                </div>

                <h2 className="section-heading">Fair Use Policy</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>While we don't impose hard limits:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Use the service reasonably</li>
                        <li>Don't attempt to abuse or overload the service</li>
                        <li>We reserve the right to implement rate limiting if necessary</li>
                    </ul>
                </div>

                <h2 className="section-heading">Changes to Terms</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p>
                        We may update these Terms of Service at any time. Continued use of the service constitutes acceptance of updated terms.
                    </p>
                </div>

                <h2 className="section-heading">Contact</h2>
                <div className="info-box" style={{ marginBottom: "2.5rem" }}>
                    <p>
                        For questions about these terms, visit our <Link href="/about" style={{ color: "var(--primary)", textDecoration: "underline" }}>About page</Link>.
                    </p>
                </div>

                <h2 className="section-heading">Related Pages</h2>
                <div className="tool-chips">
                    <Link href="/about" className="tool-chip">About Us</Link>
                    <Link href="/privacy" className="tool-chip">Privacy Policy</Link>
                </div>
            </PageShell>
        </>
    );
}
