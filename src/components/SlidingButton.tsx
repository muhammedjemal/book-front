"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children?: React.ReactNode;
  className?: string;
}
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`relative dark:bg-white dark:text-black bg-orange-500 text-white flex justify-center group/animated-button ${className}`}
    >
      <span className="group-hover/animated-button:translate-x-40 text-center transition duration-500">
        {children}
      </span>
      <motion.div className="-translate-x-40 group-hover/animated-button:translate-x-0 flex items-center justify-center absolute bg-green-800 inset-0 transition duration-500  text-white z-20 ">
        CLAIM NOW!
      </motion.div>
    </button>
  );
};
export default AnimatedButton;
