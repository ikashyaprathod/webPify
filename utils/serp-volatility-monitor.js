import { getPlaybook } from '../data/serp-response-playbooks';

/**
 * SERP Volatility & Feature Monitor
 * Tracks ranking changes, SERP features, and competitor movements
 */

/**
 * Track SERP features over time
 * @param {Object} currentData - Current SERP feature data
 * @param {Object} historicalData - Historical SERP feature data
 * @returns {Object} Feature tracking with gains and losses
 */
export function trackSerpFeatures(currentData = {}, historicalData = {}) {
    const tracking = {
        timestamp: new Date().toISOString(),
        features: {
            featuredSnippets: [],
            peopleAlsoAsk: [],
            aiOverviews: [],
            imagePacks: []
        },
        gains: [],
        losses: [],
        stable: []
    };

    // Compare current vs historical
    const current = normalizeSerpData(currentData);
    const historical = normalizeSerpData(historicalData);

    // Detect gains (new features we now own)
    current.forEach(feature => {
        const wasPresent = historical.some(h =>
            h.type === feature.type && h.query === feature.query
        );

        if (!wasPresent) {
            tracking.gains.push({
                ...feature,
                timestamp: new Date().toISOString(),
                action: 'monitor-closely',
                priority: 'high'
            });
        } else {
            tracking.stable.push(feature);
        }
    });

    // Detect losses (features we no longer own)
    historical.forEach(feature => {
        const stillPresent = current.some(c =>
            c.type === feature.type && c.query === feature.query
        );

        if (!stillPresent) {
            const playbook = getRecoveryPlaybook(feature.type);

            tracking.losses.push({
                ...feature,
                timestamp: new Date().toISOString(),
                action: 'execute-recovery-playbook',
                priority: 'critical',
                playbook
            });
        }
    });

    // Categorize features
    current.forEach(feature => {
        switch (feature.type) {
            case 'featured-snippet':
                tracking.features.featuredSnippets.push(feature);
                break;
            case 'people-also-ask':
                tracking.features.peopleAlsoAsk.push(feature);
                break;
            case 'ai-overview':
                tracking.features.aiOverviews.push(feature);
                break;
            case 'image-pack':
                tracking.features.imagePacks.push(feature);
                break;
        }
    });

    return tracking;
}

/**
 * Normalize SERP data to standard format
 */
function normalizeSerpData(data) {
    if (!data || !data.features) return [];

    return data.features.map(f => ({
        type: f.type,
        query: f.query,
        page: f.page,
        position: f.position || 0
    }));
}

/**
 * Get recovery playbook for feature type
 */
function getRecoveryPlaybook(featureType) {
    const playbookMap = {
        'featured-snippet': 'snippet-loss',
        'people-also-ask': 'paa-loss',
        'ai-overview': 'ai-overview-appears'
    };

    const playbookId = playbookMap[featureType];
    return playbookId ? getPlaybook(playbookId) : null;
}

/**
 * Detect SERP volatility
 * @param {Object} searchConsoleData - Search Console ranking data
 * @returns {Array} Pages with significant volatility
 */
export function detectSerpVolatility(searchConsoleData = {}) {
    if (!searchConsoleData.pages) return [];

    const volatility = [];

    searchConsoleData.pages.forEach(page => {
        const positionHistory = page.positionHistory || [];

        if (positionHistory.length < 7) return; // Need at least 7 days

        // Calculate volatility score
        const volatilityScore = calculateVolatilityScore(positionHistory);

        if (volatilityScore > 5) {
            const trend = detectTrend(positionHistory);
            const reason = identifyVolatilityReason(page, positionHistory);

            volatility.push({
                page: page.page,
                currentPosition: positionHistory[positionHistory.length - 1],
                volatilityScore,
                trend,
                reason,
                severity: volatilityScore > 10 ? 'high' : 'medium',
                recommendations: generateVolatilityResponse(page, trend, reason)
            });
        }
    });

    return volatility.sort((a, b) => b.volatilityScore - a.volatilityScore);
}

/**
 * Calculate position volatility score
 */
function calculateVolatilityScore(positionHistory) {
    if (positionHistory.length < 2) return 0;

    let totalChange = 0;

    for (let i = 1; i < positionHistory.length; i++) {
        totalChange += Math.abs(positionHistory[i] - positionHistory[i - 1]);
    }

    return Math.round(totalChange / (positionHistory.length - 1));
}

/**
 * Detect position trend
 */
function detectTrend(positionHistory) {
    if (positionHistory.length < 2) return 'stable';

    const first = positionHistory[0];
    const last = positionHistory[positionHistory.length - 1];
    const change = last - first;

    // Lower position number = better ranking
    if (change < -3) return 'improving';
    if (change > 3) return 'declining';
    return 'stable';
}

/**
 * Identify reason for volatility
 */
function identifyVolatilityReason(page, positionHistory) {
    const trend = detectTrend(positionHistory);
    const recentChange = positionHistory[positionHistory.length - 1] - positionHistory[positionHistory.length - 7];

    if (Math.abs(recentChange) > 20) {
        return trend === 'declining'
            ? 'major-ranking-drop'
            : 'major-ranking-gain';
    }

    if (Math.abs(recentChange) > 10) {
        return trend === 'declining'
            ? 'significant-drop'
            : 'significant-gain';
    }

    return 'fluctuating-rankings';
}

/**
 * Generate recommendations for volatility
 */
function generateVolatilityResponse(page, trend, reason) {
    const recommendations = [];

    if (trend === 'declining' || reason.includes('drop')) {
        recommendations.push({
            action: 'execute-playbook',
            playbook: getPlaybook('ranking-drop'),
            priority: 'critical',
            description: 'Execute ranking recovery protocol'
        });

        recommendations.push({
            action: 'technical-audit',
            priority: 'high',
            description: 'Check for technical issues (indexation, crawl errors, performance)'
        });
    }

    if (trend === 'improving') {
        recommendations.push({
            action: 'monitor-and-maintain',
            priority: 'medium',
            description: 'Monitor improvements and maintain momentum'
        });

        recommendations.push({
            action: 'analyze-success',
            priority: 'low',
            description: 'Identify what caused improvement to replicate elsewhere'
        });
    }

    if (reason === 'fluctuating-rankings') {
        recommendations.push({
            action: 'stabilize-content',
            priority: 'medium',
            description: 'Improve content quality and authority to reduce fluctuations',
            tasks: [
                'Add more internal links',
                'Expand content depth',
                'Improve entity coverage',
                'Add more FAQs'
            ]
        });
    }

    return recommendations;
}

/**
 * Get volatility summary
 */
export function getVolatilitySummary(volatilePages) {
    return {
        total: volatilePages.length,
        bySeverity: {
            high: volatilePages.filter(p => p.severity === 'high').length,
            medium: volatilePages.filter(p => p.severity === 'medium').length
        },
        byTrend: {
            declining: volatilePages.filter(p => p.trend === 'declining').length,
            improving: volatilePages.filter(p => p.trend === 'improving').length,
            stable: volatilePages.filter(p => p.trend === 'stable').length
        },
        criticalIssues: volatilePages.filter(p =>
            p.severity === 'high' && p.trend === 'declining'
        ),
        avgVolatility: volatilePages.length > 0
            ? Math.round(volatilePages.reduce((sum, p) => sum + p.volatilityScore, 0) / volatilePages.length)
            : 0
    };
}

/**
 * Export SERP monitoring report
 */
export function exportSerpReport(currentData, historicalData, searchConsoleData) {
    const featureTracking = trackSerpFeatures(currentData, historicalData);
    const volatility = detectSerpVolatility(searchConsoleData);

    return {
        timestamp: new Date().toISOString(),
        features: {
            total: featureTracking.features.featuredSnippets.length +
                featureTracking.features.peopleAlsoAsk.length +
                featureTracking.features.aiOverviews.length +
                featureTracking.features.imagePacks.length,
            gains: featureTracking.gains.length,
            losses: featureTracking.losses.length,
            breakdown: featureTracking.features
        },
        volatility: {
            summary: getVolatilitySummary(volatility),
            pages: volatility
        },
        urgentActions: [
            ...featureTracking.losses.map(loss => ({
                type: 'feature-loss',
                page: loss.page,
                feature: loss.type,
                priority: 'critical'
            })),
            ...volatility
                .filter(v => v.severity === 'high' && v.trend === 'declining')
                .map(v => ({
                    type: 'ranking-drop',
                    page: v.page,
                    volatility: v.volatilityScore,
                    priority: 'critical'
                }))
        ]
    };
}
