// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";

// const lexend = Lexend({ weight: "300", subsets: ["latin"] });
// const poppins = Poppins({
//   weight: "200",
//   subsets: ["latin"],
// });

// const DesktopCart = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const cartRef = useRef(null);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };
//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cartRef.current && !cartRef.current.contains(event.target)) {
//         closeCart();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [cartRef]);

//   const sidebarVariants = {
//     open: {
//       x: 0,
//       transition: {
//         type: "tween",
//         duration: 0.3,
//         ease: "easeOut",
//         delayChildren: 0.2,
//         staggerChildren: 0.05,
//       },
//     },
//     closed: {
//       x: "100%",
//       transition: { type: "tween", duration: 0.3, ease: "easeOut" },
//     },
//   };

//   return (
//     <div
//       className="relative z-500  "
//       style={{ cursor: "pointer", zIndex: 999 }}
//     >
//       {/* Cart Icon - assuming you'll style this as a clickable icon */}
//       <span
//         className="flex items-center text-gray-700 hover:text-gray-900 pl-1 cursor-none"
//         onClick={toggleCart}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="24px"
//           viewBox="0 -960 960 960"
//           width="28px"
//           className={` fill-white group-hover:fill-black `}
//         >
//           <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
//         </svg>{" "}
//       </span>
//       {/* Cart Sidebar */}
//       <AnimatePresence>
//         {isCartOpen && (
//           <motion.div
//             ref={cartRef}
//             className="fixed top-0 right-0 h-full bg-white  border-l border-gray-200 w-[30vw] p-6  flex flex-col"
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={sidebarVariants}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <button
//                 onClick={closeCart}
//                 className="text-gray-700 focus:outline-none focus:text-gray-900"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex-1 flex flex-col items-center justify-center ">
//               <h2 className={`text-2xl font-semibold mb-4 ${lexend.className}`}>
//                 No Arts
//               </h2>
//               <p
//                 className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//               >
//                 Surprise me with art that makes me feel fancy!
//               </p>
//               <Image
//                 src="/images/emptycart.png" // Replace with the actual path to your empty cart image
//                 alt="Empty Cart"
//                 width={200}
//                 height={200}
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default DesktopCart;
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Lexend } from "@next/font/google";
import { Poppins } from "@next/font/google";
import MyCartCheckout from "./addcart"; // Import your MyCartCheckout
import { usePathname } from "next/navigation"; // Import usePathname hook
import Cookies from "js-cookie"; // Import js-cookie
import Link from "next/link";

const lexend = Lexend({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
});

const DesktopCart = () => {
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const storedCart = Cookies.get("cart");
    try {
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
      console.error("Error parsing cart cookie:", e);
      Cookies.remove("cart");
      return [];
    }
  });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: "100%",
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
  };

  const getImagePath = (path) => {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];
    return `/images/${lastPart}/${lastPart}.webp`;
  };

  return (
    <div
      className="relative z-500  "
      style={{ cursor: "pointer", zIndex: 999 }}
    >
      {/* Cart Icon - assuming you'll style this as a clickable icon */}
      <span
        className="flex items-center text-gray-700 hover:text-gray-900 pl-1 cursor-none"
        onClick={toggleCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="28px"
          className={` fill-white group-hover:fill-black `}
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>{" "}
      </span>
      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            ref={cartRef}
            className="fixed top-0 right-0 h-full bg-white  border-l border-gray-200 w-[30vw] p-6  flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={closeCart}
                className="text-gray-700 focus:outline-none focus:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {cartItems.length > 0 ? (
              <div className="flex-1 flex flex-col  overflow-y-auto ">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-2 rounded-md flex flex-row gap-4"
                  >
                    <Image
                      src={`/images/${item.pathname.split("/").pop()}/1.webp`}
                      alt="Product Image"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h4 className={` font-semibold mb-2 ${lexend.className}`}>
                        {item.pathname.split("/").pop() === "1"
                          ? "Sacred Procession"
                          : item.pathname.split("/").pop() === "2"
                          ? "Ethiopia as the Mother of Africa"
                          : "The Journey for Water "}
                      </h4>
                      <h5 className={`  mb-2 ${poppins.className}`}>
                        {"$" + item.amountOfMoney}
                      </h5>
                      <p className={`  mb-2 ${poppins.className}`}>
                        {item.selectedSize}
                      </p>
                      <p className={`  mb-2 ${poppins.className}`}>
                        { "$" + item.amountOfMoney}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mb-4 p-2 rounded-md   flex flex-row  justify-between gap-4">
                  <div>
                    {" "}
                    <h5 className={`  mb-2 ${poppins.className}`}>
                      Taxes and shipping calculated at checkout
                    </h5>
                    <h5 className={`  mb-2 ${poppins.className}`}>
                      {" "}
                      20% Off - Limited Christmas Big Sale!{" "}
                    </h5>
                  </div>
                  <h5 className={`  mb-2 ${poppins.className}`}> </h5>
                </div>
                <div className="mb-4 p-2 rounded-md   flex flex-row  justify-center gap-4">
                  <Link
                    href={`/products/${cartItems[0].pathname.split("/").pop()}`}
                  >
                    <button className=" px-4 py-3 rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 text-white font-semibold text-base">
                      View and Checkout
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center ">
                <h2
                  className={`text-2xl font-semibold mb-4 ${lexend.className}`}
                >
                  No Arts
                </h2>
                <p
                  className={`text-gray-600 mb-6 text-center ${poppins.className}`}
                >
                  Surprise me with art that makes me feel fancy!
                </p>
                <Image
                  src="/images/emptycart.webp"
                  alt="Empty Cart"
                  width={200}
                  height={200}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesktopCart;
