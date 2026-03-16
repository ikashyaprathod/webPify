import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
    title: "Free Image Tools Online \u2014 Compress Convert Resize",
    description: "Free online image tools \u2014 compress, convert, resize, crop, watermark, remove background and more. Browser-based, no uploads, works on any device.",
    alternates: { canonical: "https://webpifyy.vercel.app/image" },
    openGraph: {
        title: "Free Image Tools Online \u2014 Compress Convert Resize | webpifyy",
        description: "Free online image tools \u2014 compress, convert, resize, crop, watermark, remove background and more. Browser-based, no uploads, works on any device.",
        url: "https://webpifyy.vercel.app/image",
        type: "website",
        siteName: "webpifyy",
        images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Image Tools Online \u2014 Compress Convert Resize | webpifyy",
        description: "Free online image tools \u2014 compress, convert, resize, crop, watermark, remove background and more. Browser-based, no uploads, works on any device.",
        images: ["https://webpifyy.vercel.app/opengraph-image"],
    },
};

const compressCards = [
    { href:'/image/compress/png', icon:'🖼️', title:'PNG Compressor', desc:'Lossless PNG compression. Reduce file size by up to 90% with pngquant.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Compress PNG' },
    { href:'/image/compress/jpeg', icon:'📸', title:'JPEG Compressor', desc:'Lossy JPEG compression with mozjpeg. Optimal quality at minimal size.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Compress JPEG' },
    { href:'/image/compress/webp', icon:'⚡', title:'WebP Compressor', desc:'Compress WebP images further. Smaller than PNG or JPEG.', gradient:'linear-gradient(135deg,#faf5ff,#f3e8ff)', cta:'Compress WebP' },
];

const convertCards = [
    { href:'/image/convert/to-webp', icon:'🔄', title:'Convert to WebP', desc:'Convert PNG/JPEG to WebP. 25–35% smaller than PNG or JPEG.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Convert to WebP' },
    { href:'/image/convert/to-png', icon:'🎨', title:'Convert to PNG', desc:'Convert any image to PNG format with lossless quality.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Convert to PNG' },
    { href:'/image/convert/to-jpeg', icon:'📷', title:'Convert to JPEG', desc:'Convert images to JPEG for maximum compatibility.', gradient:'linear-gradient(135deg,#fffbeb,#fef3c7)', cta:'Convert to JPEG' },
    { href:'/image/convert/heic-to-jpg', icon:'📱', title:'HEIC to JPG', desc:'Convert iPhone HEIC photos to JPG. Batch supported.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Convert HEIC' },
    { href:'/image/convert/image-to-pdf', icon:'📄', title:'Image to PDF', desc:'Combine multiple images into a single PDF document.', gradient:'linear-gradient(135deg,#fefce8,#fef9c3)', cta:'Create PDF' },
];

const resizeCards = [
    { href:'/image/resize/png', icon:'🖼️', title:'Resize PNG', desc:'Resize PNG images to exact dimensions with 4 fit modes.', gradient:'linear-gradient(135deg,#e0f2fe,#bae6fd)', cta:'Resize PNG' },
    { href:'/image/resize/jpeg', icon:'📸', title:'Resize JPEG', desc:'Resize JPEG images. Instagram, web, and social media sizes.', gradient:'linear-gradient(135deg,#fffbeb,#fef3c7)', cta:'Resize JPEG' },
    { href:'/image/resize/webp', icon:'⚡', title:'Resize WebP', desc:'Resize WebP images while preserving the modern format.', gradient:'linear-gradient(135deg,#faf5ff,#f3e8ff)', cta:'Resize WebP' },
];

const editCards = [
    { href:'/image/edit/crop', icon:'✂️', title:'Crop Image', desc:'Draw a selection and crop any image. Download as PNG instantly.', gradient:'linear-gradient(135deg,#fdf4ff,#fae8ff)', cta:'Crop now' },
    { href:'/image/edit/rotate', icon:'🔃', title:'Rotate & Flip', desc:'Rotate 90°, 180°, or flip horizontally/vertically.', gradient:'linear-gradient(135deg,#f0f9ff,#e0f2fe)', cta:'Rotate now' },
    { href:'/image/edit/watermark', icon:'💧', title:'Add Watermark', desc:'Stamp text watermark with full control over position and opacity.', gradient:'linear-gradient(135deg,#fff1f2,#ffe4e6)', cta:'Add watermark' },
    { href:'/image/edit/remove-background', icon:'✨', title:'Remove Background', desc:'AI-powered background removal. Transparent PNG in seconds.', gradient:'linear-gradient(135deg,#faf5ff,#f3e8ff)', cta:'Remove BG' },
    { href:'/image/edit/compare', icon:'⚖️', title:'Compare Images', desc:'Side-by-side image comparison with a draggable slider.', gradient:'linear-gradient(135deg,#f0fdf4,#dcfce7)', cta:'Compare now' },
];

export default function ImageMasterHub() {
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
                                "description": "Free online image tools \u2014 compress, convert, resize, crop, watermark, remove background and more. Browser-based, no uploads, works on any device."
                            }
                        ]
                    })
                }}
            />

            <PageShell>
                <Breadcrumb items={[{label:'Home',href:'/'},{label:'Image Tools'}]} />

                {/* ── Hero ── */}
                <div className="hubv2-hero">
                    <span className="hubv2-hero-badge">IMAGE TOOLS</span>
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

                {/* ── Compress Section ── */}
                <section className="hubv2-section" id="compress">
                    <div className="hubv2-section-hd">
                        <div className="hubv2-section-hd-left">
                            <span className="hubv2-section-hd-icon">⚡</span>
                            <h2 className="hubv2-section-hd-title">Compress Images</h2>
                        </div>
                        <a href="/image/compress" className="hubv2-section-view-all">View all →</a>
                    </div>
                    <div className="hubv2-grid">
                        {compressCards.map(card => (
                            <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                                <div className="hubv2-card-body">
                                    <h3 className="hubv2-card-title">{card.title}</h3>
                                    <p className="hubv2-card-desc">{card.desc}</p>
                                    <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Convert Section ── */}
                <section className="hubv2-section" id="convert">
                    <div className="hubv2-section-hd">
                        <div className="hubv2-section-hd-left">
                            <span className="hubv2-section-hd-icon">🔄</span>
                            <h2 className="hubv2-section-hd-title">Convert Images</h2>
                        </div>
                        <a href="/image/convert" className="hubv2-section-view-all">View all →</a>
                    </div>
                    <div className="hubv2-grid">
                        {convertCards.map(card => (
                            <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                                <div className="hubv2-card-body">
                                    <h3 className="hubv2-card-title">{card.title}</h3>
                                    <p className="hubv2-card-desc">{card.desc}</p>
                                    <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Resize Section ── */}
                <section className="hubv2-section" id="resize">
                    <div className="hubv2-section-hd">
                        <div className="hubv2-section-hd-left">
                            <span className="hubv2-section-hd-icon">📐</span>
                            <h2 className="hubv2-section-hd-title">Resize Images</h2>
                        </div>
                        <a href="/image/resize" className="hubv2-section-view-all">View all →</a>
                    </div>
                    <div className="hubv2-grid">
                        {resizeCards.map(card => (
                            <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
                                <div className="hubv2-card-body">
                                    <h3 className="hubv2-card-title">{card.title}</h3>
                                    <p className="hubv2-card-desc">{card.desc}</p>
                                    <a href={card.href} className="hubv2-card-cta">{card.cta} →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Edit Section ── */}
                <section className="hubv2-section" id="edit">
                    <div className="hubv2-section-hd">
                        <div className="hubv2-section-hd-left">
                            <span className="hubv2-section-hd-icon">✏️</span>
                            <h2 className="hubv2-section-hd-title">Edit Images</h2>
                        </div>
                        <a href="/image/edit" className="hubv2-section-view-all">View all →</a>
                    </div>
                    <div className="hubv2-grid">
                        {editCards.map(card => (
                            <div key={card.href} className="hubv2-card" style={{ "--card-gradient": card.gradient }}>
                                <div className="hubv2-card-header"><div className="hubv2-card-icon-box">{card.icon}</div></div>
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
                            <span className="hubv2-stat-ghost">🛠️</span>
                            <p className="hubv2-stat-label">Total Tools</p>
                            <div className="hubv2-stat-row">
                                <span className="hubv2-stat-value">10</span>
                                <span className="hubv2-stat-badge hubv2-stat-badge--green">All free</span>
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

                {/* ── Related ── */}
            </PageShell>
        </>
    );
}
