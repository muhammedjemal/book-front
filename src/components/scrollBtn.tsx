// // ScrollButton.jsx (or ScrollButton.tsx)
// "use client";

// import React, { useEffect, useRef } from "react";

// const ScrollButton = () => {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const scrollButton = buttonRef.current;

//     if (scrollButton) {
//       scrollButton.addEventListener("click", () => {
//         if (typeof window !== "undefined") {
//           window.scrollBy({
//             top: window.innerHeight,
//             behavior: "smooth",
//           });
//         }
//       });
//     }

//     // Cleanup the event listener on unmount
//     return () => {
//       if (scrollButton) {
//         scrollButton.removeEventListener("click", () => {
//           if (typeof window !== "undefined") {
//             window.scrollBy({
//               top: window.innerHeight,
//               behavior: "smooth",
//             });
//           }
//         });
//       }
//     };
//   }, []); // Run only once after the component mounts

//   return (
//     <div className="relative">
//       <button
//         id="scroll-down-btn"
//         ref={buttonRef}
//         className="
//           absolute
//           bottom-[-20px]
//           left-1/2
//           -translate-x-1/2

//           rounded-full
//           bg-gray-200
//           hover:bg-gray-300
//           focus:outline-none
//           focus:ring-2
//           focus:ring-gray-400
//           p-3
//           flex
//           items-center
//           justify-center
//           animate-bounce
//           "
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="h-6 w-6 text-gray-700"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="m19.5 8.25-7.5 7.5-7.5-7.5"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;
// ScrollButton.jsx (or ScrollButton.tsx)
// "use client";

// import React, { useEffect, useRef } from "react";

// const ScrollButton = () => {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const scrollButton = buttonRef.current;

//     if (scrollButton) {
//       scrollButton.addEventListener("click", () => {
//         if (typeof window !== "undefined") {
//           window.scrollBy({
//             top: window.innerHeight,
//             behavior: "smooth",
//           });
//         }
//       });
//     }

//     // Cleanup the event listener on unmount
//     return () => {
//       if (scrollButton) {
//         scrollButton.removeEventListener("click", () => {
//           if (typeof window !== "undefined") {
//             window.scrollBy({
//               top: window.innerHeight,
//               behavior: "smooth",
//             });
//           }
//         });
//       }
//     };
//   }, []); // Run only once after the component mounts

//   return (
//     <div className="relative w-full flex justify-center">
//       <button
//         id="scroll-down-btn"
//         ref={buttonRef}
//         className="
//          absolute
//         bottom-[-20px]
//           rounded-full
//           bg-gray-200
//           hover:bg-gray-300
//           focus:outline-none
//           focus:ring-2
//           focus:ring-gray-400
//           p-3
//           flex
//           items-center
//           justify-center
//           animate-bounce
//            z-0
//           "
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="h-6 w-6 text-gray-700"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m19.5 8.25-7.5 7.5-7.5-7.5"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ScrollButton;
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollButton = buttonRef.current;

    if (scrollButton) {
      scrollButton.addEventListener("click", () => {
        if (typeof window !== "undefined") {
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      });
    }

    // Cleanup the event listener on unmount
    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", () => {
          if (typeof window !== "undefined") {
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        });
      }
    };
  }, []); // Run only once after the component mounts

  return (
    <div className="relative w-full flex justify-center">
      <motion.button
        id="scroll-down-btn"
        ref={buttonRef}
        className="
         absolute
        bottom-[-20px]
          rounded-full
          bg-gray-200
          hover:bg-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          p-3
          flex
          items-center
          justify-center
          animate-bounce
           z-0
          "
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-gray-700"
          initial={{ opacity: 1, y: 0 }}
          animate={isHovered ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => isHovered && setIsHovered(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default ScrollButton;
