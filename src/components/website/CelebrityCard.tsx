// components/CelebrityCard.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function CelebrityCard({ celebrity }: { celebrity: any }) {
  return (
    <Link href={`/celebrities/${celebrity.category}/${celebrity.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="relative h-48">
          <Image 
            src={celebrity.image} 
            alt={celebrity.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{celebrity.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{celebrity.currentWork}</p>
          <div className="flex justify-between items-center">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {celebrity.category === 'entertainment' ? 'Entertainment' : 
               celebrity.category === 'tech' ? 'Tech Leader' : 'Islamic Scholar'}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm">{celebrity.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}