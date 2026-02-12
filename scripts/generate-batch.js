const fs = require('fs');
const path = require('path');

// Mock browser environment for local script execution if needed
// In a real Next.js app, we can just run this as a script
// We need to handle the ES modules imports since we are in a script context
// For simplicity, we will copy the necessary logic from the utils since we can't easily import from the app structure in a standalone node script without transpilation setup.

// ... Actually, a better approach for the user environment is to creating a Next.js API route that triggers the generation, 
// OR a simpler standalone script that constructs the file.
// Let's create a standalone script that mimics the logic for now to generate the file artifact.

// --- Matrix & Logic Re-implementation for Script ---

const programmaticMatrix = {
    actions: [
        { slug: 'compress', label: 'Compress', verb: 'compressing', noun: 'compression' },
        { slug: 'reduce', label: 'Reduce', verb: 'reducing', noun: 'reduction' },
        { slug: 'shrink', label: 'Shrink', verb: 'shrinking', noun: 'shrinking' },
        { slug: 'optimize', label: 'Optimize', verb: 'optimizing', noun: 'optimization' },
        { slug: 'convert', label: 'Convert', verb: 'converting', noun: 'conversion' }
    ],
    formats: [
        { slug: 'png', label: 'PNG', ext: '.png', type: 'lossless' },
        { slug: 'jpeg', label: 'JPEG', ext: '.jpg', type: 'lossy' },
        { slug: 'webp', label: 'WebP', ext: '.webp', type: 'modern' }
    ],
    intents: [
        { slug: 'online', label: 'Online', context: 'browser-based tools' },
        { slug: 'for-seo', label: 'for SEO', context: 'search engine ranking' },
        { slug: 'for-website', label: 'for Website Performance', context: 'page speed' },
        { slug: 'without-losing-quality', label: 'Without Losing Quality', context: 'visual fidelity' },
        { slug: 'free', label: 'Free', context: 'cost-effective' },
        { slug: 'bulk', label: 'Bulk', context: 'batch processing' }
    ],
    audiences: [
        { slug: 'developers', label: 'Developers', angle: 'technical implementation' },
        // { slug: 'marketers', label: 'Marketers', angle: 'conversion rates and SEO' }, // Commented out to limit to ~50 for first batch
        // { slug: 'beginners', label: 'Beginners', angle: 'simple step-by-step' },
        // { slug: 'ecommerce', label: 'E-commerce Owners', angle: 'product image optimization' }
    ]
};

function generateCombinations() {
    const combos = [];
    programmaticMatrix.actions.forEach(action => {
        programmaticMatrix.formats.forEach(format => {
            programmaticMatrix.intents.forEach(intent => {
                programmaticMatrix.audiences.forEach(audience => {
                    combos.push({ action, format, intent, audience });
                });
            });
        });
    });
    return combos;
}

function generateSlug(action, format, intent, audience) {
    return `${action.slug}-${format.slug}-${intent.slug}-for-${audience.slug}`;
}

function generateTitle(action, format, intent, audience) {
    // Deterministic selection
    const templates = [
        `How to ${action.label} ${format.label} Images ${intent.label}: A ${audience.label} Guide`,
        `${audience.label} Guide: ${action.label} ${format.label} ${intent.label}`,
        `The Ultimate Guide to ${action.verb} ${format.label} ${intent.label} for ${audience.label}`,
        `${action.label} ${format.label} ${intent.label}: Best Practices for ${audience.label}`
    ];
    const index = (action.slug.length + format.slug.length + intent.slug.length) % templates.length;
    return templates[index];
}

function generateIntro(action, format, intent, audience) {
    return `Are you learning ${action.verb} ${format.label} images ${intent.label}? As ${audience.label.toLowerCase()}, efficient image optimization is crucial. In this guide, we explore the best techniques to ${action.slug} your ${format.label} files without compromising quality.`;
}

function generateSections(action, format, intent, audience) {
    const sections = [];

    // Section 1: Why it matters
    sections.push({
        heading: `Why ${action.noun} Matters for ${audience.label}`,
        body: `<p>For ${audience.label.toLowerCase()}, dealing with ${format.label} files is a daily task. ${action.label}ing them ensures better performance and user experience.</p>`
    });

    // Section 2: Step-by-Step
    sections.push({
        heading: `Step-by-Step: ${action.label} ${format.label} ${intent.label}`,
        body: `<p>Here is how you can achieve this using modern tools:</p><ol><li>Upload your ${format.label}.</li><li>Select the ${action.slug} option.</li><li>Download the optimized file.</li></ol>`
    });

    // Section 3: Technical Nuance (if Developer)
    if (audience.slug === 'developers') {
        sections.push({
            heading: `Technical Implementation Details`,
            body: `<p>When ${action.verb} programmatically, consider using libraries like Sharp or standard CLI tools. However, for quick batch processing, WebPify provides a robust browser-based alternative.</p>`
        });
    }

    return sections;
}

function generateFAQs(action, format, intent, audience) {
    return [
        {
            question: `Is ${action.verb} ${format.label} safe?`,
            answer: `Yes, modern tools ensure ${action.noun} is safe and private. WebPify processes everything locally.`
        },
        {
            question: `Best tools for ${audience.label}?`,
            answer: `WebPify is tailored for ${audience.label.toLowerCase()} needing ${intent.label} solutions.`
        }
    ];
}


// --- Main Execution ---

const combinations = generateCombinations();
// Limit to first 50
const batch = combinations.slice(0, 50);

const generatedContent = {};

batch.forEach(config => {
    const { action, format, intent, audience } = config;
    const slug = generateSlug(action, format, intent, audience);

    // Metadata
    const title = generateTitle(action, format, intent, audience);
    const intro = generateIntro(action, format, intent, audience);
    const sections = generateSections(action, format, intent, audience);
    const faqs = generateFAQs(action, format, intent, audience);

    // Assemble HTML
    let html = `<p class="lead">${intro}</p>`;
    sections.forEach(section => {
        html += `<h2>${section.heading}</h2>${section.body}`;
    });
    // CTA
    html += `
    <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border rounded-xl">
      <h3 class="text-xl font-bold mb-2">Ready to ${action.slug} your ${format.label}s?</h3>
      <p class="mb-4">Try our free tool designed for ${format.label} workflows.</p>
      <a href="/image/${action.slug === 'convert' ? 'converter' : 'compressor'}" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        Start ${action.verb} Now
      </a>
    </div>
    `;

    generatedContent[slug] = {
        title,
        excerpt: intro,
        content: html,
        category: action.slug === 'convert' ? 'image-conversion' : 'image-compression', // simplified mapping
        intent: 'programmatic',
        priority: 'high',
        slug: slug
    };
});

// Output File Content
const fileContent = `
// GENERATED FILE - DO NOT EDIT MANUALLY
// Batch ID: 1
// Count: ${Object.keys(generatedContent).length}

export const generatedContent = ${JSON.stringify(generatedContent, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../data/generated-posts.js'), fileContent);
console.log(`Generated ${Object.keys(generatedContent).length} posts to data/generated-posts.js`);
