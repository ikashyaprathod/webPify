import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import JwtDecoder from "@/components/JwtDecoder";

export const metadata = {
  title: "JWT Decoder Online Free — Decode JSON Web Tokens",
  description: "Decode and inspect JWT tokens online free. View header, payload, and expiry claims instantly. No uploads, browser-based.",
  alternates: { canonical: "https://webpifyy.vercel.app/dev/jwt-decoder" },
  openGraph: { title: "JWT Decoder Online Free — Decode JSON Web Tokens | webpifyy", description: "Decode and inspect JWT tokens online free. View header, payload, and expiry claims instantly. No uploads, browser-based.", url: "https://webpifyy.vercel.app/dev/jwt-decoder", type: "website", siteName: "webpifyy", images: [{ url: "https://webpifyy.vercel.app/opengraph-image" }] },
  twitter: { card: "summary_large_image", title: "JWT Decoder Online Free — Decode JSON Web Tokens | webpifyy", description: "Decode and inspect JWT tokens online free. View header, payload, and expiry claims instantly. No uploads, browser-based.", images: ["https://webpifyy.vercel.app/opengraph-image"] },
};

const faqs = [
  { q: "What are the three parts of a JWT?", a: "A JSON Web Token consists of three Base64URL-encoded segments separated by dots: the Header (algorithm and token type), the Payload (claims such as subject, issuer, and expiry), and the Signature (used to verify the token has not been tampered with). Only the signature requires the secret key to verify." },
  { q: "What claims are commonly found in a JWT payload?", a: "Standard registered claims include 'iss' (issuer), 'sub' (subject), 'aud' (audience), 'exp' (expiration time as a Unix timestamp), 'nbf' (not before), 'iat' (issued at), and 'jti' (JWT ID). Applications often add custom private claims alongside these." },
  { q: "How does JWT expiry work?", a: "The 'exp' claim holds a Unix timestamp (seconds since epoch). When a server validates a token, it compares exp against the current time. If the current time is past exp, the token is rejected as expired. This tool converts exp to a human-readable date so you can check expiry at a glance." },
  { q: "Is it safe to paste a JWT into an online decoder?", a: "Decoding only reads the Base64URL-encoded header and payload — it does not require the secret key and cannot forge tokens. However, avoid pasting production tokens containing sensitive personal data into any third-party site. This tool runs entirely in your browser; nothing is sent to a server." },
];

export default function JwtDecoderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://webpifyy.vercel.app/" },
          { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://webpifyy.vercel.app/dev" },
          { "@type": "ListItem", position: 3, name: "JWT Decoder" },
        ],
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": "https://webpifyy.vercel.app/dev/jwt-decoder#software",
        name: "JWT Decoder",
        url: "https://webpifyy.vercel.app/dev/jwt-decoder",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        inLanguage: "en",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
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
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/dev" }, { label: "JWT Decoder" }]} />
        <div className="toolpg-hero">
          <span className="toolpg-badge">JWT</span>
          <h1 className="toolpg-title">JWT <span className="toolpg-title-accent">Decoder</span></h1>
          <p className="toolpg-subtitle">Decode and inspect JSON Web Tokens. View header, payload, and expiry claims instantly.</p>
        </div>

        <JwtDecoder />

        <div className="tpg-stats-wrap">
          <div className="tpg-glass tpg-lm-panel">
            <div className="tpg-glow-1" /><div className="tpg-glow-2" />
            <div className="tpg-lm-head">
              <h4 className="tpg-lm-label"><span className="tpg-dot-pulse" />Live Engine Monitoring</h4>
              <span className="tpg-lm-badge">v2.4.0-Stable</span>
            </div>
            <div className="tpg-sc-grid">
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-b">📊</div><div><p className="tpg-sv">∞</p><p className="tpg-sl">Files Processed Today</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-i">⚡</div><div><p className="tpg-sv">0ms</p><p className="tpg-sl">Server Latency</p></div></div>
              <div className="tpg-sc"><div className="tpg-sci tpg-sci-e">✓</div><div><p className="tpg-sv">100%</p><p className="tpg-sl">Browser-Based</p></div></div>
            </div>
          </div>
          <div className="tpg-tiles">
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-b">🔒</div><h5 className="tpg-ttl">100% Private</h5><p className="tpg-tds">Everything runs in your browser. Nothing is uploaded.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-p">◈</div><h5 className="tpg-ttl">No Sign-up</h5><p className="tpg-tds">Use immediately without registration or account.</p></div>
            <div className="tpg-tile"><div className="tpg-ti tpg-ti-a">⚡</div><h5 className="tpg-ttl">Instant Results</h5><p className="tpg-tds">Process in milliseconds, right in your browser.</p></div>
          </div>
        </div>

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
