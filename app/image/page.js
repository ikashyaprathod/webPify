import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
    title: "Image Tools – Compress, Convert & Resize PNG, JPEG, WebP",
    description: "Professional image compression, conversion, and resizing tools. Optimize images for SEO, speed, and Core Web Vitals.",
    alternates: { canonical: "https://webpifyy.vercel.app/image" },
    openGraph: {
        title: "Image Tools – Compress, Convert & Resize PNG, JPEG, WebP",
        description: "Professional image compression, conversion, and resizing tools. Optimize images for SEO, speed, and Core Web Vitals.",
        url: "https://webpifyy.vercel.app/image",
    },
};

const cards = [
    {
        href: "/image/compressor",
        icon: "⚡",
        title: "Image Compressor",
        desc: "Reduce file size by up to 90% without losing visual quality. Perfect for SEO and faster load times.",
        gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
        cta: "Compress now",
    },
    {
        href: "/image/converter",
        icon: "🔄",
        title: "Format Converter",
        desc: "Convert between WebP, PNG, and JPEG instantly. WebP delivers 25–35% smaller files for modern browsers.",
        gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
        cta: "Convert now",
    },
    {
        href: "/image/resizer",
        icon: "📐",
        title: "Smart Resizer",
        desc: "Resize images to exact dimensions with 4 fit modes. Batch resize for social media and web platforms.",
        gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)",
        cta: "Resize now",
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
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpifyy.vercel.app/" },
                                    { "@type": "ListItem", "position": 2, "name": "Image Tools" }
                                ]
                            },
                            {
                                "@type": ["SoftwareApplication", "WebApplication"],
                                "@id": "https://webpifyy.vercel.app/image#software",
                                "name": "Image Compression & Conversion Tools",
                                "url": "https://webpifyy.vercel.app/image",
                                "applicationCategory": "MultimediaApplication",
                                "operatingSystem": "Any",
                                "inLanguage": "en",
                                "isAccessibleForFree": true,
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD",
                                    "availability": "https://schema.org/InStock",
                                    "seller": { "@id": "https://webpifyy.vercel.app/#organization" }
                                },
                                "provider": { "@id": "https://webpifyy.vercel.app/#organization" },
                                "author": { "@id": "https://webpifyy.vercel.app/#organization" },
                                "description": "Professional image compression and conversion tools. Optimize images for SEO, speed, and Core Web Vitals."
                            }
                        ]
                    })
                }}
            />

            <PageShell>

                {/* ── Hero ── */}
                <div className="hubv2-hero">
                    <span className="hubv2-hero-badge">Workspace</span>
                    <h1 className="hubv2-hero-title">
                        Image Optimization <span className="hubv2-hero-title-accent">Hub</span>
                    </h1>
                    <p className="hubv2-hero-subtitle">
                        Professional-grade tools to compress, convert, and resize your images. Elevate web performance with our advanced processing engine.
                    </p>
                    <a href="#tools" className="hubv2-hero-doc-btn">
                        <span className="hubv2-hero-doc-btn-icon">📋</span>
                        View All Tools
                    </a>
                </div>

                {/* ── Core Tools ── */}
                <section className="hubv2-section" id="tools">
                    <div className="hubv2-section-hd">
                        <div className="hubv2-section-hd-left">
                            <span className="hubv2-section-hd-icon">⊞</span>
                            <h2 className="hubv2-section-hd-title">Core Tools</h2>
                        </div>
                        <div className="hubv2-section-hd-actions">
                            <span className="hubv2-section-hd-btn">≡</span>
                            <span className="hubv2-section-hd-btn">⊞</span>
                        </div>
                    </div>
                    <div className="hubv2-grid">
                        {cards.map(card => (
                            <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                                <div className="hubv2-card-header">
                                    <div className="hubv2-card-icon-box">{card.icon}</div>
                                </div>
                                <div className="hubv2-card-body">
                                    <h3 className="hubv2-card-title">{card.title}</h3>
                                    <p className="hubv2-card-desc">{card.desc}</p>
                                    <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Stats ── */}
                <section className="hubv2-section">
                    <h2 className="hubv2-stats-hd">Optimization Statistics</h2>
                    <div className="hubv2-stats-grid">
                        <div className="hubv2-stat-card">
                            <span className="hubv2-stat-ghost">📊</span>
                            <p className="hubv2-stat-label">Max Size Reduction</p>
                            <div className="hubv2-stat-row">
                                <span className="hubv2-stat-value">90%</span>
                                <span className="hubv2-stat-badge hubv2-stat-badge--blue">Best-in-class</span>
                            </div>
                            <div className="hubv2-stat-progress-track">
                                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "90%" }}></div>
                            </div>
                        </div>
                        <div className="hubv2-stat-card">
                            <span className="hubv2-stat-ghost">⚡</span>
                            <p className="hubv2-stat-label">Formats Supported</p>
                            <div className="hubv2-stat-row">
                                <span className="hubv2-stat-value">3</span>
                                <span className="hubv2-stat-badge hubv2-stat-badge--green">PNG · JPEG · WebP</span>
                            </div>
                            <div className="hubv2-stat-progress-track">
                                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div>
                            </div>
                        </div>
                        <div className="hubv2-stat-card">
                            <span className="hubv2-stat-ghost">🚀</span>
                            <p className="hubv2-stat-label">Avg. Compression Rate</p>
                            <div className="hubv2-stat-row">
                                <span className="hubv2-stat-value">74%</span>
                                <span className="hubv2-stat-badge hubv2-stat-badge--purple">Optimal</span>
                            </div>
                            <div className="hubv2-stat-progress-track">
                                <div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--amber" style={{ "--prog": "74%" }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Recent Assets ── */}
                <section className="hubv2-recent">
                    <div className="hubv2-recent-hd">
                        <h2 className="hubv2-recent-hd-title">Recent Assets</h2>
                        <a href="/image/compressor" className="hubv2-recent-view-all">View All Tools →</a>
                    </div>
                    <div className="hubv2-recent-card">
                        <table className="hubv2-recent-table">
                            <thead className="hubv2-recent-thead">
                                <tr>
                                    <th className="hubv2-recent-th">File Name</th>
                                    <th className="hubv2-recent-th">Type</th>
                                    <th className="hubv2-recent-th">Original</th>
                                    <th className="hubv2-recent-th">Optimized</th>
                                    <th className="hubv2-recent-th hubv2-recent-td-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hubv2-recent-tr">
                                    <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🖼️</div><span className="hubv2-recent-filename">hero-banner.jpg</span></div></td>
                                    <td className="hubv2-recent-td">JPG → WebP</td>
                                    <td className="hubv2-recent-td">2.4 MB</td>
                                    <td className="hubv2-recent-td"><span className="hubv2-recent-badge">420 KB (-82%)</span></td>
                                    <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/compressor" className="hubv2-recent-dl">↓</a></td>
                                </tr>
                                <tr className="hubv2-recent-tr">
                                    <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🏞️</div><span className="hubv2-recent-filename">product-shot-01.png</span></div></td>
                                    <td className="hubv2-recent-td">PNG → PNG</td>
                                    <td className="hubv2-recent-td">1.1 MB</td>
                                    <td className="hubv2-recent-td"><span className="hubv2-recent-badge">310 KB (-71%)</span></td>
                                    <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/compressor" className="hubv2-recent-dl">↓</a></td>
                                </tr>
                                <tr className="hubv2-recent-tr">
                                    <td className="hubv2-recent-td"><div className="hubv2-recent-file"><div className="hubv2-recent-thumb">🎨</div><span className="hubv2-recent-filename">logo-design.png</span></div></td>
                                    <td className="hubv2-recent-td">PNG → WebP</td>
                                    <td className="hubv2-recent-td">450 KB</td>
                                    <td className="hubv2-recent-td"><span className="hubv2-recent-badge">95 KB (-79%)</span></td>
                                    <td className="hubv2-recent-td hubv2-recent-td-right"><a href="/image/converter" className="hubv2-recent-dl">↓</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── Related ── */}
            </PageShell>
        </>
    );
}
