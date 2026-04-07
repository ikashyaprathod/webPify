// Topical Graph Mapping

/**
 * Complete topical graph for WebPify
 * Defines parent-child-sibling relationships for all pages
 */
export const topicalGraph = {
    '/': {
        children: ['/image', '/video', '/gif', '/svg', '/pdf', '/audio', '/dev', '/color', '/screen', '/text', '/calc', '/convert', '/finance', '/health', '/about', '/privacy', '/terms'],
        related: ['/image/compress', '/image/convert', '/video/compress', '/gif/compress', '/image/resize', '/svg/optimize', '/calc', '/convert']
    },

    // Master Hub
    '/image': {
        parent: '/',
        children: ['/image/compress', '/image/convert', '/image/resize', '/image/edit'],
        related: ['/video/compress', '/gif/compress', '/svg/optimize']
    },

    // Audio Hub
    '/audio': {
        parent: '/',
        children: ['/audio/compress', '/audio/convert', '/audio/edit'],
        related: ['/video/compress', '/video/convert']
    },

    // Audio Compress Hub
    '/audio/compress': {
        parent: '/audio',
        siblings: ['/audio/convert', '/audio/edit'],
        children: ['/audio/compress/mp3'],
        related: ['/audio/convert', '/video/compress']
    },

    // Audio Convert Hub
    '/audio/convert': {
        parent: '/audio',
        siblings: ['/audio/compress', '/audio/edit'],
        children: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-mp3', '/audio/convert/wav-to-ogg', '/audio/convert/mp3-to-ogg'],
        related: ['/audio/compress', '/video/convert']
    },

    // Audio Edit Hub
    '/audio/edit': {
        parent: '/audio',
        siblings: ['/audio/compress', '/audio/convert'],
        children: ['/audio/edit/trim', '/audio/edit/volume'],
        related: ['/audio/compress', '/video/edit']
    },

    // Audio Tool Pages
    '/audio/compress/mp3': {
        parent: '/audio/compress',
        siblings: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-mp3'],
        related: ['/audio/convert', '/video/compress']
    },
    '/audio/convert/mp3-to-wav': {
        parent: '/audio/convert',
        siblings: ['/audio/convert/wav-to-mp3'],
        related: ['/audio/compress/mp3', '/audio/convert']
    },
    '/audio/convert/wav-to-mp3': {
        parent: '/audio/convert',
        siblings: ['/audio/convert/mp3-to-wav'],
        related: ['/audio/compress/mp3', '/audio/convert']
    },
    '/audio/edit/trim': {
        parent: '/audio/edit',
        siblings: ['/audio/compress/mp3'],
        related: ['/audio/compress', '/video/edit/trim']
    },

    // Developer Tools Hub
    '/dev': {
        parent: '/',
        children: ['/dev/favicon-generator', '/dev/og-image-resizer', '/dev/base64-encoder', '/dev/qr-code', '/dev/password-generator', '/dev/json-formatter', '/dev/regex-tester', '/dev/css-minifier', '/dev/html-minifier', '/dev/js-minifier', '/dev/webcam-test', '/dev/markdown-editor', '/dev/uuid-generator', '/dev/hash-generator', '/dev/jwt-decoder', '/dev/timestamp-converter', '/dev/url-encoder', '/dev/xml-formatter', '/dev/yaml-formatter', '/dev/html-entity-encoder', '/dev/color-shades', '/dev/image-placeholder', '/dev/number-base'],
        related: ['/image/convert', '/image/compress', '/text', '/color']
    },
    '/dev/favicon-generator': {
        parent: '/dev',
        siblings: ['/dev/og-image-resizer', '/dev/base64-encoder'],
        related: ['/dev/og-image-resizer', '/image/compress']
    },
    '/dev/og-image-resizer': {
        parent: '/dev',
        siblings: ['/dev/favicon-generator', '/dev/base64-encoder'],
        related: ['/dev/favicon-generator', '/image/resize']
    },
    '/dev/base64-encoder': {
        parent: '/dev',
        siblings: ['/dev/favicon-generator', '/dev/og-image-resizer'],
        related: ['/dev/favicon-generator', '/image/convert']
    },
    '/dev/uuid-generator': {
        parent: '/dev',
        siblings: ['/dev/hash-generator', '/dev/password-generator'],
        related: ['/dev/hash-generator', '/dev/password-generator']
    },
    '/dev/hash-generator': {
        parent: '/dev',
        siblings: ['/dev/uuid-generator', '/dev/password-generator'],
        related: ['/dev/uuid-generator', '/dev/base64-encoder']
    },
    '/dev/jwt-decoder': {
        parent: '/dev',
        siblings: ['/dev/hash-generator', '/dev/url-encoder'],
        related: ['/dev/hash-generator', '/dev/base64-encoder']
    },
    '/dev/timestamp-converter': {
        parent: '/dev',
        siblings: ['/dev/url-encoder', '/dev/json-formatter'],
        related: ['/dev/json-formatter', '/calc/date-difference']
    },
    '/dev/url-encoder': {
        parent: '/dev',
        siblings: ['/dev/html-entity-encoder', '/dev/base64-encoder'],
        related: ['/dev/html-entity-encoder', '/dev/base64-encoder']
    },
    '/dev/xml-formatter': {
        parent: '/dev',
        siblings: ['/dev/json-formatter', '/dev/yaml-formatter'],
        related: ['/dev/json-formatter', '/dev/yaml-formatter']
    },
    '/dev/yaml-formatter': {
        parent: '/dev',
        siblings: ['/dev/json-formatter', '/dev/xml-formatter'],
        related: ['/dev/json-formatter', '/dev/xml-formatter']
    },
    '/dev/html-entity-encoder': {
        parent: '/dev',
        siblings: ['/dev/url-encoder', '/dev/html-minifier'],
        related: ['/dev/url-encoder', '/dev/html-minifier']
    },
    '/dev/color-shades': {
        parent: '/dev',
        siblings: ['/dev/image-placeholder', '/dev/favicon-generator'],
        related: ['/color/palette-generator', '/color/converter']
    },
    '/dev/image-placeholder': {
        parent: '/dev',
        siblings: ['/dev/color-shades', '/dev/og-image-resizer'],
        related: ['/dev/og-image-resizer', '/image/resize']
    },
    '/dev/number-base': {
        parent: '/dev',
        siblings: ['/dev/hash-generator', '/dev/uuid-generator'],
        related: ['/dev/hash-generator', '/calc/scientific']
    },

    // Video Hub
    '/video': {
        parent: '/',
        children: ['/video/compress', '/video/convert', '/video/edit'],
        related: ['/image/compress', '/image/convert', '/gif/compress', '/audio/compress']
    },

    // GIF Hub
    '/gif': {
        parent: '/',
        children: ['/gif/compress', '/gif/convert', '/gif/edit', '/gif/create'],
        related: ['/video/compress', '/image/compress']
    },

    // GIF Edit Hub
    '/gif/edit': {
        parent: '/gif',
        siblings: ['/gif/compress', '/gif/convert', '/gif/create'],
        children: ['/gif/edit/resize', '/gif/edit/speed'],
        related: ['/gif/compress', '/video/edit']
    },
    '/gif/create': {
        parent: '/gif',
        siblings: ['/gif/compress', '/gif/convert', '/gif/edit'],
        related: ['/gif/compress', '/video/convert/video-to-gif']
    },
    '/gif/edit/resize': {
        parent: '/gif/edit',
        siblings: ['/gif/edit/speed'],
        related: ['/gif/compress', '/image/resize']
    },
    '/gif/edit/speed': {
        parent: '/gif/edit',
        siblings: ['/gif/edit/resize'],
        related: ['/gif/compress', '/video/edit']
    },

    // SVG Hub
    '/svg': {
        parent: '/',
        children: ['/svg/optimize', '/svg/svg-viewer', '/svg/svg-to-png', '/svg/svg-editor'],
        related: ['/image/compress', '/image/convert']
    },
    '/svg/svg-viewer': {
        parent: '/svg',
        siblings: ['/svg/optimize', '/svg/svg-to-png', '/svg/svg-editor'],
        related: ['/svg/optimize', '/svg/svg-editor']
    },
    '/svg/svg-to-png': {
        parent: '/svg',
        siblings: ['/svg/optimize', '/svg/svg-viewer', '/svg/svg-editor'],
        related: ['/svg/optimize', '/image/convert/to-png']
    },
    '/svg/svg-editor': {
        parent: '/svg',
        siblings: ['/svg/optimize', '/svg/svg-viewer', '/svg/svg-to-png'],
        related: ['/svg/optimize', '/dev/xml-formatter']
    },

    // PDF Hub
    '/pdf': {
        parent: '/',
        children: ['/pdf/pdf-to-jpg'],
        related: ['/image/compress', '/image/convert']
    },

    // Image Compress Hub
    '/image/compress': {
        parent: '/image',
        siblings: ['/image/convert', '/image/resize', '/image/edit'],
        children: ['/image/compress/png', '/image/compress/jpeg', '/image/compress/webp', '/image/compress/avif'],
        related: ['/image/edit/compare', '/video/compress', '/gif/compress', '/image/resize']
    },

    // Image Convert Hub
    '/image/convert': {
        parent: '/image',
        siblings: ['/image/compress', '/image/resize', '/image/edit'],
        children: ['/image/convert/to-webp', '/image/convert/to-png', '/image/convert/to-jpeg', '/image/convert/to-avif', '/image/convert/bmp-to-png', '/image/convert/tiff-to-jpg', '/image/convert/heic-to-jpg', '/image/convert/image-to-pdf'],
        related: ['/image/edit/compare', '/video/compress']
    },

    // Image Resize Hub
    '/image/resize': {
        parent: '/image',
        siblings: ['/image/compress', '/image/convert', '/image/edit'],
        children: ['/image/resize/png', '/image/resize/jpeg', '/image/resize/webp'],
        related: ['/image/compress', '/svg/optimize']
    },

    // Image Edit Hub
    '/image/edit': {
        parent: '/image',
        siblings: ['/image/compress', '/image/convert', '/image/resize'],
        children: ['/image/edit/compare', '/image/edit/crop', '/image/edit/rotate', '/image/edit/watermark', '/image/edit/remove-background', '/image/edit/color-picker', '/image/edit/metadata', '/image/edit/blur', '/image/edit/grayscale', '/image/edit/brightness'],
        related: ['/image/compress', '/image/convert']
    },

    // Image Compress Format Pages
    '/image/compress/png': {
        parent: '/image/compress',
        grandparent: '/image',
        siblings: ['/image/compress/jpeg', '/image/compress/webp'],
        related: ['/image/convert/to-png']
    },
    '/image/compress/jpeg': {
        parent: '/image/compress',
        grandparent: '/image',
        siblings: ['/image/compress/png', '/image/compress/webp'],
        related: ['/image/convert/to-jpeg']
    },
    '/image/compress/webp': {
        parent: '/image/compress',
        grandparent: '/image',
        siblings: ['/image/compress/png', '/image/compress/jpeg', '/image/compress/avif'],
        related: ['/image/convert/to-webp']
    },
    '/image/compress/avif': {
        parent: '/image/compress',
        grandparent: '/image',
        siblings: ['/image/compress/png', '/image/compress/jpeg', '/image/compress/webp'],
        related: ['/image/convert/to-avif']
    },

    // Image Resize Format Pages
    '/image/resize/png': {
        parent: '/image/resize',
        siblings: ['/image/resize/jpeg', '/image/resize/webp'],
        related: ['/image/compress/png']
    },
    '/image/resize/jpeg': {
        parent: '/image/resize',
        siblings: ['/image/resize/png', '/image/resize/webp'],
        related: ['/image/compress/jpeg']
    },
    '/image/resize/webp': {
        parent: '/image/resize',
        siblings: ['/image/resize/png', '/image/resize/jpeg'],
        related: ['/image/compress/webp']
    },

    // Image Convert Format Pages
    '/image/convert/to-webp': {
        parent: '/image/convert',
        grandparent: '/image',
        siblings: ['/image/convert/to-png', '/image/convert/to-jpeg'],
        related: ['/image/compress/webp']
    },
    '/image/convert/to-png': {
        parent: '/image/convert',
        grandparent: '/image',
        siblings: ['/image/convert/to-webp', '/image/convert/to-jpeg'],
        related: ['/image/compress/png']
    },
    '/image/convert/to-jpeg': {
        parent: '/image/convert',
        grandparent: '/image',
        siblings: ['/image/convert/to-webp', '/image/convert/to-png'],
        related: ['/image/compress/jpeg']
    },
    '/image/convert/heic-to-jpg': {
        parent: '/image/convert',
        siblings: ['/image/convert/to-webp', '/image/convert/to-png'],
        related: ['/image/compress/jpeg']
    },
    '/image/convert/to-avif': {
        parent: '/image/convert',
        grandparent: '/image',
        siblings: ['/image/convert/to-webp', '/image/convert/to-png', '/image/convert/to-jpeg'],
        related: ['/image/compress/avif']
    },
    '/image/convert/bmp-to-png': {
        parent: '/image/convert',
        siblings: ['/image/convert/to-webp', '/image/convert/to-png'],
        related: ['/image/compress/png']
    },
    '/image/convert/tiff-to-jpg': {
        parent: '/image/convert',
        siblings: ['/image/convert/to-jpeg', '/image/convert/bmp-to-png'],
        related: ['/image/compress/jpeg']
    },
    '/image/convert/image-to-pdf': {
        parent: '/image/convert',
        siblings: ['/image/convert/to-webp', '/image/convert/to-png'],
        related: ['/pdf/pdf-to-jpg']
    },

    // Image Edit Pages
    '/image/edit/compare': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/rotate'],
        related: ['/image/compress', '/image/convert']
    },
    '/image/edit/crop': {
        parent: '/image/edit',
        siblings: ['/image/edit/compare', '/image/edit/rotate', '/image/edit/watermark'],
        related: ['/image/resize', '/image/compress']
    },
    '/image/edit/rotate': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/watermark'],
        related: ['/image/resize', '/image/compress']
    },
    '/image/edit/watermark': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/rotate'],
        related: ['/image/compress', '/image/convert']
    },
    '/image/edit/remove-background': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/watermark'],
        related: ['/image/compress', '/image/convert']
    },
    '/image/edit/color-picker': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/metadata'],
        related: ['/image/edit/compare', '/image/compress']
    },
    '/image/edit/metadata': {
        parent: '/image/edit',
        siblings: ['/image/edit/crop', '/image/edit/color-picker'],
        related: ['/image/compress', '/image/convert']
    },

    // Video Compress Hub
    '/video/compress': {
        parent: '/video',
        siblings: ['/video/convert'],
        children: ['/video/compress/mp4', '/video/compress/webm', '/video/compress/mov'],
        related: ['/image/compress', '/image/convert', '/gif/compress']
    },

    // Video Convert Hub
    '/video/convert': {
        parent: '/video',
        siblings: ['/video/compress', '/video/edit'],
        children: ['/video/convert/video-to-gif', '/video/convert/mp4-to-webm', '/video/convert/mp4-to-mp3', '/video/convert/mp4-to-mov', '/video/convert/webm-to-mp4'],
        related: ['/gif/compress', '/video/compress', '/audio/compress']
    },

    // Video Edit Hub
    '/video/edit': {
        parent: '/video',
        siblings: ['/video/compress', '/video/convert'],
        children: ['/video/edit/trim', '/video/edit/mute', '/video/edit/screenshot', '/video/edit/add-subtitles'],
        related: ['/video/compress', '/audio/edit']
    },

    // Video Compress Format Pages
    '/video/compress/mp4': {
        parent: '/video/compress',
        siblings: ['/video/compress/webm', '/video/compress/mov'],
        related: ['/image/compress', '/gif/compress']
    },
    '/video/compress/webm': {
        parent: '/video/compress',
        siblings: ['/video/compress/mp4', '/video/compress/mov'],
        related: ['/image/compress', '/gif/compress']
    },
    '/video/compress/mov': {
        parent: '/video/compress',
        siblings: ['/video/compress/mp4', '/video/compress/webm'],
        related: ['/image/compress', '/gif/compress']
    },

    // Video Convert Pages
    '/video/convert/video-to-gif': {
        parent: '/video/convert',
        siblings: ['/video/convert/mp4-to-webm', '/video/convert/mp4-to-mp3'],
        related: ['/gif/compress', '/gif/convert/gif-to-mp4']
    },
    '/video/convert/mp4-to-webm': {
        parent: '/video/convert',
        siblings: ['/video/convert/video-to-gif', '/video/convert/mp4-to-mp3'],
        related: ['/video/compress', '/video/convert/video-to-gif']
    },
    '/video/convert/mp4-to-mp3': {
        parent: '/video/convert',
        siblings: ['/video/convert/video-to-gif', '/video/convert/mp4-to-webm'],
        related: ['/audio/compress/mp3', '/audio/convert']
    },

    // Video Edit Pages
    '/video/edit/trim': {
        parent: '/video/edit',
        siblings: ['/video/edit/mute', '/video/edit/screenshot'],
        related: ['/video/compress', '/audio/edit/trim']
    },
    '/video/edit/mute': {
        parent: '/video/edit',
        siblings: ['/video/edit/trim', '/video/edit/screenshot'],
        related: ['/video/compress', '/video/convert/mp4-to-mp3']
    },
    '/video/edit/screenshot': {
        parent: '/video/edit',
        siblings: ['/video/edit/trim', '/video/edit/mute'],
        related: ['/image/compress', '/video/compress']
    },

    // GIF Compress Hub
    '/gif/compress': {
        parent: '/gif',
        siblings: ['/gif/convert'],
        children: ['/gif/compress/gif'],
        related: ['/video/convert/video-to-gif', '/video/compress', '/image/compress']
    },
    '/gif/compress/gif': {
        parent: '/gif/compress',
        siblings: ['/gif/convert/gif-to-mp4', '/gif/convert/gif-to-webm'],
        related: ['/gif/convert/gif-to-mp4', '/video/convert/video-to-gif']
    },

    // GIF Convert Hub
    '/gif/convert': {
        parent: '/gif',
        siblings: ['/gif/compress'],
        children: ['/gif/convert/gif-to-mp4', '/gif/convert/gif-to-webm'],
        related: ['/video/compress', '/gif/compress']
    },
    '/gif/convert/gif-to-mp4': {
        parent: '/gif/convert',
        siblings: ['/gif/compress/gif', '/gif/convert/gif-to-webm'],
        related: ['/video/compress', '/gif/convert/gif-to-webm']
    },
    '/gif/convert/gif-to-webm': {
        parent: '/gif/convert',
        siblings: ['/gif/compress/gif', '/gif/convert/gif-to-mp4'],
        related: ['/gif/convert/gif-to-mp4', '/video/compress']
    },

    // SVG Optimizer
    '/svg/optimize': {
        parent: '/svg',
        related: ['/image/compress', '/image/convert', '/image/resize']
    },

    // PDF Tools
    '/pdf': {
        parent: '/',
        children: ['/pdf/pdf-to-jpg', '/pdf/compress', '/pdf/merge', '/pdf/split', '/pdf/rotate', '/pdf/jpg-to-pdf', '/pdf/add-watermark', '/pdf/add-password', '/pdf/reorder-pages'],
        related: ['/image/compress', '/image/convert']
    },
    '/pdf/pdf-to-jpg': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/merge', '/pdf/split', '/pdf/rotate', '/pdf/jpg-to-pdf'],
        related: ['/image/compress', '/image/convert/image-to-pdf']
    },
    '/pdf/compress': {
        parent: '/pdf',
        siblings: ['/pdf/pdf-to-jpg', '/pdf/merge', '/pdf/split'],
        related: ['/image/compress', '/pdf/merge']
    },
    '/pdf/merge': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/split', '/pdf/pdf-to-jpg'],
        related: ['/pdf/split', '/pdf/compress']
    },
    '/pdf/split': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/merge', '/pdf/pdf-to-jpg'],
        related: ['/pdf/merge', '/pdf/compress']
    },
    '/pdf/rotate': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/merge', '/pdf/split'],
        related: ['/pdf/compress', '/image/edit/rotate']
    },
    '/pdf/jpg-to-pdf': {
        parent: '/pdf',
        siblings: ['/pdf/pdf-to-jpg', '/pdf/compress'],
        related: ['/pdf/pdf-to-jpg', '/image/convert/image-to-pdf']
    },

    // New Video Convert Pages
    '/video/convert/mp4-to-mov': {
        parent: '/video/convert',
        siblings: ['/video/convert/mp4-to-webm', '/video/convert/mp4-to-mp3'],
        related: ['/video/compress', '/video/convert/webm-to-mp4']
    },
    '/video/convert/webm-to-mp4': {
        parent: '/video/convert',
        siblings: ['/video/convert/mp4-to-webm', '/video/convert/mp4-to-mov'],
        related: ['/video/compress', '/video/convert/mp4-to-webm']
    },

    // New Video Edit Pages
    '/video/edit/add-subtitles': {
        parent: '/video/edit',
        siblings: ['/video/edit/trim', '/video/edit/mute'],
        related: ['/video/compress', '/video/edit/trim']
    },

    // New Audio Convert Pages
    '/audio/convert/wav-to-ogg': {
        parent: '/audio/convert',
        siblings: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-mp3', '/audio/convert/mp3-to-ogg'],
        related: ['/audio/compress/mp3', '/audio/convert/wav-to-mp3']
    },
    '/audio/convert/mp3-to-ogg': {
        parent: '/audio/convert',
        siblings: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-ogg'],
        related: ['/audio/compress/mp3', '/audio/convert']
    },

    // New Audio Edit Pages
    '/audio/edit/volume': {
        parent: '/audio/edit',
        siblings: ['/audio/edit/trim'],
        related: ['/audio/compress/mp3', '/audio/edit/trim']
    },

    // New Image Edit Pages
    '/image/edit/blur': {
        parent: '/image/edit',
        siblings: ['/image/edit/grayscale', '/image/edit/brightness'],
        related: ['/image/compress', '/image/edit/grayscale']
    },
    '/image/edit/grayscale': {
        parent: '/image/edit',
        siblings: ['/image/edit/blur', '/image/edit/brightness'],
        related: ['/image/compress', '/image/edit/blur']
    },
    '/image/edit/brightness': {
        parent: '/image/edit',
        siblings: ['/image/edit/blur', '/image/edit/grayscale'],
        related: ['/image/compress', '/image/edit/grayscale']
    },

    // New PDF Pages
    '/pdf/add-watermark': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/merge', '/pdf/add-password'],
        related: ['/pdf/compress', '/pdf/add-password']
    },
    '/pdf/add-password': {
        parent: '/pdf',
        siblings: ['/pdf/compress', '/pdf/add-watermark'],
        related: ['/pdf/compress', '/pdf/add-watermark']
    },
    '/pdf/reorder-pages': {
        parent: '/pdf',
        siblings: ['/pdf/split', '/pdf/merge'],
        related: ['/pdf/split', '/pdf/merge']
    },

    // Developer Tools (expanded)
    '/dev/qr-code': {
        parent: '/dev',
        siblings: ['/dev/password-generator', '/dev/favicon-generator'],
        related: ['/dev/base64-encoder', '/dev/og-image-resizer']
    },
    '/dev/password-generator': {
        parent: '/dev',
        siblings: ['/dev/qr-code', '/dev/base64-encoder'],
        related: ['/dev/base64-encoder', '/dev/json-formatter']
    },
    '/dev/json-formatter': {
        parent: '/dev',
        siblings: ['/dev/regex-tester', '/dev/css-minifier'],
        related: ['/dev/regex-tester', '/dev/js-minifier']
    },
    '/dev/regex-tester': {
        parent: '/dev',
        siblings: ['/dev/json-formatter', '/dev/js-minifier'],
        related: ['/dev/json-formatter', '/dev/js-minifier']
    },
    '/dev/css-minifier': {
        parent: '/dev',
        siblings: ['/dev/html-minifier', '/dev/js-minifier'],
        related: ['/dev/html-minifier', '/dev/js-minifier']
    },
    '/dev/html-minifier': {
        parent: '/dev',
        siblings: ['/dev/css-minifier', '/dev/js-minifier'],
        related: ['/dev/css-minifier', '/dev/js-minifier']
    },
    '/dev/js-minifier': {
        parent: '/dev',
        siblings: ['/dev/css-minifier', '/dev/html-minifier'],
        related: ['/dev/css-minifier', '/dev/html-minifier']
    },
    '/dev/webcam-test': {
        parent: '/dev',
        siblings: ['/dev/favicon-generator', '/dev/og-image-resizer'],
        related: ['/screen/recorder', '/screen/screenshot']
    },
    '/dev/markdown-editor': {
        parent: '/dev',
        siblings: ['/dev/json-formatter', '/dev/base64-encoder'],
        related: ['/text/word-counter', '/dev/json-formatter']
    },

    // Color Tools Hub
    '/color': {
        parent: '/',
        children: ['/color/palette-generator', '/color/picker', '/color/converter', '/color/gradient-generator', '/color/contrast-checker'],
        related: ['/image/edit', '/image/compress']
    },
    '/color/palette-generator': {
        parent: '/color',
        siblings: ['/color/picker', '/color/converter', '/color/gradient-generator'],
        related: ['/color/converter', '/color/picker']
    },
    '/color/picker': {
        parent: '/color',
        siblings: ['/color/palette-generator', '/color/converter'],
        related: ['/color/palette-generator', '/color/converter']
    },
    '/color/converter': {
        parent: '/color',
        siblings: ['/color/picker', '/color/palette-generator'],
        related: ['/color/picker', '/color/contrast-checker']
    },
    '/color/gradient-generator': {
        parent: '/color',
        siblings: ['/color/palette-generator', '/color/contrast-checker'],
        related: ['/color/palette-generator', '/color/converter']
    },
    '/color/contrast-checker': {
        parent: '/color',
        siblings: ['/color/gradient-generator', '/color/picker'],
        related: ['/color/picker', '/color/converter']
    },

    // Screen Tools Hub
    '/screen': {
        parent: '/',
        children: ['/screen/recorder', '/screen/screenshot'],
        related: ['/dev/webcam-test', '/image/edit']
    },
    '/screen/recorder': {
        parent: '/screen',
        siblings: ['/screen/screenshot'],
        related: ['/screen/screenshot', '/dev/webcam-test']
    },
    '/screen/screenshot': {
        parent: '/screen',
        siblings: ['/screen/recorder'],
        related: ['/screen/recorder', '/image/edit/crop']
    },

    // Text Tools Hub
    '/text': {
        parent: '/',
        children: ['/text/word-counter', '/text/case-converter', '/text/lorem-ipsum', '/text/diff-checker', '/text/text-to-speech', '/text/base64-text', '/text/json-to-csv', '/text/html-to-text', '/text/word-frequency', '/text/slug-generator'],
        related: ['/dev', '/color']
    },
    '/text/word-counter': {
        parent: '/text',
        siblings: ['/text/case-converter', '/text/lorem-ipsum'],
        related: ['/text/case-converter', '/text/diff-checker']
    },
    '/text/case-converter': {
        parent: '/text',
        siblings: ['/text/word-counter', '/text/lorem-ipsum'],
        related: ['/text/word-counter', '/text/lorem-ipsum']
    },
    '/text/lorem-ipsum': {
        parent: '/text',
        siblings: ['/text/word-counter', '/text/case-converter'],
        related: ['/text/word-counter', '/text/diff-checker']
    },
    '/text/diff-checker': {
        parent: '/text',
        siblings: ['/text/word-counter', '/text/text-to-speech'],
        related: ['/text/word-counter', '/dev/json-formatter']
    },
    '/text/text-to-speech': {
        parent: '/text',
        siblings: ['/text/word-counter', '/text/diff-checker'],
        related: ['/text/word-counter', '/text/case-converter']
    },
    '/text/base64-text': {
        parent: '/text',
        siblings: ['/text/html-to-text', '/text/json-to-csv'],
        related: ['/dev/base64-encoder', '/dev/url-encoder']
    },
    '/text/json-to-csv': {
        parent: '/text',
        siblings: ['/text/base64-text', '/text/html-to-text'],
        related: ['/dev/json-formatter', '/text/word-counter']
    },
    '/text/html-to-text': {
        parent: '/text',
        siblings: ['/text/json-to-csv', '/text/slug-generator'],
        related: ['/dev/html-minifier', '/dev/html-entity-encoder']
    },
    '/text/word-frequency': {
        parent: '/text',
        siblings: ['/text/word-counter', '/text/slug-generator'],
        related: ['/text/word-counter', '/text/diff-checker']
    },
    '/text/slug-generator': {
        parent: '/text',
        siblings: ['/text/case-converter', '/text/word-frequency'],
        related: ['/text/case-converter', '/dev/url-encoder']
    },

    // Audio extra pages
    '/audio/convert/aac-to-mp3': {
        parent: '/audio/convert',
        siblings: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-mp3'],
        related: ['/audio/compress/mp3', '/video/convert']
    },
    '/audio/compress/wav': {
        parent: '/audio/compress',
        siblings: ['/audio/compress/mp3'],
        related: ['/audio/convert/wav-to-mp3', '/audio/compress/mp3']
    },
    '/audio/edit/merge': {
        parent: '/audio/edit',
        siblings: ['/audio/edit/trim', '/audio/edit/volume'],
        related: ['/audio/edit/trim', '/video/edit']
    },

    // Calculators Hub
    '/calc': {
        parent: '/',
        children: ['/calc/percentage', '/calc/loan', '/calc/bmi', '/calc/age', '/calc/date-difference', '/calc/tip', '/calc/discount', '/calc/scientific'],
        related: ['/convert', '/dev']
    },
    '/calc/percentage': {
        parent: '/calc',
        siblings: ['/calc/discount', '/calc/tip'],
        related: ['/calc/discount', '/calc/tip']
    },
    '/calc/loan': {
        parent: '/calc',
        siblings: ['/calc/percentage', '/calc/bmi'],
        related: ['/calc/percentage', '/calc/discount']
    },
    '/calc/bmi': {
        parent: '/calc',
        siblings: ['/calc/age', '/calc/date-difference'],
        related: ['/calc/age', '/convert/weight']
    },
    '/calc/age': {
        parent: '/calc',
        siblings: ['/calc/bmi', '/calc/date-difference'],
        related: ['/calc/date-difference', '/calc/bmi']
    },
    '/calc/date-difference': {
        parent: '/calc',
        siblings: ['/calc/age', '/dev/timestamp-converter'],
        related: ['/calc/age', '/dev/timestamp-converter']
    },
    '/calc/tip': {
        parent: '/calc',
        siblings: ['/calc/percentage', '/calc/discount'],
        related: ['/calc/percentage', '/calc/discount']
    },
    '/calc/discount': {
        parent: '/calc',
        siblings: ['/calc/percentage', '/calc/tip'],
        related: ['/calc/percentage', '/calc/tip']
    },
    '/calc/scientific': {
        parent: '/calc',
        siblings: ['/calc/percentage', '/calc/loan'],
        related: ['/dev/number-base', '/convert/length']
    },

    // Unit Converters Hub
    '/convert': {
        parent: '/',
        children: ['/convert/length', '/convert/weight', '/convert/temperature', '/convert/speed', '/convert/area', '/convert/data-size', '/convert/time'],
        related: ['/calc', '/dev']
    },
    '/convert/length': {
        parent: '/convert',
        siblings: ['/convert/area', '/convert/speed'],
        related: ['/convert/area', '/convert/speed']
    },
    '/convert/weight': {
        parent: '/convert',
        siblings: ['/convert/length', '/convert/temperature'],
        related: ['/calc/bmi', '/convert/length']
    },
    '/convert/temperature': {
        parent: '/convert',
        siblings: ['/convert/weight', '/convert/speed'],
        related: ['/convert/speed', '/dev/timestamp-converter']
    },
    '/convert/speed': {
        parent: '/convert',
        siblings: ['/convert/length', '/convert/temperature'],
        related: ['/convert/length', '/convert/time']
    },
    '/convert/area': {
        parent: '/convert',
        siblings: ['/convert/length', '/convert/weight'],
        related: ['/convert/length', '/convert/weight']
    },
    '/convert/data-size': {
        parent: '/convert',
        siblings: ['/convert/time', '/convert/speed'],
        related: ['/dev/number-base', '/convert/time']
    },
    '/convert/time': {
        parent: '/convert',
        siblings: ['/convert/data-size', '/convert/speed'],
        related: ['/calc/date-difference', '/dev/timestamp-converter']
    },

    // Finance Hub
    '/finance': {
        parent: '/',
        children: ['/finance/compound-interest', '/finance/roi-calculator', '/finance/vat-calculator'],
        related: ['/calc', '/calc/loan', '/calc/percentage']
    },
    '/finance/compound-interest': {
        parent: '/finance',
        siblings: ['/finance/roi-calculator', '/finance/vat-calculator'],
        related: ['/calc/loan', '/calc/percentage']
    },
    '/finance/roi-calculator': {
        parent: '/finance',
        siblings: ['/finance/compound-interest', '/finance/vat-calculator'],
        related: ['/calc/percentage', '/finance/compound-interest']
    },
    '/finance/vat-calculator': {
        parent: '/finance',
        siblings: ['/finance/compound-interest', '/finance/roi-calculator'],
        related: ['/calc/percentage', '/calc/discount']
    },

    // Health Hub
    '/health': {
        parent: '/',
        children: ['/health/calorie-calculator', '/health/ideal-weight'],
        related: ['/calc/bmi', '/calc']
    },
    '/health/calorie-calculator': {
        parent: '/health',
        siblings: ['/health/ideal-weight'],
        related: ['/calc/bmi', '/health/ideal-weight']
    },
    '/health/ideal-weight': {
        parent: '/health',
        siblings: ['/health/calorie-calculator'],
        related: ['/calc/bmi', '/convert/weight']
    },

    // Long-tail conversion pages (Option C)
    '/celsius-to-fahrenheit': {
        parent: '/convert/temperature',
        siblings: ['/fahrenheit-to-celsius'],
        related: ['/convert/temperature', '/fahrenheit-to-celsius']
    },
    '/fahrenheit-to-celsius': {
        parent: '/convert/temperature',
        siblings: ['/celsius-to-fahrenheit'],
        related: ['/convert/temperature', '/celsius-to-fahrenheit']
    },
    '/kg-to-lbs': {
        parent: '/convert/weight',
        siblings: ['/lbs-to-kg'],
        related: ['/convert/weight', '/lbs-to-kg', '/calc/bmi']
    },
    '/lbs-to-kg': {
        parent: '/convert/weight',
        siblings: ['/kg-to-lbs'],
        related: ['/convert/weight', '/kg-to-lbs', '/calc/bmi']
    },
    '/cm-to-feet': {
        parent: '/convert/length',
        siblings: ['/convert/length'],
        related: ['/convert/length', '/calc/bmi']
    },
    '/percentage-calculator-online': {
        parent: '/calc/percentage',
        related: ['/calc/percentage', '/calc/discount']
    },
    '/bmi-calculator-metric': {
        parent: '/calc/bmi',
        related: ['/calc/bmi', '/health/ideal-weight']
    },
    '/loan-payment-calculator': {
        parent: '/calc/loan',
        related: ['/calc/loan', '/finance/compound-interest']
    },

    // Trust Pages
    '/about': {
        parent: '/',
        siblings: ['/privacy', '/terms'],
        related: ['/image']
    },
    '/privacy': {
        parent: '/',
        siblings: ['/about', '/terms'],
        related: []
    },
    '/terms': {
        parent: '/',
        siblings: ['/about', '/privacy'],
        related: []
    }
};

/**
 * Get links for a specific path
 */
export function getLinksByPath(pathname) {
    return topicalGraph[pathname] || {};
}

/**
 * Get all parent links for breadcrumb
 */
export function getParentChain(pathname) {
    const chain = [];
    let current = pathname;

    while (current && topicalGraph[current]) {
        const node = topicalGraph[current];
        if (node.parent) {
            chain.unshift(node.parent);
            current = node.parent;
        } else {
            break;
        }
    }

    return chain;
}

/**
 * Check if page is orphan (has no parent)
 */
export function isOrphanPage(pathname) {
    if (pathname === '/') return false;
    const node = topicalGraph[pathname];
    return !node || !node.parent;
}

/**
 * Get all orphan pages (for validation)
 */
export function getOrphanPages() {
    return Object.keys(topicalGraph).filter(path =>
        path !== '/' && isOrphanPage(path)
    );
}

/**
 * Validate topical graph (no orphans except homepage)
 */
export function validateTopicalGraph() {
    const orphans = getOrphanPages();
    return {
        valid: orphans.length === 0,
        orphans
    };
}
