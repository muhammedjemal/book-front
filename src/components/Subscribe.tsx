// "use client";
// import React from "react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "@/components/ui/animated-modal";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export function AnimatedModalDemo() {
//   const images = [
//     "/images/artist1/artist1.webp",
//     "/images/1/1.jpg",
//     "/images/artist2/artist2.webp",
//     "/images/2/1.jpg",
//     "/images/artist3/artist3.webp",
//     "/images/3/1.jpg",
//   ];
//   return (
//     <div className="py-40  flex items-center justify-center">
//       <Modal>
//         <ModalTrigger className=" dark:bg-white dark:text-black bg-orange-500 text-white flex justify-center group/modal-btn">
//           <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//             Claim Discounts
//           </span>
//           <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute bg-green-800 inset-0 transition duration-500  text-white z-20 ">
//             CLAIM NOW!
//           </div>
//         </ModalTrigger>
//         {/* @ts-ignore */}
//         <ModalBody>
//           {/* @ts-ignore */}
//           <ModalContent>
//             <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//               Own a Piece of
//               <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
//                 Ethiopian
//               </span>{" "}
//               Art History (only a few left)
//             </h4>
//             <div className="flex justify-center items-center">
//               {images.map((image, idx) => (
//                 <motion.div
//                   key={"images" + idx}
//                   style={{
//                     rotate: Math.random() * 20 - 10,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   whileTap={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//                 >
//                   <Image
//                     src={image}
//                     alt="bali images"
//                     width="500"
//                     height="500"
//                     className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//             <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
//               <div className="flex  items-center justify-center">
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
//                   Own a numbered, limited edition Artworks from Ethiopia{"'"}s
//                   most talented and handpicked artists. Each print is numbered
//                   and is one of only 100, making your selection truly unique.
//                   Subscribe now for 20% off Christmas discount, receive a
//                   special welcome gift and be one of 100 owners of these unique
//                   works.
//                 </span>
//               </div>
//               <div className="relative w-full max-w-sm">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full px-4 py-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
//                   style={{
//                     // @ts-ignore
//                     "&::placeholder": { color: "#a0aec0" },
//                   }}
//                 />
//                 <motion.span
//                   className="absolute top-1/2 right-3 -translate-y-1/2  pointer-events-none"
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="w-5 h-5 text-gray-400"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V9m0 9v3"
//                     />
//                   </svg>
//                 </motion.span>
//               </div>
//             </div>
//           </ModalContent>
//           <ModalFooter className="gap-4">
//             <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
//               Claim Now
//             </button>
//           </ModalFooter>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// const PlaneIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
//     </svg>
//   );
// };

// const VacationIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
//       <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
//       <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
//       <path d="M15 9l-3 5.196" />
//       <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
//     </svg>
//   );
// };

// const ElevatorIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
//       <path d="M10 10l2 -2l2 2" />
//       <path d="M10 14l2 2l2 -2" />
//     </svg>
//   );
// };

// const FoodIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
//     </svg>
//   );
// };

// const MicIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
//       <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
//     </svg>
//   );
// };

// const ParachuteIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M22 12a10 10 0 1 0 -20 0" />
//       <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
//       <path d="M2 12l10 10l-3.5 -10" />
//       <path d="M15.5 12l-3.5 10l10 -10" />
//     </svg>
//   );
// };
"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  const gifLeft = "/images/flower.gif"; // Replace with your actual left GIF
  const gifRight = "/images/flower.gif"; // Replace with your actual right GIF

  return (
    <div className="py-40 flex items-center justify-center">
      <div className="relative w-full flex justify-center md:justify-between items-center">
        {/* Left GIF (desktop only) */}
        <div className="hidden md:block absolute left-0 top-0 overflow-hidden z-10">
          <Image src={gifLeft} alt="Left Banner GIF" width={606} height={185} />
        </div>

        {/* Right GIF (desktop only) */}
        <div className="hidden md:block absolute right-0 top-0 overflow-hidden z-10">
          <Image
            src={gifRight}
            alt="Right Banner GIF"
            width={606}
            height={185}
          />
        </div>
        {/* Button (always visible, will have adjusted position) */}
        <div className="absolute md:relative top-0 w-full z-20  flex justify-center ">
          <Modal>
            <ModalTrigger className="relative dark:bg-white dark:text-black bg-orange-500 text-white flex justify-center group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Claim Discounts
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute bg-green-800 inset-0 transition duration-500  text-white z-20 ">
                CLAIM NOW!
              </div>
            </ModalTrigger>
            {/* @ts-ignore */}

            <ModalBody>
              {/* @ts-ignore */}
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Own a Piece of
                  <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    Ethiopian
                  </span>{" "}
                  Art History (only a few left)
                </h4>
                <div className="flex justify-center items-center">
                  {/* Your Modal Image Stuff */}
                </div>
                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                  <div className="flex  items-center justify-center">
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
                      Own a numbered, limited edition Artworks from Ethiopia
                      {"'"}s most talented and handpicked artists. Each print is
                      numbered and is one of only 100, making your selection
                      truly unique. Subscribe now for 20% off Christmas
                      discount, receive a special welcome gift and be one of 100
                      owners of these unique works.
                    </span>
                  </div>
                  <div className="relative w-full max-w-sm">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
                      style={{
                        // @ts-ignore
                        "&::placeholder": { color: "#a0aec0" },
                      }}
                    />
                    <motion.span
                      className="absolute top-1/2 right-3 -translate-y-1/2  pointer-events-none"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V9m0 9v3"
                        />
                      </svg>
                    </motion.span>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                  Claim Now
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
        {/* Bottom Image Mobile Only */}
        <div className="md:hidden relative w-full top-0 flex justify-center z-10">
          <Image
            src="/images/top.gif"
            alt="Mobile banner"
            width={800}
            height={302}
            className="relative"
          />
        </div>
      </div>
    </div>
  );
}

const PlaneIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
// "use client";
// import React from "react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "@/components/ui/animated-modal";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export function AnimatedModalDemo() {
//   const mobileBanner = "/images/top.gif"; // Replace with your actual mobile banner GIF

//   return (
//     <div className="py-40 flex items-center justify-center">
//       <div className="relative w-full flex justify-center">
//         {" "}
//         {/* Center content */}
//         {/* Button (always visible) */}
//         <div className="absolute top-0 z-20 w-full flex justify-center">
//           <Modal>
//             <ModalTrigger className="relative dark:bg-white dark:text-black bg-orange-500 text-white flex justify-center group/modal-btn">
//               <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//                 Claim Discounts
//               </span>
//               <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute bg-green-800 inset-0 transition duration-500  text-white z-20 ">
//                 CLAIM NOW!
//               </div>
//             </ModalTrigger>
//             <ModalBody>
//               {/* @ts-ignore */}
//               <ModalContent>
//                 <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//                   Own a Piece of
//                   <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
//                     Ethiopian
//                   </span>{" "}
//                   Art History (only a few left)
//                 </h4>
//                 <div className="flex justify-center items-center">
//                   {/* Your Modal Image Stuff */}
//                 </div>
//                 <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
//                   <div className="flex  items-center justify-center">
//                     <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
//                       Own a numbered, limited edition Artworks from Ethiopia
//                       {"'"}s most talented and handpicked artists. Each print is
//                       numbered and is one of only 100, making your selection
//                       truly unique. Subscribe now for 20% off Christmas
//                       discount, receive a special welcome gift and be one of 100
//                       owners of these unique works.
//                     </span>
//                   </div>
//                   <div className="relative w-full max-w-sm">
//                     <input
//                       type="email"
//                       placeholder="Your email"
//                       className="w-full px-4 py-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
//                       style={{
//                         // @ts-ignore
//                         "&::placeholder": { color: "#a0aec0" },
//                       }}
//                     />
//                     <motion.span
//                       className="absolute top-1/2 right-3 -translate-y-1/2  pointer-events-none"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         delay: 0.2,
//                         duration: 0.2,
//                         ease: "easeOut",
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         className="w-5 h-5 text-gray-400"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V9m0 9v3"
//                         />
//                       </svg>
//                     </motion.span>
//                   </div>
//                 </div>
//               </ModalContent>
//               <ModalFooter className="gap-4">
//                 <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
//                   Claim Now
//                 </button>
//               </ModalFooter>
//             </ModalBody>
//           </Modal>
//         </div>
//         {/* Bottom Image (displayed on both mobile and desktop, centered) */}
//         <div className="relative w-full top-0 flex justify-center z-10">
//           <Image
//             src={mobileBanner}
//             alt="Mobile banner"
//             width={800}
//             height={302}
//             className="relative"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlaneIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
//     </svg>
//   );
// };

// const VacationIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
//       <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
//       <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
//       <path d="M15 9l-3 5.196" />
//       <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
//     </svg>
//   );
// };

// const ElevatorIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
//       <path d="M10 10l2 -2l2 2" />
//       <path d="M10 14l2 2l2 -2" />
//     </svg>
//   );
// };

// const FoodIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
//     </svg>
//   );
// };

// const MicIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
//       <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
//     </svg>
//   );
// };

// const ParachuteIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M22 12a10 10 0 1 0 -20 0" />
//       <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
//       <path d="M2 12l10 10l-3.5 -10" />
//       <path d="M15.5 12l-3.5 10l10 -10" />
//     </svg>
//   );
// };
// "use client";
// import React from "react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "@/components/ui/animated-modal";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export function AnimatedModalDemo() {
//   const mobileBanner = "/images/top.gif";
//   const images = [
//     "/images/artist1/artist1.webp",
//     "/images/1/1.jpg",
//     "/images/artist2/artist2.webp",
//     "/images/2/1.jpg",
//     "/images/artist3/artist3.webp",
//     "/images/3/1.jpg",
//   ];
//   return (
//     <div className="py-40 flex items-center justify-center">
//       <div className="relative w-full flex justify-center">
//         {/* Button (always visible) */}
//         <div className="absolute top-0 z-20 w-full flex justify-center">
//           <Modal>
//             <ModalTrigger className="relative dark:bg-white dark:text-black bg-orange-500 text-white flex justify-center group/modal-btn">
//               <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//                 Claim Discounts
//               </span>
//               <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute bg-green-800 inset-0 transition duration-500  text-white z-20 ">
//                 CLAIM NOW!
//               </div>
//             </ModalTrigger>
//             <ModalBody>
//               {/* @ts-ignore */}
//               <ModalContent>
//                 <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//                   Own a Piece of
//                   <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
//                     Ethiopian
//                   </span>{" "}
//                   Art History (only a few left)
//                 </h4>
//                 <div className="flex justify-center items-center">
//                   {images.map((image, idx) => (
//                     <motion.div
//                       key={"images" + idx}
//                       style={{
//                         rotate: Math.random() * 20 - 10,
//                       }}
//                       whileHover={{
//                         scale: 1.1,
//                         rotate: 0,
//                         zIndex: 100,
//                       }}
//                       whileTap={{
//                         scale: 1.1,
//                         rotate: 0,
//                         zIndex: 100,
//                       }}
//                       className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//                     >
//                       <Image
//                         src={image}
//                         alt="bali images"
//                         width="500"
//                         height="500"
//                         className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//                 <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
//                   <div className="flex  items-center justify-center">
//                     <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
//                       Own a numbered, limited edition Artworks from Ethiopia
//                       {"'"}s most talented and handpicked artists. Each print is
//                       numbered and is one of only 100, making your selection
//                       truly unique. Subscribe now for 20% off Christmas
//                       discount, receive a special welcome gift and be one of 100
//                       owners of these unique works.
//                     </span>
//                   </div>
//                   <div className="relative w-full max-w-sm">
//                     <input
//                       type="email"
//                       placeholder="Your email"
//                       className="w-full px-4 py-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
//                       style={{
//                         // @ts-ignore
//                         "&::placeholder": { color: "#a0aec0" },
//                       }}
//                     />
//                     <motion.span
//                       className="absolute top-1/2 right-3 -translate-y-1/2  pointer-events-none"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         delay: 0.2,
//                         duration: 0.2,
//                         ease: "easeOut",
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="1.5"
//                         stroke="currentColor"
//                         className="w-5 h-5 text-gray-400"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V9m0 9v3"
//                         />
//                       </svg>
//                     </motion.span>
//                   </div>
//                 </div>
//               </ModalContent>
//               <ModalFooter className="gap-4">
//                 <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
//                   Claim Now
//                 </button>
//               </ModalFooter>
//             </ModalBody>
//           </Modal>
//         </div>

//         {/* Bottom Image (displayed on both mobile and desktop, centered) */}
//         <div className="relative w-full top-0 flex justify-center z-10">
//           <Image
//             src={mobileBanner}
//             alt="Mobile banner"
//             width={800}
//             height={302}
//             className="relative"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// const PlaneIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
//     </svg>
//   );
// };

// const VacationIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
//       <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
//       <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
//       <path d="M15 9l-3 5.196" />
//       <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
//     </svg>
//   );
// };

// const ElevatorIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
//       <path d="M10 10l2 -2l2 2" />
//       <path d="M10 14l2 2l2 -2" />
//     </svg>
//   );
// };

// const FoodIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
//     </svg>
//   );
// };

// const MicIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
//       <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
//     </svg>
//   );
// };

// const ParachuteIcon = ({ className }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M22 12a10 10 0 1 0 -20 0" />
//       <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
//       <path d="M2 12l10 10l-3.5 -10" />
//       <path d="M15.5 12l-3.5 10l10 -10" />
//     </svg>
//   );
// };
