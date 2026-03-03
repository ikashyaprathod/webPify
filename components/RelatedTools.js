"use client";

import Link from "next/link";
import { getLinksByPath } from "@/utils/topical-graph";
import { getAnchorForUrl } from "@/utils/anchor-text";

/**
 * Tool metadata for display
 */
const toolMetadata = {
    '/image/compressor/png': { name: 'PNG Compressor', icon: '🖼️' },
    '/image/compressor/jpeg': { name: 'JPEG Compressor', icon: '📸' },
    '/image/compressor/webp': { name: 'WebP Compressor', icon: '⚡' },
    '/image/converter/png': { name: 'PNG Converter', icon: '🎨' },
    '/image/converter/jpeg': { name: 'JPEG Converter', icon: '📷' },
    '/image/converter/webp': { name: 'WebP Converter', icon: '🔄' },
    '/image/compressor': { name: 'Image Compressor', icon: '⚡' },
    '/image/converter': { name: 'Image Converter', icon: '🔄' },
    '/image/compare': { name: 'Compare Tools', icon: '⚖️' },
    '/video/compressor': { name: 'Video Compressor', icon: '🎬' },
    '/video/compressor/mp4': { name: 'MP4 Compressor', icon: '🎬' },
    '/video/compressor/webm': { name: 'WebM Compressor', icon: '🌐' },
    '/video/compressor/mov': { name: 'MOV Compressor', icon: '📱' },
    '/compress-mp4-online': { name: 'Compress MP4 Online', icon: '🎬' },
    '/compress-video-for-website': { name: 'Compress Video for Website', icon: '⚡' },
};

/**
 * RelatedTools Component
 * Displays related tools based on topical graph
 */
export default function RelatedTools({ currentPath }) {
    const links = getLinksByPath(currentPath);

    if (!links.siblings && !links.related) {
        return null;
    }

    return (
        <section className="related-tools-section">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Related Tools
            </h2>

            <div className="tools-grid" style={{ gap: '1rem' }}>
                {/* Sibling Tools */}
                {links.siblings?.map((path, index) => {
                    const tool = toolMetadata[path];
                    if (!tool) return null;

                    return (
                        <Link
                            key={path}
                            href={path}
                            className="related-tool-card"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                {tool.icon}
                            </div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                                {tool.name}
                            </h3>
                            <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                                {getAnchorForUrl(path, index)}
                            </span>
                        </Link>
                    );
                })}

                {/* Related Tools */}
                {links.related?.slice(0, 3).map((path, index) => {
                    const tool = toolMetadata[path];
                    const displayName = tool?.name || path.split('/').pop().replace(/-/g, ' ');
                    const displayIcon = tool?.icon || '🔧';

                    return (
                        <Link
                            key={path}
                            href={path}
                            className="related-tool-card"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                {displayIcon}
                            </div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                                {displayName}
                            </h3>
                            <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                                {getAnchorForUrl(path, index + 10)}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Back to Hub Link */}
            {links.parent && (
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Link
                        href={links.parent}
                        style={{ color: 'var(--primary)', fontSize: '0.95rem', textDecoration: 'underline' }}
                    >
                        ← Back to {links.parent === '/' ? 'Home' : toolMetadata[links.parent]?.name || 'Hub'}
                    </Link>
                </div>
            )}
        </section>
    );
}
