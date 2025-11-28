
"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Image from "next/image";
import { Lexend } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Lobster } from "@next/font/google";
import DesktopCart from "./DesktopCart2";
import {
  Menu,
  MenuItem,
  HoveredLink,
  ProductItem,
} from "@/components/ui/navbar-menu2";
import { cn } from "@/lib/utils";
import AuthButton from "./AuthButton2";
import { debounce } from "lodash";

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
    const handleMouseMove = (e) => {
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
  const [showSkeleton, setShowSkeleton] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Popover open state
  const [isFocused, setIsFocused] = useState(false); // Track if search input is focused
  const inputRef = useRef(null);
  const [active, setActive] = useState<string | null>(null);
  const artists = [
    {
      id: 1,
      name: "Addis Ababa",
      avatar: "https://cdn.getyourguide.com/img/tour/62a17b3494038.jpeg/146.jpg",
      route: "https://en.wikipedia.org/wiki/Addis_Ababa",
      type: "Capital",
    },
    {
      id: 2,
      name: "Hawassa",
      avatar: "https://visitsidama.travel/wp-content/uploads/2021/06/Main-Hawassa.jpg",
      route: "https://en.wikipedia.org/wiki/Hawassa",
      type: "City",
    },
    {
      id: 3,
      name: "Bahir Dar",
      avatar: "https://www.odyssey-travels.com/site/park/bahir-dar=405132-300.jpg",
      route: "https://en.wikipedia.org/wiki/Bahir_Dar",
      type: "City",
    },
  ];

  const artworks = [
    {
      id: 1,
      name: "Studio",
      artistId: 1,
      avatar: "/img/studio.jpg",
      route: "/virtual-tour-studio",
      price: 499,
    },
    {
      id: 2,
      name: "Two bed room",
      artistId: 2,
      avatar: "https://images.squarespace-cdn.com/content/v1/608dcd7a649ed36adfe7c498/30b6f125-7ff6-4738-9455-551e4e4f0cb3/REALTY_STUDIOS_CA_MLS_READY-24.jpg",
      route: "/virtual-tour-2bedroom",
      price: 999,
    },
    {
      id: 3,
      name: "Three bed room",
      artistId: 3,
      avatar: "https://i.pinimg.com/originals/c6/1e/36/c61e364b8a86179431863ac64eec47e2.jpg",
      route: "/virtual-tour-3bedroom",
      price: 1499,
    },
        {
      id: 4,
      name: "Special Apartment",
      artistId: 1,
      avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d6/3f/7f/front-elivation.jpg",
      route: "/virtual-tour-special",
      price: 2499,
    },
  ];
  const searchDelay = 1000;
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
      const e = { target: { value: "" } };
      handleSearchChange(e);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const debouncedSearch = debounce(() => {
      if (value) {
        setIsPopoverOpen(true);
        setShowSkeleton(true);
        setLoading(true);

        const filteredArtists = artists.filter((artist) =>
          artist.name.toLowerCase().includes(value.toLowerCase())
        );
        const filteredArtworks = artworks.filter((artwork) =>
          artwork.name.toLowerCase().includes(value.toLowerCase())
        );

        setTimeout(() => {
          setSearchResults([...filteredArtworks, ...filteredArtists]);
          setLoading(false);
        }, 800);
      } else {
        setLoading(false);
        setSearchResults([]);
        setIsPopoverOpen(false);
        setShowSkeleton(false);
      }
    }, searchDelay);

    debouncedSearch();
  };

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const SkeletonLink = () => (
    <div className="h-3 bg-gray-200 rounded mb-0 w-32 animate-pulse"></div>
  );

  const SkeletonResult = () => (
    <div className="flex py-3 px-4  w-full gap-4">
      <div className="w-[120px] h-[120px] rounded-md bg-gray-200 animate-pulse"></div>
      <div className="flex flex-col flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      </div>
    </div>
  );
  return (
    <header
      className={`bg-white  top-12  hidden md:block absolute  left-0 right-0 z-10 transition-all duration-300 ease-in-out     ${
        isHovering ? "md:cursor-pointer" : "md:cursor-auto"
      }`}
      onClick={() => setIsPopoverOpen(false)} // Close popover on outside click
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed z-200 mb-0 pb-0"
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
      <div className="container mx-auto flex items-center justify-between px-4 bg-white">
        {/* Centered ARTISMORE */}
        <div className="flex items-center space-x-2">
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
            className={`text-5xl  text-orange-500  font-bohemaz`}
          >
            Acme
          </Link>
        </div>
        {/* Right-aligned Items */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center border border-gray-300 rounded px-2 py-1 pb-0 mb-0  focus:outline-none  hover:bg-gray-100"
            >
              <span className="text-black mr-1 ">
                <Image
                  src={"/images/us.png"}
                  alt="USA Flag"
                  width={30}
                  height={30}
                />
              </span>
              <span className="text-sm font-medium text-black ">USD</span>
              <svg
                className={`h-4 w-4 ml-1 transform fill-black   hover:bg-gray-100 ${
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
                <button className="block  w-full px-4 py-2 pb-0 mb-0 text-left text-gray-700 hover:bg-gray-100">
                  USD EN
                </button>
              </div>
            )}
          </div>
          <button
            className=" focus:outline-none  hover:bg-gray-300 "
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
              className="w-6 h-6 stroke-black"
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
          {/* <DesktopCart /> */}
          {/* </Link> */}
        </div>
      </div>
      <nav className="container mx-auto py-1 px-4 text-black -mb-12">
        {" "}
        <Menu setActive={setActive}>
          <Link
            href={"/"}
            className={` text-black group-hover:text-black rounded dark:bg-black/50 inline-block relative cursor-pointer ${lexend.className} before:bg-gray-800 hover:rounded-b-none before:absolute before:-bottom-2 before:left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100`}
          >
            <motion.p transition={{ duration: 0.3 }}>HOME</motion.p>
          </Link>

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
          <Link
            href={"/about-us"}
            className={` text-black group-hover:text-black rounded dark:bg-black/50 inline-block relative cursor-pointer ${lexend.className} before:bg-gray-800 hover:rounded-b-none before:absolute before:-bottom-2 before:left-0 before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100`}
          >
            <motion.p transition={{ duration: 0.3 }}>ABOUT US</motion.p>
          </Link>
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
              <HoveredLink href="/#footer" className={"hover:underline"}>
                Contact us
              </HoveredLink>
              <HoveredLink href="/about-us" className={"hover:underline"}>
                Who we are
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
            className="relative  items-center w-full px-4 border-t  mt-12 bg-transparent group-hover:bg-white flex group-hover:text-black text-white"
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
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none bg-transparent group-hover:bg-white group-hover:text-black text-black"
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
          <PopoverContent className="   overflow-y-auto ">
            {(titleProps) => (
              <div className="px-1 py-2 flex  ">
                {searchResults.length > 0 ? (
                  <div className="flex flex-col min-w-[180px] border-r border-gray-200 pr-2 mr-2">
                    <Link
                      href="/#faq"
                      className="block text-gray-700 hover:text-gray-900 py-1 text-sm"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/#footer"
                      className="block text-gray-700 hover:text-gray-900 py-1 text-sm"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/about-us"
                      className="block text-gray-700 hover:text-gray-900 py-1 text-sm"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/terms"
                      className="block text-gray-700 hover:text-gray-900 py-1 text-sm"
                    >
                      Terms and Services
                    </Link>
                    <Link
                      href="/privacy"
                      className="block text-gray-700 hover:text-gray-900 py-1 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                ) : null}
                <h3 className="text-small font-bold" {...titleProps}>
                  {loading ? (
                    <div className="space-y-2.5  max-w-lg w-[80vw] md:w-[50vw] flex">
                      <div className="flex flex-col min-w-[180px] border-r border-gray-200 pr-2 mr-2">
                        <SkeletonLink />
                        <SkeletonLink />
                        <SkeletonLink />
                      </div>
                      <div className="flex flex-col flex-1">
                        {[1, 2, 3].map((_, index) => (
                          <SkeletonResult key={index} />
                        ))}
                      </div>
                    </div>
                  ) : showSkeleton && searchResults.length === 0 ? (
                    <div className="text-center text-base  ">
                      Sorry nothing found for {'"'}
                      {searchTerm}
                      {'"'}
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="flex flex-col space-y-4 w-[80vw] md:w-[50vw] max-h-[500px] overflow-y-auto">
                      {searchResults.filter((result) => result.price).length >
                        0 && (
                        <h2
                          className={`font-bold text-lg  ${lexend.className}`}
                        >
                          Products
                        </h2>
                      )}
                      <div className="flex flex-col gap-4">
                        {searchResults
                          .filter((result) => result.price)
                          .map((result, index) => (
                            <Link
                              key={index}
                              href={result.route}
                              className="flex w-full gap-4"
                            >
                              {result.avatar && (
                                <Image
                                  src={result.avatar}
                                  alt={result.name}
                                  width={120}
                                  height={120}
                                  className={`object-cover rounded-md`}
                                />
                              )}

                              <div className="flex flex-col">
                                {result.name && (
                                  <span
                                    className={`font-bold text-base  ${lexend.className}`}
                                  >
                                    {result.name}
                                  </span>
                                )}
                                {result.price && (
                                  <>
                                    <span
                                      className={`text-sm  ${poppins.className}`}
                                    >
                                      {"$" + result.price}
                                    </span>
                                    <span
                                      className={`text-sm  ${poppins.className}`}
                                    >
                                      {`By: ${
                                        artists.find(
                                          (artist) =>
                                            artist.id === result.artistId
                                        )?.name
                                      } `}
                                    </span>
                                    <span
                                      className={`text-sm  ${poppins.className}`}
                                    >
                                      {`Acme`}
                                    </span>
                                  </>
                                )}
                              </div>
                            </Link>
                          ))}
                      </div>
                      {searchResults.filter((result) => !result.price).length >
                        0 && (
                        <h2
                          className={`font-bold text-lg  ${lexend.className}`}
                        >
                           
                        </h2>
                      )}
                      <div className="flex flex-col gap-4">
                        {searchResults
                          .filter((result) => !result.price)
                          .map((result, index) => (
                            <Link
                              key={index}
                              href={result.route}
                              className="flex w-full gap-4"
                            >
                              {result.avatar && (
                                <Image
                                  src={result.avatar}
                                  alt={result.name}
                                  width={120}
                                  height={120}
                                  className={`object-cover rounded-full`}
                                />
                              )}

                              <div className="flex flex-col">
                                {result.name && (
                                  <span
                                    className={`font-bold text-base  ${lexend.className}`}
                                  >
                                    {result.name}
                                  </span>
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
                          ))}
                      </div>
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
