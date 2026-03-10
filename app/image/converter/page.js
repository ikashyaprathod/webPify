import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
    title: "Image Converter – Convert Images to PNG, JPEG, WebP",
    description: "Convert images between PNG, JPEG, and WebP formats easily while keeping quality.",
};

const cards = [
  { href: "/image/converter/webp", icon: "🔄", title: "Convert to WebP", desc: "Convert any image to WebP format" },
  { href: "/image/converter/png",  icon: "🖼️", title: "Convert to PNG",  desc: "Convert any image to PNG format" },
  { href: "/image/converter/jpeg", icon: "📷", title: "Convert to JPEG", desc: "Convert any image to JPEG format" },
];

const ACCENT = "linear-gradient(90deg,#06b6d4,#67e8f9)";
const ICON_BG = "rgba(6,182,212,0.08)";

export default function ConverterHubPage() {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Image", href: "/" },
        { label: "Converter", href: "/image/converter" }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://webpify.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Image", "item": "https://webpify.vercel.app/" },
                    { "@type": "ListItem", "position": 3, "name": "Converter" }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Image Converter",
                "applicationCategory": "ImageProcessing",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0" },
                "description": "Convert images between PNG, JPEG, and WebP formats easily while keeping quality."
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
                    <h1 className="page-title">Image Converter</h1>
                    <p className="page-subtitle">
                        Convert images to PNG, JPEG, or WebP format with high quality.
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
                    <Link href="/image/compressor" className="tool-chip">Image Compressor</Link>
                    <Link href="/image/resizer" className="tool-chip">Image Resizer</Link>
                </div>
            </PageShell>
        </>
    );
}
