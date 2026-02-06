// SEO Configuration Utilities

const BASE_URL = "https://webpify.vercel.app";

// List of all indexable pages
const INDEXED_PATHS = [
    // Core pages
    '/',
    '/image',
    '/image/compressor',
    '/image/converter',
    '/image/compare',

    // Format pages - Compressor
    '/image/compressor/png',
    '/image/compressor/jpeg',
    '/image/compressor/webp',

    // Format pages - Converter
    '/image/converter/png',
    '/image/converter/jpeg',
    '/image/converter/webp',

    // Programmatic - Compression Pattern 1
    '/compress-png-online',
    '/compress-jpeg-online',
    '/compress-webp-online',

    // Programmatic - Compression Pattern 2
    '/reduce-png-file-size',
    '/reduce-jpeg-file-size',
    '/reduce-webp-file-size',

    // Programmatic - Compression Pattern 3
    '/shrink-png-images',
    '/shrink-jpeg-images',
    '/shrink-webp-images',

    // Programmatic - Conversion Pattern 1
    '/convert-to-png',
    '/convert-to-jpeg',
    '/convert-to-webp',

    // Programmatic - Conversion Pattern 2
    '/png-to-webp-converter',
    '/png-to-jpeg-converter',
    '/jpeg-to-webp-converter',
    '/jpeg-to-png-converter',
    '/webp-to-png-converter',
    '/webp-to-jpeg-converter',

    // Comparison pages
    '/compare/webpify-vs-tinypng',
    '/compare/webpify-vs-freeconvert',
    '/compare/webpify-vs-iloveimg',
    '/compare/webpify-vs-squoosh',
];

/**
 * Check if a path should be indexed by search engines
 */
export function shouldIndex(pathname) {
    return INDEXED_PATHS.includes(pathname);
}

/**
 * Get robots metadata for a given path
 */
export function getRobotsMetadata(pathname) {
    return shouldIndex(pathname)
        ? { robots: 'index, follow' }
        : { robots: 'noindex, nofollow' };
}

/**
 * Get canonical URL for a given path
 */
export function getCanonicalUrl(pathname) {
    return `${BASE_URL}${pathname}`;
}

/**
 * Get complete SEO metadata including robots and canonical
 */
export function getSEOMetadata(pathname) {
    return {
        ...getRobotsMetadata(pathname),
        alternates: {
            canonical: getCanonicalUrl(pathname),
        },
    };
}

/**
 * Get hreflang URLs for a given path
 */
export function getHrefLangUrls(pathname) {
    const url = `${BASE_URL}${pathname}`;
    return {
        'x-default': url,
        'en': url,
        'en-US': url,
        'en-GB': url,
        'en-IN': url,
    };
}
