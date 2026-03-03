import Link from "next/link";

export default function BlogHero() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-orange-200 via-pink-200 to-yellow-100 dark:from-orange-900 dark:via-pink-900 dark:to-yellow-900 pt-32 pb-40 px-6">
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-left md:pr-10">
                    <p className="text-base font-bold tracking-widest uppercase mb-4 text-gray-900 dark:text-gray-100 opacity-80">
                        WebPify Blog
                    </p>
                    <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.8]">
                        Learn.
                    </h1>
                    <p className="text-2xl text-gray-800 dark:text-gray-200 font-medium max-w-lg leading-relaxed">
                        Master the art of image optimization, web performance, and technical SEO.
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute right-0 top-0 w-1/3 h-full hidden md:block opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-pink-600 fill-current">
                        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,87.9,-3.3C85.7,11.4,78.6,25.3,69.5,37.3C60.4,49.3,49.3,59.4,36.9,65.8C24.5,72.2,10.8,74.9,-1.9,78.2C-14.6,81.5,-29.2,85.4,-42.6,80.5C-56,75.6,-68.2,61.9,-77.2,46.5C-86.2,31.1,-92,14,-89.6,-1.4C-87.2,-16.8,-76.6,-30.5,-65.4,-41.8C-54.2,-53.1,-42.4,-62,-29.6,-69.9C-16.8,-77.8,-3,-84.7,10.2,-86.3C23.4,-87.9,40,-84.3,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="mt-12 md:mt-0 md:w-1/3 relative group cursor-pointer z-20">
                    {/* "New Event" / Featured Badge style card */}
                    <Link href="/blog/image-compression/bulk-image-compression-guide" className="block transform transition-transform hover:scale-105 hover:-rotate-1">
                        <div className="bg-[#ccff00] text-black p-8 rounded-[2rem] shadow-2xl relative overflow-hidden border-2 border-black/5">
                            <div className="absolute top-6 right-6 bg-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-black/10">
                                Guide
                            </div>
                            <h3 className="text-5xl font-black mb-4 mt-8 uppercase leading-[0.9] tracking-tighter">
                                Bulk<br />Compress
                            </h3>
                            <div className="flex justify-between items-end mt-8">
                                <span className="text-sm font-bold bg-black text-white px-4 py-1.5 rounded-full">New</span>
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
