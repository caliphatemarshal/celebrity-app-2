// app/celebrities/[category]/page.tsx
import { getCelebritiesByCategory } from "@/app/api/celebrities/route";
import CelebrityCard from "@/components/website/CelebrityCard";
import SearchFilter from "@/components/website/SearchFilter";

export default async function CelebritiesPage({ params }: { params: { category: string } }) {
  const celebrities = await getCelebritiesByCategory(params.category)
  
  const categoryTitles: Record<string, string> = {
    entertainment: 'Entertainment Celebrities',
    tech: 'Tech Industry Leaders',
    scholars: 'Islamic Scholars'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{categoryTitles[params.category] || 'Celebrities'}</h1>
      
      <SearchFilter />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {celebrities.map((celebrity: any) => (
          <CelebrityCard key={celebrity.id} celebrity={celebrity} />
        ))}
      </div>
    </div>
  )
}