// Programmatic Page Generation System

/**
 * Page generation matrix configuration
 */
const actions = ['compress', 'reduce', 'shrink', 'optimize', 'convert'];
const formats = ['png', 'jpeg', 'jpg', 'webp'];
const intents = [
    { slug: 'online', label: 'Online', priority: 'high' },
    { slug: 'for-website', label: 'for Website', priority: 'high' },
    { slug: 'for-seo', label: 'for SEO', priority: 'high' },
    { slug: 'without-losing-quality', label: 'Without Losing Quality', priority: 'high' },
    { slug: 'free', label: 'Free', priority: 'medium' },
    { slug: 'file-size', label: 'File Size', priority: 'medium' },
    { slug: 'bulk', label: 'Bulk', priority: 'medium' },
    { slug: 'fast', label: 'Fast', priority: 'low' },
    { slug: 'small-size', label: 'to Smaller Size', priority: 'medium' }
];

/**
 * Generate complete page matrix
 * Returns array of page configs
 */
export function generatePageMatrix() {
    const pages = [];

    // Action + Format + Intent combinations
    actions.forEach(action => {
        formats.forEach(format => {
            intents.forEach(intent => {
                // Skip low-priority convert pages (focus on compress)
                if (action === 'convert' && intent.priority === 'low') {
                    return;
                }

                const slug = `/${action}-${format}-${intent.slug}`;
                const priority = calculatePagePriority(action, format, intent.priority);

                // Only generate medium/high priority pages
                if (priority === 'low') return;

                const metadata = generatePageMetadata(action, format, intent);

                pages.push({
                    slug,
                    action,
                    format,
                    intent: intent.slug,
                    intentLabel: intent.label,
                    template: 'programmatic-tool',
                    metadata,
                    priority,
                    shouldIndex: priority !== 'low'
                });
            });
        });
    });

    return pages.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
}

/**
 * Calculate page priority
 */
function calculatePagePriority(action, format, intentPriority) {
    // Compression pages are higher priority than conversion
    if (action === 'compress' && intentPriority === 'high') return 'high';
    if (action === 'convert' && intentPriority === 'high') return 'medium';

    // Optimize/reduce are medium priority
    if ((action === 'optimize' || action === 'reduce') && intentPriority === 'high') {
        return 'high';
    }

    if (intentPriority === 'medium') return 'medium';

    return 'low';
}

/**
 * Generate page metadata (title, description, etc.)
 */
function generatePageMetadata(action, format, intent) {
    const formatUpper = format.toUpperCase();
    const intentLabel = intent.label.toLowerCase();

    const title = generateTitle(action, formatUpper, intent.label);
    const description = generateDescription(action, formatUpper, intent.label);
    const h1 = generateH1(action, formatUpper, intent.label);

    return {
        title,
        description,
        h1,
        canonical: `https://webpify.vercel.app/${action}-${format}-${intent.slug}`
    };
}

/**
 * Generate page title
 */
function generateTitle(action, format, intentLabel) {
    const templates = {
        'compress-online': `${format} Compressor – Compress ${format} Online Free`,
        'compress-for-website': `Compress ${format} for Website – Optimize for Web`,
        'compress-for-seo': `Compress ${format} for SEO & Core Web Vitals`,
        'compress-without-losing-quality': `Compress ${format} Without Losing Quality – Lossless`,
        'compress-free': `Free ${format} Compressor – No Limits, No Sign Up`,
        'compress-file-size': `Reduce ${format} File Size by 60-90% Online`,
        'compress-bulk': `Bulk ${format} Compressor – Compress Multiple Files`,

        'reduce-online': `Reduce ${format} File Size Online – Free Tool`,
        'reduce-for-website': `Reduce ${format} Size for Website Performance`,
        'reduce-for-seo': `Reduce ${format} File Size for Better SEO`,
        'reduce-without-losing-quality': `Reduce ${format} Size Without Quality Loss`,

        'optimize-online': `Optimize ${format} Images Online – Free & Fast`,
        'optimize-for-website': `Optimize ${format} for Website Speed`,
        'optimize-for-seo': `Optimize ${format} Images for SEO & Rankings`,

        'shrink-online': `Shrink ${format} Files Online – Fast & Free`,
        'shrink-file-size': `Shrink ${format} File Size by Up to 90%`,

        'convert-online': `Convert to ${format} Online – Free Converter`,
        'convert-for-website': `Convert Images to ${format} for Web`,
        'convert-free': `Free ${format} Converter – No Limits`
    };

    const key = `${action}-${intentLabel.toLowerCase().replace(/\s+/g, '-')}`;
    return templates[key] || `${capitalize(action)} ${format} Images ${intentLabel}`;
}

/**
 * Generate meta description
 */
function generateDescription(action, format, intentLabel) {
    const actionVerb = action === 'compress' || action === 'reduce' || action === 'shrink'
        ? 'Reduce'
        : action === 'optimize'
            ? 'Optimize'
            : 'Convert';

    return `${actionVerb} ${format} ${intentLabel.toLowerCase()}. Professional ${format.toLowerCase()} ${action}ion tool with 60-90% file size reduction. Free, fast, and privacy-friendly.`;
}

/**
 * Generate H1 heading
 */
export function generateH1(action, format, intentLabel) {
    const templates = {
        'compress-online': `${format} Image Compressor – Online & Free`,
        'compress-for-website': `Compress ${format} for Website Performance`,
        'compress-for-seo': `${format} Compression for SEO & Core Web Vitals`,
        'compress-without-losing-quality': `Compress ${format} Without Losing Quality`,

        'reduce-online': `Reduce ${format} File Size Online`,
        'reduce-for-website': `Reduce ${format} Size for Faster Websites`,
        'reduce-for-seo': `Reduce ${format} File Size for Better SEO`,

        'optimize-online': `Optimize ${format} Images Online`,
        'optimize-for-website': `${format} Optimization for Web Performance`,
        'optimize-for-seo': `Optimize ${format} for Search Rankings`,

        'shrink-online': `Shrink ${format} Files Online`,

        'convert-online': `Convert Images to ${format} Online`,
        'convert-for-website': `Convert to ${format} for Web Optimization`
    };

    const key = `${action}-${intentLabel.toLowerCase().replace(/\s+/g, '-')}`;
    return templates[key] || `${capitalize(action)} ${format} Images ${intentLabel}`;
}

/**
 * Generate intro paragraph
 */
export function generateIntro(action, format, intentLabel) {
    const formatLower = format.toLowerCase();
    const actionText = {
        'compress': 'compress',
        'reduce': 'reduce',
        'shrink': 'shrink',
        'optimize': 'optimize',
        'convert': 'convert to'
    }[action];

    return `${capitalize(actionText)} ${format} images ${intentLabel.toLowerCase()} using professional ${formatLower} ${action}ion tools. Reduce file sizes by 60-90% while maintaining visual quality for faster page loads and better SEO.`;
}

/**
 * Generate benefits list
 */
export function generateBenefits(action, format) {
    const baseCompressionsectionBenefits = [
        `60-90% smaller ${format} file sizes`,
        'Lossless compression preserves quality',
        'Client-side processing (private & secure)',
        'Free with no file size limits'
    ];

    const conversionBenefits = [
        `Convert any image to ${format} format`,
        'High-quality format conversion',
        'Supports batch conversion',
        'Free with no restrictions'
    ];

    return action === 'convert' ? conversionBenefits : baseCompressionsectionBenefits;
}

/**
 * Generate FAQs for page
 */
export function generateFAQs(action, format, intentLabel) {
    const formatUpper = format.toUpperCase();

    if (action === 'compress' || action === 'reduce' || action === 'shrink' || action === 'optimize') {
        return [
            {
                question: `Does ${formatUpper} compression reduce quality?`,
                answer: `No, lossless ${formatUpper} compression maintains 100% visual quality while reducing file size by 60-90% through metadata removal and palette optimization.`
            },
            {
                question: `How much can ${formatUpper} files be compressed?`,
                answer: `${formatUpper} files can typically be compressed by 60-90% for simple graphics, 60-75% for complex images, and 50-70% for photos with transparency.`
            },
            {
                question: `Is ${formatUpper} compression safe?`,
                answer: `Yes, ${formatUpper} compression is completely safe. Our tool processes files client-side in your browser with no server uploads, ensuring complete privacy.`
            }
        ];
    } else {
        return [
            {
                question: `How do I convert images to ${formatUpper}?`,
                answer: `Upload your image, and our tool will instantly convert it to ${formatUpper} format while preserving quality.`
            },
            {
                question: `Is ${formatUpper} conversion free?`,
                answer: `Yes, our ${formatUpper} converter is completely free with no file size limits or restrictions.`
            },
            {
                question: `Does conversion reduce quality?`,
                answer: `No, our ${formatUpper} conversion maintains high quality using professional encoding algorithms.`
            }
        ];
    }
}

/**
 * Get high-priority pages only
 */
export function getHighPriorityPages() {
    return generatePageMatrix().filter(p => p.priority === 'high');
}

/**
 * Get pages by format
 */
export function getPagesByFormat(format) {
    return generatePageMatrix().filter(p => p.format === format);
}

/**
 * Capitalize first letter
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Export matrix statistics
 */
export function getMatrixStats() {
    const allPages = generatePageMatrix();
    const high = allPages.filter(p => p.priority === 'high');
    const medium = allPages.filter(p => p.priority === 'medium');

    return {
        total: allPages.length,
        high: high.length,
        medium: medium.length,
        byFormat: {
            png: allPages.filter(p => p.format === 'png').length,
            jpeg: allPages.filter(p => p.format === 'jpeg').length,
            jpg: allPages.filter(p => p.format === 'jpg').length,
            webp: allPages.filter(p => p.format === 'webp').length
        },
        byAction: {
            compress: allPages.filter(p => p.action === 'compress').length,
            reduce: allPages.filter(p => p.action === 'reduce').length,
            optimize: allPages.filter(p => p.action === 'optimize').length,
            shrink: allPages.filter(p => p.action === 'shrink').length,
            convert: allPages.filter(p => p.action === 'convert').length
        }
    };
}
