import Link from "next/link";
import { blogClusters, getAllCategories } from "@/data/blog-clusters";

export const metadata = {
    title: "WebPify Blog - Image Optimization & SEO Guides",
    description: "Expert guides on image compression, format conversion, and SEO/Core Web Vitals optimization.",
};

export default function BlogIndex() {
    const categories = getAllCategories();

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    Image Optimization Hub
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Deep dives into compression algorithms, modern formats, and technical SEO strategies.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/blog/${category.slug}`}
                        className="group block p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
                    >
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {category.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {category.description}
                        </p>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                            Explore {category.posts.length} Guides
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            <section className="mt-20">
                <h2 className="text-3xl font-bold mb-10 text-center">Latest Technical Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.flatMap(c => c.posts.slice(0, 1).map(p => ({ ...p, category: c }))).slice(0, 4).map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.category.slug}/${post.slug}`}
                            className="flex flex-col p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                                {post.category.title}
                            </span>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                {post.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
