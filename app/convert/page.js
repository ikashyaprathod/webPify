import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Free Unit Converters Online — Length, Weight, Temperature & More",
  description: "Free online unit converters: length, weight, temperature, speed, area, data size, and time. Instant conversions, all units shown at once. No signup.",
  alternates: { canonical: "https://webpifyy.vercel.app/convert" },
  openGraph: { title: "Free Unit Converters Online — Length, Weight, Temperature & More | webpifyy", description: "Free online unit converters: length, weight, temperature, speed, area, data size, and time. Instant conversions, all units shown at once. No signup.", url: "https://webpifyy.vercel.app/convert", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "Free Unit Converters Online — Length, Weight, Temperature & More | webpifyy", description: "Free online unit converters: length, weight, temperature, speed, area, data size, and time. Instant conversions, all units shown at once. No signup.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const TOOLS = [
  { href: "/convert/length", label: "Length Converter", desc: "m, km, cm, ft, in, mi, nautical miles", icon: "📏" },
  { href: "/convert/weight", label: "Weight Converter", desc: "kg, g, lb, oz, t, st, carats", icon: "⚖" },
  { href: "/convert/temperature", label: "Temperature Converter", desc: "°C, °F, Kelvin, Rankine", icon: "🌡" },
  { href: "/convert/speed", label: "Speed Converter", desc: "m/s, km/h, mph, knots, Mach, c", icon: "🚀" },
  { href: "/convert/area", label: "Area Converter", desc: "m², ft², km², acres, hectares", icon: "▦" },
  { href: "/convert/data-size", label: "Data Size Converter", desc: "bits, bytes, KB, MB, GB, TB, PB", icon: "💾" },
  { href: "/convert/time", label: "Time Converter", desc: "ns, ms, s, min, h, days, weeks, years", icon: "⏱" },
];

export default function ConvertHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Unit Converters" }] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageShell>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Unit Converters" }]} />
        <div className="toolpg-hero"><span className="toolpg-badge">CONVERT</span><h1 className="toolpg-title">Free Online Unit <span className="toolpg-title-accent">Converters</span></h1><p className="toolpg-subtitle">7 free unit converters — length, weight, temperature, speed, area, data size, and time. Instant results, all units shown at once.</p></div>
        <div className="hub-grid">
          {TOOLS.map(t => (
            <Link key={t.href} href={t.href} className="hub-card">
              <span className="hub-card-icon">{t.icon}</span>
              <h2 className="hub-card-title">{t.label}</h2>
              <p className="hub-card-desc">{t.desc}</p>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}
