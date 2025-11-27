"use client";

import { Carousel } from "./ui/carousel";

  export   default function CarouselDemo() {
  const slideData = [
    {
      title: "Ethiopia as the Mother of Africa",
      button: "Explore",
      src: "/images/2/1.webp",
    },
    {
      title: "The Journey for Water",
      button: "Explore",
      src: "/images/3/1.webp",
    },
    {
      title: "Sacred Procession",
      button: "Explore",
      src: "/images/1/1.webp",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-20 pt-5">
       <Carousel slides={slideData} />
    </div>
  );
}
