// components/SearchFilter.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchFilter() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchTerm, 'Filter:', filter)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search celebrities..."
          className="flex-grow p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="entertainment">Entertainment</option>
          <option value="tech">Tech Leaders</option>
          <option value="scholars">Islamic Scholars</option>
        </select>
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  )
}