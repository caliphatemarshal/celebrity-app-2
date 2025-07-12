// app/api/celebrities/route.ts
import { NextResponse } from 'next/server'

// Mock data - replace with actual database calls
const celebrities = [
  // Entertainment
  {
    id: '1',
    category: 'entertainment',
    name: 'Shakib Khan',
    dob: '1980-03-28',
    religion: 'Islam',
    hometown: 'Narayanganj',
    currentWork: 'Actor, Producer',
    firstWork: 'Ananta Bhalobasha (1999)',
    workBeforeFamous: 'Theatre actor',
    struggleStory: 'Started with small roles before getting breakthrough',
    image: '/images/shakib-khan.jpg',
    rating: 4.8,
    books: ['Shakib Khan: The Untold Story'],
    awards: ['National Film Award', 'Meril Prothom Alo Awards'],
    type: 'actor',
    gender: 'male'
  },
  // Tech Leader
  {
    id: '2',
    category: 'tech',
    name: 'Tanvir Ahmed',
    dob: '1975-05-15',
    university: 'BUET',
    hometown: 'Dhaka',
    currentWork: 'CTO at ROBI',
    firstWork: 'Software Engineer at Grameenphone',
    workBeforeFamous: 'Freelance developer',
    techExpertise: ['Telecom', '5G', 'Network Architecture'],
    startupStory: 'Founded a successful tech startup before joining ROBI',
    image: '/images/tanvir-ahmed.jpg',
    rating: 4.5,
    hobby: 'Reading, Traveling',
    experience: '20+ years'
  },
  // Islamic Scholar
  {
    id: '3',
    category: 'scholars',
    name: 'Dr. Muhammad Abdul Mannan',
    dob: '1950-11-20',
    district: 'Chittagong',
    education: 'PhD in Islamic Studies, Al-Azhar University',
    currentWork: 'Professor at International Islamic University',
    books: ['The Path to Righteousness', 'Understanding Quran'],
    significantContribution: 'Established multiple madrasas',
    image: '/images/dr-mannan.jpg',
    rating: 4.9,
    workHistory: 'Teacher at Darul Uloom, Professor since 1990'
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const id = searchParams.get('id')

  if (id) {
    const celebrity = celebrities.find(c => c.id === id)
    return NextResponse.json(celebrity || null)
  }

  if (category) {
    const filtered = celebrities.filter(c => c.category === category)
    return NextResponse.json(filtered)
  }

  return NextResponse.json(celebrities)
}

// Helper functions for server components
export async function getCelebritiesByCategory(category: string) {
  return celebrities.filter(c => c.category === category)
}

export async function getCelebrityById(id: string) {
  return celebrities.find(c => c.id === id) || null
}