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
//        className={`${
//         isSearchOpen ? "bg-white" : "bg-transparent"
//       } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
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
//                 isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 isSearchOpen ? "text-black" : "text-white"
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
//                   isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 className={`${isSearchOpen ? "fill-black" : "fill-white"}`}
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
//                   src="/images/emptycart.png" // Replace with the actual path to your empty cart image
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
// "use client";

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";
// import { Lobster } from "@next/font/google";
// import AuthButton from "./AuthButton";
// import { usePathname } from "next/navigation";
// import Cookies from "js-cookie";

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
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar
//   const cartRef = useRef(null);
//   const menuRef = useRef(null);
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") {
//       return [];
//     }
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
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
//     console.log("search term");
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
//     { text: "HOME", url: "/" },
//     { text: "EXPLORE ARTS", url: "/products" },
//     { text: "SUBSCRIPTION", url: "#" },
//     { text: "PRICING", url: "/#pricing" },
//     { text: "CONTACT", url: "/#footer" },
//     { text: "FAQs", url: "/#faq" },
//     { text: "TESTIMONIALS", url: "/#testimonials" },
//     { text: "FEATURES", url: "/#features" },
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

//   const getImagePath = (path) => {
//     const parts = path.split("/");
//     const lastPart = parts[parts.length - 1];
//     return `/images/${lastPart}.webp`;
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
//       className={`${
//         isSearchOpen ? "bg-white" : "bg-transparent"
//       } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
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
//                 isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 isSearchOpen ? "text-black" : "text-white"
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
//                   isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 className={`${isSearchOpen ? "fill-black" : "fill-white"}`}
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
//               {cartItems.length > 0 ? (
//                 <div className="flex-1 flex flex-col  overflow-y-auto ">
//                   {cartItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className="mb-4 p-2 rounded-md flex flex-row gap-4"
//                     >
//                       <Image
//                         src={`/images/${item.pathname.split("/").pop()}/1.jpg`}
//                         alt="Product Image"
//                         width={100}
//                         height={100}
//                       />

//                       <div>
//                         <h4
//                           className={` font-semibold mb-2 ${lexend.className}`}
//                         >
//                           {item.pathname.split("/").pop()}
//                         </h4>
//                         <h5 className={`  mb-2 ${poppins.className}`}>
//                           {"$" + item.amountOfMoney}
//                         </h5>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.selectedSize}
//                         </p>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.quantity + " X " + item.selectedSize}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-between gap-4">
//                     <div>
//                       {" "}
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         Taxes and shipping calculated at checkout
//                       </h5>
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         {" "}
//                         20% Off - 2024 Winter Big Sale!{" "}
//                       </h5>
//                     </div>
//                     <h5 className={`  mb-2 ${poppins.className}`}> </h5>
//                   </div>
//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-center gap-4">
//                     <button className=" px-4 py-3 rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 text-white font-semibold text-base">
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex-1 flex flex-col items-center justify-center ">
//                   <h2
//                     className={`text-2xl font-semibold mb-4 ${lexend.className}`}
//                   >
//                     No Arts
//                   </h2>
//                   <p
//                     className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//                   >
//                     Surprise me with art that makes me feel fancy!
//                   </p>
//                   <Image
//                     src="/images/emptycart.webp"
//                     alt="Empty Cart"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               )}
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
//                         {/* {result} */}
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
// "use client";

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";
// import { Lobster } from "@next/font/google";
// import AuthButton from "./AuthButton";
// import { usePathname } from "next/navigation";
// import Cookies from "js-cookie";

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
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const cartRef = useRef(null);
//   const menuRef = useRef(null);
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") {
//       return [];
//     }
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSkeleton, setShowSkeleton] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

//   const artists = [
//     {
//       id: 1,
//       name: "Asnake Melesse",
//       avatar: "/images/artist1/1.webp",
//       route: "/collections/1",
//       type: "Painter",
//     },
//     {
//       id: 2,
//       name: "Wendwesen Kebede",
//       avatar: "/images/artist2/1.webp",
//       route: "/collections/2",
//       type: "Artist",
//     },
//     {
//       id: 3,
//       name: "Robel Wolde",
//       avatar: "/images/artist3/1.webp",
//       route: "/collections/3",
//       type: "Painter",
//     },
//   ];

//   const artworks = [
//     {
//       id: 1,
//       name: "Art Number one",
//       artistId: 1,
//       avatar: "/images/1/1.jpg",
//       route: "/products/1",
//       price: 654,
//     },
//     {
//       id: 2,
//       name: "Art Number Two",
//       artistId: 2,
//       avatar: "/images/1/1.jpg",
//       route: "/products/2",
//       price: 623,
//     },
//     {
//       id: 3,
//       name: "Art Number Three",
//       artistId: 3,
//       avatar: "/images/1/1.jpg",
//       route: "/products/3",
//       price: 644,
//     },
//   ];

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
//     setLoading(true);
//     setShowSkeleton(false);
//     let timeoutId;
//     if (value) {
//       timeoutId = setTimeout(() => {
//         setShowSkeleton(true);
//         const filteredArtists = artists.filter((artist) =>
//           artist.name.toLowerCase().includes(value.toLowerCase())
//         );

//         const filteredArtworks = artworks.filter((artwork) =>
//           artwork.name.toLowerCase().includes(value.toLowerCase())
//         );

//         setTimeout(() => {
//           setSearchResults([...filteredArtists, ...filteredArtworks]);
//           setLoading(false);
//         }, 800);
//       }, 2500);
//     } else {
//       setLoading(false);
//       setSearchResults([]);
//       setShowSkeleton(false);
//     }
//     return () => clearTimeout(timeoutId);
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
//     { text: "HOME", url: "/" },
//     { text: "EXPLORE ARTS", url: "/products" },
//     { text: "SUBSCRIPTION", url: "#" },
//     { text: "PRICING", url: "/#pricing" },
//     { text: "CONTACT", url: "/#footer" },
//     { text: "FAQs", url: "/#faq" },
//     { text: "TESTIMONIALS", url: "/#testimonials" },
//     { text: "FEATURES", url: "/#features" },
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

//   const getImagePath = (path) => {
//     const parts = path.split("/");
//     const lastPart = parts[parts.length - 1];
//     return `/images/${lastPart}.webp`;
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
//   const SkeletonResult = () => (
//     <div className="flex items-center space-x-4 py-2 px-4">
//       <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
//       <div className="flex-1 space-y-2">
//         <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
//       </div>
//     </div>
//   );
//   return (
//     <header
//       className={`${
//         isSearchOpen ? "bg-white" : "bg-transparent"
//       } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
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
//                 isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 isSearchOpen ? "text-black" : "text-white"
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
//                   isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 className={`${isSearchOpen ? "fill-black" : "fill-white"}`}
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
//               {cartItems.length > 0 ? (
//                 <div className="flex-1 flex flex-col  overflow-y-auto ">
//                   {cartItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className="mb-4 p-2 rounded-md flex flex-row gap-4"
//                     >
//                       <Image
//                         src={`/images/${item.pathname.split("/").pop()}/1.jpg`}
//                         alt="Product Image"
//                         width={100}
//                         height={100}
//                       />

//                       <div>
//                         <h4
//                           className={` font-semibold mb-2 ${lexend.className}`}
//                         >
//                           {item.pathname.split("/").pop()}
//                         </h4>
//                         <h5 className={`  mb-2 ${poppins.className}`}>
//                           {"$" + item.amountOfMoney}
//                         </h5>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.selectedSize}
//                         </p>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.quantity + " X " + item.selectedSize}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-between gap-4">
//                     <div>
//                       {" "}
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         Taxes and shipping calculated at checkout
//                       </h5>
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         {" "}
//                         20% Off - 2024 Winter Big Sale!{" "}
//                       </h5>
//                     </div>
//                     <h5 className={`  mb-2 ${poppins.className}`}> </h5>
//                   </div>
//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-center gap-4">
//                     <button className=" px-4 py-3 rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 text-white font-semibold text-base">
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex-1 flex flex-col items-center justify-center ">
//                   <h2
//                     className={`text-2xl font-semibold mb-4 ${lexend.className}`}
//                   >
//                     No Arts
//                   </h2>
//                   <p
//                     className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//                   >
//                     Surprise me with art that makes me feel fancy!
//                   </p>
//                   <Image
//                     src="/images/emptycart.webp"
//                     alt="Empty Cart"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               )}
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
//               {loading ? (
//                 <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                   {[1, 2, 3].map((_, index) => (
//                     <SkeletonResult key={index} />
//                   ))}
//                 </div>
//               ) : (
//                 searchResults.length > 0 && (
//                   <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                     <ul className="text-tiny">
//                       {searchResults.map((result, index) => (
//                         <li key={index} className="py-1 px-4 hover:bg-gray-100">
//                           <Link
//                             href={result.route}
//                             className="flex items-center space-x-2"
//                           >
//                             <Image
//                               src={result.avatar}
//                               alt={result.name}
//                               width={30}
//                               height={30}
//                               className="rounded-full"
//                             />
//                             <span>{result.name}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };

// export default MobileNav;
// "use client";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";
// import { Lobster } from "@next/font/google";
// import AuthButton from "./AuthButton";
// import { usePathname } from "next/navigation";
// import Cookies from "js-cookie";

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
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const cartRef = useRef(null);
//   const menuRef = useRef(null);
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") {
//       return [];
//     }
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSkeleton, setShowSkeleton] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

//   const artists = [
//     {
//       id: 1,
//       name: "Asnake Melesse",
//       avatar: "/images/artist1/artist1.webp",
//       route: "/collections/1",
//       type: "Painter",
//     },
//     {
//       id: 2,
//       name: "Wendwesen Kebede",
//       avatar: "/images/artist2/artist2.webp",
//       route: "/collections/2",
//       type: "Artist",
//     },
//     {
//       id: 3,
//       name: "Robel Wolde",
//       avatar: "/images/artist3/artist3.webp",
//       route: "/collections/3",
//       type: "Painter",
//     },
//   ];

//   const artworks = [
//     {
//       id: 1,
//       name: "Art Number one",
//       artistId: 1,
//       avatar: "/images/1/1.jpg",
//       route: "/products/1",
//       price: 654,
//     },
//     {
//       id: 2,
//       name: "Art Number Two",
//       artistId: 2,
//       avatar: "/images/2/1.jpg",
//       route: "/products/2",
//       price: 623,
//     },
//     {
//       id: 3,
//       name: "Art Number Three",
//       artistId: 3,
//       avatar: "/images/3/1.jpg",
//       route: "/products/3",
//       price: 644,
//     },
//   ];
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
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setLoading(true);
//     setShowSkeleton(false);
//     let timeoutId;
//     if (value) {
//       timeoutId = setTimeout(() => {
//         setShowSkeleton(true);
//         const filteredArtists = artists.filter((artist) =>
//           artist.name.toLowerCase().includes(value.toLowerCase())
//         );

//         const filteredArtworks = artworks.filter((artwork) =>
//           artwork.name.toLowerCase().includes(value.toLowerCase())
//         );

//         setTimeout(() => {
//           setSearchResults([...filteredArtists, ...filteredArtworks]);
//           setLoading(false);
//         }, 800);
//       }, 2500);
//     } else {
//       setLoading(false);
//       setSearchResults([]);
//       setShowSkeleton(false);
//     }
//     return () => clearTimeout(timeoutId);
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
//     { text: "HOME", url: "/" },
//     { text: "EXPLORE ARTS", url: "/products" },
//     { text: "SUBSCRIPTION", url: "#" },
//     { text: "PRICING", url: "/#pricing" },
//     { text: "CONTACT", url: "/#footer" },
//     { text: "FAQs", url: "/#faq" },
//     { text: "TESTIMONIALS", url: "/#testimonials" },
//     { text: "FEATURES", url: "/#features" },
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

//   const getImagePath = (path) => {
//     const parts = path.split("/");
//     const lastPart = parts[parts.length - 1];
//     return `/images/${lastPart}.webp`;
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

//   const SkeletonResult = () => (
//     <div className="flex items-center space-x-4 py-2 px-4">
//       <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
//       <div className="flex-1 space-y-2">
//         <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
//       </div>
//     </div>
//   );

//   return (
//     <header
//       className={`${
//         isSearchOpen ? "bg-white" : "bg-transparent"
//       } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
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
//                 isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 isSearchOpen ? "text-black" : "text-white"
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
//                   isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 className={`${isSearchOpen ? "fill-black" : "fill-white"}`}
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
//               {cartItems.length > 0 ? (
//                 <div className="flex-1 flex flex-col  overflow-y-auto ">
//                   {cartItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className="mb-4 p-2 rounded-md flex flex-row gap-4"
//                     >
//                       <Image
//                         src={`/images/${item.pathname.split("/").pop()}/1.jpg`}
//                         alt="Product Image"
//                         width={100}
//                         height={100}
//                       />

//                       <div>
//                         <h4
//                           className={` font-semibold mb-2 ${lexend.className}`}
//                         >
//                           {item.pathname.split("/").pop()}
//                         </h4>
//                         <h5 className={`  mb-2 ${poppins.className}`}>
//                           {"$" + item.amountOfMoney}
//                         </h5>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.selectedSize}
//                         </p>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.quantity + " X " + item.selectedSize}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-between gap-4">
//                     <div>
//                       {" "}
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         Taxes and shipping calculated at checkout
//                       </h5>
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         {" "}
//                         20% Off - 2024 Winter Big Sale!{" "}
//                       </h5>
//                     </div>
//                     <h5 className={`  mb-2 ${poppins.className}`}> </h5>
//                   </div>
//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-center gap-4">
//                     <button className=" px-4 py-3 rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 text-white font-semibold text-base">
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex-1 flex flex-col items-center justify-center ">
//                   <h2
//                     className={`text-2xl font-semibold mb-4 ${lexend.className}`}
//                   >
//                     No Arts
//                   </h2>
//                   <p
//                     className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//                   >
//                     Surprise me with art that makes me feel fancy!
//                   </p>
//                   <Image
//                     src="/images/emptycart.webp"
//                     alt="Empty Cart"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               )}
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
//               {loading ? (
//                 <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                   {[1, 2, 3].map((_, index) => (
//                     <SkeletonResult key={index} />
//                   ))}
//                 </div>
//               ) : (
//                 searchResults.length > 0 && (
//                   <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                     <ul className="text-tiny">
//                       {searchResults.map((result, index) => (
//                         <li key={index} className="py-1 px-4 hover:bg-gray-100">
//                           <Link
//                             href={result.route}
//                             className="flex items-center space-x-2"
//                           >
//                             <Image
//                               src={result.avatar}
//                               alt={result.name}
//                               width={30}
//                               height={30}
//                               className={`object-cover ${
//                                 result.price ? "" : "rounded-full"
//                               }`}
//                             />
//                             <div className="flex flex-col">
//                               <span>{result.name}</span>
//                               {result.price && (
//                                 <>
//                                   <span className={`text-sm`}>
//                                     {"$" + result.price}
//                                   </span>
//                                   <span className={`text-sm`}>
//                                     {`By: ${
//                                       artists.find(
//                                         (artist) =>
//                                           artist.id === result.artistId
//                                       )?.name
//                                     } `}
//                                   </span>
//                                   <span className={`text-sm`}>{`Adulis`}</span>
//                                 </>
//                               )}
//                               {result.type && (
//                                 <span
//                                   className={`text-gray-500 text-xs ${poppins.className}`}
//                                 >
//                                   {result.type}
//                                 </span>
//                               )}
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// };

// export default MobileNav;
// "use client";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { Poppins } from "@next/font/google";
// import { Lobster } from "@next/font/google";
// import AuthButton from "./AuthButton";
// import { usePathname } from "next/navigation";
// import Cookies from "js-cookie";

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
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const cartRef = useRef(null);
//   const menuRef = useRef(null);
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") {
//       return [];
//     }
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSkeleton, setShowSkeleton] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

//   const artists = [
//     {
//       id: 1,
//       name: "Asnake Melesse",
//       avatar: "/images/artist1/artist1.webp",
//       route: "/collections/1",
//       type: "Painter",
//     },
//     {
//       id: 2,
//       name: "Wendwesen Kebede",
//       avatar: "/images/artist2/artist2.webp",
//       route: "/collections/2",
//       type: "Artist",
//     },
//     {
//       id: 3,
//       name: "Robel Wolde",
//       avatar: "/images/artist3/artist3.webp",
//       route: "/collections/3",
//       type: "Painter",
//     },
//   ];

//   const artworks = [
//     {
//       id: 1,
//       name: "Art Number one",
//       artistId: 1,
//       avatar: "/images/1/1.jpg",
//       route: "/products/1",
//       price: 654,
//     },
//     {
//       id: 2,
//       name: "Art Number Two",
//       artistId: 2,
//       avatar: "/images/2/1.jpg",
//       route: "/products/2",
//       price: 623,
//     },
//     {
//       id: 3,
//       name: "Art Number Three",
//       artistId: 3,
//       avatar: "/images/3/1.jpg",
//       route: "/products/3",
//       price: 644,
//     },
//   ];

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
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setLoading(true);
//     setShowSkeleton(false);
//     let timeoutId;
//     if (value) {
//       timeoutId = setTimeout(() => {
//         setShowSkeleton(true);
//         const filteredArtists = artists.filter((artist) =>
//           artist.name.toLowerCase().includes(value.toLowerCase())
//         );

//         const filteredArtworks = artworks.filter((artwork) =>
//           artwork.name.toLowerCase().includes(value.toLowerCase())
//         );

//         setTimeout(() => {
//           setSearchResults([...filteredArtists, ...filteredArtworks]);
//           setLoading(false);
//         }, 800);
//       }, 2500);
//     } else {
//       setLoading(false);
//       setSearchResults([]);
//       setShowSkeleton(false);
//     }
//     return () => clearTimeout(timeoutId);
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
//     { text: "HOME", url: "/" },
//     { text: "EXPLORE ARTS", url: "/products" },
//     { text: "SUBSCRIPTION", url: "#" },
//     { text: "PRICING", url: "/#pricing" },
//     { text: "CONTACT", url: "/#footer" },
//     { text: "FAQs", url: "/#faq" },
//     { text: "TESTIMONIALS", url: "/#testimonials" },
//     { text: "FEATURES", url: "/#features" },
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

//   const getImagePath = (path) => {
//     const parts = path.split("/");
//     const lastPart = parts[parts.length - 1];
//     return `/images/${lastPart}.webp`;
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

//   const SkeletonResult = () => (
//     <div className="flex items-center space-x-4 py-2 px-4">
//       <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
//       <div className="flex-1 space-y-2">
//         <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
//       </div>
//     </div>
//   );

//   return (
//     <header
//       className={`${
//         isSearchOpen ? "bg-white" : "bg-transparent"
//       } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
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
//                 isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 isSearchOpen ? "text-black" : "text-white"
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
//                   isSearchOpen ? "stroke-black" : "stroke-white"
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
//                 className={`${isSearchOpen ? "fill-black" : "fill-white"}`}
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
//               {cartItems.length > 0 ? (
//                 <div className="flex-1 flex flex-col  overflow-y-auto ">
//                   {cartItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className="mb-4 p-2 rounded-md flex flex-row gap-4"
//                     >
//                       <Image
//                         src={`/images/${item.pathname.split("/").pop()}/1.jpg`}
//                         alt="Product Image"
//                         width={100}
//                         height={100}
//                       />

//                       <div>
//                         <h4
//                           className={` font-semibold mb-2 ${lexend.className}`}
//                         >
//                           {item.pathname.split("/").pop()}
//                         </h4>
//                         <h5 className={`  mb-2 ${poppins.className}`}>
//                           {"$" + item.amountOfMoney}
//                         </h5>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.selectedSize}
//                         </p>
//                         <p className={`  mb-2 ${poppins.className}`}>
//                           {item.quantity + " X " + item.selectedSize}
//                         </p>
//                       </div>
//                     </div>
//                   ))}

//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-between gap-4">
//                     <div>
//                       {" "}
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         Taxes and shipping calculated at checkout
//                       </h5>
//                       <h5 className={`  mb-2 ${poppins.className}`}>
//                         {" "}
//                         20% Off - 2024 Winter Big Sale!{" "}
//                       </h5>
//                     </div>
//                     <h5 className={`  mb-2 ${poppins.className}`}> </h5>
//                   </div>
//                   <div className="mb-4 p-2 rounded-md   flex flex-row  justify-center gap-4">
//                     <button className=" px-4 py-3 rounded bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-800 text-white font-semibold text-base">
//                       Checkout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex-1 flex flex-col items-center justify-center ">
//                   <h2
//                     className={`text-2xl font-semibold mb-4 ${lexend.className}`}
//                   >
//                     No Arts
//                   </h2>
//                   <p
//                     className={`text-gray-600 mb-6 text-center ${poppins.className}`}
//                   >
//                     Surprise me with art that makes me feel fancy!
//                   </p>
//                   <Image
//                     src="/images/emptycart.webp"
//                     alt="Empty Cart"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//               )}
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
//               {loading ? (
//                 <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                   {[1, 2, 3].map((_, index) => (
//                     <SkeletonResult key={index} />
//                   ))}
//                 </div>
//               ) : (
//                 searchResults.length > 0 && (
//                   <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
//                     <ul className="text-tiny">
//                       {searchResults.map((result, index) => (
//                         <li key={index} className="py-1 px-4 hover:bg-gray-100">
//                           <Link
//                             href={result.route}
//                             className="flex items-center space-x-2"
//                           >
//                             <Image
//                               src={result.avatar}
//                               alt={result.name}
//                               width={70}
//                               height={70}
//                               className={`object-cover ${
//                                 result.price ? "rounded-md" : "rounded-full"
//                               }`}
//                             />
//                             <div className="flex flex-col">
//                               <span>{result.name}</span>
//                               {result.price && (
//                                 <>
//                                   <span className={`text-sm`}>
//                                     {"$" + result.price}
//                                   </span>
//                                   <span className={`text-sm`}>
//                                     {`By: ${
//                                       artists.find(
//                                         (artist) =>
//                                           artist.id === result.artistId
//                                       )?.name
//                                     } `}
//                                   </span>
//                                   <span className={`text-sm`}>{`Adulis`}</span>
//                                 </>
//                               )}
//                               {result.type && (
//                                 <span
//                                   className={`text-gray-500 text-xs ${poppins.className}`}
//                                 >
//                                   {result.type}
//                                 </span>
//                               )}
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )
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

const MobileNav = ({ prodName }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
  const [suggestedTerm, setSuggestedTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const artists = [
    {
      id: 1,
      name: "Asnake Melesse",
      avatar: "/images/artist1/artist1.webp",
      route: "/collections/1",
      type: "Painter",
    },
    {
      id: 2,
      name: "Wendwesen Kebede",
      avatar: "/images/artist2/artist2.webp",
      route: "/collections/2",
      type: "Artist",
    },
    {
      id: 3,
      name: "Robel Wolde",
      avatar: "/images/artist3/artist3.webp",
      route: "/collections/3",
      type: "Painter",
    },
  ];

  const artworks = [
    {
      id: 1,
      name: "Sacred Procession",
      artistId: 1,
      avatar: "/images/1/1.webp",
      route: "/products/1",
      price: 654,
    },
    {
      id: 2,
      name: "Ethiopia as the Mother of Africa",
      artistId: 2,
      avatar: "/images/2/4.webp",
      route: "/products/2",
      price: 623,
    },
    {
      id: 3,
      name: "The Journey for Water",
      artistId: 3,
      avatar: "/images/3/1.webp",
      route: "/products/3",
      price: 644,
    },
  ];

  const calculateLevenshteinDistance = (a, b) => {
    if (!a || !b) return Infinity;
    const matrix = [];
    const lenA = a.length;
    const lenB = b.length;

    for (let i = 0; i <= lenA; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= lenB; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= lenA; i++) {
      for (let j = 1; j <= lenB; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + 1
          );
        }
      }
    }

    return matrix[lenA][lenB];
  };

  const findClosestMatch = (term) => {
    const allNames = [
      ...artists.map((artist) => artist.name),
      ...artworks.map((artwork) => artwork.name),
    ];

    if (!term) return "";

    let closestMatch = "";
    let minDistance = Infinity;

    for (const name of allNames) {
      const distance = calculateLevenshteinDistance(
        term.toLowerCase(),
        name.toLowerCase()
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestMatch = name;
      }
    }
    if (minDistance <= 3) {
      return closestMatch;
    } else {
      return "";
    }
  };
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
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoading(true);
    setShowSkeleton(false);
    let timeoutId;
    if (value) {
      timeoutId = setTimeout(() => {
        setShowSkeleton(true);
        const filteredArtists = artists.filter((artist) =>
          artist.name.toLowerCase().includes(value.toLowerCase())
        );

        const filteredArtworks = artworks.filter((artwork) =>
          artwork.name.toLowerCase().includes(value.toLowerCase())
        );

        setTimeout(() => {
          const results = [...filteredArtists, ...filteredArtworks];
          setSearchResults(results);
          setLoading(false);
          if (results.length === 0) {
            setSuggestedTerm(findClosestMatch(value));
          } else {
            setSuggestedTerm("");
          }
        }, 800);
      }, 2500);
    } else {
      setLoading(false);
      setSearchResults([]);
      setShowSkeleton(false);
      setSuggestedTerm("");
    }
    return () => clearTimeout(timeoutId);
  };

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const handleSuggestedTermClick = (term) => {
    if (inputRef.current) {
      inputRef.current.value = term;
      handleSearchChange({ target: { value: term } });
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

  const SkeletonResult = () => (
    <div className="flex items-center space-x-4 py-2 px-4">
      <div className="rounded-full bg-gray-200 w-12 h-12 animate-pulse"></div>
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <header
      className={`${
        isSearchOpen ? "bg-white" : "bg-white"
      } absolute  top-12 left-0 right-0 z-10 transition-all duration-300 ease-in-out  sm:hidden`}
    >
      <div className="container mx-auto px-4  flex justify-between items-center pb-2 relative">
        {/* Mobile Menu Icon */}
        {/* Logo */}
        {/* <div class="relative flex w-full">
          <div class="flex-start">
            <button>Left Button</button>
          </div>
          <div class="absolute left-1/2 -translate-x-1/2">
            <button>Center Button</button>
          </div>
          <div class="flex-end ml-auto">
            <button>Right Button</button>
          </div>
        </div> */}
        <div className=" relative flex w-full items-center mt-5">
          <div className="flex-start">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-gray-900 mr-10"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className={`h-6 w-6 ${
                  isSearchOpen ? "stroke-black" : "stroke-black"
                }`}
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
          </div>
          <Link href="/" className=" absolute left-1/2 -translate-x-1/2">
            {/* ${lobster.className} */}
            <span
              className={`text-2xl font-bold ${
                isSearchOpen ? "text-orange-500" : "text-orange-500"
              } font-bohemaz `}
            >
              Adulis
            </span>
          </Link>
          {/* Mobile Icon Container */}
          <div className="  flex  ml-auto space-x-4 ">
            <span className=" text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className={`w-6 h-6 ${
                  isSearchOpen ? "stroke-black" : "stroke-black"
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
            <span className=" text-gray-700 hover:text-gray-900 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="28px"
                className={`${isSearchOpen ? "fill-black" : "fill-black"} ${
                  pathname.startsWith("/products/") && "hidden"
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
                      className="text-gray-700 text-lg py-2 border-b border-gray-200 hover:text-gray-900 transition-colors duration-200"
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
                  <AuthButton yes={true} />

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
              {loading ? (
                <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
                  {[1, 2, 3].map((_, index) => (
                    <SkeletonResult key={index} />
                  ))}
                </div>
              ) : searchResults.length > 0 ? (
                <div className="mt-2 bg-white border border-gray-200 rounded shadow-md">
                  <ul className="text-tiny">
                    {searchResults.map((result, index) => (
                      <li key={index} className="py-1 px-4 hover:bg-gray-100">
                        <Link
                          href={result.route}
                          className="flex items-center space-x-2"
                        >
                          <Image
                            src={result.avatar}
                            alt={result.name}
                            width={70}
                            height={70}
                            className={`object-cover ${
                              result.price ? "rounded-md" : "rounded-full"
                            }`}
                          />
                          <div className="flex flex-col">
                            <span>{result.name}</span>
                            {result.price && (
                              <>
                                <span className={`text-sm`}>
                                  {"$" + result.price}
                                </span>
                                <span className={`text-sm`}>
                                  {`By: ${
                                    artists.find(
                                      (artist) => artist.id === result.artistId
                                    )?.name
                                  } `}
                                </span>
                                <span className={`text-sm`}>{`Adulis`}</span>
                              </>
                            )}
                            {result.type && (
                              <span
                                className={`text-gray-500 text-xs ${poppins.className}`}
                              >
                                {result.type}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                searchTerm &&
                !loading && (
                  <div className="mt-2 bg-white border border-gray-200 rounded shadow-md px-4 py-2">
                    <p>Nothing found for "{searchTerm}" </p>
                    {suggestedTerm && (
                      <div>
                        Did you mean{" "}
                        <button
                          onClick={() =>
                            handleSuggestedTermClick(suggestedTerm)
                          }
                          className="font-semibold underline"
                        >
                          {suggestedTerm}
                        </button>
                        ?
                      </div>
                    )}
                  </div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default MobileNav;
