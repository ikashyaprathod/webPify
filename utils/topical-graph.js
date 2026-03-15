// Topical Graph Mapping

/**
 * Complete topical graph for WebPify
 * Defines parent-child-sibling relationships for all pages
 */
export const topicalGraph = {
    '/': {
        children: ['/image', '/video', '/gif', '/svg', '/pdf', '/audio', '/dev', '/about', '/privacy', '/terms'],
        related: ['/image/compress', '/image/convert', '/video/compress', '/gif/compress', '/image/resize', '/svg/optimize']
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
        children: ['/audio/convert/mp3-to-wav', '/audio/convert/wav-to-mp3'],
        related: ['/audio/compress', '/video/convert']
    },

    // Audio Edit Hub
    '/audio/edit': {
        parent: '/audio',
        siblings: ['/audio/compress', '/audio/convert'],
        children: ['/audio/edit/trim'],
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
        children: ['/dev/favicon-generator', '/dev/og-image-resizer', '/dev/base64-encoder'],
        related: ['/image/convert', '/image/compress']
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

    // Video Hub
    '/video': {
        parent: '/',
        children: ['/video/compress', '/video/convert', '/video/edit'],
        related: ['/image/compress', '/image/convert', '/gif/compress', '/audio/compress']
    },

    // GIF Hub
    '/gif': {
        parent: '/',
        children: ['/gif/compress', '/gif/convert'],
        related: ['/video/compress', '/image/compress']
    },

    // SVG Hub
    '/svg': {
        parent: '/',
        children: ['/svg/optimize'],
        related: ['/image/compress', '/image/convert']
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
        children: ['/image/edit/compare', '/image/edit/crop', '/image/edit/rotate', '/image/edit/watermark', '/image/edit/remove-background', '/image/edit/color-picker', '/image/edit/metadata'],
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
        children: ['/video/convert/video-to-gif', '/video/convert/mp4-to-webm', '/video/convert/mp4-to-mp3'],
        related: ['/gif/compress', '/video/compress', '/audio/compress']
    },

    // Video Edit Hub
    '/video/edit': {
        parent: '/video',
        siblings: ['/video/compress', '/video/convert'],
        children: ['/video/edit/trim', '/video/edit/mute', '/video/edit/screenshot'],
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
        children: ['/pdf/pdf-to-jpg', '/pdf/compress', '/pdf/merge', '/pdf/split', '/pdf/rotate', '/pdf/jpg-to-pdf'],
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
