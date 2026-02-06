// Topical Graph Mapping

/**
 * Complete topical graph for WebPify
 * Defines parent-child-sibling relationships for all pages
 */
export const topicalGraph = {
    '/': {
        children: ['/image', '/about', '/privacy', '/terms'],
        related: ['/image/compressor', '/image/converter', '/image/compare']
    },

    // Master Hub
    '/image': {
        parent: '/',
        children: ['/image/compressor', '/image/converter', '/image/compare'],
        related: []
    },

    // Tool Hubs
    '/image/compressor': {
        parent: '/image',
        siblings: ['/image/converter'],
        children: ['/image/compressor/png', '/image/compressor/jpeg', '/image/compressor/webp'],
        related: ['/image/compare']
    },
    '/image/converter': {
        parent: '/image',
        siblings: ['/image/compressor'],
        children: ['/image/converter/png', '/image/converter/jpeg', '/image/converter/webp'],
        related: ['/image/compare']
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
