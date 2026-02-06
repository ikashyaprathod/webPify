// JPEG Format FAQ Bank
export const jpegFAQs = [
    {
        question: "Is JPEG compression lossy?",
        answer: "Yes, JPEG uses lossy compression, but modern tools like mozjpeg achieve 40-90% file size reduction with minimal visible quality loss."
    },
    {
        question: "How much can JPEG be compressed?",
        answer: "JPEG images can typically be compressed by 40-90% depending on quality settings. Quality 80-85 offers the best balance between size and appearance."
    },
    {
        question: "What is the best JPEG quality setting?",
        answer: "Quality 80-85 is ideal for web use. It provides excellent visual quality while significantly reducing file size compared to maximum quality."
    },
    {
        question: "Does JPEG compression reduce image resolution?",
        answer: "No, compression doesn't change resolution (pixel dimensions). It reduces file size by removing visual data that's hard to notice."
    },
    {
        question: "Why do my JPEGs look pixelated after compression?",
        answer: "Overly aggressive compression (quality below 60) or multiple compressions can cause visible artifacts. Use quality 75+ for clean results."
    },
    {
        question: "What is mozjpeg compression?",
        answer: "Mozjpeg is an advanced JPEG encoder that creates smaller files than standard JPEG encoders while maintaining the same visual quality."
    },
    {
        question: "Is JPEG good for SEO?",
        answer: "Yes, optimized JPEG files improve page speed and Core Web Vitals, which are Google ranking factors. Smaller files load faster."
    },
    {
        question: "Should I use JPEG or WebP?",
        answer: "WebP is generally better (25-35% smaller), but JPEG has universal browser support and is ideal for photos on all platforms."
    },
    {
        question: "Can I compress JPEG without losing quality?",
        answer: "JPEG is inherently lossy, but professional compression tools minimize visible quality loss. Most users can't detect differences at quality 80+."
    },
    {
        question: "How does JPEG compression work?",
        answer: "JPEG compresses images by analyzing blocks of pixels, removing high-frequency detail, and using mathematical transforms to reduce file size."
    },
    {
        question: "Is JPEG better than PNG for photos?",
        answer: "Yes, JPEG is significantly better for photos. File sizes are 50-80% smaller than PNG while maintaining excellent visual quality."
    },
    {
        question: "Does JPEG support transparency?",
        answer: "No, JPEG doesn't support transparency. Use PNG or WebP for images with transparent backgrounds."
    },
    {
        question: "What is progressive JPEG?",
        answer: "Progressive JPEG loads in multiple passes, showing a low-quality preview first. This improves perceived load time on slow connections."
    },
    {
        question: "How to optimize JPEG for web?",
        answer: "Use compression tools with quality 80-85, remove metadata, resize to appropriate dimensions, and consider WebP for modern browsers."
    },
    {
        question: "Is JPEG compression safe for printing?",
        answer: "Use quality 90+ for print. Lower quality settings may show visible artifacts when printed at high resolution."
    }
];
