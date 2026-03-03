import Link from "next/link";

export default function ArticleGrid({ posts }) {
    // Unique categories for the filter bar
    const filters = ["View All", "Recent", "Design", "Marketing", "Productivity", "Sales", "Tech"];

    return (
        <section className="max-w-7xl mx-auto px-6 mb-24">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-100 dark:border-zinc-800">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-4">Filter by:</span>
                {filters.map((filter, idx) => (
                    <button
                        key={filter}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${idx === 0
                                ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 dark:bg-transparent dark:text-gray-300 dark:border-zinc-700 dark:hover:border-zinc-500"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map((post, idx) => {
                    // Cyclic colors for tags
                    const colors = [
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
                        'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
                        'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
                        'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                    ];
                    const tagColor = colors[idx % colors.length];

                    return (
                        <Link key={post.slug} href={`/blog/${post.category.slug}/${post.slug}`} className="group flex flex-col items-start h-full">
                            {/* Image Card */}
                            <div className="w-full aspect-[16/9] bg-gray-50 dark:bg-zinc-800/50 rounded-xl overflow-hidden mb-5 relative border border-gray-100 dark:border-zinc-800 group-hover:shadow-lg transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500 select-none opacity-80">
                                    {idx % 4 === 0 ? '📊' : idx % 4 === 1 ? '🎨' : idx % 4 === 2 ? '⚡' : '📱'}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-3 ${tagColor}`}>
                                    {post.category.title}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center mt-auto w-full pt-4 border-t border-gray-100 dark:border-zinc-800">
                                <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 overflow-hidden">
                                    <div className={`w-full h-full flex items-center justify-center text-[8px] font-bold text-white ${idx % 2 === 0 ? 'bg-indigo-500' : 'bg-rose-500'}`}>
                                        {idx % 2 === 0 ? 'JD' : 'AS'}
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                                    {idx % 2 === 0 ? 'John Doe' : 'Alice Smith'}
                                </span>
                                <span className="mx-2 text-gray-300">•</span>
                                <span className="text-xs text-gray-400">5 min read</span>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {/* Pagination / View All */}
            <div className="mt-16 text-center">
                <button className="px-8 py-3 bg-white border border-gray-300 rounded-full text-sm font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">
                    Load More Articles
                </button>
            </div>
        </section>
    );
}
