import ProgrammaticToolPage from '@/components/ProgrammaticToolPage';
import { generateH1, generateIntro, generateBenefits, generateFAQs } from '@/utils/programmatic-page-generator';
import { getPAAQuestions } from '@/data/paa-questions';

export const metadata = {
    title: 'Compress PNG for SEO & Core Web Vitals',
    description: 'Compress PNG for SEO and better Core Web Vitals. Reduce PNG file size by 60-90% to improve LCP and page speed rankings.',
    openGraph: {
        title: 'Compress PNG for SEO & Core Web Vitals',
        description: 'Compress PNG for SEO and better Core Web Vitals. Reduce PNG file size by 60-90% to improve LCP and page speed rankings.'
    }
};

export default function CompressPNGForSEOPage() {
    const action = 'compress';
    const format = 'png';
    const intent = 'for-seo';
    const intentLabel = 'for SEO';

    const pageMetadata = {
        title: metadata.title,
        description: metadata.description,
        h1: 'PNG Compression for SEO & Core Web Vitals',
        canonical: 'https://webpify.vercel.app/compress-png-for-seo'
    };

    const benefits = [
        'Improve LCP (Largest Contentful Paint) scores',
        'Faster page load times boost SEO rankings',
        '60-90% smaller PNG files without quality loss',
        'Better Core Web Vitals performance'
    ];

    const faqs = [
        {
            question: 'How does PNG compression improve SEO?',
            answer: 'PNG compression reduces file sizes, which improves page load speed and Core Web Vitals (especially LCP). Faster pages rank higher in Google search results.',
            schema: true
        },
        {
            question: 'What is LCP and why does it matter?',
            answer: 'LCP (Largest Contentful Paint) measures how quickly the largest visible element loads. Images often cause slow LCP. Compressing PNGs improves LCP scores and SEO.',
            schema: true
        },
        {
            question: 'Does PNG compression affect image quality for SEO?',
            answer: 'No, lossless PNG compression maintains perfect visual quality while reducing file size by 60-90%. This gives you SEO benefits without sacrificing image appearance.',
            schema: true
        },
        ...getPAAQuestions('png-compression').slice(0, 2)
    ];

    return (
        <ProgrammaticToolPage
            action={action}
            format={format}
            intent={intent}
            intentLabel={intentLabel}
            metadata={pageMetadata}
            benefits={benefits}
            faqs={faqs}
            aiOverview={{
                topic: 'Why Compress Images for SEO?',
                definition: 'Image optimization reduces file sizes to improve page load speed, SEO rankings, and Core Web Vitals (LCP). Images typically account for 50-70% of page weight. Proper compression can improve loading speed by 40-60%, reduce bandwidth costs, and enhance user experience—all critical ranking factors.'
            }}
        />
    );
}
