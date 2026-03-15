"use client";

import Link from "next/link";
import { getLinksByPath } from "@/utils/topical-graph";
import { getAnchorForUrl } from "@/utils/anchor-text";

const toolMetadata = {
    '/image/compress/png':       { name: 'PNG Compressor',         icon: '🖼️' },
    '/image/compress/jpeg':      { name: 'JPEG Compressor',        icon: '📸' },
    '/image/compress/webp':      { name: 'WebP Compressor',        icon: '⚡' },
    '/image/convert/to-png':     { name: 'PNG Converter',          icon: '🎨' },
    '/image/convert/to-jpeg':    { name: 'JPEG Converter',         icon: '📷' },
    '/image/convert/to-webp':    { name: 'WebP Converter',         icon: '🔄' },
    '/image/compress':           { name: 'Image Compressor',       icon: '⚡' },
    '/image/convert':            { name: 'Image Converter',        icon: '🔄' },
    '/image/edit/compare':       { name: 'Compare Tools',          icon: '⚖️' },
    '/video/compress':           { name: 'Video Compressor',       icon: '🎬' },
    '/video/compress/mp4':       { name: 'MP4 Compressor',         icon: '🎬' },
    '/video/compress/webm':      { name: 'WebM Compressor',        icon: '🌐' },
    '/video/compress/mov':       { name: 'MOV Compressor',         icon: '📱' },
    '/compress-mp4-online':      { name: 'Compress MP4 Online',    icon: '🎬' },
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
