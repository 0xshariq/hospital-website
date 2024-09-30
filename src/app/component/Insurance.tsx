import { motion } from "framer-motion";
import Image from "next/image";

export default function Insurance() {
  const logos = [
    {
      name: "Oman Insurance",
      src: "https://www.asta-uk.com/wp-content/uploads/2021/09/oman-insurance-logo.jpg",
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

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center mb-8"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-1/2 sm:w-1/3 md:w-1/4 p-4"
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
            </motion.div>
          ))}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xl font-semibold text-gray-800"
        >
          YOUR BEST DENTISTS IN ABU DHABI
        </motion.h2>
      </div>
    </div>
  );
}
