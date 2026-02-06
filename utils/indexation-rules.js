/**
 * Indexation Rules Engine
 * Controls which pages should be indexed and with what priority
 */

/**
 * Page indexation rules configuration
 */
const indexationRules = {
    // Core pages - Always index, high priority
    core: {
        paths: ['/', '/image', '/image/compressor', '/image/converter'],
        shouldIndex: true,
        priority: 1.0,
        changefreq: 'weekly'
    },

    // Format pages - Always index, high priority
    formatPages: {
        paths: [
            '/image/compressor/png',
            '/image/compressor/jpeg',
            '/image/compressor/webp',
            '/image/converter/png',
            '/image/converter/jpeg',
            '/image/converter/webp'
        ],
        shouldIndex: true,
        priority: 0.9,
        changefreq: 'weekly'
    },

    // Trust pages - Always index, medium priority
    trust: {
        paths: ['/about', '/privacy', '/terms'],
        shouldIndex: true,
        priority: 0.6,
        changefreq: 'monthly'
    },

    // High-intent programmatic pages - Index, medium priority
    programmaticHigh: {
        patterns: [
            '/compress-png-online',
            '/compress-png-for-seo',
            '/compress-png-for-website',
            '/compress-jpeg-online',
            '/compress-jpeg-for-seo',
            '/compress-webp-online',
            '/reduce-jpeg-file-size',
            '/reduce-png-file-size',
            '/optimize-png-for-website',
            '/optimize-jpeg-for-seo',
            '/convert-to-webp',
            '/convert-png-to-webp',
            '/convert-jpeg-to-webp'
        ],
        shouldIndex: true,
        priority: 0.7,
        changefreq: 'monthly'
    },

    // Medium-intent programmatic pages - Index, lower priority
    programmaticMedium: {
        patterns: [
            '/compress-png-free',
            '/compress-jpeg-free',
            '/reduce-webp-file-size',
            '/shrink-png-online',
            '/optimize-webp-images'
        ],
        shouldIndex: true,
        priority: 0.5,
        changefreq: 'monthly'
    },

    // Low-intent or duplicate pages - Noindex
    noindex: {
        patterns: [
            '/compress-png-fast',
            '/compress-jpeg-fast',
            '/shrink-jpeg-fast'
        ],
        shouldIndex: false,
        priority: 0.0,
        changefreq: 'never'
    }
};

/**
 * Check if a pathname should be indexed
 */
export function shouldIndexPage(pathname) {
    // Check core pages
    if (indexationRules.core.paths.includes(pathname)) {
        return {
            shouldIndex: true,
            priority: indexationRules.core.priority,
            changefreq: indexationRules.core.changefreq,
            reason: 'core-page'
        };
    }

    // Check format pages
    if (indexationRules.formatPages.paths.includes(pathname)) {
        return {
            shouldIndex: true,
            priority: indexationRules.formatPages.priority,
            changefreq: indexationRules.formatPages.changefreq,
            reason: 'format-page'
        };
    }

    // Check trust pages
    if (indexationRules.trust.paths.includes(pathname)) {
        return {
            shouldIndex: true,
            priority: indexationRules.trust.priority,
            changefreq: indexationRules.trust.changefreq,
            reason: 'trust-page'
        };
    }

    // Check high-intent programmatic
    if (indexationRules.programmaticHigh.patterns.includes(pathname)) {
        return {
            shouldIndex: true,
            priority: indexationRules.programmaticHigh.priority,
            changefreq: indexationRules.programmaticHigh.changefreq,
            reason: 'programmatic-high-intent'
        };
    }

    // Check medium-intent programmatic
    if (indexationRules.programmaticMedium.patterns.includes(pathname)) {
        return {
            shouldIndex: true,
            priority: indexationRules.programmaticMedium.priority,
            changefreq: indexationRules.programmaticMedium.changefreq,
            reason: 'programmatic-medium-intent'
        };
    }

    // Check noindex patterns
    if (indexationRules.noindex.patterns.includes(pathname)) {
        return {
            shouldIndex: false,
            priority: 0,
            changefreq: 'never',
            reason: 'low-intent-duplicate'
        };
    }

    // Default: index with low priority (for future pages)
    return {
        shouldIndex: true,
        priority: 0.5,
        changefreq: 'monthly',
        reason: 'default'
    };
}

/**
 * Get robots meta tag for a page
 */
export function getRobotsMetaTag(pathname) {
    const rules = shouldIndexPage(pathname);

    if (!rules.shouldIndex) {
        return 'noindex, nofollow';
    }

    return 'index, follow';
}

/**
 * Get all indexable pages
 */
export function getAllIndexablePages() {
    const pages = [
        ...indexationRules.core.paths,
        ...indexationRules.formatPages.paths,
        ...indexationRules.trust.paths,
        ...indexationRules.programmaticHigh.patterns,
        ...indexationRules.programmaticMedium.patterns
    ];

    return pages.map(path => ({
        path,
        ...shouldIndexPage(path)
    }));
}

/**
 * Get indexation statistics
 */
export function getIndexationStats() {
    const allPages = getAllIndexablePages();

    return {
        total: allPages.length,
        byPriority: {
            high: allPages.filter(p => p.priority >= 0.8).length,
            medium: allPages.filter(p => p.priority >= 0.5 && p.priority < 0.8).length,
            low: allPages.filter(p => p.priority < 0.5).length
        },
        byType: {
            core: indexationRules.core.paths.length,
            format: indexationRules.formatPages.paths.length,
            trust: indexationRules.trust.paths.length,
            programmaticHigh: indexationRules.programmaticHigh.patterns.length,
            programmaticMedium: indexationRules.programmaticMedium.patterns.length
        },
        noindexPages: indexationRules.noindex.patterns.length
    };
}

/**
 * Validate indexation rules
 * Checks for conflicts or issues
 */
export function validateIndexationRules() {
    const issues = [];
    const allIndexable = getAllIndexablePages();
    const seenPaths = new Set();

    // Check for duplicates
    allIndexable.forEach(page => {
        if (seenPaths.has(page.path)) {
            issues.push({
                type: 'duplicate',
                severity: 'error',
                path: page.path,
                message: `Path ${page.path} appears in multiple rule sets`
            });
        }
        seenPaths.add(page.path);
    });

    // Check for conflicting patterns
    indexationRules.noindex.patterns.forEach(noindexPath => {
        if (seenPaths.has(noindexPath)) {
            issues.push({
                type: 'conflict',
                severity: 'error',
                path: noindexPath,
                message: `Path ${noindexPath} is both indexed and noindexed`
            });
        }
    });

    return {
        valid: issues.length === 0,
        issues,
        summary: issues.length === 0
            ? 'All indexation rules are valid'
            : `Found ${issues.length} issue(s) in indexation rules`
    };
}
