"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Image from "next/image";
import { Lobster } from "@next/font/google";

const lobster = Lobster({
  weight: "400", // Regular 400
  // style: "italic", // Italic style
  subsets: ["latin"],
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHeaderHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHeaderHovered(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleFocus = () => {
    // setIsFocused(true);
    setIsPopoverOpen(true);
    setSearchResults([]);
    if (!searchTerm) {
      handleSearchChange({ target: { value: "" } });
    }
  };

  const handleSearchChange = (e) => {
    alert("Search term:xx ");
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      setLoading(true);
      setTimeout(() => {
        const results = Array.from(
          { length: 5 },
          (_, index) => `Result ${value} ${index + 1}`
        );
        setSearchResults(results);
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
      setSearchResults([]);
    }
  };

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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

  const navItems = [
    { text: "ALL PAINTING", url: "/all-painting" },
    { text: "COLORFUL PAINTING", url: "/colorful-painting" },
    { text: "BRIGHT PAINTING", url: "/bright-painting" },
    { text: "WARM TONE PAINTING", url: "/warm-tone-painting" },
    { text: "INSPIRATION", url: "/inspiration" },
    { text: "FOR DESIGNER", url: "/for-designer" },
    { text: "ARTISTS", url: "/artists" },
    { text: "REVIEWS", url: "/reviews" },
    { text: "ABOUT", url: "/about-us" },
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: "-100%",
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-30 transition-colors duration-300 md:block ${
        isHeaderHovered ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsPopoverOpen((prev) => !prev)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div className="sm:hidden flex items-center justify-evenly">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900 mr-10"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
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
          <Link href="/" className="flex-1 flex justify-center">
            <span
              className={`text-2xl   ${
                isHeaderHovered ? "text-orange-600" : "text-white"
              } `}
            >
              <span className={lobster.className}> </span>
            </span>
          </Link>
          {/* Mobile Icon Container */}
          <div className="flex space-x-4 items-center m-6 -mr-10">
            <button className=" focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isHeaderHovered ? "currentColor" : "white"}
                className="w-6 h-6"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <span
              className={`flex items-center ${
                isHeaderHovered ? "text-gray-700" : "text-white"
              } hover:text-gray-900`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="28px"
                fill={isHeaderHovered ? "#070D0D" : "white"}
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>{" "}
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden sm:flex space-x-8 items-center justify-between w-full">
          {/* Centered ARTISMORE */}
          <div className="flex-grow flex items-center justify-center  ml-72">
            <Link
              href="/"
              className={`text-2xl font-bold  ${
                isHeaderHovered ? "text-orange-500" : "text-white"
              }`}
            >
              Acme
            </Link>
          </div>

          {/* Right-aligned Items */}
          <nav className="container mx-auto py-2 px-4 -mb-12">
            <ul className="flex justify-center space-x-6 text-sm">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="hover:text-gray-700 transition duration-200"
                >
                  <Link
                    href={item.url}
                    className={isHeaderHovered ? "text-black" : "text-white"}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex items-center border rounded px-2 py-1 focus:outline-none hover:bg-gray-100 ${
                  isHeaderHovered
                    ? "border-gray-300 text-black"
                    : "border-white text-white"
                }`}
              >
                <span className="mr-1">🇪🇹</span>
                <span className="text-sm font-medium">ETB BR</span>
                <svg
                  className={`h-4 w-4 ml-1 transform ${
                    showDropdown ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={isHeaderHovered ? "currentColor" : "white"}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md w-32 z-10">
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    ETB BR
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                    USD EN
                  </button>
                </div>
              )}
            </div>
            <button className=" focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isHeaderHovered ? "currentColor" : "white"}
                className="w-6 h-6"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <Link href="#" className=" focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isHeaderHovered ? "currentColor" : "white"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
            <Link href="/cart" className=" focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isHeaderHovered ? "currentColor" : "white"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.083a.75.75 0 00-.636-.751H6.553a.75.75 0 00-.636.751z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 left-0 h-full bg-white z-50 border-r border-gray-200 w-[80vw] sm:hidden p-6"
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
                  <svg
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
                  </svg>
                  <span className="ml-2 mt-10">LOGIN</span>
                </motion.div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            key="search"
            variants={listItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative flex items-center w-full  px-4 border-t  mt-12 bg-transparent  group-hover:bg-white group-hover:text-black text-white"
          >
            <span className="absolute left-4  pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isHeaderHovered ? "currentColor" : "black"}
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
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none bg-transparent group-hover:bg-white group-hover:text-black text-white"
              type="search"
              placeholder="Search..."
              autoFocus={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {
        <Popover
          isOpen={isPopoverOpen}
          showArrow
          backdrop="opaque"
          classNames={{
            base: ["before:bg-default-200"],
            content: [
              "py-3 px-4 border border-default-200",
              "bg-gradient-to-br from-white to-default-300",
              "",
            ],
          }}
          placement="bottom-start"
          //   onOpenChange={(open) => setIsPopoverOpen(!open)}
          shouldCloseOnBlur={false}
        >
          <PopoverTrigger>
            <div
              tabIndex={0}
              style={{ display: "inline-block", pointerEvents: "none" }}
            ></div>
          </PopoverTrigger>
          <PopoverContent>
            {(titleProps) => (
              <div className="px-1 py-2">
                <h3 className="text-small font-bold" {...titleProps}>
                  <div
                    role="status"
                    className="space-y-2.5 animate-pulse max-w-lg "
                  >
                    <div className="flex items-center w-full">
                      <div className="h-2.5 bg-gray-200 rounded-full  w-32"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[400px]">
                      <div className="h-2.5 bg-gray-300 rounded-full   w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[440px]">
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-32"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-24"></div>
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-full"></div>
                    </div>
                    <div className="flex items-center w-full max-w-[360px]">
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full  w-80"></div>
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full   w-full"></div>
                      <br />
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </h3>
                {loading ? (
                  <div
                    role="status"
                    className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse  md:p-6 "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : searchResults.length > 0 ? (
                  <ul className="text-tiny">
                    {searchResults.map((result, index) => (
                      <li key={index} className="py-1">
                        {result}
                      </li>
                    ))}
                  </ul>
                ) : !searchTerm && searchResults.length === 0 ? (
                  <div
                    role="status"
                    className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                  >
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 ">
                      <svg
                        className="w-10 h-10 text-gray-200 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : null}
              </div>
            )}
          </PopoverContent>
        </Popover>
      }
    </header>
  );
};

export default Navbar;
