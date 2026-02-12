export const blogClusters = {
    'image-compression': {
        title: 'Image Compression',
        slug: 'image-compression',
        description: 'Master the art of reducing image file sizes without compromising quality. Learn about algorithms, techniques, and tools.',
        posts: [
            {
                slug: 'what-is-image-compression',
                title: 'What Is Image Compression? The Complete Guide',
                excerpt: 'Understand how image compression works, the difference between lossy and lossless, and why it matters for your website.',
                intent: 'informational',
                priority: 'high'
            },
            {
                slug: 'lossy-vs-lossless-compression',
                title: 'Lossy vs Lossless Compression: Which Should You Use?',
                excerpt: 'A detailed comparison of lossy and lossless compression techniques. Find out which method is best for your specific needs.',
                intent: 'comparison',
                priority: 'high'
            },
            {
                slug: 'how-png-compression-works',
                title: 'How PNG Compression Works: A Deep Dive',
                excerpt: 'Explore the technical details of PNG compression, including the deflation algorithm and delta filtering.',
                intent: 'technical',
                priority: 'medium'
            },
            {
                slug: 'why-images-dont-compress',
                title: 'Why Some Images Don’t Compress Further',
                excerpt: 'Frustrated by small compression savings? Learn why some images are already optimized and cannot be compressed further.',
                intent: 'troubleshooting',
                priority: 'medium'
            },
            {
                slug: 'image-compression-for-seo',
                title: 'Image Compression for SEO: Ranking Factors Explained',
                excerpt: 'Learn how proper image compression directly impacts your Google rankings, page speed, and user experience.',
                intent: 'strategy',
                priority: 'high'
            },
            {
                slug: 'bulk-image-compression-guide',
                title: 'The Ultimate Guide to Bulk Image Compression',
                excerpt: 'How to compress hundreds of images at once using online tools and command-line utilities.',
                intent: 'guide',
                priority: 'high'
            },
            {
                slug: 'metadata-stripping-explained',
                title: 'Metadata Stripping: Removing EXIF Data for Privacy',
                excerpt: 'What is EXIF data? Learn how stripping metadata reduces file size and protects your privacy.',
                intent: 'technical',
                priority: 'medium'
            },
            {
                slug: 'compression-algorithms-explained',
                title: 'Image Compression Algorithms Explained',
                excerpt: 'An overview of popular compression algorithms like DCT, LZW, and Deflate used in JPEG, PNG, and WebP.',
                intent: 'technical',
                priority: 'low'
            }
        ]
    },
    'image-formats': {
        title: 'Image Formats',
        slug: 'image-formats',
        description: 'Deep dives into PNG, JPEG, WebP, AVIF, and more. Choose the right format for every use case.',
        posts: [
            {
                slug: 'png-vs-jpeg',
                title: 'PNG vs JPEG: The Ultimate Comparison',
                excerpt: 'When to use PNG and when to use JPEG. A side-by-side comparison of quality, size, and use cases.',
                intent: 'comparison',
                priority: 'high'
            },
            {
                slug: 'webp-vs-png',
                title: 'WebP vs PNG: Is It Time to Switch?',
                excerpt: 'WebP offers better compression than PNG, but is it supported everywhere? We analyze the pros and cons.',
                intent: 'comparison',
                priority: 'high'
            },
            {
                slug: 'best-image-format-for-seo',
                title: 'What Is the Best Image Format for SEO in 2026?',
                excerpt: 'Google loves modern formats throughout. Discover why WebP and AVIF are the future of SEO.',
                intent: 'strategy',
                priority: 'high'
            },
            {
                slug: 'image-format-size-comparison',
                title: 'Image Format Size Comparison: PNG vs JPEG vs WebP',
                excerpt: 'Real-world benchmarks comparing file sizes across different formats for the same image.',
                intent: 'data',
                priority: 'medium'
            },
            {
                slug: 'transparent-image-formats',
                title: 'Guide to Transparent Image Formats',
                excerpt: 'Which formats support transparency? Detailed look at PNG, WebP, GIF, and AVIF alpha channels.',
                intent: 'technical',
                priority: 'medium'
            },
            {
                slug: 'raster-vs-vector-images',
                title: 'Raster vs Vector Images: Key Differences',
                excerpt: 'Understanding the fundamental difference between pixel-based raster images and math-based vector graphics.',
                intent: 'educational',
                priority: 'low'
            },
            {
                slug: 'image-format-compatibility-guide',
                title: 'Browser Compatibility Guide for Image Formats',
                excerpt: 'Which browsers support WebP? Is AVIF safe to use? A complete compatibility reference.',
                intent: 'technical',
                priority: 'medium'
            }
        ]
    },
    'image-seo': {
        title: 'Image SEO & Core Web Vitals',
        slug: 'image-seo',
        description: 'Optimize your images for search engines and performance metrics. Master LCP, CLS, and schema.',
        posts: [
            {
                slug: 'how-images-affect-seo',
                title: 'How Images Affect SEO: The Definitive Guide',
                excerpt: 'Images can make or break your SEO. Learn how load speed, alt text, and file names influence rankings.',
                intent: 'strategy',
                priority: 'high'
            },
            {
                slug: 'image-optimization-for-lcp',
                title: 'Image Optimization for Largest Contentful Paint (LCP)',
                excerpt: 'LCP is a crucial Core Web Vital. Learn how to optimize hero images to pass Google\'s speed tests.',
                intent: 'optimization',
                priority: 'high'
            },
            {
                slug: 'reducing-cls-from-images',
                title: 'How to Prevent Layout Shifts (CLS) caused by Images',
                excerpt: 'Stop your content from jumping around. Best practices for sizing images to prevent Cumulative Layout Shift.',
                intent: 'optimization',
                priority: 'high'
            },
            {
                slug: 'lazy-loading-explained',
                title: 'Lazy Loading Images: Best Practices & Implementation',
                excerpt: 'Boost initial page load speed by deferring off-screen images. Native lazy loading vs JavaScript libraries.',
                intent: 'technical',
                priority: 'medium'
            },
            {
                slug: 'core-web-vitals-image-guide',
                title: 'The Core Web Vitals Guide to Images',
                excerpt: 'A comprehensive checklist for optimizing images specifically for Google\'s Core Web Vitals metrics.',
                intent: 'strategy',
                priority: 'medium'
            },
            {
                slug: 'image-seo-checklist',
                title: 'The Ultimate Image SEO Checklist for 2026',
                excerpt: 'Don\'t publish another post without this list. Alt text, filenames, schema, and more.',
                intent: 'checklist',
                priority: 'high'
            }
        ]
    },
    'image-conversion': {
        title: 'Image Conversion Use Cases',
        slug: 'image-conversion',
        description: 'Specific guides for converting images for different platforms, devices, and purposes.',
        posts: [
            {
                slug: 'convert-png-to-webp-guide',
                title: 'How to Convert PNG to WebP (and Why You Should)',
                excerpt: 'Step-by-step guide to converting your specific PNG library to WebP for massive space savings.',
                intent: 'guide',
                priority: 'high'
            },
            {
                slug: 'when-to-convert-jpeg-to-png',
                title: 'When Should You Convert JPEG to PNG?',
                excerpt: 'Usually you shouldn\'t, but sometimes you must. Learn the specific use cases for "un-compressing" images.',
                intent: 'guide',
                priority: 'medium'
            },
            {
                slug: 'batch-image-conversion-guide',
                title: 'Batch Image Conversion: Processing 100+ Files',
                excerpt: 'Save hours of work by converting entire folders of images at once using WebPify.',
                intent: 'guide',
                priority: 'high'
            },
            {
                slug: 'image-conversion-for-shopify',
                title: 'Image Conversion Guide for Shopify Stores',
                excerpt: 'E-commerce requires speed. Learn the best formats and conversion workflows for Shopify product images.',
                intent: 'ecommerce',
                priority: 'high'
            },
            {
                slug: 'image-conversion-for-developers',
                title: 'Image Conversion Workflows for Developers',
                excerpt: 'Automating image pipelines, CI/CD integration, and developer-friendly conversion tools.',
                intent: 'technical',
                priority: 'low'
            }
        ]
    },
    'comparisons': {
        title: 'Comparisons & Authority',
        slug: 'comparisons',
        description: 'Unbiased comparisons of the top image optimization tools on the web. See how WebPify stacks up.',
        posts: [
            {
                slug: 'tinypng-vs-webpify',
                title: 'TinyPNG vs WebPify: Which Compressor is Better?',
                excerpt: 'A detailed head-to-head battle. We compare compression ratio, speed, privacy, and limits.',
                intent: 'comparison',
                priority: 'high'
            },
            {
                slug: 'best-image-compressor-2025',
                title: 'The Best Image Compressor of 2026',
                excerpt: 'We tested the top 10 image compressors designed for web developers and designers.',
                intent: 'review',
                priority: 'high'
            },
            {
                slug: 'image-compression-benchmarks',
                title: 'Image Compression Benchmarks: Who Wins?',
                excerpt: 'Data-driven analysis of compression efficiency across the market leaders.',
                intent: 'data',
                priority: 'medium'
            },
            {
                slug: 'best-free-image-optimization-tools',
                title: '17 Best Free Image Optimization Tools',
                excerpt: 'A curated list of the best zero-cost tools for optimizing website images.',
                intent: 'listicle',
                priority: 'high'
            },
            {
                slug: 'alternatives-to-tinypng',
                title: 'Top 5 Alternatives to TinyPNG',
                excerpt: 'Looking for unlimited uploads or better privacy? Here are the best TinyPNG alternatives.',
                intent: 'listicle',
                priority: 'medium'
            }
        ]
    }
};

export const getAllCategories = () => Object.values(blogClusters);

export const getPostBySlug = (slug) => {
    // 1. Check Manual Clusters
    for (const category of Object.values(blogClusters)) {
        const post = category.posts.find(p => p.slug === slug);
        if (post) return { ...post, category };
    }

    // 2. Check Generated Content (Lazy load simulation)
    // In a real app, we might import this at the top, but to avoid circular deps or massive bundle,
    // we assume the caller handles the content loading or we return a stub.
    // However, for the metadata lookup, we need to know it exists.
    // We will rely on a secondary lookup map or import it directly if safe.

    // For this implementation, we will assume the caller (page.js) handles the content fetch,
    // but here we need to return the metadata if it's a known generated slug.
    // We can't easily import generated-posts here if it's huge, but for 50 it's fine.

    // To keep it clean, we'll return null and handle "dynamic" slugs in [slug]/page.js 
    // OR we can import a lightweight map.

    // BETTER APPROACH:
    // We assume if it's not in manual clusters, it MIGHT be generated.
    // But `getPostBySlug` is synchronous. 
    // Let's create a lightweight index of generated slugs if needed.

    return null;
};

// New Helper for Component usage
import { generatedContent } from './generated-posts';

export const getGeneratedPostMetadata = (slug) => {
    const post = generatedContent[slug];
    if (post) {
        return {
            ...post,
            category: {
                slug: post.category,
                title: post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) // Simple title case
            }
        };
    }
    return null;
}
