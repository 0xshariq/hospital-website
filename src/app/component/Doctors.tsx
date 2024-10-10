"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Type definitions
type Doctor = {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  location: string;
  imageUrl: string;
};

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Abeer Khan",
    specialization: "Specialist Dentist",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/assets/doctors/dr-abeer-khan.jpeg",
  },
  {
    id: "2",
    name: "Dr. Mohammed Rafiq Yassin",
    specialization: "Specialist Cardiologist & Internal Medicine",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/assets/doctors/dr-mohammed-rafiq-yassin.jpeg",
  }
];

const DoctorCard: React.FC<Doctor> = ({
  name,
  specialization,
  hospital,
  location,
  imageUrl,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-md mx-auto">
    <Image
      src={imageUrl}
      alt={name}
      width={400}
      height={400}
      className="w-full h-80 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-md text-gray-600 mb-2">{specialization}</p>
      <p className="text-md text-blue-600">
        {hospital}, {location}
      </p>
    </div>
  </div>
);

export default function OurDoctorsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600">Experts</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center my-20">
          <Button variant="ghost">
            <Link
              href="/doctors"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              More Info
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}