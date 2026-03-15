import Link from "next/link";

export const metadata = {
    title: "Privacy Policy – Webpifyy",
    description: "Webpifyy Privacy Policy. We don't collect data, store files, or track users. All processing happens client-side in your browser.",
    alternates: { canonical: 'https://webpifyy.vercel.app/privacy' },
    robots: 'index, follow',
    openGraph: {
        title: "Privacy Policy – Webpifyy",
        description: "Webpifyy Privacy Policy. We don't collect data, store files, or track users.",
        url: "https://webpifyy.vercel.app/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Privacy Policy" }
                ]
            })}} />

            <div className="lp-page">
                {/* Hero */}
                <div className="lp-hero">
                    <div className="lp-hero-inner">
                        <div className="lp-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Updated Feb 2026
                        </div>
                        <h1 className="lp-hero-title">Legal &amp; <span className="lp-gradient">Privacy.</span></h1>
                        <p className="lp-hero-sub">We don't collect, store, or share your data. All processing happens entirely in your browser — your files never leave your device.</p>
                    </div>
                </div>

                {/* Body */}
                <div className="lp-body">
                    {/* Sidebar */}
                    <aside className="lp-sidebar">
                        <div className="lp-sidebar-nav">
                            <span className="lp-sidebar-label">Documentation</span>
                            <a href="#introduction" className="lp-sidebar-link lp-sidebar-link--active">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                Introduction
                            </a>
                            <a href="#data-collection" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                                Data Collection
                            </a>
                            <a href="#responsibilities" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                User Rights
                            </a>
                            <a href="#contact" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                Contact
                            </a>
                        </div>
                        <div className="lp-sidebar-cta">
                            <span className="lp-sidebar-cta-label">Need Help?</span>
                            <h4 className="lp-sidebar-cta-title">Questions about your data?</h4>
                            <Link href="/about" className="lp-sidebar-cta-btn">Learn More</Link>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="lp-main">
                        <section id="introduction" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </div>
                                <h2 className="lp-section-title">Introduction</h2>
                            </div>
                            <div className="lp-glass-card">
                                <p className="lp-p">Welcome to Webpifyy. This Privacy Policy describes how your information is handled when you use our platform. Our goal is to provide world-class tools while ensuring your data remains completely private.</p>
                                <p className="lp-p"><strong>Webpifyy does not collect, store, or transmit your files or personal data.</strong> All image, video, and GIF processing happens entirely in your browser using client-side technology. Your files never leave your device.</p>
                            </div>
                        </section>

                        <section id="data-collection" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                                </div>
                                <h2 className="lp-section-title">Data Collection</h2>
                            </div>
                            <div className="lp-card-grid">
                                <div className="lp-soft-card">
                                    <div className="lp-soft-card-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    </div>
                                    <h3 className="lp-soft-card-title">We Do NOT Collect</h3>
                                    <ul className="lp-list">
                                        <li>Your uploaded images or files</li>
                                        <li>Personal information or email</li>
                                        <li>IP addresses or device data</li>
                                        <li>Browsing history or behavior</li>
                                    </ul>
                                </div>
                                <div className="lp-soft-card">
                                    <div className="lp-soft-card-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                    </div>
                                    <h3 className="lp-soft-card-title">How It Works</h3>
                                    <ul className="lp-list">
                                        <li>All processing runs in your browser</li>
                                        <li>No server uploads, ever</li>
                                        <li>No cookies for tracking</li>
                                        <li>Hosted on Vercel (anonymized analytics only)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="responsibilities" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <h2 className="lp-section-title">Your Rights &amp; Security</h2>
                            </div>
                            <div className="lp-glass-card">
                                <div className="lp-check-list">
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>Your files are processed locally — zero risk of data breach from our side.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>No accounts, no login — no personal data exists to be compromised.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>We do not use Google Analytics, social media pixels, or advertising networks.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>This policy may be updated — any changes will be posted on this page.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="contact" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </div>
                                <h2 className="lp-section-title">Contact</h2>
                            </div>
                            <div className="lp-contact-card">
                                <div className="lp-contact-left">
                                    <h3 className="lp-contact-title">Have privacy questions?</h3>
                                    <p className="lp-contact-sub">Reach out via GitHub or our About page — we're happy to help with any data or privacy concerns.</p>
                                    <div className="lp-contact-links">
                                        <div className="lp-contact-link-item">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                            <span>legal@webpifyy.com</span>
                                        </div>
                                        <div className="lp-contact-link-item">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                                            <span>github.com/ikashyaprathod/webPify</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lp-contact-actions">
                                    <Link href="/about" className="lp-contact-btn">Visit About Page</Link>
                                    <Link href="/terms" className="lp-contact-btn-outline">Terms of Service</Link>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
