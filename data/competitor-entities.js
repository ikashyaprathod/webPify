// Competitor Entity Database

/**
 * Entity data extracted from major competitors
 * Used for gap analysis and coverage improvement
 */
export const competitorEntities = {
    'tinypng': {
        name: 'TinyPNG',
        url: 'https://tinypng.com',
        entities: [
            'PNG', 'JPEG', 'WebP',
            'Smart lossy compression',
            'Panda mascot',
            'API integration',
            'Color quantization',
            'Alpha transparency',
            'Batch processing',
            'Photoshop plugin',
            'WordPress plugin'
        ],
        formats: ['PNG', 'JPEG', 'WebP'],
        useCases: [
            'Web optimization',
            'App development',
            'API integration',
            'Plugin integration',
            'Batch compression'
        ],
        technicalTerms: [
            'Lossy compression',
            'Color quantization',
            'Smart lossy',
            'Alpha channel preservation',
            'Metadata removal'
        ],
        serpFeatures: [
            'Featured snippet: "compress png"',
            'PAA: "Does PNG compression reduce quality?"',
            'Image pack results',
            'Brand knowledge panel'
        ],
        strengths: ['Brand recognition', 'API', 'Plugins', 'Simple UX'],
        weaknesses: ['File size limits (5MB free)', 'Paid API', 'Limited formats']
    },

    'freeconvert': {
        name: 'FreeConvert',
        url: 'https://www.freeconvert.com',
        entities: [
            'Image converter',
            'Format conversion',
            'Batch processing',
            'Cloud storage integration',
            'PNG', 'JPEG', 'WebP', 'GIF', 'BMP', 'TIFF', 'SVG',
            'Video converter',
            'Audio converter'
        ],
        formats: ['PNG', 'JPEG', 'WebP', 'GIF', 'BMP', 'TIFF', 'SVG', 'ICO', 'PSD'],
        useCases: [
            'Format conversion',
            'Batch processing',
            'Multi-file conversion',
            'Cloud integration'
        ],
        technicalTerms: [
            'Format conversion',
            'Image encoding',
            'Lossless conversion',
            'Format compatibility'
        ],
        serpFeatures: [
            'Featured snippet: "convert image format"',
            'PAA appearances',
            'Sitelinks'
        ],
        strengths: ['Format variety', 'Batch processing', 'Free limits'],
        weaknesses: ['Slower processing', 'Complex UI', 'Ads']
    },

    'iloveimg': {
        name: 'iLoveIMG',
        url: 'https://www.iloveimg.com',
        entities: [
            'Image tools',
            'Compress image',
            'Resize image',
            'Crop image',
            'Convert image',
            'PNG', 'JPEG', 'WebP', 'GIF',
            'Watermark',
            'Image editor',
            'Batch processing'
        ],
        formats: ['PNG', 'JPEG', 'WebP', 'GIF', 'SVG'],
        useCases: [
            'Image compression',
            'Image resizing',
            'Image editing',
            'Batch processing',
            'Watermarking'
        ],
        technicalTerms: [
            'Image compression',
            'Image resizing',
            'Format conversion',
            'Batch processing'
        ],
        serpFeatures: [
            'Featured snippets for various tools',
            'Strong PAA presence',
            'Sitelinks for tool categories'
        ],
        strengths: ['Tool variety', 'Batch processing', 'Simple UI'],
        weaknesses: ['Generic branding', 'Limited free tier', 'Registration required']
    },

    'squoosh': {
        name: 'Squoosh',
        url: 'https://squoosh.app',
        entities: [
            'Image compression',
            'WebP', 'AVIF', 'JPEG', 'PNG',
            'MozJPEG',
            'OxiPNG',
            'WebP encoder',
            'AVIF encoder',
            'Manual quality control',
            'Side-by-side comparison',
            'Google Chrome Labs'
        ],
        formats: ['WebP', 'AVIF', 'JPEG', 'PNG', 'JPEG XL'],
        useCases: [
            'Advanced compression',
            'Format comparison',
            'Quality testing',
            'Modern format adoption'
        ],
        technicalTerms: [
            'MozJPEG',
            'OxiPNG',
            'WebP encoder',
            'AVIF encoder',
            'Quality slider',
            'Codec comparison'
        ],
        serpFeatures: [
            'Featured in tech blogs',
            'Developer community mentions',
            'Google association'
        ],
        strengths: ['Modern formats', 'Advanced controls', 'Open source', 'Google brand'],
        weaknesses: ['Complex for beginners', 'No batch processing', 'Limited to single files']
    },

    'compressor_io': {
        name: 'Compressor.io',
        url: 'https://compressor.io',
        entities: [
            'Image compression',
            'PNG', 'JPEG', 'WebP', 'GIF', 'SVG',
            'Lossy compression',
            'Lossless compression',
            'Up to 90% compression'
        ],
        formats: ['PNG', 'JPEG', 'WebP', 'GIF', 'SVG'],
        useCases: [
            'Image compression',
            'Lossy vs lossless choice',
            'Quick compression'
        ],
        technicalTerms: [
            'Lossy compression',
            'Lossless compression',
            'Compression ratio',
            'Quality preservation'
        ],
        serpFeatures: [
            'Organic rankings for compression keywords',
            'Some PAA appearances'
        ],
        strengths: ['Simple UI', 'Lossy/lossless choice', 'Good compression'],
        weaknesses: ['Limited features', 'No batch', 'Ads']
    }
};

/**
 * Get all unique entities from competitors
 */
export function getAllCompetitorEntities() {
    const allEntities = new Set();

    Object.values(competitorEntities).forEach(competitor => {
        competitor.entities.forEach(entity => allEntities.add(entity));
        competitor.technicalTerms.forEach(term => allEntities.add(term));
    });

    return Array.from(allEntities);
}

/**
 * Get entities by competitor
 */
export function getCompetitorEntities(competitorId) {
    return competitorEntities[competitorId]?.entities || [];
}

/**
 * Get competitors that own a specific entity
 */
export function getCompetitorsWithEntity(entity) {
    const competitors = [];

    Object.entries(competitorEntities).forEach(([id, data]) => {
        if (data.entities.includes(entity) || data.technicalTerms.includes(entity)) {
            competitors.push({
                id,
                name: data.name,
                url: data.url
            });
        }
    });

    return competitors;
}

/**
 * Get SERP features owned by competitors
 */
export function getAllSerpFeatures() {
    const features = new Map();

    Object.entries(competitorEntities).forEach(([id, data]) => {
        data.serpFeatures.forEach(feature => {
            if (!features.has(feature)) {
                features.set(feature, []);
            }
            features.get(feature).push({ id, name: data.name });
        });
    });

    return Object.fromEntries(features);
}
