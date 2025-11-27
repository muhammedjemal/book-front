// // Import required libraries
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SlidingBanner = ({ texts }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? texts.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full bg-pink-500 text-white h-12 flex items-center overflow-hidden relative">
//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
//       >
//         &larr;
//       </button>

//       {/* Text Slider */}
//       <div className="w-full text-center h-full flex items-center justify-center relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute w-full"
//           >
//             {texts[currentIndex]}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4 bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default SlidingBanner;
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SlidingBanner = ({ texts }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? texts.length - 1 : prevIndex - 1
//     );
//   };

//   return (

//     <>
//     <div className="fixed top-0 left-0 w-full bg-orange-500 text-white h-7 flex items-center overflow-hidden z-10">
//       {/* Left Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute left-4 p-2 text-slate-500 rounded-full hover:bg-orange-600 transition"
//       >
//         &larr;
//       </button>

//       {/* Text Slider */}
//       <div className="w-full text-center h-full flex items-center justify-center relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute w-full"
//           >
//             {texts[currentIndex]}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4  p-2 rounded-full hover:bg-orange-600 bg-orange-500  transition"
//       >
//         &rarr;
//       </button>
//     </div>  
//     <div> put here the h-5 banner so that totally it will be 12</div>
//     </>
//   );
// };

// export default SlidingBanner;

// Usage Example in a Page
// import SlidingBanner from "../components/SlidingBanner";
// export default function HomePage() {
//   return (
//     <>
//       <SlidingBanner texts={["Welcome to our site!", "Check out our deals!", "Enjoy free shipping!"]} />
//       <main>...</main>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lexend, Lobster, Poppins } from "@next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});


const AnimatedBanner = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className={`fixed   ${pathname.startsWith("/prem") ? "top-0": "top-6"} left-0 w-full ${pathname.startsWith("/prem") && "h-48"} h-7 overflow-hidden z-10 `}> {/* Fixed positioning */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-pink-500 to-purple-500 animate-gradient"></div> {/* Added via-green-500 */}
      <div className="relative z-10 flex items-center justify-center h-full ">
        <Link href={"/virtual-tour-special"} >
        <motion.h2
          className={`text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer ${poppins.className}`}
          style={{
            fontSize: 'calc(10px + 0.5vw)', // Adjust base size and scaling factor as needed
            lineHeight: '1', //Remove space from the bottom of the font
            height: '100%',   // Use the full height of the parent
            display: 'flex', // Use flexbox for vertical centering
            alignItems: 'center',//Vertically center content
          }}
        >
          New special apartama coming! Click here to view
        </motion.h2>
        </Link>

      </div>
    </div>
  );
};

const SlidingBanner = ({ texts }) => {
  const pathname = usePathname()

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className={ `fixed top-0 left-0 w-full bg-orange-500 text-white  flex items-center overflow-hidden z-10 ${pathname.startsWith("/prem") ? "h-0": "h-6"}`}>
        {/* Left Arrow */}
        <button
          onClick={handlePrev} // Corrected to handlePrev
          className="absolute left-4 p-2 text-slate-500 rounded-full hover:bg-orange-600 transition"
        >
          ←
        </button>

        {/* Text Slider */}
        <div className="w-full text-center h-full flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              {texts[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4  p-2 rounded-full hover:bg-orange-600 bg-orange-500  transition"
        >
          →
        </button>
      </div>

      {/* Removed margin top, as it is fixed it's relative to the top 7 rem  */}
      <AnimatedBanner />
    </>
  );
};

// Don't forget to add your global CSS for animation!
export default SlidingBanner;