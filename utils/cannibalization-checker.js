import { blogClusters } from '@/data/blog-clusters';

// Simple Levenshtein distance for string similarity
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

/**
 * Checks if a proposed slug collides with existing content.
 * Returns { collision: boolean, reason: string }
 */
export function checkCannibalization(proposedSlug, proposedTitle) {
    // 1. Check against Manual Cluster Slugs
    for (const cluster of Object.values(blogClusters)) {
        for (const post of cluster.posts) {
            if (post.slug === proposedSlug) {
                return { collision: true, reason: `Exact slug match with manual post: ${post.slug}` };
            }

            // Check title similarity (>80%)
            const titleSim = similarity(post.title.toLowerCase(), proposedTitle.toLowerCase());
            if (titleSim > 0.85) {
                return { collision: true, reason: `Title too similar to manual post: "${post.title}" (${Math.round(titleSim * 100)}%)` };
            }
        }
    }

    // 2. Check against sitemap (Mocking this for now as we can't easily parse the live sitemap here without fetching)
    // In a real build step, we would load the sitemap.json or similar.

    return { collision: false };
}

/**
 * Validates a batch of generated posts against itself and existing content
 */
export function validateBatch(posts) {
    const validPosts = [];
    const rejectedPosts = [];

    const seenSlugs = new Set();

    posts.forEach(post => {
        if (seenSlugs.has(post.slug)) {
            rejectedPosts.push({ ...post, reason: 'Duplicate slug in batch' });
            return;
        }

        const check = checkCannibalization(post.slug, post.title);
        if (check.collision) {
            rejectedPosts.push({ ...post, reason: check.reason });
        } else {
            validPosts.push(post);
            seenSlugs.add(post.slug);
        }
    });

    return { validPosts, rejectedPosts };
}
