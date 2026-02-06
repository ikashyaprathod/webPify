import { getAllIndexablePages } from './indexation-rules';
import { calculateAuthorityScore } from './authority-score';
import { topicalGraph } from './topical-graph';

/**
 * Cannibalization Detector
 * Detects pages competing for same search intent
 */

/**
 * Detect all cannibalization issues
 */
export function detectCannibalization() {
    const pages = getAllIndexablePages();
    const intentGroups = groupPagesByIntent(pages);
    const conflicts = [];

    Object.entries(intentGroups).forEach(([intent, pagesInGroup]) => {
        if (pagesInGroup.length > 1) {
            // Multiple pages targeting same intent = potential cannibalization
            const winner = selectWinnerPage(pagesInGroup);
            const losers = pagesInGroup.filter(p => p.path !== winner.path);

            conflicts.push({
                intent,
                severity: calculateSeverity(pagesInGroup),
                winner: winner.path,
                winnerScore: winner.score,
                losers: losers.map(l => l.path),
                recommendations: generateCannibalizationActions(winner, losers)
            });
        }
    });

    return conflicts.sort((a, b) =>
        b.severity === 'high' ? 1 : a.severity === 'high' ? -1 : 0
    );
}

/**
 * Group pages by search intent
 */
function groupPagesByIntent(pages) {
    const groups = {};

    pages.forEach(page => {
        const intent = extractIntent(page.path);

        if (!groups[intent]) {
            groups[intent] = [];
        }

        groups[intent].push({
            path: page.path,
            priority: page.priority,
            score: calculateAuthorityScore(getClusterForPage(page.path)) || 50
        });
    });

    return groups;
}

/**
 * Extract search intent from page path
 */
function extractIntent(path) {
    // Remove leading slash and split
    const parts = path.replace(/^\//, '').split('/');

    // Core pages
    if (parts.length === 0 || path === '/') return 'homepage';
    if (path === '/image') return 'image-tools-hub';

    // Tool hubs
    if (path === '/image/compressor') return 'compression-hub';
    if (path === '/image/converter') return 'conversion-hub';
    if (path === '/image/compare') return 'comparison-hub';

    // Format-specific tool pages
    if (path.includes('/compressor/') || path.includes('/converter/')) {
        const format = path.split('/').pop();
        const type = path.includes('/compressor/') ? 'compress' : 'convert';
        return `${type}-${format}`;
    }

    // Programmatic pages - extract action + format
    const programmaticMatch = path.match(/\/(compress|reduce|optimize|shrink|convert)-(\w+)/);
    if (programmaticMatch) {
        const [, action, format] = programmaticMatch;
        const normalizedAction = action === 'reduce' || action === 'shrink' || action === 'optimize' ? 'compress' : action;
        const normalizedFormat = format.includes('png') ? 'png'
            : format.includes('jpeg') || format.includes('jpg') ? 'jpeg'
                : format.includes('webp') ? 'webp'
                    : format;

        return `${normalizedAction}-${normalizedFormat}`;
    }

    // Comparison pages
    if (path.includes('/compare/') || path.includes('-vs-')) {
        return 'format-comparison';
    }

    // Trust pages
    if (path === '/about' || path === '/privacy' || path === '/terms') {
        return `trust-${path.replace('/', '')}`;
    }

    return 'other';
}

/**
 * Get cluster ID for a page path
 */
function getClusterForPage(path) {
    if (path.includes('png')) return 'png-compression';
    if (path.includes('jpeg') || path.includes('jpg')) return 'jpeg-compression';
    if (path.includes('webp')) return 'webp-compression';
    return 'image-compression';
}

/**
 * Select winner page from group
 */
function selectWinnerPage(pages) {
    // Prioritize by:
    // 1. Highest authority score
    // 2. Highest priority
    // 3. Shortest path (more general)

    return pages.reduce((winner, current) => {
        // Higher authority wins
        if (current.score > winner.score) return current;
        if (current.score < winner.score) return winner;

        // Higher priority wins
        if (current.priority > winner.priority) return current;
        if (current.priority < winner.priority) return winner;

        // Shorter path wins (more general page)
        if (current.path.length < winner.path.length) return current;

        return winner;
    });
}

/**
 * Calculate cannibalization severity
 */
function calculateSeverity(pages) {
    // High severity if:
    // - 3+ pages competing
    // - Pages have similar authority scores (within 10 points)

    if (pages.length >= 3) return 'high';

    const scores = pages.map(p => p.score);
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    if (maxScore - minScore < 10) return 'high'; // Very similar scores
    if (maxScore - minScore < 20) return 'medium';

    return 'low';
}

/**
 * Generate actions to resolve cannibalization
 */
function generateCannibalizationActions(winner, losers) {
    const actions = [];

    losers.forEach(loser => {
        // Always add canonical
        actions.push({
            action: 'canonical',
            page: loser.path,
            target: winner.path,
            priority: 'high',
            description: `Set canonical from ${loser.path} to ${winner.path}`
        });

        // Reduce internal links to loser
        actions.push({
            action: 'reduce-links',
            page: loser.path,
            priority: 'medium',
            description: `Reduce internal links pointing to ${loser.path}`
        });

        // Consider noindex if score is very low
        if (loser.score < 30) {
            actions.push({
                action: 'noindex',
                page: loser.path,
                priority: 'low',
                description: `Consider noindexing ${loser.path} (low authority score)`,
                requiresApproval: true
            });
        }
    });

    return actions;
}

/**
 * Get cannibalization summary
 */
export function getCannibalizationSummary() {
    const conflicts = detectCannibalization();

    return {
        totalConflicts: conflicts.length,
        bySeverity: {
            high: conflicts.filter(c => c.severity === 'high').length,
            medium: conflicts.filter(c => c.severity === 'medium').length,
            low: conflicts.filter(c => c.severity === 'low').length
        },
        topConflicts: conflicts.slice(0, 5),
        totalAffectedPages: conflicts.reduce((sum, c) => sum + c.losers.length + 1, 0),
        recommendedActions: conflicts.reduce((sum, c) => sum + c.recommendations.length, 0)
    };
}

/**
 * Validate cannibalization resolution
 */
export function validateResolution(conflicts) {
    const validation = {
        resolved: [],
        unresolved: [],
        issues: []
    };

    conflicts.forEach(conflict => {
        // Check if canonical tags are in place
        const hasCanonicals = checkCanonicalsImplemented(conflict);

        if (hasCanonicals) {
            validation.resolved.push(conflict.intent);
        } else {
            validation.unresolved.push(conflict.intent);
            validation.issues.push({
                intent: conflict.intent,
                issue: 'Canonical tags not implemented',
                pages: conflict.losers
            });
        }
    });

    return validation;
}

/**
 * Check if canonicals are implemented (placeholder)
 */
function checkCanonicalsImplemented(conflict) {
    // This would check actual page metadata
    // For now, return false as placeholder
    return false;
}
