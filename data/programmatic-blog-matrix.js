export const programmaticMatrix = {
    actions: [
        { slug: 'compress', label: 'Compress', verb: 'compressing', noun: 'compression' },
        { slug: 'reduce', label: 'Reduce', verb: 'reducing', noun: 'reduction' },
        { slug: 'shrink', label: 'Shrink', verb: 'shrinking', noun: 'shrinking' },
        { slug: 'optimize', label: 'Optimize', verb: 'optimizing', noun: 'optimization' },
        { slug: 'convert', label: 'Convert', verb: 'converting', noun: 'conversion' }
    ],
    formats: [
        { slug: 'png', label: 'PNG', ext: '.png', type: 'lossless' },
        { slug: 'jpeg', label: 'JPEG', ext: '.jpg', type: 'lossy' },
        { slug: 'webp', label: 'WebP', ext: '.webp', type: 'modern' }
    ],
    intents: [
        { slug: 'online', label: 'Online', context: 'browser-based tools' },
        { slug: 'for-seo', label: 'for SEO', context: 'search engine ranking' },
        { slug: 'for-website', label: 'for Website Performance', context: 'page speed' },
        { slug: 'without-losing-quality', label: 'Without Losing Quality', context: 'visual fidelity' },
        { slug: 'free', label: 'Free', context: 'cost-effective' },
        { slug: 'bulk', label: 'Bulk', context: 'batch processing' }
    ],
    audiences: [
        { slug: 'developers', label: 'Developers', angle: 'technical implementation' },
        { slug: 'marketers', label: 'Marketers', angle: 'conversion rates and SEO' },
        { slug: 'beginners', label: 'Beginners', angle: 'simple step-by-step' },
        { slug: 'ecommerce', label: 'E-commerce Owners', angle: 'product image optimization' }
    ]
};

export const excludedCombinations = [
    // Example: prevent "convert png without losing quality" if it's technically impossible or redundant
    { action: 'convert', intent: 'without-losing-quality' }, // Conversion usually implies prompt change
];
