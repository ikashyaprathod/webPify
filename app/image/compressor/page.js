import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
    title: "Image Compressor – Compress PNG, JPEG, WebP Online",
    description: "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats.",
    alternates: { canonical: "https://webpify.vercel.app/image/compressor" },
    openGraph: {
        title: "Image Compressor – Compress PNG, JPEG, WebP Online",
        description: "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats.",
        url: "https://webpify.vercel.app/image/compressor",
    },
};

const cards = [
  { href: "/image/compressor/png",  icon: "🖼️", title: "PNG Compressor",  desc: "Compress PNG without quality loss" },
  { href: "/image/compressor/jpeg", icon: "📷", title: "JPEG Compressor", desc: "Compress JPG images online" },
  { href: "/image/compressor/webp", icon: "🔄", title: "WebP Compressor", desc: "Reduce WebP file size" },
];

const ACCENT = "linear-gradient(90deg,#0070f3,#38bdf8)";
const ICON_BG = "rgba(0,112,243,0.08)";

export default function CompressorHubPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/" },
        { label: "Compressor", href: "/image/compressor" }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpify.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Image", "item": "https://webpify.vercel.app/" },
                    { "@type": "ListItem", "position": 3, "name": "Compressor" }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Image Compressor",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Compress images online without visible quality loss. Supports PNG, JPEG, and WebP formats."
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <PageShell>
                <Breadcrumb items={breadcrumbItems} />
                <div className="page-hero">
                    <div className="page-badge">Free · Browser-based · No Upload</div>
                    <h1 className="page-title">Image Compressor</h1>
                    <p className="page-subtitle">
                        Reduce image file size without losing quality. Keep the original format — PNG stays PNG, JPEG stays JPEG.
                    </p>
                </div>

                <div className="hub-grid">
                    {cards.map(card => (
                        <a key={card.href} href={card.href} className="hub-card"
                           style={{ "--hub-accent": ACCENT, "--hub-icon-bg": ICON_BG }}>
                            <div className="hub-card-icon">{card.icon}</div>
                            <div className="hub-card-title">{card.title}</div>
                            <div className="hub-card-desc">{card.desc}</div>
                        </a>
                    ))}
                </div>

                <h2 className="section-heading">Related Tools</h2>
                <div className="tool-chips">
                    <Link href="/image/converter" className="tool-chip">Image Converter</Link>
                    <Link href="/image/resizer" className="tool-chip">Image Resizer</Link>
                    <Link href="/svg-optimizer" className="tool-chip">SVG Optimizer</Link>
                </div>
            </PageShell>
        </>
    );
}
