// Topical Graph Mapping

/**
 * Complete topical graph for WebPify
 * Defines parent-child-sibling relationships for all pages
 */
export const topicalGraph = {
    '/': {
        children: ['/image', '/video', '/gif', '/about', '/privacy', '/terms'],
        related: ['/image/compressor', '/image/converter', '/video/compressor', '/gif/compressor', '/image/resizer', '/svg-optimizer']
    },

    // Master Hub
    '/image': {
        parent: '/',
        children: ['/image/compressor', '/image/converter', '/image/compare', '/image/resizer'],
        related: ['/video/compressor', '/gif/compressor', '/svg-optimizer']
    },

    // Video Hub
    '/video': {
        parent: '/',
        children: ['/video/compressor', '/video/to-gif'],
        related: ['/image/compressor', '/image/converter', '/gif/compressor']
    },

    // GIF Hub
    '/gif': {
        parent: '/',
        children: ['/gif/compressor'],
        related: ['/video/compressor', '/image/compressor']
    },

    // Tool Hubs
    '/image/compressor': {
        parent: '/image',
        siblings: ['/image/converter', '/image/resizer'],
        children: ['/image/compressor/png', '/image/compressor/jpeg', '/image/compressor/webp'],
        related: ['/image/compare', '/video/compressor', '/gif/compressor', '/image/resizer']
    },
    '/image/converter': {
        parent: '/image',
        siblings: ['/image/compressor', '/image/resizer'],
        children: ['/image/converter/png', '/image/converter/jpeg', '/image/converter/webp'],
        related: ['/image/compare', '/video/compressor']
    },
    '/image/resizer': {
        parent: '/image',
        siblings: ['/image/compressor', '/image/converter'],
        children: ['/image/resizer/png', '/image/resizer/jpeg', '/image/resizer/webp'],
        related: ['/image/compressor', '/svg-optimizer', '/resize-image-online']
    },
    '/image/resizer/png': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/jpeg', '/image/resizer/webp'],
        related: ['/image/compressor/png', '/resize-image-online']
    },
    '/image/resizer/jpeg': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/png', '/image/resizer/webp'],
        related: ['/image/compressor/jpeg', '/resize-image-online']
    },
    '/image/resizer/webp': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/png', '/image/resizer/jpeg'],
        related: ['/image/compressor/webp', '/resize-image-online']
    },

    // Video Compressor Hub
    '/video/compressor': {
        parent: '/video',
        siblings: ['/video/to-gif'],
        children: ['/video/compressor/mp4', '/video/compressor/webm', '/video/compressor/mov'],
        related: ['/image/compressor', '/image/converter', '/compress-mp4-online', '/compress-video-for-website', '/gif/compressor']
    },

    // Video Compressor Format Pages
    '/video/compressor/mp4': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/webm', '/video/compressor/mov'],
        related: ['/compress-mp4-online', '/reduce-mp4-file-size', '/image/compressor']
    },
    '/video/compressor/webm': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/mp4', '/video/compressor/mov'],
        related: ['/compress-video-for-website', '/image/compressor']
    },
    '/video/compressor/mov': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/mp4', '/video/compressor/webm'],
        related: ['/compress-mp4-online', '/image/compressor']
    },

    // Video to GIF
    '/video/to-gif': {
        parent: '/video',
        siblings: ['/video/compressor'],
        related: ['/gif/compressor', '/gif/compressor/mp4', '/video-to-gif']
    },

    // GIF Compressor Hub
    '/gif/compressor': {
        parent: '/gif',
        children: ['/gif/compressor/gif', '/gif/compressor/mp4', '/gif/compressor/webm'],
        related: ['/video/to-gif', '/video/compressor', '/image/compressor', '/gif-to-mp4', '/compress-gif-online']
    },
    '/gif/compressor/gif': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/mp4', '/gif/compressor/webm'],
        related: ['/compress-gif-online', '/gif/compressor/mp4', '/video/to-gif']
    },
    '/gif/compressor/mp4': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/gif', '/gif/compressor/webm'],
        related: ['/gif-to-mp4', '/video/compressor', '/gif/compressor/webm']
    },
    '/gif/compressor/webm': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/gif', '/gif/compressor/mp4'],
        related: ['/gif/compressor/mp4', '/video/compressor']
    },

    // SVG Optimizer
    '/svg-optimizer': {
        parent: '/',
        related: ['/image/compressor', '/image/converter', '/image/resizer', '/optimize-svg-online']
    },

    // Video Programmatic Pages
    '/compress-mp4-online': {
        parent: '/video/compressor',
        related: ['/video/compressor/mp4', '/reduce-mp4-file-size', '/compress-video-for-website', '/image/compressor']
    },
    '/reduce-mp4-file-size': {
        parent: '/video/compressor',
        related: ['/compress-mp4-online', '/shrink-video-without-losing-quality', '/image/compressor']
    },
    '/compress-video-for-website': {
        parent: '/video/compressor',
        related: ['/compress-video-for-seo', '/compress-mp4-online', '/image/compressor']
    },
    '/compress-video-for-seo': {
        parent: '/video/compressor',
        related: ['/compress-video-for-website', '/shrink-video-without-losing-quality', '/image/compressor']
    },
    '/shrink-video-without-losing-quality': {
        parent: '/video/compressor',
        related: ['/reduce-video-file-size-without-losing-quality', '/reduce-mp4-file-size', '/compress-mp4-online', '/image/compressor']
    },
    '/reduce-video-file-size-without-losing-quality': {
        parent: '/video/compressor',
        related: ['/shrink-video-without-losing-quality', '/reduce-mp4-file-size', '/compress-video-for-seo', '/image/compressor']
    },

    // GIF Programmatic Pages
    '/gif-to-mp4': {
        parent: '/gif/compressor',
        related: ['/gif/compressor/mp4', '/video-to-gif', '/compress-gif-online', '/video/compressor']
    },
    '/compress-gif-online': {
        parent: '/gif/compressor',
        related: ['/gif/compressor/gif', '/gif-to-mp4', '/image/compressor']
    },
    '/video-to-gif': {
        parent: '/video/to-gif',
        related: ['/video/to-gif', '/gif/compressor', '/gif-to-mp4']
    },

    // Image Programmatic Pages
    '/resize-image-online': {
        parent: '/image/resizer',
        related: ['/image/resizer', '/image/compressor', '/optimize-svg-online']
    },
    '/optimize-svg-online': {
        parent: '/svg-optimizer',
        related: ['/svg-optimizer', '/image/compressor', '/resize-image-online']
    },

    '/image/compare': {
        parent: '/image',
        siblings: ['/image/compressor', '/image/converter'],
        related: []
    },

    // Compressor Format Pages
    '/image/compressor/png': {
        parent: '/image/compressor',
        grandparent: '/image',
        siblings: ['/image/compressor/jpeg', '/image/compressor/webp'],
        related: ['/image/converter/png', '/compress-png-online', '/reduce-png-file-size', '/shrink-png-images']
    },
    '/image/compressor/jpeg': {
        parent: '/image/compressor',
        grandparent: '/image',
        siblings: ['/image/compressor/png', '/image/compressor/webp'],
        related: ['/image/converter/jpeg', '/compress-jpeg-online', '/reduce-jpeg-file-size', '/shrink-jpeg-images']
    },
    '/image/compressor/webp': {
        parent: '/image/compressor',
        grandparent: '/image',
        siblings: ['/image/compressor/png', '/image/compressor/jpeg'],
        related: ['/image/converter/webp', '/compress-webp-online', '/reduce-webp-file-size', '/shrink-webp-images']
    },

    // Converter Format Pages
    '/image/converter/png': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/jpeg', '/image/converter/webp'],
        related: ['/image/compressor/png', '/convert-to-png', '/jpeg-to-png-converter', '/webp-to-png-converter']
    },
    '/image/converter/jpeg': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/png', '/image/converter/webp'],
        related: ['/image/compressor/jpeg', '/convert-to-jpeg', '/png-to-jpeg-converter', '/webp-to-jpeg-converter']
    },
    '/image/converter/webp': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/png', '/image/converter/jpeg'],
        related: ['/image/compressor/webp', '/convert-to-webp', '/png-to-webp-converter', '/jpeg-to-webp-converter']
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
