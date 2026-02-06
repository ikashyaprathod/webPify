/**
 * Query Intent Classifier
 * Classifies search queries into intent types and routes to optimal pages
 */

/**
 * Intent patterns for classification
 */
const intentPatterns = {
    tool: {
        actions: ['compress', 'reduce', 'shrink', 'optimize', 'minimize'],
        formats: ['png', 'jpeg', 'jpg', 'webp'],
        modifiers: ['online', 'free', 'tool', 'compressor', 'image', 'photo', 'picture']
    },

    conversion: {
        patterns: [
            /(\w+)\s*to\s*(\w+)/i,           // "png to webp"
            /convert\s*(\w+)\s*to\s*(\w+)/i, // "convert png to webp"
            /(\w+)\s*converter/i              // "webp converter"
        ],
        formats: ['png', 'jpeg', 'jpg', 'webp']
    },

    comparison: {
        patterns: [
            /(\w+)\s*vs\s*(\w+)/i,        // "png vs webp"
            /(\w+)\s*versus\s*(\w+)/i,
            /difference between (\w+) and (\w+)/i,
            /(\w+) or (\w+)/i             // "png or webp"
        ]
    },

    informational: {
        keywords: ['what is', 'how to', 'how do', 'why', 'when', 'best', 'guide', 'tutorial'],
        topics: ['compression', 'optimization', 'format', 'quality', 'size', 'seo', 'performance']
    }
};

/**
 * Classify query intent
 */
export function classifyQueryIntent(query) {
    const normalized = query.toLowerCase().trim();

    // Check tool intent
    const toolIntent = matchesToolIntent(normalized);
    if (toolIntent) return toolIntent;

    // Check conversion intent
    const conversionIntent = matchesConversionIntent(normalized);
    if (conversionIntent) return conversionIntent;

    // Check comparison intent
    const comparisonIntent = matchesComparisonIntent(normalized);
    if (comparisonIntent) return comparisonIntent;

    // Check informational intent
    const informationalIntent = matchesInformationalIntent(normalized);
    if (informationalIntent) return informationalIntent;

    // Default: unknown intent, route to main hub
    return {
        type: 'unknown',
        query: normalized,
        targetPage: '/image',
        confidence: 0.3
    };
}

/**
 * Match tool intent
 */
function matchesToolIntent(query) {
    const { actions, formats } = intentPatterns.tool;

    let action = null;
    let format = null;

    // Extract action
    for (const act of actions) {
        if (query.includes(act)) {
            action = act === 'minimize' ? 'compress' : act; // Normalize
            break;
        }
    }

    // Extract format
    for (const fmt of formats) {
        if (query.includes(fmt)) {
            format = fmt === 'jpg' ? 'jpeg' : fmt; // Normalize
            break;
        }
    }

    if (action && format) {
        return {
            type: 'tool',
            action,
            format,
            query,
            targetPage: `/image/compressor/${format}`,
            confidence: 0.9
        };
    }

    // Conversion action detected without format
    if (action) {
        return {
            type: 'tool',
            action,
            format: null,
            query,
            targetPage: '/image/compressor',
            confidence: 0.6
        };
    }

    return null;
}

/**
 * Match conversion intent
 */
function matchesConversionIntent(query) {
    const { patterns, formats } = intentPatterns.conversion;

    for (const pattern of patterns) {
        const match = query.match(pattern);
        if (match) {
            const fromFormat = normalizeFormat(match[1]);
            const toFormat = match[2] ? normalizeFormat(match[2]) : null;

            if (fromFormat && toFormat && formats.includes(fromFormat) && formats.includes(toFormat)) {
                return {
                    type: 'conversion',
                    fromFormat,
                    toFormat,
                    query,
                    targetPage: `/image/converter/${toFormat}`,
                    confidence: 0.9
                };
            }

            // Only target format specified
            if (toFormat && formats.includes(toFormat)) {
                return {
                    type: 'conversion',
                    fromFormat: null,
                    toFormat,
                    query,
                    targetPage: `/image/converter/${toFormat}`,
                    confidence: 0.7
                };
            }
        }
    }

    return null;
}

/**
 * Match comparison intent
 */
function matchesComparisonIntent(query) {
    const { patterns } = intentPatterns.comparison;

    for (const pattern of patterns) {
        const match = query.match(pattern);
        if (match) {
            const format1 = normalizeFormat(match[1]);
            const format2 = normalizeFormat(match[2]);

            if (format1 && format2) {
                return {
                    type: 'comparison',
                    formats: [format1, format2],
                    query,
                    targetPage: `/compare/${format1}-vs-${format2}`,
                    confidence: 0.8,
                    alternativePage: '/image/compare'
                };
            }
        }
    }

    return null;
}

/**
 * Match informational intent
 */
function matchesInformationalIntent(query) {
    const { keywords, topics } = intentPatterns.informational;

    // Check for informational keywords
    const hasInfoKeyword = keywords.some(kw => query.includes(kw));

    if (hasInfoKeyword) {
        // Extract topic
        const topic = topics.find(t => query.includes(t));

        return {
            type: 'informational',
            topic: topic || 'general',
            query,
            targetPage: topic === 'compression' ? '/image/compressor'
                : topic === 'format' ? '/image/compare'
                    : '/image',
            confidence: 0.7
        };
    }

    return null;
}

/**
 * Normalize format name
 */
function normalizeFormat(format) {
    if (!format) return null;

    const normalized = format.toLowerCase().trim();

    // Normalize variations
    if (normalized === 'jpg') return 'jpeg';
    if (['png', 'jpeg', 'webp'].includes(normalized)) return normalized;

    return null;
}

/**
 * Get confidence level label
 */
export function getConfidenceLabel(confidence) {
    if (confidence >= 0.8) return 'high';
    if (confidence >= 0.6) return 'medium';
    return 'low';
}

/**
 * Classify multiple queries (batch)
 */
export function classifyQueriesBatch(queries) {
    return queries.map(query => ({
        query,
        intent: classifyQueryIntent(query)
    }));
}

/**
 * Get intent statistics
 */
export function getIntentStats(classifiedQueries) {
    const stats = {
        tool: 0,
        conversion: 0,
        comparison: 0,
        informational: 0,
        unknown: 0,
        byConfidence: {
            high: 0,
            medium: 0,
            low: 0
        }
    };

    classifiedQueries.forEach(({ intent }) => {
        stats[intent.type]++;
        const confidenceLabel = getConfidenceLabel(intent.confidence);
        stats.byConfidence[confidenceLabel]++;
    });

    return stats;
}
