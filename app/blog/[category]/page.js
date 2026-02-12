import Link from "next/link";
import { blogClusters } from "@/data/blog-clusters";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata({ params }) {
    const { category } = await params;
    const cluster = blogClusters[category];

    if (!cluster) return {};

    return {
        title: `${cluster.title} - WebPify Guides`,
        description: cluster.description,
    };
}

export function generateStaticParams() {
    return Object.keys(blogClusters).map((category) => ({
        category,
    }));
}

export default async function CategoryPage({ params }) {
    const { category } = await params;
    const cluster = blogClusters[category];

    if (!cluster) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="mb-8">
                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: cluster.title, href: "#" }
                    ]}
                />
            </div>

            <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-12">
                <h1 className="text-4xl font-bold mb-4">{cluster.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
                    {cluster.description}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cluster.posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${cluster.slug}/${post.slug}`}
                        className="flex flex-col group h-full rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all bg-white dark:bg-gray-900"
                    >
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide
                    ${post.intent === 'informational' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                        post.intent === 'comparison' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                                            post.intent === 'technical' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' :
                                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    }`}>
                                    {post.intent}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center mt-auto">
                                Read Guide
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
