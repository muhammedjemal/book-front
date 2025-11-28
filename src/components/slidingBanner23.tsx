
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SlidingBannerProps {
  marginTop?: string;
}

const SlidingBanner2: React.FC<SlidingBannerProps> = ({ marginTop }) => {
  const [duration, setDuration] = useState(25);
  const [textSpacing, setTextSpacing] = useState(50);

  const bannerText = "Seasonal Sale: 20% Off All Bookings";

  useEffect(() => {
    const calculateSettings = () => {
      const screenWidth = window.innerWidth;

      const baseDuration = 10; // Base duration for mobile
      const speedFactor = Math.max(0.5, Math.min(2, screenWidth / 768)); // Clamp between 0.5 and 2
      setDuration(baseDuration / speedFactor); // Reduce duration for larger screens for smoother movement

      const newSpacing = screenWidth <= 768 ? 30 : 100; // Wider spacing for desktop
      setTextSpacing(newSpacing);
    };

    calculateSettings();
    window.addEventListener("resize", calculateSettings);

    return () => {
      window.removeEventListener("resize", calculateSettings);
    };
  }, []);

  const spacedText = bannerText.split(" ").join(" ".repeat(textSpacing));

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        height: "15vh",
        marginTop: marginTop || "3.5rem",
        padding: "10px 0",
      }}
    >
      <motion.div
        className="absolute whitespace-nowrap text-orange-500 text-center text-7xl font-semibold"
        style={{ whiteSpace: "nowrap" }}
        animate={{
          x: ["0%", `-100%`], // Slide from left to right across the screen
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {spacedText} &nbsp; {spacedText}
      </motion.div>
    </div>
  );
};

export default SlidingBanner2;
