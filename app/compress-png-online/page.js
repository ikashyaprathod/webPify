import ProgrammaticToolPage from '@/components/ProgrammaticToolPage';
import { generateH1, generateIntro, generateBenefits, generateFAQs } from '@/utils/programmatic-page-generator';
import { getPAAQuestions } from '@/data/paa-questions';
import { aiOverviewTopics } from '@/components/AIOverviewBlock';

export const metadata = {
    title: 'PNG Compressor – Compress PNG Online Free',
    description: 'Compress PNG images online. Professional PNG compression tool with 60-90% file size reduction. Free, fast, and privacy-friendly.',
    openGraph: {
        title: 'PNG Compressor – Compress PNG Online Free',
        description: 'Compress PNG images online. Professional PNG compression tool with 60-90% file size reduction.'
    }
};

export default function CompressPNGOnlinePage() {
    const action = 'compress';
    const format = 'png';
    const intent = 'online';
    const intentLabel = 'Online';

    const pageMetadata = {
        title: metadata.title,
        description: metadata.description,
        h1: generateH1(action, format.toUpperCase(), intentLabel),
        canonical: 'https://webpify.vercel.app/compress-png-online'
    };

    const benefits = generateBenefits(action, format.toUpperCase());
    const faqs = getPAAQuestions('png-compression').slice(0, 5); // Top 5 FAQs
    const aiOverview = aiOverviewTopics['png-compression'];

    return (
        <ProgrammaticToolPage
            action={action}
            format={format}
            intent={intent}
            intentLabel={intentLabel}
            metadata={pageMetadata}
            benefits={benefits}
            faqs={faqs}
            aiOverview={aiOverview}
        />
    );
}
