"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

export default function RestaurantCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 3000,
}: // showDots = true,
CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className="py-6 bg-[var(--carousel-background)] flex flex-row items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="relative h-[500px] overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Restaurant image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
