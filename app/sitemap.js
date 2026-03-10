export default function sitemap() {
    const baseUrl = 'https://webpify.vercel.app';
    const staticDate = new Date('2026-01-01');

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Tool Hubs
        {
            url: `${baseUrl}/image/compressor`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/converter`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/resizer`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/compare`,
            lastModified: staticDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Format Pages - Compressor
        {
            url: `${baseUrl}/image/compressor/png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Format Pages - Converter
        {
            url: `${baseUrl}/image/converter/webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Format Pages - Resizer
        {
            url: `${baseUrl}/image/resizer/png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/resizer/jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/resizer/webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Video Compressor Pages
        {
            url: `${baseUrl}/video/compressor`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/video/compressor/mp4`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compressor/webm`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compressor/mov`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/to-gif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // GIF Tool Pages
        {
            url: `${baseUrl}/gif/compressor`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gif/compressor/gif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gif/compressor/mp4`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gif/compressor/webm`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // SVG Optimizer
        {
            url: `${baseUrl}/svg-optimizer`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Trust Pages
        {
            url: `${baseUrl}/about`,
            lastModified: staticDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: staticDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: staticDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
