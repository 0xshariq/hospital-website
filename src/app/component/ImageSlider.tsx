"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel, CarouselApi } from "@/components/ui/carousel"

// Define the type for an individual image object
type ImageData = {
  src: string
  alt: string
  caption: string
  title: string
}

const images: ImageData[] = [
  {
    src: "https://lh5.googleusercontent.com/p/AF1QipMOVKA-8qYyluXjLmEiwwtaIxdZXebUo-wYpOjr=w480-h300-k-n-rw",
    alt: "Modern hospital building",
    caption: "State-of-the-art facilities for your care",
    title: "World-Class Facilities"
  },
  {
    src: "https://www.priviahealth.com/wp-content/uploads/2019/09/03_20_17_Why-the-Doctor-Patient-Relationship-is-Important-e1530037975292-1200x800.jpg",
    alt: "Doctor with patient",
    caption: "Compassionate care from experienced professionals",
    title: "Expert Medical Care"
  },
  {
    src: "https://img.freepik.com/premium-photo/advanced-medical-equipment-devices-modern-operating-rooms_956920-25414.jpg",
    alt: "Advanced medical equipment",
    caption: "Cutting-edge technology for accurate diagnostics",
    title: "Advanced Technology"
  }
]

export default function HospitalImageSlider() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined)
  const [current, setCurrent] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [autoplay, setAutoplay] = useState<boolean>(true)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!autoplay) return

    const intervalId = setInterval(() => {
      api?.scrollNext()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api, autoplay])

  const handleMouseEnter = useCallback(() => setAutoplay(false), [])
  const handleMouseLeave = useCallback(() => setAutoplay(true), [])

  return (
    <Carousel 
      setApi={setApi} 
      className="w-full h-[50vh] mb-8" // Increased height to 50vh and added margin-bottom
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {[...images, ...images].map((image: ImageData, index: number) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="p-0 relative h-[50vh]"> {/* Adjusted height to match parent */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                  <h2 className="text-3xl font-bold mb-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{image.title}</h2>
                  <p className="text-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{image.caption}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index: number) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current - 1 ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  )
}