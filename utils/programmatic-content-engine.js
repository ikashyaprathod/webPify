import { programmaticMatrix } from '@/data/programmatic-blog-matrix';

/**
 * Programmatic Content Engine
 * Generates unique blog posts based on the matrix configuration.
 */

export function generateProgrammaticPosts(batchSize = 50, offset = 0) {
    const allCombinations = generateCombinations();
    const batch = allCombinations.slice(offset, offset + batchSize);

    return batch.map(config => {
        const { action, format, intent, audience } = config;

        // 1. Generate Metadata
        const title = generateTitle(action, format, intent, audience);
        const slug = generateSlug(action, format, intent, audience);
        const h1 = title; // Generally same for SEO
        const intro = generateIntro(action, format, intent, audience);

        // 2. Generate Content Blocks
        const sections = generateSections(action, format, intent, audience);
        const faqs = generateFAQs(action, format, intent, audience);

        // 3. Assemble HTML Content
        const content = assembleContent(intro, sections, faqs, action, format);

        return {
            slug,
            title,
            h1,
            excerpt: intro.substring(0, 160) + '...',
            // Assign to a cluster based on the primary dimension
            category: determineCategory(action, format),
            intent: determineIntentLabel(audience),
            priority: calculatePriority(intent, audience),
            content, // Full HTML string
            meta: {
                action: action.slug,
                format: format.slug,
                intent: intent.slug,
                audience: audience.slug
            }
        };
    });
}

// --- Helper Functions ---

function generateCombinations() {
    const combos = [];
    programmaticMatrix.actions.forEach(action => {
        programmaticMatrix.formats.forEach(format => {
            programmaticMatrix.intents.forEach(intent => {
                programmaticMatrix.audiences.forEach(audience => {
                    // Filter nonsense combinations (e.g. "Convert PNG Free" might be redundant with "Online")
                    // For now, strict generation.
                    combos.push({ action, format, intent, audience });
                });
            });
        });
    });
    return combos;
}

function generateSlug(action, format, intent, audience) {
    // e.g., how-to-compress-png-images-for-seo-beginners-guide
    return `${action.slug}-${format.slug}-${intent.slug}-for-${audience.slug}`;
}

function generateTitle(action, format, intent, audience) {
    const templates = [
        `How to ${action.label} ${format.label} Images ${intent.label}: A ${audience.label} Guide`,
        `${audience.label} Guide: ${action.label} ${format.label} ${intent.label}`,
        `The Ultimate Guide to ${action.verb} ${format.label} ${intent.label} for ${audience.label}`,
        `${action.label} ${format.label} ${intent.label}: Best Practices for ${audience.label}`
    ];
    // Simple rotation based on length to deterministic pseudo-randomness
    const index = (action.slug.length + format.slug.length) % templates.length;
    return templates[index];
}

function generateIntro(action, format, intent, audience) {
    return `Are you learning ${action.verb} ${format.label} images ${intent.label}? As ${audience.label.toLowerCase()}, efficient image optimization is crucial. In this guide, we explore the best techniques to ${action.slug} your ${format.label} files without compromising quality.`;
}

function generateSections(action, format, intent, audience) {
    return [
        {
            heading: `Why ${action.noun} Matters for ${audience.label}`,
            body: `<p>For ${audience.label.toLowerCase()}, dealing with ${format.label} files is a daily task. ${action.label}ing them ensures better performance and user experience.</p>`
        },
        {
            heading: `Step-by-Step: ${action.label} ${format.label} ${intent.label}`,
            body: `<p>Here is how you can achieve this using modern tools:</p><ol><li>Upload your ${format.label}.</li><li>Select the ${action.slug} option.</li><li>Download the optimized file.</li></ol>`
        },
        {
            heading: `Common Mistakes ${audience.label} Make`,
            body: `<p>Avoid over-${action.verb} your images, which can lead to artifacts, especially in ${format.type} formats like ${format.label}.</p>`
        }
    ];
}

function generateFAQs(action, format, intent, audience) {
    return [
        {
            question: `Is ${action.verb} ${format.label} safe?`,
            answer: `Yes, modern tools ensure ${action.noun} is safe and private.`
        },
        {
            question: `Best tools for ${audience.label}?`,
            answer: `WebPify is tailored for ${audience.label.toLowerCase()} needing ${intent.label} solutions.`
        }
    ];
}

function assembleContent(intro, sections, faqs, action, format) {
    let html = `<p class="lead">${intro}</p>`;

    sections.forEach(section => {
        html += `<h2>${section.heading}</h2>${section.body}`;
    });

    // Add Tool CTA
    html += `
    <div class="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 border rounded-xl">
      <h3 class="text-xl font-bold mb-2">Ready to ${action.slug} your ${format.label}s?</h3>
      <p class="mb-4">Try our free tool designed for ${format.label} workflows.</p>
      <a href="/image/${action.slug === 'convert' ? 'converter' : 'compressor'}" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        Start ${action.verb} Now
      </a>
    </div>
  `;

    return html;
}

function determineCategory(action, format) {
    if (action.slug === 'compress' || action.slug === 'reduce' || action.slug === 'shrink') return 'image-compression';
    if (action.slug === 'convert') return 'image-conversion';
    if (action.slug === 'optimize') return 'web-performance';
    return 'image-formats'; // Fallback
}

function determineIntentLabel(audience) {
    if (audience.slug === 'developers') return 'technical';
    if (audience.slug === 'beginners') return 'informational';
    if (audience.slug === 'marketers') return 'strategy';
    return 'guide';
}

function calculatePriority(intent, audience) {
    if (intent.slug === 'for-seo' || intent.slug === 'online') return 'high';
    if (audience.slug === 'developers') return 'medium';
    return 'low';
}
