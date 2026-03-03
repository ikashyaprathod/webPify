import Link from "next/link";
import Image from "next/image";

export default function FeaturedPost({ post }) {
    if (!post) return null;

    const categoryTitle = post.category?.title || "Featured";
    const categorySlug = post.category?.slug || "featured";

    return (
        <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 mb-24">
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row group">
                <div className="md:w-1/2 bg-gray-100 dark:bg-zinc-800 relative min-h-[350px] md:min-h-[500px] overflow-hidden">
                    {/* Placeholder gradient if no image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center p-10 text-9xl select-none group-hover:scale-105 transition-transform duration-700 ease-out">
                    </div>
                    {/* Actual Image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[8rem] filter drop-shadow-xl animate-float">🖼️</span>
                    </div>
                </div>
                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start">
                    <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        {categoryTitle}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
                        <Link href={`/blog/${categorySlug}/${post.slug}`} className="hover:text-blue-600 transition-colors">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                    <Link
                        href={`/blog/${categorySlug}/${post.slug}`}
                        className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition-all transform hover:translate-x-1 hover:shadow-lg hover:shadow-blue-600/20 text-lg"
                    >
                        Read Article
                        <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
