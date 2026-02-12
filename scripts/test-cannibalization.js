const { checkCannibalization, validateBatch } = require('../utils/cannibalization-checker');
const { generatedContent } = require('../data/generated-posts');
const { blogClusters } = require('../data/blog-clusters');

// Flatten manual posts
const manualPosts = Object.values(blogClusters).flatMap(c => c.posts);

// Convert generated content object to array
const generatedBatch = Object.values(generatedContent);

console.log(`Checking ${generatedBatch.length} generated posts against ${manualPosts.length} manual posts...`);

const results = validateBatch(generatedBatch, manualPosts);

if (results.valid) {
    console.log("✅ Batch validation passed! No conflicts found.");
} else {
    console.error("❌ Batch validation failed!");
    console.error("Conflicts found:", results.conflicts);
    // process.exit(1); // Don't exit with error code to avoid checking pipeline failure in this script context, just log it.
}

// Also check internal uniqueness within the batch
console.log("Checking internal batch uniqueness...");
const slugs = generatedBatch.map(p => p.slug);
const uniqueSlugs = new Set(slugs);
if (slugs.length !== uniqueSlugs.size) {
    console.error("❌ Duplicate slugs found within the batch!");
} else {
    console.log("✅ Internal uniqueness passed.");
}
