import Link from 'next/link'

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 min-h-screen">
            <header className="mb-12 w-full flex flex-col items-center">
                <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 tracking-tight drop-shadow-lg">
                    Discover Celebrities & Scholars
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-6 text-center">
                    Explore detailed profiles of entertainment icons, tech leaders, and Islamic scholars—all in one place.
                </p>
            </header>

            <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
                <CategoryCard 
                    title="Entertainment" 
                    description="Actors, Directors, Writers"
                    icon="🎬"
                    gradient="from-pink-400 via-red-300 to-yellow-200"
                    shadow="shadow-pink-200"
                    href="/celebrities/entertainment"
                />
                <CategoryCard 
                    title="Tech Leaders" 
                    description="CTOs, CEOs, Industry Pioneers"
                    icon="💡"
                    gradient="from-blue-400 via-cyan-300 to-green-200"
                    shadow="shadow-blue-200"
                    href="/celebrities/tech"
                />
                <CategoryCard 
                    title="Islamic Scholars" 
                    description="Scholars from various traditions"
                    icon="📚"
                    gradient="from-purple-400 via-indigo-300 to-pink-200"
                    shadow="shadow-purple-200"
                    href="/celebrities/scholars"
                />
            </section>

            <Link 
                href="/celebrities"
                className="inline-block bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 hover:from-pink-700 hover:to-yellow-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-200 text-xl tracking-wide animate-bounce"
            >
                Browse All Celebrities
            </Link>
        </div>
    )
}

function CategoryCard({
    title,
    description,
    href,
    icon,
    gradient,
    shadow,
}: {
    title: string
    description: string
    href: string
    icon: string
    gradient: string
    shadow: string
}) {
    return (
        <Link
            href={href}
            className={`group bg-gradient-to-br ${gradient} border-0 rounded-3xl p-10 flex flex-col items-center ${shadow} hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300`}
        >
            <div className="text-6xl mb-5 drop-shadow-lg group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="text-2xl font-extrabold mb-2 text-white group-hover:text-yellow-200 transition">{title}</h3>
            <p className="text-white/90 text-center font-medium">{description}</p>
        </Link>
    )
}