import { getAllIndexablePages } from './indexation-rules';

/**
 * Content Decay Detector
 * Identifies underperforming pages that need attention
 */

/**
 * Detect all decaying content
 * @param {Object} searchConsoleData - Search Console metrics
 * @returns {Array} Decaying pages with recommendations
 */
export function detectDecayingContent(searchConsoleData = {}) {
    const pages = getAllIndexablePages();
    const decaying = [];

    pages.forEach(page => {
        const metrics = getPageMetrics(page.path, searchConsoleData);
        const issues = analyzePageHealth(page, metrics);

        if (issues.length > 0) {
            decaying.push({
                page: page.path,
                priority: page.priority,
                issues,
                metrics,
                severity: calculateDecaySeverity(issues),
                recommendations: generateDecayRecommendations(page, issues, metrics)
            });
        }
    });

    // Sort by severity
    return decaying.sort((a, b) => {
        const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return severityOrder[b.severity] - severityOrder[a.severity];
    });
}

/**
 * Get page metrics from Search Console data
 */
function getPageMetrics(path, searchConsoleData) {
    const pageData = searchConsoleData.pages?.find(p => p.page === path) || {};

    return {
        impressions90d: pageData.impressions90d || 0,
        clicks90d: pageData.clicks90d || 0,
        ctr: pageData.ctr || 0,
        avgPosition: pageData.avgPosition || 100,
        indexed: pageData.indexed !== false, // Default to true if not specified
        impressionTrend: pageData.impressionTrend || 0, // % change
        clickTrend: pageData.clickTrend || 0
    };
}

/**
 * Analyze page health and identify issues
 */
function analyzePageHealth(page, metrics) {
    const issues = [];

    // Issue 1: Zero impressions in 90 days
    if (metrics.impressions90d === 0 && metrics.indexed) {
        issues.push({
            type: 'zero-impressions',
            severity: 'critical',
            description: 'No impressions in 90 days despite being indexed'
        });
    }

    // Issue 2: Low CTR with high impressions
    if (metrics.ctr < 0.02 && metrics.impressions90d > 1000) {
        issues.push({
            type: 'low-ctr-high-impressions',
            severity: 'high',
            description: `CTR ${(metrics.ctr * 100).toFixed(1)}% is too low for ${metrics.impressions90d} impressions`
        });
    }

    // Issue 3: Indexed but never ranking well
    if (metrics.indexed && metrics.avgPosition > 50 && metrics.impressions90d > 0) {
        issues.push({
            type: 'indexed-no-rankings',
            severity: 'medium',
            description: `Average position ${metrics.avgPosition.toFixed(0)} is too low`
        });
    }

    // Issue 4: Declining impressions
    if (metrics.impressionTrend < -30 && metrics.impressions90d > 100) {
        issues.push({
            type: 'declining-impressions',
            severity: 'high',
            description: `Impressions declined by ${Math.abs(metrics.impressionTrend)}%`
        });
    }

    // Issue 5: Very low impressions for indexed page
    if (metrics.indexed && metrics.impressions90d > 0 && metrics.impressions90d < 50) {
        issues.push({
            type: 'minimal-impressions',
            severity: 'medium',
            description: `Only ${metrics.impressions90d} impressions in 90 days`
        });
    }

    return issues;
}

/**
 * Calculate overall decay severity
 */
function calculateDecaySeverity(issues) {
    if (issues.some(i => i.severity === 'critical')) return 'critical';
    if (issues.some(i => i.severity === 'high')) return 'high';
    if (issues.some(i => i.severity === 'medium')) return 'medium';
    return 'low';
}

/**
 * Generate recommendations based on issues
 */
function generateDecayRecommendations(page, issues, metrics) {
    const recommendations = [];

    issues.forEach(issue => {
        switch (issue.type) {
            case 'zero-impressions':
                recommendations.push({
                    action: 'merge-or-noindex',
                    priority: 'high',
                    description: 'Merge content into stronger page or noindex',
                    options: [
                        {
                            action: 'merge',
                            target: findBestMergeTarget(page.path),
                            description: 'Merge into related high-performing page'
                        },
                        {
                            action: 'noindex',
                            description: 'Noindex to free crawl budget',
                            requiresApproval: true
                        },
                        {
                            action: 'redirect',
                            target: findBestRedirectTarget(page.path),
                            description: '301 redirect to better page',
                            requiresApproval: true
                        }
                    ]
                });
                break;

            case 'low-ctr-high-impressions':
                recommendations.push({
                    action: 'improve-ctr',
                    priority: 'high',
                    description: 'Optimize title and meta description for higher CTR',
                    tasks: [
                        'Rewrite title with stronger hook',
                        'Add numbers or power words',
                        'Include target keyword earlier',
                        'Make meta description more compelling',
                        'Add call-to-action in description'
                    ]
                });
                recommendations.push({
                    action: 'add-serp-features',
                    priority: 'medium',
                    description: 'Target SERP features to increase visibility',
                    tasks: [
                        'Add FAQ section for PAA features',
                        'Create summary table for featured snippets',
                        'Add step-by-step list for how-to snippets'
                    ]
                });
                break;

            case 'indexed-no-rankings':
                recommendations.push({
                    action: 'boost-authority',
                    priority: 'high',
                    description: 'Increase internal links from high-authority pages',
                    tasks: [
                        'Add links from hub pages',
                        'Include in related-tools sections',
                        'Add contextual mentions in format pages'
                    ]
                });
                recommendations.push({
                    action: 'improve-content',
                    priority: 'medium',
                    description: 'Expand and improve content quality',
                    tasks: [
                        'Add missing entity mentions',
                        'Expand topic coverage',
                        'Add more FAQs',
                        'Include comparison tables'
                    ]
                });
                break;

            case 'declining-impressions':
                recommendations.push({
                    action: 'content-freshness',
                    priority: 'high',
                    description: 'Update content to regain rankings',
                    tasks: [
                        'Update statistics and data',
                        'Add recent developments',
                        'Refresh meta tags',
                        'Check for technical issues',
                        'Review competitor changes'
                    ]
                });
                break;

            case 'minimal-impressions':
                recommendations.push({
                    action: 'keyword-optimization',
                    priority: 'medium',
                    description: 'Optimize for target keywords',
                    tasks: [
                        'Research better target keywords',
                        'Improve keyword placement',
                        'Add long-tail variations',
                        'Optimize headings for keywords'
                    ]
                });
                break;
        }
    });

    return recommendations;
}

/**
 * Find best merge target for a page
 */
function findBestMergeTarget(path) {
    // Logic to find related high-performing page
    const format = extractFormat(path);
    const hub = extractHub(path);

    if (format && hub === 'compressor') {
        return `/image/compressor/${format}`;
    }
    if (format && hub === 'converter') {
        return `/image/converter/${format}`;
    }

    return hub ? `/image/${hub}` : '/image';
}

/**
 * Find best redirect target
 */
function findBestRedirectTarget(path) {
    return findBestMergeTarget(path);
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
 * Get decay detection summary
 */
export function getDecaySummary(decayingPages) {
    return {
        total: decayingPages.length,
        bySeverity: {
            critical: decayingPages.filter(p => p.severity === 'critical').length,
            high: decayingPages.filter(p => p.severity === 'high').length,
            medium: decayingPages.filter(p => p.severity === 'medium').length,
            low: decayingPages.filter(p => p.severity === 'low').length
        },
        byIssueType: countByIssueType(decayingPages),
        urgentActions: decayingPages
            .filter(p => p.severity === 'critical' || p.severity === 'high')
            .slice(0, 10),
        totalRecommendations: decayingPages.reduce((sum, p) =>
            sum + p.recommendations.length, 0
        )
    };
}

/**
 * Count pages by issue type
 */
function countByIssueType(decayingPages) {
    const counts = {};

    decayingPages.forEach(page => {
        page.issues.forEach(issue => {
            counts[issue.type] = (counts[issue.type] || 0) + 1;
        });
    });

    return counts;
}

/**
 * Export decay report
 */
export function exportDecayReport(searchConsoleData) {
    const decayingPages = detectDecayingContent(searchConsoleData);
    const summary = getDecaySummary(decayingPages);

    return {
        timestamp: new Date().toISOString(),
        summary,
        criticalPages: decayingPages.filter(p => p.severity === 'critical'),
        highPriorityPages: decayingPages.filter(p => p.severity === 'high'),
        allPages: decayingPages,
        recommendations: {
            mergeOrNoindex: decayingPages.filter(p =>
                p.recommendations.some(r => r.action === 'merge-or-noindex')
            ),
            improveCTR: decayingPages.filter(p =>
                p.recommendations.some(r => r.action === 'improve-ctr')
            ),
            boostAuthority: decayingPages.filter(p =>
                p.recommendations.some(r => r.action === 'boost-authority')
            )
        }
    };
}
