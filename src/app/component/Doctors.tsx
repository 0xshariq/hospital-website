"use client";
import { useState } from "react";
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

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

// Sample data
const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Muhammad Abdul Rahman Siddiqui",
    specialization: "Specialist Cardiologist",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Dr. Anand Chatterjee",
    specialization: "Specialist Clinical Pathologist",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Dr. Anand Reddy Baddula",
    specialization: "Specialist Orthopedic Surgeon",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Dr. Anoop K Varghese",
    specialization: "Specialist Gastroenterology",
    hospital: "Extra Care Medical Center",
    location: "Abu Dhabi",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
];

const DoctorCard: React.FC<Doctor> = ({
  name,
  specialization,
  hospital,
  location,
  imageUrl,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <Image
      src={imageUrl}
      alt={name}
      width={300}
      height={300}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{specialization}</p>
      <p className="text-sm text-blue-600">
        {hospital}, {location}
      </p>
    </div>
  </div>
);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-center space-x-2 mt-8">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={`w-3 h-3 rounded-full ${
          currentPage === index + 1 ? "bg-blue-600" : "bg-gray-300"
        }`}
        aria-label={`Go to page ${index + 1}`}
      />
    ))}
  </div>
);

export default function OurDoctorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600">Experts</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <div className="flex flex-row justify-center items-center my-20">
          <Button variant="ghost">
          <Link
            href="/doctors"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            View All
          </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
