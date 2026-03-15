"use client";

import Link from "next/link";
import { getLinksByPath } from "@/utils/topical-graph";
import { getAnchorForUrl } from "@/utils/anchor-text";

const toolMetadata = {
    '/image/compressor/png':  { name: 'PNG Compressor',         icon: '🖼️' },
    '/image/compressor/jpeg': { name: 'JPEG Compressor',        icon: '📸' },
    '/image/compressor/webp': { name: 'WebP Compressor',        icon: '⚡' },
    '/image/converter/png':   { name: 'PNG Converter',          icon: '🎨' },
    '/image/converter/jpeg':  { name: 'JPEG Converter',         icon: '📷' },
    '/image/converter/webp':  { name: 'WebP Converter',         icon: '🔄' },
    '/image/compressor':      { name: 'Image Compressor',       icon: '⚡' },
    '/image/converter':       { name: 'Image Converter',        icon: '🔄' },
    '/image/compare':         { name: 'Compare Tools',          icon: '⚖️' },
    '/video/compressor':      { name: 'Video Compressor',       icon: '🎬' },
    '/video/compressor/mp4':  { name: 'MP4 Compressor',         icon: '🎬' },
    '/video/compressor/webm': { name: 'WebM Compressor',        icon: '🌐' },
    '/video/compressor/mov':  { name: 'MOV Compressor',         icon: '📱' },
    '/compress-mp4-online':   { name: 'Compress MP4 Online',    icon: '🎬' },
    '/compress-video-for-website': { name: 'Compress Video for Website', icon: '⚡' },
};

export default function RelatedTools({ currentPath }) {
    const links = getLinksByPath(currentPath);

    if (!links.siblings && !links.related) return null;

    return (
        <section className="related-tools-section">
            <h2>Related Tools</h2>

            <div className="tools-grid">
                {links.siblings?.map((path, index) => {
                    const tool = toolMetadata[path];
                    if (!tool) return null;
                    return (
                        <Link key={path} href={path} className="related-tool-card">
                            <span className="related-tool-icon">{tool.icon}</span>
                            <div className="related-tool-name">{tool.name}</div>
                            <div className="related-tool-desc">{getAnchorForUrl(path, index)}</div>
                        </Link>
                    );
                })}

                {links.related?.slice(0, 3).map((path, index) => {
                    const tool = toolMetadata[path];
                    const name = tool?.name || path.split('/').pop().replace(/-/g, ' ');
                    const icon = tool?.icon || '🔧';
                    return (
                        <Link key={path} href={path} className="related-tool-card">
                            <span className="related-tool-icon">{icon}</span>
                            <div className="related-tool-name">{name}</div>
                            <div className="related-tool-desc">{getAnchorForUrl(path, index + 10)}</div>
                        </Link>
                    );
                })}
            </div>

            {links.parent && (
                <div className="related-tools-back">
                    <Link href={links.parent}>
                        ← Back to {links.parent === '/' ? 'Home' : toolMetadata[links.parent]?.name || 'Hub'}
                    </Link>
                </div>
            )}
        </section>
    );
}
