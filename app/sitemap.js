export default function sitemap() {
    const baseUrl = 'https://webpifyy.vercel.app';
    const staticDate = new Date('2026-01-01');

    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Image Hub
        {
            url: `${baseUrl}/image`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Image Compressor
        {
            url: `${baseUrl}/image/compress`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/compress/png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compress/jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compress/webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Image Converter
        {
            url: `${baseUrl}/image/convert`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/convert/to-webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/to-png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/to-jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/heic-to-jpg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/image-to-pdf`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Image Resizer
        {
            url: `${baseUrl}/image/resize`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/resize/png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/resize/jpeg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/resize/webp`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Image Editor
        {
            url: `${baseUrl}/image/edit`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/edit/compare`,
            lastModified: staticDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/image/edit/crop`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/edit/rotate`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/edit/watermark`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/edit/remove-background`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // New image compress
        {
            url: `${baseUrl}/image/compress/avif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // New image convert
        {
            url: `${baseUrl}/image/convert/to-avif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/bmp-to-png`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/convert/tiff-to-jpg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // New image edit
        {
            url: `${baseUrl}/image/edit/color-picker`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/edit/metadata`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // PDF Tools
        {
            url: `${baseUrl}/pdf`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pdf/pdf-to-jpg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pdf/compress`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pdf/merge`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pdf/split`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pdf/rotate`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/pdf/jpg-to-pdf`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Video Tools
        {
            url: `${baseUrl}/video`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/video/compress`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/video/compress/mp4`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compress/webm`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compress/mov`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/convert`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/convert/video-to-gif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/convert/mp4-to-webm`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/convert/mp4-to-mp3`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/edit`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/edit/trim`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/edit/mute`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/edit/screenshot`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Audio Tools
        {
            url: `${baseUrl}/audio`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/audio/compress`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/audio/compress/mp3`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/audio/convert`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/audio/convert/mp3-to-wav`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/audio/convert/wav-to-mp3`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/audio/edit`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/audio/edit/trim`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Developer Tools
        {
            url: `${baseUrl}/dev`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dev/favicon-generator`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dev/og-image-resizer`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/dev/base64-encoder`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },

        // GIF Tools
        {
            url: `${baseUrl}/gif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gif/compress`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gif/compress/gif`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gif/convert`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gif/convert/gif-to-mp4`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gif/convert/gif-to-webm`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // SVG Tools
        {
            url: `${baseUrl}/svg`,
            lastModified: staticDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/svg/optimize`,
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
