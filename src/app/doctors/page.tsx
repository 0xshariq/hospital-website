"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, X } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

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
    "id": 2,
    "name": "Dr. Mohammad Rafiq Yassin",
    "specialization": "Specialist Cardiologist & Internal Medicine",
    "hospital": "Extra Care Medical Center",
    "location": "Abu Dhabi",
    "imageUrl": "/placeholder.svg?height=300&width=300",
    "profileUrl": "/doctors/mohammad-rafiq-yassin",
    "experience": 25,
    "nationality": "Syrian",
    "languages": ["English", "Arabic"],
    "qualifications": [
        "M.B.B.S",
        "MRCP (UK)",
        "FRCP (Glasgow)",
        "Diploma in Occupational Health",
        "Aviation Medicine (Melbourne, Australia)",
        "Cardiology & Internal Medicine (Bristol, UK)"
    ],
    "education": "Dr. Mohammad Rafiq Yassin graduated from Damascus University Faculty of Medicine in 2000. He obtained his MRCP (UK) in 2007 and was elected as a Fellow of the Royal College of Physicians and Surgeons of Glasgow in 2017.",
    "workExperience": "Dr. Yassin has worked as a Registrar in Cardiology & Internal Medicine at Bristol Royal Infirmary, UK. He has been the Chief Medical Officer at GAMO in Abu Dhabi, Etihad Airways, ADAT (Mubadala, Abu Dhabi), and Etihad Engineering.",
    "expertise": [
        "Interventional Cardiology",
        "Echocardiography",
        "Hypertension Management",
        "Preventive Cardiology",
        "Primary Healthcare",
        "Occupational Health Management",
        "Aviation Medicine & Medical Kits"
    ]
}

]

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

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
          className={`grid ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-8`}
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-70" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-blue-600">{doctor.name}</h2>
                    <p className="text-blue-600 mb-2">{doctor.specialization}</p>
                    <p className="text-gray-600 mb-4">{doctor.hospital}, {doctor.location}</p>
                    <p className="text-gray-700"><strong>Experience:</strong> {doctor.experience} years</p>
                    <p className="text-gray-700"><strong>Languages:</strong> {doctor.languages.join(", ")}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => setSelectedDoctor(doctor)} 
                    className="w-full transition-colors duration-300 ease-in-out hover:bg-blue-700"
                  >
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
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
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className={`relative ${isSmallScreen ? 'w-full' : 'w-11/12 max-w-4xl'} bg-white rounded-lg shadow-2xl`}
              onClick={e => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 transition-colors duration-300 hover:bg-gray-200"
                onClick={() => setSelectedDoctor(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
              <ScrollArea className={`p-6 ${isSmallScreen ? 'h-[calc(100vh-2rem)]' : 'max-h-[calc(100vh-4rem)]'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedDoctor.name}</h3>
                <div className={`grid ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                  <div>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={selectedDoctor.imageUrl}
                        alt={selectedDoctor.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Experience:</strong> {selectedDoctor.experience} years</p>
                      <p className="text-gray-700"><strong>Nationality:</strong> {selectedDoctor.nationality}</p>
                      <p className="text-gray-700"><strong>Languages:</strong> {selectedDoctor.languages.join(", ")}</p>
                      <p className="text-gray-700"><strong>Qualifications:</strong> {selectedDoctor.qualifications.join(", ")}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold mb-2">Biography</h4>
                      <p className="text-gray-700">{selectedDoctor.education}</p>
                      <p className="text-gray-700 mt-2">{selectedDoctor.workExperience}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold mb-2">Areas of Expertise</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {selectedDoctor.expertise.map((item, index) => (
                          <li key={index} className="transition-colors duration-300 hover:text-blue-600">{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
