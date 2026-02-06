import { detectCannibalization } from './cannibalization-detector';
import { generateLinkSuggestions } from './ai-link-optimizer';
import { detectDecayingContent } from './content-decay-detector';
import { detectSerpVolatility, trackSerpFeatures } from './serp-volatility-monitor';
import { detectEntityGaps } from './entity-gap-analyzer';
import { getFullAuthorityReport } from './authority-score';
import { validateCrawlPaths } from './crawl-simulator';
import { getIndexationStats } from './indexation-rules';
import { routeQueriesBatch } from './intent-router';

/**
 * Closed-Loop SEO Feedback System
 * Orchestrates all SEO automation systems and generates consolidated recommendations
 */

/**
 * Run complete SEO feedback loop
 * @param {Object} searchConsole Data - Search Console metrics and data
 * @param {Object} serpData - Current SERP features and rankings
 * @param {Object} historicalSerpData - Historical SERP data for comparison
 * @returns {Object} Complete feedback report with recommendations
 */
export function runSeoFeedbackLoop(searchConsoleData = {}, serpData = {}, historicalSerpData = {}) {
    const feedback = {
        timestamp: new Date().toISOString(),
        inputs: {},
        analysis: {},
        recommendations: [],
        requiresApproval: [],
        autoActions: [],
        summary: {}
    };

    // 1. COLLECT INPUTS
    console.log('🔍 Collecting system inputs...');
    feedback.inputs = collectInputs(searchConsoleData, serpData);

    // 2. RUN ANALYSIS
    console.log('📊 Running comprehensive analysis...');
    feedback.analysis = runAnalysis(searchConsoleData, serpData, historicalSerpData);

    // 3. GENERATE RECOMMENDATIONS
    console.log('💡 Generating recommendations...');
    feedback.recommendations = consolidateRecommendations(feedback.analysis);

    // 4. FLAG ITEMS REQUIRING APPROVAL
    feedback.requiresApproval = feedback.recommendations.filter(r => r.requiresApproval);
    feedback.autoActions = feedback.recommendations.filter(r => !r.requiresApproval);

    // 5. GENERATE SUMMARY
    feedback.summary = generateSummary(feedback);

    console.log('✅ SEO feedback loop complete');

    return feedback;
}

/**
 * Collect all system inputs
 */
function collectInputs(searchConsoleData, serpData) {
    return {
        searchConsole: {
            pages: searchConsoleData.pages?.length || 0,
            queries: searchConsoleData.queries?.length || 0,
            totalImpressions: searchConsoleData.totalImpressions || 0,
            totalClicks: searchConsoleData.totalClicks || 0,
            avgCTR: searchConsoleData.avgCTR || 0
        },
        crawlData: validateCrawlPaths(),
        indexStatus: getIndexationStats(),
        serpFeatures: {
            features: serpData.features?.length || 0,
            types: serpData.features
                ? [...new Set(serpData.features.map(f => f.type))].length
                : 0
        },
        authorityScores: getFullAuthorityReport()
    };
}

/**
 * Run all analysis systems
 */
function runAnalysis(searchConsoleData, serpData, historicalSerpData) {
    return {
        decayingContent: detectDecayingContent(searchConsoleData),
        cannibalization: detectCannibalization(),
        volatility: detectSerpVolatility(searchConsoleData),
        serpFeatures: trackSerpFeatures(serpData, historicalSerpData),
        linkOpportunities: generateLinkSuggestions(searchConsoleData),
        entityGaps: detectEntityGaps(),
        queryRouting: searchConsoleData.queries
            ? routeQueriesBatch(searchConsoleData.queries.slice(0, 100).map(q => q.query))
            : []
    };
}

/**
 * Consolidate all recommendations from different systems
 */
function consolidateRecommendations(analysis) {
    const recommendations = [];

    // 1. CRITICAL: Content decay (merge/noindex/redirect)
    analysis.decayingContent
        .filter(page => page.severity === 'critical' || page.severity === 'high')
        .forEach(page => {
            page.recommendations.forEach(rec => {
                recommendations.push({
                    system: 'content-decay',
                    type: rec.action,
                    page: page.page,
                    priority: 'critical',
                    severity: page.severity,
                    description: rec.description,
                    tasks: rec.tasks || [],
                    options: rec.options || [],
                    requiresApproval: ['merge-or-noindex', 'merge', 'noindex', 'redirect'].includes(rec.action),
                    reason: `Page decaying: ${page.issues.map(i => i.type).join(', ')}`
                });
            });
        });

    // 2. CRITICAL: SERP feature losses
    analysis.serpFeatures.losses.forEach(loss => {
        recommendations.push({
            system: 'serp-monitoring',
            type: 'feature-recovery',
            page: loss.page,
            feature: loss.type,
            query: loss.query,
            priority: 'critical',
            description: `Lost ${loss.type} for "${loss.query}"`,
            playbook: loss.playbook,
            requiresApproval: false,
            reason: 'SERP feature loss detected'
        });
    });

    // 3. HIGH: Ranking volatility (major drops)
    analysis.volatility
        .filter(v => v.severity === 'high' && v.trend === 'declining')
        .forEach(vol => {
            recommendations.push({
                system: 'volatility-monitor',
                type: 'ranking-recovery',
                page: vol.page,
                priority: 'high',
                description: `Major ranking drop detected (volatility: ${vol.volatilityScore})`,
                trend: vol.trend,
                recommendations: vol.recommendations,
                requiresApproval: false,
                reason: vol.reason
            });
        });

    // 4. HIGH: Cannibalization issues
    analysis.cannibalization
        .filter(c => c.severity === 'high' || c.severity === 'medium')
        .forEach(conflict => {
            conflict.recommendations.forEach(rec => {
                recommendations.push({
                    system: 'cannibalization',
                    type: rec.action,
                    page: rec.page,
                    target: rec.target,
                    priority: rec.priority,
                    description: rec.description,
                    requiresApproval: rec.requiresApproval || false,
                    reason: `Intent cannibalization: ${conflict.intent}`
                });
            });
        });

    // 5. MEDIUM: Link opportunities
    analysis.linkOpportunities
        .filter(link => link.priority === 'high')
        .slice(0, 10) // Top 10 only
        .forEach(link => {
            recommendations.push({
                system: 'link-optimizer',
                type: link.type,
                fromPage: link.fromPage,
                toPage: link.toPage,
                anchorText: link.anchorText,
                priority: 'medium',
                description: link.reason,
                expectedImpact: link.expectedImpact,
                placement: link.placement,
                requiresApproval: false
            });
        });

    // 6. MEDIUM: Entity gaps
    analysis.entityGaps
        .slice(0, 5) // Top 5 gaps
        .forEach(gap => {
            recommendations.push({
                system: 'entity-analysis',
                type: 'fill-entity-gap',
                entity: gap.entity,
                priority: gap.priority === 'high' ? 'medium' : 'low',
                description: `Add missing entity: ${gap.entity}`,
                actions: gap.suggestedActions,
                requiresApproval: false,
                reason: `${gap.competitorMentions} competitors mention this`
            });
        });

    // 7. LOW: Query routing opportunities
    const routingOpportunities = analysis.queryRouting
        .filter(r => r.recommendation === 'Consider creating programmatic page')
        .slice(0, 5);

    routingOpportunities.forEach(opp => {
        recommendations.push({
            system: 'query-routing',
            type: 'create-programmatic-page',
            query: opp.query,
            suggestedPage: opp.primaryPage,
            priority: 'low',
            description: `Create programmatic page for "${opp.query}"`,
            confidence: opp.confidence,
            requiresApproval: true,
            reason: 'High-volume query with no dedicated page'
        });
    });

    // Sort by priority
    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
    return recommendations.sort((a, b) =>
        priorityOrder[b.priority] - priorityOrder[a.priority]
    );
}

/**
 * Generate feedback summary
 */
function generateSummary(feedback) {
    return {
        totalRecommendations: feedback.recommendations.length,
        byPriority: {
            critical: feedback.recommendations.filter(r => r.priority === 'critical').length,
            high: feedback.recommendations.filter(r => r.priority === 'high').length,
            medium: feedback.recommendations.filter(r => r.priority === 'medium').length,
            low: feedback.recommendations.filter(r => r.priority === 'low').length
        },
        bySystem: {
            contentDecay: feedback.recommendations.filter(r => r.system === 'content-decay').length,
            serpMonitoring: feedback.recommendations.filter(r => r.system === 'serp-monitoring').length,
            volatility: feedback.recommendations.filter(r => r.system === 'volatility-monitor').length,
            cannibalization: feedback.recommendations.filter(r => r.system === 'cannibalization').length,
            linkOptimizer: feedback.recommendations.filter(r => r.system === 'link-optimizer').length,
            entityAnalysis: feedback.recommendations.filter(r => r.system === 'entity-analysis').length,
            queryRouting: feedback.recommendations.filter(r => r.system === 'query-routing').length
        },
        requiresApproval: feedback.requiresApproval.length,
        autoActions: feedback.autoActions.length,
        healthScore: calculateHealthScore(feedback),
        topActions: feedback.recommendations
            .filter(r => r.priority === 'critical' || r.priority === 'high')
            .slice(0, 5)
    };
}

/**
 * Calculate overall SEO health score (0-100)
 */
function calculateHealthScore(feedback) {
    let score = 100;

    // Deduct for issues
    score -= feedback.analysis.decayingContent.length * 2;
    score -= feedback.analysis.cannibalization.length * 3;
    score -= feedback.analysis.serpFeatures.losses.length * 5;
    score -= feedback.analysis.volatility.filter(v => v.severity === 'high').length * 4;

    // Add for strengths
    score += feedback.analysis.serpFeatures.gains.length * 2;
    score += Math.min(feedback.inputs.serpFeatures.features, 20); // Max +20 for SERP features

    return Math.max(0, Math.min(100, score));
}

/**
 * Export feedback report as JSON
 */
export function exportFeedbackReport(feedback) {
    return {
        ...feedback,
        generated: new Date().toISOString(),
        version: '1.0.0'
    };
}

/**
 * Get quick actions (top 10recommendations that can be acted on immediately)
 */
export function getQuickActions(feedback) {
    return feedback.recommendations
        .filter(r => !r.requiresApproval)
        .slice(0, 10)
        .map(r => ({
            action: r.type,
            page: r.page || r.toPage,
            priority: r.priority,
            description: r.description
        }));
}
