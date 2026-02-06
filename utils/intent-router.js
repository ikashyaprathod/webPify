import { classifyQueryIntent } from './query-intent-classifier';
import { topicalGraph } from './topical-graph';

/**
 * Intent-to-Page Router
 * Routes queries to optimal pages and detects conflicts
 */

/**
 * Route query to optimal page
 */
export function routeQueryToPage(query) {
    const intent = classifyQueryIntent(query);

    // Check if target page exists
    const pageExists = checkPageExists(intent.targetPage);

    if (!pageExists && intent.alternativePage) {
        // Fallback to alternative page
        intent.targetPage = intent.alternativePage;
        intent.confidence *= 0.8; // Reduce confidence
    }

    // Check for conflicts (multiple pages targeting same intent)
    const conflicts = findConflictingPages(intent);

    return {
        query,
        intent: intent.type,
        primaryPage: intent.targetPage,
        confidence: intent.confidence,
        conflicts: conflicts.length > 0 ? conflicts : null,
        recommendation: conflicts.length > 0
            ? 'Resolve cannibalization'
            : pageExists
                ? 'Route to existing page'
                : 'Consider creating programmatic page'
    };
}

/**
 * Check if page exists in topical graph
 */
function checkPageExists(path) {
    return topicalGraph.hasOwnProperty(path);
}

/**
 * Find pages that might conflict with this intent
 */
function findConflictingPages(intent) {
    const conflicts = [];
    const primaryPage = intent.targetPage;

    // Get all pages that could match this intent
    const potentialPages = getPotentialPagesForIntent(intent);

    potentialPages.forEach(page => {
        if (page !== primaryPage) {
            conflicts.push({
                page,
                reason: 'intent-overlap',
                similarity: calculateIntentSimilarity(primaryPage, page)
            });
        }
    });

    return conflicts.filter(c => c.similarity > 0.7);
}

/**
 * Get potential pages for an intent
 */
function getPotentialPagesForIntent(intent) {
    const pages = [];

    switch (intent.type) {
        case 'tool':
            // Check for programmatic pages with same format+action
            if (intent.format && intent.action) {
                pages.push(
                    `/image/compressor/${intent.format}`,
                    `/compress-${intent.format}-online`,
                    `/compress-${intent.format}-for-seo`,
                    `/compress-${intent.format}-for-website`,
                    `/optimize-${intent.format}-for-website`
                );
            }
            break;

        case 'conversion':
            if (intent.toFormat) {
                pages.push(
                    `/image/converter/${intent.toFormat}`,
                    `/convert-to-${intent.toFormat}`,
                    intent.fromFormat ? `/${intent.fromFormat}-to-${intent.toFormat}-converter` : null
                );
            }
            break;

        case 'comparison':
            if (intent.formats && intent.formats.length === 2) {
                const [f1, f2] = intent.formats;
                pages.push(
                    `/compare/${f1}-vs-${f2}`,
                    `/compare/${f2}-vs-${f1}`, // Reverse order
                    '/image/compare'
                );
            }
            break;

        case 'informational':
            pages.push('/image', '/image/compressor', '/image/converter');
            break;
    }

    return pages.filter(p => p && checkPageExists(p));
}

/**
 * Calculate intent similarity between two pages
 */
function calculateIntentSimilarity(page1, page2) {
    // Simple similarity based on path components
    const parts1 = page1.split('/').filter(p => p);
    const parts2 = page2.split('/').filter(p => p);

    const commonParts = parts1.filter(p => parts2.includes(p));
    const totalParts = new Set([...parts1, ...parts2]).size;

    return commonParts.length / totalParts;
}

/**
 * Route multiple queries (batch)
 */
export function routeQueriesBatch(queries) {
    return queries.map(query => routeQueryToPage(query));
}

/**
 * Get routing statistics
 */
export function getRoutingStats(routedQueries) {
    const stats = {
        totalQueries: routedQueries.length,
        byPage: {},
        byIntent: {},
        withConflicts: 0,
        avgConfidence: 0,
        needsNewPages: 0
    };

    let totalConfidence = 0;

    routedQueries.forEach(({ intent, primaryPage, confidence, conflicts, recommendation }) => {
        // Count by page
        stats.byPage[primaryPage] = (stats.byPage[primaryPage] || 0) + 1;

        // Count by intent
        stats.byIntent[intent] = (stats.byIntent[intent] || 0) + 1;

        // Count conflicts
        if (conflicts && conflicts.length > 0) {
            stats.withConflicts++;
        }

        // Sum confidence
        totalConfidence += confidence;

        // Count pages that need creation
        if (recommendation === 'Consider creating programmatic page') {
            stats.needsNewPages++;
        }
    });

    stats.avgConfidence = (totalConfidence / routedQueries.length).toFixed(2);

    return stats;
}

/**
 * Export routing report
 */
export function exportRoutingReport(queries) {
    const routed = routeQueriesBatch(queries);
    const stats = getRoutingStats(routed);

    return {
        timestamp: new Date().toISOString(),
        totalQueries: queries.length,
        routings: routed,
        statistics: stats,
        conflicts: routed.filter(r => r.conflicts && r.conflicts.length > 0),
        lowConfidence: routed.filter(r => r.confidence < 0.6),
        recommendations: {
            createPages: routed.filter(r => r.recommendation === 'Consider creating programmatic page'),
            resolveConflicts: routed.filter(r => r.conflicts && r.conflicts.length > 0)
        }
    };
}
