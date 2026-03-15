import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ImageColorPicker from "@/components/ImageColorPicker";

export const metadata = {
  title: "Image Color Picker — Extract Colors from Images Online",
  description: "Pick colors from any image online. Get HEX, RGB, and HSL values instantly. Click any pixel to extract its exact color. Free, no sign-up.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/color-picker" },
  keywords: ["image color picker", "pick color from image", "color extractor online", "eyedropper tool", "get color from image"],
  openGraph: {
    title: "Image Color Picker — Extract Colors from Images Online",
    description: "Pick colors from any image. Get HEX, RGB, and HSL instantly.",
    url: "https://webpifyy.vercel.app/image/edit/color-picker",
  },
  twitter: { card: "summary_large_image", title: "Image Color Picker Online", description: "Extract colors from images. HEX, RGB, HSL. No sign-up." },
};

const faqs = [
  { q: "How do I pick a color from an image?", a: "Upload your image, then click anywhere on it. The exact color at that pixel is shown as HEX, RGB, and HSL values. Click Copy HEX to copy to clipboard." },
  { q: "What color formats does the picker show?", a: "The picker shows three formats: HEX (#rrggbb), RGB (rgb(r, g, b)), and HSL (hsl(h, s%, l%))." },
  { q: "How many colors can I save?", a: "The last 8 picked colors are shown in the history palette. Click any saved color to reselect it." },
  { q: "Is my image uploaded anywhere?", a: "No. All color picking happens in your browser using the HTML5 canvas API. Your images never leave your device." },
];

export default function ColorPickerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://webpifyy.vercel.app/image" },
          { "@type": "ListItem", position: 3, name: "Edit", item: "https://webpifyy.vercel.app/image/edit" },
          { "@type": "ListItem", position: 4, name: "Color Picker" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/image/edit/color-picker#software",
        name: "Image Color Picker",
        url: "https://webpifyy.vercel.app/image/edit/color-picker",
        applicationCategory: "DesignApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "Pick colors from images. HEX, RGB, and HSL values. Browser-based.",
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
        <Breadcrumb items={[{label:"Home",href:"/"},{label:"Image Tools",href:"/image"},{label:"Edit",href:"/image/edit"},{label:"Color Picker"}]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">COLOR</span>
          <h1 className="toolpg-title">Image Color <span className="toolpg-title-accent">Picker</span></h1>
          <p className="toolpg-subtitle">Upload any image and click to pick colors. Get HEX, RGB, and HSL values instantly. Save your last 8 picked colors.</p>
        </div>

        <ImageColorPicker />

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
