"use client";

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
                    <span className="trust-badge-icon">{badge.icon}</span>
                    <h4 className="trust-badge-title">{badge.title}</h4>
                    <p className="trust-badge-desc">{badge.description}</p>
                </div>
            ))}
        </div>
    );
}
