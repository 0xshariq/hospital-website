"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";

const specialties = ["Dental", "Cardiology", "Internal Medicine"];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "971XXXXXXXXX";
    const message = encodeURIComponent(
      "Hello, I would like to connect with Extra Care Medical Center."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/435273729_751711263744527_5426922841830167348_n-removebg-preview%20(1)-9iQuAyEsyuOesqzFOXtTedXVoxzAHx.png"
                alt="Extra Care Medical Center Logo"
                width={150}
                height={150}
                className="mr-2"
              />
              <p className="text-gray-400 text-sm">
                Providing quality healthcare services with a focus on patient
                comfort and advanced medical technologies.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Our Specialties</h2>
              <ul className="space-y-2">
                {specialties.map((specialty, index) => (
                  <li key={index}>
                    <Link
                      href={`/specialties/${specialty
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {specialty}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Our Doctors",
                  "Privacy Policy",
                  "Terms & Conditions",
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://www.facebook.com/people/Extra-Care-Medical-Center/61551124427651/?mibextid=qi2Omg&rdid=de54NKzd3LeyZaVL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhzdkPWRCAXBqRh4h%2F%3Fmibextid%3Dqi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6 mr-2" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/extracareuae/?igsh=dnl3YTFwM21kM2Nv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6 mr-2" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/company/extracareuae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Extra Care Medical Center. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsWhatsAppHovered(true)}
        onMouseLeave={() => setIsWhatsAppHovered(false)}
        className={`fixed bottom-4 right-4 p-3 rounded-full text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
          isWhatsAppHovered
            ? "bg-green-600 shadow-lg transform translate-y-[-4px]"
            : "bg-green-500 hover:bg-green-600"
        }`}
        aria-label="Connect on WhatsApp"
      >
        <MessageCircle
          className={`w-6 h-6 transition-transform duration-300 ${
            isWhatsAppHovered ? "transform rotate-12" : ""
          }`}
        />
      </button>
    </>
  );
}
