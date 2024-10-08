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
    src: "/assets/image-slider-1.jpg",
    alt: "",
    caption: "",
    title: ""
  },
  {
    src: "",
    alt: "",
    caption: "",
    title: ""
  },
  {
    src: "",
    alt: "",
    caption: "",
    title: ""
  }
]

export default function HospitalImageSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null) // Allow api to be null initially
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    const selectHandler = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", selectHandler)
    
    return () => {
      api.off("select", selectHandler) // Clean up event listener on unmount
    }
  }, [api])

  useEffect(() => {
    if (!autoplay || !api) return // Ensure api is available
    const intervalId = setInterval(() => api.scrollNext(), 5000)
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
        role="region" // Accessibility role
        aria-label="Hospital Image Slider" // Accessibility label
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
