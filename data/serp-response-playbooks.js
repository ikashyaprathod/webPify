/**
 * SERP Response Playbooks
 * Predefined action plans for responding to SERP changes
 */

export const serpResponsePlaybooks = {
    'snippet-loss': {
        name: 'Featured Snippet Recovery',
        description: 'Actions to take when losing a featured snippet position',
        severity: 'high',
        steps: [
            {
                step: 1,
                action: 'Analyze winner\'s snippet',
                description: 'Study the page that took the snippet',
                tasks: [
                    'Screenshot current snippet',
                    'Analyze formatting (list, table, paragraph)',
                    'Note answer length and structure',
                    'Check for schema markup'
                ]
            },
            {
                step: 2,
                action: 'Reformat content',
                description: 'Match or exceed winner\'s format',
                tasks: [
                    'Move definition to top of page',
                    'Keep answer 40-60 words',
                    'Use bullet lists if winner uses them',
                    'Use tables if winner uses them',
                    'Add clear H2/H3 matching query'
                ]
            },
            {
                step: 3,
                action: 'Improve answer quality',
                description: 'Make answer more comprehensive',
                tasks: [
                    'Add factual accuracy',
                    'Include specific numbers/data',
                    'Remove marketing language',
                    'Make tone more neutral',
                    'Add context where needed'
                ]
            },
            {
                step: 4,
                action: 'Add structured data',
                description: 'Implement appropriate schema',
                tasks: [
                    'Add FAQ schema if Q&A format',
                    'Add HowTo schema if steps',
                    'Ensure schema validates',
                    'Test in Rich Results tool'
                ]
            }
        ],
        expectedRecoveryTime: '2-4 weeks',
        successMetrics: ['Snippet reclaimed', 'CTR improved', 'Position maintained']
    },

    'ai-overview-appears': {
        name: 'Optimize for AI Overview',
        description: 'Adapt content when AI Overview takes top position',
        severity: 'high',
        steps: [
            {
                step: 1,
                action: 'Add concise definition block',
                description: 'Create direct answer section',
                tasks: [
                    'Place definition in first 100 words',
                    'Keep definition 2-3 sentences max',
                    'Use simple, clear language',
                    'Match query structure exactly'
                ]
            },
            {
                step: 2,
                action: 'Improve factual clarity',
                description: 'Make content AI-parseable',
                tasks: [
                    'Use active voice',
                    'Simplify complex sentences',
                    'Add specific data points',
                    'Remove ambiguous language',
                    'Fact-check all claims'
                ]
            },
            {
                step: 3,
                action: 'Add entity definitions',
                description: 'Define all important entities',
                tasks: [
                    'Define technical terms',
                    'Add format explanations',
                    'Include compression types',
                    'Link to authoritative sources'
                ]
            },
            {
                step: 4,
                action: 'Structure with clear headings',
                description: 'Improve content hierarchy',
                tasks: [
                    'Use descriptive H2/H3s',
                    'Match headings to common questions',
                    'Create scannable structure',
                    'Add table of contents if long'
                ]
            }
        ],
        expectedRecoveryTime: '1-3 weeks',
        successMetrics: ['Cited in AI Overview', 'CTR maintained', 'Position 1-3 organic']
    },

    'ranking-drop': {
        name: 'Ranking Recovery Protocol',
        description: 'Response to sudden ranking decline',
        severity: 'critical',
        steps: [
            {
                step: 1,
                action: 'Check technical issues',
                description: 'Rule out technical problems',
                tasks: [
                    'Verify indexation status',
                    'Check for crawl errors',
                    'Test page performance',
                    'Verify mobile usability',
                    'Check for manual actions'
                ]
            },
            {
                step: 2,
                action: 'Analyze competitors',
                description: 'Understand what changed',
                tasks: [
                    'Review top 3 ranked pages',
                    'Compare content depth',
                    'Check their update dates',
                    'Analyze their entities',
                    'Note their SERP features'
                ]
            },
            {
                step: 3,
                action: 'Add internal links',
                description: 'Boost page authority',
                tasks: [
                    'Add links from high-authority pages',
                    'Increase hub page mentions',
                    'Add to related-tools sections',
                    'Create contextual mentions'
                ]
            },
            {
                step: 4,
                action: 'Improve content freshness',
                description: 'Update and expand content',
                tasks: [
                    'Add missing entities',
                    'Expand FAQ section',
                    'Update statistics',
                    'Add new use cases',
                    'Improve title/description'
                ]
            },
            {
                step: 5,
                action: 'Monitor and adjust',
                description: 'Track recovery progress',
                tasks: [
                    'Check rankings daily',
                    'Monitor impressions trend',
                    'Track CTR changes',
                    'Note position fluctuations'
                ]
            }
        ],
        expectedRecoveryTime: '4-8 weeks',
        successMetrics: ['Rankings recovered', 'Traffic restored', 'Position stable']
    },

    'paa-loss': {
        name: 'People Also Ask Recovery',
        description: 'Regain lost PAA feature',
        severity: 'medium',
        steps: [
            {
                step: 1,
                action: 'Identify lost question',
                description: 'Determine which PAA was lost',
                tasks: [
                    'Check historical PAA data',
                    'Compare current vs previous',
                    'Note exact question wording'
                ]
            },
            {
                step: 2,
                action: 'Improve answer format',
                description: 'Optimize answer structure',
                tasks: [
                    'Add question as H2 or H3',
                    'Answer in 40-60 words',
                    'Use simple language',
                    'Place answer near heading'
                ]
            },
            {
                step: 3,
                action: 'Add FAQ schema',
                description: 'Implement structured data',
                tasks: [
                    'Create FAQPage schema',
                    'Include lost question',
                    'Add related questions',
                    'Validate schema'
                ]
            }
        ],
        expectedRecoveryTime: '1-2 weeks',
        successMetrics: ['PAA feature regained', 'Additional PAAs won']
    },

    'competitor-entry': {
        name: 'New Competitor Response',
        description: 'React to new competitor in top 3',
        severity: 'medium',
        steps: [
            {
                step: 1,
                action: 'Analyze competitor page',
                description: 'Understand their advantages',
                tasks: [
                    'Study their content structure',
                    'Note their unique features',
                    'Check their tools/functionality',
                    'Analyze their entities',
                    'Review their schema'
                ]
            },
            {
                step: 2,
                action: 'Identify content gaps',
                description: 'Find what they have that we don\'t',
                tasks: [
                    'Compare entity coverage',
                    'Check their FAQs',
                    'Note additional features',
                    'Review their examples'
                ]
            },
            {
                step: 3,
                action: 'Fill gaps',
                description: 'Add missing elements',
                tasks: [
                    'Add missing entities',
                    'Expand FAQ coverage',
                    'Improve tool functionality',
                    'Add comparison data'
                ]
            },
            {
                step: 4,
                action: 'Differentiate',
                description: 'Add unique value',
                tasks: [
                    'Highlight unique features',
                    'Add exclusive data',
                    'Improve user experience',
                    'Create better examples'
                ]
            }
        ],
        expectedRecoveryTime: '3-6 weeks',
        successMetrics: ['Maintained/improved rankings', 'Higher CTR', 'More SERP features']
    }
};

/**
 * Get playbook by type
 */
export function getPlaybook(type) {
    return serpResponsePlaybooks[type] || null;
}

/**
 * Get all playbooks
 */
export function getAllPlaybooks() {
    return Object.entries(serpResponsePlaybooks).map(([type, playbook]) => ({
        type,
        ...playbook
    }));
}

/**
 * Get playbooks by severity
 */
export function getPlaybooksBySeverity(severity) {
    return Object.entries(serpResponsePlaybooks)
        .filter(([, playbook]) => playbook.severity === severity)
        .map(([type, playbook]) => ({ type, ...playbook }));
}
