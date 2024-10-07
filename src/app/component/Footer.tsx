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
    <>
      <footer className="bg-blue-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/435273729_751711263744527_5426922841830167348_n-removebg-preview%20(1)-9iQuAyEsyuOesqzFOXtTedXVoxzAHx.png"
              alt="Extra Care Medical Center Logo"
              width={150}
              height={150}
            />
            <p className="text-black text-sm">
              Committed to providing advanced medical care with a patient-first
              approach. Dedicated to health, wellness, and excellence.
            </p>
          </div>

          {/* Specialties Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Specialties</h2> {/* Increased font size */}
            <ul className="space-y-2">
              {specialties.map((specialty, index) => (
                <li key={index}>
                  <Link
                    href={`/specialties/${specialty
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-black transition-colors duration-200 ease-in-out">
                    {specialty}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Quick Links</h2> {/* Increased font size */}
            <ul className="space-y-2">
              {["About Us", "Doctors", "Privacy Policy", "Terms & Conditions"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-black transition-colors duration-200 ease-in-out">
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Connect With Us</h2> {/* Increased font size */}
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.facebook.com/people/Extra-Care-Medical-Center/61551124427651/?mibextid=qi2Omg&rdid=O5vrYZVcPf6SZs0R&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FhzdkPWRCAXBqRh4h%2F%3Fmibextid%3Dqi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-[#4267B2] transition-colors duration-200 ease-in-out"> {/* Facebook blue color */}
                <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6 mr-2" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/extracareuae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-[#E1306C] transition-colors duration-200 ease-in-out"> {/* Instagram pink color */}
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-2" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/extracareuae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-[#0A66C2] transition-colors duration-200 ease-in-out"> {/* LinkedIn blue color */}
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/ExtraCareUAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-[#1DA1F2] transition-colors duration-200 ease-in-out"> {/* X/Twitter blue color */}
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 mr-2" />
                <span>X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-black text-sm">
            © {currentYear} Extra Care Medical Center. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Icon with Text */}
      <a
        href="https://wa.me/971585855829"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex items-center bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 animate-pulse" />
        <span className="ml-2 text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxWidth: "200px", textOverflow: "ellipsis" }}>
          Connect Us with WhatsApp
        </span>
      </a>
    </>
  );
}
  