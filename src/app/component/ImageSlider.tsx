'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// Type definition for the image data
type ImageData = {
  src: string
  alt: string
  caption: string
  title: string
}

// Array of images with their corresponding alt text, caption, and title
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
    caption: "Teeth whitening procedure for a brighter smile.",
    title: "Teeth Whitening"
  },
  {
    src: "/assets/image-slider/image-slider-5.jpeg",
    alt: "Root Canal Plus Crown Treatment",
    caption: "Root canal treatment followed by crown placement.",
    title: "Root Canal Plus Crown Treatment"
  },
  {
    src: "/assets/image-slider/image-slider-6.jpeg",
    alt: "Deep Cleaning of Teeth",
    caption: "Professional deep cleaning for optimal oral health.",
    title: "Deep Cleaning of Teeth"
  },
  {
    src: "/assets/image-slider/image-slider-7.jpeg",
    alt: "Denture",
    caption: "Custom-made dentures for a natural-looking smile.",
    title: "Denture"
  }
]

export default function EnhancedImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0) // Manage the current slide index
  const [isTransitioning, setIsTransitioning] = useState(false) // Track if slide transition is in progress
  const [isPaused, setIsPaused] = useState(false) // Pause the slider on hover

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }, [isTransitioning])

  // Automatically advance slides every 5 seconds unless paused
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (!isPaused) {
      timer = setInterval(nextSlide, 5000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isPaused, nextSlide])

  // Reset the transition state after a brief delay
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Pause slide show on mouse hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  // Resume slide show on mouse leave
  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div 
      className="relative w-full h-[80vh] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-black">
                <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                <p className="text-base">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots to indicate the current slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out ${
              index === currentIndex ? 'bg-black scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
