import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Developer Tools Online Free — Favicons, OG Images, Base64",
  description: "Free developer tools. Generate favicons, create OG images, encode/decode base64. Client-side, no sign-up required.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev" },
  openGraph: {
    title: "Developer Tools Online Free",
    description: "Favicon generator, OG image resizer, base64 encoder. Free developer tools.",
    url: "https://webpifyy.vercel.app/dev",
  },
  other: {
    'application/ld+json': JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},{"@type":"ListItem","position":2,"name":"Developer Tools"}]})
  },
};

const cards = [
  { href: "/dev/favicon-generator", icon: "⚙️", title: "Favicon Generator", desc: "Generate all favicon sizes from any image. 16×16 through 512×512. Download as ZIP with favicon.ico included.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Generate Favicons" },
  { href: "/dev/og-image-resizer", icon: "🖼️", title: "OG Image Resizer", desc: "Resize images to Open Graph, Twitter Card, LinkedIn, and Facebook sizes. Download all as ZIP.", gradient: "linear-gradient(135deg,#f0fdf4,#dcfce7)", cta: "Resize OG Images" },
  { href: "/dev/base64-encoder", icon: "🔤", title: "Base64 Encoder", desc: "Encode images to base64 strings or decode base64 back to images. Includes HEX and data URL support.", gradient: "linear-gradient(135deg,#fffbeb,#fef3c7)", cta: "Encode / Decode" },
];

export default function DevHub() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev#software",
        name: "Developer Tools",
        url: "https://webpifyy.vercel.app/dev",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Free developer tools. Favicon generator, OG image resizer, base64 encoder.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">DEVELOPER TOOLS</span>
          <h1 className="hubv2-hero-title">Developer <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Tools built for developers — favicons, OG images, base64 encoding, and more. Client-side, free, no sign-up.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">📋</span>View All Tools</a>
        </div>

        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⊞</span><h2 className="hubv2-section-hd-title">Dev Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {cards.map(card => (
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

        <section className="hubv2-section">
          <h2 className="hubv2-stats-hd">Tool Overview</h2>
          <div className="hubv2-stats-grid">
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">🛠️</span><p className="hubv2-stat-label">Tools</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">3</span><span className="hubv2-stat-badge hubv2-stat-badge--blue">Dev Tools</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--blue" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">⚡</span><p className="hubv2-stat-label">Processing</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Client-Side</span><span className="hubv2-stat-badge hubv2-stat-badge--green">Only</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--green" style={{ "--prog": "100%" }}></div></div></div>
            <div className="hubv2-stat-card"><span className="hubv2-stat-ghost">💰</span><p className="hubv2-stat-label">Cost</p><div className="hubv2-stat-row"><span className="hubv2-stat-value">Free</span><span className="hubv2-stat-badge hubv2-stat-badge--purple">Always</span></div><div className="hubv2-stat-progress-track"><div className="hubv2-stat-progress-bar hubv2-stat-progress-bar--purple" style={{ "--prog": "100%" }}></div></div></div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
