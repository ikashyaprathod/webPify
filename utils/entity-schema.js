// Entity Schema Definitions

const BASE_URL = "https://webpify.vercel.app";

/**
 * Organization schema for WebPify
 */
export const organizationSchema = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "WebPify",
    "url": BASE_URL,
    "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`,
        "width": "512",
        "height": "512"
    },
    "description": "Professional image compression and conversion tools for web optimization",
    "foundingDate": "2026",
    "sameAs": [
        "https://github.com/ikashyaprathod/webPify"
        // Add more when created:
        // "https://medium.com/@webpify",
        // "https://dev.to/webpify"
    ]
};

/**
 * WebSite schema for WebPify
 */
export const websiteSchema = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "WebPify",
    "url": BASE_URL,
    "description": "Professional image compression and conversion tools",
    "publisher": {
        "@id": `${BASE_URL}/#organization`
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
    }
};

/**
 * Primary SoftwareApplication schema
 */
export const softwareApplicationSchema = {
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
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
        "@id": `${BASE_URL}/#organization`
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
};

/**
 * Get complete entity graph for homepage
 */
export function getEntityGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            websiteSchema,
            organizationSchema,
            softwareApplicationSchema
        ]
    };
}

/**
 * Get tool-specific SoftwareApplication schema
 */
export function getToolSchema(toolName, description, formats) {
    return {
        "@type": "SoftwareApplication",
        "name": toolName,
        "applicationCategory": "ImageProcessing",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "provider": {
            "@id": `${BASE_URL}/#organization`
        },
        "description": description,
        "featureList": formats
    };
}

/**
 * Entity constants for consistency
 */
export const ENTITY_CONSTANTS = {
    name: "WebPify",
    tagline: "Professional image compression and conversion tools",
    description: "Optimize images for web performance and SEO",
    formats: ["PNG", "JPEG", "WebP"],
    functions: ["Image Compression", "Image Conversion"]
};
