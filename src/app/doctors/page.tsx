"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, X } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { motion, AnimatePresence } from 'framer-motion'

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  hospital: string;
  location: string;
  imageUrl: string | StaticImport;
  profileUrl: string;
  experience: number;
  nationality: string;
  languages: string[];
  qualifications: string[];
  education: string;
  workExperience: string;
  expertise: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Abeer Khan",
    specialization: "Specialist Dentist",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
    profileUrl: "/doctors/abeer-khan",
    experience: 8,
    nationality: "Indian",
    languages: ["English", "Hindi", "Arabic"],
    qualifications: ["BDS", "MDS"],
    education: "Dr. Abeer Khan completed her BDS from Rajiv Gandhi University of Health Sciences, Bangalore, India in 2010. She received her MDS in Conservative Dentistry and Endodontics in 2015.",
    workExperience: "She has worked in various dental clinics in India and UAE for the past 8 years, specializing in root canal treatments and cosmetic dentistry.",
    expertise: ["Root Canal Treatment", "Cosmetic Dentistry", "Dental Implants", "Pediatric Dentistry"]
  },
  {
    id: 2,
    name: "Dr. Mohammad Rafiq Yassin",
    specialization: "Specialist Cardiologist & Internal Medicine",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
    profileUrl: "/doctors/mohammad-rafiq-yassin",
    experience: 15,
    nationality: "Syrian",
    languages: ["English", "Arabic"],
    qualifications: ["MD", "MRCP (UK)", "FRCP (Glasgow)"],
    education: "Dr. Mohammad Rafiq Yassin graduated from Damascus University Faculty of Medicine in 2000. He obtained his MRCP (UK) in 2007 and was elected as a Fellow of the Royal College of Physicians and Surgeons of Glasgow in 2017.",
    workExperience: "He has extensive experience in cardiology and internal medicine, having worked in Syria, Saudi Arabia, and the UAE over the past 15 years.",
    expertise: ["Interventional Cardiology", "Echocardiography", "Hypertension Management", "Preventive Cardiology"]
  }
]

export default function DoctorsPage() {
  const [hoveredDoctor, setHoveredDoctor] = useState<number | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Our Doctors</h1>
          <nav className="text-sm breadcrumbs">
            <ul className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>Doctors</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div 
              key={doctor.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredDoctor(doctor.id)}
              onHoverEnd={() => setHoveredDoctor(null)}
            >
              <div className="relative">
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover object-center"
                />
                {hoveredDoctor === doctor.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <button
                        onClick={() => setSelectedDoctor(doctor)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        View Profile
                      </button>
                    </motion.div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
                <p className="text-blue-600 mb-2">{doctor.specialization}</p>
                <p className="text-gray-600">{doctor.hospital}, {doctor.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedDoctor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative p-8 w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedDoctor.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={selectedDoctor.imageUrl}
                    alt={selectedDoctor.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover object-center rounded-lg"
                  />
                  <div className="mt-4">
                    <p className="text-gray-700"><strong>Experience:</strong> {selectedDoctor.experience} years</p>
                    <p className="text-gray-700"><strong>Nationality:</strong> {selectedDoctor.nationality}</p>
                    <p className="text-gray-700"><strong>Languages:</strong> {selectedDoctor.languages.join(", ")}</p>
                    <p className="text-gray-700"><strong>Qualifications:</strong> {selectedDoctor.qualifications.join(", ")}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Biography</h4>
                  <p className="text-gray-700 mb-4">{selectedDoctor.education}</p>
                  <p className="text-gray-700 mb-4">{selectedDoctor.workExperience}</p>
                  <h4 className="text-lg font-semibold mb-2">Areas of Expertise</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedDoctor.expertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}