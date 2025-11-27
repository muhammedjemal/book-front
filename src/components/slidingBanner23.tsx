// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface BannerItem {
//   title: string;
// }

// const bannerItems: BannerItem[] = [
//   {
//     title: "ALL",
//   },
//   {
//     title: "ITEMS",
//   },
//   {
//     title: "20%",
//   },
//   {
//     title: "OFF",
//   },
//   {
//     title: "CHRISTMAS",
//   },
//   {
//     title: "BIG",
//   },
//   {
//     title: "SALE",
//   },
// ];

// interface SlidingBannerProps {
//   marginTop?: string;
// }

// const SlidingBanner2: React.FC<SlidingBannerProps> = ({ marginTop }) => {
//   const fullList = [...bannerItems, ...bannerItems];
//   const [duration, setDuration] = useState(25);
//   useEffect(() => {
//     const calculateDuration = () => {
//       const screenWidth = window.innerWidth;
//       // Set a base duration.
//       let baseDuration = 25;
//       // If the screen is mobile, we adjust the duration
//       if (screenWidth <= 768) {
//         // Adjust the base duration based on some fraction of the original width.
//         baseDuration = 25 * (768 / screenWidth);
//       }
//       setDuration(baseDuration);
//     };

//     calculateDuration();

//     // Recalculate on resize
//     window.addEventListener("resize", calculateDuration);
//     return () => {
//       window.removeEventListener("resize", calculateDuration);
//     };
//   }, []);

//   return (
//     <div
//       className="w-full overflow-hidden relative sm:my-auto "
//       style={{
//         height: "15vh",
//         marginTop: "3.5rem",
//         padding: "10px 0",
//       }}
//     >
//       <motion.div
//         className="flex h-full absolute top-0 items-center"
//         style={{ width: `${(fullList.length / bannerItems.length) * 100}%` }}
//         animate={{
//           x: [`0%`, `-${100 / bannerItems.length}%`],
//         }}
//         transition={{
//           duration: duration,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         {fullList.map((item, index) => (
//           <div
//             key={index}
//             className="flex-1 flex flex-col justify-center items-center text-orange-500 text-center px-0 h-0"
//             style={{ width: `${100 / bannerItems.length}%` }}
//           >
//             <h2 className="m-0 text-7xl font-semibold">{item.title}</h2>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default SlidingBanner2;
// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface SlidingBannerProps {
//   marginTop?: string;
// }

// const SlidingBanner2: React.FC<SlidingBannerProps> = ({ marginTop }) => {
//   const [duration, setDuration] = useState(25);
//   const [textSpacing, setTextSpacing] = useState(50); // Default spacing between words

//   const bannerText = "ALL ITEMS 20% OFF CHRISTMAS BIG SALE"; // The full banner text

//   useEffect(() => {
//     const calculateSettings = () => {
//       const screenWidth = window.innerWidth;

//       // Adjust animation duration based on screen size
//       const speedFactor = Math.max(0.5, Math.min(2, screenWidth / 768)); // Clamp between 0.5 and 2
//       setDuration(25 * speedFactor);

//       // Dynamically adjust spacing between words
//       const newSpacing = screenWidth <= 768 ? 30 : 50; // Smaller spacing for smaller screens
//       setTextSpacing(newSpacing);
//     };

//     calculateSettings();
//     window.addEventListener("resize", calculateSettings);

//     return () => {
//       window.removeEventListener("resize", calculateSettings);
//     };
//   }, []);

//   // Create the full string with spacing
//   const spacedText = bannerText.split(" ").join(" ".repeat(textSpacing));

//   return (
//     <div
//       className="w-full overflow-hidden relative"
//       style={{
//         height: "15vh",
//         marginTop: marginTop || "3.5rem",
//         padding: "10px 0",
//       }}
//     >
//       <motion.div
//         className="absolute whitespace-nowrap text-orange-500 text-center text-7xl font-semibold"
//         style={{ whiteSpace: "nowrap" }}
//         animate={{
//           x: ["0%", `-${100}%`], // Slide through 100% of the visible area
//         }}
//         transition={{
//           duration: duration,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//       >
//         {spacedText} &nbsp; {spacedText}
//       </motion.div>
//     </div>
//   );
// };

// export default SlidingBanner2;
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
