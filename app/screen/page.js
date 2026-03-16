import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Free Screen Tools Online \u2014 Recorder & Screenshot",
  description: "Free browser-based screen tools \u2014 record your screen, capture screenshots and annotate. No downloads, no uploads, completely private.",
  alternates: { canonical: "https://webpifyy.vercel.app/screen" },
  openGraph: { title: "Free Screen Tools Online \u2014 Recorder & Screenshot | webpifyy", description: "Free browser-based screen tools \u2014 record your screen, capture screenshots and annotate. No downloads, no uploads, completely private.", url: "https://webpifyy.vercel.app/screen", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Screen Tools Online \u2014 Recorder & Screenshot | webpifyy", description: "Free browser-based screen tools \u2014 record your screen, capture screenshots and annotate. No downloads, no uploads, completely private.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const toolCards = [
  { href: "/screen/recorder", icon: "🎥", title: "Screen Recorder", desc: "Record your screen, window, or browser tab with audio. Pause, resume, and download as WebM — no install needed.", gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)", cta: "Start Recording" },
  { href: "/screen/screenshot", icon: "📷", title: "Screenshot Tool", desc: "Paste, drag, or upload screenshots. Add annotations, draw rectangles, insert text, then download as PNG or JPG.", gradient: "linear-gradient(135deg,#e0f2fe,#bae6fd)", cta: "Open Tool" },
];

export default function ScreenHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"name":"Home","item":"https://webpifyy.vercel.app"},
          {"@type":"ListItem","position":2,"name":"Screen Tools","item":"https://webpifyy.vercel.app/screen"},
        ]
      },
      {
        "@type": ["SoftwareApplication","WebApplication"],
        "@id": "https://webpifyy.vercel.app/screen#software",
        "name": "Screen Tools",
        "url": "https://webpifyy.vercel.app/screen",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {"@type":"Offer","price":"0","priceCurrency":"USD","availability":"https://schema.org/InStock"}
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Screen Tools"}]} />
        <div className="hubv2-hero">
          <span className="hubv2-hero-badge">SCREEN TOOLS</span>
          <h1 className="hubv2-hero-title">Screen <span className="hubv2-hero-title-accent">Tools</span></h1>
          <p className="hubv2-hero-subtitle">Record your screen and capture screenshots — all inside your browser, nothing uploaded, completely private.</p>
          <a href="#tools" className="hubv2-hero-doc-btn"><span className="hubv2-hero-doc-btn-icon">🎥</span>View All Tools</a>
        </div>
        <section className="hubv2-section" id="tools">
          <div className="hubv2-section-hd">
            <div className="hubv2-section-hd-left"><span className="hubv2-section-hd-icon">⚡</span><h2 className="hubv2-section-hd-title">All Screen Tools</h2></div>
          </div>
          <div className="hubv2-grid">
            {toolCards.map(card => (
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
      </PageShell>
    </>
  );
}
