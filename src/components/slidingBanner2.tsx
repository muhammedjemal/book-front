"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BannerItem {
  title: string;
  description: string;
  icon: string;
}

const bannerItems: BannerItem[] = [
  {
    title: "Exclusive 48-Hour Early Access",
    description: "Get your prints before everyone else",
    icon: "/images/early.png",
  },
  {
    title: "15% Lifetime Discount",
    description: "Enjoy a permanent discount on all orders",
    icon: "/images/discount.png",
  },
  {
    title: "VIP Support",
    description: "Priority customer support and assistance",
    icon: "/images/premium.png",
  },
  {
    title: "Collector's Certificate",
    description: "Get exclusive access to exclusive collectors' certificates",
    icon: "/images/achievement.png",
  },
];

interface SlidingBannerProps {
  marginTop?: string;
}

const SlidingBanner2: React.FC<SlidingBannerProps> = ({ marginTop }) => {
  const fullList = [...bannerItems, ...bannerItems];
  const [duration, setDuration] = useState(25);
  useEffect(() => {
    const calculateDuration = () => {
      const screenWidth = window.innerWidth;
      // Set a base duration.
      let baseDuration = 25;
      // If the screen is mobile, we adjust the duration
      if (screenWidth <= 768) {
        // Adjust the base duration based on some fraction of the original width.
        baseDuration = 25 * (768 / screenWidth);
      }
      setDuration(baseDuration);
    };

    calculateDuration();

    // Recalculate on resize
    window.addEventListener("resize", calculateDuration);
    return () => {
      window.removeEventListener("resize", calculateDuration);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden relative sm:my-auto "
      style={{
        height: "25vh",
        marginTop: "3.5rem",
        padding: "10px 0",
      }}
    >
      <motion.div
        className="flex h-full absolute top-0 items-center"
        style={{ width: `${(fullList.length / bannerItems.length) * 100}%` }}
        animate={{
          x: [`0%`, `-${100 / bannerItems.length}%`],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {fullList.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center items-center text-orange-500 text-center px-10 h-full"
            style={{ width: `${100 / bannerItems.length}%` }}
          >
            <div className="flex justify-center mb-4 relative h-10 w-10">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
                style={{
                  filter:
                    "invert(42%) sepia(93%) saturate(703%) hue-rotate(358deg) brightness(95%) contrast(85%)",
                }}
              />
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-base hidden md:block">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingBanner2;
