"use client";

/**
 * AI Overview Block Component
 * Optimized for AI search engines (Google AI Overviews, Bing Copilot, etc.)
 */
export default function AIOverviewBlock({ topic, definition }) {
    return (
        <div
            className="ai-overview-block"
            style={{
                padding: '1.5rem',
                background: 'rgba(0, 112, 243, 0.05)',
                border: '2px solid rgba(0, 112, 243, 0.1)',
                borderRadius: '12px',
                marginBottom: '2.5rem'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>💡</span>
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--foreground)'
                }}>
                    {topic}
                </h2>
            </div>
            <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                margin: 0,
                opacity: 0.9
            }}>
                {definition}
            </p>
        </div>
    );
}

/**
 * Predefined AI Overview topics
 */
export const aiOverviewTopics = {
    'png-compression': {
        topic: 'What is PNG Compression?',
        definition: 'PNG compression reduces file size by removing unnecessary metadata and optimizing color palettes using algorithms like pngquant. It\'s lossless, meaning visual quality remains identical while file sizes decrease by 60-90%. Unlike JPEG, PNG compression preserves transparency and doesn\'t introduce artifacts.'
    },
    'jpeg-compression': {
        topic: 'What is JPEG Compression?',
        definition: 'JPEG compression reduces file size using lossy algorithms that discard less important visual data. It\'s ideal for photos and complex images, achieving 40-90% file size reduction. Quality settings (0-100) balance file size vs visual quality, with 85 being optimal for most web images.'
    },
    'webp-format': {
        topic: 'What is WebP?',
        definition: 'WebP is a modern image format developed by Google that provides superior compression compared to PNG and JPEG. It offers 25-35% smaller file sizes while maintaining equivalent quality, supports both lossy and lossless compression, and includes transparency. WebP is supported by 97%+ of browsers.'
    },
    'image-optimization': {
        topic: 'Why Optimize Images?',
        definition: 'Image optimization reduces file sizes to improve page load speed, SEO rankings, and Core Web Vitals (LCP). Images typically account for 50-70% of page weight. Proper optimization can improve loading speed by 40-60%, reduce bandwidth costs, and enhance user experience.'
    }
};
