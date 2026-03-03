import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ featuredPost, subFeaturedPosts }) {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Featured Post - Left Side (8 col) - G2 Style Banner */}
                <div className="lg:col-span-8 group relative bg-[#FFC425] text-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Link href={`/blog/${featuredPost.category.slug}/${featuredPost.slug}`} className="flex flex-col md:flex-row h-full">

                        {/* Text Content */}
                        <div className="md:w-3/5 p-10 flex flex-col justify-center relative z-10">
                            <span className="inline-block bg-white/20 text-gray-900 font-bold px-3 py-1 text-xs uppercase tracking-widest rounded mb-4 w-fit backdrop-blur-sm">
                                {featuredPost.category.title}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
                                {featuredPost.title}
                            </h1>
                            <p className="text-lg font-medium opacity-90 mb-8 line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center mt-auto">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-black/10 overflow-hidden mr-3">
                                    <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">WP</div>
                                </div>
                                <div className="text-sm font-bold opacity-80">
                                    By WebPify Team
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="md:w-2/5 relative bg-gradient-to-l from-white/10 to-transparent flex items-center justify-center overflow-hidden">
                            {/* Decorative Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-10 -mb-10"></div>

                            <div className="relative z-10 text-9xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 filter drop-shadow-lg">
                                🚀
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Sub Featured Posts - Right Side (4 col) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {subFeaturedPosts.map((post, idx) => (
                        <Link key={post.slug} href={`/blog/${post.category.slug}/${post.slug}`} className="group block bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-md hover:border-blue-500/30 transition-all h-full flex flex-col justify-between">
                            <div>
                                <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3 block">
                                    {post.category.title}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                                Read now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
