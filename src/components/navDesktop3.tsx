"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Image from "next/image";
import { Lexend } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Lobster } from "@next/font/google";
import DesktopCart from "./DesktopCart";
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import AuthButton from "./AuthButton";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const poppins = Poppins({
  weight: "200", // Extra Light
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: "400", // Regular 400
  // style: "italic", // Italic style
  subsets: ["latin"],
});

const Header = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Popover open state
  const [isFocused, setIsFocused] = useState(false); // Track if search input is focused
  const inputRef = useRef(null);
  const [active, setActive] = useState<string | null>(null);
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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setSearchResults([]);
    if (!searchTerm) {
      handleSearchChange({ target: { value: "" } });
    }
  };

  const handleSearchChange = (e) => {
    alert("Search sad");
    setIsPopoverOpen((prev) => {
      if (prev === false && e.target.value !== "") return true;
      return false;
    });

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

  return (
    <header
      className={`bg-transparent py-0 top-12  hidden md:block absolute  left-0 right-0 z-10 transition-all duration-300 ease-in-out  hover:bg-white group  ${
        isHovering ? "md:cursor-none" : "md:cursor-auto"
      }`}
      onClick={() => setIsPopoverOpen(false)} // Close popover on outside click
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed z-200"
          style={{
            width: "50px",
            height: "50px",
            zIndex: 999,
            // backgroundImage: "url('/images/source.gif')",
            backgroundImage: "url('/images/R.png')",
            backgroundSize: "cover",
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
      <div className="container mx-auto flex items-center justify-between px-4 bg-transparent">
        {/* Centered ARTISMORE */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={"/images/adulis.png"}
              alt="USA Flag"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center ml-64">
          {/* <Image src="/images/adulis.png" alt="Logo" width={40} height={40} /> */}
          <Link
            href="/"
            // ${lobster.className}
            className={`text-5xl cursor-none  text-black font-bohemaz`}
          >
            Acme
          </Link>
        </div>
        {/* Right-aligned Items */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center border border-gray-300 rounded px-2 py-1 focus:outline-none cursor-none hover:bg-gray-100"
            >
              <span className="text-white mr-1 ">
                <Image
                  src={"/images/us.png"}
                  alt="USA Flag"
                  width={30}
                  height={30}
                />
              </span>
              <span className="text-sm font-medium  text-black">USD</span>
              <svg
                className={`h-4 w-4 ml-1 transform fill-black cursor-none hover:bg-gray-100 ${
                  showDropdown ? "rotate-180" : ""
                } transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
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
                <button className="block cursor-none w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                  USD EN
                </button>
              </div>
            )}
          </div>
          <button
            className=" focus:outline-none cursor-none hover:bg-gray-300 "
            onClick={() => {
              setSearchOpen(!searchOpen);
              setIsPopoverOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-black cursor-none "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <AuthButton />
          {/* <Link href="/cart" className=" focus:outline-none"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-6 h-6 stroke-white group-hover:stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.083a.75.75 0 00-.636-.751H6.553a.75.75 0 00-.636.751z"
              />
            </svg> */}
          {/* @ts-ignore */}
          <DesktopCart />
          {/* </Link> */}
        </div>
      </div>
      <nav className="container mx-auto py-2 px-4 text-black -mb-12">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="HOME">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#">Back to Home</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="ARTISTS">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title=" A Master of Ethiopian Spiritual Narratives"
                href="/collections/1"
                src="/images/artist1/artist1.webp"
                description="Asnake Melesse, born in 1978 in Addis Ababa, Ethiopia."
              />
              <ProductItem
                title="The Historian-Painter of Ethiopia"
                href="/collections/2"
                src="/images/artist2/artist2.webp"
                description="Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia."
              />
              <ProductItem
                title="Painting Ethiopia’s Soul"
                href="/collections/3"
                src="/images/artist3/artist3.webp"
                description="Robel Wolde, born on September 14, 1993, Addis Ababa, Ethiopia."
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="ABOUT US">
            <div className="flex flex-col space-y-4 text-sm text-black">
              <HoveredLink href="/about-us">About Us</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="SUBSCRIPTIONS">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#pricing">
                Subscribe to Adulis Pro
              </HoveredLink>
              <HoveredLink href="/#features">Subscription features</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="PRODUCTS">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Sacred Procession"
                href="/products/1"
                src="/images/2.jpg"
                description="By: Asnake Melesse, born in 1978 in Addis Ababa, Ethiopia."
              />
              <ProductItem
                title="Ethiopia as the Mother of Africa"
                href="/products/2"
                src="/images/11.jpg"
                description="By: Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia."
              />
              <ProductItem
                title="The Journey for Water"
                href="/products/3"
                src="/images/3.jpg"
                description="By: Ethiopian Artist."
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="CONTACT">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#footer">Contact Us</HoveredLink>
              <HoveredLink href="/#footer">
                Subscibe to our mailing list and get discounts
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>{" "}
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            key="search"
            variants={listItemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative  items-center w-full px-4 border-t  mt-12 bg-transparent  group-hover:bg-white group-hover:text-black text-white"
          >
            <span className="absolute left-4 pointer-events-none">
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
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none bg-transparent group-hover:bg-white group-hover:text-black text-white"
              type="search"
              placeholder="Search..."
              autoFocus={true}
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
              "bg-white shadow-lg",
              " shadow-default-200",
            ],
          }}
          placement="bottom-start"
          shouldCloseOnBlur={false}
          onOpenChange={(open) => {
            if (!open) {
              setIsPopoverOpen(false);
              handleClose();
            }
          }}
        >
          <PopoverTrigger>
            <div
              tabIndex={0}
              style={{ display: "inline-block", pointerEvents: "none" }}
            ></div>
          </PopoverTrigger>
          <PopoverContent>
            {(titleProps) => (
              <div className="px-1 py-2 max-h-96 overflow-y-auto">
                <h3 className="text-small font-bold" {...titleProps}>
                  {loading ? (
                    <div
                      role="status"
                      className="space-y-2.5 animate-pulse max-w-lg  "
                    >
                      <div className="flex items-center w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700dark:bg-gray-700  w-32"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-24"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center w-full max-w-[480px]">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700  w-24"></div>
                      </div>
                      <div className="flex items-center w-full max-w-[400px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700  w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center w-full max-w-[480px]">
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700  w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-24"></div>
                      </div>
                      <div className="flex items-center w-full max-w-[440px]">
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700  w-32"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700  w-24"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      </div>
                      <div className="flex items-center w-full max-w-[360px]">
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700  w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700  w-80"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full  dark:bg-gray-700 w-full"></div>
                        <br />
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
                </h3>
              </div>
            )}
          </PopoverContent>
        </Popover>
      }
    </header>
  );
};

export default Header;
