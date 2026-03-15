import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import FaviconGenerator from "@/components/FaviconGenerator";

export const metadata = {
  title: "Favicon Generator Online Free — All Sizes",
  description: "Generate all favicon sizes from any image. 16×16, 32×32, 48×48, apple-touch-icon (180×180), and PWA icons (192×512). Download as ZIP with favicon.ico.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/favicon-generator" },
  keywords: ["favicon generator", "create favicon online", "favicon maker free", "favicon all sizes", "website icon generator"],
  openGraph: {
    title: "Favicon Generator Online Free — All Sizes",
    description: "Generate favicon in all sizes from any image. Download as ZIP.",
    url: "https://webpifyy.vercel.app/dev/favicon-generator",
  },
  twitter: { card: "summary_large_image", title: "Favicon Generator Online Free", description: "Generate all favicon sizes. Download as ZIP." },
};

const faqs = [
  { q: "What favicon sizes does this tool generate?", a: "The tool generates: 16×16, 32×32, 48×48 (standard favicons), 180×180 (Apple touch icon), 192×192 and 512×512 (PWA icons). A favicon.ico is also included." },
  { q: "What image should I use as input?", a: "Use a square image (1:1 ratio) at least 512×512 pixels for best results. PNG with transparency works great for logos." },
  { q: "Is the favicon.ico generated correctly?", a: "The ZIP includes a favicon.ico file which is the 32×32 PNG renamed. For a proper multi-resolution ICO, you may want to use an ICO-specific tool." },
  { q: "How do I add the favicon to my website?", a: "Add these lines to your HTML: <link rel=\"icon\" href=\"/favicon.ico\"> <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\"> and include the PWA icons in your manifest.json." },
];

export default function FaviconGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "Favicon Generator" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/favicon-generator#software",
        name: "Favicon Generator",
        url: "https://webpifyy.vercel.app/dev/favicon-generator",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Generate all favicon sizes from any image. Browser-based.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Developer Tools",href:"/dev"},{label:"Favicon Generator"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">DEV</span>
          <h1 className="toolpg-title">Favicon <span className="toolpg-title-accent">Generator</span></h1>
          <p className="toolpg-subtitle">Generate all favicon sizes from any image. 16px to 512px, Apple touch icon, PWA icons, and favicon.ico — download everything as ZIP.</p>
        </div>

        <FaviconGenerator />

        <div className="toolpg-faq">
          <div className="toolpg-faq-hd">
            <p className="toolpg-faq-badge">Knowledge Base</p>
            <h2 className="toolpg-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="toolpg-faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="toolpg-faq-item">
                <summary>{f.q}<span className="toolpg-faq-toggle">↓</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
