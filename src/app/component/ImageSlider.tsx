'use client'

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel, CarouselApi } from "@/components/ui/carousel"

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
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!autoplay) return
    const intervalId = setInterval(() => api?.scrollNext(), 5000)
    return () => clearInterval(intervalId)
  }, [api, autoplay])

  const handleMouseEnter = useCallback(() => setAutoplay(false), [])
  const handleMouseLeave = useCallback(() => setAutoplay(true), [])

  return (
    <div className="relative w-full h-[60vh]">
      <Carousel 
        setApi={setApi} 
        className="w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="border-none h-full">
                <CardContent className="p-0 relative h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{image.title}</h2>
                    <p className="text-xl">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}