import { getFullAuthorityReport } from './authority-score';
import { getAnchorVariations } from './anchor-text';
import { topicalGraph } from './topical-graph';

/**
 * AI-Driven Internal Link Optimizer
 * Generates smart link suggestions based on authority, impressions, and crawl data
 */

/**
 * Generate link suggestions
 * @param {Object} searchConsoleData - Data from Google Search Console
 * @returns {Array} Link optimization suggestions
 */
export function generateLinkSuggestions(searchConsoleData = {}) {
    const suggestions = [];

    // Get authority scores for all pages
    const authorityReport = getFullAuthorityReport();

    // Identify weak pages (low authority that need links)
    const weakPages = identifyWeakPages(authorityReport);

    // Identify strong pages (can give authority)
    const strongPages = identifyStrongPages(authorityReport);

    // Identify rising pages (gaining impressions)
    const risingPages = searchConsoleData.pages
        ? identifyRisingPages(searchConsoleData.pages)
        : [];

    // Generate "boost weak pages" suggestions
    weakPages.forEach(weakPage => {
        const bestSources = findBestLinkSources(weakPage, strongPages);

        bestSources.slice(0, 3).forEach((source, index) => {
            suggestions.push({
                type: 'add-link',
                fromPage: source.path,
                fromScore: source.score,
                toPage: weakPage.path,
                toScore: weakPage.score,
                anchorText: selectSmartAnchor(weakPage.path),
                reason: `Boost authority for ${weakPage.name} (score: ${weakPage.score})`,
                priority: index === 0 ? 'high' : 'medium',
                placement: 'related-tools-section',
                expectedImpact: estimateImpact(source.score, weakPage.score)
            });
        });
    });

    // Generate "boost rising pages" suggestions
    risingPages.forEach(risingPage => {
        const bestSources = findBestLinkSources(
            { path: risingPage.page, score: 50 },
            strongPages
        );

        if (bestSources.length > 0) {
            suggestions.push({
                type: 'add-link',
                fromPage: bestSources[0].path,
                fromScore: bestSources[0].score,
                toPage: risingPage.page,
                toScore: 50,
                anchorText: selectSmartAnchor(risingPage.page),
                reason: `Rising impressions: ${risingPage.growth}% increase`,
                priority: 'high',
                placement: 'contextual-mention',
                expectedImpact: 'high'
            });
        }
    });

    // Generate "reduce stale links" suggestions
    const decayingPages = searchConsoleData.pages
        ? identifyDecayingPages(searchConsoleData.pages)
        : [];

    decayingPages.forEach(page => {
        suggestions.push({
            type: 'reduce-links',
            toPage: page.page,
            reason: `Decaying: ${page.impressions} impressions in 90 days`,
            priority: 'low',
            action: 'Remove from related-tools sections'
        });
    });

    // Sort by priority
    return suggestions.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
}

/**
 * Identify weak pages (authority score < 60)
 */
function identifyWeakPages(authorityReport) {
    return authorityReport
        .filter(page => page.score < 60 && page.level >= 2) // Level 2+ (not root/hub)
        .map(page => ({
            path: getPagePath(page.clusterId),
            name: page.name,
            score: page.score,
            clusterId: page.clusterId
        }))
        .filter(page => page.path); // Remove pages without paths
}

/**
 * Identify strong pages (authority score >= 75)
 */
function identifyStrongPages(authorityReport) {
    return authorityReport
        .filter(page => page.score >= 75)
        .map(page => ({
            path: getPagePath(page.clusterId),
            name: page.name,
            score: page.score,
            clusterId: page.clusterId
        }))
        .filter(page => page.path);
}

/**
 * Get page path from cluster ID (simplified mapping)
 */
function getPagePath(clusterId) {
    const pathMap = {
        'png-compression': '/image/compressor/png',
        'jpeg-compression': '/image/compressor/jpeg',
        'webp-compression': '/image/compressor/webp',
        'png-conversion': '/image/converter/png',
        'jpeg-conversion': '/image/converter/jpeg',
        'webp-conversion': '/image/converter/webp'
    };

    return pathMap[clusterId] || null;
}

/**
 * Find best link sources for a target page
 */
function findBestLinkSources(targetPage, strongPages) {
    // Filter out same page
    const candidates = strongPages.filter(p => p.path !== targetPage.path);

    // Score candidates by relevance + authority
    const scored = candidates.map(source => ({
        ...source,
        relevance: calculateRelevance(source.path, targetPage.path),
        linkScore: source.score * calculateRelevance(source.path, targetPage.path)
    }));

    // Sort by linkScore
    return scored
        .filter(s => s.relevance > 0.3) // Min relevance threshold
        .sort((a, b) => b.linkScore - a.linkScore);
}

/**
 * Calculate relevance between two pages
 */
function calculateRelevance(sourcePath, targetPath) {
    // Same format = high relevance
    const sourceFormat = extractFormat(sourcePath);
    const targetFormat = extractFormat(targetPath);

    if (sourceFormat && targetFormat && sourceFormat === targetFormat) {
        return 0.9;
    }

    // Same hub = medium relevance
    const sourceHub = extractHub(sourcePath);
    const targetHub = extractHub(targetPath);

    if (sourceHub && targetHub && sourceHub === targetHub) {
        return 0.7;
    }

    // Related formats = low-medium relevance
    if (sourceFormat && targetFormat) {
        return 0.5;
    }

    return 0.3; // Default low relevance
}

/**
 * Extract format from path
 */
function extractFormat(path) {
    if (path.includes('png')) return 'png';
    if (path.includes('jpeg') || path.includes('jpg')) return 'jpeg';
    if (path.includes('webp')) return 'webp';
    return null;
}

/**
 * Extract hub from path
 */
function extractHub(path) {
    if (path.includes('compressor')) return 'compressor';
    if (path.includes('converter')) return 'converter';
    if (path.includes('compare')) return 'compare';
    return null;
}

/**
 * Select smart anchor text
 */
function selectSmartAnchor(targetPath) {
    const anchors = getAnchorVariations(targetPath);
    // Return first variation
    return anchors && anchors.length > 0 ? anchors[0] : `Visit ${targetPath}`;
}

/**
 * Estimate link impact
 */
function estimateImpact(sourceScore, targetScore) {
    const delta = sourceScore - targetScore;
    if (delta >= 30) return 'high';
    if (delta >= 15) return 'medium';
    return 'low';
}

/**
 * Identify rising pages (impressions growing)
 */
function identifyRisingPages(pages) {
    return pages
        .filter(p => p.impressionGrowth > 20) // >20% growth
        .sort((a, b) => b.impressionGrowth - a.impressionGrowth)
        .slice(0, 10)
        .map(p => ({
            page: p.page,
            growth: p.impressionGrowth,
            impressions: p.impressions
        }));
}

/**
 * Identify decaying pages (low impressions)
 */
function identifyDecayingPages(pages) {
    return pages
        .filter(p => p.impressions90d < 100 && p.indexed)
        .map(p => ({
            page: p.page,
            impressions: p.impressions90d
        }));
}

/**
 * Get link optimization summary
 */
export function getLinkOptimizationSummary(suggestions) {
    return {
        total: suggestions.length,
        byType: {
            addLink: suggestions.filter(s => s.type === 'add-link').length,
            reduceLinks: suggestions.filter(s => s.type === 'reduce-links').length
        },
        byPriority: {
            high: suggestions.filter(s => s.priority === 'high').length,
            medium: suggestions.filter(s => s.priority === 'medium').length,
            low: suggestions.filter(s => s.priority === 'low').length
        },
        expectedHighImpact: suggestions.filter(s => s.expectedImpact === 'high').length
    };
}
