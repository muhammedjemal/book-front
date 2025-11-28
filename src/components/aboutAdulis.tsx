
import React from "react";
import { motion } from "framer-motion";

const AdulisEthiopianArt = () => {
  return (

    <div className=" py-12 px-6 lg:px-8 bg-hero-background">
      <div className="max-w-3xl mx-auto text-center bg-hero-background">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {" "}
          <span className="relative inline-block">
             
            <svg
              viewBox="0 0 286 73" // Use same viewBox as "Marketing" example
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-3" // translate-y-3 to move it down slightly
              style={{
                pointerEvents: "none",
                transform: "scale(1.5)", // Increased scale for much larger size
              }}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1" // Use same path as "Marketing" example
                stroke="#FACC15"
                strokeWidth="5" // Increased strokeWidth for bolder line
              />
            </svg>
          </span>
        </h2>
        <div className="mt-6 text-lg text-gray-700 leading-relaxed">
          <p>
            
          </p>
          <p className="mt-4">.</p>
          <p className="mt-4">
            
          </p>
          <p className="mt-4">
          </p>
          <p className="mt-4">.</p>
          <p className="mt-4">
            
          </p>
          <p className="mt-4">
            
          </p>
          <p className="mt-4">.</p>
        </div>
      </div>
    </div>

  );
};

export default AdulisEthiopianArt;