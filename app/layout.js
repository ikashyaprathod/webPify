import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./ti-tools.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InstallPrompt from "../components/InstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://webpifyy.vercel.app"),
  title: {
    default: "Free Online Media & Utility Tools — webpifyy",
    template: "%s | webpifyy",
  },
  description: "Free browser-based tools for images, video, audio, PDF, color, text, and more. No signup, no uploads, no limits. 100+ tools, all free forever.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "webpifyy",
    title: "Free Online Media & Utility Tools — webpifyy",
    description: "Free browser-based tools for images, video, audio, PDF, color, text, and more. No signup, no uploads, no limits. 100+ tools, all free forever.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Media & Utility Tools — webpifyy",
    description: "Free browser-based tools for images, video, audio, PDF, color, text, and more. No signup, no uploads, no limits. 100+ tools, all free forever.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://webpifyy.vercel.app/#website",
                  "name": "Webpifyy",
                  "alternateName": "WebPify",
                  "url": "https://webpifyy.vercel.app",
                  "description": "Free online image, video, and GIF compression and conversion tools",
                  "inLanguage": "en",
                  "publisher": { "@id": "https://webpifyy.vercel.app/#organization" }
                },
                {
                  "@type": "Organization",
                  "@id": "https://webpifyy.vercel.app/#organization",
                  "name": "Webpifyy",
                  "alternateName": "WebPify",
                  "url": "https://webpifyy.vercel.app",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://webpifyy.vercel.app/#logo",
                    "url": "https://webpifyy.vercel.app/logo.png",
                    "width": 512,
                    "height": 512,
                    "caption": "Webpifyy"
                  },
                  "image": { "@id": "https://webpifyy.vercel.app/#logo" },
                  "description": "Free browser-based image, video and GIF compression and conversion tools with privacy-first processing",
                  "foundingDate": "2024",
                  "knowsAbout": [
                    "Image Compression",
                    "Video Compression",
                    "WebP Conversion",
                    "GIF Optimization",
                    "File Size Reduction",
                    "Browser-based Media Processing"
                  ],
                  "sameAs": [
                    "https://github.com/ikashyaprathod/webPify"
                  ]
                },
                {
                  "@type": ["SoftwareApplication", "WebApplication"],
                  "@id": "https://webpifyy.vercel.app/#software",
                  "name": "Webpifyy – Image, Video & GIF Tools",
                  "url": "https://webpifyy.vercel.app",
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
                  "publisher": { "@id": "https://webpifyy.vercel.app/#organization" },
                  "description": "Free browser-based image and video compression and conversion tools. Supports PNG, JPEG, WebP, MP4, MOV, WebM, GIF. No uploads — privacy-first processing.",
                  "featureList": [
                    "Image Compression",
                    "Image Conversion",
                    "Image Resizing",
                    "Video Compression",
                    "GIF Compression",
                    "GIF to MP4 Conversion",
                    "GIF to WebM Conversion",
                    "PNG Support",
                    "JPEG Support",
                    "WebP Support",
                    "MP4 Compression",
                    "WebM Compression",
                    "MOV Compression",
                    "Client-side Processing",
                    "Privacy-First No Server Upload",
                    "SVG Optimization"
                  ],
                  "screenshot": {
                    "@type": "ImageObject",
                    "url": "https://webpifyy.vercel.app/opengraph-image.png",
                    "width": 1200,
                    "height": 630
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "1200",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ]
            })
          }}
        />


        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://translate.googleapis.com" />

        {/* Critical CSS — inlined to eliminate render-blocking on above-the-fold content */}
        <style dangerouslySetInnerHTML={{ __html: `
          *,::before,::after{box-sizing:border-box;margin:0;padding:0}
          html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
          body{font-family:var(--font-geist-sans,system-ui,sans-serif);background:#f8fafc;color:#0f172a;-webkit-font-smoothing:antialiased}
          /* Navbar */
          .nb-header{position:sticky;top:0;z-index:50;background:#2b8cee;box-shadow:0 4px 20px rgba(0,0,0,.15)}
          .nb-inner{max-width:1280px;margin:0 auto;padding:0 32px;height:72px;display:flex;align-items:center;gap:24px}
          .nb-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
          .nb-logo-icon{width:40px;height:40px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#2b8cee;flex-shrink:0}
          .nb-logo-text{font-size:1.35rem;font-weight:900;color:#fff;letter-spacing:-.03em;white-space:nowrap}
          .nb-nav{display:flex;align-items:center;gap:4px;flex:1;justify-content:center}
          .nb-navlink{color:#fff;font-size:.9rem;font-weight:700;text-decoration:none;padding:8px 14px;border-radius:8px;white-space:nowrap}
          .nb-navlink--btn{background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:5px;color:#fff;font-size:.9rem;font-weight:700;padding:8px 14px;border-radius:8px;font-family:inherit}
          /* Homepage hero */
          .hp2-wrap{background:#f8fafc;min-height:100vh}
          .hp2-main{max-width:1440px;margin:0 auto;padding:64px 80px}
          .hp2-hero{text-align:center;margin-bottom:80px;max-width:800px;margin-left:auto;margin-right:auto}
          .hp2-title{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:800;color:#0f172a;letter-spacing:-.03em;line-height:1.1;margin-bottom:24px}
          .hp2-title-gradient{background:linear-gradient(135deg,#3b82f6,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
          .hp2-subtitle{font-size:1.125rem;color:#475569;line-height:1.6;max-width:560px;margin:0 auto}
          .hp2-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-bottom:128px}
          .hp2-card{display:flex;flex-direction:column;border-radius:24px;border:1px solid rgba(255,255,255,.8);background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);overflow:hidden}
          .hp2-card-header{height:180px;display:flex;align-items:center;justify-content:center;position:relative}
          .hp2-card-body{padding:32px;display:flex;flex-direction:column;flex:1}
          .hp2-card-title{font-size:1.375rem;font-weight:700;color:#0f172a;margin-bottom:12px}
          .hp2-card-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px;background:#3b82f6;color:#fff;font-weight:700;font-size:.9375rem;border-radius:12px;text-decoration:none;margin-bottom:28px}
          /* Generic page shell */
          main{display:block}
          @media(max-width:768px){
            .nb-inner{padding:0 16px;height:60px}
            .nb-nav{display:none}
            .hp2-main{padding:32px 20px}
            .hp2-grid{grid-template-columns:1fr}
          }
        ` }} />

        {/* PWA */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WebPify" />

        {/* hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-US" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-GB" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-IN" href="https://webpifyy.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Hidden Google Translate element — loaded lazily on first language change */}
        <div id="google_translate_element" style={{display:"none"}} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <InstallPrompt />
      </body>
    </html>
  );
}
