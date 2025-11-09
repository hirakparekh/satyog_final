import React from "react";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div className="relative h-[600px] bg-black overflow-hidden flex items-center justify-center">
      <Image
        src="/hero-image.jpg"
        alt="Satyog Trading Co."
        fill
        className="w-full h-full object-contain"
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default HeroCarousel;