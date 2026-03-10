import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Privacy Policy – WebPify",
    description: "WebPify Privacy Policy. We don't collect data, store files, or track users. All image processing happens client-side in your browser.",
    alternates: {
        canonical: 'https://webpify.vercel.app/privacy'
    },
    robots: 'index, follow',
    openGraph: {
        title: "Privacy Policy – WebPify",
        description: "WebPify Privacy Policy. We don't collect data, store files, or track users. All image processing happens client-side in your browser.",
        url: "https://webpify.vercel.app/privacy",
    },
};

export default function PrivacyPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Privacy Policy", href: "/privacy" }
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
                                "name": "Privacy Policy"
                            }
                        ]
                    })
                }}
            />

            <PageShell blob1="#bbf7d0" blob2="#ddd6fe">
                <Breadcrumb items={breadcrumbItems} />

                <div className="page-hero">
                    <div className="page-badge">Privacy First</div>
                    <h1 className="page-title">Privacy Policy</h1>
                    <p className="page-subtitle">
                        We don't collect, store, or share your data. Period.
                    </p>
                    <p style={{ fontSize: "0.9rem", opacity: 0.6, marginTop: "0.5rem" }}>Last updated: February 2026</p>
                </div>

                <div className="info-box" style={{ marginBottom: "2rem", borderLeft: "4px solid #22c55e" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🔒</div>
                    <h2 style={{ marginBottom: "0.5rem" }}>Privacy Guarantee</h2>
                    <p>
                        <strong>WebPify does not collect, store, or transmit your files or personal data.</strong> All image compression and conversion happens entirely in your browser using client-side processing. Your files never leave your device.
                    </p>
                </div>

                <h2 className="section-heading">Client-Side Processing</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>When you use WebPify's image tools:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Your images are processed <strong>entirely in your browser</strong></li>
                        <li><strong>No files are uploaded</strong> to our servers</li>
                        <li><strong>No files are stored</strong> anywhere outside your device</li>
                        <li>Processing happens instantly using JavaScript in your browser</li>
                    </ul>
                </div>

                <h2 className="section-heading">Data Collection</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>WebPify does <strong>not collect</strong>:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Your uploaded images or files</li>
                        <li>Personal information</li>
                        <li>Email addresses</li>
                        <li>Login credentials (we don't have accounts)</li>
                        <li>Browsing history</li>
                        <li>IP addresses</li>
                    </ul>
                </div>

                <h2 className="section-heading">Cookies</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p>
                        WebPify does not use cookies for tracking or data collection. We may use minimal technical cookies required for site functionality (session management), but these do not track or identify you.
                    </p>
                </div>

                <h2 className="section-heading">Third-Party Services</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>
                        WebPify is hosted on Vercel. While we don't collect data, Vercel may collect anonymized analytics for platform performance. We do not use:
                    </p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Google Analytics or tracking scripts</li>
                        <li>Social media pixels</li>
                        <li>Advertising networks</li>
                        <li>Data brokers or third-party data sharing</li>
                    </ul>
                </div>

                <h2 className="section-heading">Data Security</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>Since all processing happens in your browser and no files are uploaded:</p>
                    <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                        <li>Your files never leave your device</li>
                        <li>No server-side storage means no risk of data breaches</li>
                        <li>Complete privacy and control over your files</li>
                    </ul>
                </div>

                <h2 className="section-heading">Changes to This Policy</h2>
                <div className="info-box" style={{ marginBottom: "2rem" }}>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                </div>

                <h2 className="section-heading">Contact</h2>
                <div className="info-box" style={{ marginBottom: "2.5rem" }}>
                    <p>
                        For privacy-related questions, please visit our <Link href="/about" style={{ color: "var(--primary)", textDecoration: "underline" }}>About page</Link>.
                    </p>
                </div>

                <h2 className="section-heading">Related Pages</h2>
                <div className="tool-chips">
                    <Link href="/about" className="tool-chip">About Us</Link>
                    <Link href="/terms" className="tool-chip">Terms of Service</Link>
                </div>
            </PageShell>
        </>
    );
}
