import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Privacy Policy – WebPify",
    description: "WebPify Privacy Policy. We don't collect data, store files, or track users. All image processing happens client-side in your browser.",
    alternates: {
        canonical: 'https://webpify.vercel.app/privacy'
    },
    robots: 'index, follow'
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

            <div style={{ minHeight: "100vh", padding: "2rem" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "2rem" }}>
                        Privacy Policy
                    </h1>

                    <p style={{ fontSize: "0.95rem", opacity: 0.7, marginBottom: "2rem" }}>
                        Last updated: February 2026
                    </p>

                    <div style={{ fontSize: "1.05rem", lineHeight: "1.7", opacity: 0.9 }}>
                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Summary
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                <strong>WebPify does not collect, store, or transmit your files or personal data.</strong> All image compression and conversion happens entirely in your browser using client-side processing.
                            </p>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Client-Side Processing
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                When you use WebPify's image tools:
                            </p>
                            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    Your images are processed <strong>entirely in your browser</strong>
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>No files are uploaded</strong> to our servers
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    <strong>No files are stored</strong> anywhere outside your device
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    Processing happens instantly using JavaScript in your browser
                                </li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Data Collection
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify does <strong>not collect</strong>:
                            </p>
                            <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Your uploaded images or files</li>
                                <li style={{ marginBottom: "0.5rem" }}>Personal information</li>
                                <li style={{ marginBottom: "0.5rem" }}>Email addresses</li>
                                <li style={{ marginBottom: "0.5rem" }}>Login credentials (we don't have accounts)</li>
                                <li style={{ marginBottom: "0.5rem" }}>Browsing history</li>
                                <li style={{ marginBottom: "0.5rem" }}>IP addresses</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Cookies
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify does not use cookies for tracking or data collection. We may use minimal technical cookies required for site functionality (session management), but these do not track or identify you.
                            </p>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Third-Party Services
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                WebPify is hosted on Vercel. While we don't collect data, Vercel may collect anonymized analytics for platform performance. We do not use:
                            </p>
                            <ul style={{ marginLeft: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>Google Analytics or tracking scripts</li>
                                <li style={{ marginBottom: "0.5rem" }}>Social media pixels</li>
                                <li style={{ marginBottom: "0.5rem" }}>Advertising networks</li>
                                <li style={{ marginBottom: "0.5rem" }}>Data brokers or third-party data sharing</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Data Security
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                Since all processing happens in your browser and no files are uploaded:
                            </p>
                            <ul style={{ marginLeft: "1.5rem" }}>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    Your files never leave your device
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    No server-side storage means no risk of data breaches
                                </li>
                                <li style={{ marginBottom: "0.5rem" }}>
                                    Complete privacy and control over your files
                                </li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Changes to This Policy
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </section>

                        <section style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                                Contact
                            </h2>
                            <p style={{ marginBottom: "1rem" }}>
                                For privacy-related questions, please visit our <Link href="/about" style={{ color: "var(--primary)", textDecoration: "underline" }}>About page</Link>.
                            </p>
                        </section>

                        <div style={{ marginTop: "3rem", padding: "1.5rem", background: "rgba(0, 112, 243, 0.05)", borderRadius: "8px" }}>
                            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                                🔒 Privacy Guarantee
                            </p>
                            <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.8 }}>
                                Your files are processed entirely in your browser. We don't see, store, or transmit your images.
                            </p>
                        </div>

                        <div style={{ marginTop: "2rem", textAlign: "center" }}>
                            <Link href="/" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
