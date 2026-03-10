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
        related: ['/image/compressor', '/svg-optimizer']
    },
    '/image/resizer/png': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/jpeg', '/image/resizer/webp'],
        related: ['/image/compressor/png']
    },
    '/image/resizer/jpeg': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/png', '/image/resizer/webp'],
        related: ['/image/compressor/jpeg']
    },
    '/image/resizer/webp': {
        parent: '/image/resizer',
        siblings: ['/image/resizer/png', '/image/resizer/jpeg'],
        related: ['/image/compressor/webp']
    },

    // Video Compressor Hub
    '/video/compressor': {
        parent: '/video',
        siblings: ['/video/to-gif'],
        children: ['/video/compressor/mp4', '/video/compressor/webm', '/video/compressor/mov'],
        related: ['/image/compressor', '/image/converter', '/gif/compressor']
    },

    // Video Compressor Format Pages
    '/video/compressor/mp4': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/webm', '/video/compressor/mov'],
        related: ['/image/compressor', '/gif/compressor']
    },
    '/video/compressor/webm': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/mp4', '/video/compressor/mov'],
        related: ['/image/compressor', '/gif/compressor']
    },
    '/video/compressor/mov': {
        parent: '/video/compressor',
        siblings: ['/video/compressor/mp4', '/video/compressor/webm'],
        related: ['/image/compressor', '/gif/compressor']
    },

    // Video to GIF
    '/video/to-gif': {
        parent: '/video',
        siblings: ['/video/compressor'],
        related: ['/gif/compressor', '/gif/compressor/mp4']
    },

    // GIF Compressor Hub
    '/gif/compressor': {
        parent: '/gif',
        children: ['/gif/compressor/gif', '/gif/compressor/mp4', '/gif/compressor/webm'],
        related: ['/video/to-gif', '/video/compressor', '/image/compressor']
    },
    '/gif/compressor/gif': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/mp4', '/gif/compressor/webm'],
        related: ['/gif/compressor/mp4', '/video/to-gif']
    },
    '/gif/compressor/mp4': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/gif', '/gif/compressor/webm'],
        related: ['/video/compressor', '/gif/compressor/webm']
    },
    '/gif/compressor/webm': {
        parent: '/gif/compressor',
        siblings: ['/gif/compressor/gif', '/gif/compressor/mp4'],
        related: ['/gif/compressor/mp4', '/video/compressor']
    },

    // SVG Optimizer
    '/svg-optimizer': {
        parent: '/',
        related: ['/image/compressor', '/image/converter', '/image/resizer']
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
        related: ['/image/converter/png']
    },
    '/image/compressor/jpeg': {
        parent: '/image/compressor',
        grandparent: '/image',
        siblings: ['/image/compressor/png', '/image/compressor/webp'],
        related: ['/image/converter/jpeg']
    },
    '/image/compressor/webp': {
        parent: '/image/compressor',
        grandparent: '/image',
        siblings: ['/image/compressor/png', '/image/compressor/jpeg'],
        related: ['/image/converter/webp']
    },

    // Converter Format Pages
    '/image/converter/png': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/jpeg', '/image/converter/webp'],
        related: ['/image/compressor/png']
    },
    '/image/converter/jpeg': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/png', '/image/converter/webp'],
        related: ['/image/compressor/jpeg']
    },
    '/image/converter/webp': {
        parent: '/image/converter',
        grandparent: '/image',
        siblings: ['/image/converter/png', '/image/converter/jpeg'],
        related: ['/image/compressor/webp']
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
