import Link from 'next/link'
import { FaStar, FaSearch, FaBookOpen, FaAward, FaUserTie, FaFilm } from 'react-icons/fa'
import { MdComputer, MdMosque } from 'react-icons/md'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 tracking-tight">
                    Discover <span className="whitespace-nowrap">Celebrity Insights</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
                    Explore in-depth profiles of entertainment icons, tech visionaries, and Islamic scholars—uncover their journeys, achievements, and wisdom.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <Link 
                        href="/celebrities" 
                        className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-lg flex items-center justify-center gap-2"
                    >
                        <FaSearch className="text-xl" /> Browse All
                    </Link>
                    <Link 
                        href="#featured" 
                        className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg text-lg flex items-center justify-center gap-2 border border-gray-200"
                    >
                        <FaStar className="text-yellow-500" /> Featured Profiles
                    </Link>
                </div>
                
                <div className="relative h-64 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
                                <FaFilm className="text-4xl mx-auto text-pink-600 mb-2" />
                                <span className="font-bold text-gray-800">500+</span> <span className="text-gray-600">Entertainment Stars</span>
                            </div>
                            <div className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
                                <MdComputer className="text-4xl mx-auto text-blue-600 mb-2" />
                                <span className="font-bold text-gray-800">200+</span> <span className="text-gray-600">Tech Leaders</span>
                            </div>
                            <div className="bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm">
                                <MdMosque className="text-4xl mx-auto text-purple-600 mb-2" />
                                <span className="font-bold text-gray-800">150+</span> <span className="text-gray-600">Islamic Scholars</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Cards */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                    Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Categories</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <CategoryCard 
                        title="Entertainment" 
                        description="Actors, Directors, Writers & Producers"
                        icon={<FaFilm className="text-5xl" />}
                        gradient="from-pink-500 to-rose-500"
                        href="/celebrities/entertainment"
                        stats="500+ Profiles"
                    />
                    <CategoryCard 
                        title="Tech Leaders" 
                        description="CTOs, CEOs & Industry Pioneers"
                        icon={<MdComputer className="text-5xl" />}
                        gradient="from-blue-500 to-cyan-500"
                        href="/celebrities/tech"
                        stats="200+ Profiles"
                    />
                    <CategoryCard 
                        title="Islamic Scholars" 
                        description="Renowned Scholars & Thinkers"
                        icon={<MdMosque className="text-5xl" />}
                        gradient="from-purple-500 to-indigo-500"
                        href="/celebrities/scholars"
                        stats="150+ Profiles"
                    />
                </div>
            </div>

            {/* Featured Section */}
            <div id="featured" className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Profiles</span>
                    </h2>
                    <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                        Discover some of our most popular and influential personalities
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeaturedCard 
                            name="Shakib Khan"
                            title="Superstar Actor"
                            category="Entertainment"
                            image="/images/shakib-khan.jpg"
                            rating={4.8}
                            href="/celebrities/entertainment/1"
                        />
                        <FeaturedCard 
                            name="Tanvir Ahmed"
                            title="CTO at ROBI"
                            category="Tech Leader"
                            image="/images/tanvir-ahmed.jpg"
                            rating={4.5}
                            href="/celebrities/tech/3"
                        />
                        <FeaturedCard 
                            name="Dr. Abdul Mannan"
                            title="Islamic Scholar"
                            category="Religious Leader"
                            image="/images/dr-mannan.jpg"
                            rating={4.9}
                            href="/celebrities/scholars/5"
                        />
                        <FeaturedCard 
                            name="Fahmida Khatun"
                            title="CEO at Blink"
                            category="Tech Leader"
                            image="/images/fahmida-khatun.jpg"
                            rating={4.7}
                            href="/celebrities/tech/4"
                        />
                    </div>
                </div>
            </div>

            {/* Value Proposition */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Celebrity Insights</span>?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    <ValueCard 
                        icon={<FaBookOpen className="text-4xl" />}
                        title="Comprehensive Profiles"
                        description="Detailed biographies with verified information from multiple reliable sources."
                        color="text-pink-600"
                    />
                    <ValueCard 
                        icon={<FaAward className="text-4xl" />}
                        title="Exclusive Content"
                        description="Access rare interviews, personal stories, and career milestones."
                        color="text-blue-600"
                    />
                    <ValueCard 
                        icon={<FaUserTie className="text-4xl" />}
                        title="Diverse Categories"
                        description="From entertainment to tech and religious scholars - all in one place."
                        color="text-purple-600"
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Explore?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join thousands of users discovering inspiring stories and valuable insights daily.
                    </p>
                    <Link 
                        href="/celebrities"
                        className="inline-block bg-white hover:bg-gray-100 text-pink-600 font-bold py-4 px-12 rounded-full shadow-xl transition-all duration-200 text-lg"
                    >
                        Start Browsing Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

function CategoryCard({
    title,
    description,
    href,
    icon,
    gradient,
    stats,
}: {
    title: string
    description: string
    href: string
    icon: React.ReactNode
    gradient: string
    stats: string
}) {
    return (
        <Link
            href={href}
            className={`group relative overflow-hidden bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center text-white`}
        >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-200 transition">{title}</h3>
                <p className="mb-4 text-white/90">{description}</p>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">{stats}</span>
            </div>
        </Link>
    )
}

function FeaturedCard({
    name,
    title,
    category,
    image,
    rating,
    href,
}: {
    name: string
    title: string
    category: string
    image: string
    rating: number
    href: string
}) {
    return (
        <Link href={href} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                        src={image} 
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                            <FaStar className="mr-1" /> {rating.toFixed(1)}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition">{name}</h3>
                    <p className="text-gray-600 mb-2">{title}</p>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {category}
                    </span>
                </div>
            </div>
        </Link>
    )
}

function ValueCard({
    icon,
    title,
    description,
    color,
}: {
    icon: React.ReactNode
    title: string
    description: string
    color: string
}) {
    return (
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className={`mb-6 p-4 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-inner ${color}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}