"use client";

/**
 * HrefLang component for international SEO
 * Adds hreflang tags for English variants (en, en-US, en-GB, en-IN)
 */
export default function HrefLang({ pathname = "" }) {
    const baseUrl = "https://webpify.vercel.app";
    const url = `${baseUrl}${pathname}`;

    return (
        <>
            <link rel="alternate" hrefLang="x-default" href={url} />
            <link rel="alternate" hrefLang="en" href={url} />
            <link rel="alternate" hrefLang="en-US" href={url} />
            <link rel="alternate" hrefLang="en-GB" href={url} />
            <link rel="alternate" hrefLang="en-IN" href={url} />
        </>
    );
}
