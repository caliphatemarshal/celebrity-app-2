// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="text-3xl font-extrabold tracking-wide flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <span role="img" aria-label="star">🌟</span>
                    Celebrity Insights
                </Link>
                <div className="flex space-x-6">
                    <Link
                        href="/"
                        className="px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 hover:text-yellow-300 font-semibold transition-all shadow"
                    >
                        Home
                    </Link>
                    <Link
                        href="/celebrities"
                        className="px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 hover:text-pink-200 font-semibold transition-all shadow"
                    >
                        Browse Celebrities
                    </Link>
                    <Link
                        href="/about"
                        className="px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 hover:text-purple-200 font-semibold transition-all shadow"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}