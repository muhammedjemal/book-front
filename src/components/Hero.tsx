"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./navDesktop";
import MobileNavbar from "./mobilenav";
import { Poppins } from "@next/font/google";
import { Lobster } from "@next/font/google";
import { Lexend } from "@next/font/google";
import FancyButton from "./ctaButton";
import SlidingColorButton from "./ctaButton";
import Link from "next/link";
import ScrollButton from "./scrollBtn";

const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Hero: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const backgroundImages = [
    "/images//banners/6.webp",
    "/images//banners/7.webp",
    "/images//banners/8.webp",
    "/images//banners/9.webp",
    "/images//banners/10.webp",
  ];

  const backgroundTexts = [
    "Discover the beauty of Ethiopin art - a journey through time and culture",
    "Unveiling the mysteries of Ethiopian art",
    "Ethiopian art - vibrant colors and rich history",
    "Experience the charm of Ethiopian art",
    "Exploring the spiritual depths of Ethiopian art",
  ];

  const calculateNextImageIndex = (prevIndex: number) => {
    return (prevIndex + 1) % backgroundImages.length;
  };

  const nextImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(calculateNextImageIndex);
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = backgroundImages[currentImageIndex];
  const currentText = backgroundTexts[currentImageIndex];

  const imageVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const blackTransitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div
        className={`${isHovering ? "cursor-none" : "cursor-auto"}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <motion.div
            className="pointer-events-none fixed"
            style={{
              width: "50px",
              height: "50px",
              // backgroundImage: "url('/images/r.png')",
              backgroundImage: "url('/images/source.gif')",
              backgroundSize: "cover",
              top: cursorPosition.y,
              left: cursorPosition.x,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
        <Header />
        <MobileNavbar prodName={"defaultName"} />
        <section
          id="hero"
          className="relative flex items-center justify-center  px-5 overflow-hidden transition-all duration-300 ease-in-out  scroll-group "
        >
          {/* Black transition overlay */}
          <AnimatePresence>
            {transitioning && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 -z-10 w-full bg-black"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={blackTransitionVariants}
              />
            )}
          </AnimatePresence>
          {/* Background Image */}
          <div className="absolute inset-0 -z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="absolute left-0 top-0  w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${currentImage}')`,
                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
              />
            </AnimatePresence>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center   bg-black bg-opacity-50 -z-10">
              <AnimatePresence mode="wait">
                {" "}
                {/*  Added mode="wait" here */}
                <motion.h2
                  key={currentText}
                  className={`text-white text-3xl  md:text-4xl text-center  px-4 ${poppins.className}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={textVariants}
                >
                  {currentText}
                </motion.h2>
              </AnimatePresence>
            </div>
            <div className="mt-60">
              <Link href="/products">
                <SlidingColorButton text={"Explore Now"} />
              </Link>
            </div>
          </div>
          {/* Hero Content */}
          {/* <div className="text-center relative z-9 mt-40 h-[84vh]"></div> */}
          <div className="text-center relative z-9 mt-40 h-[71vh] md:h-[84vh]"></div>
        </section>
      </div>
      <ScrollButton />
    </>
  );
};

export default Hero;
