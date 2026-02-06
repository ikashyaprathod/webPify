import { topicalClusters, getCluster, getChildren, getLeafTopics } from '../data/topical-clusters';
import { topicalGraph } from './topical-graph';

/**
 * Calculate Topical Authority Score for a cluster
 * Score: 0-100
 */
export function calculateAuthorityScore(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster) return 0;

    const metrics = {
        pageCount: getIndexablePagesForCluster(clusterId),
        linkDepth: getAverageLinkDepth(clusterId),
        coverage: calculateCoverageCompleteness(clusterId),
        intentMatch: calculateQueryIntentMatch(clusterId),
        serpFeatures: estimateSerpFeatures(clusterId)
    };

    // Weighted scoring (total: 100 points)
    const score = (
        Math.min(20, (metrics.pageCount / 10) * 20) +      // 20 points max (10+ pages)
        Math.min(15, (1 - metrics.linkDepth / 5) * 15) +   // 15 points (depth ≤ 3)
        (metrics.coverage * 30) +                           // 30 points
        (metrics.intentMatch * 25) +                        // 25 points
        (metrics.serpFeatures * 10)                         // 10 points
    );

    return Math.min(100, Math.round(score));
}

/**
 * Get number of indexable pages for a cluster
 */
function getIndexablePagesForCluster(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster) return 0;

    let count = cluster.pages?.length || 0;

    // Add children pages
    const children = getChildren(clusterId);
    children.forEach(child => {
        count += child.pages?.length || 0;
    });

    return count;
}

/**
 * Get average link depth for cluster pages
 */
function getAverageLinkDepth(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster || !cluster.pages) return 5;

    const depths = cluster.pages.map(page => {
        const pathDepth = page.split('/').filter(p => p.length > 0).length;
        return pathDepth;
    });

    return depths.length > 0
        ? depths.reduce((a, b) => a + b, 0) / depths.length
        : 3;
}

/**
 * Calculate coverage completeness (0-1)
 * Based on: Do we have pages for all leaf topics?
 */
function calculateCoverageCompleteness(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster) return 0;

    const leafTopics = getLeafTopics(clusterId);
    if (leafTopics.length === 0) return 1; // No specific leaf topics = complete

    // Count how many leaf topics have dedicated pages
    // For now, estimate based on page count vs leaf topic count
    const pageCount = cluster.pages?.length || 0;
    const topicCount = leafTopics.length;

    // If we have 1 page for 10 topics, coverage = 0.1
    // If we have 10 pages for 10 topics, coverage = 1.0
    return Math.min(1, pageCount / Math.max(1, topicCount / 2));
}

/**
 * Calculate query intent match (0-1)
 * How well do our pages match search intent?
 */
function calculateQueryIntentMatch(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster) return 0;

    // Factors:
    // - Has tool pages (high intent match)
    // - Has FAQs (medium intent match)
    // - Has programmatic pages (high intent match)

    const hasToolPages = cluster.pages?.some(p =>
        p.includes('/compressor') || p.includes('/converter')
    );

    const pageCount = cluster.pages?.length || 0;

    let score = 0;
    if (hasToolPages) score += 0.5;
    if (pageCount >= 3) score += 0.3;
    if (pageCount >= 5) score += 0.2;

    return Math.min(1, score);
}

/**
 * Estimate SERP feature potential (0-1)
 * Based on page structure and content type
 */
function estimateSerpFeatures(clusterId) {
    const cluster = getCluster(clusterId);
    if (!cluster) return 0;

    // Clusters with more pages and entities have higher SERP potential
    const pageCount = cluster.pages?.length || 0;
    const entityCount = cluster.entities?.length || 0;
    const hasLeafTopics = (cluster.leafTopics?.length || 0) > 0;

    let score = 0;
    if (pageCount > 0) score += 0.3;
    if (entityCount >= 3) score += 0.3;
    if (hasLeafTopics) score += 0.4;

    return Math.min(1, score);
}

/**
 * Get optimization actions for a cluster
 */
export function getOptimizationActions(clusterId) {
    const score = calculateAuthorityScore(clusterId);
    const cluster = getCluster(clusterId);

    if (!cluster) {
        return { status: 'error', message: 'Cluster not found' };
    }

    if (score >= 80) {
        return {
            status: 'optimal',
            score,
            actions: [],
            message: 'Authority score is excellent. Maintain current quality.'
        };
    }

    const actions = [];
    const metrics = {
        pageCount: getIndexablePagesForCluster(clusterId),
        coverage: calculateCoverageCompleteness(clusterId),
        intentMatch: calculateQueryIntentMatch(clusterId)
    };

    // Suggest actions based on weak areas
    if (metrics.pageCount < 5) {
        actions.push({
            type: 'add-programmatic-pages',
            priority: 'high',
            description: `Create ${5 - metrics.pageCount} more pages covering leaf topics`
        });
    }

    if (metrics.coverage < 0.7) {
        actions.push({
            type: 'expand-coverage',
            priority: 'high',
            description: 'Cover more leaf topics with dedicated pages'
        });
    }

    if (metrics.intentMatch < 0.7) {
        actions.push({
            type: 'add-tool-pages',
            priority: 'medium',
            description: 'Add interactive tool pages for better intent match'
        });
    }

    actions.push({
        type: 'expand-faqs',
        priority: 'medium',
        description: 'Add 10+ FAQ questions targeting PAA opportunities'
    });

    actions.push({
        type: 'add-internal-links',
        priority: 'medium',
        description: 'Increase internal linking to boost authority flow'
    });

    return {
        status: 'needs-improvement',
        score,
        targetScore: 80,
        gap: 80 - score,
        actions
    };
}

/**
 * Get full authority report for all clusters
 */
export function getFullAuthorityReport() {
    const clusters = Object.keys(topicalClusters);

    return clusters.map(clusterId => {
        const cluster = getCluster(clusterId);
        const score = calculateAuthorityScore(clusterId);
        const optimization = getOptimizationActions(clusterId);

        return {
            clusterId,
            name: cluster.name,
            level: cluster.level,
            score,
            status: optimization.status,
            actionCount: optimization.actions?.length || 0
        };
    }).sort((a, b) => b.score - a.score);
}

/**
 * Get priority clusters (score < 80)
 */
export function getPriorityClusters() {
    const report = getFullAuthorityReport();
    return report.filter(c => c.score < 80);
}
