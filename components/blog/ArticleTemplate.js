import Link from "next/link";
import Breadcrumb from "../Breadcrumb";

export default function ArticleTemplate({
    title,
    intro,
    category,
    author = "WebPify Team",
    lastUpdated,
    children,
    faqs = [],
    relatedTools = [],
    toc = []
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "image": "https://webpifyy.vercel.app/og-image.jpg", // Default OG
        "author": {
            "@type": "Organization",
            "name": author,
            "url": "https://webpifyy.vercel.app"
        },
        "publisher": {
            "@type": "Organization",
            "name": "WebPify",
            "logo": {
                "@type": "ImageObject",
                "url": "https://webpifyy.vercel.app/logo.png"
            }
        },
        "datePublished": lastUpdated || new Date().toISOString(),
        "dateModified": lastUpdated || new Date().toISOString(),
        "description": intro
    };

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumbs */}
            <div className="mb-6">
                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: category.title, href: `/blog/${category.slug}` },
                        { label: title, href: "#" }
                    ]}
                />
            </div>

            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center justify-center text-sm text-gray-500 gap-4">
                    <span>By {author}</span>
                    <span>•</span>
                    <span>Updated {new Date(lastUpdated || Date.now()).toLocaleDateString()}</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Main Content */}
                <div className="lg:col-span-8">
                    {/* AI Overview Definition Block */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                        <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                            Quick Definition
                        </h2>
                        <p className="text-lg leading-relaxed font-medium">
                            {intro}
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-500">
                        {children}
                    </div>

                    {/* FAQ Schema Section */}
                    {faqs.length > 0 && (
                        <section className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800">
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group border border-gray-200 dark:border-gray-700 rounded-lg open:bg-gray-50 dark:open:bg-gray-800/50 transition-colors">
                                        <summary className="flex justify-between items-center w-full p-4 font-medium text-left cursor-pointer list-none">
                                            <span>{faq.question}</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-4 pb-4 pt-2 text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Table of Contents */}
                    {toc.length > 0 && (
                        <div className="sticky top-24 p-6 border rounded-xl bg-gray-50/50 dark:bg-gray-900/50 dark:border-gray-800 backdrop-blur-sm">
                            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-500">Contents</h3>
                            <nav className="flex flex-col space-y-2 text-sm">
                                {toc.map((item, i) => (
                                    <a key={i} href={`#${item.id}`} className="hover:text-blue-600 transition-colors line-clamp-1 block">
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}

                    {/* Tool CTAs - AI Optimized */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
                        <h3 className="font-bold text-xl mb-2">Optimizing Images?</h3>
                        <p className="text-blue-100 text-sm mb-4">
                            Reduce file size by up to 90% without losing quality using our free tools.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <Link href="/image/compressor" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-50 transition">
                                Compress Images
                            </Link>
                            <Link href="/image/converter" className="bg-blue-800/30 text-white font-medium py-2 px-4 rounded-lg text-center hover:bg-blue-800/50 transition">
                                Convert Format
                            </Link>
                        </div>
                    </div>

                    {/* Related Articles */}
                    {relatedTools.length > 0 && (
                        <div>
                            <h3 className="font-bold text-lg mb-4">Related Guides</h3>
                            <ul className="space-y-3">
                                {relatedTools.map((tool, i) => (
                                    <li key={i}>
                                        <Link href={tool.href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm leading-snug block">
                                            {tool.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </article>
    );
}
