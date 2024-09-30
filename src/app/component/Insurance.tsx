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
      src: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/df/56/47/df5647dc-144f-e8b5-f55d-6fac44c7d643/AppIcon-0-0-1x_U007emarketing-0-2-0-85-220.png/1200x600wa.png",
    },
    {
      name: "MetLife",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFyYVY6-eqpYeFjboE-xR7dTS1Sft8aRlnA&s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-wrap justify-center items-center mb-8 transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="w-1/2 sm:w-1/3 md:w-1/4 p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-20">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  unoptimized={true}
                />
              </div>
            </div>
          ))}
        </div>
        <h2
          className={`text-center text-xl font-semibold text-gray-800 transition-opacity duration-700 ease-in-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          YOUR BEST DENTISTS IN ABU DHABI
        </h2>
      </div>
    </div>
  );
}
