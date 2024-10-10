'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type ImageData = {
  src: string
  alt: string
  caption: string
  title: string
}

const images: ImageData[] = [
  {
    src: "/assets/image-slider/image-slider-1.jpg",
    alt: "Vitamin B Test",
    caption: "Vitamin B Test is a test to measure the levels of vitamin B in the body.",
    title: "Vitamin B Test"
  },
  {
    src: "/assets/image-slider/image-slider-2.png",
    alt: "Breast Cancer Test",
    caption: "Breast Cancer Test is a test to detect the presence of breast cancer.",
    title: "Breast Cancer Test"
  },
  {
    src: "/assets/image-slider/image-slider-3.png",
    alt: "Cancer Laboratory Tests",
    caption: "Cancer Laboratory Tests are a series of tests to detect the presence of cancer.",
    title: "Cancer Laboratory Tests"
  },
  {
    src: "/assets/image-slider/image-slider-4.jpeg",
    alt: "Teeth Whitening",
    caption: "Teeth",
    title: "Teeth Whitening"
  },
  {
    src: "/assets/image-slider/image-slider-5.jpeg",
    alt: "Root Canal Plus Crown Treatment",
    caption: "Root ",
    title: "Root Canal Plus Crown Treatment"
  },
  {
    src: "/assets/image-slider/image-slider-6.jpeg",
    alt: "Deep Cleaning of Teeth",
    caption: "",
    title: "Deep Cleaning of Teeth"
  },
  {
    src: "/assets/image-slider/image-slider-7.jpeg",
    alt: "Denture",
    caption: "",
    title: "Denture"
  }
]

export default function EnhancedImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <div className="relative w-full h-[66.67vh] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === currentIndex}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 transform transition-transform duration-500 ease-in-out translate-y-0 hover:translate-y-1">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}