import Link from "next/link";

export default function CuratedContent() {
    const columns = [
        {
            title: "For Developers",
            links: ["Image Optimization API", "React Components", "Next.js Integration", "CLI Tools"]
        },
        {
            title: "For Designers",
            links: ["Aspect Ratio Calculator", "Color Palette Generator", "Figma Plugin", "Design Systems"]
        },
        {
            title: "Resources",
            links: ["Documentation", "Blog", "Community", "Help Center"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"]
        }
    ];

    return (
        <section className="bg-[#0B1120] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">Curated Content</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-wider">
                                {col.title}
                            </h3>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2026 WebPify Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>Twitter</span>
                        <span>GitHub</span>
                        <span>Discord</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
