"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSpecialties = () => {
    setIsSpecialtiesOpen(!isSpecialtiesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        specialtiesRef.current &&
        !specialtiesRef.current.contains(event.target as Node)
      ) {
        setIsSpecialtiesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const specialties = ["Dental", "Cardiology", "Internal Medicine"];

  return (
    <nav
      className={`sticky top-0 z-10 bg-white transition-all duration-300 mt-0 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/435273729_751711263744527_5426922841830167348_n-removebg-preview%20(1)-9iQuAyEsyuOesqzFOXtTedXVoxzAHx.png"
                  alt="Extra Care Medical Center Logo"
                  width={150}
                  height={150}
                  className="mr-2"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-4">
              <div className="flex items-baseline space-x-2">
                <NavLink href="/">Home</NavLink>
                <div
                  className="relative group"
                  ref={specialtiesRef}
                  onMouseEnter={() => setIsSpecialtiesOpen(true)}
                  onMouseLeave={() => setIsSpecialtiesOpen(false)}
                >
                  <button
                    onClick={toggleSpecialties}
                    className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    Specialties
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        isSpecialtiesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-[calc(100vw-2rem)] max-w-7xl bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out ${
                      isSpecialtiesOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    style={{ transform: "translateX(-25%)" }}
                  >
                    <div className="p-6 grid grid-cols-4 gap-x-8 gap-y-4">
                      {specialties.map((specialty, index) => (
                        <Link
                          key={index}
                          href={`/specialties/${specialty
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap"
                        >
                          {specialty}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <NavLink href="/doctors">Our Doctors</NavLink>
                <NavLink href="/appointment">Appointments</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/appointment"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Book your Appointment
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X
                  className="block h-6 w-6 transition-transform duration-300 rotate-90"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="block h-6 w-6 transition-transform duration-300"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <MobileNavLink href="/">Home</MobileNavLink>
            <div className="relative">
              <button
                onClick={toggleSpecialties}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
              >
                Specialties
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isSpecialtiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 space-y-1 transition-all duration-300 ease-in-out ${
                  isSpecialtiesOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {specialties.map((specialty, index) => (
                  <Link
                    key={index}
                    href={`/specialties/${specialty
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {specialty}
                  </Link>
                ))}
              </div>
            </div>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/doctors">Our Doctors</MobileNavLink>
            <MobileNavLink href="/appointments">Appointments</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Link
              href="/appointment"
              className="block w-full text-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-2"
            >
              Book your Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
