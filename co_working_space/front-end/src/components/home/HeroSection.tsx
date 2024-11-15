"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const images = ["/img1.jpg", "/img3.jpg", "/img5.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30">
        <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
        <p className="mt-4 text-lg">Explore our features and offerings</p>
      </div>
    </section>
  );
};

export default HeroSection;
