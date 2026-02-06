// People Also Ask (PAA) Question Banks

/**
 * Comprehensive PAA questions for each topic
 * Optimized for Google PAA and AI Overviews
 */
export const paaQuestions = {
    'png-compression': [
        {
            question: 'Does PNG compression reduce quality?',
            answer: 'No, lossless PNG compression maintains 100% visual quality while reducing file size by 60-90% through metadata removal and palette optimization using algorithms like pngquant.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Why is my PNG not compressing?',
            answer: 'PNGs may not compress significantly if they are already optimized, contain complex gradients, have minimal metadata, or are simple images. Try converting to WebP for better compression (25-35% smaller).',
            schema: true,
            priority: 'high'
        },
        {
            question: 'How much can PNG files be compressed?',
            answer: 'PNG files can typically be compressed by 60-90% for simple graphics and logos, 60-75% for complex images, and 50-70% for photos with transparency, depending on image complexity.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Is PNG compression safe?',
            answer: 'Yes, PNG compression is completely safe. Lossless compression preserves all visual data while reducing file size. Client-side tools process files in your browser without server uploads.',
            schema: true,
            priority: 'medium'
        },
        {
            question: 'What is the best PNG compressor?',
            answer: 'WebPify offers professional PNG compression with pngquant algorithm, achieving 60-90% file size reduction with lossless quality. It processes files client-side for privacy and speed.',
            schema: true,
            priority: 'medium'
        },
        {
            question: 'Does PNG compression affect transparency?',
            answer: 'No, PNG compression preserves alpha transparency completely. Both the alpha channel and transparent areas remain identical after lossless compression.',
            schema: true,
            priority: 'medium'
        },
        {
            question: 'How does PNG compression work?',
            answer: 'PNG compression works by removing unnecessary metadata, optimizing color palettes, and using lossless algorithms like pngquant to reduce file size without changing pixels.',
            schema: true,
            priority: 'low'
        },
        {
            question: 'Can I compress PNG without losing quality?',
            answer: 'Yes, PNG supports lossless compression. Tools like pngquant optimize the file structure and color palette while maintaining pixel-perfect visual quality.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Why are PNG files so large?',
            answer: 'PNG files are large because they use lossless compression and often contain unnecessary metadata, unoptimized color palettes, and extra data from editing software.',
            schema: true,
            priority: 'medium'
        },
        {
            question: 'What is lossless PNG compression?',
            answer: 'Lossless PNG compression reduces file size by optimizing how data is stored without changing any pixels. The image quality remains 100% identical to the original.',
            schema: true,
            priority: 'medium'
        }
    ],

    'jpeg-compression': [
        {
            question: 'How much does JPEG compression reduce file size?',
            answer: 'JPEG compression typically reduces file size by 40-90% depending on quality settings. Quality 85 offers near-invisible compression with 60-70% reduction, while quality 60-75 achieves 70-85% reduction.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Does JPEG compression reduce quality?',
            answer: 'JPEG uses lossy compression, so some quality is reduced. However, with proper quality settings (80-90), the loss is imperceptible to human eyes while still achieving significant file size reduction.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'What is the best JPEG compression quality?',
            answer: 'Quality 85 is optimal for most uses, balancing file size (60-70% reduction) with visual quality. Quality 90-95 for critical images, 75-80 for web, and 60-70 for thumbnails.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Is JPEG or PNG better for websites?',
            answer: 'JPEG is better for photos and complex images (smaller files), while PNG is better for graphics, logos, and images needing transparency. WebP outperforms both for modern browsers.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Can you compress JPEG without losing quality?',
            answer: 'JPEG is inherently lossy, but with quality 90-95 and mozjpeg optimization, compression is visually lossless while still reducing file size by 40-60%.',
            schema: true,
            priority: 'medium'
        },
        {
            question: 'Why do JPEG files lose quality?',
            answer: 'JPEG uses lossy compression that discards less important visual data to achieve smaller file sizes. Each save can compound quality loss, so always keep original files.',
            schema: true,
            priority: 'medium'
        }
    ],

    'webp-conversion': [
        {
            question: 'Is WebP better than PNG?',
            answer: 'WebP offers 25-35% smaller file sizes than PNG while maintaining similar quality. It supports transparency like PNG but with better compression. However, PNG has wider compatibility.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Is WebP better than JPEG?',
            answer: 'WebP provides 25-35% better compression than JPEG at equivalent quality. It also supports transparency, which JPEG cannot. WebP is ideal for modern browsers.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Does WebP reduce quality?',
            answer: 'WebP can be lossy or lossless. Lossless WebP maintains perfect quality with 26% smaller files than PNG. Lossy WebP offers better quality than JPEG at the same file size.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Do all browsers support WebP?',
            answer: 'WebP is supported by 97%+ of browsers including Chrome, Firefox, Edge, Safari (since 2020), and Opera. Only very old browsers lack support.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'Should I use WebP on my website?',
            answer: 'Yes, WebP is recommended for modern websites. It improves page speed, SEO, and Core Web Vitals with 25-35% smaller files. Use with PNG/JPEG fallbacks for old browsers.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'How do I convert images to WebP?',
            answer: 'Use WebPify\'s converter to upload PNG, JPEG, or other formats and instantly convert to optimized WebP. Conversion is free, fast, and preserves quality.',
            schema: true,
            priority: 'medium'
        }
    ],

    'general-optimization': [
        {
            question: 'What is the best image format for SEO?',
            answer: 'WebP is best for SEO due to smallest file sizes (faster page loads). For broader compatibility, use JPEG for photos and PNG for graphics. Always compress images before uploading.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'How do images affect page speed?',
            answer: 'Images typically account for 50-70% of page weight. Large images slow loading, hurt Core Web Vitals (LCP), and reduce SEO rankings. Compression can improve speed by 40-60%.',
            schema: true,
            priority: 'high'
        },
        {
            question: 'What is lossy vs lossless compression?',
            answer: 'Lossless compression (PNG) preserves perfect quality but lower compression. Lossy compression (JPEG) discards some data for smaller files. Choose based on image type and use case.',
            schema: true,
            priority: 'medium'
        }
    ]
};

/**
 * Get PAA questions for a topic
 */
export function getPAAQuestions(topic) {
    return paaQuestions[topic] || [];
}

/**
 * Get high-priority PAA questions
 */
export function getHighPriorityPAAs(topic) {
    return (paaQuestions[topic] || []).filter(q => q.priority === 'high');
}

/**
 * Get all PAA questions (flattened)
 */
export function getAllPAAQuestions() {
    const all = [];
    Object.values(paaQuestions).forEach(questions => {
        all.push(...questions);
    });
    return all;
}

/**
 * Generate FAQ schema for a question
 */
export function generateFAQSchema(question) {
    return {
        "@type": "Question",
        "name": question.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": question.answer
        }
    };
}

/**
 * Generate FAQPage schema for multiple questions
 */
export function generateFAQPageSchema(questions) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(q => generateFAQSchema(q))
    };
}
