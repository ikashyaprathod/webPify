import { getSEOMetadata } from '@/utils/seo-config';
import { blogClusters } from '@/data/blog-clusters';
import { generatedContent } from '@/data/generated-posts';

export default function sitemap() {
    const baseUrl = 'https://webpify.vercel.app';
    const currentDate = new Date();

    // Generate blog posts sitemap entries
    const blogEntries = Object.values(blogClusters).flatMap(cluster => {
        // Category page
        const categoryEntry = {
            url: `${baseUrl}/blog/${cluster.slug}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        };

        // Post pages
        const postEntries = cluster.posts.map(post => ({
            url: `${baseUrl}/blog/${cluster.slug}/${post.slug}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: post.priority === 'high' ? 0.9 : 0.7,
        }));

        return [categoryEntry, ...postEntries];
    });

    const generatedEntries = Object.values(generatedContent).map(post => ({
        url: `${baseUrl}/blog/${post.category}/${post.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8 // Default high priority for scale-up content
    }));

    // Combine manual and generated
    const allBlogEntries = [...blogEntries, ...generatedEntries];


    return [
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...allBlogEntries,
        // Homepage
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Master Hub
        {
            url: `${baseUrl}/image`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Tool Hubs
        {
            url: `${baseUrl}/image/compressor`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/converter`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/image/compare`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Format Pages - Compressor
        {
            url: `${baseUrl}/image/compressor/png`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/jpeg`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/compressor/webp`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Format Pages - Converter
        {
            url: `${baseUrl}/image/converter/png`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/jpeg`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/image/converter/webp`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Programmatic Pages - Compress Pattern 1
        {
            url: `${baseUrl}/compress-png-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-webp-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Programmatic Pages - Reduce Pattern
        {
            url: `${baseUrl}/reduce-png-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-jpeg-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-webp-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Programmatic Pages - Shrink Pattern
        {
            url: `${baseUrl}/shrink-png-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/shrink-jpeg-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/shrink-webp-images`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Programmatic Pages - Convert to Format
        {
            url: `${baseUrl}/convert-to-png`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/convert-to-jpeg`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/convert-to-webp`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Programmatic Pages - Format to Format
        {
            url: `${baseUrl}/png-to-webp-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/png-to-jpeg-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/jpeg-to-webp-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/jpeg-to-png-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/webp-to-png-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/webp-to-jpeg-converter`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Trust Pages
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // High-Priority Programmatic Pages - SEO Intent
        {
            url: `${baseUrl}/compress-png-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-webp-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // High-Priority Programmatic Pages - Website Intent
        {
            url: `${baseUrl}/compress-png-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/optimize-png-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Video Compressor Pages (indexed)
        {
            url: `${baseUrl}/video/compressor`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/video/compressor/mp4`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compressor/webm`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/video/compressor/mov`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Video Programmatic Pages (hold long-tail until traction)
        {
            url: `${baseUrl}/compress-mp4-online`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-mp4-file-size`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/compress-video-for-website`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/compress-video-for-seo`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/shrink-video-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reduce-video-file-size-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // High-Priority Programmatic Pages - Quality Intent
        {
            url: `${baseUrl}/compress-png-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compress-jpeg-without-losing-quality`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Comparison Pages
        {
            url: `${baseUrl}/compare/webpify-vs-tinypng`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        {
            url: `${baseUrl}/compare/webpify-vs-freeconvert`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/compare/webpify-vs-iloveimg`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/compare/webpify-vs-squoosh`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
