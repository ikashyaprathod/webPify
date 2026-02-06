// Anchor Text Variations for Internal Links

/**
 * Anchor text variations for all tools
 * Rotate to avoid exact-match repetition
 */
export const anchorVariations = {
    // Compressor tools
    'png-compressor': [
        'PNG image compressor',
        'compress PNG files',
        'reduce PNG file size',
        'optimize PNG images',
        'PNG compression tool'
    ],
    'jpeg-compressor': [
        'JPEG image compressor',
        'compress JPEG files',
        'reduce JPEG file size',
        'optimize JPEG images',
        'JPEG compression tool'
    ],
    'webp-compressor': [
        'WebP image compressor',
        'compress WebP files',
        'reduce WebP file size',
        'optimize WebP images',
        'WebP compression tool'
    ],

    // Converter tools
    'png-converter': [
        'convert images to PNG',
        'PNG image converter',
        'image to PNG converter',
        'convert to PNG format'
    ],
    'jpeg-converter': [
        'convert images to JPEG',
        'JPEG image converter',
        'image to JPEG converter',
        'convert to JPEG format'
    ],
    'webp-converter': [
        'convert images to WebP',
        'WebP image converter',
        'image to WebP converter',
        'convert to WebP format'
    ],

    // Hubs
    'compressor-hub': [
        'image compressor',
        'compression tools',
        'compress images',
        'image compression'
    ],
    'converter-hub': [
        'image converter',
        'conversion tools',
        'convert images',
        'image conversion'
    ],

    // Comparison
    'tool-comparison': [
        'compressor vs converter',
        'compare tools',
        'which tool to use',
        'tool comparison'
    ]
};

/**
 * Get anchor text for a tool
 * @param {string} toolId - Tool identifier
 * @param {number} seed - Seed for rotation (default: random)
 * @returns {string} Anchor text
 */
export function getAnchorText(toolId, seed = null) {
    const variations = anchorVariations[toolId];
    if (!variations || variations.length === 0) {
        return toolId.replace(/-/g, ' ');
    }

    const index = seed !== null
        ? seed % variations.length
        : Math.floor(Math.random() * variations.length);

    return variations[index];
}

/**
 * Get all anchor variations for a tool
 */
export function getAllAnchors(toolId) {
    return anchorVariations[toolId] || [];
}

/**
 * Tool ID mapping for URL to anchor lookup
 */
export const urlToToolId = {
    '/image/compressor/png': 'png-compressor',
    '/image/compressor/jpeg': 'jpeg-compressor',
    '/image/compressor/webp': 'webp-compressor',
    '/image/converter/png': 'png-converter',
    '/image/converter/jpeg': 'jpeg-converter',
    '/image/converter/webp': 'webp-converter',
    '/image/compressor': 'compressor-hub',
    '/image/converter': 'converter-hub',
    '/image/compare': 'tool-comparison'
};

/**
 * Get anchor text for a URL
 */
export function getAnchorForUrl(url, seed = null) {
    const toolId = urlToToolId[url];
    return toolId ? getAnchorText(toolId, seed) : url;
}

/**
 * Get anchor text variations for a path
 * Used by AI link optimizer
 */
export function getAnchorVariations(path) {
    const variations = [];

    // Check if path exists in URL to tool ID mapping
    const toolId = urlToToolId[path];
    if (toolId) {
        return anchorVariations[toolId] || [];
    }

    // Generate variations based on path components
    const format = extractFormat(path);
    const action = extractAction(path);
    const intent = extractIntent(path);

    if (format && action) {
        variations.push(
            `${format.toUpperCase()} ${action}or`,
            `${action} ${format.toUpperCase()} images`,
            `${format.toUpperCase()} compression tool`,
            `${action} ${format.toUpperCase()} online`,
            `free ${format.toUpperCase()} ${action}or`
        );

        if (intent) {
            variations.push(
                `${action} ${format.toUpperCase()} ${intent}`,
                `${format.toUpperCase()} ${action}ion ${intent}`
            );
        }
    }

    return variations.length > 0 ? variations : [path.replace(/\//g, ' ').trim()];
}

function extractFormat(path) {
    if (path.includes('png')) return 'png';
    if (path.includes('jpeg') || path.includes('jpg')) return 'jpeg';
    if (path.includes('webp')) return 'webp';
    return null;
}

function extractAction(path) {
    if (path.includes('compress')) return 'compress';
    if (path.includes('reduce')) return 'reduce';
    if (path.includes('optimize')) return 'optimize';
    if (path.includes('shrink')) return 'shrink';
    if (path.includes('convert')) return 'convert';
    return null;
}

function extractIntent(path) {
    if (path.includes('for-seo')) return 'for SEO';
    if (path.includes('for-website')) return 'for website';
    if (path.includes('online')) return 'online';
    if (path.includes('without-losing-quality')) return 'without losing quality';
    return null;
}

