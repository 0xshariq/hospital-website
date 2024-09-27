"use client"

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const specialties = [
  "Dental","Cardiology","Internal Medicine"
]

export default function SpecialtiesSection() {
  const [hoveredSpecialty, setHoveredSpecialty] = useState<string | null>(null)

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((specialty) => (
            <Link
              href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-')}`}
              key={specialty}
              className={`group relative p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                hoveredSpecialty === specialty ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredSpecialty(specialty)}
              onMouseLeave={() => setHoveredSpecialty(null)}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {specialty}
                </span>
                <ChevronRight 
                  className={`text-gray-400 group-hover:text-blue-600 transition-all duration-300 ${
                    hoveredSpecialty === specialty ? 'transform translate-x-1' : ''
                  }`}
                />
              </div>
              <div 
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  hoveredSpecialty === specialty ? 'w-full' : ''
                }`}
              />
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  )
}