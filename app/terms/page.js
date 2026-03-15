import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "Terms of Service – Webpifyy",
    description: "Webpifyy Terms of Service. Free image, video, and GIF tools provided as-is.",
    alternates: { canonical: 'https://webpifyy.vercel.app/terms' },
    robots: 'index, follow',
    openGraph: {
        title: "Terms of Service – Webpifyy",
        description: "Webpifyy Terms of Service. Free tools provided as-is.",
        url: "https://webpifyy.vercel.app/terms",
    },
};

export default function TermsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Terms of Service" }
                ]
            })}} />

            <div className="lp-page">
                <Breadcrumb items={[{label:'Home',href:'/'},{label:'Terms'}]} />
                {/* Hero */}
                <div className="lp-hero">
                    <div className="lp-hero-inner">
                        <div className="lp-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Updated Feb 2026
                        </div>
                        <h1 className="lp-hero-title">Terms of <span className="lp-gradient">Service.</span></h1>
                        <p className="lp-hero-sub">Simple, fair terms for a free tool that respects your privacy. No registration, no limits, no surprises.</p>
                    </div>
                </div>

                {/* Body */}
                <div className="lp-body">
                    <aside className="lp-sidebar">
                        <div className="lp-sidebar-nav">
                            <span className="lp-sidebar-label">Documentation</span>
                            <a href="#acceptance" className="lp-sidebar-link lp-sidebar-link--active">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                Acceptance
                            </a>
                            <a href="#service" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                Service
                            </a>
                            <a href="#responsibilities" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                Responsibilities
                            </a>
                            <a href="#liability" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                Liability
                            </a>
                            <a href="#contact" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                Contact
                            </a>
                        </div>
                        <div className="lp-sidebar-cta">
                            <span className="lp-sidebar-cta-label">Need Help?</span>
                            <h4 className="lp-sidebar-cta-title">Questions about terms?</h4>
                            <Link href="/about" className="lp-sidebar-cta-btn">Contact Us</Link>
                        </div>
                    </aside>

                    <main className="lp-main">
                        <section id="acceptance" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </div>
                                <h2 className="lp-section-title">Acceptance of Terms</h2>
                            </div>
                            <div className="lp-glass-card">
                                <p className="lp-p">By accessing and using Webpifyy, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
                                <p className="lp-p"><strong>Webpifyy is free, provided as-is, with no warranties.</strong> Use responsibly and keep backups of your original files. Your files are never uploaded or stored — all processing happens in your browser.</p>
                            </div>
                        </section>

                        <section id="service" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                </div>
                                <h2 className="lp-section-title">Service Description</h2>
                            </div>
                            <div className="lp-card-grid">
                                <div className="lp-soft-card">
                                    <div className="lp-soft-card-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                                    </div>
                                    <h3 className="lp-soft-card-title">What You Can Do</h3>
                                    <ul className="lp-list">
                                        <li>Use all tools free, no registration</li>
                                        <li>Process unlimited images, videos, GIFs</li>
                                        <li>Use results for personal or commercial use</li>
                                        <li>Access from any device, anywhere</li>
                                    </ul>
                                </div>
                                <div className="lp-soft-card">
                                    <div className="lp-soft-card-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                    </div>
                                    <h3 className="lp-soft-card-title">What You Must Not Do</h3>
                                    <ul className="lp-list">
                                        <li>Reverse engineer or modify the service</li>
                                        <li>Use for illegal purposes</li>
                                        <li>Attempt to overload or interfere</li>
                                        <li>Misrepresent your use of outputs</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="responsibilities" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <h2 className="lp-section-title">User Responsibilities</h2>
                            </div>
                            <div className="lp-glass-card">
                                <div className="lp-check-list">
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>Keep backups of original files before processing.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>Verify compressed/converted files meet your quality standards.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>Ensure you have rights to process the images/videos you use.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p>Use the service reasonably without attempting to abuse or overload it.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="liability" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                </div>
                                <h2 className="lp-section-title">Limitation of Liability</h2>
                            </div>
                            <div className="lp-glass-card">
                                <p className="lp-p">Webpifyy is provided free of charge. To the maximum extent permitted by law, we are not liable for any data loss, compression quality issues, service interruptions, or indirect/consequential damages.</p>
                                <p className="lp-p">You retain all rights to files you process. We do not claim ownership of your files. The Webpifyy platform and its code remain our intellectual property. We may update these terms at any time — continued use constitutes acceptance.</p>
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
                                    <h3 className="lp-contact-title">Have questions about these terms?</h3>
                                    <p className="lp-contact-sub">Our team is happy to clarify anything about our terms of service or how we handle your data.</p>
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
                                    <Link href="/privacy" className="lp-contact-btn-outline">Privacy Policy</Link>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
