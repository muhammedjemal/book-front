// import React from 'react';

// const AdulisEthiopianArt = () => {
//   return (
//     <div className="bg-white py-12 px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           Adulis Ethiopian Art
//         </h2>
//         <div className="mt-6 text-lg text-gray-700 leading-relaxed">
//           <p>
//             For too long, Ethiopian art has remained a hidden gem, overshadowed by Western narratives, overlooked by collectors unfamiliar with its depth.
//           </p>
//           <p className="mt-4">
//             Adulis Ethiopian Art is changing that.
//           </p>
//           <p className="mt-4">
//             With a mission to discover, curate, and elevate Ethiopia’s best artists, Adulis Ethiopian Art is bridging the gap between Ethiopia’s rich artistic history and the world’s leading galleries, museums, and collectors.
//           </p>
//           <p className="mt-4">
//             Through exhibitions, curated collections, and global partnerships, Adulis Ethiopian Art is ensuring that Ethiopian artists receive the recognition, respect, and opportunities they deserve.
//           </p>
//           <p className="mt-4">
//             And this is just the beginning.
//           </p>
//           <p className="mt-4">
//             As part of its mission, this painting—the Mother of Africa—will soon be showcased in international galleries and exhibitions, presented alongside other masterpieces of Ethiopian art as part of an ongoing global tour.
//           </p>
//           <p className="mt-4">
//             For those who invest in one of the 100 limited prints, it won’t just be a piece of art in their collection.
//           </p>
//           <p className="mt-4">
//             It will be a piece of history.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdulisEthiopianArt;
// import React from "react";
// import { motion } from "framer-motion";

// export const AdulisHighlight = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-8 md:px-24 lg:px-32">
//       <div className="container mx-auto">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight text-center mb-6">
//           Exploring the Depths of{" "}
//           <span className="relative">
//             Adulis Ethiopian Art
//             <svg
//               viewBox="0 0 400 80"
//               fill="none"
//               className="absolute -left-4 -right-4 -top-2 bottom-0 translate-y-1"
//             >
//               <motion.path
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeInOut",
//                 }}
//                 d="M20 40 C 40 10, 100 10, 180 40, 260 70, 340 70, 380 40"  // Adjusted the path for a smoother, wider curve
//                 stroke="#FF6B6B"  // A vibrant color for the highlight
//                 strokeWidth="5"
//               />
//             </svg>
//           </span>
//         </h1>
//         <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
//           Discover the rich history and cultural significance of Adulis Ethiopian art,
//           a hidden gem in the world of artistic expression. From ancient symbols to
//           modern interpretations, delve into the captivating stories woven into each piece.
//         </p>
//         {/* Add more content sections here: paragraphs, images, etc. */}
//         <section className="mt-12">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
//             Key Characteristics
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 max-w-xl mx-auto">
//             <li>Intricate detailing and symbolism</li>
//             <li>Use of natural pigments and materials</li>
//             <li>Stories that convey cultural heritage and traditions</li>
//             <li>Influence of geography and beliefs</li>
//           </ul>
//         </section>

//         {/* Example image (replace with your own) */}
//         <div className="mt-8 flex justify-center">
//           <img
//             src="https://via.placeholder.com/600x400" // Replace with your image URL
//             alt="Example of Adulis Ethiopian Art"
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// import React from "react";
// import { motion } from "framer-motion";

// const AdulisEthiopianArt = () => {
//   return (
//     <div className="bg-white py-12 px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
//           <span className="relative z-10">Adulis Ethiopian Art</span>
//           <svg
//             viewBox="0 0 600 80" // Adjust width as needed for text length
//             fill="none"
//             className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 w-full h-full"
//             style={{ pointerEvents: 'none' }} // Prevent SVG from interfering with text selection
//           >
//             <motion.path
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{
//                 duration: 1.5,
//                 ease: "easeInOut",
//               }}
//               d="M20 40 C 40 10, 100 10, 180 40, 260 70, 340 70, 420 40, 500 10, 580 10, 600 40"  // Modified path for handwritten-like loop
//               stroke="#FACC15"
//               strokeWidth="5"
//             />
//           </svg>
//         </h2>
//         <div className="mt-6 text-lg text-gray-700 leading-relaxed">
//           <p>
//             For too long, Ethiopian art has remained a hidden gem, overshadowed by
//             Western narratives, overlooked by collectors unfamiliar with its
//             depth.
//           </p>
//           <p className="mt-4">Adulis Ethiopian Art is changing that.</p>
//           <p className="mt-4">
//             With a mission to discover, curate, and elevate Ethiopia’s best
//             artists, Adulis Ethiopian Art is bridging the gap between
//             Ethiopia’s rich artistic history and the world’s leading galleries,
//             museums, and collectors.
//           </p>
//           <p className="mt-4">
//             Through exhibitions, curated collections, and global partnerships,
//             Adulis Ethiopian Art is ensuring that Ethiopian artists receive the
//             recognition, respect, and opportunities they deserve.
//           </p>
//           <p className="mt-4">And this is just the beginning.</p>
//           <p className="mt-4">
//             As part of its mission, this painting—the Mother of Africa—will soon
//             be showcased in international galleries and exhibitions, presented
//             alongside other masterpieces of Ethiopian art as part of an ongoing
//             global tour.
//           </p>
//           <p className="mt-4">
//             For those who invest in one of the 100 limited prints, it won’t just
//             be a piece of art in their collection.
//           </p>
//           <p className="mt-4">It will be a piece of history.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdulisEthiopianArt;
// import React from "react";
// import { motion } from "framer-motion";

// const AdulisEthiopianArt = () => {
//   return (
//     <div className="bg-white py-12 px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl relative inline-block">
//           <span className="relative z-10">Adulis Ethiopian Art</span>
//           <svg
//             viewBox="0 0 450 80"  // Adjusted viewBox for a more circular look around the text
//             fill="none"
//             className="absolute -left-4 -right-4 -top-2 bottom-0 translate-y-1 w-full h-full"
//             style={{ pointerEvents: 'none' }}
//           >
//             <motion.path
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{
//                 duration: 1.5,
//                 ease: "easeInOut",
//               }}
//               d="M225 10 C 320 10, 440 70, 225 70, 10 70, 20 10, 225 10"
//               stroke="#FACC15"
//               strokeWidth="4"
//             />
//           </svg>
//         </h2>
//         <div className="mt-6 text-lg text-gray-700 leading-relaxed">
//           <p>
//             For too long, Ethiopian art has remained a hidden gem, overshadowed by
//             Western narratives, overlooked by collectors unfamiliar with its
//             depth.
//           </p>
//           <p className="mt-4">Adulis Ethiopian Art is changing that.</p>
//           <p className="mt-4">
//             With a mission to discover, curate, and elevate Ethiopia’s best
//             artists, Adulis Ethiopian Art is bridging the gap between
//             Ethiopia’s rich artistic history and the world’s leading galleries,
//             museums, and collectors.
//           </p>
//           <p className="mt-4">
//             Through exhibitions, curated collections, and global partnerships,
//             Adulis Ethiopian Art is ensuring that Ethiopian artists receive the
//             recognition, respect, and opportunities they deserve.
//           </p>
//           <p className="mt-4">And this is just the beginning.</p>
//           <p className="mt-4">
//             As part of its mission, this painting—the Mother of Africa—will soon
//             be showcased in international galleries and exhibitions, presented
//             alongside other masterpieces of Ethiopian art as part of an ongoing
//             global tour.
//           </p>
//           <p className="mt-4">
//             For those who invest in one of the 100 limited prints, it won’t just
//             be a piece of art in their collection.
//           </p>
//           <p className="mt-4">It will be a piece of history.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdulisEthiopianArt;
import React from "react";
import { motion } from "framer-motion";

const AdulisEthiopianArt = () => {
  return (

    <div className=" py-12 px-6 lg:px-8 bg-hero-background">
      <div className="max-w-3xl mx-auto text-center bg-hero-background">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Adulis Ethiopian{" "}
          <span className="relative inline-block">
            Art
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
            For too long, Ethiopian art has remained a hidden gem, overshadowed by
            Western narratives, overlooked by collectors unfamiliar with its
            depth.
          </p>
          <p className="mt-4">Adulis Ethiopian Art is changing that.</p>
          <p className="mt-4">
            With a mission to discover, curate, and elevate Ethiopia’s best
            artists, Adulis Ethiopian Art is bridging the gap between
            Ethiopia’s rich artistic history and the world’s leading galleries,
            museums, and collectors.
          </p>
          <p className="mt-4">
            Through exhibitions, curated collections, and global partnerships,
            Adulis Ethiopian Art is ensuring that Ethiopian artists receive the
            recognition, respect, and opportunities they deserve.
          </p>
          <p className="mt-4">And this is just the beginning.</p>
          <p className="mt-4">
            As part of its mission, this painting—the Mother of Africa—will soon
            be showcased in international galleries and exhibitions, presented
            alongside other masterpieces of Ethiopian art as part of an ongoing
            global tour.
          </p>
          <p className="mt-4">
            For those who invest in one of the 100 limited prints, it won’t just
            be a piece of art in their collection.
          </p>
          <p className="mt-4">It will be a piece of history.</p>
        </div>
      </div>
    </div>

  );
};

export default AdulisEthiopianArt;