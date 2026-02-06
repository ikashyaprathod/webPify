import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Terms of Service – WebPify",
    description: "WebPify Terms of Service. Free image compression and conversion tools provided as-is.",
    alternates: {
        canonical: 'https://webpify.vercel.app/terms'
    },
    robots: 'index, follow'
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

            <div style={{ minHeight: "100vh", padding: "2rem" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Breadcrumb items={breadcrumbItems} />

                    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", marginTop: "2rem" }}>
                        Terms of Service
                    </h1>

                    <p style={{ fontSize: "0.95rem", opacity: 0.7, marginBottom: "2rem" }}>
                        Last updated: February 2026
                    </p>

                    <div style={{
                        fontSize: "1.05rem", lineHeight: "1.7", opacity: 0.9" }}>
                            <section style = {{ marginBottom: "2.5rem" }
                    } >
              <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                Acceptance of Terms
              </h2>
              <p style={{ marginBottom: "1rem" }}>
                By accessing and using WebPify, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Service Description
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        WebPify provides free image compression and conversion tools that process files client-side in your browser. We offer:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>PNG image compression</li>
                        <li style={{ marginBottom: "0.5rem" }}>JPEG image compression</li>
                        <li style={{ marginBottom: "0.5rem" }}>WebP image conversion</li>
                        <li style={{ marginBottom: "0.5rem" }}>Image format conversion (PNG, JPEG, WebP)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Use of Service
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        WebPify is provided "as-is" for personal and commercial use. You may:
                    </p>
                    <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Use the service for free without registration
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Process unlimited images
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Use compressed/converted images for any purpose
                        </li>
                    </ul>
                    <p style={{ marginBottom: "1rem" }}>
                        You must not:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Attempt to reverse engineer or modify the service
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Use the service for illegal purposes
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Attempt to overload or interfere with the service
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        No Guarantees
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        While we strive for high-quality results:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Compression results may vary based on image complexity
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We do not guarantee specific file size reductions
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Quality perception varies by use case
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Service availability is not guaranteed (though we aim for 99%+ uptime)
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        User Responsibility
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        You are responsible for:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Keeping backups of original images before processing
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Verifying compressed/converted images meet your quality standards
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Ensuring you have rights to process images you upload
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Limitation of Liability
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        WebPify is provided free of charge. To the maximum extent permitted by law:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We are not liable for any data loss
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We are not liable for compression quality issues
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We are not liable for service interruptions
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We are not liable for any indirect or consequential damages
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Intellectual Property
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        You retain all rights to images you process. We do not claim ownership of your files. The WebPify platform and its code remain our intellectual property.
                    </p>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Fair Use Policy
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        While we don't impose hard limits:
                    </p>
                    <ul style={{ marginLeft: "1.5rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Use the service reasonably
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Don't attempt to abuse or overload the service
                        </li>
                        <li style={{ marginBottom: "0.5rem" }}>
                            We reserve the right to implement rate limiting if necessary
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Changes to Terms
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        We may update these Terms of Service at any time. Continued use of the service constitutes acceptance of updated terms.
                    </p>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                        Contact
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                        For questions about these terms, visit our <Link href="/about" style={{ color: "var(--primary)", textDecoration: "underline" }}>About page</Link>.
                    </p>
                </section>

                <div style={{ marginTop: "3rem", padding: "1.5rem", background: "rgba(0, 112, 243, 0.05)", borderRadius: "8px" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.8 }}>
                        <strong>Summary:</strong> WebPify is free, provided as-is, with no warranties. Use responsibly and keep backups of your files.
                    </p>
                </div>

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Link href="/" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div >
      </div >
    </>
  );
}
