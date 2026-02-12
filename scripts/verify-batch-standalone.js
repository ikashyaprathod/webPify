const fs = require('fs');
const path = require('path');

// Regex-based extractor. 
// We don't need full object parsing, just the slugs and titles to check for collisions.
// Limitation: This won't catch dynamic constructs, but for config files it's usually fine.

function extractPosts(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const posts = [];

    // Naive regex to match object properties. 
    // Assumes formatting: 
    // slug: 'some-slug',
    // title: 'Some Title',

    // We can iterate the file line by line to keep context if needed, but global match is easier.
    // Let's try to match blocks.

    // Strategy: find all `slug: '...'` and `title: '...'` pairs.
    // This assumes they are close to each other.

    // Better Strategy: Match the array content or object entries.
    // Since we know the structure of generated-posts is keys = slugs.

    if (filePath.includes('generated-posts')) {
        // format: "slug": { ... title: "...", ... slug: "..." }
        // OR key: { ... }

        // Let's rely on the `slug: "..."` or `"slug": "..."` pattern.
        const slugRegex = /["']slug["']\s*:\s*["']([^"']+)["']/g;
        const titleRegex = /["']title["']\s*:\s*["']([^"']+)["']/g;

        // This is tricky because we need to pair them.
        // Let's just extract all slugs for uniqueness check (primary goal).
        // And if we can, titles for similarity.

        // Since generated content is consistently formatted JSON-like string in JS:
        // We can actually try `JSON.parse` if we strip the variable declaration!
        // The `generate-batch.js` uses `JSON.stringify(generatedContent, null, 2)`.
        // So the variable assignment is `export const generatedContent = { ... };`
        // The content inside the variable IS valid JSON!

        try {
            const jsonStr = content.split('export const generatedContent =')[1].trim().replace(/;$/, '');
            const data = JSON.parse(jsonStr);
            return Object.values(data);
        } catch (e) {
            console.error("JSON parse failed for generated-posts.js, falling back to regex", e.message);
        }
    }

    // Fallback or for blog-clusters.js (which uses single quotes and is not strict JSON)
    const matches = [];
    const lines = content.split('\n');
    let currentPost = {};

    lines.forEach(line => {
        const slugMatch = line.match(/slug:\s*['"]([^'"]+)['"]/);
        const titleMatch = line.match(/title:\s*['"]([^'"]+)['"]/);

        if (slugMatch) currentPost.slug = slugMatch[1];
        if (titleMatch) currentPost.title = titleMatch[1];

        // If we have both (or at least slug) and end of object?
        // This is fuzzy. 
        // Let's just collect all unique slugs found.
        if (slugMatch) {
            matches.push({ slug: slugMatch[1], title: currentPost.title || 'Unknown' });
            currentPost = {}; // reset
        }
    });

    return matches;
}

// Logic from cannibalization-checker.js
const levenshtein = (a, b) => {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
};

const similarity = (s1, s2) => {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - levenshtein(longer, shorter)) / longerLength;
};

// Main Execution
const generatedPostsPath = path.join(__dirname, '../data/generated-posts.js');
const clustersPath = path.join(__dirname, '../data/blog-clusters.js');

const generatedPosts = extractPosts(generatedPostsPath);
const manualPosts = extractPosts(clustersPath);

console.log(`Extracted ${generatedPosts.length} generated posts and ${manualPosts.length} manual posts (regex/approx).`);

if (generatedPosts.length === 0) {
    console.error("FATAL: Could not extract generated posts. Check file format.");
    process.exit(1);
}

let conflicts = 0;

generatedPosts.forEach(gen => {
    // Check against manual
    manualPosts.forEach(man => {
        if (gen.slug === man.slug) {
            console.error(`❌ EXACT SLUG CONFLICT: ${gen.slug}`);
            conflicts++;
        }
        // Title check might be noisy if regex missed titles for manual posts, check if title exists
        if (gen.title && man.title) {
            const sim = similarity(gen.title.toLowerCase(), man.title.toLowerCase());
            if (sim > 0.90) { // Higher threshold for regex data to avoid false alarms
                console.warn(`⚠️ TITLE SIMILARITY WARNING: "${gen.title}" vs "${man.title}" (${(sim * 100).toFixed(1)}%)`);
            }
        }
    });
});

// Check internal duplicates
const slugSet = new Set();
generatedPosts.forEach(p => {
    if (slugSet.has(p.slug)) {
        console.error(`❌ DUPLICATE GENERATED SLUG: ${p.slug}`);
        conflicts++;
    }
    slugSet.add(p.slug);
});

if (conflicts === 0) {
    console.log("✅ VERIFICATION PASSED: No conflicts found.");
} else {
    console.error(`❌ VERIFICATION FAILED: ${conflicts} conflicts found.`);
    process.exit(1);
}
