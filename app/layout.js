import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Image Compressor & Converter – PNG, JPEG, WebP Tools",
  description: "Compress and convert images online using professional-grade tools. Supports PNG, JPEG, and WebP with high quality and fast processing.",
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
                  "@id": "https://webpify.vercel.app/#website",
                  "name": "WebPify",
                  "url": "https://webpify.vercel.app",
                  "description": "Professional image compression and conversion tools",
                  "publisher": {
                    "@id": "https://webpify.vercel.app/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://webpify.vercel.app/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://webpify.vercel.app/#organization",
                  "name": "WebPify",
                  "url": "https://webpify.vercel.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://webpify.vercel.app/logo.png",
                    "width": "512",
                    "height": "512"
                  },
                  "description": "Professional image compression and conversion tools for web optimization",
                  "foundingDate": "2026",
                  "sameAs": [
                    "https://github.com/ikashyaprathod/webPify"
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://webpify.vercel.app/#software",
                  "name": "WebPify Image Tools",
                  "applicationCategory": "ImageProcessing",
                  "operatingSystem": "Web",
                  "browserRequirements": "Requires JavaScript. Requires HTML5.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "provider": {
                    "@id": "https://webpify.vercel.app/#organization"
                  },
                  "description": "Professional image compression and conversion tools supporting PNG, JPEG, and WebP formats",
                  "featureList": [
                    "Image Compression",
                    "Image Conversion",
                    "PNG Support",
                    "JPEG Support",
                    "WebP Support",
                    "Client-side Processing"
                  ]
                }
              ]
            })
          }}
        />


        {/* hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://webpify.vercel.app/" />
        <link rel="alternate" hrefLang="en" href="https://webpify.vercel.app/" />
        <link rel="alternate" hrefLang="en-US" href="https://webpify.vercel.app/" />
        <link rel="alternate" hrefLang="en-GB" href="https://webpify.vercel.app/" />
        <link rel="alternate" hrefLang="en-IN" href="https://webpify.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
