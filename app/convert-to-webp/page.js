import ProgrammaticToolPage from '@/components/ProgrammaticToolPage';
import { generateH1, generateBenefits, generateFAQs } from '@/utils/programmatic-page-generator';
import { getPAAQuestions } from '@/data/paa-questions';

export const metadata = {
    title: 'Convert to WebP Online – Free WebP Converter',
    description: 'Convert images to WebP format online. Get 25-35% smaller files than PNG/JPEG with superior quality. Free WebP conversion tool.',
    openGraph: {
        title: 'Convert to WebP Online – Free WebP Converter',
        description: 'Convert images to WebP format online. Get 25-35% smaller files than PNG/JPEG with superior quality.'
    }
};

export default function ConvertToWebPOnlinePage() {
    const action = 'convert';
    const format = 'webp';
    const intent = 'online';
    const intentLabel = 'Online';

    const pageMetadata = {
        title: metadata.title,
        description: metadata.description,
        h1: 'Convert Images to WebP Online',
        canonical: 'https://webpify.vercel.app/convert-to-webp'
    };

    const benefits = [
        '25-35% smaller files than PNG/JPEG',
        'Supports transparency like PNG',
        'Better quality than JPEG at same file size',
        'Free conversion with no limits'
    ];

    const faqs = getPAAQuestions('webp-conversion');

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
                topic: 'What is WebP?',
                definition: 'WebP is a modern image format developed by Google that provides superior compression compared to PNG and JPEG. It offers 25-35% smaller file sizes while maintaining equivalent quality, supports both lossy and lossless compression, and includes transparency. WebP is supported by 97%+ of browsers and is recommended for modern websites to improve page speed and SEO.'
            }}
        />
    );
}
