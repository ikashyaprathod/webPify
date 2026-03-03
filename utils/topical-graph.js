// Topical Graph Mapping

/**
 * Complete topical graph for WebPify
 * Defines parent-child-sibling relationships for all pages
 */
export const topicalGraph = {
    '/': {
        children: ['/image', '/video', '/about', '/privacy', '/terms'],
        related: ['/image/compressor', '/image/converter', '/video/compressor']
    },

    // Master Hub
    '/image': {
        parent: '/',
        children: ['/image/compressor', '/image/converter', '/image/compare'],
        related: ['/video/compressor']
    },

    // Video Hub
    '/video': {
        parent: '/',
        children: ['/video/compressor'],
        related: ['/image/compressor', '/image/converter']
    },

    // Tool Hubs
    '/image/compressor': {
        parent: '/image',
        siblings: ['/image/converter'],
        children: ['/image/compressor/png', '/image/compressor/jpeg', '/image/compressor/webp'],
        related: ['/image/compare', '/video/compressor']
    },
    '/image/converter': {
        parent: '/image',
        siblings: ['/image/compressor'],
        children: ['/image/converter/png', '/image/converter/jpeg', '/image/converter/webp'],
        related: ['/image/compare', '/video/compressor']
    },

    // Video Compressor Hub
    '/video/compressor': {
        parent: '/video',
        siblings: [],
        children: ['/video/compressor/mp4', '/video/compressor/webm', '/video/compressor/mov'],
        related: ['/image/compressor', '/image/converter', '/compress-mp4-online', '/compress-video-for-website']
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
