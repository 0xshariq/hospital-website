"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, ChevronUp } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white relative">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <nav className="flex flex-col md:flex-row justify-between items-center h-auto">
            <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
              <Link href="/about-us" className="hover:underline py-2">
                About Us
              </Link>
              <Link href="/doctors" className="hover:underline py-2">
                Our Doctors
              </Link>
              <Link href="/patients" className="hover:underline py-2">
                Patient Info
              </Link>
              <Link href="/feedback" className="hover:underline py-2">
                Feedback
              </Link>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/people/Extra-Care-Medical-Center/61551124427651/?mibextid=qi2Omg&rdid=pMvUrYzAde2lzVCi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhzdkPWRCAXBqRh4h%2F%3Fmibextid%3Dqi2Omg"
                aria-label="Facebook"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/extracareuae"
                aria-label="LinkedIn"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/extracareuae/?igsh=dnl3YTFwM21kM2Nv"
                aria-label="Instagram"
                className="hover:text-blue-200 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Our Specialties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-600">
          <SpecialtyLink href="/specialties/dental">Dental</SpecialtyLink>
          <SpecialtyLink href="/specialties/cardiology">
            Cardiology
          </SpecialtyLink>
          <SpecialtyLink href="/specialties/internal-medicine">
            Internal Medicine
          </SpecialtyLink>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div>
            © 2024 Extra Care Medical Center. All Rights Reserved. MOH Approval
            No. EC12345
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="mt-2 md:mt-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/435273729_751711263744527_5426922841830167348_n-removebg-preview%20(1)-9iQuAyEsyuOesqzFOXtTedXVoxzAHx.png"
              alt="Extra Care Medical Center Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SpecialtyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-blue-600 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
