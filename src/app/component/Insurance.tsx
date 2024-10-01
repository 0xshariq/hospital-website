"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Insurance() {
  const [isVisible, setIsVisible] = useState(false);

  const logos = [
    {
      name: "Oman Insurance",
      src: "https://www.seekpng.com/png/small/768-7688461_family-protection-just-a-click-away-oman-insurance.png",
    },
    {
      name: "NAS",
      src: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/mvouz7rwns1n8k15nxe2",
    },
    {
      name: "Nextcare",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaK-kM6XNHKhJVw6jognLDeqa9itFvYyRVw&s",
    },
    {
      name: "Daman",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1K0s6D8Bcr4rRwziAVyj5tlqc1gGTvsQrg&s",
    },
    {
      name: "Daman Enhanced",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8Hwe1CqSTEP1Y4E0DomlWbT3ETv_n9cr3g&s",
    },
    {
      name: "MetLife",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSistaw8euw5GoN3_ZPA00vfOh6eCnEWMbWw&s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 transition-all duration-700 ease-in-out transform hover:scale-105">
            Insurance
          </h1>
        </div>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="relative w-full h-32 sm:h-40 md:h-48">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 ease-in-out filter hover:brightness-110"
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </div>
        <h2
          className={`text-center text-2xl font-semibold text-gray-800 transition-all duration-700 ease-in-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          ALL INSURANCE ACCEPTED HERE
        </h2>
      </div>
    </div>
  );
}