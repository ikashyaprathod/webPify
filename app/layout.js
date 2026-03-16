import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./ti-tools.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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


        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Webpifyy" />

        {/* hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-US" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-GB" href="https://webpifyy.vercel.app/" />
        <link rel="alternate" hrefLang="en-IN" href="https://webpifyy.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Hidden Google Translate element — our custom select drives it */}
        <div id="google_translate_element" style={{display:"none"}} />
        <script dangerouslySetInnerHTML={{__html:`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: 'en', autoDisplay: false },
              'google_translate_element'
            );
          }
        `}} />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
