import { topicalGraph } from './topical-graph';

/**
 * Simulate Googlebot crawl paths
 * Returns pages reachable within maxDepth clicks
 */
export function simulateGooglebotCrawl(startUrl = '/', maxDepth = 3) {
    const visited = new Set();
    const queue = [{ url: startUrl, depth: 0, path: [startUrl] }];
    const crawlPaths = [];

    while (queue.length > 0) {
        const { url, depth, path } = queue.shift();

        if (visited.has(url) || depth > maxDepth) continue;

        visited.add(url);
        crawlPaths.push({
            url,
            depth,
            path,
            reachable: true,
            clicksFromHome: depth
        });

        // Get internal links from this URL
        const links = getInternalLinks(url);
        links.forEach(link => {
            if (!visited.has(link)) {
                queue.push({
                    url: link,
                    depth: depth + 1,
                    path: [...path, link]
                });
            }
        });
    }

    return crawlPaths;
}

/**
 * Get internal links from a URL (using topical graph)
 */
function getInternalLinks(url) {
    const links = [];
    const node = topicalGraph[url];

    if (!node) return links;

    // Add parent link
    if (node.parent) links.push(node.parent);

    // Add children links
    if (node.children) links.push(...node.children);

    // Add sibling links
    if (node.siblings) links.push(...node.siblings);

    // Add related links
    if (node.related) links.push(...node.related.slice(0, 5)); // Limit related links

    return [...new Set(links)]; // Remove duplicates
}

/**
 * Find orphan pages (not reachable from homepage)
 */
export function findOrphanPages(crawlPaths) {
    // Get all pages that should exist
    const allPages = Object.keys(topicalGraph);

    // Get reachable pages
    const reachablePages = new Set(crawlPaths.map(p => p.url));

    // Find orphans
    const orphans = allPages.filter(page => !reachablePages.has(page));

    return orphans.map(url => ({
        url,
        issue: 'orphan',
        severity: 'high',
        fix: 'Add internal links from parent or related pages'
    }));
}

/**
 * Find deep pages (>3 clicks from home)
 */
export function findDeepPages(crawlPaths, maxDepth = 3) {
    return crawlPaths
        .filter(p => p.depth > maxDepth)
        .map(p => ({
            url: p.url,
            depth: p.depth,
            issue: 'too-deep',
            severity: 'medium',
            fix: `Reduce depth by adding links from higher-level pages. Current path: ${p.path.join(' → ')}`
        }));
}

/**
 * Calculate crawl efficiency
 * Returns percentage of pages reachable within maxDepth
 */
export function calculateCrawlEfficiency(crawlPaths, maxDepth = 3) {
    const allPages = Object.keys(topicalGraph).length;
    const reachablePages = crawlPaths.filter(p => p.depth <= maxDepth).length;

    return {
        efficiency: Math.round((reachablePages / allPages) * 100),
        reachable: reachablePages,
        total: allPages,
        unreachable: allPages - reachablePages
    };
}

/**
 * Validate complete crawl paths
 * Returns comprehensive report
 */
export function validateCrawlPaths() {
    const paths = simulateGooglebotCrawl('/', 3);
    const orphans = findOrphanPages(paths);
    const deepPages = findDeepPages(paths, 3);
    const efficiency = calculateCrawlEfficiency(paths, 3);

    return {
        summary: {
            totalPages: Object.keys(topicalGraph).length,
            reachablePages: paths.length,
            orphanPages: orphans.length,
            deepPages: deepPages.length,
            crawlEfficiency: efficiency.efficiency + '%'
        },
        paths: paths.sort((a, b) => a.depth - b.depth),
        issues: {
            orphans,
            deepPages,
            critical: orphans.length > 0,
            warnings: deepPages.length > 0
        },
        recommendations: generateCrawlRecommendations(orphans, deepPages),
        passed: orphans.length === 0 && deepPages.length === 0
    };
}

/**
 * Generate crawl recommendations
 */
function generateCrawlRecommendations(orphans, deepPages) {
    const recommendations = [];

    if (orphans.length > 0) {
        recommendations.push({
            type: 'critical',
            issue: `${orphans.length} orphan page(s) detected`,
            action: 'Add internal links from parent or hub pages to ensure all pages are discoverable'
        });
    }

    if (deepPages.length > 0) {
        recommendations.push({
            type: 'warning',
            issue: `${deepPages.length} page(s) are more than 3 clicks from homepage`,
            action: 'Add shortcut links from higher-level pages to reduce click depth'
        });
    }

    if (orphans.length === 0 && deepPages.length === 0) {
        recommendations.push({
            type: 'success',
            issue: 'No crawl issues detected',
            action: 'Maintain current internal linking structure'
        });
    }

    return recommendations;
}

/**
 * Export crawl report for debugging
 */
export function exportCrawlReport() {
    const validation = validateCrawlPaths();

    return {
        timestamp: new Date().toISOString(),
        ...validation,
        pathDetails: validation.paths.map(p => ({
            url: p.url,
            depth: p.depth,
            breadcrumb: p.path.join(' → ')
        }))
    };
}
