// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";
// import { Lobster } from "@next/font/google";
// import AuthButton from "./AuthButton";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const poppins = Poppins({
//   weight: "200",
//   subsets: ["latin"],
// });
// const lobster = Lobster({
//   weight: "400",
//   subsets: ["latin"],
// });

// const MobileNav = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar
//   const cartRef = useRef(null);
//   const menuRef = useRef(null);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

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

//   const handleFocus = () => {
//     setIsFocused(true);
//     setSearchResults([]);
//     if (!searchTerm) {
//       handleSearchChange({ target: { value: "" } });
//     }
//     console.log("focused", isFocused);
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     if (value) {
//       setLoading(true);
//       setTimeout(() => {
//         const results = Array.from(
//           { length: 5 },
//           (_, index) => `Test Result ${value} ${index + 1}`
//         );
//         setSearchResults(results);
//         setLoading(false);
//       }, 500);
//     } else {
//       setLoading(false);
//       setSearchResults([]);
//     }
//   };

//   const handleClose = () => {
//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMobileMenu();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuRef]);

//   const navItems = [
//     { text: "ALL PAINTING", url: "#" },
//     { text: "COLORFUL PAINTING", url: "#" },
//     { text: "BRIGHT PAINTING", url: "#" },
//     { text: "WARM TONE PAINTING", url: "#" },
//     { text: "INSPIRATION", url: "#" },
//     { text: "FOR DESIGNER", url: "#" },
//     { text: "ARTISTS", url: "#" },
//     { text: "REVIEWS", url: "#" },
//     { text: "ABOUT", url: "#" },
//   ];

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

//   const menuVariants = {
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
//       x: "-100%",
//       transition: { type: "tween", duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const listItemVariants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.2, ease: "easeOut" },
//     },
//     closed: {
//       y: 20,
//       opacity: 0,
//       transition: { duration: 0.2, ease: "easeOut" },
//     },
//   };
//   return (
//     <header
//       className={` bg-white
//        absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
//     >
//       <div className="container mx-auto px-4  flex justify-between items-center pb-2 relative">
//         {/* Mobile Menu Icon */}
//         {/* Logo */}
//         <div className="flex items-center justify-evenly ">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-700 focus:outline-none focus:text-gray-900 mr-10"
//             aria-controls="mobile-menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             <svg
//               className={`h-6 w-6 ${
//                 isSearchOpen ? "stroke-black" : "stroke-black"
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//             <span className="sr-only">
//               {isMobileMenuOpen ? "close menu" : "open menu"}
//             </span>
//           </button>
//           <Link href="/" className="flex-1 flex justify-center ml-20">
//             {/* ${lobster.className} */}
//             <span
//               className={`text-2xl font-bold ${
//                 isSearchOpen ? "text-black" : "text-black"
//               } font-bohemaz `}
//             >
//               Adulis
//             </span>
//           </Link>
//           {/* Mobile Icon Container */}
//           <div className="flex space-x-4 items-center m-6  ml-14 ">
//             <span className="flex items-center text-gray-700 hover:text-gray-900">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 className={`w-6 h-6 ${
//                   isSearchOpen ? "stroke-black" : "stroke-black"
//                 }`}
//                 onClick={() => setSearchOpen(!isSearchOpen)}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </span>
//             <span className="flex items-center text-gray-700 hover:text-gray-900 pl-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="24px"
//                 viewBox="0 -960 960 960"
//                 width="28px"
//                 className={`${isSearchOpen ? "fill-black" : "fill-black"}`}
//                 onClick={toggleCart} // Call toggleCart on click
//               >
//                 <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
//               </svg>{" "}
//             </span>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               ref={menuRef}
//               className="fixed top-0 left-0 h-[calc(100vh-20px)] bg-white z-[100] border-r border-gray-200 w-[80vw] p-6"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <button
//                   onClick={closeMobileMenu}
//                   className="text-gray-700 focus:outline-none focus:text-gray-900"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 <svg
//                   className="text-gray-700 focus:outline-none focus:text-gray-900"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M19.3333 10H0.666656"
//                     stroke="#1E293B"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M14 4L19.3333 10L14 16"
//                     stroke="#1E293B"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>

//               <ul className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <motion.li key={item.text} variants={listItemVariants}>
//                     <Link
//                       href={item.url}
//                       className="text-gray-700 text-lg py-2 border-b border-gray-200 hover:text-gray-900 transition-colors duration-200"
//                       onClick={closeMobileMenu}
//                     >
//                       {item.text}
//                     </Link>
//                   </motion.li>
//                 ))}
//                 <motion.div
//                   variants={listItemVariants}
//                   className="flex items-center text-gray-700 hover:text-gray-900 "
//                 >
//                   {/* <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6 mt-10"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                     />

//                   </svg> */}
//                   <br />
//                   <br />
//                   <br />
//                   <AuthButton yes={true} />

//                   {/* <span className="ml-2 mt-10">LOGIN</span> */}
//                 </motion.div>
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* Cart Sidebar */}
//         <AnimatePresence>
//           {isCartOpen && (
//             <motion.div
//               ref={cartRef}
//               className="fixed top-0 right-0 h-full bg-white z-[100] border-l border-gray-200 w-[80vw] p-6  flex flex-col"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={sidebarVariants}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <button
//                   onClick={closeCart}
//                   className="text-gray-700 focus:outline-none focus:text-gray-900"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="flex-1 flex flex-col items-center justify-center ">
//                 <h2
//                   className={`text-2xl font-semibold mb-4 ${lexend.className}`}
//                 >
//                   No Arts
//                 </h2>
//                 <p
//                   className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//                 >
//                   Surprise me with art that makes me feel fancy!
//                 </p>
//                 <Image
//                   src="/images/emptycart.webp" // Replace with the actual path to your empty cart image
//                   alt="Empty Cart"
//                   width={200}
//                   height={200}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               key="search"
//               className="absolute inset-x-0 top-full z-[99] bg-white border-t border-gray-200 px-4 py-2"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2, ease: "easeOut" }}
//             >
//               <div className="relative flex items-center w-full">
//                 <span className="absolute left-4  pointer-events-none">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   ref={inputRef}
//                   onFocus={handleFocus}
//                   onChange={handleSearchChange}
//                   className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none"
//                   type="search"
//                   placeholder="Search..."
//                   autoFocus={false}
//                 />
//               </div>
//               {searchResults.length > 0 && (
//                 <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                   <ul className="text-tiny">
//                     {searchResults.map((result, index) => (
//                       <li key={index} className="py-1 px-4 hover:bg-gray-100">
//                         {result}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };

// export default MobileNav;
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Lexend } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Lobster } from "@next/font/google";
import AuthButton from "./AuthButton";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const MobileNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar
  const cartRef = useRef(null);
  const menuRef = useRef(null);
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

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

  const handleFocus = () => {
    setIsFocused(true);
    setSearchResults([]);
    if (!searchTerm) {
      handleSearchChange({ target: { value: "" } });
    }
    console.log("focused", isFocused);
  };

  const handleSearchChange = (e) => {
    console.log("search term");
  };

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const navItems = [
    { text: "HOME", url: "/" },
    { text: "EXPLORE ARTS", url: "/products" },
    { text: "ABOUT US", url: "/about-us" },
    { text: "PRICING", url: "/#pricing" },
    { text: "FEATURES", url: "/#features" },
    { text: "FAQs", url: "/#faq" },
    { text: "CONTACT", url: "/#footer" },
  ];

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

  const menuVariants = {
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
      x: "-100%",
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
  };

  const getImagePath = (path) => {
    const parts = path.split("/");
    const lastPart = parts[parts.length - 1];
    return `/images/${lastPart}.webp`;
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };
  return (
    <header
      className={`${isSearchOpen ? "bg-white" : "bg-white "} ${
        pathname.startsWith("/pr") || pathname.startsWith("col")
          ? "text-black"
          : "text-white"
      } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
    >
      <div className="container mx-auto px-4  flex justify-between items-center pb-2 relative">
        {/* Mobile Menu Icon */}
        {/* Logo */}
        <div className="flex items-center justify-evenly ">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900 mr-10"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`h-6 w-6 ${
                isSearchOpen ? "stroke-black" : "stroke-white"
              } ${
                pathname.startsWith("/pr") || pathname.startsWith("col")
                  ? "stroke-black"
                  : "stroke-white"
              } `}
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">
              {isMobileMenuOpen ? "close menu" : "open menu"}
            </span>
          </button>
          <Link href="/" className="flex-1 flex justify-center ml-20">
            {/* ${lobster.className} */}
            <span
              className={`text-2xl font-bold ${
                isSearchOpen ? "text-black" : "text-white"
              } font-bohemaz  ${
                pathname.startsWith("/pr") || pathname.startsWith("col")
                  ? "text-orange-500"
                  : "text-white"
              } `}
            >
              Adulis
            </span>
          </Link>
          {/* Mobile Icon Container */}
          <div className="flex space-x-4 items-center m-6  ml-14 ">
            <span className="flex items-center text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className={`w-6 h-6 ${
                  isSearchOpen ? "stroke-black" : "stroke-white"
                }  ${
                  pathname.startsWith("/pr") || pathname.startsWith("col")
                    ? "stroke-black"
                    : "stroke-white"
                }`}
                onClick={() => setSearchOpen(!isSearchOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
            <span className="flex items-center text-gray-700 hover:text-gray-900 pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="28px"
                className={`${isSearchOpen ? "fill-black" : "fill-white"}  ${
                  pathname.startsWith("/pr") || pathname.startsWith("col")
                    ? "fill-black"
                    : "fill-white"
                }`}
                onClick={toggleCart} // Call toggleCart on click
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>{" "}
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 left-0 h-[calc(100vh-20px)] bg-white z-[100] border-r border-gray-200 w-[80vw] p-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={closeMobileMenu}
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
                <svg
                  className="text-gray-700 focus:outline-none focus:text-gray-900"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3333 10H0.666656"
                    stroke="#1E293B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4L19.3333 10L14 16"
                    stroke="#1E293B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.li key={item.text} variants={listItemVariants}>
                    <Link
                      href={item.url}
                      className="text-gray-700 text-lg py-0 border-b border-gray-200 hover:text-gray-900 transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
                <motion.div
                  variants={listItemVariants}
                  className="flex items-center text-gray-700 hover:text-gray-900 "
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />

                  </svg> */}
                  <br />
                  <br />
                  <br />
                  {/* <AuthButton yes={true} /> */}

                  {/* <span className="ml-2 mt-10">LOGIN</span> */}
                </motion.div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Cart Sidebar */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              ref={cartRef}
              className="fixed top-0 right-0 h-full bg-white z-[100] border-l border-gray-200 w-[80vw] p-6  flex flex-col"
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
                        <h4
                          className={` font-semibold mb-2 ${lexend.className}`}
                        >
                          {item.pathname.split("/").pop() === "1"
                            ? "Sacred Procession"
                            : item.pathname.split("/").pop() === "2"
                            ? "Ethiopia as the Mother of Africa"
                            : "The Journey for Water "}{" "}
                        </h4>
                        <h5 className={`  mb-2 ${poppins.className}`}>
                          {"$" + item.amountOfMoney}
                        </h5>
                        <p className={`  mb-2 ${poppins.className}`}>
                          {item.selectedSize}
                        </p>
                        <p className={`  mb-2 ${poppins.className}`}>
                          {item.selectedSize}
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
                      href={`/products/${cartItems[0].pathname
                        .split("/")
                        .pop()}`}
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
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              key="search"
              className="absolute inset-x-0 top-full z-[99] bg-white border-t border-gray-200 px-4 py-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="relative flex items-center w-full">
                <span className="absolute left-4  pointer-events-none">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  onFocus={handleFocus}
                  onChange={handleSearchChange}
                  className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none"
                  type="search"
                  placeholder="Search..."
                  autoFocus={false}
                />
              </div>
              {searchResults.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
                  <ul className="text-tiny">
                    {searchResults.map((result, index) => (
                      <li key={index} className="py-1 px-4 hover:bg-gray-100">
                        {/* {result} */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default MobileNav;
