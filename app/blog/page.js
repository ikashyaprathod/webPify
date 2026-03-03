import { blogClusters, getAllCategories } from "@/data/blog-clusters";
import HeroSection from "@/components/blog/HeroSection";
import ArticleGrid from "@/components/blog/ArticleGrid";
import CuratedContent from "@/components/blog/CuratedContent";

export const metadata = {
    title: "WebPify Blog - Insights, Guides & Tutorials",
    description: "Expert guides on image compression, format conversion, and SEO.",
};

export default function BlogIndex() {
    const categories = getAllCategories();

    // Flatten all posts for grid
    const allPosts = categories.flatMap(c => c.posts.map(p => ({ ...p, category: c })));

    // Specific posts for Hero
    const featuredPost = allPosts.find(p => p.slug === 'what-is-image-compression') || allPosts[0];
    const subFeatured1 = allPosts.find(p => p.slug === 'best-image-format-for-seo') || allPosts[1];
    const subFeatured2 = allPosts.find(p => p.slug === 'image-optimization-for-lcp') || allPosts[2];

    // Grid Posts directly (excluding hero posts ideally, but for demo just slice)
    const gridPosts = allPosts.filter(p =>
        p.slug !== featuredPost.slug &&
        p.slug !== subFeatured1.slug &&
        p.slug !== subFeatured2.slug
    ).slice(0, 9);

    return (
        <div className="min-h-screen bg-white dark:bg-black font-sans text-gray-900">
            {/* Simple Header Spacer if needed, assumes global navbar */}
            <div className="h-4"></div>

            <HeroSection
                featuredPost={featuredPost}
                subFeaturedPosts={[subFeatured1, subFeatured2]}
            />

            <ArticleGrid posts={gridPosts} />

            <CuratedContent />
        </div>
    );
}
