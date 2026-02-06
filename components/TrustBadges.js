"use client";

/**
 * TrustBadges Component
 * Displays trust signals for privacy and security
 */
export default function TrustBadges() {
    const badges = [
        {
            icon: '🔒',
            title: 'Client-side processing',
            description: 'No file uploads to servers'
        },
        {
            icon: '⚡',
            title: 'Instant results',
            description: 'Process images in your browser'
        },
        {
            icon: '🚫',
            title: 'No data collection',
            description: 'Complete privacy guaranteed'
        },
        {
            icon: '✅',
            title: 'Free forever',
            description: 'No ads, no tracking, no limits'
        }
    ];

    return (
        <div className="trust-badges">
            {badges.map((badge, index) => (
                <div key={index} className="trust-badge">
                    <div className="badge-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {badge.icon}
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {badge.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', opacity: 0.7, margin: 0 }}>
                        {badge.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
