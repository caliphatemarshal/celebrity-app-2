// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Stop Wondering About Celebrities</h1>
      <p className="text-xl mb-8">
        Discover comprehensive profiles of celebrities from entertainment, tech industry, 
        and Islamic scholars. Get all the information you need in one place.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <CategoryCard 
          title="Entertainment" 
          description="Actors, Directors, Writers" 
          href="/celebrities/entertainment"
        />
        <CategoryCard 
          title="Tech Leaders" 
          description="CTOs, CEOs, Industry Pioneers" 
          href="/celebrities/tech"
        />
        <CategoryCard 
          title="Islamic Scholars" 
          description="Scholars from various traditions" 
          href="/celebrities/scholars"
        />
      </div>

      <Link 
        href="/celebrities" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        Browse All Celebrities
      </Link>
    </div>
  )
}

function CategoryCard({ title, description, href }: { title: string, description: string, href: string }) {
  return (
    <Link href={href} className="border rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}