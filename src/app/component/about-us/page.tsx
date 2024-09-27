"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <nav className="text-sm breadcrumbs">
            <ul>
              <li><Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Home</Link></li>
              <li className="text-gray-400">About Us</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Hospital Pharmacy"
                width={400}
                height={300}
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <div className="flex gap-4">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Hospital Reception"
                  width={200}
                  height={150}
                  className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Hospital Room"
                  width={200}
                  height={150}
                  className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Welcome to Extra Care Medical Center, where we provide affordable and quality healthcare for the people of UAE and beyond. We are proud to be accredited by JCI (Joint Commission International), which showcases our commitment to improving the health of our patients, working with them as partners in their care.
              </p>
              <p className="text-gray-700 mb-4">
                We have created a culture that values communication and collaboration between our patients and providers to ensure that every patient receives high-quality care. Our mission is to provide quality care at an affordable price to get the medical treatment you need when you need it.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to continuous improvement in all areas of our business, including customer experience and satisfaction, and clinical excellence. Our state-of-the-art facilities offer all the latest medical equipment and technology to our patients, ensuring that they get the best possible care.
              </p>
              <p className="text-gray-700">
                We have a team of experienced doctors and nurses dedicated to providing you with personalized and comprehensive treatment. Our hospitals offer a wide range of services, including preventive care, diagnostic procedures, and surgeries, while building solid relationships with patients by providing individualized attention to each patient&apos;s needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Vision</h3>
            <p className="text-gray-700">To continuously exceed the global standards of excellence in healthcare.</p>
          </div>
          <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Mission</h3>
            <p className="text-gray-700">To preserve and restore health and well-being through extensive empowerment and technology.</p>
          </div>
        </section>
      </main>
    </div>
  )
}