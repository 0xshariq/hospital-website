"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/doctors">Our Doctors</NavLink>
              <NavLink href="/appointments">Appointments</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
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

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/services">Services</MobileNavLink>
          <MobileNavLink href="/doctors">Our Doctors</MobileNavLink>
          <MobileNavLink href="/appointments">Appointments</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </div>
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
      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:bg-blue-50 transform hover:-translate-y-1"
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
      className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out hover:bg-blue-50 transform hover:scale-105"
    >
      {children}
    </Link>
  );
}
