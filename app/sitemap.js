import { getSEOMetadata } from '@/utils/seo-config';

export default function sitemap() {
    const baseUrl = 'https://webpify.vercel.app';
    const currentDate = new Date();

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Master Hub
        {
            url: `${baseUrl}/image`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Tool Hubs
        {
            url: `${baseUrl}/image/compressor`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/converter`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/compare`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Format Pages - Compressor
        {
            url: `${baseUrl}/image/compressor/png`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/jpeg`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/webp`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Format Pages - Converter
        {
            url: `${baseUrl}/image/converter/png`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/jpeg`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/webp`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Programmatic Pages - Compress Pattern 1
        {
            url: `${baseUrl}/compress-png-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-webp-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Programmatic Pages - Reduce Pattern
        {
            url: `${baseUrl}/reduce-png-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-jpeg-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-webp-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Programmatic Pages - Shrink Pattern
        {
            url: `${baseUrl}/shrink-png-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/shrink-jpeg-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/shrink-webp-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Programmatic Pages - Convert to Format
        {
            url: `${baseUrl}/convert-to-png`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/convert-to-jpeg`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/convert-to-webp`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Programmatic Pages - Format to Format
        {
            url: `${baseUrl}/png-to-webp-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/png-to-jpeg-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/jpeg-to-webp-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/jpeg-to-png-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/webp-to-png-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/webp-to-jpeg-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Trust Pages
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // High-Priority Programmatic Pages - SEO Intent
        {
            url: `${baseUrl}/compress-png-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-webp-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // High-Priority Programmatic Pages - Website Intent
        {
            url: `${baseUrl}/compress-png-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/optimize-png-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // High-Priority Programmatic Pages - Quality Intent
        {
            url: `${baseUrl}/compress-png-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Comparison Pages
        {
            url: `${baseUrl}/compare/webpify-vs-tinypng`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        {
            url: `${baseUrl}/compare/webpify-vs-freeconvert`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/compare/webpify-vs-iloveimg`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/compare/webpify-vs-squoosh`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
