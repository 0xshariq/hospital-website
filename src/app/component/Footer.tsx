"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter 
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const specialties = [
  "Dental",
  "Cardiology",
  "Internal Medicine"
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/435273729_751711263744527_5426922841830167348_n-removebg-preview%20(1)-9iQuAyEsyuOesqzFOXtTedXVoxzAHx.png"
            alt="Extra Care Medical Center Logo"
            width={150}
            height={150}
          />
          <p className="text-gray-400 text-sm">
            Committed to providing advanced medical care with a patient-first
            approach. Dedicated to health, wellness, and excellence.
          </p>
        </div>

        {/* Specialties Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Our Specialties</h2>
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

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {["About Us", "Our Doctors", "Privacy Policy", "Terms & Conditions"].map(
              (link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Connect With Us</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.facebook.com/ExtraCare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 mr-2" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/extracare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/extracare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/971585855829"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-2" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://twitter.com/ExtraCareUAE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 mr-2" />
              <span>X</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Extra Care Medical Center. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
