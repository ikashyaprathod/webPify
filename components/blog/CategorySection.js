import Link from "next/link";

export default function CategorySection({ title, slug, posts, color = "blue" }) {
    if (!posts || posts.length === 0) return null;

    const colors = {
        blue: "text-blue-600",
        purple: "text-purple-600",
        pink: "text-pink-600",
        orange: "text-orange-600",
        green: "text-green-600",
    };

    const titleColor = colors[color] || colors.blue;

    return (
        <section className="max-w-7xl mx-auto px-6 mb-32">
            <div className="flex items-baseline justify-between mb-12 border-b-2 border-gray-100 dark:border-gray-800 pb-6">
                <h2 className={`text-5xl font-black ${titleColor} tracking-tighter`}>
                    {title}
                </h2>
                <Link href={`/blog/${slug}`} className="text-base font-bold text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    See all
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {posts.slice(0, 3).map((post, idx) => (
                    <Link key={post.slug} href={`/blog/${slug}/${post.slug}`} className="group block h-full">
                        <div className="relative aspect-[4/3] bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-zinc-800">
                            {/* Placeholder generic pattern based on index */}
                            <div className={`absolute inset-0 bg-gradient-to-br opacity-10 ${idx % 3 === 0 ? 'from-blue-400 to-cyan-300' :
                                    idx % 3 === 1 ? 'from-purple-400 to-pink-300' :
                                        'from-yellow-400 to-orange-300'
                                }`}></div>
                            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 saturate-0 group-hover:saturate-100">
                                {idx % 3 === 0 ? '📝' : idx % 3 === 1 ? '⚡' : '🖼️'}
                            </div>
                        </div>

                        <div className="flex flex-col pr-4">
                            <span className={`text-xs font-black uppercase tracking-widest mb-3 ${titleColor} opacity-80`}>
                                {post.intent || 'Article'}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-base line-clamp-3 leading-relaxed mb-6">
                                {post.excerpt}
                            </p>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-auto flex items-center group-hover:translate-x-2 transition-transform">
                                Read more
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
