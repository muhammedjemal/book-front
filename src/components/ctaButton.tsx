"use client";

import { motion } from "framer-motion";
import React from "react";
import "tailwindcss/tailwind.css";

const ModernButton = ({ text, size = "medium" }) => {
  return (
    <motion.button
      className={`relative px-6 py-3 rounded-full text-white font-poppins cursor-none
                  border-2 border-transparent bg-transparent
                  shadow-[0px_4px_10px_rgba(255,255,255,0.3)]
                   transition-shadow duration-300 overflow-hidden
                  ${size === "large" ? "text-lg" : "text-sm"}`}
      whileHover={{
        scale: 1.1, // Grow effect
        boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.6)", // Lump-like shadow
        transition: { duration: 0.3 },
      }}
    >
      {/* Sliding background effect */}
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r
                   from-transparent via-white to-transparent opacity-50"
        style={{
          backgroundSize: "200% 100%",
          animation: "sliding-bg 5s linear infinite",
        }}
      ></span>
      {/* Button Text */}
      <span className="relative ">{text}</span>

      {/* Inline CSS for keyframes */}
      <style jsx>{`
        @keyframes sliding-bg {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </motion.button>
  );
};

export default ModernButton;
