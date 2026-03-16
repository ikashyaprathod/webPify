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

        // New Dev Tools
        { url: `${baseUrl}/dev/qr-code`,          lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/password-generator`,lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/json-formatter`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/regex-tester`,     lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/css-minifier`,     lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/html-minifier`,    lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/js-minifier`,      lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/dev/webcam-test`,      lastModified: staticDate, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/dev/markdown-editor`,  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // Color Tools
        { url: `${baseUrl}/color`,                     lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/color/palette-generator`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/color/picker`,              lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/color/converter`,           lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/color/gradient-generator`,  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/color/contrast-checker`,    lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // Screen Tools
        { url: `${baseUrl}/screen`,            lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/screen/recorder`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/screen/screenshot`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // Text Tools
        { url: `${baseUrl}/text`,                  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/text/word-counter`,     lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/text/case-converter`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/text/lorem-ipsum`,      lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/text/diff-checker`,     lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/text/text-to-speech`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.7 },

        // New Audio Pages
        { url: `${baseUrl}/audio/convert/wav-to-ogg`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/audio/convert/mp3-to-ogg`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/audio/edit/volume`,         lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // New Video Pages
        { url: `${baseUrl}/video/convert/mp4-to-mov`,    lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/video/convert/webm-to-mp4`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/video/edit/add-subtitles`,    lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // New Image Edit Pages
        { url: `${baseUrl}/image/edit/blur`,        lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/image/edit/grayscale`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/image/edit/brightness`,  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

        // New PDF Pages
        { url: `${baseUrl}/pdf/add-watermark`,  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/pdf/add-password`,   lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/pdf/reorder-pages`,  lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },

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
