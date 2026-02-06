"use client";

import Image from "next/image";
import Link from "next/link";
import ImageCompressor from "@/components/ImageCompressor";
import ImageConverter from "@/components/ImageConverter";
import AIOverviewBlock from "@/components/AIOverviewBlock";
import RelatedTools from "@/components/RelatedTools";
import { generateFAQPageSchema } from "@/data/paa-questions";

/**
 * Programmatic Tool Page Template
 * Used for auto-generated pages with action + format + intent combinations
 */
export default function ProgrammaticToolPage({
    action,
    format,
    intent,
    intentLabel,
    metadata,
    aiOverview = null,
    faqs = [],
    benefits = []
}) {
    const formatUpper = format.toUpperCase();
    const isCompressionAction = ['compress', 'reduce', 'shrink', 'optimize'].includes(action);

    // Determine which tool component to use
    const ToolComponent = action === 'convert' ? ImageConverter : ImageCompressor;

    // Generate schema for FAQs
    const faqSchema = faqs.length > 0 ? generateFAQPageSchema(faqs) : null;

    return (
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                <Link href="/">Home</Link> →
                <Link href="/image"> Image Tools</Link> →
                <Link href={`/image/${action === 'convert' ? 'converter' : 'compressor'}`}>
                    {action === 'convert' ? 'Converter' : 'Compressor'}
                </Link> →
                <span> {metadata.h1}</span>
            </nav>

            {/* H1 Title */}
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.2
            }}>
                {metadata.h1}
            </h1>

            {/* Intro */}
            <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                opacity: 0.9
            }}>
                {metadata.description}
            </p>

            {/* AI Overview Block (if provided) */}
            {aiOverview && (
                <AIOverviewBlock
                    topic={aiOverview.topic}
                    definition={aiOverview.definition}
                />
            )}

            {/* Tool Block */}
            <div style={{ marginBottom: '3rem' }}>
                <ToolComponent defaultFormat={format} />
            </div>

            {/* Benefits Section */}
            {benefits.length > 0 && (
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        {isCompressionAction ? 'Why Use This Tool?' : 'Key Benefits'}
                    </h2>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        {benefits.map((benefit, i) => (
                            <li key={i} style={{
                                padding: '1rem',
                                background: 'rgba(0, 112, 243, 0.05)',
                                borderRadius: '8px',
                                borderLeft: '3px solid var(--primary)'
                            }}>
                                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>✓</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{
                                padding: '1.5rem',
                                background: 'var(--background)',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px'
                            }}>
                                <h3 style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    marginBottom: '0.75rem',
                                    color: 'var(--primary)'
                                }}>
                                    {faq.question}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                    margin: 0,
                                    opacity: 0.9
                                }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Related Tools */}
            <RelatedTools currentPath={`/${action}-${format}-${intent}`} />

            {/* FAQ Schema */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </div>
    );
}
