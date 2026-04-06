import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
    title: "About webpifyy \u2014 Free Browser-Based Media Tools",
    description: "webpifyy is a free browser-based toolkit for images, video, audio, PDF and developer tools. 100+ tools, no signup, no uploads, 100% private.",
    alternates: { canonical: 'https://webpifyy.vercel.app/about' },
    openGraph: {
        title: "About webpifyy \u2014 Free Browser-Based Media Tools | webpifyy",
        description: "webpifyy is a free browser-based toolkit for images, video, audio, PDF and developer tools. 100+ tools, no signup, no uploads, 100% private.",
        url: "https://webpifyy.vercel.app/about",
        type: "website",
        siteName: "webpifyy",
        images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About webpifyy \u2014 Free Browser-Based Media Tools | webpifyy",
        description: "webpifyy is a free browser-based toolkit for images, video, audio, PDF and developer tools. 100+ tools, no signup, no uploads, 100% private.",
        images: ["https://webpifyy.vercel.app/opengraph-image"],
    },
};

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    { "@type": "BreadcrumbList", "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
                        { "@type": "ListItem", "position": 2, "name": "About" }
                    ]},
                    { "@type": "AboutPage", "@id": "https://webpifyy.vercel.app/about", "mainEntity": { "@id": "https://webpifyy.vercel.app/#organization" }}
                ]
            })}} />

            <div className="lp-page">
                <Breadcrumb items={[{label:'Home',href:'/'},{label:'About'}]} />
                {/* Hero */}
                <div className="lp-hero lp-hero--about">
                    <div className="lp-hero-inner">
                        <div className="lp-badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Free Tools · Privacy-First · Open Source
                        </div>
                        <h1 className="lp-hero-title">About <span className="lp-gradient">Webpifyy.</span></h1>
                        <p className="lp-hero-sub">Professional image, video, and GIF tools that run entirely in your browser. No uploads, no tracking, no limits.</p>
                    </div>
                    {/* Stats row inside hero */}
                    <div className="lp-stats-row">
                        <div className="lp-stat">
                            <span className="lp-stat-num">10+</span>
                            <span className="lp-stat-label">Free Tools</span>
                        </div>
                        <div className="lp-stat-divider"/>
                        <div className="lp-stat">
                            <span className="lp-stat-num">100%</span>
                            <span className="lp-stat-label">Browser-based</span>
                        </div>
                        <div className="lp-stat-divider"/>
                        <div className="lp-stat">
                            <span className="lp-stat-num">0</span>
                            <span className="lp-stat-label">Uploads Ever</span>
                        </div>
                        <div className="lp-stat-divider"/>
                        <div className="lp-stat">
                            <span className="lp-stat-num">Free</span>
                            <span className="lp-stat-label">Forever</span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="lp-body">
                    <aside className="lp-sidebar">
                        <div className="lp-sidebar-nav">
                            <span className="lp-sidebar-label">Sections</span>
                            <a href="#what-is" className="lp-sidebar-link lp-sidebar-link--active">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                What is Webpifyy
                            </a>
                            <a href="#mission" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                Our Mission
                            </a>
                            <a href="#who" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                                Who It's For
                            </a>
                            <a href="#how" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                How It Works
                            </a>
                            <a href="#contact" className="lp-sidebar-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                Contact
                            </a>
                        </div>
                        <div className="lp-sidebar-cta">
                            <span className="lp-sidebar-cta-label">Get Started</span>
                            <h4 className="lp-sidebar-cta-title">Try our tools now</h4>
                            <Link href="/image/compress" className="lp-sidebar-cta-btn">Open Tools</Link>
                        </div>
                    </aside>

                    <main className="lp-main">
                        <section id="what-is" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                </div>
                                <h2 className="lp-section-title">What is Webpifyy?</h2>
                            </div>
                            <div className="lp-glass-card">
                                <p className="lp-p">Webpifyy is a professional image compression and conversion platform designed to help users optimize images, videos, and GIFs for web performance and SEO. We provide free, high-quality tools that process files directly in your browser for maximum privacy and speed.</p>
                                <p className="lp-p">Large image files slow down websites, hurt SEO rankings, fail Core Web Vitals audits, and increase bandwidth costs. Webpifyy solves this by compressing images by <strong>60–90%</strong> without visible quality loss, converting to modern formats like WebP, and processing everything client-side.</p>
                            </div>
                        </section>

                        <section id="mission" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                </div>
                                <h2 className="lp-section-title">Our Mission</h2>
                            </div>
                            <div className="lp-glass-card">
                                <div className="lp-check-list">
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p><strong>Free forever.</strong> No ads. No paywalls. No file size limits.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p><strong>Privacy-first.</strong> Your files never leave your device — zero uploads to any server.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p><strong>Professional quality.</strong> Same algorithms used by major platforms and CDNs.</p>
                                    </div>
                                    <div className="lp-check-item">
                                        <svg className="lp-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <p><strong>Fast websites for everyone.</strong> We believe performance shouldn't be a premium feature.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="who" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                                </div>
                                <h2 className="lp-section-title">Who It's For</h2>
                            </div>
                            <div className="lp-card-grid lp-card-grid--3">
                                {[
                                    { title: "Web Developers", desc: "Optimize site performance and Core Web Vitals scores." },
                                    { title: "Designers", desc: "Prepare and deliver web-ready assets instantly." },
                                    { title: "Content Creators", desc: "Improve page load times for blogs and media sites." },
                                    { title: "SEO Specialists", desc: "Enhance website speed for better search rankings." },
                                    { title: "E-commerce Managers", desc: "Optimize product images for faster checkouts." },
                                    { title: "Everyone", desc: "Anyone who wants fast, private, free file optimization." },
                                ].map(({ title, desc }) => (
                                    <div key={title} className="lp-soft-card lp-soft-card--sm">
                                        <h3 className="lp-soft-card-title">{title}</h3>
                                        <p className="lp-soft-card-desc">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="how" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                                </div>
                                <h2 className="lp-section-title">How It Works</h2>
                            </div>
                            <div className="lp-glass-card">
                                <ul className="lp-tech-list">
                                    <li><strong>PNG compression:</strong> Uses pngquant — lossless compression (60–90% reduction)</li>
                                    <li><strong>JPEG compression:</strong> Uses mozjpeg — optimized lossy compression (40–90% reduction)</li>
                                    <li><strong>WebP conversion:</strong> Uses Sharp — modern format (25–35% smaller than PNG/JPEG)</li>
                                    <li><strong>Video compression:</strong> Uses FFmpeg.wasm — client-side H.264/VP9 encoding</li>
                                    <li><strong>GIF tools:</strong> Converts GIFs to MP4/WebM for up to 90% size reduction</li>
                                    <li><strong>SVG optimizer:</strong> Removes metadata and redundant paths for leaner SVGs</li>
                                </ul>
                                <p className="lp-p" style={{marginTop:"1rem"}}>All processing runs entirely in your browser using WebAssembly and modern browser APIs. No files are uploaded to servers, ensuring complete privacy and instant results.</p>
                            </div>
                        </section>

                        <section id="contact" className="lp-section">
                            <div className="lp-section-head">
                                <div className="lp-section-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </div>
                                <h2 className="lp-section-title">Connect</h2>
                            </div>
                            <div className="lp-contact-card">
                                <div className="lp-contact-left">
                                    <h3 className="lp-contact-title">Built by Kashyap Rathod</h3>
                                    <p className="lp-contact-sub">Open source, community-driven, and built with love. Contributions and feedback are always welcome.</p>
                                    <div className="lp-contact-links">
                                        <div className="lp-contact-link-item">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                                            <span>github.com/ikashyaprathod</span>
                                        </div>
                                        <div className="lp-contact-link-item">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                            <span>linkedin.com/in/kashyaprathod</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lp-contact-actions">
                                    <a href="https://github.com/ikashyaprathod/webPify" target="_blank" rel="noopener noreferrer" className="lp-contact-btn">View on GitHub</a>
                                    <Link href="/image/compress" className="lp-contact-btn-outline">Try Tools</Link>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
