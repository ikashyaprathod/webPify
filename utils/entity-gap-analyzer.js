import { getAllEntities } from '../data/topical-clusters';
import { getAllCompetitorEntities, getCompetitorsWithEntity } from '../data/competitor-entities';

/**
 * Detect entity gaps between WebPify and competitors
 * Returns entities we should add to improve coverage
 */
export function detectEntityGaps() {
    const webpifyEntities = getAllEntities().map(e => e.toLowerCase());
    const competitorEntities = getAllCompetitorEntities().map(e => e.toLowerCase());

    // Find entities competitors have that we don't
    const gaps = competitorEntities.filter(entity =>
        !webpifyEntities.some(we =>
            we.includes(entity) || entity.includes(we)
        )
    );

    // Remove duplicates and prioritize
    const uniqueGaps = [...new Set(gaps)];

    return uniqueGaps.map(entity => {
        const priority = calculateEntityPriority(entity);
        const competitors = getCompetitorsWithEntity(entity);
        const actions = generateEntityActions(entity, priority);

        return {
            entity,
            priority,
            competitorCount: competitors.length,
            competitors,
            suggestedActions: actions,
            estimatedImpact: priority === 'high' ? 'High' : priority === 'medium' ? 'Medium' : 'Low'
        };
    }).sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
}

/**
 * Calculate priority for an entity
 * Based on: mentions by competitors, relevance, search volume potential
 */
function calculateEntityPriority(entity) {
    const competitors = getCompetitorsWithEntity(entity);
    const mentionCount = competitors.length;

    // High priority: mentioned by 3+ competitors
    if (mentionCount >= 3) return 'high';

    // High priority: core technical terms
    const coreTerms = [
        'lossy compression', 'lossless compression',
        'alpha transparency', 'alpha channel',
        'color quantization', 'color depth',
        'batch processing', 'bulk compression',
        'api integration', 'api',
        'metadata removal',
        'compression ratio', 'compression quality'
    ];

    if (coreTerms.some(term => entity.includes(term) || term.includes(entity))) {
        return 'high';
    }

    // Medium priority: mentioned by 2 competitors or useful features
    if (mentionCount === 2) return 'medium';

    const usefulTerms = [
        'watermark', 'resize', 'crop', 'editor',
        'cloud storage', 'plugin', 'integration',
        'side-by-side', 'comparison'
    ];

    if (usefulTerms.some(term => entity.includes(term) || term.includes(entity))) {
        return 'medium';
    }

    // Low priority: mentioned by 1 competitor or misc
    return 'low';
}

/**
 * Generate suggested actions for an entity gap
 */
function generateEntityActions(entity, priority) {
    const actions = [];

    // Always suggest adding to content
    actions.push({
        type: 'add-to-headings',
        description: `Add "${entity}" as H2 or H3 heading in relevant pages`,
        effort: 'low'
    });

    actions.push({
        type: 'add-to-faqs',
        description: `Create FAQ: "What is ${entity}?" or "How does ${entity} work?"`,
        effort: 'low'
    });

    if (priority === 'high') {
        actions.push({
            type: 'create-dedicated-page',
            description: `Create dedicated page: /${entity.replace(/\s+/g, '-')}`,
            effort: 'high'
        });
    }

    actions.push({
        type: 'add-to-schema',
        description: `Add "${entity}" to schema.org markup as feature or keyword`,
        effort: 'low'
    });

    actions.push({
        type: 'add-internal-links',
        description: `Add internal links with "${entity}" as anchor text`,
        effort: 'low'
    });

    return actions;
}

/**
 * Get entity gaps by priority
 */
export function getEntityGapsByPriority() {
    const gaps = detectEntityGaps();

    return {
        high: gaps.filter(g => g.priority === 'high'),
        medium: gaps.filter(g => g.priority === 'medium'),
        low: gaps.filter(g => g.priority === 'low')
    };
}

/**
 * Generate entity filling plan
 * Returns actionable plan to fill top N gaps
 */
export function generateEntityFillingPlan(topN = 20) {
    const gaps = detectEntityGaps().slice(0, topN);

    return gaps.map(gap => {
        const targetPages = suggestTargetPages(gap.entity);

        return {
            entity: gap.entity,
            priority: gap.priority,
            targetPages,
            implementations: [
                {
                    page: targetPages[0] || '/image/compressor/png',
                    changes: [
                        `Add H2: "Understanding ${gap.entity}"`,
                        `Add FAQ: "What is ${gap.entity}?"`,
                        `Mention in benefits or features section`
                    ]
                }
            ],
            estimatedEffort: gap.priority === 'high' ? '2-4 hours' : '1-2 hours'
        };
    });
}

/**
 * Suggest target pages for an entity
 */
function suggestTargetPages(entity) {
    const pages = [];

    // Map entities to likely pages
    if (entity.includes('png')) {
        pages.push('/image/compressor/png', '/image/converter/png');
    } else if (entity.includes('jpeg') || entity.includes('jpg')) {
        pages.push('/image/compressor/jpeg', '/image/converter/jpeg');
    } else if (entity.includes('webp')) {
        pages.push('/image/compressor/webp', '/image/converter/webp');
    } else if (entity.includes('compress') || entity.includes('lossy') || entity.includes('lossless')) {
        pages.push('/image/compressor');
    } else if (entity.includes('convert')) {
        pages.push('/image/converter');
    } else {
        // Default to master hub
        pages.push('/image');
    }

    return pages;
}

/**
 * Export entity gap report as structured data
 */
export function exportEntityGapReport() {
    const gaps = detectEntityGaps();
    const byPriority = getEntityGapsByPriority();

    return {
        totalGaps: gaps.length,
        highPriority: byPriority.high.length,
        mediumPriority: byPriority.medium.length,
        lowPriority: byPriority.low.length,
        topGaps: gaps.slice(0, 10),
        fillingPlan: generateEntityFillingPlan(10),
        summary: {
            message: `Found ${gaps.length} entity gaps. ${byPriority.high.length} high priority, ${byPriority.medium.length} medium priority.`,
            recommendation: byPriority.high.length > 0
                ? 'Focus on high-priority gaps first for maximum impact.'
                : 'Solid entity coverage. Consider medium-priority gaps for expansion.'
        }
    };
}
