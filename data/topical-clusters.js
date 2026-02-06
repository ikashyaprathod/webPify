// Topical Cluster Hierarchy

/**
 * Complete topical cluster definition for WebPify
 * Defines hierarchy from root to leaf topics
 */
export const topicalClusters = {
    // ROOT CLUSTER
    'image-optimization': {
        id: 'image-optimization',
        name: 'Image Optimization',
        parent: null,
        level: 0,
        children: ['image-compression', 'image-conversion', 'image-formats', 'web-performance', 'seo-vitals'],
        pages: ['/image'],
        targetQueries: ['image optimization', 'optimize images', 'image optimization tools']
    },

    // LEVEL 1 CLUSTERS
    'image-compression': {
        id: 'image-compression',
        name: 'Image Compression',
        parent: 'image-optimization',
        level: 1,
        children: ['png-compression', 'jpeg-compression', 'webp-compression', 'compression-types'],
        pages: ['/image/compressor'],
        targetQueries: ['image compression', 'compress images', 'image compressor']
    },

    'image-conversion': {
        id: 'image-conversion',
        name: 'Image Conversion',
        parent: 'image-optimization',
        level: 1,
        children: ['png-conversion', 'jpeg-conversion', 'webp-conversion', 'format-conversion'],
        pages: ['/image/converter'],
        targetQueries: ['image conversion', 'convert images', 'image converter']
    },

    'image-formats': {
        id: 'image-formats',
        name: 'Image Formats',
        parent: 'image-optimization',
        level: 1,
        children: ['png-format', 'jpeg-format', 'webp-format', 'format-comparison'],
        pages: ['/image/compare'],
        targetQueries: ['image formats', 'best image format', 'image format comparison']
    },

    'web-performance': {
        id: 'web-performance',
        name: 'Web Performance',
        parent: 'image-optimization',
        level: 1,
        children: [],
        pages: [],
        targetQueries: ['web performance', 'page speed', 'website optimization']
    },

    'seo-vitals': {
        id: 'seo-vitals',
        name: 'SEO & Core Web Vitals',
        parent: 'image-optimization',
        level: 1,
        children: [],
        pages: [],
        targetQueries: ['seo optimization', 'core web vitals', 'lcp optimization']
    },

    // LEVEL 2 CLUSTERS - COMPRESSION
    'png-compression': {
        id: 'png-compression',
        name: 'PNG Compression',
        parent: 'image-compression',
        level: 2,
        children: [],
        pages: ['/image/compressor/png'],
        leafTopics: [
            'png compression online',
            'compress png without losing quality',
            'reduce png file size',
            'png compression ratio',
            'png file size reducer',
            'optimize png images',
            'shrink png files',
            'png image compressor',
            'lossless png compression',
            'png transparency compression'
        ],
        entities: ['PNG', 'pngquant', 'lossless compression', 'transparency', 'alpha channel', 'color depth']
    },

    'jpeg-compression': {
        id: 'jpeg-compression',
        name: 'JPEG Compression',
        parent: 'image-compression',
        level: 2,
        children: [],
        pages: ['/image/compressor/jpeg'],
        leafTopics: [
            'jpeg compression online',
            'compress jpeg images',
            'reduce jpeg file size',
            'jpeg quality optimization',
            'jpg compressor',
            'optimize jpeg for web',
            'shrink jpeg files',
            'jpeg image compression',
            'lossy jpeg compression',
            'jpeg compression quality'
        ],
        entities: ['JPEG', 'JPG', 'mozjpeg', 'lossy compression', 'compression quality', 'chroma subsampling']
    },

    'webp-compression': {
        id: 'webp-compression',
        name: 'WebP Compression',
        parent: 'image-compression',
        level: 2,
        children: [],
        pages: ['/image/compressor/webp'],
        leafTopics: [
            'webp compression online',
            'compress webp images',
            'reduce webp file size',
            'webp optimization',
            'webp compressor',
            'optimize webp for web',
            'shrink webp files'
        ],
        entities: ['WebP', 'Google WebP', 'lossy webp', 'lossless webp', 'modern format']
    },

    'compression-types': {
        id: 'compression-types',
        name: 'Compression Types',
        parent: 'image-compression',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'lossy vs lossless compression',
            'lossless image compression',
            'lossy image compression',
            'compression algorithms'
        ],
        entities: ['lossy', 'lossless', 'compression algorithm', 'quality loss']
    },

    // LEVEL 2 CLUSTERS - CONVERSION
    'png-conversion': {
        id: 'png-conversion',
        name: 'PNG Conversion',
        parent: 'image-conversion',
        level: 2,
        children: [],
        pages: ['/image/converter/png'],
        leafTopics: [
            'convert to png',
            'jpg to png converter',
            'webp to png converter',
            'image to png conversion'
        ],
        entities: ['PNG conversion', 'format conversion', 'image encoding']
    },

    'jpeg-conversion': {
        id: 'jpeg-conversion',
        name: 'JPEG Conversion',
        parent: 'image-conversion',
        level: 2,
        children: [],
        pages: ['/image/converter/jpeg'],
        leafTopics: [
            'convert to jpeg',
            'png to jpeg converter',
            'webp to jpeg converter',
            'image to jpg conversion'
        ],
        entities: ['JPEG conversion', 'JPG conversion', 'format encoding']
    },

    'webp-conversion': {
        id: 'webp-conversion',
        name: 'WebP Conversion',
        parent: 'image-conversion',
        level: 2,
        children: [],
        pages: ['/image/converter/webp'],
        leafTopics: [
            'convert to webp',
            'png to webp converter',
            'jpeg to webp converter',
            'jpg to webp',
            'image to webp conversion'
        ],
        entities: ['WebP conversion', 'modern format conversion', 'next-gen format']
    },

    'format-conversion': {
        id: 'format-conversion',
        name: 'Format Conversion',
        parent: 'image-conversion',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'image format conversion',
            'convert image formats',
            'change image format'
        ],
        entities: ['format conversion', 'image encoding', 'format compatibility']
    },

    // LEVEL 2 CLUSTERS - FORMATS
    'png-format': {
        id: 'png-format',
        name: 'PNG Format',
        parent: 'image-formats',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'what is png',
            'png format explained',
            'png use cases',
            'when to use png'
        ],
        entities: ['PNG', 'Portable Network Graphics', 'transparency support']
    },

    'jpeg-format': {
        id: 'jpeg-format',
        name: 'JPEG Format',
        parent: 'image-formats',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'what is jpeg',
            'jpeg format explained',
            'jpeg use cases',
            'when to use jpeg'
        ],
        entities: ['JPEG', 'JPG', 'Joint Photographic Experts Group', 'lossy format']
    },

    'webp-format': {
        id: 'webp-format',
        name: 'WebP Format',
        parent: 'image-formats',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'what is webp',
            'webp format explained',
            'webp browser support',
            'when to use webp'
        ],
        entities: ['WebP', 'Google WebP', 'next-gen format', 'modern image format']
    },

    'format-comparison': {
        id: 'format-comparison',
        name: 'Format Comparison',
        parent: 'image-formats',
        level: 2,
        children: [],
        pages: [],
        leafTopics: [
            'png vs jpeg',
            'webp vs png',
            'jpeg vs webp',
            'best image format for seo',
            'best image format for web'
        ],
        entities: ['format comparison', 'compression ratio', 'quality vs size']
    }
};

/**
 * Get cluster by ID
 */
export function getCluster(clusterId) {
    return topicalClusters[clusterId];
}

/**
 * Get all children of a cluster
 */
export function getChildren(clusterId) {
    const cluster = topicalClusters[clusterId];
    if (!cluster || !cluster.children) return [];

    return cluster.children.map(childId => topicalClusters[childId]);
}

/**
 * Get parent cluster
 */
export function getParent(clusterId) {
    const cluster = topicalClusters[clusterId];
    if (!cluster || !cluster.parent) return null;

    return topicalClusters[cluster.parent];
}

/**
 * Get all clusters at a specific level
 */
export function getClustersByLevel(level) {
    return Object.values(topicalClusters).filter(c => c.level === level);
}

/**
 * Get leaf topics for a cluster
 */
export function getLeafTopics(clusterId) {
    const cluster = topicalClusters[clusterId];
    return cluster?.leafTopics || [];
}

/**
 * Get entities for a cluster
 */
export function getEntities(clusterId) {
    const cluster = topicalClusters[clusterId];
    return cluster?.entities || [];
}

/**
 * Get all entities (flattened)
 */
export function getAllEntities() {
    const entities = new Set();

    Object.values(topicalClusters).forEach(cluster => {
        if (cluster.entities) {
            cluster.entities.forEach(entity => entities.add(entity));
        }
    });

    return Array.from(entities);
}
