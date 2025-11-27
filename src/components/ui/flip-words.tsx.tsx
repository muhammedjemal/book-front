"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-5 inline-block relative text-left text-orange-500 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const FlipWords = ({
//   words,
//   duration = 3000,
//   className,
// }: {
//   words: string[];
//   duration?: number;
//   className?: string;
// }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <div className="relative">
//       {" "}
//       {/* container to hold absolute elements */}
//       <AnimatePresence
//         onExitComplete={() => {
//           setIsAnimating(false);
//         }}
//       >
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//           }}
//           exit={{
//             opacity: 0,
//             position: "absolute", // keep it same for exit
//           }}
//           className={cn(
//             "z-5 inline-block relative text-left text-orange-500 dark:text-neutral-100 px-2",
//             className
//           )}
//           key={currentWord}
//           style={{
//             position: "absolute",
//             top: 0, // ensures it does not get pushed out
//             left: 0, // ensures it does not get pushed out
//           }}
//         >
//           {currentWord.split(" ").map((word, wordIndex) => (
//             <motion.span
//               key={word + wordIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 delay: wordIndex * 0.3,
//                 duration: 0.3,
//               }}
//               className="inline-block whitespace-nowrap"
//             >
//               {word.split("").map((letter, letterIndex) => (
//                 <motion.span
//                   key={word + letterIndex}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     delay: wordIndex * 0.3 + letterIndex * 0.05,
//                     duration: 0.2,
//                   }}
//                   className="inline-block"
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//               <span className="inline-block"> </span>
//             </motion.span>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };
// "use client";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const FlipWords = ({
//   words,
//   duration = 3000,
//   className,
// }: {
//   words: string[];
//   duration?: number;
//   className?: string;
// }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [containerHeight, setContainerHeight] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   useEffect(() => {
//     const calculateSize = () => {
//       if (containerRef.current) {
//         let maxHeight = 0;
//         let maxWidth = 0;
//         for (const word of words) {
//           const tempContainer = document.createElement("div");
//           tempContainer.style.display = "inline-block";
//           tempContainer.style.whiteSpace = "nowrap";
//           tempContainer.style.visibility = "hidden";
//           tempContainer.innerHTML = word;
//           document.body.appendChild(tempContainer);
//           maxHeight = Math.max(maxHeight, tempContainer.offsetHeight);
//           maxWidth = Math.max(maxWidth, tempContainer.offsetWidth);
//           document.body.removeChild(tempContainer);
//         }
//         setContainerHeight(maxHeight);
//         setContainerWidth(maxWidth);
//       }
//     };

//     calculateSize(); // initial calculation
//     window.addEventListener("resize", calculateSize); // recalculate when size changes

//     return () => {
//       window.removeEventListener("resize", calculateSize);
//     };
//   }, [words]);

//   return (
//     <div
//       className="relative"
//       style={{
//         height: `${containerHeight}px`,
//         width: `${containerWidth}px`,
//       }}
//       ref={containerRef}
//     >
//       <AnimatePresence
//         onExitComplete={() => {
//           setIsAnimating(false);
//         }}
//       >
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 10,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//           }}
//           exit={{
//             opacity: 0,
//             y: -40,
//             x: 40,
//             filter: "blur(8px)",
//             scale: 2,
//             position: "absolute",
//           }}
//           className={cn(
//             "z-5 inline-block relative text-left text-orange-500 dark:text-neutral-100 px-2",
//             className
//           )}
//           key={currentWord}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         >
//           {currentWord.split(" ").map((word, wordIndex) => (
//             <motion.span
//               key={word + wordIndex}
//               initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//               transition={{
//                 delay: wordIndex * 0.3,
//                 duration: 0.3,
//               }}
//               className=" whitespace-nowrap"
//             >
//               {word.split("").map((letter, letterIndex) => (
//                 <motion.span
//                   key={word + letterIndex}
//                   initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                   transition={{
//                     delay: wordIndex * 0.3 + letterIndex * 0.05,
//                     duration: 0.2,
//                   }}
//                   className=""
//                 >
//                   {letter}
//                 </motion.span>
//               ))}
//               <span className=""> </span>
//             </motion.span>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };
