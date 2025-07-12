// app/celebrities/[category]/[id]/page.tsx
import { getCelebrityById } from "@/app/api/celebrities/route"

type Celebrity = {
  name: string;
  dob: string;
  religion?: string;
  hometown?: string;
  university?: string;
  education?: string;
  currentWork: string;
  firstWork: string;
  workBeforeFamous: string;
  techExpertise?: string[];
  struggleStory?: string;
  successStory?: string;
  hobby?: string;
  image: string;
  rating: number;
  books?: string[];
  awards?: any[];
};

export default async function CelebrityDetailPage({ 
  params 
}: { 
  params: { category: string, id: string } 
}) {
  const celebrity = await getCelebrityById(params.id) as Celebrity;
  
  if (!celebrity) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Celebrity Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the celebrity you are looking for.</p>
      </div>
    );
  }

  const renderBasicInfo = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><span className="font-semibold">Name:</span> {celebrity.name}</p>
          <p><span className="font-semibold">Date of Birth:</span> {celebrity.dob}</p>
          {celebrity.religion && <p><span className="font-semibold">Religion:</span> {celebrity.religion}</p>}
          {celebrity.hometown && <p><span className="font-semibold">Hometown:</span> {celebrity.hometown}</p>}
        </div>
        <div>
          {celebrity.university && <p><span className="font-semibold">University:</span> {celebrity.university}</p>}
          {celebrity.education && <p><span className="font-semibold">Education:</span> {celebrity.education}</p>}
          <p><span className="font-semibold">Current Work:</span> {celebrity.currentWork}</p>
        </div>
      </div>
    </div>
  )

  const renderCareerInfo = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Career Information</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg">First Work:</h3>
          <p>{celebrity.firstWork}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Work Before Famous:</h3>
          <p>{celebrity.workBeforeFamous}</p>
        </div>
        {celebrity.successStory && (
          <div>
            <h3 className="font-semibold text-lg">Success Story:</h3>
            <p>{celebrity.successStory}</p>
          </div>
        )}
      </div>
    </div>
  )

  const renderPersonalInfo = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Personal Life</h2>
      <div className="space-y-4">
        {celebrity.struggleStory && (
          <div>
            <h3 className="font-semibold text-lg">Struggle Story:</h3>
            <p>{celebrity.struggleStory}</p>
          </div>
        )}
        {"successStory" in celebrity && celebrity.successStory && (
          <div>
            <h3 className="font-semibold text-lg">Success Story:</h3>
            <p>{celebrity.successStory}</p>
          </div>
        )}
        {celebrity.hobby && (
          <div>
            <h3 className="font-semibold text-lg">Hobbies:</h3>
            <p>{celebrity.hobby}</p>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <img 
            src={celebrity.image} 
            alt={celebrity.name} 
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Quick Facts</h3>
            <p><span className="font-semibold">Rating:</span> {celebrity.rating}/5</p>
            {celebrity.books && (
              <p><span className="font-semibold">Books:</span> {celebrity.books.join(', ')}</p>
            )}
            {celebrity.awards && (
              <p><span className="font-semibold">Awards:</span> {celebrity.awards.length}</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{celebrity.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{celebrity.currentWork}</p>
          
          {renderBasicInfo()}
          {renderCareerInfo()}
          {renderPersonalInfo()}
        </div>
      </div>
    </div>
  )
}